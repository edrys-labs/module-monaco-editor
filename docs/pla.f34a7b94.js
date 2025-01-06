
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("4HdZ6", function(module, exports) {

$parcel$export(module.exports, "conf", () => $36b606975e779f37$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $36b606975e779f37$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/pla/pla.ts
var $36b606975e779f37$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "#"
    },
    brackets: [
        [
            "[",
            "]"
        ],
        [
            "<",
            ">"
        ],
        [
            "(",
            ")"
        ]
    ],
    autoClosingPairs: [
        {
            open: "[",
            close: "]"
        },
        {
            open: "<",
            close: ">"
        },
        {
            open: "(",
            close: ")"
        }
    ],
    surroundingPairs: [
        {
            open: "[",
            close: "]"
        },
        {
            open: "<",
            close: ">"
        },
        {
            open: "(",
            close: ")"
        }
    ]
};
var $36b606975e779f37$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".pla",
    brackets: [
        {
            open: "[",
            close: "]",
            token: "delimiter.square"
        },
        {
            open: "<",
            close: ">",
            token: "delimiter.angle"
        },
        {
            open: "(",
            close: ")",
            token: "delimiter.parenthesis"
        }
    ],
    keywords: [
        ".i",
        ".o",
        ".mv",
        ".ilb",
        ".ob",
        ".label",
        ".type",
        ".phase",
        ".pair",
        ".symbolic",
        ".symbolic-output",
        ".kiss",
        ".p",
        ".e",
        ".end"
    ],
    // regular expressions
    comment: /#.*$/,
    identifier: /[a-zA-Z]+[a-zA-Z0-9_\-]*/,
    plaContent: /[01\-~\|]+/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // comments and whitespace
            {
                include: "@whitespace"
            },
            [
                /@comment/,
                "comment"
            ],
            // keyword
            [
                /\.([a-zA-Z_\-]+)/,
                {
                    cases: {
                        "@eos": {
                            token: "keyword.$1"
                        },
                        "@keywords": {
                            cases: {
                                ".type": {
                                    token: "keyword.$1",
                                    next: "@type"
                                },
                                "@default": {
                                    token: "keyword.$1",
                                    next: "@keywordArg"
                                }
                            }
                        },
                        "@default": {
                            token: "keyword.$1"
                        }
                    }
                }
            ],
            // identifiers
            [
                /@identifier/,
                "identifier"
            ],
            // PLA row
            [
                /@plaContent/,
                "string"
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                ""
            ]
        ],
        type: [
            {
                include: "@whitespace"
            },
            [
                /\w+/,
                {
                    token: "type",
                    next: "@pop"
                }
            ]
        ],
        keywordArg: [
            // whitespace
            [
                /[ \t\r\n]+/,
                {
                    cases: {
                        "@eos": {
                            token: "",
                            next: "@pop"
                        },
                        "@default": ""
                    }
                }
            ],
            // comments
            [
                /@comment/,
                "comment",
                "@pop"
            ],
            // brackets
            [
                /[<>()\[\]]/,
                {
                    cases: {
                        "@eos": {
                            token: "@brackets",
                            next: "@pop"
                        },
                        "@default": "@brackets"
                    }
                }
            ],
            // numbers
            [
                /\-?\d+/,
                {
                    cases: {
                        "@eos": {
                            token: "number",
                            next: "@pop"
                        },
                        "@default": "number"
                    }
                }
            ],
            // identifiers
            [
                /@identifier/,
                {
                    cases: {
                        "@eos": {
                            token: "identifier",
                            next: "@pop"
                        },
                        "@default": "identifier"
                    }
                }
            ],
            // delimiter
            [
                /[;=]/,
                {
                    cases: {
                        "@eos": {
                            token: "delimiter",
                            next: "@pop"
                        },
                        "@default": "delimiter"
                    }
                }
            ]
        ]
    }
};

});


