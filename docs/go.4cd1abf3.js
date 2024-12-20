
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("4Jkxd", function(module, exports) {

$parcel$export(module.exports, "conf", () => $371b4b2df9e26238$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $371b4b2df9e26238$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/go/go.ts
var $371b4b2df9e26238$export$c83be1687c028fc9 = {
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
            open: "`",
            close: "`",
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
        },
        {
            open: "'",
            close: "'",
            notIn: [
                "string",
                "comment"
            ]
        }
    ],
    surroundingPairs: [
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
            open: "`",
            close: "`"
        },
        {
            open: '"',
            close: '"'
        },
        {
            open: "'",
            close: "'"
        }
    ]
};
var $371b4b2df9e26238$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".go",
    keywords: [
        "break",
        "case",
        "chan",
        "const",
        "continue",
        "default",
        "defer",
        "else",
        "fallthrough",
        "for",
        "func",
        "go",
        "goto",
        "if",
        "import",
        "interface",
        "map",
        "package",
        "range",
        "return",
        "select",
        "struct",
        "switch",
        "type",
        "var",
        "bool",
        "true",
        "false",
        "uint8",
        "uint16",
        "uint32",
        "uint64",
        "int8",
        "int16",
        "int32",
        "int64",
        "float32",
        "float64",
        "complex64",
        "complex128",
        "byte",
        "rune",
        "uint",
        "int",
        "uintptr",
        "string",
        "nil"
    ],
    operators: [
        "+",
        "-",
        "*",
        "/",
        "%",
        "&",
        "|",
        "^",
        "<<",
        ">>",
        "&^",
        "+=",
        "-=",
        "*=",
        "/=",
        "%=",
        "&=",
        "|=",
        "^=",
        "<<=",
        ">>=",
        "&^=",
        "&&",
        "||",
        "<-",
        "++",
        "--",
        "==",
        "<",
        ">",
        "=",
        "!",
        "!=",
        "<=",
        ">=",
        ":=",
        "...",
        "(",
        ")",
        "",
        "]",
        "{",
        "}",
        ",",
        ";",
        ".",
        ":"
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        "@keywords": {
                            token: "keyword.$0"
                        },
                        "@default": "identifier"
                    }
                }
            ],
            // whitespace
            {
                include: "@whitespace"
            },
            // [[ attributes ]].
            [
                /\[\[.*\]\]/,
                "annotation"
            ],
            // Preprocessor directive
            [
                /^\s*#\w+/,
                "keyword"
            ],
            // delimiters and operators
            [
                /[{}()\[\]]/,
                "@brackets"
            ],
            [
                /[<>](?!@symbols)/,
                "@brackets"
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
                /\d*\d+[eE]([\-+]?\d+)?/,
                "number.float"
            ],
            [
                /\d*\.\d+([eE][\-+]?\d+)?/,
                "number.float"
            ],
            [
                /0[xX][0-9a-fA-F']*[0-9a-fA-F]/,
                "number.hex"
            ],
            [
                /0[0-7']*[0-7]/,
                "number.octal"
            ],
            [
                /0[bB][0-1']*[0-1]/,
                "number.binary"
            ],
            [
                /\d[\d']*/,
                "number"
            ],
            [
                /\d/,
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
                /"/,
                "string",
                "@string"
            ],
            [
                /`/,
                "string",
                "@rawstring"
            ],
            // characters
            [
                /'[^\\']'/,
                "string"
            ],
            [
                /(')(@escapes)(')/,
                [
                    "string",
                    "string.escape",
                    "string"
                ]
            ],
            [
                /'/,
                "string.invalid"
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
                "@doccomment"
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
            // [/\/\*/, 'comment', '@push' ],    // nested comment not allowed :-(
            // [/\/\*/,    'comment.invalid' ],    // this breaks block comments in the shape of /* //*/
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
        //Identical copy of comment above, except for the addition of .doc
        doccomment: [
            [
                /[^\/*]+/,
                "comment.doc"
            ],
            // [/\/\*/, 'comment.doc', '@push' ],    // nested comment not allowed :-(
            [
                /\/\*/,
                "comment.doc.invalid"
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
        string: [
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
        rawstring: [
            [
                /[^\`]/,
                "string"
            ],
            [
                /`/,
                "string",
                "@pop"
            ]
        ]
    }
};

});


//# sourceMappingURL=go.4cd1abf3.js.map
