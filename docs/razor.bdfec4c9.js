
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("74SDM", function(module, exports) {

$parcel$export(module.exports, "conf", () => $52734a97d13ac6c9$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $52734a97d13ac6c9$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ 
var $leKFq = parcelRequire("leKFq");
var $52734a97d13ac6c9$var$__defProp = Object.defineProperty;
var $52734a97d13ac6c9$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $52734a97d13ac6c9$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $52734a97d13ac6c9$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $52734a97d13ac6c9$var$__copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of $52734a97d13ac6c9$var$__getOwnPropNames(from))if (!$52734a97d13ac6c9$var$__hasOwnProp.call(to, key) && key !== except) $52734a97d13ac6c9$var$__defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = $52734a97d13ac6c9$var$__getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var $52734a97d13ac6c9$var$__reExport = (target, mod, secondTarget)=>($52734a97d13ac6c9$var$__copyProps(target, mod, "default"), secondTarget && $52734a97d13ac6c9$var$__copyProps(secondTarget, mod, "default"));
// src/fillers/monaco-editor-core.ts
var $52734a97d13ac6c9$var$monaco_editor_core_exports = {};
$52734a97d13ac6c9$var$__reExport($52734a97d13ac6c9$var$monaco_editor_core_exports, $leKFq);
// src/basic-languages/razor/razor.ts
var $52734a97d13ac6c9$var$EMPTY_ELEMENTS = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "menuitem",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
];
var $52734a97d13ac6c9$export$c83be1687c028fc9 = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    comments: {
        blockComment: [
            "<!--",
            "-->"
        ]
    },
    brackets: [
        [
            "<!--",
            "-->"
        ],
        [
            "<",
            ">"
        ],
        [
            "{",
            "}"
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
            open: '"',
            close: '"'
        },
        {
            open: "'",
            close: "'"
        },
        {
            open: "<",
            close: ">"
        }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp(`<(?!(?:${$52734a97d13ac6c9$var$EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            afterText: /^<\/(\w[\w\d]*)\s*>$/i,
            action: {
                indentAction: $52734a97d13ac6c9$var$monaco_editor_core_exports.languages.IndentAction.IndentOutdent
            }
        },
        {
            beforeText: new RegExp(`<(?!(?:${$52734a97d13ac6c9$var$EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            action: {
                indentAction: $52734a97d13ac6c9$var$monaco_editor_core_exports.languages.IndentAction.Indent
            }
        }
    ]
};
var $52734a97d13ac6c9$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: "",
    // ignoreCase: true,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [
                /@@@@/
            ],
            // text
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.root"
                }
            ],
            [
                /<!DOCTYPE/,
                "metatag.html",
                "@doctype"
            ],
            [
                /<!--/,
                "comment.html",
                "@comment"
            ],
            [
                /(<)([\w\-]+)(\/>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    "delimiter.html"
                ]
            ],
            [
                /(<)(script)/,
                [
                    "delimiter.html",
                    {
                        token: "tag.html",
                        next: "@script"
                    }
                ]
            ],
            [
                /(<)(style)/,
                [
                    "delimiter.html",
                    {
                        token: "tag.html",
                        next: "@style"
                    }
                ]
            ],
            [
                /(<)([:\w\-]+)/,
                [
                    "delimiter.html",
                    {
                        token: "tag.html",
                        next: "@otherTag"
                    }
                ]
            ],
            [
                /(<\/)([\w\-]+)/,
                [
                    "delimiter.html",
                    {
                        token: "tag.html",
                        next: "@otherTag"
                    }
                ]
            ],
            [
                /</,
                "delimiter.html"
            ],
            [
                /[ \t\r\n]+/
            ],
            // whitespace
            [
                /[^<@]+/
            ]
        ],
        doctype: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.comment"
                }
            ],
            [
                /[^>]+/,
                "metatag.content.html"
            ],
            [
                />/,
                "metatag.html",
                "@pop"
            ]
        ],
        comment: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.comment"
                }
            ],
            [
                /-->/,
                "comment.html",
                "@pop"
            ],
            [
                /[^-]+/,
                "comment.content.html"
            ],
            [
                /./,
                "comment.content.html"
            ]
        ],
        otherTag: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.otherTag"
                }
            ],
            [
                /\/?>/,
                "delimiter.html",
                "@pop"
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                /[ \t\r\n]+/
            ]
        ],
        // -- BEGIN <script> tags handling
        // After <script
        script: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.script"
                }
            ],
            [
                /type/,
                "attribute.name",
                "@scriptAfterType"
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@scriptEmbedded.text/javascript",
                    nextEmbedded: "text/javascript"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            // whitespace
            [
                /(<\/)(script\s*)(>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    {
                        token: "delimiter.html",
                        next: "@pop"
                    }
                ]
            ]
        ],
        // After <script ... type
        scriptAfterType: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.scriptAfterType"
                }
            ],
            [
                /=/,
                "delimiter",
                "@scriptAfterTypeEquals"
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@scriptEmbedded.text/javascript",
                    nextEmbedded: "text/javascript"
                }
            ],
            // cover invalid e.g. <script type>
            [
                /[ \t\r\n]+/
            ],
            // whitespace
            [
                /<\/script\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        // After <script ... type =
        scriptAfterTypeEquals: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.scriptAfterTypeEquals"
                }
            ],
            [
                /"([^"]*)"/,
                {
                    token: "attribute.value",
                    switchTo: "@scriptWithCustomType.$1"
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: "attribute.value",
                    switchTo: "@scriptWithCustomType.$1"
                }
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@scriptEmbedded.text/javascript",
                    nextEmbedded: "text/javascript"
                }
            ],
            // cover invalid e.g. <script type=>
            [
                /[ \t\r\n]+/
            ],
            // whitespace
            [
                /<\/script\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        // After <script ... type = $S2
        scriptWithCustomType: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.scriptWithCustomType.$S2"
                }
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@scriptEmbedded.$S2",
                    nextEmbedded: "$S2"
                }
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                /[ \t\r\n]+/
            ],
            // whitespace
            [
                /<\/script\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        scriptEmbedded: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInEmbeddedState.scriptEmbedded.$S2",
                    nextEmbedded: "@pop"
                }
            ],
            [
                /<\/script/,
                {
                    token: "@rematch",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ]
        ],
        // -- END <script> tags handling
        // -- BEGIN <style> tags handling
        // After <style
        style: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.style"
                }
            ],
            [
                /type/,
                "attribute.name",
                "@styleAfterType"
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@styleEmbedded.text/css",
                    nextEmbedded: "text/css"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            // whitespace
            [
                /(<\/)(style\s*)(>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    {
                        token: "delimiter.html",
                        next: "@pop"
                    }
                ]
            ]
        ],
        // After <style ... type
        styleAfterType: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.styleAfterType"
                }
            ],
            [
                /=/,
                "delimiter",
                "@styleAfterTypeEquals"
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@styleEmbedded.text/css",
                    nextEmbedded: "text/css"
                }
            ],
            // cover invalid e.g. <style type>
            [
                /[ \t\r\n]+/
            ],
            // whitespace
            [
                /<\/style\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        // After <style ... type =
        styleAfterTypeEquals: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.styleAfterTypeEquals"
                }
            ],
            [
                /"([^"]*)"/,
                {
                    token: "attribute.value",
                    switchTo: "@styleWithCustomType.$1"
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: "attribute.value",
                    switchTo: "@styleWithCustomType.$1"
                }
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@styleEmbedded.text/css",
                    nextEmbedded: "text/css"
                }
            ],
            // cover invalid e.g. <style type=>
            [
                /[ \t\r\n]+/
            ],
            // whitespace
            [
                /<\/style\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        // After <style ... type = $S2
        styleWithCustomType: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.styleWithCustomType.$S2"
                }
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@styleEmbedded.$S2",
                    nextEmbedded: "$S2"
                }
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                /[ \t\r\n]+/
            ],
            // whitespace
            [
                /<\/style\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        styleEmbedded: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInEmbeddedState.styleEmbedded.$S2",
                    nextEmbedded: "@pop"
                }
            ],
            [
                /<\/style/,
                {
                    token: "@rematch",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ]
        ],
        // -- END <style> tags handling
        razorInSimpleState: [
            [
                /@\*/,
                "comment.cs",
                "@razorBlockCommentTopLevel"
            ],
            [
                /@[{(]/,
                "metatag.cs",
                "@razorRootTopLevel"
            ],
            [
                /(@)(\s*[\w]+)/,
                [
                    "metatag.cs",
                    {
                        token: "identifier.cs",
                        switchTo: "@$S2.$S3"
                    }
                ]
            ],
            [
                /[})]/,
                {
                    token: "metatag.cs",
                    switchTo: "@$S2.$S3"
                }
            ],
            [
                /\*@/,
                {
                    token: "comment.cs",
                    switchTo: "@$S2.$S3"
                }
            ]
        ],
        razorInEmbeddedState: [
            [
                /@\*/,
                "comment.cs",
                "@razorBlockCommentTopLevel"
            ],
            [
                /@[{(]/,
                "metatag.cs",
                "@razorRootTopLevel"
            ],
            [
                /(@)(\s*[\w]+)/,
                [
                    "metatag.cs",
                    {
                        token: "identifier.cs",
                        switchTo: "@$S2.$S3",
                        nextEmbedded: "$S3"
                    }
                ]
            ],
            [
                /[})]/,
                {
                    token: "metatag.cs",
                    switchTo: "@$S2.$S3",
                    nextEmbedded: "$S3"
                }
            ],
            [
                /\*@/,
                {
                    token: "comment.cs",
                    switchTo: "@$S2.$S3",
                    nextEmbedded: "$S3"
                }
            ]
        ],
        razorBlockCommentTopLevel: [
            [
                /\*@/,
                "@rematch",
                "@pop"
            ],
            [
                /[^*]+/,
                "comment.cs"
            ],
            [
                /./,
                "comment.cs"
            ]
        ],
        razorBlockComment: [
            [
                /\*@/,
                "comment.cs",
                "@pop"
            ],
            [
                /[^*]+/,
                "comment.cs"
            ],
            [
                /./,
                "comment.cs"
            ]
        ],
        razorRootTopLevel: [
            [
                /\{/,
                "delimiter.bracket.cs",
                "@razorRoot"
            ],
            [
                /\(/,
                "delimiter.parenthesis.cs",
                "@razorRoot"
            ],
            [
                /[})]/,
                "@rematch",
                "@pop"
            ],
            {
                include: "razorCommon"
            }
        ],
        razorRoot: [
            [
                /\{/,
                "delimiter.bracket.cs",
                "@razorRoot"
            ],
            [
                /\(/,
                "delimiter.parenthesis.cs",
                "@razorRoot"
            ],
            [
                /\}/,
                "delimiter.bracket.cs",
                "@pop"
            ],
            [
                /\)/,
                "delimiter.parenthesis.cs",
                "@pop"
            ],
            {
                include: "razorCommon"
            }
        ],
        razorCommon: [
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        "@razorKeywords": {
                            token: "keyword.cs"
                        },
                        "@default": "identifier.cs"
                    }
                }
            ],
            // brackets
            [
                /[\[\]]/,
                "delimiter.array.cs"
            ],
            // whitespace
            [
                /[ \t\r\n]+/
            ],
            // comments
            [
                /\/\/.*$/,
                "comment.cs"
            ],
            [
                /@\*/,
                "comment.cs",
                "@razorBlockComment"
            ],
            // strings
            [
                /"([^"]*)"/,
                "string.cs"
            ],
            [
                /'([^']*)'/,
                "string.cs"
            ],
            // simple html
            [
                /(<)([\w\-]+)(\/>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    "delimiter.html"
                ]
            ],
            [
                /(<)([\w\-]+)(>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    "delimiter.html"
                ]
            ],
            [
                /(<\/)([\w\-]+)(>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    "delimiter.html"
                ]
            ],
            // delimiters
            [
                /[\+\-\*\%\&\|\^\~\!\=\<\>\/\?\;\:\.\,]/,
                "delimiter.cs"
            ],
            // numbers
            [
                /\d*\d+[eE]([\-+]?\d+)?/,
                "number.float.cs"
            ],
            [
                /\d*\.\d+([eE][\-+]?\d+)?/,
                "number.float.cs"
            ],
            [
                /0[xX][0-9a-fA-F']*[0-9a-fA-F]/,
                "number.hex.cs"
            ],
            [
                /0[0-7']*[0-7]/,
                "number.octal.cs"
            ],
            [
                /0[bB][0-1']*[0-1]/,
                "number.binary.cs"
            ],
            [
                /\d[\d']*/,
                "number.cs"
            ],
            [
                /\d/,
                "number.cs"
            ]
        ]
    },
    razorKeywords: [
        "abstract",
        "as",
        "async",
        "await",
        "base",
        "bool",
        "break",
        "by",
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
        "descending",
        "explicit",
        "event",
        "extern",
        "else",
        "enum",
        "false",
        "finally",
        "fixed",
        "float",
        "for",
        "foreach",
        "from",
        "goto",
        "group",
        "if",
        "implicit",
        "in",
        "int",
        "interface",
        "internal",
        "into",
        "is",
        "lock",
        "long",
        "nameof",
        "new",
        "null",
        "namespace",
        "object",
        "operator",
        "out",
        "override",
        "orderby",
        "params",
        "private",
        "protected",
        "public",
        "readonly",
        "ref",
        "return",
        "switch",
        "struct",
        "sbyte",
        "sealed",
        "short",
        "sizeof",
        "stackalloc",
        "static",
        "string",
        "select",
        "this",
        "throw",
        "true",
        "try",
        "typeof",
        "uint",
        "ulong",
        "unchecked",
        "unsafe",
        "ushort",
        "using",
        "var",
        "virtual",
        "volatile",
        "void",
        "when",
        "while",
        "where",
        "yield",
        "model",
        "inject"
    ],
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/
};

});


//# sourceMappingURL=razor.bdfec4c9.js.map
