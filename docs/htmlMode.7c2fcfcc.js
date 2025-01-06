
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("g1tbM", function(module, exports) {

$parcel$export(module.exports, "WorkerManager", () => $baa361a40ad5f5aa$export$bcff6015853c67ce);
$parcel$export(module.exports, "DiagnosticsAdapter", () => $baa361a40ad5f5aa$export$8105b646adfa9bae);
$parcel$export(module.exports, "CompletionAdapter", () => $baa361a40ad5f5aa$export$49e06df83bb13a1e);
$parcel$export(module.exports, "fromPosition", () => $baa361a40ad5f5aa$export$8ba27819f9a0a3b5);
$parcel$export(module.exports, "toRange", () => $baa361a40ad5f5aa$export$12d25b3751433c6d);
$parcel$export(module.exports, "toTextEdit", () => $baa361a40ad5f5aa$export$ef01c53612c067e8);
$parcel$export(module.exports, "fromRange", () => $baa361a40ad5f5aa$export$f01e84010c13cebe);
$parcel$export(module.exports, "HoverAdapter", () => $baa361a40ad5f5aa$export$90ae7381ad9e28ec);
$parcel$export(module.exports, "DocumentHighlightAdapter", () => $baa361a40ad5f5aa$export$43e7617f9df67ed1);
$parcel$export(module.exports, "DefinitionAdapter", () => $baa361a40ad5f5aa$export$ffd9ea2d5a3f0bd5);
$parcel$export(module.exports, "ReferenceAdapter", () => $baa361a40ad5f5aa$export$da977c26606f3d55);
$parcel$export(module.exports, "RenameAdapter", () => $baa361a40ad5f5aa$export$33797a450c0c0a77);
$parcel$export(module.exports, "DocumentSymbolAdapter", () => $baa361a40ad5f5aa$export$6e92bf3474907f9b);
$parcel$export(module.exports, "DocumentLinkAdapter", () => $baa361a40ad5f5aa$export$31b66168ba80848b);
$parcel$export(module.exports, "DocumentFormattingEditProvider", () => $baa361a40ad5f5aa$export$837213a13dc5abe7);
$parcel$export(module.exports, "DocumentRangeFormattingEditProvider", () => $baa361a40ad5f5aa$export$1ccdec097412b75c);
$parcel$export(module.exports, "DocumentColorAdapter", () => $baa361a40ad5f5aa$export$a12c46c4f6f5a524);
$parcel$export(module.exports, "FoldingRangeAdapter", () => $baa361a40ad5f5aa$export$dbee4e9a4c977c75);
$parcel$export(module.exports, "SelectionRangeAdapter", () => $baa361a40ad5f5aa$export$b7d0513de581c681);
$parcel$export(module.exports, "setupMode1", () => $baa361a40ad5f5aa$export$972c61cff7b1bac7);
$parcel$export(module.exports, "setupMode", () => $baa361a40ad5f5aa$export$6df00d141df42469);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ 
var $6QSpz = parcelRequire("6QSpz");
var $baa361a40ad5f5aa$var$__defProp = Object.defineProperty;
var $baa361a40ad5f5aa$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $baa361a40ad5f5aa$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $baa361a40ad5f5aa$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $baa361a40ad5f5aa$var$__copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of $baa361a40ad5f5aa$var$__getOwnPropNames(from))if (!$baa361a40ad5f5aa$var$__hasOwnProp.call(to, key) && key !== except) $baa361a40ad5f5aa$var$__defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = $baa361a40ad5f5aa$var$__getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var $baa361a40ad5f5aa$var$__reExport = (target, mod, secondTarget)=>($baa361a40ad5f5aa$var$__copyProps(target, mod, "default"), secondTarget && $baa361a40ad5f5aa$var$__copyProps(secondTarget, mod, "default"));
// src/fillers/monaco-editor-core.ts
var $baa361a40ad5f5aa$var$monaco_editor_core_exports = {};
$baa361a40ad5f5aa$var$__reExport($baa361a40ad5f5aa$var$monaco_editor_core_exports, $6QSpz);
// src/language/html/workerManager.ts
var $baa361a40ad5f5aa$var$STOP_WHEN_IDLE_FOR = 120000;
var $baa361a40ad5f5aa$export$bcff6015853c67ce = class {
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
        if (timePassedSinceLastUsed > $baa361a40ad5f5aa$var$STOP_WHEN_IDLE_FOR) this._stopWorker();
    }
    _getClient() {
        this._lastUsedTime = Date.now();
        if (!this._client) {
            this._worker = $baa361a40ad5f5aa$var$monaco_editor_core_exports.editor.createWebWorker({
                // module that exports the create() method and returns a `HTMLWorker` instance
                moduleId: "vs/language/html/htmlWorker",
                // passed in to the create() method
                createData: {
                    languageSettings: this._defaults.options,
                    languageId: this._defaults.languageId
                },
                label: this._defaults.languageId
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
var $baa361a40ad5f5aa$var$DocumentUri;
(function(DocumentUri2) {
    function is(value) {
        return typeof value === "string";
    }
    DocumentUri2.is = is;
})($baa361a40ad5f5aa$var$DocumentUri || ($baa361a40ad5f5aa$var$DocumentUri = {}));
var $baa361a40ad5f5aa$var$URI;
(function(URI2) {
    function is(value) {
        return typeof value === "string";
    }
    URI2.is = is;
})($baa361a40ad5f5aa$var$URI || ($baa361a40ad5f5aa$var$URI = {}));
var $baa361a40ad5f5aa$var$integer;
(function(integer2) {
    integer2.MIN_VALUE = -2147483648;
    integer2.MAX_VALUE = 2147483647;
    function is(value) {
        return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
    }
    integer2.is = is;
})($baa361a40ad5f5aa$var$integer || ($baa361a40ad5f5aa$var$integer = {}));
var $baa361a40ad5f5aa$var$uinteger;
(function(uinteger2) {
    uinteger2.MIN_VALUE = 0;
    uinteger2.MAX_VALUE = 2147483647;
    function is(value) {
        return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
    }
    uinteger2.is = is;
})($baa361a40ad5f5aa$var$uinteger || ($baa361a40ad5f5aa$var$uinteger = {}));
var $baa361a40ad5f5aa$var$Position;
(function(Position3) {
    function create(line, character) {
        if (line === Number.MAX_VALUE) line = $baa361a40ad5f5aa$var$uinteger.MAX_VALUE;
        if (character === Number.MAX_VALUE) character = $baa361a40ad5f5aa$var$uinteger.MAX_VALUE;
        return {
            line: line,
            character: character
        };
    }
    Position3.create = create;
    function is(value) {
        let candidate = value;
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && $baa361a40ad5f5aa$var$Is.uinteger(candidate.line) && $baa361a40ad5f5aa$var$Is.uinteger(candidate.character);
    }
    Position3.is = is;
})($baa361a40ad5f5aa$var$Position || ($baa361a40ad5f5aa$var$Position = {}));
var $baa361a40ad5f5aa$var$Range;
(function(Range3) {
    function create(one, two, three, four) {
        if ($baa361a40ad5f5aa$var$Is.uinteger(one) && $baa361a40ad5f5aa$var$Is.uinteger(two) && $baa361a40ad5f5aa$var$Is.uinteger(three) && $baa361a40ad5f5aa$var$Is.uinteger(four)) return {
            start: $baa361a40ad5f5aa$var$Position.create(one, two),
            end: $baa361a40ad5f5aa$var$Position.create(three, four)
        };
        else if ($baa361a40ad5f5aa$var$Position.is(one) && $baa361a40ad5f5aa$var$Position.is(two)) return {
            start: one,
            end: two
        };
        else throw new Error(`Range#create called with invalid arguments[${one}, ${two}, ${three}, ${four}]`);
    }
    Range3.create = create;
    function is(value) {
        let candidate = value;
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && $baa361a40ad5f5aa$var$Position.is(candidate.start) && $baa361a40ad5f5aa$var$Position.is(candidate.end);
    }
    Range3.is = is;
})($baa361a40ad5f5aa$var$Range || ($baa361a40ad5f5aa$var$Range = {}));
var $baa361a40ad5f5aa$var$Location;
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
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && $baa361a40ad5f5aa$var$Range.is(candidate.range) && ($baa361a40ad5f5aa$var$Is.string(candidate.uri) || $baa361a40ad5f5aa$var$Is.undefined(candidate.uri));
    }
    Location2.is = is;
})($baa361a40ad5f5aa$var$Location || ($baa361a40ad5f5aa$var$Location = {}));
var $baa361a40ad5f5aa$var$LocationLink;
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
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && $baa361a40ad5f5aa$var$Range.is(candidate.targetRange) && $baa361a40ad5f5aa$var$Is.string(candidate.targetUri) && $baa361a40ad5f5aa$var$Range.is(candidate.targetSelectionRange) && ($baa361a40ad5f5aa$var$Range.is(candidate.originSelectionRange) || $baa361a40ad5f5aa$var$Is.undefined(candidate.originSelectionRange));
    }
    LocationLink2.is = is;
})($baa361a40ad5f5aa$var$LocationLink || ($baa361a40ad5f5aa$var$LocationLink = {}));
var $baa361a40ad5f5aa$var$Color;
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
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && $baa361a40ad5f5aa$var$Is.numberRange(candidate.red, 0, 1) && $baa361a40ad5f5aa$var$Is.numberRange(candidate.green, 0, 1) && $baa361a40ad5f5aa$var$Is.numberRange(candidate.blue, 0, 1) && $baa361a40ad5f5aa$var$Is.numberRange(candidate.alpha, 0, 1);
    }
    Color2.is = is;
})($baa361a40ad5f5aa$var$Color || ($baa361a40ad5f5aa$var$Color = {}));
var $baa361a40ad5f5aa$var$ColorInformation;
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
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && $baa361a40ad5f5aa$var$Range.is(candidate.range) && $baa361a40ad5f5aa$var$Color.is(candidate.color);
    }
    ColorInformation2.is = is;
})($baa361a40ad5f5aa$var$ColorInformation || ($baa361a40ad5f5aa$var$ColorInformation = {}));
var $baa361a40ad5f5aa$var$ColorPresentation;
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
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && $baa361a40ad5f5aa$var$Is.string(candidate.label) && ($baa361a40ad5f5aa$var$Is.undefined(candidate.textEdit) || $baa361a40ad5f5aa$var$TextEdit.is(candidate)) && ($baa361a40ad5f5aa$var$Is.undefined(candidate.additionalTextEdits) || $baa361a40ad5f5aa$var$Is.typedArray(candidate.additionalTextEdits, $baa361a40ad5f5aa$var$TextEdit.is));
    }
    ColorPresentation2.is = is;
})($baa361a40ad5f5aa$var$ColorPresentation || ($baa361a40ad5f5aa$var$ColorPresentation = {}));
var $baa361a40ad5f5aa$var$FoldingRangeKind;
(function(FoldingRangeKind2) {
    FoldingRangeKind2.Comment = "comment";
    FoldingRangeKind2.Imports = "imports";
    FoldingRangeKind2.Region = "region";
})($baa361a40ad5f5aa$var$FoldingRangeKind || ($baa361a40ad5f5aa$var$FoldingRangeKind = {}));
var $baa361a40ad5f5aa$var$FoldingRange;
(function(FoldingRange2) {
    function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
        const result = {
            startLine: startLine,
            endLine: endLine
        };
        if ($baa361a40ad5f5aa$var$Is.defined(startCharacter)) result.startCharacter = startCharacter;
        if ($baa361a40ad5f5aa$var$Is.defined(endCharacter)) result.endCharacter = endCharacter;
        if ($baa361a40ad5f5aa$var$Is.defined(kind)) result.kind = kind;
        if ($baa361a40ad5f5aa$var$Is.defined(collapsedText)) result.collapsedText = collapsedText;
        return result;
    }
    FoldingRange2.create = create;
    function is(value) {
        const candidate = value;
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && $baa361a40ad5f5aa$var$Is.uinteger(candidate.startLine) && $baa361a40ad5f5aa$var$Is.uinteger(candidate.startLine) && ($baa361a40ad5f5aa$var$Is.undefined(candidate.startCharacter) || $baa361a40ad5f5aa$var$Is.uinteger(candidate.startCharacter)) && ($baa361a40ad5f5aa$var$Is.undefined(candidate.endCharacter) || $baa361a40ad5f5aa$var$Is.uinteger(candidate.endCharacter)) && ($baa361a40ad5f5aa$var$Is.undefined(candidate.kind) || $baa361a40ad5f5aa$var$Is.string(candidate.kind));
    }
    FoldingRange2.is = is;
})($baa361a40ad5f5aa$var$FoldingRange || ($baa361a40ad5f5aa$var$FoldingRange = {}));
var $baa361a40ad5f5aa$var$DiagnosticRelatedInformation;
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
        return $baa361a40ad5f5aa$var$Is.defined(candidate) && $baa361a40ad5f5aa$var$Location.is(candidate.location) && $baa361a40ad5f5aa$var$Is.string(candidate.message);
    }
    DiagnosticRelatedInformation2.is = is;
})($baa361a40ad5f5aa$var$DiagnosticRelatedInformation || ($baa361a40ad5f5aa$var$DiagnosticRelatedInformation = {}));
var $baa361a40ad5f5aa$var$DiagnosticSeverity;
(function(DiagnosticSeverity2) {
    DiagnosticSeverity2.Error = 1;
    DiagnosticSeverity2.Warning = 2;
    DiagnosticSeverity2.Information = 3;
    DiagnosticSeverity2.Hint = 4;
})($baa361a40ad5f5aa$var$DiagnosticSeverity || ($baa361a40ad5f5aa$var$DiagnosticSeverity = {}));
var $baa361a40ad5f5aa$var$DiagnosticTag;
(function(DiagnosticTag2) {
    DiagnosticTag2.Unnecessary = 1;
    DiagnosticTag2.Deprecated = 2;
})($baa361a40ad5f5aa$var$DiagnosticTag || ($baa361a40ad5f5aa$var$DiagnosticTag = {}));
var $baa361a40ad5f5aa$var$CodeDescription;
(function(CodeDescription2) {
    function is(value) {
        const candidate = value;
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && $baa361a40ad5f5aa$var$Is.string(candidate.href);
    }
    CodeDescription2.is = is;
})($baa361a40ad5f5aa$var$CodeDescription || ($baa361a40ad5f5aa$var$CodeDescription = {}));
var $baa361a40ad5f5aa$var$Diagnostic;
(function(Diagnostic2) {
    function create(range, message, severity, code, source, relatedInformation) {
        let result = {
            range: range,
            message: message
        };
        if ($baa361a40ad5f5aa$var$Is.defined(severity)) result.severity = severity;
        if ($baa361a40ad5f5aa$var$Is.defined(code)) result.code = code;
        if ($baa361a40ad5f5aa$var$Is.defined(source)) result.source = source;
        if ($baa361a40ad5f5aa$var$Is.defined(relatedInformation)) result.relatedInformation = relatedInformation;
        return result;
    }
    Diagnostic2.create = create;
    function is(value) {
        var _a;
        let candidate = value;
        return $baa361a40ad5f5aa$var$Is.defined(candidate) && $baa361a40ad5f5aa$var$Range.is(candidate.range) && $baa361a40ad5f5aa$var$Is.string(candidate.message) && ($baa361a40ad5f5aa$var$Is.number(candidate.severity) || $baa361a40ad5f5aa$var$Is.undefined(candidate.severity)) && ($baa361a40ad5f5aa$var$Is.integer(candidate.code) || $baa361a40ad5f5aa$var$Is.string(candidate.code) || $baa361a40ad5f5aa$var$Is.undefined(candidate.code)) && ($baa361a40ad5f5aa$var$Is.undefined(candidate.codeDescription) || $baa361a40ad5f5aa$var$Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && ($baa361a40ad5f5aa$var$Is.string(candidate.source) || $baa361a40ad5f5aa$var$Is.undefined(candidate.source)) && ($baa361a40ad5f5aa$var$Is.undefined(candidate.relatedInformation) || $baa361a40ad5f5aa$var$Is.typedArray(candidate.relatedInformation, $baa361a40ad5f5aa$var$DiagnosticRelatedInformation.is));
    }
    Diagnostic2.is = is;
})($baa361a40ad5f5aa$var$Diagnostic || ($baa361a40ad5f5aa$var$Diagnostic = {}));
var $baa361a40ad5f5aa$var$Command;
(function(Command2) {
    function create(title, command, ...args) {
        let result = {
            title: title,
            command: command
        };
        if ($baa361a40ad5f5aa$var$Is.defined(args) && args.length > 0) result.arguments = args;
        return result;
    }
    Command2.create = create;
    function is(value) {
        let candidate = value;
        return $baa361a40ad5f5aa$var$Is.defined(candidate) && $baa361a40ad5f5aa$var$Is.string(candidate.title) && $baa361a40ad5f5aa$var$Is.string(candidate.command);
    }
    Command2.is = is;
})($baa361a40ad5f5aa$var$Command || ($baa361a40ad5f5aa$var$Command = {}));
var $baa361a40ad5f5aa$var$TextEdit;
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
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && $baa361a40ad5f5aa$var$Is.string(candidate.newText) && $baa361a40ad5f5aa$var$Range.is(candidate.range);
    }
    TextEdit2.is = is;
})($baa361a40ad5f5aa$var$TextEdit || ($baa361a40ad5f5aa$var$TextEdit = {}));
var $baa361a40ad5f5aa$var$ChangeAnnotation;
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
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && $baa361a40ad5f5aa$var$Is.string(candidate.label) && ($baa361a40ad5f5aa$var$Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && ($baa361a40ad5f5aa$var$Is.string(candidate.description) || candidate.description === void 0);
    }
    ChangeAnnotation2.is = is;
})($baa361a40ad5f5aa$var$ChangeAnnotation || ($baa361a40ad5f5aa$var$ChangeAnnotation = {}));
var $baa361a40ad5f5aa$var$ChangeAnnotationIdentifier;
(function(ChangeAnnotationIdentifier2) {
    function is(value) {
        const candidate = value;
        return $baa361a40ad5f5aa$var$Is.string(candidate);
    }
    ChangeAnnotationIdentifier2.is = is;
})($baa361a40ad5f5aa$var$ChangeAnnotationIdentifier || ($baa361a40ad5f5aa$var$ChangeAnnotationIdentifier = {}));
var $baa361a40ad5f5aa$var$AnnotatedTextEdit;
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
        return $baa361a40ad5f5aa$var$TextEdit.is(candidate) && ($baa361a40ad5f5aa$var$ChangeAnnotation.is(candidate.annotationId) || $baa361a40ad5f5aa$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    AnnotatedTextEdit2.is = is;
})($baa361a40ad5f5aa$var$AnnotatedTextEdit || ($baa361a40ad5f5aa$var$AnnotatedTextEdit = {}));
var $baa361a40ad5f5aa$var$TextDocumentEdit;
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
        return $baa361a40ad5f5aa$var$Is.defined(candidate) && $baa361a40ad5f5aa$var$OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
    }
    TextDocumentEdit2.is = is;
})($baa361a40ad5f5aa$var$TextDocumentEdit || ($baa361a40ad5f5aa$var$TextDocumentEdit = {}));
var $baa361a40ad5f5aa$var$CreateFile;
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
        return candidate && candidate.kind === "create" && $baa361a40ad5f5aa$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $baa361a40ad5f5aa$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $baa361a40ad5f5aa$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $baa361a40ad5f5aa$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    CreateFile2.is = is;
})($baa361a40ad5f5aa$var$CreateFile || ($baa361a40ad5f5aa$var$CreateFile = {}));
var $baa361a40ad5f5aa$var$RenameFile;
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
        return candidate && candidate.kind === "rename" && $baa361a40ad5f5aa$var$Is.string(candidate.oldUri) && $baa361a40ad5f5aa$var$Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $baa361a40ad5f5aa$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $baa361a40ad5f5aa$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $baa361a40ad5f5aa$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    RenameFile2.is = is;
})($baa361a40ad5f5aa$var$RenameFile || ($baa361a40ad5f5aa$var$RenameFile = {}));
var $baa361a40ad5f5aa$var$DeleteFile;
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
        return candidate && candidate.kind === "delete" && $baa361a40ad5f5aa$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || $baa361a40ad5f5aa$var$Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || $baa361a40ad5f5aa$var$Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || $baa361a40ad5f5aa$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    DeleteFile2.is = is;
})($baa361a40ad5f5aa$var$DeleteFile || ($baa361a40ad5f5aa$var$DeleteFile = {}));
var $baa361a40ad5f5aa$var$WorkspaceEdit;
(function(WorkspaceEdit2) {
    function is(value) {
        let candidate = value;
        return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every((change)=>{
            if ($baa361a40ad5f5aa$var$Is.string(change.kind)) return $baa361a40ad5f5aa$var$CreateFile.is(change) || $baa361a40ad5f5aa$var$RenameFile.is(change) || $baa361a40ad5f5aa$var$DeleteFile.is(change);
            else return $baa361a40ad5f5aa$var$TextDocumentEdit.is(change);
        }));
    }
    WorkspaceEdit2.is = is;
})($baa361a40ad5f5aa$var$WorkspaceEdit || ($baa361a40ad5f5aa$var$WorkspaceEdit = {}));
var $baa361a40ad5f5aa$var$TextDocumentIdentifier;
(function(TextDocumentIdentifier2) {
    function create(uri) {
        return {
            uri: uri
        };
    }
    TextDocumentIdentifier2.create = create;
    function is(value) {
        let candidate = value;
        return $baa361a40ad5f5aa$var$Is.defined(candidate) && $baa361a40ad5f5aa$var$Is.string(candidate.uri);
    }
    TextDocumentIdentifier2.is = is;
})($baa361a40ad5f5aa$var$TextDocumentIdentifier || ($baa361a40ad5f5aa$var$TextDocumentIdentifier = {}));
var $baa361a40ad5f5aa$var$VersionedTextDocumentIdentifier;
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
        return $baa361a40ad5f5aa$var$Is.defined(candidate) && $baa361a40ad5f5aa$var$Is.string(candidate.uri) && $baa361a40ad5f5aa$var$Is.integer(candidate.version);
    }
    VersionedTextDocumentIdentifier2.is = is;
})($baa361a40ad5f5aa$var$VersionedTextDocumentIdentifier || ($baa361a40ad5f5aa$var$VersionedTextDocumentIdentifier = {}));
var $baa361a40ad5f5aa$var$OptionalVersionedTextDocumentIdentifier;
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
        return $baa361a40ad5f5aa$var$Is.defined(candidate) && $baa361a40ad5f5aa$var$Is.string(candidate.uri) && (candidate.version === null || $baa361a40ad5f5aa$var$Is.integer(candidate.version));
    }
    OptionalVersionedTextDocumentIdentifier2.is = is;
})($baa361a40ad5f5aa$var$OptionalVersionedTextDocumentIdentifier || ($baa361a40ad5f5aa$var$OptionalVersionedTextDocumentIdentifier = {}));
var $baa361a40ad5f5aa$var$TextDocumentItem;
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
        return $baa361a40ad5f5aa$var$Is.defined(candidate) && $baa361a40ad5f5aa$var$Is.string(candidate.uri) && $baa361a40ad5f5aa$var$Is.string(candidate.languageId) && $baa361a40ad5f5aa$var$Is.integer(candidate.version) && $baa361a40ad5f5aa$var$Is.string(candidate.text);
    }
    TextDocumentItem2.is = is;
})($baa361a40ad5f5aa$var$TextDocumentItem || ($baa361a40ad5f5aa$var$TextDocumentItem = {}));
var $baa361a40ad5f5aa$var$MarkupKind;
(function(MarkupKind2) {
    MarkupKind2.PlainText = "plaintext";
    MarkupKind2.Markdown = "markdown";
    function is(value) {
        const candidate = value;
        return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
    }
    MarkupKind2.is = is;
})($baa361a40ad5f5aa$var$MarkupKind || ($baa361a40ad5f5aa$var$MarkupKind = {}));
var $baa361a40ad5f5aa$var$MarkupContent;
(function(MarkupContent2) {
    function is(value) {
        const candidate = value;
        return $baa361a40ad5f5aa$var$Is.objectLiteral(value) && $baa361a40ad5f5aa$var$MarkupKind.is(candidate.kind) && $baa361a40ad5f5aa$var$Is.string(candidate.value);
    }
    MarkupContent2.is = is;
})($baa361a40ad5f5aa$var$MarkupContent || ($baa361a40ad5f5aa$var$MarkupContent = {}));
var $baa361a40ad5f5aa$var$CompletionItemKind;
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
})($baa361a40ad5f5aa$var$CompletionItemKind || ($baa361a40ad5f5aa$var$CompletionItemKind = {}));
var $baa361a40ad5f5aa$var$InsertTextFormat;
(function(InsertTextFormat2) {
    InsertTextFormat2.PlainText = 1;
    InsertTextFormat2.Snippet = 2;
})($baa361a40ad5f5aa$var$InsertTextFormat || ($baa361a40ad5f5aa$var$InsertTextFormat = {}));
var $baa361a40ad5f5aa$var$CompletionItemTag;
(function(CompletionItemTag2) {
    CompletionItemTag2.Deprecated = 1;
})($baa361a40ad5f5aa$var$CompletionItemTag || ($baa361a40ad5f5aa$var$CompletionItemTag = {}));
var $baa361a40ad5f5aa$var$InsertReplaceEdit;
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
        return candidate && $baa361a40ad5f5aa$var$Is.string(candidate.newText) && $baa361a40ad5f5aa$var$Range.is(candidate.insert) && $baa361a40ad5f5aa$var$Range.is(candidate.replace);
    }
    InsertReplaceEdit2.is = is;
})($baa361a40ad5f5aa$var$InsertReplaceEdit || ($baa361a40ad5f5aa$var$InsertReplaceEdit = {}));
var $baa361a40ad5f5aa$var$InsertTextMode;
(function(InsertTextMode2) {
    InsertTextMode2.asIs = 1;
    InsertTextMode2.adjustIndentation = 2;
})($baa361a40ad5f5aa$var$InsertTextMode || ($baa361a40ad5f5aa$var$InsertTextMode = {}));
var $baa361a40ad5f5aa$var$CompletionItemLabelDetails;
(function(CompletionItemLabelDetails2) {
    function is(value) {
        const candidate = value;
        return candidate && ($baa361a40ad5f5aa$var$Is.string(candidate.detail) || candidate.detail === void 0) && ($baa361a40ad5f5aa$var$Is.string(candidate.description) || candidate.description === void 0);
    }
    CompletionItemLabelDetails2.is = is;
})($baa361a40ad5f5aa$var$CompletionItemLabelDetails || ($baa361a40ad5f5aa$var$CompletionItemLabelDetails = {}));
var $baa361a40ad5f5aa$var$CompletionItem;
(function(CompletionItem2) {
    function create(label) {
        return {
            label: label
        };
    }
    CompletionItem2.create = create;
})($baa361a40ad5f5aa$var$CompletionItem || ($baa361a40ad5f5aa$var$CompletionItem = {}));
var $baa361a40ad5f5aa$var$CompletionList;
(function(CompletionList2) {
    function create(items, isIncomplete) {
        return {
            items: items ? items : [],
            isIncomplete: !!isIncomplete
        };
    }
    CompletionList2.create = create;
})($baa361a40ad5f5aa$var$CompletionList || ($baa361a40ad5f5aa$var$CompletionList = {}));
var $baa361a40ad5f5aa$var$MarkedString;
(function(MarkedString2) {
    function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    MarkedString2.fromPlainText = fromPlainText;
    function is(value) {
        const candidate = value;
        return $baa361a40ad5f5aa$var$Is.string(candidate) || $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && $baa361a40ad5f5aa$var$Is.string(candidate.language) && $baa361a40ad5f5aa$var$Is.string(candidate.value);
    }
    MarkedString2.is = is;
})($baa361a40ad5f5aa$var$MarkedString || ($baa361a40ad5f5aa$var$MarkedString = {}));
var $baa361a40ad5f5aa$var$Hover;
(function(Hover2) {
    function is(value) {
        let candidate = value;
        return !!candidate && $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && ($baa361a40ad5f5aa$var$MarkupContent.is(candidate.contents) || $baa361a40ad5f5aa$var$MarkedString.is(candidate.contents) || $baa361a40ad5f5aa$var$Is.typedArray(candidate.contents, $baa361a40ad5f5aa$var$MarkedString.is)) && (value.range === void 0 || $baa361a40ad5f5aa$var$Range.is(value.range));
    }
    Hover2.is = is;
})($baa361a40ad5f5aa$var$Hover || ($baa361a40ad5f5aa$var$Hover = {}));
var $baa361a40ad5f5aa$var$ParameterInformation;
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
})($baa361a40ad5f5aa$var$ParameterInformation || ($baa361a40ad5f5aa$var$ParameterInformation = {}));
var $baa361a40ad5f5aa$var$SignatureInformation;
(function(SignatureInformation2) {
    function create(label, documentation, ...parameters) {
        let result = {
            label: label
        };
        if ($baa361a40ad5f5aa$var$Is.defined(documentation)) result.documentation = documentation;
        if ($baa361a40ad5f5aa$var$Is.defined(parameters)) result.parameters = parameters;
        else result.parameters = [];
        return result;
    }
    SignatureInformation2.create = create;
})($baa361a40ad5f5aa$var$SignatureInformation || ($baa361a40ad5f5aa$var$SignatureInformation = {}));
var $baa361a40ad5f5aa$var$DocumentHighlightKind;
(function(DocumentHighlightKind2) {
    DocumentHighlightKind2.Text = 1;
    DocumentHighlightKind2.Read = 2;
    DocumentHighlightKind2.Write = 3;
})($baa361a40ad5f5aa$var$DocumentHighlightKind || ($baa361a40ad5f5aa$var$DocumentHighlightKind = {}));
var $baa361a40ad5f5aa$var$DocumentHighlight;
(function(DocumentHighlight2) {
    function create(range, kind) {
        let result = {
            range: range
        };
        if ($baa361a40ad5f5aa$var$Is.number(kind)) result.kind = kind;
        return result;
    }
    DocumentHighlight2.create = create;
})($baa361a40ad5f5aa$var$DocumentHighlight || ($baa361a40ad5f5aa$var$DocumentHighlight = {}));
var $baa361a40ad5f5aa$var$SymbolKind;
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
})($baa361a40ad5f5aa$var$SymbolKind || ($baa361a40ad5f5aa$var$SymbolKind = {}));
var $baa361a40ad5f5aa$var$SymbolTag;
(function(SymbolTag2) {
    SymbolTag2.Deprecated = 1;
})($baa361a40ad5f5aa$var$SymbolTag || ($baa361a40ad5f5aa$var$SymbolTag = {}));
var $baa361a40ad5f5aa$var$SymbolInformation;
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
})($baa361a40ad5f5aa$var$SymbolInformation || ($baa361a40ad5f5aa$var$SymbolInformation = {}));
var $baa361a40ad5f5aa$var$WorkspaceSymbol;
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
})($baa361a40ad5f5aa$var$WorkspaceSymbol || ($baa361a40ad5f5aa$var$WorkspaceSymbol = {}));
var $baa361a40ad5f5aa$var$DocumentSymbol;
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
        return candidate && $baa361a40ad5f5aa$var$Is.string(candidate.name) && $baa361a40ad5f5aa$var$Is.number(candidate.kind) && $baa361a40ad5f5aa$var$Range.is(candidate.range) && $baa361a40ad5f5aa$var$Range.is(candidate.selectionRange) && (candidate.detail === void 0 || $baa361a40ad5f5aa$var$Is.string(candidate.detail)) && (candidate.deprecated === void 0 || $baa361a40ad5f5aa$var$Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
    }
    DocumentSymbol2.is = is;
})($baa361a40ad5f5aa$var$DocumentSymbol || ($baa361a40ad5f5aa$var$DocumentSymbol = {}));
var $baa361a40ad5f5aa$var$CodeActionKind;
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
})($baa361a40ad5f5aa$var$CodeActionKind || ($baa361a40ad5f5aa$var$CodeActionKind = {}));
var $baa361a40ad5f5aa$var$CodeActionTriggerKind;
(function(CodeActionTriggerKind2) {
    CodeActionTriggerKind2.Invoked = 1;
    CodeActionTriggerKind2.Automatic = 2;
})($baa361a40ad5f5aa$var$CodeActionTriggerKind || ($baa361a40ad5f5aa$var$CodeActionTriggerKind = {}));
var $baa361a40ad5f5aa$var$CodeActionContext;
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
        return $baa361a40ad5f5aa$var$Is.defined(candidate) && $baa361a40ad5f5aa$var$Is.typedArray(candidate.diagnostics, $baa361a40ad5f5aa$var$Diagnostic.is) && (candidate.only === void 0 || $baa361a40ad5f5aa$var$Is.typedArray(candidate.only, $baa361a40ad5f5aa$var$Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === $baa361a40ad5f5aa$var$CodeActionTriggerKind.Invoked || candidate.triggerKind === $baa361a40ad5f5aa$var$CodeActionTriggerKind.Automatic);
    }
    CodeActionContext2.is = is;
})($baa361a40ad5f5aa$var$CodeActionContext || ($baa361a40ad5f5aa$var$CodeActionContext = {}));
var $baa361a40ad5f5aa$var$CodeAction;
(function(CodeAction2) {
    function create(title, kindOrCommandOrEdit, kind) {
        let result = {
            title: title
        };
        let checkKind = true;
        if (typeof kindOrCommandOrEdit === "string") {
            checkKind = false;
            result.kind = kindOrCommandOrEdit;
        } else if ($baa361a40ad5f5aa$var$Command.is(kindOrCommandOrEdit)) result.command = kindOrCommandOrEdit;
        else result.edit = kindOrCommandOrEdit;
        if (checkKind && kind !== void 0) result.kind = kind;
        return result;
    }
    CodeAction2.create = create;
    function is(value) {
        let candidate = value;
        return candidate && $baa361a40ad5f5aa$var$Is.string(candidate.title) && (candidate.diagnostics === void 0 || $baa361a40ad5f5aa$var$Is.typedArray(candidate.diagnostics, $baa361a40ad5f5aa$var$Diagnostic.is)) && (candidate.kind === void 0 || $baa361a40ad5f5aa$var$Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || $baa361a40ad5f5aa$var$Command.is(candidate.command)) && (candidate.isPreferred === void 0 || $baa361a40ad5f5aa$var$Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || $baa361a40ad5f5aa$var$WorkspaceEdit.is(candidate.edit));
    }
    CodeAction2.is = is;
})($baa361a40ad5f5aa$var$CodeAction || ($baa361a40ad5f5aa$var$CodeAction = {}));
var $baa361a40ad5f5aa$var$CodeLens;
(function(CodeLens2) {
    function create(range, data) {
        let result = {
            range: range
        };
        if ($baa361a40ad5f5aa$var$Is.defined(data)) result.data = data;
        return result;
    }
    CodeLens2.create = create;
    function is(value) {
        let candidate = value;
        return $baa361a40ad5f5aa$var$Is.defined(candidate) && $baa361a40ad5f5aa$var$Range.is(candidate.range) && ($baa361a40ad5f5aa$var$Is.undefined(candidate.command) || $baa361a40ad5f5aa$var$Command.is(candidate.command));
    }
    CodeLens2.is = is;
})($baa361a40ad5f5aa$var$CodeLens || ($baa361a40ad5f5aa$var$CodeLens = {}));
var $baa361a40ad5f5aa$var$FormattingOptions;
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
        return $baa361a40ad5f5aa$var$Is.defined(candidate) && $baa361a40ad5f5aa$var$Is.uinteger(candidate.tabSize) && $baa361a40ad5f5aa$var$Is.boolean(candidate.insertSpaces);
    }
    FormattingOptions2.is = is;
})($baa361a40ad5f5aa$var$FormattingOptions || ($baa361a40ad5f5aa$var$FormattingOptions = {}));
var $baa361a40ad5f5aa$var$DocumentLink;
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
        return $baa361a40ad5f5aa$var$Is.defined(candidate) && $baa361a40ad5f5aa$var$Range.is(candidate.range) && ($baa361a40ad5f5aa$var$Is.undefined(candidate.target) || $baa361a40ad5f5aa$var$Is.string(candidate.target));
    }
    DocumentLink2.is = is;
})($baa361a40ad5f5aa$var$DocumentLink || ($baa361a40ad5f5aa$var$DocumentLink = {}));
var $baa361a40ad5f5aa$var$SelectionRange;
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
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && $baa361a40ad5f5aa$var$Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
    }
    SelectionRange2.is = is;
})($baa361a40ad5f5aa$var$SelectionRange || ($baa361a40ad5f5aa$var$SelectionRange = {}));
var $baa361a40ad5f5aa$var$SemanticTokenTypes;
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
})($baa361a40ad5f5aa$var$SemanticTokenTypes || ($baa361a40ad5f5aa$var$SemanticTokenTypes = {}));
var $baa361a40ad5f5aa$var$SemanticTokenModifiers;
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
})($baa361a40ad5f5aa$var$SemanticTokenModifiers || ($baa361a40ad5f5aa$var$SemanticTokenModifiers = {}));
var $baa361a40ad5f5aa$var$SemanticTokens;
(function(SemanticTokens2) {
    function is(value) {
        const candidate = value;
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
    }
    SemanticTokens2.is = is;
})($baa361a40ad5f5aa$var$SemanticTokens || ($baa361a40ad5f5aa$var$SemanticTokens = {}));
var $baa361a40ad5f5aa$var$InlineValueText;
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
        return candidate !== void 0 && candidate !== null && $baa361a40ad5f5aa$var$Range.is(candidate.range) && $baa361a40ad5f5aa$var$Is.string(candidate.text);
    }
    InlineValueText2.is = is;
})($baa361a40ad5f5aa$var$InlineValueText || ($baa361a40ad5f5aa$var$InlineValueText = {}));
var $baa361a40ad5f5aa$var$InlineValueVariableLookup;
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
        return candidate !== void 0 && candidate !== null && $baa361a40ad5f5aa$var$Range.is(candidate.range) && $baa361a40ad5f5aa$var$Is.boolean(candidate.caseSensitiveLookup) && ($baa361a40ad5f5aa$var$Is.string(candidate.variableName) || candidate.variableName === void 0);
    }
    InlineValueVariableLookup2.is = is;
})($baa361a40ad5f5aa$var$InlineValueVariableLookup || ($baa361a40ad5f5aa$var$InlineValueVariableLookup = {}));
var $baa361a40ad5f5aa$var$InlineValueEvaluatableExpression;
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
        return candidate !== void 0 && candidate !== null && $baa361a40ad5f5aa$var$Range.is(candidate.range) && ($baa361a40ad5f5aa$var$Is.string(candidate.expression) || candidate.expression === void 0);
    }
    InlineValueEvaluatableExpression2.is = is;
})($baa361a40ad5f5aa$var$InlineValueEvaluatableExpression || ($baa361a40ad5f5aa$var$InlineValueEvaluatableExpression = {}));
var $baa361a40ad5f5aa$var$InlineValueContext;
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
        return $baa361a40ad5f5aa$var$Is.defined(candidate) && $baa361a40ad5f5aa$var$Range.is(value.stoppedLocation);
    }
    InlineValueContext2.is = is;
})($baa361a40ad5f5aa$var$InlineValueContext || ($baa361a40ad5f5aa$var$InlineValueContext = {}));
var $baa361a40ad5f5aa$var$InlayHintKind;
(function(InlayHintKind2) {
    InlayHintKind2.Type = 1;
    InlayHintKind2.Parameter = 2;
    function is(value) {
        return value === 1 || value === 2;
    }
    InlayHintKind2.is = is;
})($baa361a40ad5f5aa$var$InlayHintKind || ($baa361a40ad5f5aa$var$InlayHintKind = {}));
var $baa361a40ad5f5aa$var$InlayHintLabelPart;
(function(InlayHintLabelPart2) {
    function create(value) {
        return {
            value: value
        };
    }
    InlayHintLabelPart2.create = create;
    function is(value) {
        const candidate = value;
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || $baa361a40ad5f5aa$var$Is.string(candidate.tooltip) || $baa361a40ad5f5aa$var$MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || $baa361a40ad5f5aa$var$Location.is(candidate.location)) && (candidate.command === void 0 || $baa361a40ad5f5aa$var$Command.is(candidate.command));
    }
    InlayHintLabelPart2.is = is;
})($baa361a40ad5f5aa$var$InlayHintLabelPart || ($baa361a40ad5f5aa$var$InlayHintLabelPart = {}));
var $baa361a40ad5f5aa$var$InlayHint;
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
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && $baa361a40ad5f5aa$var$Position.is(candidate.position) && ($baa361a40ad5f5aa$var$Is.string(candidate.label) || $baa361a40ad5f5aa$var$Is.typedArray(candidate.label, $baa361a40ad5f5aa$var$InlayHintLabelPart.is)) && (candidate.kind === void 0 || $baa361a40ad5f5aa$var$InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || $baa361a40ad5f5aa$var$Is.typedArray(candidate.textEdits, $baa361a40ad5f5aa$var$TextEdit.is) && (candidate.tooltip === void 0 || $baa361a40ad5f5aa$var$Is.string(candidate.tooltip) || $baa361a40ad5f5aa$var$MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || $baa361a40ad5f5aa$var$Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || $baa361a40ad5f5aa$var$Is.boolean(candidate.paddingRight));
    }
    InlayHint2.is = is;
})($baa361a40ad5f5aa$var$InlayHint || ($baa361a40ad5f5aa$var$InlayHint = {}));
var $baa361a40ad5f5aa$var$StringValue;
(function(StringValue2) {
    function createSnippet(value) {
        return {
            kind: "snippet",
            value: value
        };
    }
    StringValue2.createSnippet = createSnippet;
})($baa361a40ad5f5aa$var$StringValue || ($baa361a40ad5f5aa$var$StringValue = {}));
var $baa361a40ad5f5aa$var$InlineCompletionItem;
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
})($baa361a40ad5f5aa$var$InlineCompletionItem || ($baa361a40ad5f5aa$var$InlineCompletionItem = {}));
var $baa361a40ad5f5aa$var$InlineCompletionList;
(function(InlineCompletionList2) {
    function create(items) {
        return {
            items: items
        };
    }
    InlineCompletionList2.create = create;
})($baa361a40ad5f5aa$var$InlineCompletionList || ($baa361a40ad5f5aa$var$InlineCompletionList = {}));
var $baa361a40ad5f5aa$var$InlineCompletionTriggerKind;
(function(InlineCompletionTriggerKind2) {
    InlineCompletionTriggerKind2.Invoked = 0;
    InlineCompletionTriggerKind2.Automatic = 1;
})($baa361a40ad5f5aa$var$InlineCompletionTriggerKind || ($baa361a40ad5f5aa$var$InlineCompletionTriggerKind = {}));
var $baa361a40ad5f5aa$var$SelectedCompletionInfo;
(function(SelectedCompletionInfo2) {
    function create(range, text) {
        return {
            range: range,
            text: text
        };
    }
    SelectedCompletionInfo2.create = create;
})($baa361a40ad5f5aa$var$SelectedCompletionInfo || ($baa361a40ad5f5aa$var$SelectedCompletionInfo = {}));
var $baa361a40ad5f5aa$var$InlineCompletionContext;
(function(InlineCompletionContext2) {
    function create(triggerKind, selectedCompletionInfo) {
        return {
            triggerKind: triggerKind,
            selectedCompletionInfo: selectedCompletionInfo
        };
    }
    InlineCompletionContext2.create = create;
})($baa361a40ad5f5aa$var$InlineCompletionContext || ($baa361a40ad5f5aa$var$InlineCompletionContext = {}));
var $baa361a40ad5f5aa$var$WorkspaceFolder;
(function(WorkspaceFolder2) {
    function is(value) {
        const candidate = value;
        return $baa361a40ad5f5aa$var$Is.objectLiteral(candidate) && $baa361a40ad5f5aa$var$URI.is(candidate.uri) && $baa361a40ad5f5aa$var$Is.string(candidate.name);
    }
    WorkspaceFolder2.is = is;
})($baa361a40ad5f5aa$var$WorkspaceFolder || ($baa361a40ad5f5aa$var$WorkspaceFolder = {}));
var $baa361a40ad5f5aa$var$TextDocument;
(function(TextDocument2) {
    function create(uri, languageId, version, content) {
        return new $baa361a40ad5f5aa$var$FullTextDocument(uri, languageId, version, content);
    }
    TextDocument2.create = create;
    function is(value) {
        let candidate = value;
        return $baa361a40ad5f5aa$var$Is.defined(candidate) && $baa361a40ad5f5aa$var$Is.string(candidate.uri) && ($baa361a40ad5f5aa$var$Is.undefined(candidate.languageId) || $baa361a40ad5f5aa$var$Is.string(candidate.languageId)) && $baa361a40ad5f5aa$var$Is.uinteger(candidate.lineCount) && $baa361a40ad5f5aa$var$Is.func(candidate.getText) && $baa361a40ad5f5aa$var$Is.func(candidate.positionAt) && $baa361a40ad5f5aa$var$Is.func(candidate.offsetAt) ? true : false;
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
})($baa361a40ad5f5aa$var$TextDocument || ($baa361a40ad5f5aa$var$TextDocument = {}));
var $baa361a40ad5f5aa$var$FullTextDocument = class {
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
        if (high === 0) return $baa361a40ad5f5aa$var$Position.create(0, offset);
        while(low < high){
            let mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) high = mid;
            else low = mid + 1;
        }
        let line = low - 1;
        return $baa361a40ad5f5aa$var$Position.create(line, offset - lineOffsets[line]);
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
var $baa361a40ad5f5aa$var$Is;
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
})($baa361a40ad5f5aa$var$Is || ($baa361a40ad5f5aa$var$Is = {}));
// src/language/common/lspLanguageFeatures.ts
var $baa361a40ad5f5aa$export$8105b646adfa9bae = class {
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
            $baa361a40ad5f5aa$var$monaco_editor_core_exports.editor.setModelMarkers(model, this._languageId, []);
            let uriStr = model.uri.toString();
            let listener = this._listener[uriStr];
            if (listener) {
                listener.dispose();
                delete this._listener[uriStr];
            }
        };
        this._disposables.push($baa361a40ad5f5aa$var$monaco_editor_core_exports.editor.onDidCreateModel(onModelAdd));
        this._disposables.push($baa361a40ad5f5aa$var$monaco_editor_core_exports.editor.onWillDisposeModel(onModelRemoved));
        this._disposables.push($baa361a40ad5f5aa$var$monaco_editor_core_exports.editor.onDidChangeModelLanguage((event)=>{
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        this._disposables.push(configChangeEvent((_)=>{
            $baa361a40ad5f5aa$var$monaco_editor_core_exports.editor.getModels().forEach((model)=>{
                if (model.getLanguageId() === this._languageId) {
                    onModelRemoved(model);
                    onModelAdd(model);
                }
            });
        }));
        this._disposables.push({
            dispose: ()=>{
                $baa361a40ad5f5aa$var$monaco_editor_core_exports.editor.getModels().forEach(onModelRemoved);
                for(let key in this._listener)this._listener[key].dispose();
            }
        });
        $baa361a40ad5f5aa$var$monaco_editor_core_exports.editor.getModels().forEach(onModelAdd);
    }
    dispose() {
        this._disposables.forEach((d)=>d && d.dispose());
        this._disposables.length = 0;
    }
    _doValidate(resource, languageId) {
        this._worker(resource).then((worker)=>{
            return worker.doValidation(resource.toString());
        }).then((diagnostics)=>{
            const markers = diagnostics.map((d)=>$baa361a40ad5f5aa$var$toDiagnostics(resource, d));
            let model = $baa361a40ad5f5aa$var$monaco_editor_core_exports.editor.getModel(resource);
            if (model && model.getLanguageId() === languageId) $baa361a40ad5f5aa$var$monaco_editor_core_exports.editor.setModelMarkers(model, languageId, markers);
        }).then(void 0, (err)=>{
            console.error(err);
        });
    }
};
function $baa361a40ad5f5aa$var$toSeverity(lsSeverity) {
    switch(lsSeverity){
        case $baa361a40ad5f5aa$var$DiagnosticSeverity.Error:
            return $baa361a40ad5f5aa$var$monaco_editor_core_exports.MarkerSeverity.Error;
        case $baa361a40ad5f5aa$var$DiagnosticSeverity.Warning:
            return $baa361a40ad5f5aa$var$monaco_editor_core_exports.MarkerSeverity.Warning;
        case $baa361a40ad5f5aa$var$DiagnosticSeverity.Information:
            return $baa361a40ad5f5aa$var$monaco_editor_core_exports.MarkerSeverity.Info;
        case $baa361a40ad5f5aa$var$DiagnosticSeverity.Hint:
            return $baa361a40ad5f5aa$var$monaco_editor_core_exports.MarkerSeverity.Hint;
        default:
            return $baa361a40ad5f5aa$var$monaco_editor_core_exports.MarkerSeverity.Info;
    }
}
function $baa361a40ad5f5aa$var$toDiagnostics(resource, diag) {
    let code = typeof diag.code === "number" ? String(diag.code) : diag.code;
    return {
        severity: $baa361a40ad5f5aa$var$toSeverity(diag.severity),
        startLineNumber: diag.range.start.line + 1,
        startColumn: diag.range.start.character + 1,
        endLineNumber: diag.range.end.line + 1,
        endColumn: diag.range.end.character + 1,
        message: diag.message,
        code: code,
        source: diag.source
    };
}
var $baa361a40ad5f5aa$export$49e06df83bb13a1e = class {
    constructor(_worker, _triggerCharacters){
        this._worker = _worker;
        this._triggerCharacters = _triggerCharacters;
    }
    get triggerCharacters() {
        return this._triggerCharacters;
    }
    provideCompletionItems(model, position, context, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.doComplete(resource.toString(), $baa361a40ad5f5aa$export$8ba27819f9a0a3b5(position));
        }).then((info)=>{
            if (!info) return;
            const wordInfo = model.getWordUntilPosition(position);
            const wordRange = new $baa361a40ad5f5aa$var$monaco_editor_core_exports.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
            const items = info.items.map((entry)=>{
                const item = {
                    label: entry.label,
                    insertText: entry.insertText || entry.label,
                    sortText: entry.sortText,
                    filterText: entry.filterText,
                    documentation: entry.documentation,
                    detail: entry.detail,
                    command: $baa361a40ad5f5aa$var$toCommand(entry.command),
                    range: wordRange,
                    kind: $baa361a40ad5f5aa$var$toCompletionItemKind(entry.kind)
                };
                if (entry.textEdit) {
                    if ($baa361a40ad5f5aa$var$isInsertReplaceEdit(entry.textEdit)) item.range = {
                        insert: $baa361a40ad5f5aa$export$12d25b3751433c6d(entry.textEdit.insert),
                        replace: $baa361a40ad5f5aa$export$12d25b3751433c6d(entry.textEdit.replace)
                    };
                    else item.range = $baa361a40ad5f5aa$export$12d25b3751433c6d(entry.textEdit.range);
                    item.insertText = entry.textEdit.newText;
                }
                if (entry.additionalTextEdits) item.additionalTextEdits = entry.additionalTextEdits.map($baa361a40ad5f5aa$export$ef01c53612c067e8);
                if (entry.insertTextFormat === $baa361a40ad5f5aa$var$InsertTextFormat.Snippet) item.insertTextRules = $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.CompletionItemInsertTextRule.InsertAsSnippet;
                return item;
            });
            return {
                isIncomplete: info.isIncomplete,
                suggestions: items
            };
        });
    }
};
function $baa361a40ad5f5aa$export$8ba27819f9a0a3b5(position) {
    if (!position) return void 0;
    return {
        character: position.column - 1,
        line: position.lineNumber - 1
    };
}
function $baa361a40ad5f5aa$export$f01e84010c13cebe(range) {
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
function $baa361a40ad5f5aa$export$12d25b3751433c6d(range) {
    if (!range) return void 0;
    return new $baa361a40ad5f5aa$var$monaco_editor_core_exports.Range(range.start.line + 1, range.start.character + 1, range.end.line + 1, range.end.character + 1);
}
function $baa361a40ad5f5aa$var$isInsertReplaceEdit(edit) {
    return typeof edit.insert !== "undefined" && typeof edit.replace !== "undefined";
}
function $baa361a40ad5f5aa$var$toCompletionItemKind(kind) {
    const mItemKind = $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.CompletionItemKind;
    switch(kind){
        case $baa361a40ad5f5aa$var$CompletionItemKind.Text:
            return mItemKind.Text;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Method:
            return mItemKind.Method;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Function:
            return mItemKind.Function;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Constructor:
            return mItemKind.Constructor;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Field:
            return mItemKind.Field;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Variable:
            return mItemKind.Variable;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Class:
            return mItemKind.Class;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Interface:
            return mItemKind.Interface;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Module:
            return mItemKind.Module;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Property:
            return mItemKind.Property;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Unit:
            return mItemKind.Unit;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Value:
            return mItemKind.Value;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Enum:
            return mItemKind.Enum;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Keyword:
            return mItemKind.Keyword;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Snippet:
            return mItemKind.Snippet;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Color:
            return mItemKind.Color;
        case $baa361a40ad5f5aa$var$CompletionItemKind.File:
            return mItemKind.File;
        case $baa361a40ad5f5aa$var$CompletionItemKind.Reference:
            return mItemKind.Reference;
    }
    return mItemKind.Property;
}
function $baa361a40ad5f5aa$export$ef01c53612c067e8(textEdit) {
    if (!textEdit) return void 0;
    return {
        range: $baa361a40ad5f5aa$export$12d25b3751433c6d(textEdit.range),
        text: textEdit.newText
    };
}
function $baa361a40ad5f5aa$var$toCommand(c) {
    return c && c.command === "editor.action.triggerSuggest" ? {
        id: c.command,
        title: c.title,
        arguments: c.arguments
    } : void 0;
}
var $baa361a40ad5f5aa$export$90ae7381ad9e28ec = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideHover(model, position, token) {
        let resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.doHover(resource.toString(), $baa361a40ad5f5aa$export$8ba27819f9a0a3b5(position));
        }).then((info)=>{
            if (!info) return;
            return {
                range: $baa361a40ad5f5aa$export$12d25b3751433c6d(info.range),
                contents: $baa361a40ad5f5aa$var$toMarkedStringArray(info.contents)
            };
        });
    }
};
function $baa361a40ad5f5aa$var$isMarkupContent(thing) {
    return thing && typeof thing === "object" && typeof thing.kind === "string";
}
function $baa361a40ad5f5aa$var$toMarkdownString(entry) {
    if (typeof entry === "string") return {
        value: entry
    };
    if ($baa361a40ad5f5aa$var$isMarkupContent(entry)) {
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
function $baa361a40ad5f5aa$var$toMarkedStringArray(contents) {
    if (!contents) return void 0;
    if (Array.isArray(contents)) return contents.map($baa361a40ad5f5aa$var$toMarkdownString);
    return [
        $baa361a40ad5f5aa$var$toMarkdownString(contents)
    ];
}
var $baa361a40ad5f5aa$export$43e7617f9df67ed1 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideDocumentHighlights(model, position, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.findDocumentHighlights(resource.toString(), $baa361a40ad5f5aa$export$8ba27819f9a0a3b5(position))).then((entries)=>{
            if (!entries) return;
            return entries.map((entry)=>{
                return {
                    range: $baa361a40ad5f5aa$export$12d25b3751433c6d(entry.range),
                    kind: $baa361a40ad5f5aa$var$toDocumentHighlightKind(entry.kind)
                };
            });
        });
    }
};
function $baa361a40ad5f5aa$var$toDocumentHighlightKind(kind) {
    switch(kind){
        case $baa361a40ad5f5aa$var$DocumentHighlightKind.Read:
            return $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Read;
        case $baa361a40ad5f5aa$var$DocumentHighlightKind.Write:
            return $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Write;
        case $baa361a40ad5f5aa$var$DocumentHighlightKind.Text:
            return $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text;
    }
    return $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text;
}
var $baa361a40ad5f5aa$export$ffd9ea2d5a3f0bd5 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideDefinition(model, position, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.findDefinition(resource.toString(), $baa361a40ad5f5aa$export$8ba27819f9a0a3b5(position));
        }).then((definition)=>{
            if (!definition) return;
            return [
                $baa361a40ad5f5aa$var$toLocation(definition)
            ];
        });
    }
};
function $baa361a40ad5f5aa$var$toLocation(location) {
    return {
        uri: $baa361a40ad5f5aa$var$monaco_editor_core_exports.Uri.parse(location.uri),
        range: $baa361a40ad5f5aa$export$12d25b3751433c6d(location.range)
    };
}
var $baa361a40ad5f5aa$export$da977c26606f3d55 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideReferences(model, position, context, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.findReferences(resource.toString(), $baa361a40ad5f5aa$export$8ba27819f9a0a3b5(position));
        }).then((entries)=>{
            if (!entries) return;
            return entries.map($baa361a40ad5f5aa$var$toLocation);
        });
    }
};
var $baa361a40ad5f5aa$export$33797a450c0c0a77 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideRenameEdits(model, position, newName, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.doRename(resource.toString(), $baa361a40ad5f5aa$export$8ba27819f9a0a3b5(position), newName);
        }).then((edit)=>{
            return $baa361a40ad5f5aa$var$toWorkspaceEdit(edit);
        });
    }
};
function $baa361a40ad5f5aa$var$toWorkspaceEdit(edit) {
    if (!edit || !edit.changes) return void 0;
    let resourceEdits = [];
    for(let uri in edit.changes){
        const _uri = $baa361a40ad5f5aa$var$monaco_editor_core_exports.Uri.parse(uri);
        for (let e of edit.changes[uri])resourceEdits.push({
            resource: _uri,
            versionId: void 0,
            textEdit: {
                range: $baa361a40ad5f5aa$export$12d25b3751433c6d(e.range),
                text: e.newText
            }
        });
    }
    return {
        edits: resourceEdits
    };
}
var $baa361a40ad5f5aa$export$6e92bf3474907f9b = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideDocumentSymbols(model, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.findDocumentSymbols(resource.toString())).then((items)=>{
            if (!items) return;
            return items.map((item)=>{
                if ($baa361a40ad5f5aa$var$isDocumentSymbol(item)) return $baa361a40ad5f5aa$var$toDocumentSymbol(item);
                return {
                    name: item.name,
                    detail: "",
                    containerName: item.containerName,
                    kind: $baa361a40ad5f5aa$var$toSymbolKind(item.kind),
                    range: $baa361a40ad5f5aa$export$12d25b3751433c6d(item.location.range),
                    selectionRange: $baa361a40ad5f5aa$export$12d25b3751433c6d(item.location.range),
                    tags: []
                };
            });
        });
    }
};
function $baa361a40ad5f5aa$var$isDocumentSymbol(symbol) {
    return "children" in symbol;
}
function $baa361a40ad5f5aa$var$toDocumentSymbol(symbol) {
    return {
        name: symbol.name,
        detail: symbol.detail ?? "",
        kind: $baa361a40ad5f5aa$var$toSymbolKind(symbol.kind),
        range: $baa361a40ad5f5aa$export$12d25b3751433c6d(symbol.range),
        selectionRange: $baa361a40ad5f5aa$export$12d25b3751433c6d(symbol.selectionRange),
        tags: symbol.tags ?? [],
        children: (symbol.children ?? []).map((item)=>$baa361a40ad5f5aa$var$toDocumentSymbol(item))
    };
}
function $baa361a40ad5f5aa$var$toSymbolKind(kind) {
    let mKind = $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.SymbolKind;
    switch(kind){
        case $baa361a40ad5f5aa$var$SymbolKind.File:
            return mKind.File;
        case $baa361a40ad5f5aa$var$SymbolKind.Module:
            return mKind.Module;
        case $baa361a40ad5f5aa$var$SymbolKind.Namespace:
            return mKind.Namespace;
        case $baa361a40ad5f5aa$var$SymbolKind.Package:
            return mKind.Package;
        case $baa361a40ad5f5aa$var$SymbolKind.Class:
            return mKind.Class;
        case $baa361a40ad5f5aa$var$SymbolKind.Method:
            return mKind.Method;
        case $baa361a40ad5f5aa$var$SymbolKind.Property:
            return mKind.Property;
        case $baa361a40ad5f5aa$var$SymbolKind.Field:
            return mKind.Field;
        case $baa361a40ad5f5aa$var$SymbolKind.Constructor:
            return mKind.Constructor;
        case $baa361a40ad5f5aa$var$SymbolKind.Enum:
            return mKind.Enum;
        case $baa361a40ad5f5aa$var$SymbolKind.Interface:
            return mKind.Interface;
        case $baa361a40ad5f5aa$var$SymbolKind.Function:
            return mKind.Function;
        case $baa361a40ad5f5aa$var$SymbolKind.Variable:
            return mKind.Variable;
        case $baa361a40ad5f5aa$var$SymbolKind.Constant:
            return mKind.Constant;
        case $baa361a40ad5f5aa$var$SymbolKind.String:
            return mKind.String;
        case $baa361a40ad5f5aa$var$SymbolKind.Number:
            return mKind.Number;
        case $baa361a40ad5f5aa$var$SymbolKind.Boolean:
            return mKind.Boolean;
        case $baa361a40ad5f5aa$var$SymbolKind.Array:
            return mKind.Array;
    }
    return mKind.Function;
}
var $baa361a40ad5f5aa$export$31b66168ba80848b = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideLinks(model, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.findDocumentLinks(resource.toString())).then((items)=>{
            if (!items) return;
            return {
                links: items.map((item)=>({
                        range: $baa361a40ad5f5aa$export$12d25b3751433c6d(item.range),
                        url: item.target
                    }))
            };
        });
    }
};
var $baa361a40ad5f5aa$export$837213a13dc5abe7 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideDocumentFormattingEdits(model, options, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.format(resource.toString(), null, $baa361a40ad5f5aa$var$fromFormattingOptions(options)).then((edits)=>{
                if (!edits || edits.length === 0) return;
                return edits.map($baa361a40ad5f5aa$export$ef01c53612c067e8);
            });
        });
    }
};
var $baa361a40ad5f5aa$export$1ccdec097412b75c = class {
    constructor(_worker){
        this._worker = _worker;
        this.canFormatMultipleRanges = false;
    }
    provideDocumentRangeFormattingEdits(model, range, options, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.format(resource.toString(), $baa361a40ad5f5aa$export$f01e84010c13cebe(range), $baa361a40ad5f5aa$var$fromFormattingOptions(options)).then((edits)=>{
                if (!edits || edits.length === 0) return;
                return edits.map($baa361a40ad5f5aa$export$ef01c53612c067e8);
            });
        });
    }
};
function $baa361a40ad5f5aa$var$fromFormattingOptions(options) {
    return {
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces
    };
}
var $baa361a40ad5f5aa$export$a12c46c4f6f5a524 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideDocumentColors(model, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.findDocumentColors(resource.toString())).then((infos)=>{
            if (!infos) return;
            return infos.map((item)=>({
                    color: item.color,
                    range: $baa361a40ad5f5aa$export$12d25b3751433c6d(item.range)
                }));
        });
    }
    provideColorPresentations(model, info, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.getColorPresentations(resource.toString(), info.color, $baa361a40ad5f5aa$export$f01e84010c13cebe(info.range))).then((presentations)=>{
            if (!presentations) return;
            return presentations.map((presentation)=>{
                let item = {
                    label: presentation.label
                };
                if (presentation.textEdit) item.textEdit = $baa361a40ad5f5aa$export$ef01c53612c067e8(presentation.textEdit);
                if (presentation.additionalTextEdits) item.additionalTextEdits = presentation.additionalTextEdits.map($baa361a40ad5f5aa$export$ef01c53612c067e8);
                return item;
            });
        });
    }
};
var $baa361a40ad5f5aa$export$dbee4e9a4c977c75 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideFoldingRanges(model, context, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.getFoldingRanges(resource.toString(), context)).then((ranges)=>{
            if (!ranges) return;
            return ranges.map((range)=>{
                const result = {
                    start: range.startLine + 1,
                    end: range.endLine + 1
                };
                if (typeof range.kind !== "undefined") result.kind = $baa361a40ad5f5aa$var$toFoldingRangeKind(range.kind);
                return result;
            });
        });
    }
};
function $baa361a40ad5f5aa$var$toFoldingRangeKind(kind) {
    switch(kind){
        case $baa361a40ad5f5aa$var$FoldingRangeKind.Comment:
            return $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.FoldingRangeKind.Comment;
        case $baa361a40ad5f5aa$var$FoldingRangeKind.Imports:
            return $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.FoldingRangeKind.Imports;
        case $baa361a40ad5f5aa$var$FoldingRangeKind.Region:
            return $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.FoldingRangeKind.Region;
    }
    return void 0;
}
var $baa361a40ad5f5aa$export$b7d0513de581c681 = class {
    constructor(_worker){
        this._worker = _worker;
    }
    provideSelectionRanges(model, positions, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.getSelectionRanges(resource.toString(), positions.map($baa361a40ad5f5aa$export$8ba27819f9a0a3b5))).then((selectionRanges)=>{
            if (!selectionRanges) return;
            return selectionRanges.map((selectionRange)=>{
                const result = [];
                while(selectionRange){
                    result.push({
                        range: $baa361a40ad5f5aa$export$12d25b3751433c6d(selectionRange.range)
                    });
                    selectionRange = selectionRange.parent;
                }
                return result;
            });
        });
    }
};
// src/language/html/htmlMode.ts
var $baa361a40ad5f5aa$var$HTMLCompletionAdapter = class extends $baa361a40ad5f5aa$export$49e06df83bb13a1e {
    constructor(worker){
        super(worker, [
            ".",
            ":",
            "<",
            '"',
            "=",
            "/"
        ]);
    }
};
function $baa361a40ad5f5aa$export$972c61cff7b1bac7(defaults) {
    const client = new $baa361a40ad5f5aa$export$bcff6015853c67ce(defaults);
    const worker = (...uris)=>{
        return client.getLanguageServiceWorker(...uris);
    };
    let languageId = defaults.languageId;
    $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(languageId, new $baa361a40ad5f5aa$var$HTMLCompletionAdapter(worker));
    $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerHoverProvider(languageId, new $baa361a40ad5f5aa$export$90ae7381ad9e28ec(worker));
    $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerDocumentHighlightProvider(languageId, new $baa361a40ad5f5aa$export$43e7617f9df67ed1(worker));
    $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerLinkProvider(languageId, new $baa361a40ad5f5aa$export$31b66168ba80848b(worker));
    $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerFoldingRangeProvider(languageId, new $baa361a40ad5f5aa$export$dbee4e9a4c977c75(worker));
    $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(languageId, new $baa361a40ad5f5aa$export$6e92bf3474907f9b(worker));
    $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerSelectionRangeProvider(languageId, new $baa361a40ad5f5aa$export$b7d0513de581c681(worker));
    $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerRenameProvider(languageId, new $baa361a40ad5f5aa$export$33797a450c0c0a77(worker));
    if (languageId === "html") {
        $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerDocumentFormattingEditProvider(languageId, new $baa361a40ad5f5aa$export$837213a13dc5abe7(worker));
        $baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(languageId, new $baa361a40ad5f5aa$export$1ccdec097412b75c(worker));
    }
}
function $baa361a40ad5f5aa$export$6df00d141df42469(defaults) {
    const disposables = [];
    const providers = [];
    const client = new $baa361a40ad5f5aa$export$bcff6015853c67ce(defaults);
    disposables.push(client);
    const worker = (...uris)=>{
        return client.getLanguageServiceWorker(...uris);
    };
    function registerProviders() {
        const { languageId: languageId, modeConfiguration: modeConfiguration } = defaults;
        $baa361a40ad5f5aa$var$disposeAll(providers);
        if (modeConfiguration.completionItems) providers.push($baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(languageId, new $baa361a40ad5f5aa$var$HTMLCompletionAdapter(worker)));
        if (modeConfiguration.hovers) providers.push($baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerHoverProvider(languageId, new $baa361a40ad5f5aa$export$90ae7381ad9e28ec(worker)));
        if (modeConfiguration.documentHighlights) providers.push($baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerDocumentHighlightProvider(languageId, new $baa361a40ad5f5aa$export$43e7617f9df67ed1(worker)));
        if (modeConfiguration.links) providers.push($baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerLinkProvider(languageId, new $baa361a40ad5f5aa$export$31b66168ba80848b(worker)));
        if (modeConfiguration.documentSymbols) providers.push($baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(languageId, new $baa361a40ad5f5aa$export$6e92bf3474907f9b(worker)));
        if (modeConfiguration.rename) providers.push($baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerRenameProvider(languageId, new $baa361a40ad5f5aa$export$33797a450c0c0a77(worker)));
        if (modeConfiguration.foldingRanges) providers.push($baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerFoldingRangeProvider(languageId, new $baa361a40ad5f5aa$export$dbee4e9a4c977c75(worker)));
        if (modeConfiguration.selectionRanges) providers.push($baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerSelectionRangeProvider(languageId, new $baa361a40ad5f5aa$export$b7d0513de581c681(worker)));
        if (modeConfiguration.documentFormattingEdits) providers.push($baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerDocumentFormattingEditProvider(languageId, new $baa361a40ad5f5aa$export$837213a13dc5abe7(worker)));
        if (modeConfiguration.documentRangeFormattingEdits) providers.push($baa361a40ad5f5aa$var$monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(languageId, new $baa361a40ad5f5aa$export$1ccdec097412b75c(worker)));
    }
    registerProviders();
    disposables.push($baa361a40ad5f5aa$var$asDisposable(providers));
    return $baa361a40ad5f5aa$var$asDisposable(disposables);
}
function $baa361a40ad5f5aa$var$asDisposable(disposables) {
    return {
        dispose: ()=>$baa361a40ad5f5aa$var$disposeAll(disposables)
    };
}
function $baa361a40ad5f5aa$var$disposeAll(disposables) {
    while(disposables.length)disposables.pop().dispose();
}

});


