
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("jYBU5", function(module, exports) {

$parcel$export(module.exports, "conf", () => $e8b105cac2d25ed3$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $e8b105cac2d25ed3$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ 
var $leKFq = parcelRequire("leKFq");
var $e8b105cac2d25ed3$var$__defProp = Object.defineProperty;
var $e8b105cac2d25ed3$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $e8b105cac2d25ed3$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $e8b105cac2d25ed3$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $e8b105cac2d25ed3$var$__copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of $e8b105cac2d25ed3$var$__getOwnPropNames(from))if (!$e8b105cac2d25ed3$var$__hasOwnProp.call(to, key) && key !== except) $e8b105cac2d25ed3$var$__defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = $e8b105cac2d25ed3$var$__getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var $e8b105cac2d25ed3$var$__reExport = (target, mod, secondTarget)=>($e8b105cac2d25ed3$var$__copyProps(target, mod, "default"), secondTarget && $e8b105cac2d25ed3$var$__copyProps(secondTarget, mod, "default"));
// src/fillers/monaco-editor-core.ts
var $e8b105cac2d25ed3$var$monaco_editor_core_exports = {};
$e8b105cac2d25ed3$var$__reExport($e8b105cac2d25ed3$var$monaco_editor_core_exports, $leKFq);
// src/basic-languages/mdx/mdx.ts
var $e8b105cac2d25ed3$export$c83be1687c028fc9 = {
    comments: {
        blockComment: [
            "{/*",
            "*/}"
        ]
    },
    brackets: [
        [
            "{",
            "}"
        ]
    ],
    autoClosingPairs: [
        {
            open: '"',
            close: '"'
        },
        {
            open: "'",
            close: "'"
        },
        {
            open: "\u201C",
            close: "\u201D"
        },
        {
            open: "\u2018",
            close: "\u2019"
        },
        {
            open: "`",
            close: "`"
        },
        {
            open: "{",
            close: "}"
        },
        {
            open: "(",
            close: ")"
        },
        {
            open: "_",
            close: "_"
        },
        {
            open: "**",
            close: "**"
        },
        {
            open: "<",
            close: ">"
        }
    ],
    onEnterRules: [
        {
            beforeText: /^\s*- .+/,
            action: {
                indentAction: $e8b105cac2d25ed3$var$monaco_editor_core_exports.languages.IndentAction.None,
                appendText: "- "
            }
        },
        {
            beforeText: /^\s*\+ .+/,
            action: {
                indentAction: $e8b105cac2d25ed3$var$monaco_editor_core_exports.languages.IndentAction.None,
                appendText: "+ "
            }
        },
        {
            beforeText: /^\s*\* .+/,
            action: {
                indentAction: $e8b105cac2d25ed3$var$monaco_editor_core_exports.languages.IndentAction.None,
                appendText: "* "
            }
        },
        {
            beforeText: /^> /,
            action: {
                indentAction: $e8b105cac2d25ed3$var$monaco_editor_core_exports.languages.IndentAction.None,
                appendText: "> "
            }
        },
        {
            beforeText: /<\w+/,
            action: {
                indentAction: $e8b105cac2d25ed3$var$monaco_editor_core_exports.languages.IndentAction.Indent
            }
        },
        {
            beforeText: /\s+>\s*$/,
            action: {
                indentAction: $e8b105cac2d25ed3$var$monaco_editor_core_exports.languages.IndentAction.Indent
            }
        },
        {
            beforeText: /<\/\w+>/,
            action: {
                indentAction: $e8b105cac2d25ed3$var$monaco_editor_core_exports.languages.IndentAction.Outdent
            }
        },
        ...Array.from({
            length: 100
        }, (_, index)=>({
                beforeText: new RegExp(`^${index}\\. .+`),
                action: {
                    indentAction: $e8b105cac2d25ed3$var$monaco_editor_core_exports.languages.IndentAction.None,
                    appendText: `${index + 1}. `
                }
            }))
    ]
};
var $e8b105cac2d25ed3$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".mdx",
    control: /[!#()*+.[\\\]_`{}\-]/,
    escapes: /\\@control/,
    tokenizer: {
        root: [
            [
                /^---$/,
                {
                    token: "meta.content",
                    next: "@frontmatter",
                    nextEmbedded: "yaml"
                }
            ],
            [
                /^\s*import/,
                {
                    token: "keyword",
                    next: "@import",
                    nextEmbedded: "js"
                }
            ],
            [
                /^\s*export/,
                {
                    token: "keyword",
                    next: "@export",
                    nextEmbedded: "js"
                }
            ],
            [
                /<\w+/,
                {
                    token: "type.identifier",
                    next: "@jsx"
                }
            ],
            [
                /<\/?\w+>/,
                "type.identifier"
            ],
            [
                /^(\s*)(>*\s*)(#{1,6}\s)/,
                [
                    {
                        token: "white"
                    },
                    {
                        token: "comment"
                    },
                    {
                        token: "keyword",
                        next: "@header"
                    }
                ]
            ],
            [
                /^(\s*)(>*\s*)([*+-])(\s+)/,
                [
                    "white",
                    "comment",
                    "keyword",
                    "white"
                ]
            ],
            [
                /^(\s*)(>*\s*)(\d{1,9}\.)(\s+)/,
                [
                    "white",
                    "comment",
                    "number",
                    "white"
                ]
            ],
            [
                /^(\s*)(>*\s*)(\d{1,9}\.)(\s+)/,
                [
                    "white",
                    "comment",
                    "number",
                    "white"
                ]
            ],
            [
                /^(\s*)(>*\s*)(-{3,}|\*{3,}|_{3,})$/,
                [
                    "white",
                    "comment",
                    "keyword"
                ]
            ],
            [
                /`{3,}(\s.*)?$/,
                {
                    token: "string",
                    next: "@codeblock_backtick"
                }
            ],
            [
                /~{3,}(\s.*)?$/,
                {
                    token: "string",
                    next: "@codeblock_tilde"
                }
            ],
            [
                /`{3,}(\S+).*$/,
                {
                    token: "string",
                    next: "@codeblock_highlight_backtick",
                    nextEmbedded: "$1"
                }
            ],
            [
                /~{3,}(\S+).*$/,
                {
                    token: "string",
                    next: "@codeblock_highlight_tilde",
                    nextEmbedded: "$1"
                }
            ],
            [
                /^(\s*)(-{4,})$/,
                [
                    "white",
                    "comment"
                ]
            ],
            [
                /^(\s*)(>+)/,
                [
                    "white",
                    "comment"
                ]
            ],
            {
                include: "content"
            }
        ],
        content: [
            [
                /(\[)(.+)(]\()(.+)(\s+".*")(\))/,
                [
                    "",
                    "string.link",
                    "",
                    "type.identifier",
                    "string.link",
                    ""
                ]
            ],
            [
                /(\[)(.+)(]\()(.+)(\))/,
                [
                    "",
                    "type.identifier",
                    "",
                    "string.link",
                    ""
                ]
            ],
            [
                /(\[)(.+)(]\[)(.+)(])/,
                [
                    "",
                    "type.identifier",
                    "",
                    "type.identifier",
                    ""
                ]
            ],
            [
                /(\[)(.+)(]:\s+)(\S*)/,
                [
                    "",
                    "type.identifier",
                    "",
                    "string.link"
                ]
            ],
            [
                /(\[)(.+)(])/,
                [
                    "",
                    "type.identifier",
                    ""
                ]
            ],
            [
                /`.*`/,
                "variable.source"
            ],
            [
                /_/,
                {
                    token: "emphasis",
                    next: "@emphasis_underscore"
                }
            ],
            [
                /\*(?!\*)/,
                {
                    token: "emphasis",
                    next: "@emphasis_asterisk"
                }
            ],
            [
                /\*\*/,
                {
                    token: "strong",
                    next: "@strong"
                }
            ],
            [
                /{/,
                {
                    token: "delimiter.bracket",
                    next: "@expression",
                    nextEmbedded: "js"
                }
            ]
        ],
        import: [
            [
                /'\s*(;|$)/,
                {
                    token: "string",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ]
        ],
        expression: [
            [
                /{/,
                {
                    token: "delimiter.bracket",
                    next: "@expression"
                }
            ],
            [
                /}/,
                {
                    token: "delimiter.bracket",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ]
        ],
        export: [
            [
                /^\s*$/,
                {
                    token: "delimiter.bracket",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ]
        ],
        jsx: [
            [
                /\s+/,
                ""
            ],
            [
                /(\w+)(=)("(?:[^"\\]|\\.)*")/,
                [
                    "attribute.name",
                    "operator",
                    "string"
                ]
            ],
            [
                /(\w+)(=)('(?:[^'\\]|\\.)*')/,
                [
                    "attribute.name",
                    "operator",
                    "string"
                ]
            ],
            [
                /(\w+(?=\s|>|={|$))/,
                [
                    "attribute.name"
                ]
            ],
            [
                /={/,
                {
                    token: "delimiter.bracket",
                    next: "@expression",
                    nextEmbedded: "js"
                }
            ],
            [
                />/,
                {
                    token: "type.identifier",
                    next: "@pop"
                }
            ]
        ],
        header: [
            [
                /.$/,
                {
                    token: "keyword",
                    next: "@pop"
                }
            ],
            {
                include: "content"
            },
            [
                /./,
                {
                    token: "keyword"
                }
            ]
        ],
        strong: [
            [
                /\*\*/,
                {
                    token: "strong",
                    next: "@pop"
                }
            ],
            {
                include: "content"
            },
            [
                /./,
                {
                    token: "strong"
                }
            ]
        ],
        emphasis_underscore: [
            [
                /_/,
                {
                    token: "emphasis",
                    next: "@pop"
                }
            ],
            {
                include: "content"
            },
            [
                /./,
                {
                    token: "emphasis"
                }
            ]
        ],
        emphasis_asterisk: [
            [
                /\*(?!\*)/,
                {
                    token: "emphasis",
                    next: "@pop"
                }
            ],
            {
                include: "content"
            },
            [
                /./,
                {
                    token: "emphasis"
                }
            ]
        ],
        frontmatter: [
            [
                /^---$/,
                {
                    token: "meta.content",
                    nextEmbedded: "@pop",
                    next: "@pop"
                }
            ]
        ],
        codeblock_highlight_backtick: [
            [
                /\s*`{3,}\s*$/,
                {
                    token: "string",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ],
            [
                /.*$/,
                "variable.source"
            ]
        ],
        codeblock_highlight_tilde: [
            [
                /\s*~{3,}\s*$/,
                {
                    token: "string",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ],
            [
                /.*$/,
                "variable.source"
            ]
        ],
        codeblock_backtick: [
            [
                /\s*`{3,}\s*$/,
                {
                    token: "string",
                    next: "@pop"
                }
            ],
            [
                /.*$/,
                "variable.source"
            ]
        ],
        codeblock_tilde: [
            [
                /\s*~{3,}\s*$/,
                {
                    token: "string",
                    next: "@pop"
                }
            ],
            [
                /.*$/,
                "variable.source"
            ]
        ]
    }
};

});


//# sourceMappingURL=mdx.7aa39fdb.js.map
