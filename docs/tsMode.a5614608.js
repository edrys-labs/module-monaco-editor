
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("kTs4B", function(module, exports) {

$parcel$export(module.exports, "WorkerManager", () => $f35eb87b84b9f0af$export$bcff6015853c67ce);
$parcel$export(module.exports, "flattenDiagnosticMessageText", () => $f35eb87b84b9f0af$export$b0b6b56a806dc8a4);
$parcel$export(module.exports, "Adapter", () => $f35eb87b84b9f0af$export$906fdd6a257127ec);
$parcel$export(module.exports, "LibFiles", () => $f35eb87b84b9f0af$export$f8edc958c3ed0e8);
$parcel$export(module.exports, "DiagnosticsAdapter", () => $f35eb87b84b9f0af$export$8105b646adfa9bae);
$parcel$export(module.exports, "SuggestAdapter", () => $f35eb87b84b9f0af$export$60671a5a91f69992);
$parcel$export(module.exports, "Kind", () => $f35eb87b84b9f0af$export$a84bdc57c5122798);
$parcel$export(module.exports, "SignatureHelpAdapter", () => $f35eb87b84b9f0af$export$98ee72319d318431);
$parcel$export(module.exports, "QuickInfoAdapter", () => $f35eb87b84b9f0af$export$914eeedc05863088);
$parcel$export(module.exports, "DocumentHighlightAdapter", () => $f35eb87b84b9f0af$export$43e7617f9df67ed1);
$parcel$export(module.exports, "DefinitionAdapter", () => $f35eb87b84b9f0af$export$ffd9ea2d5a3f0bd5);
$parcel$export(module.exports, "ReferenceAdapter", () => $f35eb87b84b9f0af$export$da977c26606f3d55);
$parcel$export(module.exports, "OutlineAdapter", () => $f35eb87b84b9f0af$export$518742da69f0f5d5);
$parcel$export(module.exports, "FormatHelper", () => $f35eb87b84b9f0af$export$5f11d9cd5977d3d3);
$parcel$export(module.exports, "FormatAdapter", () => $f35eb87b84b9f0af$export$6d0ff15f2673a4b4);
$parcel$export(module.exports, "FormatOnTypeAdapter", () => $f35eb87b84b9f0af$export$3ae50d991894d528);
$parcel$export(module.exports, "CodeActionAdaptor", () => $f35eb87b84b9f0af$export$ca18d1b8110ae9c5);
$parcel$export(module.exports, "RenameAdapter", () => $f35eb87b84b9f0af$export$33797a450c0c0a77);
$parcel$export(module.exports, "InlayHintsAdapter", () => $f35eb87b84b9f0af$export$9fb33b47ab60d93);
$parcel$export(module.exports, "setupTypeScript", () => $f35eb87b84b9f0af$export$fe02e3e074fe0a0e);
$parcel$export(module.exports, "setupJavaScript", () => $f35eb87b84b9f0af$export$4911c01acb361b94);
$parcel$export(module.exports, "getJavaScriptWorker", () => $f35eb87b84b9f0af$export$42142bcd5970f8e8);
$parcel$export(module.exports, "getTypeScriptWorker", () => $f35eb87b84b9f0af$export$f4433c6b950b070e);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ 
var $6QSpz = parcelRequire("6QSpz");

var $44zQM = parcelRequire("44zQM");
var $f35eb87b84b9f0af$var$__defProp = Object.defineProperty;
var $f35eb87b84b9f0af$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $f35eb87b84b9f0af$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $f35eb87b84b9f0af$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $f35eb87b84b9f0af$var$__copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of $f35eb87b84b9f0af$var$__getOwnPropNames(from))if (!$f35eb87b84b9f0af$var$__hasOwnProp.call(to, key) && key !== except) $f35eb87b84b9f0af$var$__defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = $f35eb87b84b9f0af$var$__getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var $f35eb87b84b9f0af$var$__reExport = (target, mod, secondTarget)=>($f35eb87b84b9f0af$var$__copyProps(target, mod, "default"), secondTarget && $f35eb87b84b9f0af$var$__copyProps(secondTarget, mod, "default"));
// src/fillers/monaco-editor-core.ts
var $f35eb87b84b9f0af$var$monaco_editor_core_exports = {};
$f35eb87b84b9f0af$var$__reExport($f35eb87b84b9f0af$var$monaco_editor_core_exports, $6QSpz);
// src/language/typescript/workerManager.ts
var $f35eb87b84b9f0af$export$bcff6015853c67ce = class {
    constructor(_modeId, _defaults){
        this._modeId = _modeId;
        this._defaults = _defaults;
        this._worker = null;
        this._client = null;
        this._configChangeListener = this._defaults.onDidChange(()=>this._stopWorker());
        this._updateExtraLibsToken = 0;
        this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs());
    }
    dispose() {
        this._configChangeListener.dispose();
        this._extraLibsChangeListener.dispose();
        this._stopWorker();
    }
    _stopWorker() {
        if (this._worker) {
            this._worker.dispose();
            this._worker = null;
        }
        this._client = null;
    }
    async _updateExtraLibs() {
        if (!this._worker) return;
        const myToken = ++this._updateExtraLibsToken;
        const proxy = await this._worker.getProxy();
        if (this._updateExtraLibsToken !== myToken) return;
        proxy.updateExtraLibs(this._defaults.getExtraLibs());
    }
    _getClient() {
        if (!this._client) this._client = (async ()=>{
            this._worker = $f35eb87b84b9f0af$var$monaco_editor_core_exports.editor.createWebWorker({
                // module that exports the create() method and returns a `TypeScriptWorker` instance
                moduleId: "vs/language/typescript/tsWorker",
                label: this._modeId,
                keepIdleModels: true,
                // passed in to the create() method
                createData: {
                    compilerOptions: this._defaults.getCompilerOptions(),
                    extraLibs: this._defaults.getExtraLibs(),
                    customWorkerPath: this._defaults.workerOptions.customWorkerPath,
                    inlayHintsOptions: this._defaults.inlayHintsOptions
                }
            });
            if (this._defaults.getEagerModelSync()) return await this._worker.withSyncedResources($f35eb87b84b9f0af$var$monaco_editor_core_exports.editor.getModels().filter((model)=>model.getLanguageId() === this._modeId).map((model)=>model.uri));
            return await this._worker.getProxy();
        })();
        return this._client;
    }
    async getLanguageServiceWorker(...resources) {
        const client = await this._getClient();
        if (this._worker) await this._worker.withSyncedResources(resources);
        return client;
    }
};
// src/language/typescript/lib/lib.index.ts
var $f35eb87b84b9f0af$var$libFileSet = {};
$f35eb87b84b9f0af$var$libFileSet["lib.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.decorators.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.decorators.legacy.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.dom.asynciterable.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.dom.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.dom.iterable.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2015.collection.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2015.core.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2015.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2015.generator.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2015.iterable.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2015.promise.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2015.proxy.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2015.reflect.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2015.symbol.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2015.symbol.wellknown.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2016.array.include.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2016.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2016.full.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2016.intl.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2017.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2017.date.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2017.full.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2017.intl.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2017.object.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2017.sharedmemory.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2017.string.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2017.typedarrays.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2018.asyncgenerator.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2018.asynciterable.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2018.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2018.full.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2018.intl.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2018.promise.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2018.regexp.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2019.array.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2019.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2019.full.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2019.intl.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2019.object.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2019.string.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2019.symbol.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2020.bigint.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2020.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2020.date.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2020.full.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2020.intl.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2020.number.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2020.promise.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2020.sharedmemory.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2020.string.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2020.symbol.wellknown.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2021.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2021.full.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2021.intl.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2021.promise.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2021.string.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2021.weakref.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2022.array.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2022.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2022.error.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2022.full.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2022.intl.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2022.object.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2022.regexp.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2022.sharedmemory.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2022.string.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2023.array.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2023.collection.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2023.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es2023.full.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es5.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.es6.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.esnext.collection.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.esnext.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.esnext.decorators.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.esnext.disposable.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.esnext.full.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.esnext.intl.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.esnext.object.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.esnext.promise.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.scripthost.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.webworker.asynciterable.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.webworker.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.webworker.importscripts.d.ts"] = true;
$f35eb87b84b9f0af$var$libFileSet["lib.webworker.iterable.d.ts"] = true;
// src/language/typescript/languageFeatures.ts
function $f35eb87b84b9f0af$export$b0b6b56a806dc8a4(diag, newLine, indent = 0) {
    if (typeof diag === "string") return diag;
    else if (diag === void 0) return "";
    let result = "";
    if (indent) {
        result += newLine;
        for(let i = 0; i < indent; i++)result += "  ";
    }
    result += diag.messageText;
    indent++;
    if (diag.next) for (const kid of diag.next)result += $f35eb87b84b9f0af$export$b0b6b56a806dc8a4(kid, newLine, indent);
    return result;
}
function $f35eb87b84b9f0af$var$displayPartsToString(displayParts) {
    if (displayParts) return displayParts.map((displayPart)=>displayPart.text).join("");
    return "";
}
var $f35eb87b84b9f0af$export$906fdd6a257127ec = class {
    constructor(_worker){
        this._worker = _worker;
    }
    // protected _positionToOffset(model: editor.ITextModel, position: monaco.IPosition): number {
    // 	return model.getOffsetAt(position);
    // }
    // protected _offsetToPosition(model: editor.ITextModel, offset: number): monaco.IPosition {
    // 	return model.getPositionAt(offset);
    // }
    _textSpanToRange(model, span) {
        let p1 = model.getPositionAt(span.start);
        let p2 = model.getPositionAt(span.start + span.length);
        let { lineNumber: startLineNumber, column: startColumn } = p1;
        let { lineNumber: endLineNumber, column: endColumn } = p2;
        return {
            startLineNumber: startLineNumber,
            startColumn: startColumn,
            endLineNumber: endLineNumber,
            endColumn: endColumn
        };
    }
};
var $f35eb87b84b9f0af$export$f8edc958c3ed0e8 = class {
    constructor(_worker){
        this._worker = _worker;
        this._libFiles = {};
        this._hasFetchedLibFiles = false;
        this._fetchLibFilesPromise = null;
    }
    isLibFile(uri) {
        if (!uri) return false;
        if (uri.path.indexOf("/lib.") === 0) return !!$f35eb87b84b9f0af$var$libFileSet[uri.path.slice(1)];
        return false;
    }
    getOrCreateModel(fileName) {
        const uri = $f35eb87b84b9f0af$var$monaco_editor_core_exports.Uri.parse(fileName);
        const model = $f35eb87b84b9f0af$var$monaco_editor_core_exports.editor.getModel(uri);
        if (model) return model;
        if (this.isLibFile(uri) && this._hasFetchedLibFiles) return $f35eb87b84b9f0af$var$monaco_editor_core_exports.editor.createModel(this._libFiles[uri.path.slice(1)], "typescript", uri);
        const matchedLibFile = (0, $44zQM.typescriptDefaults).getExtraLibs()[fileName];
        if (matchedLibFile) return $f35eb87b84b9f0af$var$monaco_editor_core_exports.editor.createModel(matchedLibFile.content, "typescript", uri);
        return null;
    }
    _containsLibFile(uris) {
        for (let uri of uris){
            if (this.isLibFile(uri)) return true;
        }
        return false;
    }
    async fetchLibFilesIfNecessary(uris) {
        if (!this._containsLibFile(uris)) return;
        await this._fetchLibFiles();
    }
    _fetchLibFiles() {
        if (!this._fetchLibFilesPromise) this._fetchLibFilesPromise = this._worker().then((w)=>w.getLibFiles()).then((libFiles)=>{
            this._hasFetchedLibFiles = true;
            this._libFiles = libFiles;
        });
        return this._fetchLibFilesPromise;
    }
};
var $f35eb87b84b9f0af$export$8105b646adfa9bae = class extends $f35eb87b84b9f0af$export$906fdd6a257127ec {
    constructor(_libFiles, _defaults, _selector, worker){
        super(worker);
        this._libFiles = _libFiles;
        this._defaults = _defaults;
        this._selector = _selector;
        this._disposables = [];
        this._listener = /* @__PURE__ */ Object.create(null);
        const onModelAdd = (model)=>{
            if (model.getLanguageId() !== _selector) return;
            const maybeValidate = ()=>{
                const { onlyVisible: onlyVisible } = this._defaults.getDiagnosticsOptions();
                if (onlyVisible) {
                    if (model.isAttachedToEditor()) this._doValidate(model);
                } else this._doValidate(model);
            };
            let handle;
            const changeSubscription = model.onDidChangeContent(()=>{
                clearTimeout(handle);
                handle = window.setTimeout(maybeValidate, 500);
            });
            const visibleSubscription = model.onDidChangeAttached(()=>{
                const { onlyVisible: onlyVisible } = this._defaults.getDiagnosticsOptions();
                if (onlyVisible) {
                    if (model.isAttachedToEditor()) maybeValidate();
                    else $f35eb87b84b9f0af$var$monaco_editor_core_exports.editor.setModelMarkers(model, this._selector, []);
                }
            });
            this._listener[model.uri.toString()] = {
                dispose () {
                    changeSubscription.dispose();
                    visibleSubscription.dispose();
                    clearTimeout(handle);
                }
            };
            maybeValidate();
        };
        const onModelRemoved = (model)=>{
            $f35eb87b84b9f0af$var$monaco_editor_core_exports.editor.setModelMarkers(model, this._selector, []);
            const key = model.uri.toString();
            if (this._listener[key]) {
                this._listener[key].dispose();
                delete this._listener[key];
            }
        };
        this._disposables.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.editor.onDidCreateModel((model)=>onModelAdd(model)));
        this._disposables.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.editor.onWillDisposeModel(onModelRemoved));
        this._disposables.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.editor.onDidChangeModelLanguage((event)=>{
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        this._disposables.push({
            dispose () {
                for (const model of $f35eb87b84b9f0af$var$monaco_editor_core_exports.editor.getModels())onModelRemoved(model);
            }
        });
        const recomputeDiagostics = ()=>{
            for (const model of $f35eb87b84b9f0af$var$monaco_editor_core_exports.editor.getModels()){
                onModelRemoved(model);
                onModelAdd(model);
            }
        };
        this._disposables.push(this._defaults.onDidChange(recomputeDiagostics));
        this._disposables.push(this._defaults.onDidExtraLibsChange(recomputeDiagostics));
        $f35eb87b84b9f0af$var$monaco_editor_core_exports.editor.getModels().forEach((model)=>onModelAdd(model));
    }
    dispose() {
        this._disposables.forEach((d)=>d && d.dispose());
        this._disposables = [];
    }
    async _doValidate(model) {
        const worker = await this._worker(model.uri);
        if (model.isDisposed()) return;
        const promises = [];
        const { noSyntaxValidation: noSyntaxValidation, noSemanticValidation: noSemanticValidation, noSuggestionDiagnostics: noSuggestionDiagnostics } = this._defaults.getDiagnosticsOptions();
        if (!noSyntaxValidation) promises.push(worker.getSyntacticDiagnostics(model.uri.toString()));
        if (!noSemanticValidation) promises.push(worker.getSemanticDiagnostics(model.uri.toString()));
        if (!noSuggestionDiagnostics) promises.push(worker.getSuggestionDiagnostics(model.uri.toString()));
        const allDiagnostics = await Promise.all(promises);
        if (!allDiagnostics || model.isDisposed()) return;
        const diagnostics = allDiagnostics.reduce((p, c)=>c.concat(p), []).filter((d)=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore || []).indexOf(d.code) === -1);
        const relatedUris = diagnostics.map((d)=>d.relatedInformation || []).reduce((p, c)=>c.concat(p), []).map((relatedInformation)=>relatedInformation.file ? $f35eb87b84b9f0af$var$monaco_editor_core_exports.Uri.parse(relatedInformation.file.fileName) : null);
        await this._libFiles.fetchLibFilesIfNecessary(relatedUris);
        if (model.isDisposed()) return;
        $f35eb87b84b9f0af$var$monaco_editor_core_exports.editor.setModelMarkers(model, this._selector, diagnostics.map((d)=>this._convertDiagnostics(model, d)));
    }
    _convertDiagnostics(model, diag) {
        const diagStart = diag.start || 0;
        const diagLength = diag.length || 1;
        const { lineNumber: startLineNumber, column: startColumn } = model.getPositionAt(diagStart);
        const { lineNumber: endLineNumber, column: endColumn } = model.getPositionAt(diagStart + diagLength);
        const tags = [];
        if (diag.reportsUnnecessary) tags.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.MarkerTag.Unnecessary);
        if (diag.reportsDeprecated) tags.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.MarkerTag.Deprecated);
        return {
            severity: this._tsDiagnosticCategoryToMarkerSeverity(diag.category),
            startLineNumber: startLineNumber,
            startColumn: startColumn,
            endLineNumber: endLineNumber,
            endColumn: endColumn,
            message: $f35eb87b84b9f0af$export$b0b6b56a806dc8a4(diag.messageText, "\n"),
            code: diag.code.toString(),
            tags: tags,
            relatedInformation: this._convertRelatedInformation(model, diag.relatedInformation)
        };
    }
    _convertRelatedInformation(model, relatedInformation) {
        if (!relatedInformation) return [];
        const result = [];
        relatedInformation.forEach((info)=>{
            let relatedResource = model;
            if (info.file) relatedResource = this._libFiles.getOrCreateModel(info.file.fileName);
            if (!relatedResource) return;
            const infoStart = info.start || 0;
            const infoLength = info.length || 1;
            const { lineNumber: startLineNumber, column: startColumn } = relatedResource.getPositionAt(infoStart);
            const { lineNumber: endLineNumber, column: endColumn } = relatedResource.getPositionAt(infoStart + infoLength);
            result.push({
                resource: relatedResource.uri,
                startLineNumber: startLineNumber,
                startColumn: startColumn,
                endLineNumber: endLineNumber,
                endColumn: endColumn,
                message: $f35eb87b84b9f0af$export$b0b6b56a806dc8a4(info.messageText, "\n")
            });
        });
        return result;
    }
    _tsDiagnosticCategoryToMarkerSeverity(category) {
        switch(category){
            case 1 /* Error */ :
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.MarkerSeverity.Error;
            case 3 /* Message */ :
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.MarkerSeverity.Info;
            case 0 /* Warning */ :
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.MarkerSeverity.Warning;
            case 2 /* Suggestion */ :
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.MarkerSeverity.Hint;
        }
        return $f35eb87b84b9f0af$var$monaco_editor_core_exports.MarkerSeverity.Info;
    }
};
var $f35eb87b84b9f0af$export$60671a5a91f69992 = class _SuggestAdapter extends $f35eb87b84b9f0af$export$906fdd6a257127ec {
    get triggerCharacters() {
        return [
            "."
        ];
    }
    async provideCompletionItems(model, position, _context, token) {
        const wordInfo = model.getWordUntilPosition(position);
        const wordRange = new $f35eb87b84b9f0af$var$monaco_editor_core_exports.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const info = await worker.getCompletionsAtPosition(resource.toString(), offset);
        if (!info || model.isDisposed()) return;
        const suggestions = info.entries.map((entry)=>{
            let range = wordRange;
            if (entry.replacementSpan) {
                const p1 = model.getPositionAt(entry.replacementSpan.start);
                const p2 = model.getPositionAt(entry.replacementSpan.start + entry.replacementSpan.length);
                range = new $f35eb87b84b9f0af$var$monaco_editor_core_exports.Range(p1.lineNumber, p1.column, p2.lineNumber, p2.column);
            }
            const tags = [];
            if (entry.kindModifiers !== void 0 && entry.kindModifiers.indexOf("deprecated") !== -1) tags.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.CompletionItemTag.Deprecated);
            return {
                uri: resource,
                position: position,
                offset: offset,
                range: range,
                label: entry.name,
                insertText: entry.name,
                sortText: entry.sortText,
                kind: _SuggestAdapter.convertKind(entry.kind),
                tags: tags
            };
        });
        return {
            suggestions: suggestions
        };
    }
    async resolveCompletionItem(item, token) {
        const myItem = item;
        const resource = myItem.uri;
        const position = myItem.position;
        const offset = myItem.offset;
        const worker = await this._worker(resource);
        const details = await worker.getCompletionEntryDetails(resource.toString(), offset, myItem.label);
        if (!details) return myItem;
        return {
            uri: resource,
            position: position,
            label: details.name,
            kind: _SuggestAdapter.convertKind(details.kind),
            detail: $f35eb87b84b9f0af$var$displayPartsToString(details.displayParts),
            documentation: {
                value: _SuggestAdapter.createDocumentationString(details)
            }
        };
    }
    static convertKind(kind) {
        switch(kind){
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.primitiveType:
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.keyword:
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.CompletionItemKind.Keyword;
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.variable:
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.localVariable:
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.CompletionItemKind.Variable;
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.memberVariable:
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.memberGetAccessor:
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.memberSetAccessor:
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.CompletionItemKind.Field;
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.function:
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.memberFunction:
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.constructSignature:
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.callSignature:
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.indexSignature:
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.CompletionItemKind.Function;
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.enum:
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.CompletionItemKind.Enum;
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.module:
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.CompletionItemKind.Module;
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.class:
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.CompletionItemKind.Class;
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.interface:
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.CompletionItemKind.Interface;
            case $f35eb87b84b9f0af$export$a84bdc57c5122798.warning:
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.CompletionItemKind.File;
        }
        return $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.CompletionItemKind.Property;
    }
    static createDocumentationString(details) {
        let documentationString = $f35eb87b84b9f0af$var$displayPartsToString(details.documentation);
        if (details.tags) for (const tag of details.tags)documentationString += `

${$f35eb87b84b9f0af$var$tagToString(tag)}`;
        return documentationString;
    }
};
function $f35eb87b84b9f0af$var$tagToString(tag) {
    let tagLabel = `*@${tag.name}*`;
    if (tag.name === "param" && tag.text) {
        const [paramName, ...rest] = tag.text;
        tagLabel += `\`${paramName.text}\``;
        if (rest.length > 0) tagLabel += ` \u2014 ${rest.map((r)=>r.text).join(" ")}`;
    } else if (Array.isArray(tag.text)) tagLabel += ` \u2014 ${tag.text.map((r)=>r.text).join(" ")}`;
    else if (tag.text) tagLabel += ` \u2014 ${tag.text}`;
    return tagLabel;
}
var $f35eb87b84b9f0af$export$98ee72319d318431 = class _SignatureHelpAdapter extends $f35eb87b84b9f0af$export$906fdd6a257127ec {
    constructor(){
        super(...arguments);
        this.signatureHelpTriggerCharacters = [
            "(",
            ","
        ];
    }
    static _toSignatureHelpTriggerReason(context) {
        switch(context.triggerKind){
            case $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SignatureHelpTriggerKind.TriggerCharacter:
                if (context.triggerCharacter) {
                    if (context.isRetrigger) return {
                        kind: "retrigger",
                        triggerCharacter: context.triggerCharacter
                    };
                    else return {
                        kind: "characterTyped",
                        triggerCharacter: context.triggerCharacter
                    };
                } else return {
                    kind: "invoked"
                };
            case $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SignatureHelpTriggerKind.ContentChange:
                return context.isRetrigger ? {
                    kind: "retrigger"
                } : {
                    kind: "invoked"
                };
            case $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SignatureHelpTriggerKind.Invoke:
            default:
                return {
                    kind: "invoked"
                };
        }
    }
    async provideSignatureHelp(model, position, token, context) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const info = await worker.getSignatureHelpItems(resource.toString(), offset, {
            triggerReason: _SignatureHelpAdapter._toSignatureHelpTriggerReason(context)
        });
        if (!info || model.isDisposed()) return;
        const ret = {
            activeSignature: info.selectedItemIndex,
            activeParameter: info.argumentIndex,
            signatures: []
        };
        info.items.forEach((item)=>{
            const signature = {
                label: "",
                parameters: []
            };
            signature.documentation = {
                value: $f35eb87b84b9f0af$var$displayPartsToString(item.documentation)
            };
            signature.label += $f35eb87b84b9f0af$var$displayPartsToString(item.prefixDisplayParts);
            item.parameters.forEach((p, i, a)=>{
                const label = $f35eb87b84b9f0af$var$displayPartsToString(p.displayParts);
                const parameter = {
                    label: label,
                    documentation: {
                        value: $f35eb87b84b9f0af$var$displayPartsToString(p.documentation)
                    }
                };
                signature.label += label;
                signature.parameters.push(parameter);
                if (i < a.length - 1) signature.label += $f35eb87b84b9f0af$var$displayPartsToString(item.separatorDisplayParts);
            });
            signature.label += $f35eb87b84b9f0af$var$displayPartsToString(item.suffixDisplayParts);
            ret.signatures.push(signature);
        });
        return {
            value: ret,
            dispose () {}
        };
    }
};
var $f35eb87b84b9f0af$export$914eeedc05863088 = class extends $f35eb87b84b9f0af$export$906fdd6a257127ec {
    async provideHover(model, position, token) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const info = await worker.getQuickInfoAtPosition(resource.toString(), offset);
        if (!info || model.isDisposed()) return;
        const documentation = $f35eb87b84b9f0af$var$displayPartsToString(info.documentation);
        const tags = info.tags ? info.tags.map((tag)=>$f35eb87b84b9f0af$var$tagToString(tag)).join("  \n\n") : "";
        const contents = $f35eb87b84b9f0af$var$displayPartsToString(info.displayParts);
        return {
            range: this._textSpanToRange(model, info.textSpan),
            contents: [
                {
                    value: "```typescript\n" + contents + "\n```\n"
                },
                {
                    value: documentation + (tags ? "\n\n" + tags : "")
                }
            ]
        };
    }
};
var $f35eb87b84b9f0af$export$43e7617f9df67ed1 = class extends $f35eb87b84b9f0af$export$906fdd6a257127ec {
    async provideDocumentHighlights(model, position, token) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const entries = await worker.getDocumentHighlights(resource.toString(), offset, [
            resource.toString()
        ]);
        if (!entries || model.isDisposed()) return;
        return entries.flatMap((entry)=>{
            return entry.highlightSpans.map((highlightSpans)=>{
                return {
                    range: this._textSpanToRange(model, highlightSpans.textSpan),
                    kind: highlightSpans.kind === "writtenReference" ? $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Write : $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text
                };
            });
        });
    }
};
var $f35eb87b84b9f0af$export$ffd9ea2d5a3f0bd5 = class extends $f35eb87b84b9f0af$export$906fdd6a257127ec {
    constructor(_libFiles, worker){
        super(worker);
        this._libFiles = _libFiles;
    }
    async provideDefinition(model, position, token) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const entries = await worker.getDefinitionAtPosition(resource.toString(), offset);
        if (!entries || model.isDisposed()) return;
        await this._libFiles.fetchLibFilesIfNecessary(entries.map((entry)=>$f35eb87b84b9f0af$var$monaco_editor_core_exports.Uri.parse(entry.fileName)));
        if (model.isDisposed()) return;
        const result = [];
        for (let entry of entries){
            const refModel = this._libFiles.getOrCreateModel(entry.fileName);
            if (refModel) result.push({
                uri: refModel.uri,
                range: this._textSpanToRange(refModel, entry.textSpan)
            });
        }
        return result;
    }
};
var $f35eb87b84b9f0af$export$da977c26606f3d55 = class extends $f35eb87b84b9f0af$export$906fdd6a257127ec {
    constructor(_libFiles, worker){
        super(worker);
        this._libFiles = _libFiles;
    }
    async provideReferences(model, position, context, token) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const entries = await worker.getReferencesAtPosition(resource.toString(), offset);
        if (!entries || model.isDisposed()) return;
        await this._libFiles.fetchLibFilesIfNecessary(entries.map((entry)=>$f35eb87b84b9f0af$var$monaco_editor_core_exports.Uri.parse(entry.fileName)));
        if (model.isDisposed()) return;
        const result = [];
        for (let entry of entries){
            const refModel = this._libFiles.getOrCreateModel(entry.fileName);
            if (refModel) result.push({
                uri: refModel.uri,
                range: this._textSpanToRange(refModel, entry.textSpan)
            });
        }
        return result;
    }
};
var $f35eb87b84b9f0af$export$518742da69f0f5d5 = class extends $f35eb87b84b9f0af$export$906fdd6a257127ec {
    async provideDocumentSymbols(model, token) {
        const resource = model.uri;
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const root = await worker.getNavigationTree(resource.toString());
        if (!root || model.isDisposed()) return;
        const convert = (item, containerLabel)=>{
            const result2 = {
                name: item.text,
                detail: "",
                kind: $f35eb87b84b9f0af$var$outlineTypeTable[item.kind] || $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SymbolKind.Variable,
                range: this._textSpanToRange(model, item.spans[0]),
                selectionRange: this._textSpanToRange(model, item.spans[0]),
                tags: [],
                children: item.childItems?.map((child)=>convert(child, item.text)),
                containerName: containerLabel
            };
            return result2;
        };
        const result = root.childItems ? root.childItems.map((item)=>convert(item)) : [];
        return result;
    }
};
var $f35eb87b84b9f0af$export$a84bdc57c5122798 = class {
    static{
        this.unknown = "";
    }
    static{
        this.keyword = "keyword";
    }
    static{
        this.script = "script";
    }
    static{
        this.module = "module";
    }
    static{
        this.class = "class";
    }
    static{
        this.interface = "interface";
    }
    static{
        this.type = "type";
    }
    static{
        this.enum = "enum";
    }
    static{
        this.variable = "var";
    }
    static{
        this.localVariable = "local var";
    }
    static{
        this.function = "function";
    }
    static{
        this.localFunction = "local function";
    }
    static{
        this.memberFunction = "method";
    }
    static{
        this.memberGetAccessor = "getter";
    }
    static{
        this.memberSetAccessor = "setter";
    }
    static{
        this.memberVariable = "property";
    }
    static{
        this.constructorImplementation = "constructor";
    }
    static{
        this.callSignature = "call";
    }
    static{
        this.indexSignature = "index";
    }
    static{
        this.constructSignature = "construct";
    }
    static{
        this.parameter = "parameter";
    }
    static{
        this.typeParameter = "type parameter";
    }
    static{
        this.primitiveType = "primitive type";
    }
    static{
        this.label = "label";
    }
    static{
        this.alias = "alias";
    }
    static{
        this.const = "const";
    }
    static{
        this.let = "let";
    }
    static{
        this.warning = "warning";
    }
};
var $f35eb87b84b9f0af$var$outlineTypeTable = /* @__PURE__ */ Object.create(null);
$f35eb87b84b9f0af$var$outlineTypeTable[$f35eb87b84b9f0af$export$a84bdc57c5122798.module] = $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SymbolKind.Module;
$f35eb87b84b9f0af$var$outlineTypeTable[$f35eb87b84b9f0af$export$a84bdc57c5122798.class] = $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SymbolKind.Class;
$f35eb87b84b9f0af$var$outlineTypeTable[$f35eb87b84b9f0af$export$a84bdc57c5122798.enum] = $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SymbolKind.Enum;
$f35eb87b84b9f0af$var$outlineTypeTable[$f35eb87b84b9f0af$export$a84bdc57c5122798.interface] = $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SymbolKind.Interface;
$f35eb87b84b9f0af$var$outlineTypeTable[$f35eb87b84b9f0af$export$a84bdc57c5122798.memberFunction] = $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SymbolKind.Method;
$f35eb87b84b9f0af$var$outlineTypeTable[$f35eb87b84b9f0af$export$a84bdc57c5122798.memberVariable] = $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SymbolKind.Property;
$f35eb87b84b9f0af$var$outlineTypeTable[$f35eb87b84b9f0af$export$a84bdc57c5122798.memberGetAccessor] = $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SymbolKind.Property;
$f35eb87b84b9f0af$var$outlineTypeTable[$f35eb87b84b9f0af$export$a84bdc57c5122798.memberSetAccessor] = $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SymbolKind.Property;
$f35eb87b84b9f0af$var$outlineTypeTable[$f35eb87b84b9f0af$export$a84bdc57c5122798.variable] = $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SymbolKind.Variable;
$f35eb87b84b9f0af$var$outlineTypeTable[$f35eb87b84b9f0af$export$a84bdc57c5122798.const] = $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SymbolKind.Variable;
$f35eb87b84b9f0af$var$outlineTypeTable[$f35eb87b84b9f0af$export$a84bdc57c5122798.localVariable] = $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SymbolKind.Variable;
$f35eb87b84b9f0af$var$outlineTypeTable[$f35eb87b84b9f0af$export$a84bdc57c5122798.variable] = $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SymbolKind.Variable;
$f35eb87b84b9f0af$var$outlineTypeTable[$f35eb87b84b9f0af$export$a84bdc57c5122798.function] = $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SymbolKind.Function;
$f35eb87b84b9f0af$var$outlineTypeTable[$f35eb87b84b9f0af$export$a84bdc57c5122798.localFunction] = $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.SymbolKind.Function;
var $f35eb87b84b9f0af$export$5f11d9cd5977d3d3 = class extends $f35eb87b84b9f0af$export$906fdd6a257127ec {
    static _convertOptions(options) {
        return {
            ConvertTabsToSpaces: options.insertSpaces,
            TabSize: options.tabSize,
            IndentSize: options.tabSize,
            IndentStyle: 2 /* Smart */ ,
            NewLineCharacter: "\n",
            InsertSpaceAfterCommaDelimiter: true,
            InsertSpaceAfterSemicolonInForStatements: true,
            InsertSpaceBeforeAndAfterBinaryOperators: true,
            InsertSpaceAfterKeywordsInControlFlowStatements: true,
            InsertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
            InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
            PlaceOpenBraceOnNewLineForControlBlocks: false,
            PlaceOpenBraceOnNewLineForFunctions: false
        };
    }
    _convertTextChanges(model, change) {
        return {
            text: change.newText,
            range: this._textSpanToRange(model, change.span)
        };
    }
};
var $f35eb87b84b9f0af$export$6d0ff15f2673a4b4 = class extends $f35eb87b84b9f0af$export$5f11d9cd5977d3d3 {
    constructor(){
        super(...arguments);
        this.canFormatMultipleRanges = false;
    }
    async provideDocumentRangeFormattingEdits(model, range, options, token) {
        const resource = model.uri;
        const startOffset = model.getOffsetAt({
            lineNumber: range.startLineNumber,
            column: range.startColumn
        });
        const endOffset = model.getOffsetAt({
            lineNumber: range.endLineNumber,
            column: range.endColumn
        });
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const edits = await worker.getFormattingEditsForRange(resource.toString(), startOffset, endOffset, $f35eb87b84b9f0af$export$5f11d9cd5977d3d3._convertOptions(options));
        if (!edits || model.isDisposed()) return;
        return edits.map((edit)=>this._convertTextChanges(model, edit));
    }
};
var $f35eb87b84b9f0af$export$3ae50d991894d528 = class extends $f35eb87b84b9f0af$export$5f11d9cd5977d3d3 {
    get autoFormatTriggerCharacters() {
        return [
            ";",
            "}",
            "\n"
        ];
    }
    async provideOnTypeFormattingEdits(model, position, ch, options, token) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const edits = await worker.getFormattingEditsAfterKeystroke(resource.toString(), offset, ch, $f35eb87b84b9f0af$export$5f11d9cd5977d3d3._convertOptions(options));
        if (!edits || model.isDisposed()) return;
        return edits.map((edit)=>this._convertTextChanges(model, edit));
    }
};
var $f35eb87b84b9f0af$export$ca18d1b8110ae9c5 = class extends $f35eb87b84b9f0af$export$5f11d9cd5977d3d3 {
    async provideCodeActions(model, range, context, token) {
        const resource = model.uri;
        const start = model.getOffsetAt({
            lineNumber: range.startLineNumber,
            column: range.startColumn
        });
        const end = model.getOffsetAt({
            lineNumber: range.endLineNumber,
            column: range.endColumn
        });
        const formatOptions = $f35eb87b84b9f0af$export$5f11d9cd5977d3d3._convertOptions(model.getOptions());
        const errorCodes = context.markers.filter((m)=>m.code).map((m)=>m.code).map(Number);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const codeFixes = await worker.getCodeFixesAtPosition(resource.toString(), start, end, errorCodes, formatOptions);
        if (!codeFixes || model.isDisposed()) return {
            actions: [],
            dispose: ()=>{}
        };
        const actions = codeFixes.filter((fix)=>{
            return fix.changes.filter((change)=>change.isNewFile).length === 0;
        }).map((fix)=>{
            return this._tsCodeFixActionToMonacoCodeAction(model, context, fix);
        });
        return {
            actions: actions,
            dispose: ()=>{}
        };
    }
    _tsCodeFixActionToMonacoCodeAction(model, context, codeFix) {
        const edits = [];
        for (const change of codeFix.changes)for (const textChange of change.textChanges)edits.push({
            resource: model.uri,
            versionId: void 0,
            textEdit: {
                range: this._textSpanToRange(model, textChange.span),
                text: textChange.newText
            }
        });
        const action = {
            title: codeFix.description,
            edit: {
                edits: edits
            },
            diagnostics: context.markers,
            kind: "quickfix"
        };
        return action;
    }
};
var $f35eb87b84b9f0af$export$33797a450c0c0a77 = class extends $f35eb87b84b9f0af$export$906fdd6a257127ec {
    constructor(_libFiles, worker){
        super(worker);
        this._libFiles = _libFiles;
    }
    async provideRenameEdits(model, position, newName, token) {
        const resource = model.uri;
        const fileName = resource.toString();
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const renameInfo = await worker.getRenameInfo(fileName, offset, {
            allowRenameOfImportPath: false
        });
        if (renameInfo.canRename === false) return {
            edits: [],
            rejectReason: renameInfo.localizedErrorMessage
        };
        if (renameInfo.fileToRename !== void 0) throw new Error("Renaming files is not supported.");
        const renameLocations = await worker.findRenameLocations(fileName, offset, /*strings*/ false, /*comments*/ false, /*prefixAndSuffix*/ false);
        if (!renameLocations || model.isDisposed()) return;
        const edits = [];
        for (const renameLocation of renameLocations){
            const model2 = this._libFiles.getOrCreateModel(renameLocation.fileName);
            if (model2) edits.push({
                resource: model2.uri,
                versionId: void 0,
                textEdit: {
                    range: this._textSpanToRange(model2, renameLocation.textSpan),
                    text: newName
                }
            });
            else throw new Error(`Unknown file ${renameLocation.fileName}.`);
        }
        return {
            edits: edits
        };
    }
};
var $f35eb87b84b9f0af$export$9fb33b47ab60d93 = class extends $f35eb87b84b9f0af$export$906fdd6a257127ec {
    async provideInlayHints(model, range, token) {
        const resource = model.uri;
        const fileName = resource.toString();
        const start = model.getOffsetAt({
            lineNumber: range.startLineNumber,
            column: range.startColumn
        });
        const end = model.getOffsetAt({
            lineNumber: range.endLineNumber,
            column: range.endColumn
        });
        const worker = await this._worker(resource);
        if (model.isDisposed()) return null;
        const tsHints = await worker.provideInlayHints(fileName, start, end);
        const hints = tsHints.map((hint)=>{
            return {
                ...hint,
                label: hint.text,
                position: model.getPositionAt(hint.position),
                kind: this._convertHintKind(hint.kind)
            };
        });
        return {
            hints: hints,
            dispose: ()=>{}
        };
    }
    _convertHintKind(kind) {
        switch(kind){
            case "Parameter":
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.InlayHintKind.Parameter;
            case "Type":
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.InlayHintKind.Type;
            default:
                return $f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.InlayHintKind.Type;
        }
    }
};
// src/language/typescript/tsMode.ts
var $f35eb87b84b9f0af$var$javaScriptWorker;
var $f35eb87b84b9f0af$var$typeScriptWorker;
function $f35eb87b84b9f0af$export$fe02e3e074fe0a0e(defaults) {
    $f35eb87b84b9f0af$var$typeScriptWorker = $f35eb87b84b9f0af$var$setupMode(defaults, "typescript");
}
function $f35eb87b84b9f0af$export$4911c01acb361b94(defaults) {
    $f35eb87b84b9f0af$var$javaScriptWorker = $f35eb87b84b9f0af$var$setupMode(defaults, "javascript");
}
function $f35eb87b84b9f0af$export$42142bcd5970f8e8() {
    return new Promise((resolve, reject)=>{
        if (!$f35eb87b84b9f0af$var$javaScriptWorker) return reject("JavaScript not registered!");
        resolve($f35eb87b84b9f0af$var$javaScriptWorker);
    });
}
function $f35eb87b84b9f0af$export$f4433c6b950b070e() {
    return new Promise((resolve, reject)=>{
        if (!$f35eb87b84b9f0af$var$typeScriptWorker) return reject("TypeScript not registered!");
        resolve($f35eb87b84b9f0af$var$typeScriptWorker);
    });
}
function $f35eb87b84b9f0af$var$setupMode(defaults, modeId) {
    const disposables = [];
    const providers = [];
    const client = new $f35eb87b84b9f0af$export$bcff6015853c67ce(modeId, defaults);
    disposables.push(client);
    const worker = (...uris)=>{
        return client.getLanguageServiceWorker(...uris);
    };
    const libFiles = new $f35eb87b84b9f0af$export$f8edc958c3ed0e8(worker);
    function registerProviders() {
        const { modeConfiguration: modeConfiguration } = defaults;
        $f35eb87b84b9f0af$var$disposeAll(providers);
        if (modeConfiguration.completionItems) providers.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(modeId, new $f35eb87b84b9f0af$export$60671a5a91f69992(worker)));
        if (modeConfiguration.signatureHelp) providers.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.registerSignatureHelpProvider(modeId, new $f35eb87b84b9f0af$export$98ee72319d318431(worker)));
        if (modeConfiguration.hovers) providers.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.registerHoverProvider(modeId, new $f35eb87b84b9f0af$export$914eeedc05863088(worker)));
        if (modeConfiguration.documentHighlights) providers.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.registerDocumentHighlightProvider(modeId, new $f35eb87b84b9f0af$export$43e7617f9df67ed1(worker)));
        if (modeConfiguration.definitions) providers.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.registerDefinitionProvider(modeId, new $f35eb87b84b9f0af$export$ffd9ea2d5a3f0bd5(libFiles, worker)));
        if (modeConfiguration.references) providers.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.registerReferenceProvider(modeId, new $f35eb87b84b9f0af$export$da977c26606f3d55(libFiles, worker)));
        if (modeConfiguration.documentSymbols) providers.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(modeId, new $f35eb87b84b9f0af$export$518742da69f0f5d5(worker)));
        if (modeConfiguration.rename) providers.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.registerRenameProvider(modeId, new $f35eb87b84b9f0af$export$33797a450c0c0a77(libFiles, worker)));
        if (modeConfiguration.documentRangeFormattingEdits) providers.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(modeId, new $f35eb87b84b9f0af$export$6d0ff15f2673a4b4(worker)));
        if (modeConfiguration.onTypeFormattingEdits) providers.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.registerOnTypeFormattingEditProvider(modeId, new $f35eb87b84b9f0af$export$3ae50d991894d528(worker)));
        if (modeConfiguration.codeActions) providers.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.registerCodeActionProvider(modeId, new $f35eb87b84b9f0af$export$ca18d1b8110ae9c5(worker)));
        if (modeConfiguration.inlayHints) providers.push($f35eb87b84b9f0af$var$monaco_editor_core_exports.languages.registerInlayHintsProvider(modeId, new $f35eb87b84b9f0af$export$9fb33b47ab60d93(worker)));
        if (modeConfiguration.diagnostics) providers.push(new $f35eb87b84b9f0af$export$8105b646adfa9bae(libFiles, defaults, modeId, worker));
    }
    registerProviders();
    disposables.push($f35eb87b84b9f0af$var$asDisposable(providers));
    return worker;
}
function $f35eb87b84b9f0af$var$asDisposable(disposables) {
    return {
        dispose: ()=>$f35eb87b84b9f0af$var$disposeAll(disposables)
    };
}
function $f35eb87b84b9f0af$var$disposeAll(disposables) {
    while(disposables.length)disposables.pop().dispose();
}

});
parcelRegister("44zQM", function(module, exports) {

$parcel$export(module.exports, "typescriptDefaults", () => $2f735842d42098f5$export$5b7e032c201ff89d);

var $6QSpz = parcelRequire("6QSpz");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $2f735842d42098f5$var$__defProp = Object.defineProperty;
var $2f735842d42098f5$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $2f735842d42098f5$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $2f735842d42098f5$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $2f735842d42098f5$var$__copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of $2f735842d42098f5$var$__getOwnPropNames(from))if (!$2f735842d42098f5$var$__hasOwnProp.call(to, key) && key !== except) $2f735842d42098f5$var$__defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = $2f735842d42098f5$var$__getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var $2f735842d42098f5$var$__reExport = (target, mod, secondTarget)=>($2f735842d42098f5$var$__copyProps(target, mod, "default"), secondTarget && $2f735842d42098f5$var$__copyProps(secondTarget, mod, "default"));
// src/language/typescript/lib/typescriptServicesMetadata.ts
var $2f735842d42098f5$var$typescriptVersion = "5.4.5";
// src/fillers/monaco-editor-core.ts
var $2f735842d42098f5$var$monaco_editor_core_exports = {};
$2f735842d42098f5$var$__reExport($2f735842d42098f5$var$monaco_editor_core_exports, $6QSpz);
// src/language/typescript/monaco.contribution.ts
var $2f735842d42098f5$export$2932e787d4bab445 = /* @__PURE__ */ ((ModuleKind2)=>{
    ModuleKind2[ModuleKind2["None"] = 0] = "None";
    ModuleKind2[ModuleKind2["CommonJS"] = 1] = "CommonJS";
    ModuleKind2[ModuleKind2["AMD"] = 2] = "AMD";
    ModuleKind2[ModuleKind2["UMD"] = 3] = "UMD";
    ModuleKind2[ModuleKind2["System"] = 4] = "System";
    ModuleKind2[ModuleKind2["ES2015"] = 5] = "ES2015";
    ModuleKind2[ModuleKind2["ESNext"] = 99] = "ESNext";
    return ModuleKind2;
})($2f735842d42098f5$export$2932e787d4bab445 || {});
var $2f735842d42098f5$export$23b47a46c244d065 = /* @__PURE__ */ ((JsxEmit2)=>{
    JsxEmit2[JsxEmit2["None"] = 0] = "None";
    JsxEmit2[JsxEmit2["Preserve"] = 1] = "Preserve";
    JsxEmit2[JsxEmit2["React"] = 2] = "React";
    JsxEmit2[JsxEmit2["ReactNative"] = 3] = "ReactNative";
    JsxEmit2[JsxEmit2["ReactJSX"] = 4] = "ReactJSX";
    JsxEmit2[JsxEmit2["ReactJSXDev"] = 5] = "ReactJSXDev";
    return JsxEmit2;
})($2f735842d42098f5$export$23b47a46c244d065 || {});
var $2f735842d42098f5$export$c28f76d17c23333a = /* @__PURE__ */ ((NewLineKind2)=>{
    NewLineKind2[NewLineKind2["CarriageReturnLineFeed"] = 0] = "CarriageReturnLineFeed";
    NewLineKind2[NewLineKind2["LineFeed"] = 1] = "LineFeed";
    return NewLineKind2;
})($2f735842d42098f5$export$c28f76d17c23333a || {});
var $2f735842d42098f5$export$36609ff6f261a579 = /* @__PURE__ */ ((ScriptTarget2)=>{
    ScriptTarget2[ScriptTarget2["ES3"] = 0] = "ES3";
    ScriptTarget2[ScriptTarget2["ES5"] = 1] = "ES5";
    ScriptTarget2[ScriptTarget2["ES2015"] = 2] = "ES2015";
    ScriptTarget2[ScriptTarget2["ES2016"] = 3] = "ES2016";
    ScriptTarget2[ScriptTarget2["ES2017"] = 4] = "ES2017";
    ScriptTarget2[ScriptTarget2["ES2018"] = 5] = "ES2018";
    ScriptTarget2[ScriptTarget2["ES2019"] = 6] = "ES2019";
    ScriptTarget2[ScriptTarget2["ES2020"] = 7] = "ES2020";
    ScriptTarget2[ScriptTarget2["ESNext"] = 99] = "ESNext";
    ScriptTarget2[ScriptTarget2["JSON"] = 100] = "JSON";
    ScriptTarget2[ScriptTarget2["Latest"] = 99 /* ESNext */ ] = "Latest";
    return ScriptTarget2;
})($2f735842d42098f5$export$36609ff6f261a579 || {});
var $2f735842d42098f5$export$2e45c31d6e8ee3d0 = /* @__PURE__ */ ((ModuleResolutionKind2)=>{
    ModuleResolutionKind2[ModuleResolutionKind2["Classic"] = 1] = "Classic";
    ModuleResolutionKind2[ModuleResolutionKind2["NodeJs"] = 2] = "NodeJs";
    return ModuleResolutionKind2;
})($2f735842d42098f5$export$2e45c31d6e8ee3d0 || {});
var $2f735842d42098f5$var$LanguageServiceDefaultsImpl = class {
    constructor(compilerOptions, diagnosticsOptions, workerOptions, inlayHintsOptions, modeConfiguration){
        this._onDidChange = new $2f735842d42098f5$var$monaco_editor_core_exports.Emitter();
        this._onDidExtraLibsChange = new $2f735842d42098f5$var$monaco_editor_core_exports.Emitter();
        this._extraLibs = /* @__PURE__ */ Object.create(null);
        this._removedExtraLibs = /* @__PURE__ */ Object.create(null);
        this._eagerModelSync = false;
        this.setCompilerOptions(compilerOptions);
        this.setDiagnosticsOptions(diagnosticsOptions);
        this.setWorkerOptions(workerOptions);
        this.setInlayHintsOptions(inlayHintsOptions);
        this.setModeConfiguration(modeConfiguration);
        this._onDidExtraLibsChangeTimeout = -1;
    }
    get onDidChange() {
        return this._onDidChange.event;
    }
    get onDidExtraLibsChange() {
        return this._onDidExtraLibsChange.event;
    }
    get modeConfiguration() {
        return this._modeConfiguration;
    }
    get workerOptions() {
        return this._workerOptions;
    }
    get inlayHintsOptions() {
        return this._inlayHintsOptions;
    }
    getExtraLibs() {
        return this._extraLibs;
    }
    addExtraLib(content, _filePath) {
        let filePath;
        if (typeof _filePath === "undefined") filePath = `ts:extralib-${Math.random().toString(36).substring(2, 15)}`;
        else filePath = _filePath;
        if (this._extraLibs[filePath] && this._extraLibs[filePath].content === content) return {
            dispose: ()=>{}
        };
        let myVersion = 1;
        if (this._removedExtraLibs[filePath]) myVersion = this._removedExtraLibs[filePath] + 1;
        if (this._extraLibs[filePath]) myVersion = this._extraLibs[filePath].version + 1;
        this._extraLibs[filePath] = {
            content: content,
            version: myVersion
        };
        this._fireOnDidExtraLibsChangeSoon();
        return {
            dispose: ()=>{
                let extraLib = this._extraLibs[filePath];
                if (!extraLib) return;
                if (extraLib.version !== myVersion) return;
                delete this._extraLibs[filePath];
                this._removedExtraLibs[filePath] = myVersion;
                this._fireOnDidExtraLibsChangeSoon();
            }
        };
    }
    setExtraLibs(libs) {
        for(const filePath in this._extraLibs)this._removedExtraLibs[filePath] = this._extraLibs[filePath].version;
        this._extraLibs = /* @__PURE__ */ Object.create(null);
        if (libs && libs.length > 0) for (const lib of libs){
            const filePath = lib.filePath || `ts:extralib-${Math.random().toString(36).substring(2, 15)}`;
            const content = lib.content;
            let myVersion = 1;
            if (this._removedExtraLibs[filePath]) myVersion = this._removedExtraLibs[filePath] + 1;
            this._extraLibs[filePath] = {
                content: content,
                version: myVersion
            };
        }
        this._fireOnDidExtraLibsChangeSoon();
    }
    _fireOnDidExtraLibsChangeSoon() {
        if (this._onDidExtraLibsChangeTimeout !== -1) return;
        this._onDidExtraLibsChangeTimeout = window.setTimeout(()=>{
            this._onDidExtraLibsChangeTimeout = -1;
            this._onDidExtraLibsChange.fire(void 0);
        }, 0);
    }
    getCompilerOptions() {
        return this._compilerOptions;
    }
    setCompilerOptions(options) {
        this._compilerOptions = options || /* @__PURE__ */ Object.create(null);
        this._onDidChange.fire(void 0);
    }
    getDiagnosticsOptions() {
        return this._diagnosticsOptions;
    }
    setDiagnosticsOptions(options) {
        this._diagnosticsOptions = options || /* @__PURE__ */ Object.create(null);
        this._onDidChange.fire(void 0);
    }
    setWorkerOptions(options) {
        this._workerOptions = options || /* @__PURE__ */ Object.create(null);
        this._onDidChange.fire(void 0);
    }
    setInlayHintsOptions(options) {
        this._inlayHintsOptions = options || /* @__PURE__ */ Object.create(null);
        this._onDidChange.fire(void 0);
    }
    setMaximumWorkerIdleTime(value) {}
    setEagerModelSync(value) {
        this._eagerModelSync = value;
    }
    getEagerModelSync() {
        return this._eagerModelSync;
    }
    setModeConfiguration(modeConfiguration) {
        this._modeConfiguration = modeConfiguration || /* @__PURE__ */ Object.create(null);
        this._onDidChange.fire(void 0);
    }
};
var $2f735842d42098f5$export$30d76bc34f51c345 = $2f735842d42098f5$var$typescriptVersion;
var $2f735842d42098f5$var$modeConfigurationDefault = {
    completionItems: true,
    hovers: true,
    documentSymbols: true,
    definitions: true,
    references: true,
    documentHighlights: true,
    rename: true,
    diagnostics: true,
    documentRangeFormattingEdits: true,
    signatureHelp: true,
    onTypeFormattingEdits: true,
    codeActions: true,
    inlayHints: true
};
var $2f735842d42098f5$export$5b7e032c201ff89d = new $2f735842d42098f5$var$LanguageServiceDefaultsImpl({
    allowNonTsExtensions: true,
    target: 99 /* Latest */ 
}, {
    noSemanticValidation: false,
    noSyntaxValidation: false,
    onlyVisible: false
}, {}, {}, $2f735842d42098f5$var$modeConfigurationDefault);
var $2f735842d42098f5$export$15c6eb181a3131d2 = new $2f735842d42098f5$var$LanguageServiceDefaultsImpl({
    allowNonTsExtensions: true,
    allowJs: true,
    target: 99 /* Latest */ 
}, {
    noSemanticValidation: true,
    noSyntaxValidation: false,
    onlyVisible: false
}, {}, {}, $2f735842d42098f5$var$modeConfigurationDefault);
var $2f735842d42098f5$export$f4433c6b950b070e = ()=>{
    return $2f735842d42098f5$var$getMode().then((mode)=>mode.getTypeScriptWorker());
};
var $2f735842d42098f5$export$42142bcd5970f8e8 = ()=>{
    return $2f735842d42098f5$var$getMode().then((mode)=>mode.getJavaScriptWorker());
};
$2f735842d42098f5$var$monaco_editor_core_exports.languages.typescript = {
    ModuleKind: $2f735842d42098f5$export$2932e787d4bab445,
    JsxEmit: $2f735842d42098f5$export$23b47a46c244d065,
    NewLineKind: $2f735842d42098f5$export$c28f76d17c23333a,
    ScriptTarget: $2f735842d42098f5$export$36609ff6f261a579,
    ModuleResolutionKind: $2f735842d42098f5$export$2e45c31d6e8ee3d0,
    typescriptVersion: $2f735842d42098f5$export$30d76bc34f51c345,
    typescriptDefaults: $2f735842d42098f5$export$5b7e032c201ff89d,
    javascriptDefaults: $2f735842d42098f5$export$15c6eb181a3131d2,
    getTypeScriptWorker: $2f735842d42098f5$export$f4433c6b950b070e,
    getJavaScriptWorker: $2f735842d42098f5$export$42142bcd5970f8e8
};

function $2f735842d42098f5$var$getMode() {
    var resolve, reject;
    return (parcelRequire("dOY7G"));
}
$2f735842d42098f5$var$monaco_editor_core_exports.languages.onLanguage("typescript", ()=>{
    return $2f735842d42098f5$var$getMode().then((mode)=>mode.setupTypeScript($2f735842d42098f5$export$5b7e032c201ff89d));
});
$2f735842d42098f5$var$monaco_editor_core_exports.languages.onLanguage("javascript", ()=>{
    return $2f735842d42098f5$var$getMode().then((mode)=>mode.setupJavaScript($2f735842d42098f5$export$15c6eb181a3131d2));
});

});
parcelRegister("dOY7G", function(module, exports) {

var $9Q1XO = parcelRequire("9Q1XO");


module.exports = Promise.all([
    (parcelRequire("87sUo"))((parcelRequire("2JpsI")).resolve("7Ddgz")),
    $9Q1XO("j2ilM"),
    $9Q1XO("bRlSX")
]).then(()=>parcelRequire('kTs4B'));

});
parcelRegister("9Q1XO", function(module, exports) {
"use strict";

function $729a7e5387e5363f$var$load(id) {
    // eslint-disable-next-line no-undef
    return import((parcelRequire("2JpsI")).resolve(id));
}
module.exports = $729a7e5387e5363f$var$load;

});
parcelRegister("2JpsI", function(module, exports) {

$parcel$export(module.exports, "resolve", () => $1fd388fe1a0c2157$export$f7ad0328861e2f03, (v) => $1fd388fe1a0c2157$export$f7ad0328861e2f03 = v);
var $1fd388fe1a0c2157$export$6503ec6e8aabbaf;
var $1fd388fe1a0c2157$export$f7ad0328861e2f03;
"use strict";
var $1fd388fe1a0c2157$var$mapping = new Map();
function $1fd388fe1a0c2157$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$1fd388fe1a0c2157$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $1fd388fe1a0c2157$var$resolve(id) {
    var resolved = $1fd388fe1a0c2157$var$mapping.get(id);
    if (resolved == null) throw new Error('Could not resolve bundle with id ' + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$1fd388fe1a0c2157$export$6503ec6e8aabbaf = $1fd388fe1a0c2157$var$register;
$1fd388fe1a0c2157$export$f7ad0328861e2f03 = $1fd388fe1a0c2157$var$resolve;

});


parcelRegister("87sUo", function(module, exports) {
"use strict";

var $c8ck2 = parcelRequire("c8ck2");
module.exports = $c8ck2(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same link element twice (e.g. if it was already in the HTML)
        var existingLinks = document.getElementsByTagName('link');
        if ([].concat(existingLinks).some(function(link) {
            return link.href === bundle && link.rel.indexOf('stylesheet') > -1;
        })) {
            resolve();
            return;
        }
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = bundle;
        link.onerror = function(e) {
            link.onerror = link.onload = null;
            link.remove();
            reject(e);
        };
        link.onload = function() {
            link.onerror = link.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(link);
    });
});

});
parcelRegister("c8ck2", function(module, exports) {
"use strict";
var $8d4fca513bff2d76$var$cachedBundles = {};
var $8d4fca513bff2d76$var$cachedPreloads = {};
var $8d4fca513bff2d76$var$cachedPrefetches = {};
function $8d4fca513bff2d76$var$getCache(type) {
    switch(type){
        case 'preload':
            return $8d4fca513bff2d76$var$cachedPreloads;
        case 'prefetch':
            return $8d4fca513bff2d76$var$cachedPrefetches;
        default:
            return $8d4fca513bff2d76$var$cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = $8d4fca513bff2d76$var$getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

});






