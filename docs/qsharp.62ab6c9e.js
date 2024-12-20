
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("5BBoy", function(module, exports) {

$parcel$export(module.exports, "conf", () => $414d6a51b017021c$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $414d6a51b017021c$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/qsharp/qsharp.ts
var $414d6a51b017021c$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "//"
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
            open: '"',
            close: '"'
        }
    ]
};
var $414d6a51b017021c$export$789c912f57fe164c = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    keywords: [
        "namespace",
        "open",
        "import",
        "export",
        "as",
        "operation",
        "function",
        "body",
        "adjoint",
        "newtype",
        "struct",
        "controlled",
        "if",
        "elif",
        "else",
        "repeat",
        "until",
        "fixup",
        "for",
        "in",
        "while",
        "return",
        "fail",
        "within",
        "apply",
        "Adjoint",
        "Controlled",
        "Adj",
        "Ctl",
        "is",
        "self",
        "auto",
        "distribute",
        "invert",
        "intrinsic",
        "let",
        "set",
        "w/",
        "new",
        "not",
        "and",
        "or",
        "use",
        "borrow",
        "using",
        "borrowing",
        "mutable",
        "internal"
    ],
    typeKeywords: [
        "Unit",
        "Int",
        "BigInt",
        "Double",
        "Bool",
        "String",
        "Qubit",
        "Result",
        "Pauli",
        "Range"
    ],
    invalidKeywords: [
        "abstract",
        "base",
        "bool",
        "break",
        "byte",
        "case",
        "catch",
        "char",
        "checked",
        "class",
        "const",
        "continue",
        "decimal",
        "default",
        "delegate",
        "do",
        "double",
        "enum",
        "event",
        "explicit",
        "extern",
        "finally",
        "fixed",
        "float",
        "foreach",
        "goto",
        "implicit",
        "int",
        "interface",
        "lock",
        "long",
        "null",
        "object",
        "operator",
        "out",
        "override",
        "params",
        "private",
        "protected",
        "public",
        "readonly",
        "ref",
        "sbyte",
        "sealed",
        "short",
        "sizeof",
        "stackalloc",
        "static",
        "string",
        "switch",
        "this",
        "throw",
        "try",
        "typeof",
        "unit",
        "ulong",
        "unchecked",
        "unsafe",
        "ushort",
        "virtual",
        "void",
        "volatile"
    ],
    constants: [
        "true",
        "false",
        "PauliI",
        "PauliX",
        "PauliY",
        "PauliZ",
        "One",
        "Zero"
    ],
    builtin: [
        "X",
        "Y",
        "Z",
        "H",
        "HY",
        "S",
        "T",
        "SWAP",
        "CNOT",
        "CCNOT",
        "MultiX",
        "R",
        "RFrac",
        "Rx",
        "Ry",
        "Rz",
        "R1",
        "R1Frac",
        "Exp",
        "ExpFrac",
        "Measure",
        "M",
        "MultiM",
        "Message",
        "Length",
        "Assert",
        "AssertProb",
        "AssertEqual"
    ],
    operators: [
        "and=",
        "<-",
        "->",
        "*",
        "*=",
        "@",
        "!",
        "^",
        "^=",
        ":",
        "::",
        ".",
        "..",
        "==",
        "...",
        "=",
        "=>",
        ">",
        ">=",
        "<",
        "<=",
        "-",
        "-=",
        "!=",
        "or=",
        "%",
        "%=",
        "|",
        "+",
        "+=",
        "?",
        "/",
        "/=",
        "&&&",
        "&&&=",
        "^^^",
        "^^^=",
        ">>>",
        ">>>=",
        "<<<",
        "<<<=",
        "|||",
        "|||=",
        "~~~",
        "_",
        "w/",
        "w/="
    ],
    namespaceFollows: [
        "namespace",
        "open"
    ],
    importsFollows: [
        "import"
    ],
    symbols: /[=><!~?:&|+\-*\/\^%@._]+/,
    escapes: /\\[\s\S]/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /[a-zA-Z_$][\w$]*/,
                {
                    cases: {
                        "@namespaceFollows": {
                            token: "keyword.$0",
                            next: "@namespace"
                        },
                        "@importsFollows": {
                            token: "keyword.$0",
                            next: "@imports"
                        },
                        "@typeKeywords": "type",
                        "@keywords": "keyword",
                        "@constants": "constant",
                        "@builtin": "keyword",
                        "@invalidKeywords": "invalid",
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
                /@symbols/,
                {
                    cases: {
                        "@operators": "operator",
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
                /\d+/,
                "number"
            ],
            // delimiter: after number because of .\d floats
            [
                /[;,.]/,
                "delimiter"
            ],
            // strings
            //[/"([^"\\]|\\.)*$/, 'string.invalid' ],  // non-terminated string
            [
                /"/,
                {
                    token: "string.quote",
                    bracket: "@open",
                    next: "@string"
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
                /"/,
                {
                    token: "string.quote",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        namespace: [
            {
                include: "@whitespace"
            },
            [
                /[A-Za-z]\w*/,
                "namespace"
            ],
            [
                /[\.]/,
                "delimiter"
            ],
            [
                "",
                "",
                "@pop"
            ]
        ],
        imports: [
            {
                include: "@whitespace"
            },
            [
                /[A-Za-z]\w*(?=\.)/,
                "namespace"
            ],
            [
                /[A-Za-z]\w*/,
                "identifier"
            ],
            [
                /\*/,
                "wildcard"
            ],
            [
                /[\.,]/,
                "delimiter"
            ],
            [
                "",
                "",
                "@pop"
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                "white"
            ],
            [
                /(\/\/).*/,
                "comment"
            ]
        ]
    }
};

});


//# sourceMappingURL=qsharp.62ab6c9e.js.map
