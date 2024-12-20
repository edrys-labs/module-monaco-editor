
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("17Pnp", function(module, exports) {

$parcel$export(module.exports, "conf", () => $0d1e4c3092dcfd42$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $0d1e4c3092dcfd42$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/bat/bat.ts
var $0d1e4c3092dcfd42$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "REM"
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
        }
    ],
    surroundingPairs: [
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
    folding: {
        markers: {
            start: new RegExp("^\\s*(::\\s*|REM\\s+)#region"),
            end: new RegExp("^\\s*(::\\s*|REM\\s+)#endregion")
        }
    }
};
var $0d1e4c3092dcfd42$export$789c912f57fe164c = {
    defaultToken: "",
    ignoreCase: true,
    tokenPostfix: ".bat",
    brackets: [
        {
            token: "delimiter.bracket",
            open: "{",
            close: "}"
        },
        {
            token: "delimiter.parenthesis",
            open: "(",
            close: ")"
        },
        {
            token: "delimiter.square",
            open: "[",
            close: "]"
        }
    ],
    keywords: /call|defined|echo|errorlevel|exist|for|goto|if|pause|set|shift|start|title|not|pushd|popd/,
    // we include these common regular expressions
    symbols: /[=><!~?&|+\-*\/\^;\.,]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [
                /^(\s*)(rem(?:\s.*|))$/,
                [
                    "",
                    "comment"
                ]
            ],
            [
                /(\@?)(@keywords)(?!\w)/,
                [
                    {
                        token: "keyword"
                    },
                    {
                        token: "keyword.$2"
                    }
                ]
            ],
            // whitespace
            [
                /[ \t\r\n]+/,
                ""
            ],
            // blocks
            [
                /setlocal(?!\w)/,
                "keyword.tag-setlocal"
            ],
            [
                /endlocal(?!\w)/,
                "keyword.tag-setlocal"
            ],
            // words
            [
                /[a-zA-Z_]\w*/,
                ""
            ],
            // labels
            [
                /:\w*/,
                "metatag"
            ],
            // variables
            [
                /%[^%]+%/,
                "variable"
            ],
            [
                /%%[\w]+(?!\w)/,
                "variable"
            ],
            // punctuations
            [
                /[{}()\[\]]/,
                "@brackets"
            ],
            [
                /@symbols/,
                "delimiter"
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
                /\d+/,
                "number"
            ],
            // punctuation: after number because of .\d floats
            [
                /[;,.]/,
                "delimiter"
            ],
            // strings:
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
        string: [
            [
                /[^\\"'%]+/,
                {
                    cases: {
                        "@eos": {
                            token: "string",
                            next: "@popall"
                        },
                        "@default": "string"
                    }
                }
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
                /%[\w ]+%/,
                "variable"
            ],
            [
                /%%[\w]+(?!\w)/,
                "variable"
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
            ],
            [
                /$/,
                "string",
                "@popall"
            ]
        ]
    }
};

});


//# sourceMappingURL=bat.5dec50ef.js.map
