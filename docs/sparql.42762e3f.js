
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("kLspA", function(module, exports) {

$parcel$export(module.exports, "conf", () => $f1de3c6940b0a838$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $f1de3c6940b0a838$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/sparql/sparql.ts
var $f1de3c6940b0a838$export$c83be1687c028fc9 = {
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
            open: "'",
            close: "'",
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
        }
    ]
};
var $f1de3c6940b0a838$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".rq",
    brackets: [
        {
            token: "delimiter.curly",
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
        },
        {
            token: "delimiter.angle",
            open: "<",
            close: ">"
        }
    ],
    keywords: [
        "add",
        "as",
        "asc",
        "ask",
        "base",
        "by",
        "clear",
        "construct",
        "copy",
        "create",
        "data",
        "delete",
        "desc",
        "describe",
        "distinct",
        "drop",
        "false",
        "filter",
        "from",
        "graph",
        "group",
        "having",
        "in",
        "insert",
        "limit",
        "load",
        "minus",
        "move",
        "named",
        "not",
        "offset",
        "optional",
        "order",
        "prefix",
        "reduced",
        "select",
        "service",
        "silent",
        "to",
        "true",
        "undef",
        "union",
        "using",
        "values",
        "where",
        "with"
    ],
    builtinFunctions: [
        "a",
        "abs",
        "avg",
        "bind",
        "bnode",
        "bound",
        "ceil",
        "coalesce",
        "concat",
        "contains",
        "count",
        "datatype",
        "day",
        "encode_for_uri",
        "exists",
        "floor",
        "group_concat",
        "hours",
        "if",
        "iri",
        "isblank",
        "isiri",
        "isliteral",
        "isnumeric",
        "isuri",
        "lang",
        "langmatches",
        "lcase",
        "max",
        "md5",
        "min",
        "minutes",
        "month",
        "now",
        "rand",
        "regex",
        "replace",
        "round",
        "sameterm",
        "sample",
        "seconds",
        "sha1",
        "sha256",
        "sha384",
        "sha512",
        "str",
        "strafter",
        "strbefore",
        "strdt",
        "strends",
        "strlang",
        "strlen",
        "strstarts",
        "struuid",
        "substr",
        "sum",
        "timezone",
        "tz",
        "ucase",
        "uri",
        "uuid",
        "year"
    ],
    // describe tokens
    ignoreCase: true,
    tokenizer: {
        root: [
            // resource indicators
            [
                /<[^\s\u00a0>]*>?/,
                "tag"
            ],
            // strings
            {
                include: "@strings"
            },
            // line comment
            [
                /#.*/,
                "comment"
            ],
            // special chars with special meaning
            [
                /[{}()\[\]]/,
                "@brackets"
            ],
            [
                /[;,.]/,
                "delimiter"
            ],
            // (prefixed) name
            [
                /[_\w\d]+:(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])*/,
                "tag"
            ],
            [
                /:(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/,
                "tag"
            ],
            // identifiers, builtinFunctions and keywords
            [
                /[$?]?[_\w\d]+/,
                {
                    cases: {
                        "@keywords": {
                            token: "keyword"
                        },
                        "@builtinFunctions": {
                            token: "predefined.sql"
                        },
                        "@default": "identifier"
                    }
                }
            ],
            // operators
            [
                /\^\^/,
                "operator.sql"
            ],
            [
                /\^[*+\-<>=&|^\/!?]*/,
                "operator.sql"
            ],
            [
                /[*+\-<>=&|\/!?]/,
                "operator.sql"
            ],
            // symbol
            [
                /@[a-z\d\-]*/,
                "metatag.html"
            ],
            // whitespaces
            [
                /\s+/,
                "white"
            ]
        ],
        strings: [
            [
                /'([^'\\]|\\.)*$/,
                "string.invalid"
            ],
            // non-terminated single-quoted string
            [
                /'$/,
                "string.sql",
                "@pop"
            ],
            [
                /'/,
                "string.sql",
                "@stringBody"
            ],
            [
                /"([^"\\]|\\.)*$/,
                "string.invalid"
            ],
            // non-terminated single-quoted string
            [
                /"$/,
                "string.sql",
                "@pop"
            ],
            [
                /"/,
                "string.sql",
                "@dblStringBody"
            ]
        ],
        // single-quoted strings
        stringBody: [
            [
                /[^\\']+/,
                "string.sql"
            ],
            [
                /\\./,
                "string.escape"
            ],
            [
                /'/,
                "string.sql",
                "@pop"
            ]
        ],
        // double-quoted strings
        dblStringBody: [
            [
                /[^\\"]+/,
                "string.sql"
            ],
            [
                /\\./,
                "string.escape"
            ],
            [
                /"/,
                "string.sql",
                "@pop"
            ]
        ]
    }
};

});


//# sourceMappingURL=sparql.42762e3f.js.map
