import * as monaco from 'monaco-editor'
// Vendored y-monaco binding: upstream publishes cursor positions with assoc=0,
// which makes an end-of-text caret follow other peers' typing. See the PATCH
// comment in that file.
import { MonacoBinding } from './y-monaco-patched.js'

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

// Every boolean is opt-in (as `synchronize` in the other edrys modules):
// edrys's settings form saves `false` for each boolean the teacher leaves
// alone, so a default-true flag would be switched off by merely saving it.
const DEFAULTS = {
  value: '',
  runCommand: 'execute',
  language: 'cpp',
  theme: 'auto',
  synchronize: false,
  readOnly: false,
  showLanguageSelector: false,
  editorId: 'default',
}

let editor = null
let cfg = DEFAULTS // set in onReady

// `config` for everyone, then the role's own config (e.g. `studentConfig`).
// Edrys leaves a config that isn't JSON as a string, and the settings form
// saves blank fields as '': both fall back to the defaults.
function readConfig() {
  const given = (c) =>
    c && typeof c === 'object'
      ? Object.fromEntries(Object.entries(c).filter(([, v]) => v !== '' && v != null))
      : {}
  return {
    ...DEFAULTS,
    ...given(Edrys.module.config),
    ...given(Edrys.module[`${Edrys.role}Config`]),
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const darkScheme = window.matchMedia?.('(prefers-color-scheme: dark)')

// `auto` (or anything else) follows the device's light/dark setting.
function resolveTheme() {
  if (cfg.theme === 'vs-dark' || cfg.theme === 'vs-light') return cfg.theme
  return darkScheme?.matches ? 'vs-dark' : 'vs-light'
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

function cursorColors(name) {
  const hue = stringToHue(name)
  return { color: `hsl(${hue}, 70%, 55%)`, colorLight: `hsl(${hue}, 70%, 85%)` }
}

// Peer names are raw identities: a base64 ECDSA key with a `_xxxxx` session
// suffix, or a plain name for stations. Mirrors edrys's getShortPeerID() so the
// caret label matches the rooms list: first 4 key bytes as hex.
function shortPeerName(rawName) {
  const sepIdx = rawName.lastIndexOf('_')
  const base = sepIdx > 0 ? rawName.slice(0, sepIdx) : rawName
  // Only decode if it looks like a key; atob accepts text like "Station Foo"
  // and would turn it into hex gibberish.
  if (!/^[A-Za-z0-9+/]{40,}={0,2}$/.test(base)) return base.slice(0, 16)
  try {
    const bytes = Uint8Array.from(atob(base), (c) => c.charCodeAt(0))
    return Array.from(bytes.slice(0, 4))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
  } catch {
    // Not a key (e.g. "Station CxQGEp") — keep it readable.
    return base.slice(0, 16)
  }
}

// y-monaco tags decorations `yRemoteSelection-<clientID>` but never applies the
// peer's colour. Inject one rule set per client from its awareness `user.name`.
const cursorStyleEl = document.createElement('style')
document.head.appendChild(cursorStyleEl)
const styledClients = new Set()

function ensureCursorStyle(clientID, user) {
  // Latch only once `user` has arrived: awareness merges field-by-field, so
  // `selection` can land first and would pin the peer as unnamed forever.
  if (!user || styledClients.has(clientID)) return
  styledClients.add(clientID)
  // Awareness state is whatever the peer chose to publish, and these strings
  // land in CSS: derive the colour here and keep only plain name characters,
  // so a peer can't inject declarations (e.g. a tracking background-image).
  const rawName = String(user.name || 'anon')
  const { color, colorLight } = cursorColors(rawName)
  const name = shortPeerName(rawName).replace(/[^\w .-]/g, '') || 'anon'
  // !important: Monaco's theme rules outspecify these single-class selectors
  // and would leave every caret the default orange.
  const rules = [
    `.yRemoteSelection-${clientID} { background-color: ${colorLight} !important; }`,
    `.yRemoteSelectionHead-${clientID} { border-left-color: ${color} !important; }`,
    `.yRemoteSelectionHead-${clientID}::before { background-color: ${color} !important; content: "${name}" !important; }`,
  ]
  for (const rule of rules) {
    try {
      cursorStyleEl.sheet.insertRule(rule, cursorStyleEl.sheet.cssRules.length)
    } catch (e) {
      // A malformed name would otherwise abort the loop, unstyling the rest.
      console.warn('cursor style rule rejected:', rule, e)
    }
  }
}

// ─── Language ─────────────────────────────────────────────────────────────────

function applyLanguage(lang) {
  const model = editor.getModel()
  if (model) monaco.editor.setModelLanguage(model, lang)
  document.getElementById('lang-badge').textContent = lang
  const sel = document.getElementById('lang-select')
  if (sel.querySelector(`option[value="${lang}"]`)) sel.value = lang
}

// With synchronize, the choice goes to everyone in the room.
function setLanguage(lang) {
  if (cfg.synchronize === true) {
    Edrys.updateState(() => {
      Edrys.getState(stateKey('language'), 'Value', lang)
    })
  }
  applyLanguage(lang)
}

// Teachers and stations may get a selector; everyone else sees the language as text.
function initLanguageUI() {
  const canSelect = Edrys.role === 'teacher' || Edrys.role === 'station'
  const showSelector = canSelect && cfg.showLanguageSelector === true
  document.getElementById('lang-select').hidden = !showSelector
  document.getElementById('lang-badge').hidden = showSelector
}

// ─── Role-aware UI ────────────────────────────────────────────────────────────

function applyRoleUI() {
  const readOnly = cfg.readOnly === true
  const canReset = Edrys.role === 'teacher' || Edrys.role === 'station'

  document.getElementById('btn-execute').hidden = readOnly
  document.getElementById('btn-reset').hidden = !(canReset && cfg.value && !readOnly)
}

// Green: everyone in the room edits this code. Grey: each peer has its own copy.
// The label carries the state for tooltips and screen readers, not just colour.
function showSyncStatus(sync) {
  const dot = document.getElementById('sync-dot')
  const label = sync ? 'Shared: everyone in this room edits this code' : 'Local only: each person edits their own copy'
  dot.classList.toggle('local', !sync)
  dot.title = label
  dot.setAttribute('aria-label', label)
}

// ─── Sync initialization ──────────────────────────────────────────────────────

// Room state keys, one set per editorId: monaco-<editorId>-<suffix>
function stateKey(suffix) {
  return `monaco-${cfg.editorId}-${suffix}`
}

function initSync() {
  const codeKey = stateKey('code')
  const langKey = stateKey('language')
  const room = Edrys.getState()

  // Initial insert, skipped if a peer we have already synced with did it.
  Edrys.updateState(() => {
    const yText = Edrys.getState(codeKey, 'Text')
    const alreadyInit = Edrys.getState(stateKey('initialized'), 'Value')
    if (!alreadyInit) {
      Edrys.getState(stateKey('initialized'), 'Value', true)
      if (cfg.value) yText.insert(0, cfg.value)
    }
  })

  // Shared awareness for cursors — graceful fallback if unavailable.
  let awareness = null
  try {
    awareness = Edrys.getState(stateKey('cursors'), 'Awareness')
    // Only the name: every peer derives the caret colour from it.
    awareness.setLocalStateField('user', { name: Edrys.username || 'anon' })
  } catch (_) {
    awareness = null
  }

  // Style peers as their state arrives; 'change' covers those already present
  // at join as well as later arrivals.
  if (awareness) {
    const styleKnownClients = () => {
      awareness.getStates().forEach((state, clientID) => {
        ensureCursorStyle(clientID, state && state.user)
      })
    }
    awareness.on('change', styleKnownClients)
    styleKnownClients()
  }

  // Briefly orange when edits arrive from other peers (not our own typing).
  const dot = document.getElementById('sync-dot')
  let flashTimer = null
  const flash = (event) => {
    if (event.transaction.local) return
    dot.classList.add('syncing')
    clearTimeout(flashTimer)
    flashTimer = setTimeout(() => dot.classList.remove('syncing'), 400)
  }

  // The Y.Text under codeKey can be replaced: peers that open the editor
  // before seeing each other's state each create one, and Yjs keeps only one.
  // A binding left on a dropped Y.Text would neither send nor receive edits,
  // so bind to whatever the room holds and rebind when that changes.
  let yText = null
  let binding = null
  const bind = () => {
    const current = Edrys.getState(codeKey, 'Text')
    if (current === yText) return
    if (binding) {
      binding.destroy()
      yText.unobserve(flash)
    }
    yText = current
    binding = new MonacoBinding(yText, editor.getModel(), new Set([editor]), awareness)
    yText.observe(flash)
  }
  bind()

  // Read now as well: a late joiner gets no change event for a language the
  // teacher picked before it arrived.
  const applySharedLanguage = () => {
    const lang = Edrys.getState(langKey, 'Value')
    if (lang && lang !== editor.getModel()?.getLanguageId()) applyLanguage(lang)
  }
  applySharedLanguage()

  room.observe((event) => {
    if (event.keysChanged.has(codeKey)) bind()
    if (event.keysChanged.has(langKey)) applySharedLanguage()
  })
}

// ─── Actions ──────────────────────────────────────────────────────────────────

// Sends the selection, or all code, to the modules listening on runCommand.
function execute() {
  const selection = editor.getSelection()
  const code =
    selection && !selection.isEmpty()
      ? editor.getModel().getValueInRange(selection)
      : editor.getValue()
  Edrys.sendMessage(cfg.runCommand, code)
}

function reset() {
  if (cfg.synchronize === true) {
    // yText.length is the authoritative CRDT length — not the Monaco model snapshot.
    Edrys.updateState(() => {
      const yText = Edrys.getState(stateKey('code'), 'Text')
      yText.delete(0, yText.length)
      yText.insert(0, cfg.value)
    })
  } else {
    editor.setValue(cfg.value)
  }
}

// ─── Entry point ──────────────────────────────────────────────────────────────

Edrys.onReady(() => {
  cfg = readConfig()
  const theme = resolveTheme()

  editor = monaco.editor.create(document.getElementById('editor'), {
    value: '',
    language: cfg.language,
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
  // auto: keep following the device when its light/dark setting changes
  if (theme !== cfg.theme) {
    darkScheme?.addEventListener('change', () => applyTheme(resolveTheme()))
  }

  applyLanguage(cfg.language)

  if (cfg.synchronize === true) {
    initSync()
  } else {
    // Local only: every peer edits its own copy (setLanguage stays local too).
    editor.setValue(cfg.value)
  }

  showSyncStatus(cfg.synchronize === true)
  applyRoleUI()
  initLanguageUI()

  document.getElementById('btn-execute').addEventListener('click', execute)
  document.getElementById('btn-reset').addEventListener('click', reset)
  document.getElementById('lang-select').addEventListener('change', (e) => setLanguage(e.target.value))
})
