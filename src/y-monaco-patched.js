import * as Y from 'yjs'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as error from 'lib0/error'
import { createMutex } from 'lib0/mutex'
import { Awareness } from 'y-protocols/awareness' // eslint-disable-line

class RelativeSelection {
  /**
   * @param {Y.RelativePosition} start
   * @param {Y.RelativePosition} end
   * @param {monaco.SelectionDirection} direction
   */
  constructor (start, end, direction) {
    this.start = start
    this.end = end
    this.direction = direction
  }
}

/**
 * @param {monaco.editor.IStandaloneCodeEditor} editor
 * @param {monaco.editor.ITextModel} monacoModel
 * @param {Y.Text} type
 */
const createRelativeSelection = (editor, monacoModel, type) => {
  const sel = editor.getSelection()
  if (sel !== null) {
    const startPos = sel.getStartPosition()
    const endPos = sel.getEndPosition()
    // PATCH vs upstream 0.1.6: assoc=-1, same reason as the awareness publish
    // below. This selection is saved before a remote edit and restored after via
    // setSelection(); with the default assoc=0 an end-of-text caret restores to
    // the NEW end, dragging the local caret along with whatever a peer appended
    // (and that restore then republishes the moved position).
    const start = Y.createRelativePositionFromTypeIndex(type, monacoModel.getOffsetAt(startPos), -1)
    const end = Y.createRelativePositionFromTypeIndex(type, monacoModel.getOffsetAt(endPos), -1)
    return new RelativeSelection(start, end, sel.getDirection())
  }
  return null
}

/**
 * @param {monaco.editor.IEditor} editor
 * @param {Y.Text} type
 * @param {RelativeSelection} relSel
 * @param {Y.Doc} doc
 * @return {null|monaco.Selection}
 */
const createMonacoSelectionFromRelativeSelection = (editor, type, relSel, doc) => {
  const start = Y.createAbsolutePositionFromRelativePosition(relSel.start, doc)
  const end = Y.createAbsolutePositionFromRelativePosition(relSel.end, doc)
  if (start !== null && end !== null && start.type === type && end.type === type) {
    const model = /** @type {monaco.editor.ITextModel} */ (editor.getModel())
    const startPos = model.getPositionAt(start.index)
    const endPos = model.getPositionAt(end.index)
    return monaco.Selection.createWithDirection(startPos.lineNumber, startPos.column, endPos.lineNumber, endPos.column, relSel.direction)
  }
  return null
}

