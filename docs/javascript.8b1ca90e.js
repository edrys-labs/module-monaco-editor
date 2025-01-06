
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("9naGx", function(module, exports) {

$parcel$export(module.exports, "conf", () => $6d2e8ce1f5d6ac28$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $6d2e8ce1f5d6ac28$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/javascript/javascript.ts

var $g5v8v = parcelRequire("g5v8v");
var $6d2e8ce1f5d6ac28$export$c83be1687c028fc9 = (0, $g5v8v.conf);
var $6d2e8ce1f5d6ac28$export$789c912f57fe164c = {
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
    operators: (0, $g5v8v.language).operators,
    symbols: (0, $g5v8v.language).symbols,
    escapes: (0, $g5v8v.language).escapes,
    digits: (0, $g5v8v.language).digits,
    octaldigits: (0, $g5v8v.language).octaldigits,
    binarydigits: (0, $g5v8v.language).binarydigits,
    hexdigits: (0, $g5v8v.language).hexdigits,
    regexpctl: (0, $g5v8v.language).regexpctl,
    regexpesc: (0, $g5v8v.language).regexpesc,
    tokenizer: (0, $g5v8v.language).tokenizer
};

});


//# sourceMappingURL=javascript.8b1ca90e.js.map
