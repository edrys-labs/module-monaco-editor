
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("aPL3j", function(module, exports) {

$parcel$export(module.exports, "conf", () => $7e332a707624fa8f$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $7e332a707624fa8f$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/bicep/bicep.ts
var $7e332a707624fa8f$var$bounded = (text)=>`\\b${text}\\b`;
var $7e332a707624fa8f$var$identifierStart = "[_a-zA-Z]";
var $7e332a707624fa8f$var$identifierContinue = "[_a-zA-Z0-9]";
var $7e332a707624fa8f$var$identifier = $7e332a707624fa8f$var$bounded(`${$7e332a707624fa8f$var$identifierStart}${$7e332a707624fa8f$var$identifierContinue}*`);
var $7e332a707624fa8f$var$keywords = [
    "targetScope",
    "resource",
    "module",
    "param",
    "var",
    "output",
    "for",
    "in",
    "if",
    "existing"
];
var $7e332a707624fa8f$var$namedLiterals = [
    "true",
    "false",
    "null"
];
var $7e332a707624fa8f$var$nonCommentWs = `[ \\t\\r\\n]`;
var $7e332a707624fa8f$var$numericLiteral = `[0-9]+`;
var $7e332a707624fa8f$export$c83be1687c028fc9 = {
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
            open: "'",
            close: "'"
        },
        {
            open: "'''",
            close: "'''"
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
            open: "'",
            close: "'",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "'''",
            close: "'''",
            notIn: [
                "string",
                "comment"
            ]
        }
    ],
    autoCloseBefore: ":.,=}])' \n	",
    indentationRules: {
        increaseIndentPattern: new RegExp("^((?!\\/\\/).)*(\\{[^}\"'`]*|\\([^)\"'`]*|\\[[^\\]\"'`]*)$"),
        decreaseIndentPattern: new RegExp("^((?!.*?\\/\\*).*\\*/)?\\s*[\\}\\]].*$")
    }
};
var $7e332a707624fa8f$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".bicep",
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
    symbols: /[=><!~?:&|+\-*/^%]+/,
    keywords: $7e332a707624fa8f$var$keywords,
    namedLiterals: $7e332a707624fa8f$var$namedLiterals,
    escapes: `\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\|'|\\\${)`,
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
                regex: `(|'|'')[^']`,
                action: {
                    token: "string"
                }
            },
            {
                regex: `'''`,
                action: {
                    token: "string.quote",
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
                regex: `[^\\\\'$]+`,
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
                regex: `'`,
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
                include: "expression"
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
                regex: $7e332a707624fa8f$var$nonCommentWs
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
                regex: `'''`,
                action: {
                    token: "string.quote",
                    next: "@stringVerbatim"
                }
            },
            {
                regex: `'`,
                action: {
                    token: "string.quote",
                    next: "@stringLiteral"
                }
            },
            {
                regex: $7e332a707624fa8f$var$numericLiteral,
                action: {
                    token: "number"
                }
            },
            {
                regex: $7e332a707624fa8f$var$identifier,
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
            }
        ]
    }
};

});


