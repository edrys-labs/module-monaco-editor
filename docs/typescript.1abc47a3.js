
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("2WyPs", function(module, exports) {

$parcel$export(module.exports, "conf", () => $224c03dd44008471$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $224c03dd44008471$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ 
var $6QSpz = parcelRequire("6QSpz");
var $224c03dd44008471$var$__defProp = Object.defineProperty;
var $224c03dd44008471$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $224c03dd44008471$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $224c03dd44008471$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $224c03dd44008471$var$__copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of $224c03dd44008471$var$__getOwnPropNames(from))if (!$224c03dd44008471$var$__hasOwnProp.call(to, key) && key !== except) $224c03dd44008471$var$__defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = $224c03dd44008471$var$__getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var $224c03dd44008471$var$__reExport = (target, mod, secondTarget)=>($224c03dd44008471$var$__copyProps(target, mod, "default"), secondTarget && $224c03dd44008471$var$__copyProps(secondTarget, mod, "default"));
// src/fillers/monaco-editor-core.ts
var $224c03dd44008471$var$monaco_editor_core_exports = {};
$224c03dd44008471$var$__reExport($224c03dd44008471$var$monaco_editor_core_exports, $6QSpz);
// src/basic-languages/typescript/typescript.ts
var $224c03dd44008471$export$c83be1687c028fc9 = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
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
        ],
        [
            "(",
            ")"
        ]
    ],
    onEnterRules: [
        {
            // e.g. /** | */
            beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
            afterText: /^\s*\*\/$/,
            action: {
                indentAction: $224c03dd44008471$var$monaco_editor_core_exports.languages.IndentAction.IndentOutdent,
                appendText: " * "
            }
        },
        {
            // e.g. /** ...|
            beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
            action: {
                indentAction: $224c03dd44008471$var$monaco_editor_core_exports.languages.IndentAction.None,
                appendText: " * "
            }
        },
        {
            // e.g.  * ...|
            beforeText: /^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,
            action: {
                indentAction: $224c03dd44008471$var$monaco_editor_core_exports.languages.IndentAction.None,
                appendText: "* "
            }
        },
        {
            // e.g.  */|
            beforeText: /^(\t|(\ \ ))*\ \*\/\s*$/,
            action: {
                indentAction: $224c03dd44008471$var$monaco_editor_core_exports.languages.IndentAction.None,
                removeText: 1
            }
        }
    ],
    autoClosingPairs: [
        {
            open: "{",
            close: "}"
        },
        {
            open: "[",
            close: "]"
        },
        {
            open: "(",
            close: ")"
        },
        {
            open: '"',
            close: '"',
            notIn: [
                "string"
            ]
        },
        {
            open: "'",
            close: "'",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "`",
            close: "`",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "/**",
            close: " */",
            notIn: [
                "string"
            ]
        }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*//\\s*#?region\\b"),
            end: new RegExp("^\\s*//\\s*#?endregion\\b")
        }
    }
};
var $224c03dd44008471$export$789c912f57fe164c = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: "invalid",
    tokenPostfix: ".ts",
    keywords: [
        // Should match the keys of textToKeywordObj in
        // https://github.com/microsoft/TypeScript/blob/master/src/compiler/scanner.ts
        "abstract",
        "any",
        "as",
        "asserts",
        "bigint",
        "boolean",
        "break",
        "case",
        "catch",
        "class",
        "continue",
        "const",
        "constructor",
        "debugger",
        "declare",
        "default",
        "delete",
        "do",
        "else",
        "enum",
        "export",
        "extends",
        "false",
        "finally",
        "for",
        "from",
        "function",
        "get",
        "if",
        "implements",
        "import",
        "in",
        "infer",
        "instanceof",
        "interface",
        "is",
        "keyof",
        "let",
        "module",
        "namespace",
        "never",
        "new",
        "null",
        "number",
        "object",
        "out",
        "package",
        "private",
        "protected",
        "public",
        "override",
        "readonly",
        "require",
        "global",
        "return",
        "satisfies",
        "set",
        "static",
        "string",
        "super",
        "switch",
        "symbol",
        "this",
        "throw",
        "true",
        "try",
        "type",
        "typeof",
        "undefined",
        "unique",
        "unknown",
        "var",
        "void",
        "while",
        "with",
        "yield",
        "async",
        "await",
        "of"
    ],
    operators: [
        "<=",
        ">=",
        "==",
        "!=",
        "===",
        "!==",
        "=>",
        "+",
        "-",
        "**",
        "*",
        "/",
        "%",
        "++",
        "--",
        "<<",
        "</",
        ">>",
        ">>>",
        "&",
        "|",
        "^",
        "!",
        "~",
        "&&",
        "||",
        "??",
        "?",
        ":",
        "=",
        "+=",
        "-=",
        "*=",
        "**=",
        "/=",
        "%=",
        "<<=",
        ">>=",
        ">>>=",
        "&=",
        "|=",
        "^=",
        "@"
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
    regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [
                /[{}]/,
                "delimiter.bracket"
            ],
            {
                include: "common"
            }
        ],
        common: [
            // identifiers and keywords
            [
                /#?[a-z_$][\w$]*/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@default": "identifier"
                    }
                }
            ],
            [
                /[A-Z][\w\$]*/,
                "type.identifier"
            ],
            // to show class names nicely
            // [/[A-Z][\w\$]*/, 'identifier'],
            // whitespace
            {
                include: "@whitespace"
            },
            // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)
            [
                /\/(?=([^\\\/]|\\.)+\/([dgimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,
                {
                    token: "regexp",
                    bracket: "@open",
                    next: "@regexp"
                }
            ],
            // delimiters and operators
            [
                /[()\[\]]/,
                "@brackets"
            ],
            [
                /[<>](?!@symbols)/,
                "@brackets"
            ],
            [
                /!(?=([^=]|$))/,
                "delimiter"
            ],
            [
                /@symbols/,
                {
                    cases: {
                        "@operators": "delimiter",
                        "@default": ""
                    }
                }
            ],
            // numbers
            [
                /(@digits)[eE]([\-+]?(@digits))?/,
                "number.float"
            ],
            [
                /(@digits)\.(@digits)([eE][\-+]?(@digits))?/,
                "number.float"
            ],
            [
                /0[xX](@hexdigits)n?/,
                "number.hex"
            ],
            [
                /0[oO]?(@octaldigits)n?/,
                "number.octal"
            ],
            [
                /0[bB](@binarydigits)n?/,
                "number.binary"
            ],
            [
                /(@digits)n?/,
                "number"
            ],
            // delimiter: after number because of .\d floats
            [
                /[;,.]/,
                "delimiter"
            ],
            // strings
            [
                /"([^"\\]|\\.)*$/,
                "string.invalid"
            ],
            // non-teminated string
            [
                /'([^'\\]|\\.)*$/,
                "string.invalid"
            ],
            // non-teminated string
            [
                /"/,
                "string",
                "@string_double"
            ],
            [
                /'/,
                "string",
                "@string_single"
            ],
            [
                /`/,
                "string",
                "@string_backtick"
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /\/\*\*(?!\/)/,
                "comment.doc",
                "@jsdoc"
            ],
            [
                /\/\*/,
                "comment",
                "@comment"
            ],
            [
                /\/\/.*$/,
                "comment"
            ]
        ],
        comment: [
            [
                /[^\/*]+/,
                "comment"
            ],
            [
                /\*\//,
                "comment",
                "@pop"
            ],
            [
                /[\/*]/,
                "comment"
            ]
        ],
        jsdoc: [
            [
                /[^\/*]+/,
                "comment.doc"
            ],
            [
                /\*\//,
                "comment.doc",
                "@pop"
            ],
            [
                /[\/*]/,
                "comment.doc"
            ]
        ],
        // We match regular expression quite precisely
        regexp: [
            [
                /(\{)(\d+(?:,\d*)?)(\})/,
                [
                    "regexp.escape.control",
                    "regexp.escape.control",
                    "regexp.escape.control"
                ]
            ],
            [
                /(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,
                [
                    "regexp.escape.control",
                    {
                        token: "regexp.escape.control",
                        next: "@regexrange"
                    }
                ]
            ],
            [
                /(\()(\?:|\?=|\?!)/,
                [
                    "regexp.escape.control",
                    "regexp.escape.control"
                ]
            ],
            [
                /[()]/,
                "regexp.escape.control"
            ],
            [
                /@regexpctl/,
                "regexp.escape.control"
            ],
            [
                /[^\\\/]/,
                "regexp"
            ],
            [
                /@regexpesc/,
                "regexp.escape"
            ],
            [
                /\\\./,
                "regexp.invalid"
            ],
            [
                /(\/)([dgimsuy]*)/,
                [
                    {
                        token: "regexp",
                        bracket: "@close",
                        next: "@pop"
                    },
                    "keyword.other"
                ]
            ]
        ],
        regexrange: [
            [
                /-/,
                "regexp.escape.control"
            ],
            [
                /\^/,
                "regexp.invalid"
            ],
            [
                /@regexpesc/,
                "regexp.escape"
            ],
            [
                /[^\]]/,
                "regexp"
            ],
            [
                /\]/,
                {
                    token: "regexp.escape.control",
                    next: "@pop",
                    bracket: "@close"
                }
            ]
        ],
        string_double: [
            [
                /[^\\"]+/,
                "string"
            ],
            [
                /@escapes/,
                "string.escape"
            ],
            [
                /\\./,
                "string.escape.invalid"
            ],
            [
                /"/,
                "string",
                "@pop"
            ]
        ],
        string_single: [
            [
                /[^\\']+/,
                "string"
            ],
            [
                /@escapes/,
                "string.escape"
            ],
            [
                /\\./,
                "string.escape.invalid"
            ],
            [
                /'/,
                "string",
                "@pop"
            ]
        ],
        string_backtick: [
            [
                /\$\{/,
                {
                    token: "delimiter.bracket",
                    next: "@bracketCounting"
                }
            ],
            [
                /[^\\`$]+/,
                "string"
            ],
            [
                /@escapes/,
                "string.escape"
            ],
            [
                /\\./,
                "string.escape.invalid"
            ],
            [
                /`/,
                "string",
                "@pop"
            ]
        ],
        bracketCounting: [
            [
                /\{/,
                "delimiter.bracket",
                "@bracketCounting"
            ],
            [
                /\}/,
                "delimiter.bracket",
                "@pop"
            ],
            {
                include: "common"
            }
        ]
    }
};

});


