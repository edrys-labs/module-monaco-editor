
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("lCk9N", function(module, exports) {

$parcel$export(module.exports, "conf", () => $fbccc85a67022515$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $fbccc85a67022515$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/pascal/pascal.ts
var $fbccc85a67022515$export$c83be1687c028fc9 = {
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: "//",
        blockComment: [
            "{",
            "}"
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
        ],
        [
            "<",
            ">"
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
            open: "<",
            close: ">"
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
            open: "<",
            close: ">"
        },
        {
            open: "'",
            close: "'"
        }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*\\{\\$REGION(\\s\\'.*\\')?\\}"),
            end: new RegExp("^\\s*\\{\\$ENDREGION\\}")
        }
    }
};
var $fbccc85a67022515$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".pascal",
    ignoreCase: true,
    brackets: [
        {
            open: "{",
            close: "}",
            token: "delimiter.curly"
        },
        {
            open: "[",
            close: "]",
            token: "delimiter.square"
        },
        {
            open: "(",
            close: ")",
            token: "delimiter.parenthesis"
        },
        {
            open: "<",
            close: ">",
            token: "delimiter.angle"
        }
    ],
    keywords: [
        "absolute",
        "abstract",
        "all",
        "and_then",
        "array",
        "as",
        "asm",
        "attribute",
        "begin",
        "bindable",
        "case",
        "class",
        "const",
        "contains",
        "default",
        "div",
        "else",
        "end",
        "except",
        "exports",
        "external",
        "far",
        "file",
        "finalization",
        "finally",
        "forward",
        "generic",
        "goto",
        "if",
        "implements",
        "import",
        "in",
        "index",
        "inherited",
        "initialization",
        "interrupt",
        "is",
        "label",
        "library",
        "mod",
        "module",
        "name",
        "near",
        "not",
        "object",
        "of",
        "on",
        "only",
        "operator",
        "or_else",
        "otherwise",
        "override",
        "package",
        "packed",
        "pow",
        "private",
        "program",
        "protected",
        "public",
        "published",
        "interface",
        "implementation",
        "qualified",
        "read",
        "record",
        "resident",
        "requires",
        "resourcestring",
        "restricted",
        "segment",
        "set",
        "shl",
        "shr",
        "specialize",
        "stored",
        "strict",
        "then",
        "threadvar",
        "to",
        "try",
        "type",
        "unit",
        "uses",
        "var",
        "view",
        "virtual",
        "dynamic",
        "overload",
        "reintroduce",
        "with",
        "write",
        "xor",
        "true",
        "false",
        "procedure",
        "function",
        "constructor",
        "destructor",
        "property",
        "break",
        "continue",
        "exit",
        "abort",
        "while",
        "do",
        "for",
        "raise",
        "repeat",
        "until"
    ],
    typeKeywords: [
        "boolean",
        "double",
        "byte",
        "integer",
        "shortint",
        "char",
        "longint",
        "float",
        "string"
    ],
    operators: [
        "=",
        ">",
        "<",
        "<=",
        ">=",
        "<>",
        ":",
        ":=",
        "and",
        "or",
        "+",
        "-",
        "*",
        "/",
        "@",
        "&",
        "^",
        "%"
    ],
    // we include these common regular expressions
    symbols: /[=><:@\^&|+\-*\/\^%]+/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /[a-zA-Z_][\w]*/,
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
                /\d*\.\d+([eE][\-+]?\d+)?/,
                "number.float"
            ],
            [
                /\$[0-9a-fA-F]{1,16}/,
                "number.hex"
            ],
            [
                /\d+/,
                "number"
            ],
            // delimiter: after number because of .\d floats
            [
                /[;,.]/,
                "delimiter"
            ],
            // strings
            [
                /'([^'\\]|\\.)*$/,
                "string.invalid"
            ],
            // non-teminated string
            [
                /'/,
                "string",
                "@string"
            ],
            // characters
            [
                /'[^\\']'/,
                "string"
            ],
            [
                /'/,
                "string.invalid"
            ],
            [
                /\#\d+/,
                "string"
            ]
        ],
        comment: [
            [
                /[^\*\}]+/,
                "comment"
            ],
            //[/\(\*/,    'comment', '@push' ],    // nested comment  not allowed :-(
            [
                /\}/,
                "comment",
                "@pop"
            ],
            [
                /[\{]/,
                "comment"
            ]
        ],
        string: [
            [
                /[^\\']+/,
                "string"
            ],
            [
                /\\./,
                "string.escape.invalid"
            ],
            [
                /'/,
                {
                    token: "string.quote",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                "white"
            ],
            [
                /\{/,
                "comment",
                "@comment"
            ],
            [
                /\/\/.*$/,
                "comment"
            ]
        ]
    }
};

});


//# sourceMappingURL=pascal.c5157b34.js.map