export class MonacoBinding {
  /**
   * @param {Y.Text} ytext
   * @param {monaco.editor.ITextModel} monacoModel
   * @param {Set<monaco.editor.IStandaloneCodeEditor>} [editors]
   * @param {Awareness?} [awareness]
   */
  constructor (ytext, monacoModel, editors = new Set(), awareness = null) {
    this.doc = /** @type {Y.Doc} */ (ytext.doc)
    this.ytext = ytext
    this.monacoModel = monacoModel
    this.editors = editors
    this.mux = createMutex()
    /**
     * @type {Map<monaco.editor.IStandaloneCodeEditor, RelativeSelection>}
     */
    this._savedSelections = new Map()
    this._beforeTransaction = () => {
      this.mux(() => {
        this._savedSelections = new Map()
        editors.forEach(editor => {
          if (editor.getModel() === monacoModel) {
            const rsel = createRelativeSelection(editor, monacoModel, ytext)
            if (rsel !== null) {
              this._savedSelections.set(editor, rsel)
            }
          }
        })
      })
    }
    this.doc.on('beforeAllTransactions', this._beforeTransaction)
    this._decorations = new Map()
    this._rerenderDecorations = () => {
      editors.forEach(editor => {
        if (awareness && editor.getModel() === monacoModel) {
          // render decorations
          const currentDecorations = this._decorations.get(editor) || []
          /**
           * @type {Array<monaco.editor.IModelDeltaDecoration>}
           */
          const newDecorations = []
          awareness.getStates().forEach((state, clientID) => {
            if (clientID !== this.doc.clientID && state.selection != null && state.selection.anchor != null && state.selection.head != null) {
              const anchorAbs = Y.createAbsolutePositionFromRelativePosition(state.selection.anchor, this.doc)
              const headAbs = Y.createAbsolutePositionFromRelativePosition(state.selection.head, this.doc)
              if (anchorAbs !== null && headAbs !== null && anchorAbs.type === ytext && headAbs.type === ytext) {
                let start, end, afterContentClassName, beforeContentClassName
                if (anchorAbs.index < headAbs.index) {
                  start = monacoModel.getPositionAt(anchorAbs.index)
                  end = monacoModel.getPositionAt(headAbs.index)
                  afterContentClassName = 'yRemoteSelectionHead yRemoteSelectionHead-' + clientID
                  beforeContentClassName = null
                } else {
                  start = monacoModel.getPositionAt(headAbs.index)
                  end = monacoModel.getPositionAt(anchorAbs.index)
                  afterContentClassName = null
                  beforeContentClassName = 'yRemoteSelectionHead yRemoteSelectionHead-' + clientID
                }
                newDecorations.push({
                  range: new monaco.Range(start.lineNumber, start.column, end.lineNumber, end.column),
                  options: {
                    className: 'yRemoteSelection yRemoteSelection-' + clientID,
                    afterContentClassName,
                    beforeContentClassName
                  }
                })
              }
            }
          })
          this._decorations.set(editor, editor.deltaDecorations(currentDecorations, newDecorations))
        } else {
          // ignore decorations
          this._decorations.delete(editor)
        }
      })
    }
    /**
     * @param {Y.YTextEvent} event
     */
    this._ytextObserver = event => {
      this.mux(() => {
        let index = 0
        event.delta.forEach(op => {
          if (op.retain !== undefined) {
            index += op.retain
          } else if (op.insert !== undefined) {
            const pos = monacoModel.getPositionAt(index)
            const range = new monaco.Selection(pos.lineNumber, pos.column, pos.lineNumber, pos.column)
            const insert = /** @type {string} */ (op.insert)
            monacoModel.applyEdits([{ range, text: insert }])
            index += insert.length
          } else if (op.delete !== undefined) {
            const pos = monacoModel.getPositionAt(index)
            const endPos = monacoModel.getPositionAt(index + op.delete)
            const range = new monaco.Selection(pos.lineNumber, pos.column, endPos.lineNumber, endPos.column)
            monacoModel.applyEdits([{ range, text: '' }])
          } else {
            throw error.unexpectedCase()
          }
        })
        this._savedSelections.forEach((rsel, editor) => {
          const sel = createMonacoSelectionFromRelativeSelection(editor, ytext, rsel, this.doc)
          if (sel !== null) {
            editor.setSelection(sel)
          }
        })
      })
      this._rerenderDecorations()
    }
    ytext.observe(this._ytextObserver)
    {
      const ytextValue = ytext.toString()
      if (monacoModel.getValue() !== ytextValue) {
        monacoModel.setValue(ytextValue)
      }
    }
    this._monacoChangeHandler = monacoModel.onDidChangeContent(event => {
      // apply changes from right to left
      this.mux(() => {
        this.doc.transact(() => {
          event.changes.sort((change1, change2) => change2.rangeOffset - change1.rangeOffset).forEach(change => {
            ytext.delete(change.rangeOffset, change.rangeLength)
            ytext.insert(change.rangeOffset, change.text)
          })
        }, this)
      })
    })
    this._monacoDisposeHandler = monacoModel.onWillDispose(() => {
      this.destroy()
    })
    // PATCH vs upstream 0.1.6: keep the editor listeners so destroy() can
    // dispose them. Upstream leaks them, so a binding replaced by a new one
    // (editor.js rebinds when the shared Y.Text is swapped) kept publishing
    // carets for its dead Y.Text.
    this._editorDisposables = []
    if (awareness) {
      editors.forEach(editor => {
        // PATCH vs upstream 0.1.6: only a FOCUSED editor publishes a caret.
        // Upstream publishes on the first selection change and never clears it,
        // so a peer who once clicked into the editor kept a visible cursor in
        // everyone else's view forever — while reading, in another module, or
        // in another tab. Clearing on blur makes a remote caret mean "this peer
        // is editing here right now".
        const publishSelection = () => {
          if (editor.getModel() !== monacoModel) return
          if (!editor.hasTextFocus()) return
          const sel = editor.getSelection()
          if (sel === null) {
            return
          }
          let anchor = monacoModel.getOffsetAt(sel.getStartPosition())
          let head = monacoModel.getOffsetAt(sel.getEndPosition())
          if (sel.getDirection() === monaco.SelectionDirection.RTL) {
            const tmp = anchor
            anchor = head
            head = tmp
          }
          // PATCH vs upstream 0.1.6: assoc=-1 binds to the character on the
          // LEFT. With the default assoc=0 a caret at the end of the text has
          // nothing to its right, so it encodes as the degenerate "end of type"
          // position (item=null) that resolves to the current length forever —
          // an idle peer's caret then follows along as others append.
          awareness.setLocalStateField('selection', {
            anchor: Y.createRelativePositionFromTypeIndex(ytext, anchor, -1),
            head: Y.createRelativePositionFromTypeIndex(ytext, head, -1)
          })
        }

        this._editorDisposables.push(
          editor.onDidFocusEditorText(publishSelection),
          editor.onDidBlurEditorText(() => {
            if (editor.getModel() !== monacoModel) return
            awareness.setLocalStateField('selection', null)
          }),
          editor.onDidChangeCursorSelection(publishSelection)
        )
        awareness.on('change', this._rerenderDecorations)
      })
      this.awareness = awareness
    }
  }

  destroy () {
    this._monacoChangeHandler.dispose()
    this._monacoDisposeHandler.dispose()
    this.ytext.unobserve(this._ytextObserver)
    this.doc.off('beforeAllTransactions', this._beforeTransaction)
    this._editorDisposables.forEach(d => d.dispose())
    // PATCH: drop this binding's remote carets; a replacing binding draws its own.
    this._decorations.forEach((ids, editor) => editor.deltaDecorations(ids, []))
    if (this.awareness) {
      this.awareness.off('change', this._rerenderDecorations)
    }
  }
}
