
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("86ZEt", function(module, exports) {

$parcel$export(module.exports, "WorkerManager", () => $5e7eb5021cd15fec$export$bcff6015853c67ce);
$parcel$export(module.exports, "DiagnosticsAdapter", () => $5e7eb5021cd15fec$export$8105b646adfa9bae);
$parcel$export(module.exports, "CompletionAdapter", () => $5e7eb5021cd15fec$export$49e06df83bb13a1e);
$parcel$export(module.exports, "fromPosition", () => $5e7eb5021cd15fec$export$8ba27819f9a0a3b5);
$parcel$export(module.exports, "toRange", () => $5e7eb5021cd15fec$export$12d25b3751433c6d);
$parcel$export(module.exports, "toTextEdit", () => $5e7eb5021cd15fec$export$ef01c53612c067e8);
$parcel$export(module.exports, "fromRange", () => $5e7eb5021cd15fec$export$f01e84010c13cebe);
$parcel$export(module.exports, "HoverAdapter", () => $5e7eb5021cd15fec$export$90ae7381ad9e28ec);
$parcel$export(module.exports, "DocumentHighlightAdapter", () => $5e7eb5021cd15fec$export$43e7617f9df67ed1);
$parcel$export(module.exports, "DefinitionAdapter", () => $5e7eb5021cd15fec$export$ffd9ea2d5a3f0bd5);
$parcel$export(module.exports, "ReferenceAdapter", () => $5e7eb5021cd15fec$export$da977c26606f3d55);
$parcel$export(module.exports, "RenameAdapter", () => $5e7eb5021cd15fec$export$33797a450c0c0a77);
$parcel$export(module.exports, "DocumentSymbolAdapter", () => $5e7eb5021cd15fec$export$6e92bf3474907f9b);
$parcel$export(module.exports, "DocumentLinkAdapter", () => $5e7eb5021cd15fec$export$31b66168ba80848b);
$parcel$export(module.exports, "DocumentFormattingEditProvider", () => $5e7eb5021cd15fec$export$837213a13dc5abe7);
$parcel$export(module.exports, "DocumentRangeFormattingEditProvider", () => $5e7eb5021cd15fec$export$1ccdec097412b75c);
$parcel$export(module.exports, "DocumentColorAdapter", () => $5e7eb5021cd15fec$export$a12c46c4f6f5a524);
$parcel$export(module.exports, "FoldingRangeAdapter", () => $5e7eb5021cd15fec$export$dbee4e9a4c977c75);
$parcel$export(module.exports, "SelectionRangeAdapter", () => $5e7eb5021cd15fec$export$b7d0513de581c681);
$parcel$export(module.exports, "getWorker", () => $5e7eb5021cd15fec$export$1df3c82ba2084fe8);
$parcel$export(module.exports, "setupMode", () => $5e7eb5021cd15fec$export$6df00d141df42469);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ 
var $leKFq = parcelRequire("leKFq");
var $5e7eb5021cd15fec$var$__defProp = Object.defineProperty;
var $5e7eb5021cd15fec$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $5e7eb5021cd15fec$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $5e7eb5021cd15fec$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $5e7eb5021cd15fec$var$__copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of $5e7eb5021cd15fec$var$__getOwnPropNames(from))if (!$5e7eb5021cd15fec$var$__hasOwnProp.call(to, key) && key !== except) $5e7eb5021cd15fec$var$__defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = $5e7eb5021cd15fec$var$__getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var $5e7eb5021cd15fec$var$__reExport = (target, mod, secondTarget)=>($5e7eb5021cd15fec$var$__copyProps(target, mod, "default"), secondTarget && $5e7eb5021cd15fec$var$__copyProps(secondTarget, mod, "default"));
// src/fillers/monaco-editor-core.ts
var $5e7eb5021cd15fec$var$monaco_editor_core_exports = {};
$5e7eb5021cd15fec$var$__reExport($5e7eb5021cd15fec$var$monaco_editor_core_exports, $leKFq);
// src/language/json/workerManager.ts
var $5e7eb5021cd15fec$var$STOP_WHEN_IDLE_FOR = 120000;
var $5e7eb5021cd15fec$export$bcff6015853c67ce = class {
    constructor(defaults){
        this._defaults = defaults;
        this._worker = null;
        this._client = null;
        this._idleCheckInterval = window.setInterval(()=>this._checkIfIdle(), 30000);
        this._lastUsedTime = 0;
        this._configChangeListener = this._defaults.onDidChange(()=>this._stopWorker());
    }
    _stopWorker() {
        if (this._worker) {
            this._worker.dispose();
            this._worker = null;
        }
        this._client = null;
    }
    dispose() {
        clearInterval(this._idleCheckInterval);
        this._configChangeListener.dispose();
        this._stopWorker();
    }
    _checkIfIdle() {
        if (!this._worker) return;
        let timePassedSinceLastUsed = Date.now() - this._lastUsedTime;
        if (timePassedSinceLastUsed > $5e7eb5021cd15fec$var$STOP_WHEN_IDLE_FOR) this._stopWorker();
    }
    _getClient() {
        this._lastUsedTime = Date.now();
        if (!this._client) {
            this._worker = $5e7eb5021cd15fec$var$monaco_editor_core_exports.editor.createWebWorker({
                // module that exports the create() method and returns a `JSONWorker` instance
                moduleId: "vs/language/json/jsonWorker",
                label: this._defaults.languageId,
                // passed in to the create() method
                createData: {
                    languageSettings: this._defaults.diagnosticsOptions,
                    languageId: this._defaults.languageId,
                    enableSchemaRequest: this._defaults.diagnosticsOptions.enableSchemaRequest
                }
            });
            this._client = this._worker.getProxy();
        }
        return this._client;
    }
    getLanguageServiceWorker(...resources) {
        let _client;
        return this._getClient().then((client)=>{
            _client = client;
        }).then((_)=>{
            if (this._worker) return this._worker.withSyncedResources(resources);
        }).then((_)=>_client);
    }
};
// node_modules/vscode-languageserver-types/lib/esm/main.js
var $5e7eb5021cd15fec$var$DocumentUri;
(function(DocumentUri2) {
    function is(value) {
        return typeof value === "string";
    }
    DocumentUri2.is = is;
})($5e7eb5021cd15fec$var$DocumentUri || ($5e7eb5021cd15fec$var$DocumentUri = {}));
var $5e7eb5021cd15fec$var$URI;
(function(URI2) {
    function is(value) {
        return typeof value === "string";
    }
    URI2.is = is;
})($5e7eb5021cd15fec$var$URI || ($5e7eb5021cd15fec$var$URI = {}));
var $5e7eb5021cd15fec$var$integer;
(function(integer2) {
    integer2.MIN_VALUE = -2147483648;
    integer2.MAX_VALUE = 2147483647;
    function is(value) {
        return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
    }
    integer2.is = is;
})($5e7eb5021cd15fec$var$integer || ($5e7eb5021cd15fec$var$integer = {}));
var $5e7eb5021cd15fec$var$uinteger;
(function(uinteger2) {
    uinteger2.MIN_VALUE = 0;
    uinteger2.MAX_VALUE = 2147483647;
    function is(value) {
        return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
    }
    uinteger2.is = is;
})($5e7eb5021cd15fec$var$uinteger || ($5e7eb5021cd15fec$var$uinteger = {}));
var $5e7eb5021cd15fec$var$Position;
(function(Position3) {
    function create(line, character) {
        if (line === Number.MAX_VALUE) line = $5e7eb5021cd15fec$var$uinteger.MAX_VALUE;
        if (character === Number.MAX_VALUE) character = $5e7eb5021cd15fec$var$uinteger.MAX_VALUE;
        return {
            line: line,
            character: character
        };
    }
    Position3.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && $5e7eb5021cd15fec$var$Is.uinteger(candidate.line) && $5e7eb5021cd15fec$var$Is.uinteger(candidate.character);
    }
    Position3.is = is;
})($5e7eb5021cd15fec$var$Position || ($5e7eb5021cd15fec$var$Position = {}));
var $5e7eb5021cd15fec$var$Range;
(function(Range3) {
    function create(one, two, three, four) {
        if ($5e7eb5021cd15fec$var$Is.uinteger(one) && $5e7eb5021cd15fec$var$Is.uinteger(two) && $5e7eb5021cd15fec$var$Is.uinteger(three) && $5e7eb5021cd15fec$var$Is.uinteger(four)) return {
            start: $5e7eb5021cd15fec$var$Position.create(one, two),
            end: $5e7eb5021cd15fec$var$Position.create(three, four)
        };
        else if ($5e7eb5021cd15fec$var$Position.is(one) && $5e7eb5021cd15fec$var$Position.is(two)) return {
            start: one,
            end: two
        };
        else throw new Error(`Range#create called with invalid arguments[${one}, ${two}, ${three}, ${four}]`);
    }
    Range3.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && $5e7eb5021cd15fec$var$Position.is(candidate.start) && $5e7eb5021cd15fec$var$Position.is(candidate.end);
    }
    Range3.is = is;
})($5e7eb5021cd15fec$var$Range || ($5e7eb5021cd15fec$var$Range = {}));
var $5e7eb5021cd15fec$var$Location;
(function(Location2) {
    function create(uri, range) {
        return {
            uri: uri,
            range: range
        };
    }
    Location2.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && $5e7eb5021cd15fec$var$Range.is(candidate.range) && ($5e7eb5021cd15fec$var$Is.string(candidate.uri) || $5e7eb5021cd15fec$var$Is.undefined(candidate.uri));
    }
    Location2.is = is;
})($5e7eb5021cd15fec$var$Location || ($5e7eb5021cd15fec$var$Location = {}));
var $5e7eb5021cd15fec$var$LocationLink;
(function(LocationLink2) {
    function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return {
            targetUri: targetUri,
            targetRange: targetRange,
            targetSelectionRange: targetSelectionRange,
            originSelectionRange: originSelectionRange
        };
    }
    LocationLink2.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && $5e7eb5021cd15fec$var$Range.is(candidate.targetRange) && $5e7eb5021cd15fec$var$Is.string(candidate.targetUri) && $5e7eb5021cd15fec$var$Range.is(candidate.targetSelectionRange) && ($5e7eb5021cd15fec$var$Range.is(candidate.originSelectionRange) || $5e7eb5021cd15fec$var$Is.undefined(candidate.originSelectionRange));
    }
    LocationLink2.is = is;
})($5e7eb5021cd15fec$var$LocationLink || ($5e7eb5021cd15fec$var$LocationLink = {}));
var $5e7eb5021cd15fec$var$Color;
(function(Color2) {
    function create(red, green, blue, alpha) {
        return {
            red: red,
            green: green,
            blue: blue,
            alpha: alpha
        };
    }
    Color2.create = create;
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && $5e7eb5021cd15fec$var$Is.numberRange(candidate.red, 0, 1) && $5e7eb5021cd15fec$var$Is.numberRange(candidate.green, 0, 1) && $5e7eb5021cd15fec$var$Is.numberRange(candidate.blue, 0, 1) && $5e7eb5021cd15fec$var$Is.numberRange(candidate.alpha, 0, 1);
    }
    Color2.is = is;
})($5e7eb5021cd15fec$var$Color || ($5e7eb5021cd15fec$var$Color = {}));
var $5e7eb5021cd15fec$var$ColorInformation;
(function(ColorInformation2) {
    function create(range, color) {
        return {
            range: range,
            color: color
        };
    }
    ColorInformation2.create = create;
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && $5e7eb5021cd15fec$var$Range.is(candidate.range) && $5e7eb5021cd15fec$var$Color.is(candidate.color);
    }
    ColorInformation2.is = is;
})($5e7eb5021cd15fec$var$ColorInformation || ($5e7eb5021cd15fec$var$ColorInformation = {}));
var $5e7eb5021cd15fec$var$ColorPresentation;
(function(ColorPresentation2) {
    function create(label, textEdit, additionalTextEdits) {
        return {
            label: label,
            textEdit: textEdit,
            additionalTextEdits: additionalTextEdits
        };
    }
    ColorPresentation2.create = create;
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && $5e7eb5021cd15fec$var$Is.string(candidate.label) && ($5e7eb5021cd15fec$var$Is.undefined(candidate.textEdit) || $5e7eb5021cd15fec$var$TextEdit.is(candidate)) && ($5e7eb5021cd15fec$var$Is.undefined(candidate.additionalTextEdits) || $5e7eb5021cd15fec$var$Is.typedArray(candidate.additionalTextEdits, $5e7eb5021cd15fec$var$TextEdit.is));
    }
    ColorPresentation2.is = is;
})($5e7eb5021cd15fec$var$ColorPresentation || ($5e7eb5021cd15fec$var$ColorPresentation = {}));
var $5e7eb5021cd15fec$var$FoldingRangeKind;
(function(FoldingRangeKind2) {
    FoldingRangeKind2.Comment = "comment";
    FoldingRangeKind2.Imports = "imports";
    FoldingRangeKind2.Region = "region";
})($5e7eb5021cd15fec$var$FoldingRangeKind || ($5e7eb5021cd15fec$var$FoldingRangeKind = {}));
var $5e7eb5021cd15fec$var$FoldingRange;
(function(FoldingRange2) {
    function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
        const result = {
            startLine: startLine,
            endLine: endLine
        };
        if ($5e7eb5021cd15fec$var$Is.defined(startCharacter)) result.startCharacter = startCharacter;
        if ($5e7eb5021cd15fec$var$Is.defined(endCharacter)) result.endCharacter = endCharacter;
        if ($5e7eb5021cd15fec$var$Is.defined(kind)) result.kind = kind;
        if ($5e7eb5021cd15fec$var$Is.defined(collapsedText)) result.collapsedText = collapsedText;
        return result;
    }
    FoldingRange2.create = create;
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && $5e7eb5021cd15fec$var$Is.uinteger(candidate.startLine) && $5e7eb5021cd15fec$var$Is.uinteger(candidate.startLine) && ($5e7eb5021cd15fec$var$Is.undefined(candidate.startCharacter) || $5e7eb5021cd15fec$var$Is.uinteger(candidate.startCharacter)) && ($5e7eb5021cd15fec$var$Is.undefined(candidate.endCharacter) || $5e7eb5021cd15fec$var$Is.uinteger(candidate.endCharacter)) && ($5e7eb5021cd15fec$var$Is.undefined(candidate.kind) || $5e7eb5021cd15fec$var$Is.string(candidate.kind));
    }
    FoldingRange2.is = is;
})($5e7eb5021cd15fec$var$FoldingRange || ($5e7eb5021cd15fec$var$FoldingRange = {}));
var $5e7eb5021cd15fec$var$DiagnosticRelatedInformation;
(function(DiagnosticRelatedInformation2) {
    function create(location, message) {
        return {
            location: location,
            message: message
        };
    }
    DiagnosticRelatedInformation2.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.defined(candidate) && $5e7eb5021cd15fec$var$Location.is(candidate.location) && $5e7eb5021cd15fec$var$Is.string(candidate.message);
    }
    DiagnosticRelatedInformation2.is = is;
})($5e7eb5021cd15fec$var$DiagnosticRelatedInformation || ($5e7eb5021cd15fec$var$DiagnosticRelatedInformation = {}));
var $5e7eb5021cd15fec$var$DiagnosticSeverity;
(function(DiagnosticSeverity2) {
    DiagnosticSeverity2.Error = 1;
    DiagnosticSeverity2.Warning = 2;
    DiagnosticSeverity2.Information = 3;
    DiagnosticSeverity2.Hint = 4;
})($5e7eb5021cd15fec$var$DiagnosticSeverity || ($5e7eb5021cd15fec$var$DiagnosticSeverity = {}));
var $5e7eb5021cd15fec$var$DiagnosticTag;
(function(DiagnosticTag2) {
    DiagnosticTag2.Unnecessary = 1;
    DiagnosticTag2.Deprecated = 2;
})($5e7eb5021cd15fec$var$DiagnosticTag || ($5e7eb5021cd15fec$var$DiagnosticTag = {}));
var $5e7eb5021cd15fec$var$CodeDescription;
(function(CodeDescription2) {
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && $5e7eb5021cd15fec$var$Is.string(candidate.href);
    }
    CodeDescription2.is = is;
})($5e7eb5021cd15fec$var$CodeDescription || ($5e7eb5021cd15fec$var$CodeDescription = {}));
var $5e7eb5021cd15fec$var$Diagnostic;
(function(Diagnostic2) {
    function create(range, message, severity, code, source, relatedInformation) {
        let result = {
            range: range,
            message: message
        };
        if ($5e7eb5021cd15fec$var$Is.defined(severity)) result.severity = severity;
        if ($5e7eb5021cd15fec$var$Is.defined(code)) result.code = code;
        if ($5e7eb5021cd15fec$var$Is.defined(source)) result.source = source;
        if ($5e7eb5021cd15fec$var$Is.defined(relatedInformation)) result.relatedInformation = relatedInformation;
        return result;
    }
    Diagnostic2.create = create;
    function is(value) {
        var _a;
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.defined(candidate) && $5e7eb5021cd15fec$var$Range.is(candidate.range) && $5e7eb5021cd15fec$var$Is.string(candidate.message) && ($5e7eb5021cd15fec$var$Is.number(candidate.severity) || $5e7eb5021cd15fec$var$Is.undefined(candidate.severity)) && ($5e7eb5021cd15fec$var$Is.integer(candidate.code) || $5e7eb5021cd15fec$var$Is.string(candidate.code) || $5e7eb5021cd15fec$var$Is.undefined(candidate.code)) && ($5e7eb5021cd15fec$var$Is.undefined(candidate.codeDescription) || $5e7eb5021cd15fec$var$Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && ($5e7eb5021cd15fec$var$Is.string(candidate.source) || $5e7eb5021cd15fec$var$Is.undefined(candidate.source)) && ($5e7eb5021cd15fec$var$Is.undefined(candidate.relatedInformation) || $5e7eb5021cd15fec$var$Is.typedArray(candidate.relatedInformation, $5e7eb5021cd15fec$var$DiagnosticRelatedInformation.is));
    }
    Diagnostic2.is = is;
})($5e7eb5021cd15fec$var$Diagnostic || ($5e7eb5021cd15fec$var$Diagnostic = {}));
var $5e7eb5021cd15fec$var$Command;
(function(Command2) {
    function create(title, command, ...args) {
        let result = {
            title: title,
            command: command
        };
        if ($5e7eb5021cd15fec$var$Is.defined(args) && args.length > 0) result.arguments = args;
        return result;
    }
    Command2.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.defined(candidate) && $5e7eb5021cd15fec$var$Is.string(candidate.title) && $5e7eb5021cd15fec$var$Is.string(candidate.command);
    }
    Command2.is = is;
})($5e7eb5021cd15fec$var$Command || ($5e7eb5021cd15fec$var$Command = {}));
var $5e7eb5021cd15fec$var$TextEdit;
(function(TextEdit2) {
    function replace(range, newText) {
        return {
            range: range,
            newText: newText
        };
    }
    TextEdit2.replace = replace;
    function insert(position, newText) {
        return {
            range: {
                start: position,
                end: position
            },
            newText: newText
        };
    }
    TextEdit2.insert = insert;
    function del(range) {
        return {
            range: range,
            newText: ""
        };
    }
    TextEdit2.del = del;
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && $5e7eb5021cd15fec$var$Is.string(candidate.newText) && $5e7eb5021cd15fec$var$Range.is(candidate.range);
    }
    TextEdit2.is = is;
})($5e7eb5021cd15fec$var$TextEdit || ($5e7eb5021cd15fec$var$TextEdit = {}));
var $5e7eb5021cd15fec$var$ChangeAnnotation;
(function(ChangeAnnotation2) {
    function create(label, needsConfirmation, description) {
        const result = {
            label: label
        };
        if (needsConfirmation !== void 0) result.needsConfirmation = needsConfirmation;
        if (description !== void 0) result.description = description;
        return result;
    }
    ChangeAnnotation2.create = create;
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && $5e7eb5021cd15fec$var$Is.string(candidate.label) && ($5e7eb5021cd15fec$var$Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && ($5e7eb5021cd15fec$var$Is.string(candidate.description) || candidate.description === void 0);
    }
    ChangeAnnotation2.is = is;
})($5e7eb5021cd15fec$var$ChangeAnnotation || ($5e7eb5021cd15fec$var$ChangeAnnotation = {}));
var $5e7eb5021cd15fec$var$ChangeAnnotationIdentifier;
(function(ChangeAnnotationIdentifier2) {
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$Is.string(candidate);
    }
    ChangeAnnotationIdentifier2.is = is;
})($5e7eb5021cd15fec$var$ChangeAnnotationIdentifier || ($5e7eb5021cd15fec$var$ChangeAnnotationIdentifier = {}));
var $5e7eb5021cd15fec$var$AnnotatedTextEdit;
(function(AnnotatedTextEdit2) {
    function replace(range, newText, annotation) {
        return {
            range: range,
            newText: newText,
            annotationId: annotation
        };
    }
    AnnotatedTextEdit2.replace = replace;
    function insert(position, newText, annotation) {
        return {
            range: {
                start: position,
                end: position
            },
            newText: newText,
            annotationId: annotation
        };
    }
    AnnotatedTextEdit2.insert = insert;
    function del(range, annotation) {
        return {
            range: range,
            newText: "",
            annotationId: annotation
        };
    }
    AnnotatedTextEdit2.del = del;
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$TextEdit.is(candidate) && ($5e7eb5021cd15fec$var$ChangeAnnotation.is(candidate.annotationId) || $5e7eb5021cd15fec$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    AnnotatedTextEdit2.is = is;
})($5e7eb5021cd15fec$var$AnnotatedTextEdit || ($5e7eb5021cd15fec$var$AnnotatedTextEdit = {}));
var $5e7eb5021cd15fec$var$TextDocumentEdit;
(function(TextDocumentEdit2) {
    function create(textDocument, edits) {
        return {
            textDocument: textDocument,
            edits: edits
        };
    }
    TextDocumentEdit2.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.defined(candidate) && $5e7eb5021cd15fec$var$OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
    }
    TextDocumentEdit2.is = is;
})($5e7eb5021cd15fec$var$TextDocumentEdit || ($5e7eb5021cd15fec$var$TextDocumentEdit = {}));
var $5e7eb5021cd15fec$var$CreateFile;
(function(CreateFile2) {
    function create(uri, options, annotation) {
        let result = {
            kind: "create",
            uri: uri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) result.options = options;
        if (annotation !== void 0) result.annotationId = annotation;
        return result;
    }
    CreateFile2.create = create;
    function is(value) {
        let candidate = value;
        return candidate && candidate.kind === "create" && $5e7eb5021cd15fec$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $5e7eb5021cd15fec$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $5e7eb5021cd15fec$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $5e7eb5021cd15fec$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    CreateFile2.is = is;
})($5e7eb5021cd15fec$var$CreateFile || ($5e7eb5021cd15fec$var$CreateFile = {}));
var $5e7eb5021cd15fec$var$RenameFile;
(function(RenameFile2) {
    function create(oldUri, newUri, options, annotation) {
        let result = {
            kind: "rename",
            oldUri: oldUri,
            newUri: newUri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) result.options = options;
        if (annotation !== void 0) result.annotationId = annotation;
        return result;
    }
    RenameFile2.create = create;
    function is(value) {
        let candidate = value;
        return candidate && candidate.kind === "rename" && $5e7eb5021cd15fec$var$Is.string(candidate.oldUri) && $5e7eb5021cd15fec$var$Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $5e7eb5021cd15fec$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $5e7eb5021cd15fec$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $5e7eb5021cd15fec$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    RenameFile2.is = is;
})($5e7eb5021cd15fec$var$RenameFile || ($5e7eb5021cd15fec$var$RenameFile = {}));
var $5e7eb5021cd15fec$var$DeleteFile;
(function(DeleteFile2) {
    function create(uri, options, annotation) {
        let result = {
            kind: "delete",
            uri: uri
        };
        if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) result.options = options;
        if (annotation !== void 0) result.annotationId = annotation;
        return result;
    }
    DeleteFile2.create = create;
    function is(value) {
        let candidate = value;
        return candidate && candidate.kind === "delete" && $5e7eb5021cd15fec$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || $5e7eb5021cd15fec$var$Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || $5e7eb5021cd15fec$var$Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || $5e7eb5021cd15fec$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    DeleteFile2.is = is;
})($5e7eb5021cd15fec$var$DeleteFile || ($5e7eb5021cd15fec$var$DeleteFile = {}));
var $5e7eb5021cd15fec$var$WorkspaceEdit;
(function(WorkspaceEdit2) {
    function is(value) {
        let candidate = value;
        return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every((change)=>{
            if ($5e7eb5021cd15fec$var$Is.string(change.kind)) return $5e7eb5021cd15fec$var$CreateFile.is(change) || $5e7eb5021cd15fec$var$RenameFile.is(change) || $5e7eb5021cd15fec$var$DeleteFile.is(change);
            else return $5e7eb5021cd15fec$var$TextDocumentEdit.is(change);
        }));
    }
    WorkspaceEdit2.is = is;
})($5e7eb5021cd15fec$var$WorkspaceEdit || ($5e7eb5021cd15fec$var$WorkspaceEdit = {}));
var $5e7eb5021cd15fec$var$TextDocumentIdentifier;
(function(TextDocumentIdentifier2) {
    function create(uri) {
        return {
            uri: uri
        };
    }
    TextDocumentIdentifier2.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.defined(candidate) && $5e7eb5021cd15fec$var$Is.string(candidate.uri);
    }
    TextDocumentIdentifier2.is = is;
})($5e7eb5021cd15fec$var$TextDocumentIdentifier || ($5e7eb5021cd15fec$var$TextDocumentIdentifier = {}));
var $5e7eb5021cd15fec$var$VersionedTextDocumentIdentifier;
(function(VersionedTextDocumentIdentifier2) {
    function create(uri, version) {
        return {
            uri: uri,
            version: version
        };
    }
    VersionedTextDocumentIdentifier2.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.defined(candidate) && $5e7eb5021cd15fec$var$Is.string(candidate.uri) && $5e7eb5021cd15fec$var$Is.integer(candidate.version);
    }
    VersionedTextDocumentIdentifier2.is = is;
})($5e7eb5021cd15fec$var$VersionedTextDocumentIdentifier || ($5e7eb5021cd15fec$var$VersionedTextDocumentIdentifier = {}));
var $5e7eb5021cd15fec$var$OptionalVersionedTextDocumentIdentifier;
(function(OptionalVersionedTextDocumentIdentifier2) {
    function create(uri, version) {
        return {
            uri: uri,
            version: version
        };
    }
    OptionalVersionedTextDocumentIdentifier2.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.defined(candidate) && $5e7eb5021cd15fec$var$Is.string(candidate.uri) && (candidate.version === null || $5e7eb5021cd15fec$var$Is.integer(candidate.version));
    }
    OptionalVersionedTextDocumentIdentifier2.is = is;
})($5e7eb5021cd15fec$var$OptionalVersionedTextDocumentIdentifier || ($5e7eb5021cd15fec$var$OptionalVersionedTextDocumentIdentifier = {}));
var $5e7eb5021cd15fec$var$TextDocumentItem;
(function(TextDocumentItem2) {
    function create(uri, languageId, version, text) {
        return {
            uri: uri,
            languageId: languageId,
            version: version,
            text: text
        };
    }
    TextDocumentItem2.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.defined(candidate) && $5e7eb5021cd15fec$var$Is.string(candidate.uri) && $5e7eb5021cd15fec$var$Is.string(candidate.languageId) && $5e7eb5021cd15fec$var$Is.integer(candidate.version) && $5e7eb5021cd15fec$var$Is.string(candidate.text);
    }
    TextDocumentItem2.is = is;
})($5e7eb5021cd15fec$var$TextDocumentItem || ($5e7eb5021cd15fec$var$TextDocumentItem = {}));
var $5e7eb5021cd15fec$var$MarkupKind;
(function(MarkupKind2) {
    MarkupKind2.PlainText = "plaintext";
    MarkupKind2.Markdown = "markdown";
    function is(value) {
        const candidate = value;
        return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
    }
    MarkupKind2.is = is;
})($5e7eb5021cd15fec$var$MarkupKind || ($5e7eb5021cd15fec$var$MarkupKind = {}));
var $5e7eb5021cd15fec$var$MarkupContent;
(function(MarkupContent2) {
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(value) && $5e7eb5021cd15fec$var$MarkupKind.is(candidate.kind) && $5e7eb5021cd15fec$var$Is.string(candidate.value);
    }
    MarkupContent2.is = is;
})($5e7eb5021cd15fec$var$MarkupContent || ($5e7eb5021cd15fec$var$MarkupContent = {}));
var $5e7eb5021cd15fec$var$CompletionItemKind;
(function(CompletionItemKind2) {
    CompletionItemKind2.Text = 1;
    CompletionItemKind2.Method = 2;
    CompletionItemKind2.Function = 3;
    CompletionItemKind2.Constructor = 4;
    CompletionItemKind2.Field = 5;
    CompletionItemKind2.Variable = 6;
    CompletionItemKind2.Class = 7;
    CompletionItemKind2.Interface = 8;
    CompletionItemKind2.Module = 9;
    CompletionItemKind2.Property = 10;
    CompletionItemKind2.Unit = 11;
    CompletionItemKind2.Value = 12;
    CompletionItemKind2.Enum = 13;
    CompletionItemKind2.Keyword = 14;
    CompletionItemKind2.Snippet = 15;
    CompletionItemKind2.Color = 16;
    CompletionItemKind2.File = 17;
    CompletionItemKind2.Reference = 18;
    CompletionItemKind2.Folder = 19;
    CompletionItemKind2.EnumMember = 20;
    CompletionItemKind2.Constant = 21;
    CompletionItemKind2.Struct = 22;
    CompletionItemKind2.Event = 23;
    CompletionItemKind2.Operator = 24;
    CompletionItemKind2.TypeParameter = 25;
})($5e7eb5021cd15fec$var$CompletionItemKind || ($5e7eb5021cd15fec$var$CompletionItemKind = {}));
var $5e7eb5021cd15fec$var$InsertTextFormat;
(function(InsertTextFormat2) {
    InsertTextFormat2.PlainText = 1;
    InsertTextFormat2.Snippet = 2;
})($5e7eb5021cd15fec$var$InsertTextFormat || ($5e7eb5021cd15fec$var$InsertTextFormat = {}));
var $5e7eb5021cd15fec$var$CompletionItemTag;
(function(CompletionItemTag2) {
    CompletionItemTag2.Deprecated = 1;
})($5e7eb5021cd15fec$var$CompletionItemTag || ($5e7eb5021cd15fec$var$CompletionItemTag = {}));
var $5e7eb5021cd15fec$var$InsertReplaceEdit;
(function(InsertReplaceEdit2) {
    function create(newText, insert, replace) {
        return {
            newText: newText,
            insert: insert,
            replace: replace
        };
    }
    InsertReplaceEdit2.create = create;
    function is(value) {
        const candidate = value;
        return candidate && $5e7eb5021cd15fec$var$Is.string(candidate.newText) && $5e7eb5021cd15fec$var$Range.is(candidate.insert) && $5e7eb5021cd15fec$var$Range.is(candidate.replace);
    }
    InsertReplaceEdit2.is = is;
})($5e7eb5021cd15fec$var$InsertReplaceEdit || ($5e7eb5021cd15fec$var$InsertReplaceEdit = {}));
var $5e7eb5021cd15fec$var$InsertTextMode;
(function(InsertTextMode2) {
    InsertTextMode2.asIs = 1;
    InsertTextMode2.adjustIndentation = 2;
})($5e7eb5021cd15fec$var$InsertTextMode || ($5e7eb5021cd15fec$var$InsertTextMode = {}));
var $5e7eb5021cd15fec$var$CompletionItemLabelDetails;
(function(CompletionItemLabelDetails2) {
    function is(value) {
        const candidate = value;
        return candidate && ($5e7eb5021cd15fec$var$Is.string(candidate.detail) || candidate.detail === void 0) && ($5e7eb5021cd15fec$var$Is.string(candidate.description) || candidate.description === void 0);
    }
    CompletionItemLabelDetails2.is = is;
})($5e7eb5021cd15fec$var$CompletionItemLabelDetails || ($5e7eb5021cd15fec$var$CompletionItemLabelDetails = {}));
var $5e7eb5021cd15fec$var$CompletionItem;
(function(CompletionItem2) {
    function create(label) {
        return {
            label: label
        };
    }
    CompletionItem2.create = create;
})($5e7eb5021cd15fec$var$CompletionItem || ($5e7eb5021cd15fec$var$CompletionItem = {}));
var $5e7eb5021cd15fec$var$CompletionList;
(function(CompletionList2) {
    function create(items, isIncomplete) {
        return {
            items: items ? items : [],
            isIncomplete: !!isIncomplete
        };
    }
    CompletionList2.create = create;
})($5e7eb5021cd15fec$var$CompletionList || ($5e7eb5021cd15fec$var$CompletionList = {}));
var $5e7eb5021cd15fec$var$MarkedString;
(function(MarkedString2) {
    function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    MarkedString2.fromPlainText = fromPlainText;
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$Is.string(candidate) || $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && $5e7eb5021cd15fec$var$Is.string(candidate.language) && $5e7eb5021cd15fec$var$Is.string(candidate.value);
    }
    MarkedString2.is = is;
})($5e7eb5021cd15fec$var$MarkedString || ($5e7eb5021cd15fec$var$MarkedString = {}));
var $5e7eb5021cd15fec$var$Hover;
(function(Hover2) {
    function is(value) {
        let candidate = value;
        return !!candidate && $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && ($5e7eb5021cd15fec$var$MarkupContent.is(candidate.contents) || $5e7eb5021cd15fec$var$MarkedString.is(candidate.contents) || $5e7eb5021cd15fec$var$Is.typedArray(candidate.contents, $5e7eb5021cd15fec$var$MarkedString.is)) && (value.range === void 0 || $5e7eb5021cd15fec$var$Range.is(value.range));
    }
    Hover2.is = is;
})($5e7eb5021cd15fec$var$Hover || ($5e7eb5021cd15fec$var$Hover = {}));
var $5e7eb5021cd15fec$var$ParameterInformation;
(function(ParameterInformation2) {
    function create(label, documentation) {
        return documentation ? {
            label: label,
            documentation: documentation
        } : {
            label: label
        };
    }
    ParameterInformation2.create = create;
})($5e7eb5021cd15fec$var$ParameterInformation || ($5e7eb5021cd15fec$var$ParameterInformation = {}));
var $5e7eb5021cd15fec$var$SignatureInformation;
(function(SignatureInformation2) {
    function create(label, documentation, ...parameters) {
        let result = {
            label: label
        };
        if ($5e7eb5021cd15fec$var$Is.defined(documentation)) result.documentation = documentation;
        if ($5e7eb5021cd15fec$var$Is.defined(parameters)) result.parameters = parameters;
        else result.parameters = [];
        return result;
    }
    SignatureInformation2.create = create;
})($5e7eb5021cd15fec$var$SignatureInformation || ($5e7eb5021cd15fec$var$SignatureInformation = {}));
var $5e7eb5021cd15fec$var$DocumentHighlightKind;
(function(DocumentHighlightKind2) {
    DocumentHighlightKind2.Text = 1;
    DocumentHighlightKind2.Read = 2;
    DocumentHighlightKind2.Write = 3;
})($5e7eb5021cd15fec$var$DocumentHighlightKind || ($5e7eb5021cd15fec$var$DocumentHighlightKind = {}));
var $5e7eb5021cd15fec$var$DocumentHighlight;
(function(DocumentHighlight2) {
    function create(range, kind) {
        let result = {
            range: range
        };
        if ($5e7eb5021cd15fec$var$Is.number(kind)) result.kind = kind;
        return result;
    }
    DocumentHighlight2.create = create;
})($5e7eb5021cd15fec$var$DocumentHighlight || ($5e7eb5021cd15fec$var$DocumentHighlight = {}));
var $5e7eb5021cd15fec$var$SymbolKind;
(function(SymbolKind2) {
    SymbolKind2.File = 1;
    SymbolKind2.Module = 2;
    SymbolKind2.Namespace = 3;
    SymbolKind2.Package = 4;
    SymbolKind2.Class = 5;
    SymbolKind2.Method = 6;
    SymbolKind2.Property = 7;
    SymbolKind2.Field = 8;
    SymbolKind2.Constructor = 9;
    SymbolKind2.Enum = 10;
    SymbolKind2.Interface = 11;
    SymbolKind2.Function = 12;
    SymbolKind2.Variable = 13;
    SymbolKind2.Constant = 14;
    SymbolKind2.String = 15;
    SymbolKind2.Number = 16;
    SymbolKind2.Boolean = 17;
    SymbolKind2.Array = 18;
    SymbolKind2.Object = 19;
    SymbolKind2.Key = 20;
    SymbolKind2.Null = 21;
    SymbolKind2.EnumMember = 22;
    SymbolKind2.Struct = 23;
    SymbolKind2.Event = 24;
    SymbolKind2.Operator = 25;
    SymbolKind2.TypeParameter = 26;
})($5e7eb5021cd15fec$var$SymbolKind || ($5e7eb5021cd15fec$var$SymbolKind = {}));
var $5e7eb5021cd15fec$var$SymbolTag;
(function(SymbolTag2) {
    SymbolTag2.Deprecated = 1;
})($5e7eb5021cd15fec$var$SymbolTag || ($5e7eb5021cd15fec$var$SymbolTag = {}));
var $5e7eb5021cd15fec$var$SymbolInformation;
(function(SymbolInformation2) {
    function create(name, kind, range, uri, containerName) {
        let result = {
            name: name,
            kind: kind,
            location: {
                uri: uri,
                range: range
            }
        };
        if (containerName) result.containerName = containerName;
        return result;
    }
    SymbolInformation2.create = create;
})($5e7eb5021cd15fec$var$SymbolInformation || ($5e7eb5021cd15fec$var$SymbolInformation = {}));
var $5e7eb5021cd15fec$var$WorkspaceSymbol;
(function(WorkspaceSymbol2) {
    function create(name, kind, uri, range) {
        return range !== void 0 ? {
            name: name,
            kind: kind,
            location: {
                uri: uri,
                range: range
            }
        } : {
            name: name,
            kind: kind,
            location: {
                uri: uri
            }
        };
    }
    WorkspaceSymbol2.create = create;
})($5e7eb5021cd15fec$var$WorkspaceSymbol || ($5e7eb5021cd15fec$var$WorkspaceSymbol = {}));
var $5e7eb5021cd15fec$var$DocumentSymbol;
(function(DocumentSymbol2) {
    function create(name, detail, kind, range, selectionRange, children) {
        let result = {
            name: name,
            detail: detail,
            kind: kind,
            range: range,
            selectionRange: selectionRange
        };
        if (children !== void 0) result.children = children;
        return result;
    }
    DocumentSymbol2.create = create;
    function is(value) {
        let candidate = value;
        return candidate && $5e7eb5021cd15fec$var$Is.string(candidate.name) && $5e7eb5021cd15fec$var$Is.number(candidate.kind) && $5e7eb5021cd15fec$var$Range.is(candidate.range) && $5e7eb5021cd15fec$var$Range.is(candidate.selectionRange) && (candidate.detail === void 0 || $5e7eb5021cd15fec$var$Is.string(candidate.detail)) && (candidate.deprecated === void 0 || $5e7eb5021cd15fec$var$Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
    }
    DocumentSymbol2.is = is;
})($5e7eb5021cd15fec$var$DocumentSymbol || ($5e7eb5021cd15fec$var$DocumentSymbol = {}));
var $5e7eb5021cd15fec$var$CodeActionKind;
(function(CodeActionKind2) {
    CodeActionKind2.Empty = "";
    CodeActionKind2.QuickFix = "quickfix";
    CodeActionKind2.Refactor = "refactor";
    CodeActionKind2.RefactorExtract = "refactor.extract";
    CodeActionKind2.RefactorInline = "refactor.inline";
    CodeActionKind2.RefactorRewrite = "refactor.rewrite";
    CodeActionKind2.Source = "source";
    CodeActionKind2.SourceOrganizeImports = "source.organizeImports";
    CodeActionKind2.SourceFixAll = "source.fixAll";
})($5e7eb5021cd15fec$var$CodeActionKind || ($5e7eb5021cd15fec$var$CodeActionKind = {}));
var $5e7eb5021cd15fec$var$CodeActionTriggerKind;
(function(CodeActionTriggerKind2) {
    CodeActionTriggerKind2.Invoked = 1;
    CodeActionTriggerKind2.Automatic = 2;
})($5e7eb5021cd15fec$var$CodeActionTriggerKind || ($5e7eb5021cd15fec$var$CodeActionTriggerKind = {}));
var $5e7eb5021cd15fec$var$CodeActionContext;
(function(CodeActionContext2) {
    function create(diagnostics, only, triggerKind) {
        let result = {
            diagnostics: diagnostics
        };
        if (only !== void 0 && only !== null) result.only = only;
        if (triggerKind !== void 0 && triggerKind !== null) result.triggerKind = triggerKind;
        return result;
    }
    CodeActionContext2.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.defined(candidate) && $5e7eb5021cd15fec$var$Is.typedArray(candidate.diagnostics, $5e7eb5021cd15fec$var$Diagnostic.is) && (candidate.only === void 0 || $5e7eb5021cd15fec$var$Is.typedArray(candidate.only, $5e7eb5021cd15fec$var$Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === $5e7eb5021cd15fec$var$CodeActionTriggerKind.Invoked || candidate.triggerKind === $5e7eb5021cd15fec$var$CodeActionTriggerKind.Automatic);
    }
    CodeActionContext2.is = is;
})($5e7eb5021cd15fec$var$CodeActionContext || ($5e7eb5021cd15fec$var$CodeActionContext = {}));
var $5e7eb5021cd15fec$var$CodeAction;
(function(CodeAction2) {
    function create(title, kindOrCommandOrEdit, kind) {
        let result = {
            title: title
        };
        let checkKind = true;
        if (typeof kindOrCommandOrEdit === "string") {
            checkKind = false;
            result.kind = kindOrCommandOrEdit;
        } else if ($5e7eb5021cd15fec$var$Command.is(kindOrCommandOrEdit)) result.command = kindOrCommandOrEdit;
        else result.edit = kindOrCommandOrEdit;
        if (checkKind && kind !== void 0) result.kind = kind;
        return result;
    }
    CodeAction2.create = create;
    function is(value) {
        let candidate = value;
        return candidate && $5e7eb5021cd15fec$var$Is.string(candidate.title) && (candidate.diagnostics === void 0 || $5e7eb5021cd15fec$var$Is.typedArray(candidate.diagnostics, $5e7eb5021cd15fec$var$Diagnostic.is)) && (candidate.kind === void 0 || $5e7eb5021cd15fec$var$Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || $5e7eb5021cd15fec$var$Command.is(candidate.command)) && (candidate.isPreferred === void 0 || $5e7eb5021cd15fec$var$Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || $5e7eb5021cd15fec$var$WorkspaceEdit.is(candidate.edit));
    }
    CodeAction2.is = is;
})($5e7eb5021cd15fec$var$CodeAction || ($5e7eb5021cd15fec$var$CodeAction = {}));
var $5e7eb5021cd15fec$var$CodeLens;
(function(CodeLens2) {
    function create(range, data) {
        let result = {
            range: range
        };
        if ($5e7eb5021cd15fec$var$Is.defined(data)) result.data = data;
        return result;
    }
    CodeLens2.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.defined(candidate) && $5e7eb5021cd15fec$var$Range.is(candidate.range) && ($5e7eb5021cd15fec$var$Is.undefined(candidate.command) || $5e7eb5021cd15fec$var$Command.is(candidate.command));
    }
    CodeLens2.is = is;
})($5e7eb5021cd15fec$var$CodeLens || ($5e7eb5021cd15fec$var$CodeLens = {}));
var $5e7eb5021cd15fec$var$FormattingOptions;
(function(FormattingOptions2) {
    function create(tabSize, insertSpaces) {
        return {
            tabSize: tabSize,
            insertSpaces: insertSpaces
        };
    }
    FormattingOptions2.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.defined(candidate) && $5e7eb5021cd15fec$var$Is.uinteger(candidate.tabSize) && $5e7eb5021cd15fec$var$Is.boolean(candidate.insertSpaces);
    }
    FormattingOptions2.is = is;
})($5e7eb5021cd15fec$var$FormattingOptions || ($5e7eb5021cd15fec$var$FormattingOptions = {}));
var $5e7eb5021cd15fec$var$DocumentLink;
(function(DocumentLink2) {
    function create(range, target, data) {
        return {
            range: range,
            target: target,
            data: data
        };
    }
    DocumentLink2.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.defined(candidate) && $5e7eb5021cd15fec$var$Range.is(candidate.range) && ($5e7eb5021cd15fec$var$Is.undefined(candidate.target) || $5e7eb5021cd15fec$var$Is.string(candidate.target));
    }
    DocumentLink2.is = is;
})($5e7eb5021cd15fec$var$DocumentLink || ($5e7eb5021cd15fec$var$DocumentLink = {}));
var $5e7eb5021cd15fec$var$SelectionRange;
(function(SelectionRange2) {
    function create(range, parent) {
        return {
            range: range,
            parent: parent
        };
    }
    SelectionRange2.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && $5e7eb5021cd15fec$var$Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
    }
    SelectionRange2.is = is;
})($5e7eb5021cd15fec$var$SelectionRange || ($5e7eb5021cd15fec$var$SelectionRange = {}));
var $5e7eb5021cd15fec$var$SemanticTokenTypes;
(function(SemanticTokenTypes2) {
    SemanticTokenTypes2["namespace"] = "namespace";
    SemanticTokenTypes2["type"] = "type";
    SemanticTokenTypes2["class"] = "class";
    SemanticTokenTypes2["enum"] = "enum";
    SemanticTokenTypes2["interface"] = "interface";
    SemanticTokenTypes2["struct"] = "struct";
    SemanticTokenTypes2["typeParameter"] = "typeParameter";
    SemanticTokenTypes2["parameter"] = "parameter";
    SemanticTokenTypes2["variable"] = "variable";
    SemanticTokenTypes2["property"] = "property";
    SemanticTokenTypes2["enumMember"] = "enumMember";
    SemanticTokenTypes2["event"] = "event";
    SemanticTokenTypes2["function"] = "function";
    SemanticTokenTypes2["method"] = "method";
    SemanticTokenTypes2["macro"] = "macro";
    SemanticTokenTypes2["keyword"] = "keyword";
    SemanticTokenTypes2["modifier"] = "modifier";
    SemanticTokenTypes2["comment"] = "comment";
    SemanticTokenTypes2["string"] = "string";
    SemanticTokenTypes2["number"] = "number";
    SemanticTokenTypes2["regexp"] = "regexp";
    SemanticTokenTypes2["operator"] = "operator";
    SemanticTokenTypes2["decorator"] = "decorator";
})($5e7eb5021cd15fec$var$SemanticTokenTypes || ($5e7eb5021cd15fec$var$SemanticTokenTypes = {}));
var $5e7eb5021cd15fec$var$SemanticTokenModifiers;
(function(SemanticTokenModifiers2) {
    SemanticTokenModifiers2["declaration"] = "declaration";
    SemanticTokenModifiers2["definition"] = "definition";
    SemanticTokenModifiers2["readonly"] = "readonly";
    SemanticTokenModifiers2["static"] = "static";
    SemanticTokenModifiers2["deprecated"] = "deprecated";
    SemanticTokenModifiers2["abstract"] = "abstract";
    SemanticTokenModifiers2["async"] = "async";
    SemanticTokenModifiers2["modification"] = "modification";
    SemanticTokenModifiers2["documentation"] = "documentation";
    SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
})($5e7eb5021cd15fec$var$SemanticTokenModifiers || ($5e7eb5021cd15fec$var$SemanticTokenModifiers = {}));
var $5e7eb5021cd15fec$var$SemanticTokens;
(function(SemanticTokens2) {
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
    }
    SemanticTokens2.is = is;
})($5e7eb5021cd15fec$var$SemanticTokens || ($5e7eb5021cd15fec$var$SemanticTokens = {}));
var $5e7eb5021cd15fec$var$InlineValueText;
(function(InlineValueText2) {
    function create(range, text) {
        return {
            range: range,
            text: text
        };
    }
    InlineValueText2.create = create;
    function is(value) {
        const candidate = value;
        return candidate !== void 0 && candidate !== null && $5e7eb5021cd15fec$var$Range.is(candidate.range) && $5e7eb5021cd15fec$var$Is.string(candidate.text);
    }
    InlineValueText2.is = is;
})($5e7eb5021cd15fec$var$InlineValueText || ($5e7eb5021cd15fec$var$InlineValueText = {}));
var $5e7eb5021cd15fec$var$InlineValueVariableLookup;
(function(InlineValueVariableLookup2) {
    function create(range, variableName, caseSensitiveLookup) {
        return {
            range: range,
            variableName: variableName,
            caseSensitiveLookup: caseSensitiveLookup
        };
    }
    InlineValueVariableLookup2.create = create;
    function is(value) {
        const candidate = value;
        return candidate !== void 0 && candidate !== null && $5e7eb5021cd15fec$var$Range.is(candidate.range) && $5e7eb5021cd15fec$var$Is.boolean(candidate.caseSensitiveLookup) && ($5e7eb5021cd15fec$var$Is.string(candidate.variableName) || candidate.variableName === void 0);
    }
    InlineValueVariableLookup2.is = is;
})($5e7eb5021cd15fec$var$InlineValueVariableLookup || ($5e7eb5021cd15fec$var$InlineValueVariableLookup = {}));
var $5e7eb5021cd15fec$var$InlineValueEvaluatableExpression;
(function(InlineValueEvaluatableExpression2) {
    function create(range, expression) {
        return {
            range: range,
            expression: expression
        };
    }
    InlineValueEvaluatableExpression2.create = create;
    function is(value) {
        const candidate = value;
        return candidate !== void 0 && candidate !== null && $5e7eb5021cd15fec$var$Range.is(candidate.range) && ($5e7eb5021cd15fec$var$Is.string(candidate.expression) || candidate.expression === void 0);
    }
    InlineValueEvaluatableExpression2.is = is;
})($5e7eb5021cd15fec$var$InlineValueEvaluatableExpression || ($5e7eb5021cd15fec$var$InlineValueEvaluatableExpression = {}));
var $5e7eb5021cd15fec$var$InlineValueContext;
(function(InlineValueContext2) {
    function create(frameId, stoppedLocation) {
        return {
            frameId: frameId,
            stoppedLocation: stoppedLocation
        };
    }
    InlineValueContext2.create = create;
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$Is.defined(candidate) && $5e7eb5021cd15fec$var$Range.is(value.stoppedLocation);
    }
    InlineValueContext2.is = is;
})($5e7eb5021cd15fec$var$InlineValueContext || ($5e7eb5021cd15fec$var$InlineValueContext = {}));
var $5e7eb5021cd15fec$var$InlayHintKind;
(function(InlayHintKind2) {
    InlayHintKind2.Type = 1;
    InlayHintKind2.Parameter = 2;
    function is(value) {
        return value === 1 || value === 2;
    }
    InlayHintKind2.is = is;
})($5e7eb5021cd15fec$var$InlayHintKind || ($5e7eb5021cd15fec$var$InlayHintKind = {}));
var $5e7eb5021cd15fec$var$InlayHintLabelPart;
(function(InlayHintLabelPart2) {
    function create(value) {
        return {
            value: value
        };
    }
    InlayHintLabelPart2.create = create;
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || $5e7eb5021cd15fec$var$Is.string(candidate.tooltip) || $5e7eb5021cd15fec$var$MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || $5e7eb5021cd15fec$var$Location.is(candidate.location)) && (candidate.command === void 0 || $5e7eb5021cd15fec$var$Command.is(candidate.command));
    }
    InlayHintLabelPart2.is = is;
})($5e7eb5021cd15fec$var$InlayHintLabelPart || ($5e7eb5021cd15fec$var$InlayHintLabelPart = {}));
var $5e7eb5021cd15fec$var$InlayHint;
(function(InlayHint2) {
    function create(position, label, kind) {
        const result = {
            position: position,
            label: label
        };
        if (kind !== void 0) result.kind = kind;
        return result;
    }
    InlayHint2.create = create;
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && $5e7eb5021cd15fec$var$Position.is(candidate.position) && ($5e7eb5021cd15fec$var$Is.string(candidate.label) || $5e7eb5021cd15fec$var$Is.typedArray(candidate.label, $5e7eb5021cd15fec$var$InlayHintLabelPart.is)) && (candidate.kind === void 0 || $5e7eb5021cd15fec$var$InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || $5e7eb5021cd15fec$var$Is.typedArray(candidate.textEdits, $5e7eb5021cd15fec$var$TextEdit.is) && (candidate.tooltip === void 0 || $5e7eb5021cd15fec$var$Is.string(candidate.tooltip) || $5e7eb5021cd15fec$var$MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || $5e7eb5021cd15fec$var$Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || $5e7eb5021cd15fec$var$Is.boolean(candidate.paddingRight));
    }
    InlayHint2.is = is;
})($5e7eb5021cd15fec$var$InlayHint || ($5e7eb5021cd15fec$var$InlayHint = {}));
var $5e7eb5021cd15fec$var$StringValue;
(function(StringValue2) {
    function createSnippet(value) {
        return {
            kind: "snippet",
            value: value
        };
    }
    StringValue2.createSnippet = createSnippet;
})($5e7eb5021cd15fec$var$StringValue || ($5e7eb5021cd15fec$var$StringValue = {}));
var $5e7eb5021cd15fec$var$InlineCompletionItem;
(function(InlineCompletionItem2) {
    function create(insertText, filterText, range, command) {
        return {
            insertText: insertText,
            filterText: filterText,
            range: range,
            command: command
        };
    }
    InlineCompletionItem2.create = create;
})($5e7eb5021cd15fec$var$InlineCompletionItem || ($5e7eb5021cd15fec$var$InlineCompletionItem = {}));
var $5e7eb5021cd15fec$var$InlineCompletionList;
(function(InlineCompletionList2) {
    function create(items) {
        return {
            items: items
        };
    }
    InlineCompletionList2.create = create;
})($5e7eb5021cd15fec$var$InlineCompletionList || ($5e7eb5021cd15fec$var$InlineCompletionList = {}));
var $5e7eb5021cd15fec$var$InlineCompletionTriggerKind;
(function(InlineCompletionTriggerKind2) {
    InlineCompletionTriggerKind2.Invoked = 0;
    InlineCompletionTriggerKind2.Automatic = 1;
})($5e7eb5021cd15fec$var$InlineCompletionTriggerKind || ($5e7eb5021cd15fec$var$InlineCompletionTriggerKind = {}));
var $5e7eb5021cd15fec$var$SelectedCompletionInfo;
(function(SelectedCompletionInfo2) {
    function create(range, text) {
        return {
            range: range,
            text: text
        };
    }
    SelectedCompletionInfo2.create = create;
})($5e7eb5021cd15fec$var$SelectedCompletionInfo || ($5e7eb5021cd15fec$var$SelectedCompletionInfo = {}));
var $5e7eb5021cd15fec$var$InlineCompletionContext;
(function(InlineCompletionContext2) {
    function create(triggerKind, selectedCompletionInfo) {
        return {
            triggerKind: triggerKind,
            selectedCompletionInfo: selectedCompletionInfo
        };
    }
    InlineCompletionContext2.create = create;
})($5e7eb5021cd15fec$var$InlineCompletionContext || ($5e7eb5021cd15fec$var$InlineCompletionContext = {}));
var $5e7eb5021cd15fec$var$WorkspaceFolder;
(function(WorkspaceFolder2) {
    function is(value) {
        const candidate = value;
        return $5e7eb5021cd15fec$var$Is.objectLiteral(candidate) && $5e7eb5021cd15fec$var$URI.is(candidate.uri) && $5e7eb5021cd15fec$var$Is.string(candidate.name);
    }
    WorkspaceFolder2.is = is;
})($5e7eb5021cd15fec$var$WorkspaceFolder || ($5e7eb5021cd15fec$var$WorkspaceFolder = {}));
var $5e7eb5021cd15fec$var$TextDocument;
(function(TextDocument2) {
    function create(uri, languageId, version, content) {
        return new $5e7eb5021cd15fec$var$FullTextDocument(uri, languageId, version, content);
    }
    TextDocument2.create = create;
    function is(value) {
        let candidate = value;
        return $5e7eb5021cd15fec$var$Is.defined(candidate) && $5e7eb5021cd15fec$var$Is.string(candidate.uri) && ($5e7eb5021cd15fec$var$Is.undefined(candidate.languageId) || $5e7eb5021cd15fec$var$Is.string(candidate.languageId)) && $5e7eb5021cd15fec$var$Is.uinteger(candidate.lineCount) && $5e7eb5021cd15fec$var$Is.func(candidate.getText) && $5e7eb5021cd15fec$var$Is.func(candidate.positionAt) && $5e7eb5021cd15fec$var$Is.func(candidate.offsetAt) ? true : false;
    }
    TextDocument2.is = is;
    function applyEdits(document, edits) {
        let text = document.getText();
        let sortedEdits = mergeSort(edits, (a, b)=>{
            let diff = a.range.start.line - b.range.start.line;
            if (diff === 0) return a.range.start.character - b.range.start.character;
            return diff;
        });
        let lastModifiedOffset = text.length;
        for(let i = sortedEdits.length - 1; i >= 0; i--){
            let e = sortedEdits[i];
            let startOffset = document.offsetAt(e.range.start);
            let endOffset = document.offsetAt(e.range.end);
            if (endOffset <= lastModifiedOffset) text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
            else throw new Error("Overlapping edit");
            lastModifiedOffset = startOffset;
        }
        return text;
    }
    TextDocument2.applyEdits = applyEdits;
    function mergeSort(data, compare) {
        if (data.length <= 1) return data;
        const p = data.length / 2 | 0;
        const left = data.slice(0, p);
        const right = data.slice(p);
        mergeSort(left, compare);
        mergeSort(right, compare);
        let leftIdx = 0;
        let rightIdx = 0;
        let i = 0;
        while(leftIdx < left.length && rightIdx < right.length){
            let ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) data[i++] = left[leftIdx++];
            else data[i++] = right[rightIdx++];
        }
        while(leftIdx < left.length)data[i++] = left[leftIdx++];
        while(rightIdx < right.length)data[i++] = right[rightIdx++];
        return data;
    }
})($5e7eb5021cd15fec$var$TextDocument || ($5e7eb5021cd15fec$var$TextDocument = {}));
var $5e7eb5021cd15fec$var$FullTextDocument = class {
    constructor(uri, languageId, version, content){
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = void 0;
    }
    get uri() {
        return this._uri;
    }
    get languageId() {
        return this._languageId;
    }
    get version() {
        return this._version;
    }
    getText(range) {
        if (range) {
            let start = this.offsetAt(range.start);
            let end = this.offsetAt(range.end);
            return this._content.substring(start, end);
        }
        return this._content;
    }
    update(event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = void 0;
    }
    getLineOffsets() {
        if (this._lineOffsets === void 0) {
            let lineOffsets = [];
            let text = this._content;
            let isLineStart = true;
            for(let i = 0; i < text.length; i++){
                if (isLineStart) {
                    lineOffsets.push(i);
                    isLineStart = false;
                }
                let ch = text.charAt(i);
                isLineStart = ch === "\r" || ch === "\n";
                if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") i++;
            }
            if (isLineStart && text.length > 0) lineOffsets.push(text.length);
            this._lineOffsets = lineOffsets;
        }
        return this._lineOffsets;
    }
    positionAt(offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        let lineOffsets = this.getLineOffsets();
        let low = 0, high = lineOffsets.length;
        if (high === 0) return $5e7eb5021cd15fec$var$Position.create(0, offset);
        while(low < high){
            let mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) high = mid;
            else low = mid + 1;
        }
        let line = low - 1;
        return $5e7eb5021cd15fec$var$Position.create(line, offset - lineOffsets[line]);
    }
    offsetAt(position) {
        let lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) return this._content.length;
        else if (position.line < 0) return 0;
        let lineOffset = lineOffsets[position.line];
        let nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    }
    get lineCount() {
        return this.getLineOffsets().length;
    }
};
var $5e7eb5021cd15fec$var$Is;
(function(Is2) {
    const toString = Object.prototype.toString;
    function defined(value) {
        return typeof value !== "undefined";
    }
    Is2.defined = defined;
    function undefined2(value) {
        return typeof value === "undefined";
    }
    Is2.undefined = undefined2;
    function boolean(value) {
        return value === true || value === false;
    }
    Is2.boolean = boolean;
    function string(value) {
        return toString.call(value) === "[object String]";
    }
    Is2.string = string;
    function number(value) {
        return toString.call(value) === "[object Number]";
    }
    Is2.number = number;
    function numberRange(value, min, max) {
        return toString.call(value) === "[object Number]" && min <= value && value <= max;
    }
    Is2.numberRange = numberRange;
    function integer2(value) {
        return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
    }
    Is2.integer = integer2;
    function uinteger2(value) {
        return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
    }
    Is2.uinteger = uinteger2;
    function func(value) {
        return toString.call(value) === "[object Function]";
    }
    Is2.func = func;
    function objectLiteral(value) {
        return value !== null && typeof value === "object";
    }
    Is2.objectLiteral = objectLiteral;
    function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
    }
    Is2.typedArray = typedArray;
})($5e7eb5021cd15fec$var$Is || ($5e7eb5021cd15fec$var$Is = {}));
// src/language/common/lspLanguageFeatures.ts
var $5e7eb5021cd15fec$export$8105b646adfa9bae = class {
    constructor(_languageId, _worker, configChangeEvent){
        this._languageId = _languageId;
        this._worker = _worker;
        this._disposables = [];
        this._listener = /* @__PURE__ */ Object.create(null);
        const onModelAdd = (model)=>{
            let modeId = model.getLanguageId();
            if (modeId !== this._languageId) return;
            let handle;
            this._listener[model.uri.toString()] = model.onDidChangeContent(()=>{
                window.clearTimeout(handle);
                handle = window.setTimeout(()=>this._doValidate(model.uri, modeId), 500);
            });
            this._doValidate(model.uri, modeId);
        };
        const onModelRemoved = (model)=>{
            $5e7eb5021cd15fec$var$monaco_editor_core_exports.editor.setModelMarkers(model, this._languageId, []);
            let uriStr = model.uri.toString();
            let listener = this._listener[uriStr];
            if (listener) {
                listener.dispose();
                delete this._listener[uriStr];
            }
        };
        this._disposables.push($5e7eb5021cd15fec$var$monaco_editor_core_exports.editor.onDidCreateModel(onModelAdd));
        this._disposables.push($5e7eb5021cd15fec$var$monaco_editor_core_exports.editor.onWillDisposeModel(onModelRemoved));
        this._disposables.push($5e7eb5021cd15fec$var$monaco_editor_core_exports.editor.onDidChangeModelLanguage((event)=>{
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        this._disposables.push(configChangeEvent((_)=>{
            $5e7eb5021cd15fec$var$monaco_editor_core_exports.editor.getModels().forEach((model)=>{
                if (model.getLanguageId() === this._languageId) {
                    onModelRemoved(model);
                    onModelAdd(model);
                }
            });
        }));
        this._disposables.push({
            dispose: ()=>{
                $5e7eb5021cd15fec$var$monaco_editor_core_exports.editor.getModels().forEach(onModelRemoved);
                for(let key in this._listener)this._listener[key].dispose();
            }
        });
        $5e7eb5021cd15fec$var$monaco_editor_core_exports.editor.getModels().forEach(onModelAdd);
    }
    dispose() {
        this._disposables.forEach((d)=>d && d.dispose());
        this._disposables.length = 0;
    }
    _doValidate(resource, languageId) {
        this._worker(resource).then((worker2)=>{
            return worker2.doValidation(resource.toString());
        }).then((diagnostics)=>{
            const markers = diagnostics.map((d)=>$5e7eb5021cd15fec$var$toDiagnostics(resource, d));
            let model = $5e7eb5021cd15fec$var$monaco_editor_core_exports.editor.getModel(resource);
            if (model && model.getLanguageId() === languageId) $5e7eb5021cd15fec$var$monaco_editor_core_exports.editor.setModelMarkers(model, languageId, markers);
        }).then(void 0, (err)=>{
            console.error(err);
        });
    }
};
function $5e7eb5021cd15fec$var$toSeverity(lsSeverity) {
    switch(lsSeverity){
        case $5e7eb5021cd15fec$var$DiagnosticSeverity.Error:
            return $5e7eb5021cd15fec$var$monaco_editor_core_exports.MarkerSeverity.Error;
        case $5e7eb5021cd15fec$var$DiagnosticSeverity.Warning:
            return $5e7eb5021cd15fec$var$monaco_editor_core_exports.MarkerSeverity.Warning;
        case $5e7eb5021cd15fec$var$DiagnosticSeverity.Information:
            return $5e7eb5021cd15fec$var$monaco_editor_core_exports.MarkerSeverity.Info;
        case $5e7eb5021cd15fec$var$DiagnosticSeverity.Hint:
            return $5e7eb5021cd15fec$var$monaco_editor_core_exports.MarkerSeverity.Hint;
        default:
            return $5e7eb5021cd15fec$var$monaco_editor_core_exports.MarkerSeverity.Info;
    }
}
function $5e7eb5021cd15fec$var$toDiagnostics(resource, diag) {
    let code = typeof diag.code === "number" ? String(diag.code) : diag.code;
    return {
        severity: $5e7eb5021cd15fec$var$toSeverity(diag.severity),
        startLineNumber: diag.range.start.line + 1,
        startColumn: diag.range.start.character + 1,
        endLineNumber: diag.range.end.line + 1,
        endColumn: diag.range.end.character + 1,
        message: diag.message,
        code: code,
        source: diag.source
    };
}
var $5e7eb5021cd15fec$export$49e06df83bb13a1e = class {
    constructor(_worker, _triggerCharacters){
        this._worker = _worker;
        this._triggerCharacters = _triggerCharacters;
    }
    get triggerCharacters() {
        return this._triggerCharacters;
    }
    provideCompletionItems(model, position, context, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker2)=>{
            return worker2.doComplete(resource.toString(), $5e7eb5021cd15fec$export$8ba27819f9a0a3b5(position));
        }).then((info)=>{
            if (!info) return;
            const wordInfo = model.getWordUntilPosition(position);
            const wordRange = new $5e7eb5021cd15fec$var$monaco_editor_core_exports.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
            const items = info.items.map((entry)=>{
                const item = {
                    label: entry.label,
                    insertText: entry.insertText || entry.label,
                    sortText: entry.sortText,
                    filterText: entry.filterText,
                    documentation: entry.documentation,
                    detail: entry.detail,
                    command: $5e7eb5021cd15fec$var$toCommand(entry.command),
                    range: wordRange,
                    kind: $5e7eb5021cd15fec$var$toCompletionItemKind(entry.kind)
                };
                if (entry.textEdit) {
                    if ($5e7eb5021cd15fec$var$isInsertReplaceEdit(entry.textEdit)) item.range = {
                        insert: $5e7eb5021cd15fec$export$12d25b3751433c6d(entry.textEdit.insert),
                        replace: $5e7eb5021cd15fec$export$12d25b3751433c6d(entry.textEdit.replace)
                    };
                    else item.range = $5e7eb5021cd15fec$export$12d25b3751433c6d(entry.textEdit.range);
                    item.insertText = entry.textEdit.newText;
                }
                if (entry.additionalTextEdits) item.additionalTextEdits = entry.additionalTextEdits.map($5e7eb5021cd15fec$export$ef01c53612c067e8);
                if (entry.insertTextFormat === $5e7eb5021cd15fec$var$InsertTextFormat.Snippet) item.insertTextRules = $5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.CompletionItemInsertTextRule.InsertAsSnippet;
                return item;
            });
            return {
                isIncomplete: info.isIncomplete,
                suggestions: items
            };
        });
    }
};
function $5e7eb5021cd15fec$export$8ba27819f9a0a3b5(position) {
    if (!position) return void 0;
    return {
        character: position.column - 1,
        line: position.lineNumber - 1
    };
}
function $5e7eb5021cd15fec$export$f01e84010c13cebe(range) {
    if (!range) return void 0;
    return {
        start: {
            line: range.startLineNumber - 1,
            character: range.startColumn - 1
        },
        end: {
            line: range.endLineNumber - 1,
            character: range.endColumn - 1
        }
    };
}
function $5e7eb5021cd15fec$export$12d25b3751433c6d(range) {
    if (!range) return void 0;
    return new $5e7eb5021cd15fec$var$monaco_editor_core_exports.Range(range.start.line + 1, range.start.character + 1, range.end.line + 1, range.end.character + 1);
}
function $5e7eb5021cd15fec$var$isInsertReplaceEdit(edit) {
    return typeof edit.insert !== "undefined" && typeof edit.replace !== "undefined";
}
function $5e7eb5021cd15fec$var$toCompletionItemKind(kind) {
    const mItemKind = $5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.CompletionItemKind;
    switch(kind){
        case $5e7eb5021cd15fec$var$CompletionItemKind.Text:
            return mItemKind.Text;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Method:
            return mItemKind.Method;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Function:
            return mItemKind.Function;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Constructor:
            return mItemKind.Constructor;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Field:
            return mItemKind.Field;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Variable:
            return mItemKind.Variable;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Class:
            return mItemKind.Class;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Interface:
            return mItemKind.Interface;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Module:
            return mItemKind.Module;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Property:
            return mItemKind.Property;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Unit:
            return mItemKind.Unit;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Value:
            return mItemKind.Value;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Enum:
            return mItemKind.Enum;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Keyword:
            return mItemKind.Keyword;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Snippet:
            return mItemKind.Snippet;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Color:
            return mItemKind.Color;
        case $5e7eb5021cd15fec$var$CompletionItemKind.File:
            return mItemKind.File;
        case $5e7eb5021cd15fec$var$CompletionItemKind.Reference:
            return mItemKind.Reference;
    }
    return mItemKind.Property;
}
function $5e7eb5021cd15fec$export$ef01c53612c067e8(textEdit) {
    if (!textEdit) return void 0;
    return {
        range: $5e7eb5021cd15fec$export$12d25b3751433c6d(textEdit.range),
        text: textEdit.newText
    };
}
function $5e7eb5021cd15fec$var$toCommand(c) {
    return c && c.command === "editor.action.triggerSuggest" ? {
        id: c.command,
        title: c.title,
        arguments: c.arguments
    } : void 0;
}
var $5e7eb5021cd15fec$export$90ae7381ad9e28ec = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideHover(model, position, token) {
        let resource = model.uri;
        return this._worker(resource).then((worker2)=>{
            return worker2.doHover(resource.toString(), $5e7eb5021cd15fec$export$8ba27819f9a0a3b5(position));
        }).then((info)=>{
            if (!info) return;
            return {
                range: $5e7eb5021cd15fec$export$12d25b3751433c6d(info.range),
                contents: $5e7eb5021cd15fec$var$toMarkedStringArray(info.contents)
            };
        });
    }
};
function $5e7eb5021cd15fec$var$isMarkupContent(thing) {
    return thing && typeof thing === "object" && typeof thing.kind === "string";
}
function $5e7eb5021cd15fec$var$toMarkdownString(entry) {
    if (typeof entry === "string") return {
        value: entry
    };
    if ($5e7eb5021cd15fec$var$isMarkupContent(entry)) {
        if (entry.kind === "plaintext") return {
            value: entry.value.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&")
        };
        return {
            value: entry.value
        };
    }
    return {
        value: "```" + entry.language + "\n" + entry.value + "\n```\n"
    };
}
function $5e7eb5021cd15fec$var$toMarkedStringArray(contents) {
    if (!contents) return void 0;
    if (Array.isArray(contents)) return contents.map($5e7eb5021cd15fec$var$toMarkdownString);
    return [
        $5e7eb5021cd15fec$var$toMarkdownString(contents)
    ];
}
var $5e7eb5021cd15fec$export$43e7617f9df67ed1 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideDocumentHighlights(model, position, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker2)=>worker2.findDocumentHighlights(resource.toString(), $5e7eb5021cd15fec$export$8ba27819f9a0a3b5(position))).then((entries)=>{
            if (!entries) return;
            return entries.map((entry)=>{
                return {
                    range: $5e7eb5021cd15fec$export$12d25b3751433c6d(entry.range),
                    kind: $5e7eb5021cd15fec$var$toDocumentHighlightKind(entry.kind)
                };
            });
        });
    }
};
function $5e7eb5021cd15fec$var$toDocumentHighlightKind(kind) {
    switch(kind){
        case $5e7eb5021cd15fec$var$DocumentHighlightKind.Read:
            return $5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Read;
        case $5e7eb5021cd15fec$var$DocumentHighlightKind.Write:
            return $5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Write;
        case $5e7eb5021cd15fec$var$DocumentHighlightKind.Text:
            return $5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text;
    }
    return $5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text;
}
var $5e7eb5021cd15fec$export$ffd9ea2d5a3f0bd5 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideDefinition(model, position, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker2)=>{
            return worker2.findDefinition(resource.toString(), $5e7eb5021cd15fec$export$8ba27819f9a0a3b5(position));
        }).then((definition)=>{
            if (!definition) return;
            return [
                $5e7eb5021cd15fec$var$toLocation(definition)
            ];
        });
    }
};
function $5e7eb5021cd15fec$var$toLocation(location) {
    return {
        uri: $5e7eb5021cd15fec$var$monaco_editor_core_exports.Uri.parse(location.uri),
        range: $5e7eb5021cd15fec$export$12d25b3751433c6d(location.range)
    };
}
var $5e7eb5021cd15fec$export$da977c26606f3d55 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideReferences(model, position, context, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker2)=>{
            return worker2.findReferences(resource.toString(), $5e7eb5021cd15fec$export$8ba27819f9a0a3b5(position));
        }).then((entries)=>{
            if (!entries) return;
            return entries.map($5e7eb5021cd15fec$var$toLocation);
        });
    }
};
var $5e7eb5021cd15fec$export$33797a450c0c0a77 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideRenameEdits(model, position, newName, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker2)=>{
            return worker2.doRename(resource.toString(), $5e7eb5021cd15fec$export$8ba27819f9a0a3b5(position), newName);
        }).then((edit)=>{
            return $5e7eb5021cd15fec$var$toWorkspaceEdit(edit);
        });
    }
};
function $5e7eb5021cd15fec$var$toWorkspaceEdit(edit) {
    if (!edit || !edit.changes) return void 0;
    let resourceEdits = [];
    for(let uri in edit.changes){
        const _uri = $5e7eb5021cd15fec$var$monaco_editor_core_exports.Uri.parse(uri);
        for (let e of edit.changes[uri])resourceEdits.push({
            resource: _uri,
            versionId: void 0,
            textEdit: {
                range: $5e7eb5021cd15fec$export$12d25b3751433c6d(e.range),
                text: e.newText
            }
        });
    }
    return {
        edits: resourceEdits
    };
}
var $5e7eb5021cd15fec$export$6e92bf3474907f9b = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideDocumentSymbols(model, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker2)=>worker2.findDocumentSymbols(resource.toString())).then((items)=>{
            if (!items) return;
            return items.map((item)=>{
                if ($5e7eb5021cd15fec$var$isDocumentSymbol(item)) return $5e7eb5021cd15fec$var$toDocumentSymbol(item);
                return {
                    name: item.name,
                    detail: "",
                    containerName: item.containerName,
                    kind: $5e7eb5021cd15fec$var$toSymbolKind(item.kind),
                    range: $5e7eb5021cd15fec$export$12d25b3751433c6d(item.location.range),
                    selectionRange: $5e7eb5021cd15fec$export$12d25b3751433c6d(item.location.range),
                    tags: []
                };
            });
        });
    }
};
function $5e7eb5021cd15fec$var$isDocumentSymbol(symbol) {
    return "children" in symbol;
}
function $5e7eb5021cd15fec$var$toDocumentSymbol(symbol) {
    return {
        name: symbol.name,
        detail: symbol.detail ?? "",
        kind: $5e7eb5021cd15fec$var$toSymbolKind(symbol.kind),
        range: $5e7eb5021cd15fec$export$12d25b3751433c6d(symbol.range),
        selectionRange: $5e7eb5021cd15fec$export$12d25b3751433c6d(symbol.selectionRange),
        tags: symbol.tags ?? [],
        children: (symbol.children ?? []).map((item)=>$5e7eb5021cd15fec$var$toDocumentSymbol(item))
    };
}
function $5e7eb5021cd15fec$var$toSymbolKind(kind) {
    let mKind = $5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.SymbolKind;
    switch(kind){
        case $5e7eb5021cd15fec$var$SymbolKind.File:
            return mKind.File;
        case $5e7eb5021cd15fec$var$SymbolKind.Module:
            return mKind.Module;
        case $5e7eb5021cd15fec$var$SymbolKind.Namespace:
            return mKind.Namespace;
        case $5e7eb5021cd15fec$var$SymbolKind.Package:
            return mKind.Package;
        case $5e7eb5021cd15fec$var$SymbolKind.Class:
            return mKind.Class;
        case $5e7eb5021cd15fec$var$SymbolKind.Method:
            return mKind.Method;
        case $5e7eb5021cd15fec$var$SymbolKind.Property:
            return mKind.Property;
        case $5e7eb5021cd15fec$var$SymbolKind.Field:
            return mKind.Field;
        case $5e7eb5021cd15fec$var$SymbolKind.Constructor:
            return mKind.Constructor;
        case $5e7eb5021cd15fec$var$SymbolKind.Enum:
            return mKind.Enum;
        case $5e7eb5021cd15fec$var$SymbolKind.Interface:
            return mKind.Interface;
        case $5e7eb5021cd15fec$var$SymbolKind.Function:
            return mKind.Function;
        case $5e7eb5021cd15fec$var$SymbolKind.Variable:
            return mKind.Variable;
        case $5e7eb5021cd15fec$var$SymbolKind.Constant:
            return mKind.Constant;
        case $5e7eb5021cd15fec$var$SymbolKind.String:
            return mKind.String;
        case $5e7eb5021cd15fec$var$SymbolKind.Number:
            return mKind.Number;
        case $5e7eb5021cd15fec$var$SymbolKind.Boolean:
            return mKind.Boolean;
        case $5e7eb5021cd15fec$var$SymbolKind.Array:
            return mKind.Array;
    }
    return mKind.Function;
}
var $5e7eb5021cd15fec$export$31b66168ba80848b = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideLinks(model, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker2)=>worker2.findDocumentLinks(resource.toString())).then((items)=>{
            if (!items) return;
            return {
                links: items.map((item)=>({
                        range: $5e7eb5021cd15fec$export$12d25b3751433c6d(item.range),
                        url: item.target
                    }))
            };
        });
    }
};
var $5e7eb5021cd15fec$export$837213a13dc5abe7 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideDocumentFormattingEdits(model, options, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker2)=>{
            return worker2.format(resource.toString(), null, $5e7eb5021cd15fec$var$fromFormattingOptions(options)).then((edits)=>{
                if (!edits || edits.length === 0) return;
                return edits.map($5e7eb5021cd15fec$export$ef01c53612c067e8);
            });
        });
    }
};
var $5e7eb5021cd15fec$export$1ccdec097412b75c = class {
    constructor(_worker){
        this._worker = _worker;
        this.canFormatMultipleRanges = false;
    }
    provideDocumentRangeFormattingEdits(model, range, options, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker2)=>{
            return worker2.format(resource.toString(), $5e7eb5021cd15fec$export$f01e84010c13cebe(range), $5e7eb5021cd15fec$var$fromFormattingOptions(options)).then((edits)=>{
                if (!edits || edits.length === 0) return;
                return edits.map($5e7eb5021cd15fec$export$ef01c53612c067e8);
            });
        });
    }
};
function $5e7eb5021cd15fec$var$fromFormattingOptions(options) {
    return {
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces
    };
}
var $5e7eb5021cd15fec$export$a12c46c4f6f5a524 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideDocumentColors(model, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker2)=>worker2.findDocumentColors(resource.toString())).then((infos)=>{
            if (!infos) return;
            return infos.map((item)=>({
                    color: item.color,
                    range: $5e7eb5021cd15fec$export$12d25b3751433c6d(item.range)
                }));
        });
    }
    provideColorPresentations(model, info, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker2)=>worker2.getColorPresentations(resource.toString(), info.color, $5e7eb5021cd15fec$export$f01e84010c13cebe(info.range))).then((presentations)=>{
            if (!presentations) return;
            return presentations.map((presentation)=>{
                let item = {
                    label: presentation.label
                };
                if (presentation.textEdit) item.textEdit = $5e7eb5021cd15fec$export$ef01c53612c067e8(presentation.textEdit);
                if (presentation.additionalTextEdits) item.additionalTextEdits = presentation.additionalTextEdits.map($5e7eb5021cd15fec$export$ef01c53612c067e8);
                return item;
            });
        });
    }
};
var $5e7eb5021cd15fec$export$dbee4e9a4c977c75 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideFoldingRanges(model, context, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker2)=>worker2.getFoldingRanges(resource.toString(), context)).then((ranges)=>{
            if (!ranges) return;
            return ranges.map((range)=>{
                const result = {
                    start: range.startLine + 1,
                    end: range.endLine + 1
                };
                if (typeof range.kind !== "undefined") result.kind = $5e7eb5021cd15fec$var$toFoldingRangeKind(range.kind);
                return result;
            });
        });
    }
};
function $5e7eb5021cd15fec$var$toFoldingRangeKind(kind) {
    switch(kind){
        case $5e7eb5021cd15fec$var$FoldingRangeKind.Comment:
            return $5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.FoldingRangeKind.Comment;
        case $5e7eb5021cd15fec$var$FoldingRangeKind.Imports:
            return $5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.FoldingRangeKind.Imports;
        case $5e7eb5021cd15fec$var$FoldingRangeKind.Region:
            return $5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.FoldingRangeKind.Region;
    }
    return void 0;
}
var $5e7eb5021cd15fec$export$b7d0513de581c681 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideSelectionRanges(model, positions, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker2)=>worker2.getSelectionRanges(resource.toString(), positions.map($5e7eb5021cd15fec$export$8ba27819f9a0a3b5))).then((selectionRanges)=>{
            if (!selectionRanges) return;
            return selectionRanges.map((selectionRange)=>{
                const result = [];
                while(selectionRange){
                    result.push({
                        range: $5e7eb5021cd15fec$export$12d25b3751433c6d(selectionRange.range)
                    });
                    selectionRange = selectionRange.parent;
                }
                return result;
            });
        });
    }
};
// node_modules/jsonc-parser/lib/esm/impl/scanner.js
function $5e7eb5021cd15fec$var$createScanner(text, ignoreTrivia = false) {
    const len = text.length;
    let pos = 0, value = "", tokenOffset = 0, token = 16, lineNumber = 0, lineStartOffset = 0, tokenLineStartOffset = 0, prevTokenLineStartOffset = 0, scanError = 0;
    function scanHexDigits(count, exact) {
        let digits = 0;
        let value2 = 0;
        while(digits < count || !exact){
            let ch = text.charCodeAt(pos);
            if (ch >= 48 && ch <= 57) value2 = value2 * 16 + ch - 48;
            else if (ch >= 65 && ch <= 70) value2 = value2 * 16 + ch - 65 + 10;
            else if (ch >= 97 && ch <= 102) value2 = value2 * 16 + ch - 97 + 10;
            else break;
            pos++;
            digits++;
        }
        if (digits < count) value2 = -1;
        return value2;
    }
    function setPosition(newPosition) {
        pos = newPosition;
        value = "";
        tokenOffset = 0;
        token = 16;
        scanError = 0;
    }
    function scanNumber() {
        let start = pos;
        if (text.charCodeAt(pos) === 48) pos++;
        else {
            pos++;
            while(pos < text.length && $5e7eb5021cd15fec$var$isDigit(text.charCodeAt(pos)))pos++;
        }
        if (pos < text.length && text.charCodeAt(pos) === 46) {
            pos++;
            if (pos < text.length && $5e7eb5021cd15fec$var$isDigit(text.charCodeAt(pos))) {
                pos++;
                while(pos < text.length && $5e7eb5021cd15fec$var$isDigit(text.charCodeAt(pos)))pos++;
            } else {
                scanError = 3;
                return text.substring(start, pos);
            }
        }
        let end = pos;
        if (pos < text.length && (text.charCodeAt(pos) === 69 || text.charCodeAt(pos) === 101)) {
            pos++;
            if (pos < text.length && text.charCodeAt(pos) === 43 || text.charCodeAt(pos) === 45) pos++;
            if (pos < text.length && $5e7eb5021cd15fec$var$isDigit(text.charCodeAt(pos))) {
                pos++;
                while(pos < text.length && $5e7eb5021cd15fec$var$isDigit(text.charCodeAt(pos)))pos++;
                end = pos;
            } else scanError = 3;
        }
        return text.substring(start, end);
    }
    function scanString() {
        let result = "", start = pos;
        while(true){
            if (pos >= len) {
                result += text.substring(start, pos);
                scanError = 2;
                break;
            }
            const ch = text.charCodeAt(pos);
            if (ch === 34) {
                result += text.substring(start, pos);
                pos++;
                break;
            }
            if (ch === 92) {
                result += text.substring(start, pos);
                pos++;
                if (pos >= len) {
                    scanError = 2;
                    break;
                }
                const ch2 = text.charCodeAt(pos++);
                switch(ch2){
                    case 34:
                        result += '"';
                        break;
                    case 92:
                        result += "\\";
                        break;
                    case 47:
                        result += "/";
                        break;
                    case 98:
                        result += "\b";
                        break;
                    case 102:
                        result += "\f";
                        break;
                    case 110:
                        result += "\n";
                        break;
                    case 114:
                        result += "\r";
                        break;
                    case 116:
                        result += "	";
                        break;
                    case 117:
                        const ch3 = scanHexDigits(4, true);
                        if (ch3 >= 0) result += String.fromCharCode(ch3);
                        else scanError = 4;
                        break;
                    default:
                        scanError = 5;
                }
                start = pos;
                continue;
            }
            if (ch >= 0 && ch <= 31) {
                if ($5e7eb5021cd15fec$var$isLineBreak(ch)) {
                    result += text.substring(start, pos);
                    scanError = 2;
                    break;
                } else scanError = 6;
            }
            pos++;
        }
        return result;
    }
    function scanNext() {
        value = "";
        scanError = 0;
        tokenOffset = pos;
        lineStartOffset = lineNumber;
        prevTokenLineStartOffset = tokenLineStartOffset;
        if (pos >= len) {
            tokenOffset = len;
            return token = 17;
        }
        let code = text.charCodeAt(pos);
        if ($5e7eb5021cd15fec$var$isWhiteSpace(code)) {
            do {
                pos++;
                value += String.fromCharCode(code);
                code = text.charCodeAt(pos);
            }while ($5e7eb5021cd15fec$var$isWhiteSpace(code));
            return token = 15;
        }
        if ($5e7eb5021cd15fec$var$isLineBreak(code)) {
            pos++;
            value += String.fromCharCode(code);
            if (code === 13 && text.charCodeAt(pos) === 10) {
                pos++;
                value += "\n";
            }
            lineNumber++;
            tokenLineStartOffset = pos;
            return token = 14;
        }
        switch(code){
            case 123:
                pos++;
                return token = 1;
            case 125:
                pos++;
                return token = 2;
            case 91:
                pos++;
                return token = 3;
            case 93:
                pos++;
                return token = 4;
            case 58:
                pos++;
                return token = 6;
            case 44:
                pos++;
                return token = 5;
            case 34:
                pos++;
                value = scanString();
                return token = 10;
            case 47:
                const start = pos - 1;
                if (text.charCodeAt(pos + 1) === 47) {
                    pos += 2;
                    while(pos < len){
                        if ($5e7eb5021cd15fec$var$isLineBreak(text.charCodeAt(pos))) break;
                        pos++;
                    }
                    value = text.substring(start, pos);
                    return token = 12;
                }
                if (text.charCodeAt(pos + 1) === 42) {
                    pos += 2;
                    const safeLength = len - 1;
                    let commentClosed = false;
                    while(pos < safeLength){
                        const ch = text.charCodeAt(pos);
                        if (ch === 42 && text.charCodeAt(pos + 1) === 47) {
                            pos += 2;
                            commentClosed = true;
                            break;
                        }
                        pos++;
                        if ($5e7eb5021cd15fec$var$isLineBreak(ch)) {
                            if (ch === 13 && text.charCodeAt(pos) === 10) pos++;
                            lineNumber++;
                            tokenLineStartOffset = pos;
                        }
                    }
                    if (!commentClosed) {
                        pos++;
                        scanError = 1;
                    }
                    value = text.substring(start, pos);
                    return token = 13;
                }
                value += String.fromCharCode(code);
                pos++;
                return token = 16;
            case 45:
                value += String.fromCharCode(code);
                pos++;
                if (pos === len || !$5e7eb5021cd15fec$var$isDigit(text.charCodeAt(pos))) return token = 16;
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                value += scanNumber();
                return token = 11;
            default:
                while(pos < len && isUnknownContentCharacter(code)){
                    pos++;
                    code = text.charCodeAt(pos);
                }
                if (tokenOffset !== pos) {
                    value = text.substring(tokenOffset, pos);
                    switch(value){
                        case "true":
                            return token = 8;
                        case "false":
                            return token = 9;
                        case "null":
                            return token = 7;
                    }
                    return token = 16;
                }
                value += String.fromCharCode(code);
                pos++;
                return token = 16;
        }
    }
    function isUnknownContentCharacter(code) {
        if ($5e7eb5021cd15fec$var$isWhiteSpace(code) || $5e7eb5021cd15fec$var$isLineBreak(code)) return false;
        switch(code){
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
                return false;
        }
        return true;
    }
    function scanNextNonTrivia() {
        let result;
        do result = scanNext();
        while (result >= 12 && result <= 15);
        return result;
    }
    return {
        setPosition: setPosition,
        getPosition: ()=>pos,
        scan: ignoreTrivia ? scanNextNonTrivia : scanNext,
        getToken: ()=>token,
        getTokenValue: ()=>value,
        getTokenOffset: ()=>tokenOffset,
        getTokenLength: ()=>pos - tokenOffset,
        getTokenStartLine: ()=>lineStartOffset,
        getTokenStartCharacter: ()=>tokenOffset - prevTokenLineStartOffset,
        getTokenError: ()=>scanError
    };
}
function $5e7eb5021cd15fec$var$isWhiteSpace(ch) {
    return ch === 32 || ch === 9;
}
function $5e7eb5021cd15fec$var$isLineBreak(ch) {
    return ch === 10 || ch === 13;
}
function $5e7eb5021cd15fec$var$isDigit(ch) {
    return ch >= 48 && ch <= 57;
}
var $5e7eb5021cd15fec$var$CharacterCodes;
(function(CharacterCodes2) {
    CharacterCodes2[CharacterCodes2["lineFeed"] = 10] = "lineFeed";
    CharacterCodes2[CharacterCodes2["carriageReturn"] = 13] = "carriageReturn";
    CharacterCodes2[CharacterCodes2["space"] = 32] = "space";
    CharacterCodes2[CharacterCodes2["_0"] = 48] = "_0";
    CharacterCodes2[CharacterCodes2["_1"] = 49] = "_1";
    CharacterCodes2[CharacterCodes2["_2"] = 50] = "_2";
    CharacterCodes2[CharacterCodes2["_3"] = 51] = "_3";
    CharacterCodes2[CharacterCodes2["_4"] = 52] = "_4";
    CharacterCodes2[CharacterCodes2["_5"] = 53] = "_5";
    CharacterCodes2[CharacterCodes2["_6"] = 54] = "_6";
    CharacterCodes2[CharacterCodes2["_7"] = 55] = "_7";
    CharacterCodes2[CharacterCodes2["_8"] = 56] = "_8";
    CharacterCodes2[CharacterCodes2["_9"] = 57] = "_9";
    CharacterCodes2[CharacterCodes2["a"] = 97] = "a";
    CharacterCodes2[CharacterCodes2["b"] = 98] = "b";
    CharacterCodes2[CharacterCodes2["c"] = 99] = "c";
    CharacterCodes2[CharacterCodes2["d"] = 100] = "d";
    CharacterCodes2[CharacterCodes2["e"] = 101] = "e";
    CharacterCodes2[CharacterCodes2["f"] = 102] = "f";
    CharacterCodes2[CharacterCodes2["g"] = 103] = "g";
    CharacterCodes2[CharacterCodes2["h"] = 104] = "h";
    CharacterCodes2[CharacterCodes2["i"] = 105] = "i";
    CharacterCodes2[CharacterCodes2["j"] = 106] = "j";
    CharacterCodes2[CharacterCodes2["k"] = 107] = "k";
    CharacterCodes2[CharacterCodes2["l"] = 108] = "l";
    CharacterCodes2[CharacterCodes2["m"] = 109] = "m";
    CharacterCodes2[CharacterCodes2["n"] = 110] = "n";
    CharacterCodes2[CharacterCodes2["o"] = 111] = "o";
    CharacterCodes2[CharacterCodes2["p"] = 112] = "p";
    CharacterCodes2[CharacterCodes2["q"] = 113] = "q";
    CharacterCodes2[CharacterCodes2["r"] = 114] = "r";
    CharacterCodes2[CharacterCodes2["s"] = 115] = "s";
    CharacterCodes2[CharacterCodes2["t"] = 116] = "t";
    CharacterCodes2[CharacterCodes2["u"] = 117] = "u";
    CharacterCodes2[CharacterCodes2["v"] = 118] = "v";
    CharacterCodes2[CharacterCodes2["w"] = 119] = "w";
    CharacterCodes2[CharacterCodes2["x"] = 120] = "x";
    CharacterCodes2[CharacterCodes2["y"] = 121] = "y";
    CharacterCodes2[CharacterCodes2["z"] = 122] = "z";
    CharacterCodes2[CharacterCodes2["A"] = 65] = "A";
    CharacterCodes2[CharacterCodes2["B"] = 66] = "B";
    CharacterCodes2[CharacterCodes2["C"] = 67] = "C";
    CharacterCodes2[CharacterCodes2["D"] = 68] = "D";
    CharacterCodes2[CharacterCodes2["E"] = 69] = "E";
    CharacterCodes2[CharacterCodes2["F"] = 70] = "F";
    CharacterCodes2[CharacterCodes2["G"] = 71] = "G";
    CharacterCodes2[CharacterCodes2["H"] = 72] = "H";
    CharacterCodes2[CharacterCodes2["I"] = 73] = "I";
    CharacterCodes2[CharacterCodes2["J"] = 74] = "J";
    CharacterCodes2[CharacterCodes2["K"] = 75] = "K";
    CharacterCodes2[CharacterCodes2["L"] = 76] = "L";
    CharacterCodes2[CharacterCodes2["M"] = 77] = "M";
    CharacterCodes2[CharacterCodes2["N"] = 78] = "N";
    CharacterCodes2[CharacterCodes2["O"] = 79] = "O";
    CharacterCodes2[CharacterCodes2["P"] = 80] = "P";
    CharacterCodes2[CharacterCodes2["Q"] = 81] = "Q";
    CharacterCodes2[CharacterCodes2["R"] = 82] = "R";
    CharacterCodes2[CharacterCodes2["S"] = 83] = "S";
    CharacterCodes2[CharacterCodes2["T"] = 84] = "T";
    CharacterCodes2[CharacterCodes2["U"] = 85] = "U";
    CharacterCodes2[CharacterCodes2["V"] = 86] = "V";
    CharacterCodes2[CharacterCodes2["W"] = 87] = "W";
    CharacterCodes2[CharacterCodes2["X"] = 88] = "X";
    CharacterCodes2[CharacterCodes2["Y"] = 89] = "Y";
    CharacterCodes2[CharacterCodes2["Z"] = 90] = "Z";
    CharacterCodes2[CharacterCodes2["asterisk"] = 42] = "asterisk";
    CharacterCodes2[CharacterCodes2["backslash"] = 92] = "backslash";
    CharacterCodes2[CharacterCodes2["closeBrace"] = 125] = "closeBrace";
    CharacterCodes2[CharacterCodes2["closeBracket"] = 93] = "closeBracket";
    CharacterCodes2[CharacterCodes2["colon"] = 58] = "colon";
    CharacterCodes2[CharacterCodes2["comma"] = 44] = "comma";
    CharacterCodes2[CharacterCodes2["dot"] = 46] = "dot";
    CharacterCodes2[CharacterCodes2["doubleQuote"] = 34] = "doubleQuote";
    CharacterCodes2[CharacterCodes2["minus"] = 45] = "minus";
    CharacterCodes2[CharacterCodes2["openBrace"] = 123] = "openBrace";
    CharacterCodes2[CharacterCodes2["openBracket"] = 91] = "openBracket";
    CharacterCodes2[CharacterCodes2["plus"] = 43] = "plus";
    CharacterCodes2[CharacterCodes2["slash"] = 47] = "slash";
    CharacterCodes2[CharacterCodes2["formFeed"] = 12] = "formFeed";
    CharacterCodes2[CharacterCodes2["tab"] = 9] = "tab";
})($5e7eb5021cd15fec$var$CharacterCodes || ($5e7eb5021cd15fec$var$CharacterCodes = {}));
// node_modules/jsonc-parser/lib/esm/impl/string-intern.js
var $5e7eb5021cd15fec$var$cachedSpaces = new Array(20).fill(0).map((_, index)=>{
    return " ".repeat(index);
});
var $5e7eb5021cd15fec$var$maxCachedValues = 200;
var $5e7eb5021cd15fec$var$cachedBreakLinesWithSpaces = {
    " ": {
        "\n": new Array($5e7eb5021cd15fec$var$maxCachedValues).fill(0).map((_, index)=>{
            return "\n" + " ".repeat(index);
        }),
        "\r": new Array($5e7eb5021cd15fec$var$maxCachedValues).fill(0).map((_, index)=>{
            return "\r" + " ".repeat(index);
        }),
        "\r\n": new Array($5e7eb5021cd15fec$var$maxCachedValues).fill(0).map((_, index)=>{
            return "\r\n" + " ".repeat(index);
        })
    },
    "	": {
        "\n": new Array($5e7eb5021cd15fec$var$maxCachedValues).fill(0).map((_, index)=>{
            return "\n" + "	".repeat(index);
        }),
        "\r": new Array($5e7eb5021cd15fec$var$maxCachedValues).fill(0).map((_, index)=>{
            return "\r" + "	".repeat(index);
        }),
        "\r\n": new Array($5e7eb5021cd15fec$var$maxCachedValues).fill(0).map((_, index)=>{
            return "\r\n" + "	".repeat(index);
        })
    }
};
// node_modules/jsonc-parser/lib/esm/impl/parser.js
var $5e7eb5021cd15fec$var$ParseOptions;
(function(ParseOptions2) {
    ParseOptions2.DEFAULT = {
        allowTrailingComma: false
    };
})($5e7eb5021cd15fec$var$ParseOptions || ($5e7eb5021cd15fec$var$ParseOptions = {}));
// node_modules/jsonc-parser/lib/esm/main.js
var $5e7eb5021cd15fec$var$createScanner2 = $5e7eb5021cd15fec$var$createScanner;
var $5e7eb5021cd15fec$var$ScanError;
(function(ScanError2) {
    ScanError2[ScanError2["None"] = 0] = "None";
    ScanError2[ScanError2["UnexpectedEndOfComment"] = 1] = "UnexpectedEndOfComment";
    ScanError2[ScanError2["UnexpectedEndOfString"] = 2] = "UnexpectedEndOfString";
    ScanError2[ScanError2["UnexpectedEndOfNumber"] = 3] = "UnexpectedEndOfNumber";
    ScanError2[ScanError2["InvalidUnicode"] = 4] = "InvalidUnicode";
    ScanError2[ScanError2["InvalidEscapeCharacter"] = 5] = "InvalidEscapeCharacter";
    ScanError2[ScanError2["InvalidCharacter"] = 6] = "InvalidCharacter";
})($5e7eb5021cd15fec$var$ScanError || ($5e7eb5021cd15fec$var$ScanError = {}));
var $5e7eb5021cd15fec$var$SyntaxKind;
(function(SyntaxKind2) {
    SyntaxKind2[SyntaxKind2["OpenBraceToken"] = 1] = "OpenBraceToken";
    SyntaxKind2[SyntaxKind2["CloseBraceToken"] = 2] = "CloseBraceToken";
    SyntaxKind2[SyntaxKind2["OpenBracketToken"] = 3] = "OpenBracketToken";
    SyntaxKind2[SyntaxKind2["CloseBracketToken"] = 4] = "CloseBracketToken";
    SyntaxKind2[SyntaxKind2["CommaToken"] = 5] = "CommaToken";
    SyntaxKind2[SyntaxKind2["ColonToken"] = 6] = "ColonToken";
    SyntaxKind2[SyntaxKind2["NullKeyword"] = 7] = "NullKeyword";
    SyntaxKind2[SyntaxKind2["TrueKeyword"] = 8] = "TrueKeyword";
    SyntaxKind2[SyntaxKind2["FalseKeyword"] = 9] = "FalseKeyword";
    SyntaxKind2[SyntaxKind2["StringLiteral"] = 10] = "StringLiteral";
    SyntaxKind2[SyntaxKind2["NumericLiteral"] = 11] = "NumericLiteral";
    SyntaxKind2[SyntaxKind2["LineCommentTrivia"] = 12] = "LineCommentTrivia";
    SyntaxKind2[SyntaxKind2["BlockCommentTrivia"] = 13] = "BlockCommentTrivia";
    SyntaxKind2[SyntaxKind2["LineBreakTrivia"] = 14] = "LineBreakTrivia";
    SyntaxKind2[SyntaxKind2["Trivia"] = 15] = "Trivia";
    SyntaxKind2[SyntaxKind2["Unknown"] = 16] = "Unknown";
    SyntaxKind2[SyntaxKind2["EOF"] = 17] = "EOF";
})($5e7eb5021cd15fec$var$SyntaxKind || ($5e7eb5021cd15fec$var$SyntaxKind = {}));
var $5e7eb5021cd15fec$var$ParseErrorCode;
(function(ParseErrorCode2) {
    ParseErrorCode2[ParseErrorCode2["InvalidSymbol"] = 1] = "InvalidSymbol";
    ParseErrorCode2[ParseErrorCode2["InvalidNumberFormat"] = 2] = "InvalidNumberFormat";
    ParseErrorCode2[ParseErrorCode2["PropertyNameExpected"] = 3] = "PropertyNameExpected";
    ParseErrorCode2[ParseErrorCode2["ValueExpected"] = 4] = "ValueExpected";
    ParseErrorCode2[ParseErrorCode2["ColonExpected"] = 5] = "ColonExpected";
    ParseErrorCode2[ParseErrorCode2["CommaExpected"] = 6] = "CommaExpected";
    ParseErrorCode2[ParseErrorCode2["CloseBraceExpected"] = 7] = "CloseBraceExpected";
    ParseErrorCode2[ParseErrorCode2["CloseBracketExpected"] = 8] = "CloseBracketExpected";
    ParseErrorCode2[ParseErrorCode2["EndOfFileExpected"] = 9] = "EndOfFileExpected";
    ParseErrorCode2[ParseErrorCode2["InvalidCommentToken"] = 10] = "InvalidCommentToken";
    ParseErrorCode2[ParseErrorCode2["UnexpectedEndOfComment"] = 11] = "UnexpectedEndOfComment";
    ParseErrorCode2[ParseErrorCode2["UnexpectedEndOfString"] = 12] = "UnexpectedEndOfString";
    ParseErrorCode2[ParseErrorCode2["UnexpectedEndOfNumber"] = 13] = "UnexpectedEndOfNumber";
    ParseErrorCode2[ParseErrorCode2["InvalidUnicode"] = 14] = "InvalidUnicode";
    ParseErrorCode2[ParseErrorCode2["InvalidEscapeCharacter"] = 15] = "InvalidEscapeCharacter";
    ParseErrorCode2[ParseErrorCode2["InvalidCharacter"] = 16] = "InvalidCharacter";
})($5e7eb5021cd15fec$var$ParseErrorCode || ($5e7eb5021cd15fec$var$ParseErrorCode = {}));
// src/language/json/tokenization.ts
function $5e7eb5021cd15fec$var$createTokenizationSupport(supportComments) {
    return {
        getInitialState: ()=>new $5e7eb5021cd15fec$var$JSONState(null, null, false, null),
        tokenize: (line, state)=>$5e7eb5021cd15fec$var$tokenize(supportComments, line, state)
    };
}
var $5e7eb5021cd15fec$var$TOKEN_DELIM_OBJECT = "delimiter.bracket.json";
var $5e7eb5021cd15fec$var$TOKEN_DELIM_ARRAY = "delimiter.array.json";
var $5e7eb5021cd15fec$var$TOKEN_DELIM_COLON = "delimiter.colon.json";
var $5e7eb5021cd15fec$var$TOKEN_DELIM_COMMA = "delimiter.comma.json";
var $5e7eb5021cd15fec$var$TOKEN_VALUE_BOOLEAN = "keyword.json";
var $5e7eb5021cd15fec$var$TOKEN_VALUE_NULL = "keyword.json";
var $5e7eb5021cd15fec$var$TOKEN_VALUE_STRING = "string.value.json";
var $5e7eb5021cd15fec$var$TOKEN_VALUE_NUMBER = "number.json";
var $5e7eb5021cd15fec$var$TOKEN_PROPERTY_NAME = "string.key.json";
var $5e7eb5021cd15fec$var$TOKEN_COMMENT_BLOCK = "comment.block.json";
var $5e7eb5021cd15fec$var$TOKEN_COMMENT_LINE = "comment.line.json";
var $5e7eb5021cd15fec$var$ParentsStack = class _ParentsStack {
    constructor(parent, type){
        this.parent = parent;
        this.type = type;
    }
    static pop(parents) {
        if (parents) return parents.parent;
        return null;
    }
    static push(parents, type) {
        return new _ParentsStack(parents, type);
    }
    static equals(a, b) {
        if (!a && !b) return true;
        if (!a || !b) return false;
        while(a && b){
            if (a === b) return true;
            if (a.type !== b.type) return false;
            a = a.parent;
            b = b.parent;
        }
        return true;
    }
};
var $5e7eb5021cd15fec$var$JSONState = class _JSONState {
    constructor(state, scanError, lastWasColon, parents){
        this._state = state;
        this.scanError = scanError;
        this.lastWasColon = lastWasColon;
        this.parents = parents;
    }
    clone() {
        return new _JSONState(this._state, this.scanError, this.lastWasColon, this.parents);
    }
    equals(other) {
        if (other === this) return true;
        if (!other || !(other instanceof _JSONState)) return false;
        return this.scanError === other.scanError && this.lastWasColon === other.lastWasColon && $5e7eb5021cd15fec$var$ParentsStack.equals(this.parents, other.parents);
    }
    getStateData() {
        return this._state;
    }
    setStateData(state) {
        this._state = state;
    }
};
function $5e7eb5021cd15fec$var$tokenize(comments, line, state, offsetDelta = 0) {
    let numberOfInsertedCharacters = 0;
    let adjustOffset = false;
    switch(state.scanError){
        case 2 /* UnexpectedEndOfString */ :
            line = '"' + line;
            numberOfInsertedCharacters = 1;
            break;
        case 1 /* UnexpectedEndOfComment */ :
            line = "/*" + line;
            numberOfInsertedCharacters = 2;
            break;
    }
    const scanner = $5e7eb5021cd15fec$var$createScanner2(line);
    let lastWasColon = state.lastWasColon;
    let parents = state.parents;
    const ret = {
        tokens: [],
        endState: state.clone()
    };
    while(true){
        let offset = offsetDelta + scanner.getPosition();
        let type = "";
        const kind = scanner.scan();
        if (kind === 17 /* EOF */ ) break;
        if (offset === offsetDelta + scanner.getPosition()) throw new Error("Scanner did not advance, next 3 characters are: " + line.substr(scanner.getPosition(), 3));
        if (adjustOffset) offset -= numberOfInsertedCharacters;
        adjustOffset = numberOfInsertedCharacters > 0;
        switch(kind){
            case 1 /* OpenBraceToken */ :
                parents = $5e7eb5021cd15fec$var$ParentsStack.push(parents, 0 /* Object */ );
                type = $5e7eb5021cd15fec$var$TOKEN_DELIM_OBJECT;
                lastWasColon = false;
                break;
            case 2 /* CloseBraceToken */ :
                parents = $5e7eb5021cd15fec$var$ParentsStack.pop(parents);
                type = $5e7eb5021cd15fec$var$TOKEN_DELIM_OBJECT;
                lastWasColon = false;
                break;
            case 3 /* OpenBracketToken */ :
                parents = $5e7eb5021cd15fec$var$ParentsStack.push(parents, 1 /* Array */ );
                type = $5e7eb5021cd15fec$var$TOKEN_DELIM_ARRAY;
                lastWasColon = false;
                break;
            case 4 /* CloseBracketToken */ :
                parents = $5e7eb5021cd15fec$var$ParentsStack.pop(parents);
                type = $5e7eb5021cd15fec$var$TOKEN_DELIM_ARRAY;
                lastWasColon = false;
                break;
            case 6 /* ColonToken */ :
                type = $5e7eb5021cd15fec$var$TOKEN_DELIM_COLON;
                lastWasColon = true;
                break;
            case 5 /* CommaToken */ :
                type = $5e7eb5021cd15fec$var$TOKEN_DELIM_COMMA;
                lastWasColon = false;
                break;
            case 8 /* TrueKeyword */ :
            case 9 /* FalseKeyword */ :
                type = $5e7eb5021cd15fec$var$TOKEN_VALUE_BOOLEAN;
                lastWasColon = false;
                break;
            case 7 /* NullKeyword */ :
                type = $5e7eb5021cd15fec$var$TOKEN_VALUE_NULL;
                lastWasColon = false;
                break;
            case 10 /* StringLiteral */ :
                const currentParent = parents ? parents.type : 0 /* Object */ ;
                const inArray = currentParent === 1 /* Array */ ;
                type = lastWasColon || inArray ? $5e7eb5021cd15fec$var$TOKEN_VALUE_STRING : $5e7eb5021cd15fec$var$TOKEN_PROPERTY_NAME;
                lastWasColon = false;
                break;
            case 11 /* NumericLiteral */ :
                type = $5e7eb5021cd15fec$var$TOKEN_VALUE_NUMBER;
                lastWasColon = false;
                break;
        }
        if (comments) switch(kind){
            case 12 /* LineCommentTrivia */ :
                type = $5e7eb5021cd15fec$var$TOKEN_COMMENT_LINE;
                break;
            case 13 /* BlockCommentTrivia */ :
                type = $5e7eb5021cd15fec$var$TOKEN_COMMENT_BLOCK;
                break;
        }
        ret.endState = new $5e7eb5021cd15fec$var$JSONState(state.getStateData(), scanner.getTokenError(), lastWasColon, parents);
        ret.tokens.push({
            startIndex: offset,
            scopes: type
        });
    }
    return ret;
}
// src/language/json/jsonMode.ts
var $5e7eb5021cd15fec$var$worker;
function $5e7eb5021cd15fec$export$1df3c82ba2084fe8() {
    return new Promise((resolve, reject)=>{
        if (!$5e7eb5021cd15fec$var$worker) return reject("JSON not registered!");
        resolve($5e7eb5021cd15fec$var$worker);
    });
}
var $5e7eb5021cd15fec$var$JSONDiagnosticsAdapter = class extends $5e7eb5021cd15fec$export$8105b646adfa9bae {
    constructor(languageId, worker2, defaults){
        super(languageId, worker2, defaults.onDidChange);
        this._disposables.push($5e7eb5021cd15fec$var$monaco_editor_core_exports.editor.onWillDisposeModel((model)=>{
            this._resetSchema(model.uri);
        }));
        this._disposables.push($5e7eb5021cd15fec$var$monaco_editor_core_exports.editor.onDidChangeModelLanguage((event)=>{
            this._resetSchema(event.model.uri);
        }));
    }
    _resetSchema(resource) {
        this._worker().then((worker2)=>{
            worker2.resetSchema(resource.toString());
        });
    }
};
function $5e7eb5021cd15fec$export$6df00d141df42469(defaults) {
    const disposables = [];
    const providers = [];
    const client = new $5e7eb5021cd15fec$export$bcff6015853c67ce(defaults);
    disposables.push(client);
    $5e7eb5021cd15fec$var$worker = (...uris)=>{
        return client.getLanguageServiceWorker(...uris);
    };
    function registerProviders() {
        const { languageId: languageId, modeConfiguration: modeConfiguration2 } = defaults;
        $5e7eb5021cd15fec$var$disposeAll(providers);
        if (modeConfiguration2.documentFormattingEdits) providers.push($5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.registerDocumentFormattingEditProvider(languageId, new $5e7eb5021cd15fec$export$837213a13dc5abe7($5e7eb5021cd15fec$var$worker)));
        if (modeConfiguration2.documentRangeFormattingEdits) providers.push($5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(languageId, new $5e7eb5021cd15fec$export$1ccdec097412b75c($5e7eb5021cd15fec$var$worker)));
        if (modeConfiguration2.completionItems) providers.push($5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(languageId, new $5e7eb5021cd15fec$export$49e06df83bb13a1e($5e7eb5021cd15fec$var$worker, [
            " ",
            ":",
            '"'
        ])));
        if (modeConfiguration2.hovers) providers.push($5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.registerHoverProvider(languageId, new $5e7eb5021cd15fec$export$90ae7381ad9e28ec($5e7eb5021cd15fec$var$worker)));
        if (modeConfiguration2.documentSymbols) providers.push($5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(languageId, new $5e7eb5021cd15fec$export$6e92bf3474907f9b($5e7eb5021cd15fec$var$worker)));
        if (modeConfiguration2.tokens) providers.push($5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.setTokensProvider(languageId, $5e7eb5021cd15fec$var$createTokenizationSupport(true)));
        if (modeConfiguration2.colors) providers.push($5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.registerColorProvider(languageId, new $5e7eb5021cd15fec$export$a12c46c4f6f5a524($5e7eb5021cd15fec$var$worker)));
        if (modeConfiguration2.foldingRanges) providers.push($5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.registerFoldingRangeProvider(languageId, new $5e7eb5021cd15fec$export$dbee4e9a4c977c75($5e7eb5021cd15fec$var$worker)));
        if (modeConfiguration2.diagnostics) providers.push(new $5e7eb5021cd15fec$var$JSONDiagnosticsAdapter(languageId, $5e7eb5021cd15fec$var$worker, defaults));
        if (modeConfiguration2.selectionRanges) providers.push($5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.registerSelectionRangeProvider(languageId, new $5e7eb5021cd15fec$export$b7d0513de581c681($5e7eb5021cd15fec$var$worker)));
    }
    registerProviders();
    disposables.push($5e7eb5021cd15fec$var$monaco_editor_core_exports.languages.setLanguageConfiguration(defaults.languageId, $5e7eb5021cd15fec$var$richEditConfiguration));
    let modeConfiguration = defaults.modeConfiguration;
    defaults.onDidChange((newDefaults)=>{
        if (newDefaults.modeConfiguration !== modeConfiguration) {
            modeConfiguration = newDefaults.modeConfiguration;
            registerProviders();
        }
    });
    disposables.push($5e7eb5021cd15fec$var$asDisposable(providers));
    return $5e7eb5021cd15fec$var$asDisposable(disposables);
}
function $5e7eb5021cd15fec$var$asDisposable(disposables) {
    return {
        dispose: ()=>$5e7eb5021cd15fec$var$disposeAll(disposables)
    };
}
function $5e7eb5021cd15fec$var$disposeAll(disposables) {
    while(disposables.length)disposables.pop().dispose();
}
var $5e7eb5021cd15fec$var$richEditConfiguration = {
    wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
    comments: {
        lineComment: "//",
        blockComment: [
            "/*",
            "*/"
        ]
    },
    brackets: [
        [
            "{",
            "}"
        ],
        [
            "[",
            "]"
        ]
    ],
    autoClosingPairs: [
        {
            open: "{",
            close: "}",
            notIn: [
                "string"
            ]
        },
        {
            open: "[",
            close: "]",
            notIn: [
                "string"
            ]
        },
        {
            open: '"',
            close: '"',
            notIn: [
                "string"
            ]
        }
    ]
};

});


//# sourceMappingURL=jsonMode.6015ac21.js.map
