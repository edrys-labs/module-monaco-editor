
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("j6kGx", function(module, exports) {

$parcel$export(module.exports, "conf", () => $de7e9f7ad6f6201e$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $de7e9f7ad6f6201e$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/scss/scss.ts
var $de7e9f7ad6f6201e$export$c83be1687c028fc9 = {
    wordPattern: /(#?-?\d*\.\d\w*%?)|([@$#!.:]?[\w-?]+%?)|[@#!.]/g,
    comments: {
        blockComment: [
            "/*",
            "*/"
        ],
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
            close: "}",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "[",
            close: "]",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "(",
            close: ")",
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
        },
        {
            open: "'",
            close: "'",
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
        },
        {
            open: "'",
            close: "'"
        }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/"),
            end: new RegExp("^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/")
        }
    }
};
var $de7e9f7ad6f6201e$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".scss",
    ws: "[ 	\n\r\f]*",
    // whitespaces (referenced in several rules)
    identifier: "-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",
    brackets: [
        {
            open: "{",
            close: "}",
            token: "delimiter.curly"
        },
        {
            open: "[",
            close: "]",
            token: "delimiter.bracket"
        },
        {
            open: "(",
            close: ")",
            token: "delimiter.parenthesis"
        },
        {
            open: "<",
            close: ">",
            token: "delimiter.angle"
        }
    ],
    tokenizer: {
        root: [
            {
                include: "@selector"
            }
        ],
        selector: [
            {
                include: "@comments"
            },
            {
                include: "@import"
            },
            {
                include: "@variabledeclaration"
            },
            {
                include: "@warndebug"
            },
            // sass: log statements
            [
                "[@](include)",
                {
                    token: "keyword",
                    next: "@includedeclaration"
                }
            ],
            // sass: include statement
            [
                "[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)",
                {
                    token: "keyword",
                    next: "@keyframedeclaration"
                }
            ],
            [
                "[@](page|content|font-face|-moz-document)",
                {
                    token: "keyword"
                }
            ],
            // sass: placeholder for includes
            [
                "[@](charset|namespace)",
                {
                    token: "keyword",
                    next: "@declarationbody"
                }
            ],
            [
                "[@](function)",
                {
                    token: "keyword",
                    next: "@functiondeclaration"
                }
            ],
            [
                "[@](mixin)",
                {
                    token: "keyword",
                    next: "@mixindeclaration"
                }
            ],
            [
                "url(\\-prefix)?\\(",
                {
                    token: "meta",
                    next: "@urldeclaration"
                }
            ],
            {
                include: "@controlstatement"
            },
            // sass control statements
            {
                include: "@selectorname"
            },
            [
                "[&\\*]",
                "tag"
            ],
            // selector symbols
            [
                "[>\\+,]",
                "delimiter"
            ],
            // selector operators
            [
                "\\[",
                {
                    token: "delimiter.bracket",
                    next: "@selectorattribute"
                }
            ],
            [
                "{",
                {
                    token: "delimiter.curly",
                    next: "@selectorbody"
                }
            ]
        ],
        selectorbody: [
            [
                "[*_]?@identifier@ws:(?=(\\s|\\d|[^{;}]*[;}]))",
                "attribute.name",
                "@rulevalue"
            ],
            // rule definition: to distinguish from a nested selector check for whitespace, number or a semicolon
            {
                include: "@selector"
            },
            // sass: nested selectors
            [
                "[@](extend)",
                {
                    token: "keyword",
                    next: "@extendbody"
                }
            ],
            // sass: extend other selectors
            [
                "[@](return)",
                {
                    token: "keyword",
                    next: "@declarationbody"
                }
            ],
            [
                "}",
                {
                    token: "delimiter.curly",
                    next: "@pop"
                }
            ]
        ],
        selectorname: [
            [
                "#{",
                {
                    token: "meta",
                    next: "@variableinterpolation"
                }
            ],
            // sass: interpolation
            [
                "(\\.|#(?=[^{])|%|(@identifier)|:)+",
                "tag"
            ]
        ],
        selectorattribute: [
            {
                include: "@term"
            },
            [
                "]",
                {
                    token: "delimiter.bracket",
                    next: "@pop"
                }
            ]
        ],
        term: [
            {
                include: "@comments"
            },
            [
                "url(\\-prefix)?\\(",
                {
                    token: "meta",
                    next: "@urldeclaration"
                }
            ],
            {
                include: "@functioninvocation"
            },
            {
                include: "@numbers"
            },
            {
                include: "@strings"
            },
            {
                include: "@variablereference"
            },
            [
                "(and\\b|or\\b|not\\b)",
                "operator"
            ],
            {
                include: "@name"
            },
            [
                "([<>=\\+\\-\\*\\/\\^\\|\\~,])",
                "operator"
            ],
            [
                ",",
                "delimiter"
            ],
            [
                "!default",
                "literal"
            ],
            [
                "\\(",
                {
                    token: "delimiter.parenthesis",
                    next: "@parenthizedterm"
                }
            ]
        ],
        rulevalue: [
            {
                include: "@term"
            },
            [
                "!important",
                "literal"
            ],
            [
                ";",
                "delimiter",
                "@pop"
            ],
            [
                "{",
                {
                    token: "delimiter.curly",
                    switchTo: "@nestedproperty"
                }
            ],
            // sass: nested properties
            [
                "(?=})",
                {
                    token: "",
                    next: "@pop"
                }
            ]
        ],
        nestedproperty: [
            [
                "[*_]?@identifier@ws:",
                "attribute.name",
                "@rulevalue"
            ],
            {
                include: "@comments"
            },
            [
                "}",
                {
                    token: "delimiter.curly",
                    next: "@pop"
                }
            ]
        ],
        warndebug: [
            [
                "[@](warn|debug)",
                {
                    token: "keyword",
                    next: "@declarationbody"
                }
            ]
        ],
        import: [
            [
                "[@](import)",
                {
                    token: "keyword",
                    next: "@declarationbody"
                }
            ]
        ],
        variabledeclaration: [
            // sass variables
            [
                "\\$@identifier@ws:",
                "variable.decl",
                "@declarationbody"
            ]
        ],
        urldeclaration: [
            {
                include: "@strings"
            },
            [
                "[^)\r\n]+",
                "string"
            ],
            [
                "\\)",
                {
                    token: "meta",
                    next: "@pop"
                }
            ]
        ],
        parenthizedterm: [
            {
                include: "@term"
            },
            [
                "\\)",
                {
                    token: "delimiter.parenthesis",
                    next: "@pop"
                }
            ]
        ],
        declarationbody: [
            {
                include: "@term"
            },
            [
                ";",
                "delimiter",
                "@pop"
            ],
            [
                "(?=})",
                {
                    token: "",
                    next: "@pop"
                }
            ]
        ],
        extendbody: [
            {
                include: "@selectorname"
            },
            [
                "!optional",
                "literal"
            ],
            [
                ";",
                "delimiter",
                "@pop"
            ],
            [
                "(?=})",
                {
                    token: "",
                    next: "@pop"
                }
            ]
        ],
        variablereference: [
            // sass variable reference
            [
                "\\$@identifier",
                "variable.ref"
            ],
            [
                "\\.\\.\\.",
                "operator"
            ],
            // var args in reference
            [
                "#{",
                {
                    token: "meta",
                    next: "@variableinterpolation"
                }
            ]
        ],
        variableinterpolation: [
            {
                include: "@variablereference"
            },
            [
                "}",
                {
                    token: "meta",
                    next: "@pop"
                }
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
        name: [
            [
                "@identifier",
                "attribute.value"
            ]
        ],
        numbers: [
            [
                "(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?",
                {
                    token: "number",
                    next: "@units"
                }
            ],
            [
                "#[0-9a-fA-F_]+(?!\\w)",
                "number.hex"
            ]
        ],
        units: [
            [
                "(em|ex|ch|rem|fr|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?",
                "number",
                "@pop"
            ]
        ],
        functiondeclaration: [
            [
                "@identifier@ws\\(",
                {
                    token: "meta",
                    next: "@parameterdeclaration"
                }
            ],
            [
                "{",
                {
                    token: "delimiter.curly",
                    switchTo: "@functionbody"
                }
            ]
        ],
        mixindeclaration: [
            // mixin with parameters
            [
                "@identifier@ws\\(",
                {
                    token: "meta",
                    next: "@parameterdeclaration"
                }
            ],
            // mixin without parameters
            [
                "@identifier",
                "meta"
            ],
            [
                "{",
                {
                    token: "delimiter.curly",
                    switchTo: "@selectorbody"
                }
            ]
        ],
        parameterdeclaration: [
            [
                "\\$@identifier@ws:",
                "variable.decl"
            ],
            [
                "\\.\\.\\.",
                "operator"
            ],
            // var args in declaration
            [
                ",",
                "delimiter"
            ],
            {
                include: "@term"
            },
            [
                "\\)",
                {
                    token: "meta",
                    next: "@pop"
                }
            ]
        ],
        includedeclaration: [
            {
                include: "@functioninvocation"
            },
            [
                "@identifier",
                "meta"
            ],
            [
                ";",
                "delimiter",
                "@pop"
            ],
            [
                "(?=})",
                {
                    token: "",
                    next: "@pop"
                }
            ],
            // missing semicolon
            [
                "{",
                {
                    token: "delimiter.curly",
                    switchTo: "@selectorbody"
                }
            ]
        ],
        keyframedeclaration: [
            [
                "@identifier",
                "meta"
            ],
            [
                "{",
                {
                    token: "delimiter.curly",
                    switchTo: "@keyframebody"
                }
            ]
        ],
        keyframebody: [
            {
                include: "@term"
            },
            [
                "{",
                {
                    token: "delimiter.curly",
                    next: "@selectorbody"
                }
            ],
            [
                "}",
                {
                    token: "delimiter.curly",
                    next: "@pop"
                }
            ]
        ],
        controlstatement: [
            [
                "[@](if|else|for|while|each|media)",
                {
                    token: "keyword.flow",
                    next: "@controlstatementdeclaration"
                }
            ]
        ],
        controlstatementdeclaration: [
            [
                "(in|from|through|if|to)\\b",
                {
                    token: "keyword.flow"
                }
            ],
            {
                include: "@term"
            },
            [
                "{",
                {
                    token: "delimiter.curly",
                    switchTo: "@selectorbody"
                }
            ]
        ],
        functionbody: [
            [
                "[@](return)",
                {
                    token: "keyword"
                }
            ],
            {
                include: "@variabledeclaration"
            },
            {
                include: "@term"
            },
            {
                include: "@controlstatement"
            },
            [
                ";",
                "delimiter"
            ],
            [
                "}",
                {
                    token: "delimiter.curly",
                    next: "@pop"
                }
            ]
        ],
        functioninvocation: [
            [
                "@identifier\\(",
                {
                    token: "meta",
                    next: "@functionarguments"
                }
            ]
        ],
        functionarguments: [
            [
                "\\$@identifier@ws:",
                "attribute.name"
            ],
            [
                "[,]",
                "delimiter"
            ],
            {
                include: "@term"
            },
            [
                "\\)",
                {
                    token: "meta",
                    next: "@pop"
                }
            ]
        ],
        strings: [
            [
                '~?"',
                {
                    token: "string.delimiter",
                    next: "@stringenddoublequote"
                }
            ],
            [
                "~?'",
                {
                    token: "string.delimiter",
                    next: "@stringendquote"
                }
            ]
        ],
        stringenddoublequote: [
            [
                "\\\\.",
                "string"
            ],
            [
                '"',
                {
                    token: "string.delimiter",
                    next: "@pop"
                }
            ],
            [
                ".",
                "string"
            ]
        ],
        stringendquote: [
            [
                "\\\\.",
                "string"
            ],
            [
                "'",
                {
                    token: "string.delimiter",
                    next: "@pop"
                }
            ],
            [
                ".",
                "string"
            ]
        ]
    }
};

});


//# sourceMappingURL=scss.e916d799.js.map
