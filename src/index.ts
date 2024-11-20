import * as monaco from 'monaco-editor'
import { MonacoBinding } from 'y-monaco'

window['createEditor'] = function (
  el: HTMLElement,
  yText: any,
  awareness: any
) {
  const editor = monaco.editor.create(el, {
    value: '',
    language: 'javascript',
    theme: 'vs-dark',
  })

  const monacoBinding = new MonacoBinding(
    yText,
    editor.getModel(),
    new Set([editor])
  )

  return editor
}
