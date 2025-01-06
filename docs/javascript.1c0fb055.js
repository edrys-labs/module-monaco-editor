
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("8hBOq", function(module, exports) {

$parcel$export(module.exports, "conf", () => $607d3e0190c7b635$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $607d3e0190c7b635$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/javascript/javascript.ts

var $2WyPs = parcelRequire("2WyPs");
var $607d3e0190c7b635$export$c83be1687c028fc9 = (0, $2WyPs.conf);
var $607d3e0190c7b635$export$789c912f57fe164c = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: "invalid",
    tokenPostfix: ".js",
    keywords: [
        "break",
        "case",
        "catch",
        "class",
        "continue",
        "const",
        "constructor",
        "debugger",
        "default",
        "delete",
        "do",
        "else",
        "export",
        "extends",
        "false",
        "finally",
        "for",
        "from",
        "function",
        "get",
        "if",
        "import",
        "in",
        "instanceof",
        "let",
        "new",
        "null",
        "return",
        "set",
        "static",
        "super",
        "switch",
        "symbol",
        "this",
        "throw",
        "true",
        "try",
        "typeof",
        "undefined",
        "var",
        "void",
        "while",
        "with",
        "yield",
        "async",
        "await",
        "of"
    ],
    typeKeywords: [],
    operators: (0, $2WyPs.language).operators,
    symbols: (0, $2WyPs.language).symbols,
    escapes: (0, $2WyPs.language).escapes,
    digits: (0, $2WyPs.language).digits,
    octaldigits: (0, $2WyPs.language).octaldigits,
    binarydigits: (0, $2WyPs.language).binarydigits,
    hexdigits: (0, $2WyPs.language).hexdigits,
    regexpctl: (0, $2WyPs.language).regexpctl,
    regexpesc: (0, $2WyPs.language).regexpesc,
    tokenizer: (0, $2WyPs.language).tokenizer
};

});


