
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("7JGix", function(module, exports) {

$parcel$export(module.exports, "conf", () => $5a1d8be0dc253b84$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $5a1d8be0dc253b84$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/lexon/lexon.ts
var $5a1d8be0dc253b84$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "COMMENT"
    },
    brackets: [
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
            open: ":",
            close: "."
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
        },
        {
            open: ":",
            close: "."
        }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*(::\\s*|COMMENT\\s+)#region"),
            end: new RegExp("^\\s*(::\\s*|COMMENT\\s+)#endregion")
        }
    }
};
var $5a1d8be0dc253b84$export$789c912f57fe164c = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    // defaultToken: 'invalid',
    tokenPostfix: ".lexon",
    ignoreCase: true,
    keywords: [
        "lexon",
        "lex",
        "clause",
        "terms",
        "contracts",
        "may",
        "pay",
        "pays",
        "appoints",
        "into",
        "to"
    ],
    typeKeywords: [
        "amount",
        "person",
        "key",
        "time",
        "date",
        "asset",
        "text"
    ],
    operators: [
        "less",
        "greater",
        "equal",
        "le",
        "gt",
        "or",
        "and",
        "add",
        "added",
        "subtract",
        "subtracted",
        "multiply",
        "multiplied",
        "times",
        "divide",
        "divided",
        "is",
        "be",
        "certified"
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // comment
            [
                /^(\s*)(comment:?(?:\s.*|))$/,
                [
                    "",
                    "comment"
                ]
            ],
            // special identifier cases
            [
                /"/,
                {
                    token: "identifier.quote",
                    bracket: "@open",
                    next: "@quoted_identifier"
                }
            ],
            [
                "LEX$",
                {
                    token: "keyword",
                    bracket: "@open",
                    next: "@identifier_until_period"
                }
            ],
            [
                "LEXON",
                {
                    token: "keyword",
                    bracket: "@open",
                    next: "@semver"
                }
            ],
            [
                ":",
                {
                    token: "delimiter",
                    bracket: "@open",
                    next: "@identifier_until_period"
                }
            ],
            // identifiers and keywords
            [
                /[a-z_$][\w$]*/,
                {
                    cases: {
                        "@operators": "operator",
                        "@typeKeywords": "keyword.type",
                        "@keywords": "keyword",
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
                "delimiter"
            ],
            // numbers
            [
                /\d*\.\d*\.\d*/,
                "number.semver"
            ],
            [
                /\d*\.\d+([eE][\-+]?\d+)?/,
                "number.float"
            ],
            [
                /0[xX][0-9a-fA-F]+/,
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
            ]
        ],
        quoted_identifier: [
            [
                /[^\\"]+/,
                "identifier"
            ],
            [
                /"/,
                {
                    token: "identifier.quote",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        space_identifier_until_period: [
            [
                ":",
                "delimiter"
            ],
            [
                " ",
                {
                    token: "white",
                    next: "@identifier_rest"
                }
            ]
        ],
        identifier_until_period: [
            {
                include: "@whitespace"
            },
            [
                ":",
                {
                    token: "delimiter",
                    next: "@identifier_rest"
                }
            ],
            [
                /[^\\.]+/,
                "identifier"
            ],
            [
                /\./,
                {
                    token: "delimiter",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        identifier_rest: [
            [
                /[^\\.]+/,
                "identifier"
            ],
            [
                /\./,
                {
                    token: "delimiter",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        semver: [
            {
                include: "@whitespace"
            },
            [
                ":",
                "delimiter"
            ],
            [
                /\d*\.\d*\.\d*/,
                {
                    token: "number.semver",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                "white"
            ]
        ]
    }
};

});

