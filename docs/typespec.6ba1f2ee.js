
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("l4ryy", function(module, exports) {

$parcel$export(module.exports, "conf", () => $f56f58ce3509cca6$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $f56f58ce3509cca6$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/typespec/typespec.ts
var $f56f58ce3509cca6$var$bounded = (text)=>`\\b${text}\\b`;
var $f56f58ce3509cca6$var$notBefore = (regex)=>`(?!${regex})`;
var $f56f58ce3509cca6$var$identifierStart = "[_a-zA-Z]";
var $f56f58ce3509cca6$var$identifierContinue = "[_a-zA-Z0-9]";
var $f56f58ce3509cca6$var$identifier = $f56f58ce3509cca6$var$bounded(`${$f56f58ce3509cca6$var$identifierStart}${$f56f58ce3509cca6$var$identifierContinue}*`);
var $f56f58ce3509cca6$var$directive = $f56f58ce3509cca6$var$bounded(`[_a-zA-Z-0-9]+`);
var $f56f58ce3509cca6$var$keywords = [
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
var $f56f58ce3509cca6$var$namedLiterals = [
    "true",
    "false",
    "null",
    "unknown",
    "never"
];
var $f56f58ce3509cca6$var$nonCommentWs = `[ \\t\\r\\n]`;
var $f56f58ce3509cca6$var$numericLiteral = `[0-9]+`;
var $f56f58ce3509cca6$export$c83be1687c028fc9 = {
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
var $f56f58ce3509cca6$export$789c912f57fe164c = {
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
    keywords: $f56f58ce3509cca6$var$keywords,
    namedLiterals: $f56f58ce3509cca6$var$namedLiterals,
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
                regex: `"""${$f56f58ce3509cca6$var$notBefore(`"`)}`,
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
                regex: $f56f58ce3509cca6$var$nonCommentWs
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
                regex: `"${$f56f58ce3509cca6$var$notBefore(`""`)}`,
                action: {
                    token: "string",
                    next: "@stringLiteral"
                }
            },
            {
                regex: $f56f58ce3509cca6$var$numericLiteral,
                action: {
                    token: "number"
                }
            },
            {
                regex: $f56f58ce3509cca6$var$identifier,
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
                regex: `@${$f56f58ce3509cca6$var$identifier}`,
                action: {
                    token: "tag"
                }
            },
            {
                regex: `#${$f56f58ce3509cca6$var$directive}`,
                action: {
                    token: "directive"
                }
            }
        ]
    }
};

});


//# sourceMappingURL=typespec.6ba1f2ee.js.map
