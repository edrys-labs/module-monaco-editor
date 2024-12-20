
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("44ON1", function(module, exports) {

$parcel$export(module.exports, "conf", () => $2f7eeef0d7157e4a$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $2f7eeef0d7157e4a$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/graphql/graphql.ts
var $2f7eeef0d7157e4a$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "#"
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
            open: '"""',
            close: '"""',
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: '"',
            close: '"',
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
            open: '"""',
            close: '"""'
        },
        {
            open: '"',
            close: '"'
        }
    ],
    folding: {
        offSide: true
    }
};
var $2f7eeef0d7157e4a$export$789c912f57fe164c = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: "invalid",
    tokenPostfix: ".gql",
    keywords: [
        "null",
        "true",
        "false",
        "query",
        "mutation",
        "subscription",
        "extend",
        "schema",
        "directive",
        "scalar",
        "type",
        "interface",
        "union",
        "enum",
        "input",
        "implements",
        "fragment",
        "on"
    ],
    typeKeywords: [
        "Int",
        "Float",
        "String",
        "Boolean",
        "ID"
    ],
    directiveLocations: [
        "SCHEMA",
        "SCALAR",
        "OBJECT",
        "FIELD_DEFINITION",
        "ARGUMENT_DEFINITION",
        "INTERFACE",
        "UNION",
        "ENUM",
        "ENUM_VALUE",
        "INPUT_OBJECT",
        "INPUT_FIELD_DEFINITION",
        "QUERY",
        "MUTATION",
        "SUBSCRIPTION",
        "FIELD",
        "FRAGMENT_DEFINITION",
        "FRAGMENT_SPREAD",
        "INLINE_FRAGMENT",
        "VARIABLE_DEFINITION"
    ],
    operators: [
        "=",
        "!",
        "?",
        ":",
        "&",
        "|"
    ],
    // we include these common regular expressions
    symbols: /[=!?:&|]+/,
    // https://facebook.github.io/graphql/draft/#sec-String-Value
    escapes: /\\(?:["\\\/bfnrt]|u[0-9A-Fa-f]{4})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // fields and argument names
            [
                /[a-z_][\w$]*/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@default": "key.identifier"
                    }
                }
            ],
            // identify typed input variables
            [
                /[$][\w$]*/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@default": "argument.identifier"
                    }
                }
            ],
            // to show class names nicely
            [
                /[A-Z][\w\$]*/,
                {
                    cases: {
                        "@typeKeywords": "keyword",
                        "@default": "type.identifier"
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
                /@symbols/,
                {
                    cases: {
                        "@operators": "operator",
                        "@default": ""
                    }
                }
            ],
            // @ annotations.
            // As an example, we emit a debugging log message on these tokens.
            // Note: message are supressed during the first load -- change some lines to see them.
            [
                /@\s*[a-zA-Z_\$][\w\$]*/,
                {
                    token: "annotation",
                    log: "annotation token: $0"
                }
            ],
            // numbers
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
            ],
            [
                /"""/,
                {
                    token: "string",
                    next: "@mlstring",
                    nextEmbedded: "markdown"
                }
            ],
            // strings
            [
                /"([^"\\]|\\.)*$/,
                "string.invalid"
            ],
            // non-teminated string
            [
                /"/,
                {
                    token: "string.quote",
                    bracket: "@open",
                    next: "@string"
                }
            ]
        ],
        mlstring: [
            [
                /[^"]+/,
                "string"
            ],
            [
                '"""',
                {
                    token: "string",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
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
                ""
            ],
            [
                /#.*$/,
                "comment"
            ]
        ]
    }
};

});


//# sourceMappingURL=graphql.aab6b2ba.js.map
