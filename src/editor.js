import * as monaco from 'monaco-editor'
import { MonacoBinding } from 'y-monaco'
import * as Y from 'yjs'
import { Awareness } from 'y-protocols/awareness'

import JSONWorker from 'url:monaco-editor/esm/vs/language/json/json.worker.js'
import CSSWorker from 'url:monaco-editor/esm/vs/language/css/css.worker.js'
import HTMLWorker from 'url:monaco-editor/esm/vs/language/html/html.worker.js'
import TSWorker from 'url:monaco-editor/esm/vs/language/typescript/ts.worker.js'
import EditorWorker from 'url:monaco-editor/esm/vs/editor/editor.worker.js'

window.MonacoEnvironment = {
  getWorkerUrl(moduleId, label) {
    if (label === 'json') return JSONWorker
    if (label === 'css' || label === 'scss' || label === 'less') return CSSWorker
    if (label === 'html' || label === 'handlebars' || label === 'razor') return HTMLWorker
    if (label === 'typescript' || label === 'javascript') return TSWorker
    return EditorWorker
  },
}

// ─── Module state ─────────────────────────────────────────────────────────────
var editor = null

// ─── Helpers ──────────────────────────────────────────────────────────────────

function resolveTheme(cfg) {
  if (cfg.theme === 'vs-dark' || cfg.theme === 'vs-light') return cfg.theme
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? 'vs-dark'
    : 'vs-light'
}

function applyTheme(theme) {
  monaco.editor.setTheme(theme)
  document.body.classList.toggle('light', theme !== 'vs-dark')
}

// Deterministic hue from a string so each user gets a consistent cursor color
function stringToHue(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash) % 360
}

// ─── Language ─────────────────────────────────────────────────────────────────

function applyLanguage(lang) {
  const model = editor.getModel()
  if (model) monaco.editor.setModelLanguage(model, lang)
  document.getElementById('lang-badge').textContent = lang
  const sel = document.getElementById('lang-select')
  if (sel.querySelector(`option[value="${lang}"]`)) sel.value = lang
}

window.setLanguage = function (lang) {
  const cfg = Edrys.module.config || {}
  const sync = cfg.synchronize ?? true
  if (sync) {
    Edrys.updateState(() => {
      Edrys.getState(stateKey(cfg, 'language'), 'Value', lang)
    })
  }
  applyLanguage(lang)
}

function initLanguageSync(cfg, sync) {
  const showSelector = cfg.showLanguageSelector !== false
  const sel = document.getElementById('lang-select')
  const badge = document.getElementById('lang-badge')

  if ((Edrys.role === 'teacher' || Edrys.role === 'station') && showSelector) {
    sel.style.display = 'inline-block'
    badge.style.display = 'none'
  } else {
    sel.style.display = 'none'
    badge.style.display = 'inline-block'
  }

  if (!sync) return

  Edrys.onUpdate(() => {
    try {
      const sharedLang = Edrys.getState(stateKey(cfg, 'language'), 'Value')
      if (sharedLang && sharedLang !== editor.getModel()?.getLanguageId()) {
        applyLanguage(sharedLang)
      }
    } catch (_) {}
  })
}

// ─── Role-aware UI ────────────────────────────────────────────────────────────

function applyRoleUI(role, cfg) {
  const readOnly = cfg.readOnly === true
  const hasResetValue = !!cfg.value
  const isTeacher = role === 'teacher'
  const isStation = role === 'station'

  editor.updateOptions({ readOnly })

  const btnExecute = document.getElementById('btn-execute')
  btnExecute.style.display = readOnly ? 'none' : 'inline-block'

  const btnReset = document.getElementById('btn-reset')
  btnReset.style.display = ((isTeacher || isStation) && hasResetValue && !readOnly) ? 'inline-block' : 'none'
}

// ─── Sync initialization ──────────────────────────────────────────────────────

function stateKey(cfg, suffix) {
  const id = cfg.editorId || 'default'
  return `monaco-${id}-${suffix}`
}

function initSync(cfg) {
  const yText = Edrys.getState(stateKey(cfg, 'code'), 'Text')

  // Atomic initial insert: only the first peer to commit the transaction wins.
  Edrys.updateState(() => {
    const alreadyInit = Edrys.getState(stateKey(cfg, 'initialized'), 'Value')
    if (!alreadyInit) {
      Edrys.getState(stateKey(cfg, 'initialized'), 'Value', true)
      if (cfg.value) yText.insert(0, cfg.value)
    }
  })

  // Awareness for collaborative cursors — graceful fallback if unavailable.
  let awareness = null
  try {
    const localDoc = new Y.Doc()
    awareness = new Awareness(localDoc)
    const hue = stringToHue(Edrys.username || 'anon')
    awareness.setLocalStateField('user', {
      name: Edrys.username || 'anon',
      color: `hsl(${hue}, 70%, 55%)`,
      colorLight: `hsl(${hue}, 70%, 85%)`,
    })
  } catch (_) {
    awareness = null
  }

  new MonacoBinding(
    yText,
    editor.getModel(),
    new Set([editor]),
    awareness
  )

  // Sync indicator dot: green at rest, briefly orange on any CRDT change.
  const dot = document.getElementById('sync-dot')
  dot.style.display = 'block'
  let flashTimer = null
  yText.observe(() => {
    dot.classList.add('syncing')
    clearTimeout(flashTimer)
    flashTimer = setTimeout(() => dot.classList.remove('syncing'), 400)
  })
}

// ─── Public actions ───────────────────────────────────────────────────────────

window.execute = function () {
  if (!editor) return
  const selection = editor.getSelection()
  const code =
    selection && !selection.isEmpty()
      ? editor.getModel().getValueInRange(selection)
      : editor.getValue()
  Edrys.sendMessage(Edrys.module.config.runCommand || 'execute', code)
}

window.reset = function () {
  const cfg = Edrys.module.config || {}
  const resetValue = cfg.value || ''
  const sync = cfg.synchronize ?? true

  if (sync) {
    // yText.length is the authoritative CRDT length — not the Monaco model snapshot.
    Edrys.updateState(() => {
      const yText = Edrys.getState(stateKey(cfg, 'code'), 'Text')
      yText.delete(0, yText.length)
      yText.insert(0, resetValue)
    })
  } else {
    editor.setValue(resetValue)
  }
}

// ─── Entry point ──────────────────────────────────────────────────────────────

Edrys.onReady(() => {
  const cfg = Edrys.module.config || {}
  const lang = cfg.language || 'cpp'
  const theme = resolveTheme(cfg)
  const sync = cfg.synchronize ?? true

  editor = monaco.editor.create(document.getElementById('editor'), {
    value: '',
    language: lang,
    theme,
    readOnly: cfg.readOnly === true,
    automaticLayout: true,
    fontSize: 14,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    scrollbar: {
      vertical: 'visible',
      horizontal: 'auto',
      useShadows: false,
      verticalHasArrows: false,
      horizontalHasArrows: false,
      alwaysConsumeMouseWheel: false,
    },
  })

  applyTheme(theme)

  document.getElementById('lang-badge').textContent = lang
  const sel = document.getElementById('lang-select')
  if (sel.querySelector(`option[value="${lang}"]`)) sel.value = lang

  if (sync) {
    initSync(cfg)
  } else {
    editor.setValue(cfg.value || '')
    // In no-sync mode, language changes are local-only.
    window.setLanguage = function (l) { applyLanguage(l) }
  }

  applyRoleUI(Edrys.role, cfg)
  initLanguageSync(cfg, sync)
})
