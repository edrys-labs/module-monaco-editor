
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("2NpkF", function(module, exports) {

$parcel$export(module.exports, "conf", () => $2093ced44bdd8a22$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $2093ced44bdd8a22$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/lua/lua.ts
var $2093ced44bdd8a22$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "--",
        blockComment: [
            "--[[",
            "]]"
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
            open: '"',
            close: '"'
        },
        {
            open: "'",
            close: "'"
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
            open: '"',
            close: '"'
        },
        {
            open: "'",
            close: "'"
        }
    ]
};
var $2093ced44bdd8a22$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".lua",
    keywords: [
        "and",
        "break",
        "do",
        "else",
        "elseif",
        "end",
        "false",
        "for",
        "function",
        "goto",
        "if",
        "in",
        "local",
        "nil",
        "not",
        "or",
        "repeat",
        "return",
        "then",
        "true",
        "until",
        "while"
    ],
    brackets: [
        {
            token: "delimiter.bracket",
            open: "{",
            close: "}"
        },
        {
            token: "delimiter.array",
            open: "[",
            close: "]"
        },
        {
            token: "delimiter.parenthesis",
            open: "(",
            close: ")"
        }
    ],
    operators: [
        "+",
        "-",
        "*",
        "/",
        "%",
        "^",
        "#",
        "==",
        "~=",
        "<=",
        ">=",
        "<",
        ">",
        "=",
        ";",
        ":",
        ",",
        ".",
        "..",
        "..."
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
            // keys
            [
                /(,)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/,
                [
                    "delimiter",
                    "",
                    "key",
                    "",
                    "delimiter"
                ]
            ],
            [
                /({)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/,
                [
                    "@brackets",
                    "",
                    "key",
                    "",
                    "delimiter"
                ]
            ],
            // delimiters and operators
            [
                /[{}()\[\]]/,
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
                /\d*\.\d+([eE][\-+]?\d+)?/,
                "number.float"
            ],
            [
                /0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,
                "number.hex"
            ],
            [
                /\d+?/,
                "number"
            ],
            // delimiter: after number because of .\d floats
            [
                /[;,.]/,
                "delimiter"
            ],
            // strings: recover on non-terminated strings
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
                '@string."'
            ],
            [
                /'/,
                "string",
                "@string.'"
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /--\[([=]*)\[/,
                "comment",
                "@comment.$1"
            ],
            [
                /--.*$/,
                "comment"
            ]
        ],
        comment: [
            [
                /[^\]]+/,
                "comment"
            ],
            [
                /\]([=]*)\]/,
                {
                    cases: {
                        "$1==$S2": {
                            token: "comment",
                            next: "@pop"
                        },
                        "@default": "comment"
                    }
                }
            ],
            [
                /./,
                "comment"
            ]
        ],
        string: [
            [
                /[^\\"']+/,
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
                /["']/,
                {
                    cases: {
                        "$#==$S2": {
                            token: "string",
                            next: "@pop"
                        },
                        "@default": "string"
                    }
                }
            ]
        ]
    }
};

});


//# sourceMappingURL=lua.2fbe1da4.js.map
