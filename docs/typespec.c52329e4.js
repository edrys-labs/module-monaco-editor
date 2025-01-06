
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("hfvgC", function(module, exports) {

$parcel$export(module.exports, "conf", () => $c8ec175bb2ab350e$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $c8ec175bb2ab350e$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/typespec/typespec.ts
var $c8ec175bb2ab350e$var$bounded = (text)=>`\\b${text}\\b`;
var $c8ec175bb2ab350e$var$notBefore = (regex)=>`(?!${regex})`;
var $c8ec175bb2ab350e$var$identifierStart = "[_a-zA-Z]";
var $c8ec175bb2ab350e$var$identifierContinue = "[_a-zA-Z0-9]";
var $c8ec175bb2ab350e$var$identifier = $c8ec175bb2ab350e$var$bounded(`${$c8ec175bb2ab350e$var$identifierStart}${$c8ec175bb2ab350e$var$identifierContinue}*`);
var $c8ec175bb2ab350e$var$directive = $c8ec175bb2ab350e$var$bounded(`[_a-zA-Z-0-9]+`);
var $c8ec175bb2ab350e$var$keywords = [
    "import",
    "model",
    "scalar",
    "namespace",
    "op",
    "interface",
    "union",
    "using",
    "is",
    "extends",
    "enum",
    "alias",
    "return",
    "void",
    "if",
    "else",
    "projection",
    "dec",
    "extern",
    "fn"
];
var $c8ec175bb2ab350e$var$namedLiterals = [
    "true",
    "false",
    "null",
    "unknown",
    "never"
];
var $c8ec175bb2ab350e$var$nonCommentWs = `[ \\t\\r\\n]`;
var $c8ec175bb2ab350e$var$numericLiteral = `[0-9]+`;
var $c8ec175bb2ab350e$export$c83be1687c028fc9 = {
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
            open: '"',
            close: '"'
        },
        {
            open: "/**",
            close: " */",
            notIn: [
                "string"
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
            open: '"',
            close: '"'
        }
    ],
    indentationRules: {
        decreaseIndentPattern: new RegExp("^((?!.*?/\\*).*\\*/)?\\s*[\\}\\]].*$"),
        increaseIndentPattern: new RegExp("^((?!//).)*(\\{([^}\"'`/]*|(\\t|[ ])*//.*)|\\([^)\"'`/]*|\\[[^\\]\"'`/]*)$"),
        // e.g.  * ...| or */| or *-----*/|
        unIndentedLinePattern: new RegExp("^(\\t|[ ])*[ ]\\*[^/]*\\*/\\s*$|^(\\t|[ ])*[ ]\\*/\\s*$|^(\\t|[ ])*[ ]\\*([ ]([^\\*]|\\*(?!/))*)?$")
    }
};
var $c8ec175bb2ab350e$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".tsp",
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
        }
    ],
    symbols: /[=:;<>]+/,
    keywords: $c8ec175bb2ab350e$var$keywords,
    namedLiterals: $c8ec175bb2ab350e$var$namedLiterals,
    escapes: `\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\|"|\\\${)`,
    tokenizer: {
        root: [
            {
                include: "@expression"
            },
            {
                include: "@whitespace"
            }
        ],
        stringVerbatim: [
            {
                regex: `(|"|"")[^"]`,
                action: {
                    token: "string"
                }
            },
            {
                regex: `"""${$c8ec175bb2ab350e$var$notBefore(`"`)}`,
                action: {
                    token: "string",
                    next: "@pop"
                }
            }
        ],
        stringLiteral: [
            {
                regex: `\\\${`,
                action: {
                    token: "delimiter.bracket",
                    next: "@bracketCounting"
                }
            },
            {
                regex: `[^\\\\"$]+`,
                action: {
                    token: "string"
                }
            },
            {
                regex: "@escapes",
                action: {
                    token: "string.escape"
                }
            },
            {
                regex: `\\\\.`,
                action: {
                    token: "string.escape.invalid"
                }
            },
            {
                regex: `"`,
                action: {
                    token: "string",
                    next: "@pop"
                }
            }
        ],
        bracketCounting: [
            {
                regex: `{`,
                action: {
                    token: "delimiter.bracket",
                    next: "@bracketCounting"
                }
            },
            {
                regex: `}`,
                action: {
                    token: "delimiter.bracket",
                    next: "@pop"
                }
            },
            {
                include: "@expression"
            }
        ],
        comment: [
            {
                regex: `[^\\*]+`,
                action: {
                    token: "comment"
                }
            },
            {
                regex: `\\*\\/`,
                action: {
                    token: "comment",
                    next: "@pop"
                }
            },
            {
                regex: `[\\/*]`,
                action: {
                    token: "comment"
                }
            }
        ],
        whitespace: [
            {
                regex: $c8ec175bb2ab350e$var$nonCommentWs
            },
            {
                regex: `\\/\\*`,
                action: {
                    token: "comment",
                    next: "@comment"
                }
            },
            {
                regex: `\\/\\/.*$`,
                action: {
                    token: "comment"
                }
            }
        ],
        expression: [
            {
                regex: `"""`,
                action: {
                    token: "string",
                    next: "@stringVerbatim"
                }
            },
            {
                regex: `"${$c8ec175bb2ab350e$var$notBefore(`""`)}`,
                action: {
                    token: "string",
                    next: "@stringLiteral"
                }
            },
            {
                regex: $c8ec175bb2ab350e$var$numericLiteral,
                action: {
                    token: "number"
                }
            },
            {
                regex: $c8ec175bb2ab350e$var$identifier,
                action: {
                    cases: {
                        "@keywords": {
                            token: "keyword"
                        },
                        "@namedLiterals": {
                            token: "keyword"
                        },
                        "@default": {
                            token: "identifier"
                        }
                    }
                }
            },
            {
                regex: `@${$c8ec175bb2ab350e$var$identifier}`,
                action: {
                    token: "tag"
                }
            },
            {
                regex: `#${$c8ec175bb2ab350e$var$directive}`,
                action: {
                    token: "directive"
                }
            }
        ]
    }
};

});


