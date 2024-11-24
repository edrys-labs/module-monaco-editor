
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("fEFwS", function(module, exports) {

$parcel$export(module.exports, "conf", () => $b65ace48625d0237$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $b65ace48625d0237$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ 
var $leKFq = parcelRequire("leKFq");
var $b65ace48625d0237$var$__defProp = Object.defineProperty;
var $b65ace48625d0237$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $b65ace48625d0237$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $b65ace48625d0237$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $b65ace48625d0237$var$__copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of $b65ace48625d0237$var$__getOwnPropNames(from))if (!$b65ace48625d0237$var$__hasOwnProp.call(to, key) && key !== except) $b65ace48625d0237$var$__defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = $b65ace48625d0237$var$__getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var $b65ace48625d0237$var$__reExport = (target, mod, secondTarget)=>($b65ace48625d0237$var$__copyProps(target, mod, "default"), secondTarget && $b65ace48625d0237$var$__copyProps(secondTarget, mod, "default"));
// src/fillers/monaco-editor-core.ts
var $b65ace48625d0237$var$monaco_editor_core_exports = {};
$b65ace48625d0237$var$__reExport($b65ace48625d0237$var$monaco_editor_core_exports, $leKFq);
// src/basic-languages/xml/xml.ts
var $b65ace48625d0237$export$c83be1687c028fc9 = {
    comments: {
        blockComment: [
            "<!--",
            "-->"
        ]
    },
    brackets: [
        [
            "<",
            ">"
        ]
    ],
    autoClosingPairs: [
        {
            open: "<",
            close: ">"
        },
        {
            open: "'",
            close: "'"
        },
        {
            open: '"',
            close: '"'
        }
    ],
    surroundingPairs: [
        {
            open: "<",
            close: ">"
        },
        {
            open: "'",
            close: "'"
        },
        {
            open: '"',
            close: '"'
        }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp(`<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
            action: {
                indentAction: $b65ace48625d0237$var$monaco_editor_core_exports.languages.IndentAction.IndentOutdent
            }
        },
        {
            beforeText: new RegExp(`<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            action: {
                indentAction: $b65ace48625d0237$var$monaco_editor_core_exports.languages.IndentAction.Indent
            }
        }
    ]
};
var $b65ace48625d0237$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".xml",
    ignoreCase: true,
    // Useful regular expressions
    qualifiedName: /(?:[\w\.\-]+:)?[\w\.\-]+/,
    tokenizer: {
        root: [
            [
                /[^<&]+/,
                ""
            ],
            {
                include: "@whitespace"
            },
            // Standard opening tag
            [
                /(<)(@qualifiedName)/,
                [
                    {
                        token: "delimiter"
                    },
                    {
                        token: "tag",
                        next: "@tag"
                    }
                ]
            ],
            // Standard closing tag
            [
                /(<\/)(@qualifiedName)(\s*)(>)/,
                [
                    {
                        token: "delimiter"
                    },
                    {
                        token: "tag"
                    },
                    "",
                    {
                        token: "delimiter"
                    }
                ]
            ],
            // Meta tags - instruction
            [
                /(<\?)(@qualifiedName)/,
                [
                    {
                        token: "delimiter"
                    },
                    {
                        token: "metatag",
                        next: "@tag"
                    }
                ]
            ],
            // Meta tags - declaration
            [
                /(<\!)(@qualifiedName)/,
                [
                    {
                        token: "delimiter"
                    },
                    {
                        token: "metatag",
                        next: "@tag"
                    }
                ]
            ],
            // CDATA
            [
                /<\!\[CDATA\[/,
                {
                    token: "delimiter.cdata",
                    next: "@cdata"
                }
            ],
            [
                /&\w+;/,
                "string.escape"
            ]
        ],
        cdata: [
            [
                /[^\]]+/,
                ""
            ],
            [
                /\]\]>/,
                {
                    token: "delimiter.cdata",
                    next: "@pop"
                }
            ],
            [
                /\]/,
                ""
            ]
        ],
        tag: [
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,
                [
                    "attribute.name",
                    "",
                    "attribute.value"
                ]
            ],
            [
                /(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,
                [
                    "attribute.name",
                    "",
                    "attribute.value"
                ]
            ],
            [
                /(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,
                [
                    "attribute.name",
                    "",
                    "attribute.value"
                ]
            ],
            [
                /@qualifiedName/,
                "attribute.name"
            ],
            [
                /\?>/,
                {
                    token: "delimiter",
                    next: "@pop"
                }
            ],
            [
                /(\/)(>)/,
                [
                    {
                        token: "tag"
                    },
                    {
                        token: "delimiter",
                        next: "@pop"
                    }
                ]
            ],
            [
                />/,
                {
                    token: "delimiter",
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
                /<!--/,
                {
                    token: "comment",
                    next: "@comment"
                }
            ]
        ],
        comment: [
            [
                /[^<\-]+/,
                "comment.content"
            ],
            [
                /-->/,
                {
                    token: "comment",
                    next: "@pop"
                }
            ],
            [
                /<!--/,
                "comment.content.invalid"
            ],
            [
                /[<\-]/,
                "comment.content"
            ]
        ]
    }
};

});


//# sourceMappingURL=xml.4a766a62.js.map
