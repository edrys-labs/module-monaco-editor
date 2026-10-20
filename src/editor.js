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

// The open files: one entry in single-file mode (name null), one per entry of
// `cfg.file` otherwise. Each has its own Monaco model; the one editor shows
// the active file's model.
let files = []
let active = null

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

// `file` ({ "main.cpp": "...", "util.h": "..." }, as in module-editor) turns
// on multi-file mode. Anything else — not an object, or no files — is ignored.
function configuredFiles() {
  const file = cfg.file
  if (!file || typeof file !== 'object' || Array.isArray(file)) return null
  const names = Object.keys(file)
  if (names.length === 0) return null
  return names.map((name) => ({ name, value: file[name] == null ? '' : String(file[name]) }))
}

const isMultiFile = () => files.length > 0 && files[0].name !== null

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

const EXTENSION_LANGUAGES = {
  c: 'c', h: 'cpp', cpp: 'cpp', cc: 'cpp', cxx: 'cpp', hpp: 'cpp', ino: 'cpp',
  py: 'python', js: 'javascript', mjs: 'javascript', ts: 'typescript',
  java: 'java', cs: 'csharp', go: 'go', rs: 'rust', sh: 'shell', sql: 'sql',
  html: 'html', css: 'css', json: 'json', yaml: 'yaml', yml: 'yaml',
  md: 'markdown', txt: 'plaintext',
}

// In multi-file mode each file's language follows its extension; files
// without a known one use the configured language.
function languageOf(name) {
  const ext = name.includes('.') ? name.split('.').pop().toLowerCase() : ''
  if (ext === 'h' && cfg.language === 'c') return 'c'
  return EXTENSION_LANGUAGES[ext] || cfg.language
}

function showLanguage(lang) {
  document.getElementById('lang-badge').textContent = lang
  const sel = document.getElementById('lang-select')
  if (sel.querySelector(`option[value="${lang}"]`)) sel.value = lang
}

// Single-file mode only: multi-file languages come from the file names.
function applyLanguage(lang) {
  monaco.editor.setModelLanguage(files[0].model, lang)
  showLanguage(lang)
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
  const showSelector = canSelect && cfg.showLanguageSelector === true && !isMultiFile()
  document.getElementById('lang-select').hidden = !showSelector
  document.getElementById('lang-badge').hidden = showSelector
}

// ─── Role-aware UI ────────────────────────────────────────────────────────────

function applyRoleUI() {
  const readOnly = cfg.readOnly === true
  const canReset = Edrys.role === 'teacher' || Edrys.role === 'station'

  document.getElementById('btn-execute').hidden = readOnly
  const hasValue = files.some((f) => f.value)
  document.getElementById('btn-reset').hidden = !(canReset && hasValue && !readOnly)
}

// ─── Files and tabs ───────────────────────────────────────────────────────────

function openFile(file) {
  if (file === active) return
  if (active) active.viewState = editor.saveViewState()
  active = file
  editor.setModel(file.model)
  if (file.viewState) editor.restoreViewState(file.viewState)
  if (isMultiFile()) {
    showLanguage(file.model.getLanguageId())
    for (const f of files) {
      f.tab.setAttribute('aria-selected', String(f === file))
      f.tab.tabIndex = f === file ? 0 : -1
    }
  }
}

function initTabs() {
  const bar = document.getElementById('tabs')
  for (const file of files) {
    const tab = document.createElement('button')
    tab.type = 'button'
    tab.setAttribute('role', 'tab')
    tab.textContent = file.name
    tab.title = file.name
    tab.addEventListener('click', () => {
      openFile(file)
      editor.focus()
    })
    file.tab = tab
    bar.appendChild(tab)
  }
  // Arrow keys move between tabs, as in a WAI-ARIA tablist.
  bar.addEventListener('keydown', (e) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key]
    if (!step) return
    const next = files[(files.indexOf(active) + step + files.length) % files.length]
    openFile(next)
    next.tab.focus()
  })
  bar.hidden = false
  document.body.classList.add('multi-file')
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

// The shared text of a file, and the flag that says it got its initial value.
// Single-file keys predate multi-file mode and stay as they were.
function textKey(file) {
  return file.name === null ? stateKey('code') : stateKey(`file:${file.name}`)
}
function initKey(file) {
  return file.name === null ? stateKey('initialized') : stateKey(`file:${file.name}:initialized`)
}

