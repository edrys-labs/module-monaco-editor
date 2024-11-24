
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("6C3pB", function(module, exports) {

$parcel$export(module.exports, "conf", () => $4d08f03a730a5fe1$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $4d08f03a730a5fe1$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/objective-c/objective-c.ts
var $4d08f03a730a5fe1$export$c83be1687c028fc9 = {
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
var $4d08f03a730a5fe1$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".objective-c",
    keywords: [
        "#import",
        "#include",
        "#define",
        "#else",
        "#endif",
        "#if",
        "#ifdef",
        "#ifndef",
        "#ident",
        "#undef",
        "@class",
        "@defs",
        "@dynamic",
        "@encode",
        "@end",
        "@implementation",
        "@interface",
        "@package",
        "@private",
        "@protected",
        "@property",
        "@protocol",
        "@public",
        "@selector",
        "@synthesize",
        "__declspec",
        "assign",
        "auto",
        "BOOL",
        "break",
        "bycopy",
        "byref",
        "case",
        "char",
        "Class",
        "const",
        "copy",
        "continue",
        "default",
        "do",
        "double",
        "else",
        "enum",
        "extern",
        "FALSE",
        "false",
        "float",
        "for",
        "goto",
        "if",
        "in",
        "int",
        "id",
        "inout",
        "IMP",
        "long",
        "nil",
        "nonatomic",
        "NULL",
        "oneway",
        "out",
        "private",
        "public",
        "protected",
        "readwrite",
        "readonly",
        "register",
        "return",
        "SEL",
        "self",
        "short",
        "signed",
        "sizeof",
        "static",
        "struct",
        "super",
        "switch",
        "typedef",
        "TRUE",
        "true",
        "union",
        "unsigned",
        "volatile",
        "void",
        "while"
    ],
    decpart: /\d(_?\d)*/,
    decimal: /0|@decpart/,
    tokenizer: {
        root: [
            {
                include: "@comments"
            },
            {
                include: "@whitespace"
            },
            {
                include: "@numbers"
            },
            {
                include: "@strings"
            },
            [
                /[,:;]/,
                "delimiter"
            ],
            [
                /[{}\[\]()<>]/,
                "@brackets"
            ],
            [
                /[a-zA-Z@#]\w*/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@default": "identifier"
                    }
                }
            ],
            [
                /[<>=\\+\\-\\*\\/\\^\\|\\~,]|and\\b|or\\b|not\\b]/,
                "operator"
            ]
        ],
        whitespace: [
            [
                /\s+/,
                "white"
            ]
        ],
        comments: [
            [
                "\\/\\*",
                "comment",
                "@comment"
            ],
            [
                "\\/\\/+.*",
                "comment"
            ]
        ],
        comment: [
            [
                "\\*\\/",
                "comment",
                "@pop"
            ],
            [
                ".",
                "comment"
            ]
        ],
        numbers: [
            [
                /0[xX][0-9a-fA-F]*(_?[0-9a-fA-F])*/,
                "number.hex"
            ],
            [
                /@decimal((\.@decpart)?([eE][\-+]?@decpart)?)[fF]*/,
                {
                    cases: {
                        "(\\d)*": "number",
                        $0: "number.float"
                    }
                }
            ]
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [
                /'$/,
                "string.escape",
                "@popall"
            ],
            [
                /'/,
                "string.escape",
                "@stringBody"
            ],
            [
                /"$/,
                "string.escape",
                "@popall"
            ],
            [
                /"/,
                "string.escape",
                "@dblStringBody"
            ]
        ],
        stringBody: [
            [
                /[^\\']+$/,
                "string",
                "@popall"
            ],
            [
                /[^\\']+/,
                "string"
            ],
            [
                /\\./,
                "string"
            ],
            [
                /'/,
                "string.escape",
                "@popall"
            ],
            [
                /\\$/,
                "string"
            ]
        ],
        dblStringBody: [
            [
                /[^\\"]+$/,
                "string",
                "@popall"
            ],
            [
                /[^\\"]+/,
                "string"
            ],
            [
                /\\./,
                "string"
            ],
            [
                /"/,
                "string.escape",
                "@popall"
            ],
            [
                /\\$/,
                "string"
            ]
        ]
    }
};

});


//# sourceMappingURL=objective-c.82daaeb2.js.map