function initSync() {
  const langKey = stateKey('language')
  const room = Edrys.getState()

  // Initial insert, skipped if a peer we have already synced with did it. One
  // flag per file, so a file added to the config later still gets its value.
  Edrys.updateState(() => {
    for (const file of files) {
      const yText = Edrys.getState(textKey(file), 'Text')
      if (!Edrys.getState(initKey(file), 'Value')) {
        Edrys.getState(initKey(file), 'Value', true)
        if (file.value) yText.insert(0, file.value)
      }
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

  // A file's Y.Text can be replaced: peers that open the editor before seeing
  // each other's state each create one, and Yjs keeps only one. A binding left
  // on a dropped Y.Text would neither send nor receive edits, so bind to
  // whatever the room holds and rebind when that changes. Every file stays
  // bound, not only the open one; the binding draws carets only while its
  // model is shown.
  const bind = (file) => {
    const current = Edrys.getState(textKey(file), 'Text')
    if (current === file.yText) return
    if (file.binding) {
      file.binding.destroy()
      file.yText.unobserve(flash)
    }
    file.yText = current
    file.binding = new MonacoBinding(current, file.model, new Set([editor]), awareness)
    current.observe(flash)
  }
  files.forEach(bind)

  // Read now as well: a late joiner gets no change event for a language the
  // teacher picked before it arrived. Multi-file languages are not shared.
  const applySharedLanguage = () => {
    if (isMultiFile()) return
    const lang = Edrys.getState(langKey, 'Value')
    if (lang && lang !== files[0].model.getLanguageId()) applyLanguage(lang)
  }
  applySharedLanguage()

  room.observe((event) => {
    for (const file of files) {
      if (event.keysChanged.has(textKey(file))) bind(file)
    }
    if (event.keysChanged.has(langKey)) applySharedLanguage()
  })
}

// ─── Actions ──────────────────────────────────────────────────────────────────

// Sends the selection, or all code, to the modules listening on runCommand.
// Multi-file mode sends every file as {"file": {name: code}}, the format of
// module-editor that pyxtermjs, avr8js and micropython-simulator read.
function execute() {
  if (isMultiFile()) {
    const file = Object.fromEntries(files.map((f) => [f.name, f.model.getValue()]))
    Edrys.sendMessage(cfg.runCommand, JSON.stringify({ file }))
    return
  }
  const selection = editor.getSelection()
  const code =
    selection && !selection.isEmpty()
      ? editor.getModel().getValueInRange(selection)
      : editor.getValue()
  Edrys.sendMessage(cfg.runCommand, code)
}

// Restores every file to its configured code.
function reset() {
  if (cfg.synchronize === true) {
    // yText.length is the authoritative CRDT length — not the Monaco model snapshot.
    Edrys.updateState(() => {
      for (const file of files) {
        const yText = Edrys.getState(textKey(file), 'Text')
        yText.delete(0, yText.length)
        yText.insert(0, file.value)
      }
    })
  } else {
    for (const file of files) file.model.setValue(file.value)
  }
}

// ─── Entry point ──────────────────────────────────────────────────────────────

Edrys.onReady(() => {
  cfg = readConfig()
  const theme = resolveTheme()

  // Models start empty: with synchronize the shared text fills them.
  const sync = cfg.synchronize === true
  files = (configuredFiles() || [{ name: null, value: cfg.value }]).map((f) => ({
    ...f,
    model: monaco.editor.createModel(sync ? '' : f.value, f.name === null ? cfg.language : languageOf(f.name)),
  }))

  editor = monaco.editor.create(document.getElementById('editor'), {
    model: null,
    theme,
    readOnly: cfg.readOnly === true,
    automaticLayout: true,
    fontSize: 14,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    // Room for the peer name label, which floats above the caret on line 1.
    padding: { top: 16 },
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

  if (isMultiFile()) initTabs()
  else showLanguage(cfg.language)
  openFile(files[0])

  // Without synchronize every peer edits its own copy (setLanguage stays local too).
  if (sync) initSync()

  showSyncStatus(sync)
  applyRoleUI()
  initLanguageUI()

  document.getElementById('btn-execute').addEventListener('click', execute)
  document.getElementById('btn-reset').addEventListener('click', reset)
  document.getElementById('lang-select').addEventListener('change', (e) => setLanguage(e.target.value))
})
