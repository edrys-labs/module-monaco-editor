
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("koAYE", function(module, exports) {

$parcel$export(module.exports, "conf", () => $ed92bb6cd2e065ef$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $ed92bb6cd2e065ef$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ 
var $leKFq = parcelRequire("leKFq");
var $ed92bb6cd2e065ef$var$__defProp = Object.defineProperty;
var $ed92bb6cd2e065ef$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $ed92bb6cd2e065ef$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $ed92bb6cd2e065ef$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $ed92bb6cd2e065ef$var$__copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of $ed92bb6cd2e065ef$var$__getOwnPropNames(from))if (!$ed92bb6cd2e065ef$var$__hasOwnProp.call(to, key) && key !== except) $ed92bb6cd2e065ef$var$__defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = $ed92bb6cd2e065ef$var$__getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var $ed92bb6cd2e065ef$var$__reExport = (target, mod, secondTarget)=>($ed92bb6cd2e065ef$var$__copyProps(target, mod, "default"), secondTarget && $ed92bb6cd2e065ef$var$__copyProps(secondTarget, mod, "default"));
// src/fillers/monaco-editor-core.ts
var $ed92bb6cd2e065ef$var$monaco_editor_core_exports = {};
$ed92bb6cd2e065ef$var$__reExport($ed92bb6cd2e065ef$var$monaco_editor_core_exports, $leKFq);
// src/basic-languages/html/html.ts
var $ed92bb6cd2e065ef$var$EMPTY_ELEMENTS = [
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
var $ed92bb6cd2e065ef$export$c83be1687c028fc9 = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
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
            open: "<",
            close: ">"
        }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp(`<(?!(?:${$ed92bb6cd2e065ef$var$EMPTY_ELEMENTS.join("|")}))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
            action: {
                indentAction: $ed92bb6cd2e065ef$var$monaco_editor_core_exports.languages.IndentAction.IndentOutdent
            }
        },
        {
            beforeText: new RegExp(`<(?!(?:${$ed92bb6cd2e065ef$var$EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            action: {
                indentAction: $ed92bb6cd2e065ef$var$monaco_editor_core_exports.languages.IndentAction.Indent
            }
        }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*<!--\\s*#region\\b.*-->"),
            end: new RegExp("^\\s*<!--\\s*#endregion\\b.*-->")
        }
    }
};
var $ed92bb6cd2e065ef$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".html",
    ignoreCase: true,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [
                /<!DOCTYPE/,
                "metatag",
                "@doctype"
            ],
            [
                /<!--/,
                "comment",
                "@comment"
            ],
            [
                /(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/,
                [
                    "delimiter",
                    "tag",
                    "",
                    "delimiter"
                ]
            ],
            [
                /(<)(script)/,
                [
                    "delimiter",
                    {
                        token: "tag",
                        next: "@script"
                    }
                ]
            ],
            [
                /(<)(style)/,
                [
                    "delimiter",
                    {
                        token: "tag",
                        next: "@style"
                    }
                ]
            ],
            [
                /(<)((?:[\w\-]+:)?[\w\-]+)/,
                [
                    "delimiter",
                    {
                        token: "tag",
                        next: "@otherTag"
                    }
                ]
            ],
            [
                /(<\/)((?:[\w\-]+:)?[\w\-]+)/,
                [
                    "delimiter",
                    {
                        token: "tag",
                        next: "@otherTag"
                    }
                ]
            ],
            [
                /</,
                "delimiter"
            ],
            [
                /[^<]+/
            ]
        ],
        doctype: [
            [
                /[^>]+/,
                "metatag.content"
            ],
            [
                />/,
                "metatag",
                "@pop"
            ]
        ],
        comment: [
            [
                /-->/,
                "comment",
                "@pop"
            ],
            [
                /[^-]+/,
                "comment.content"
            ],
            [
                /./,
                "comment.content"
            ]
        ],
        otherTag: [
            [
                /\/?>/,
                "delimiter",
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
                    token: "delimiter",
                    next: "@scriptEmbedded",
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
                    "delimiter",
                    "tag",
                    {
                        token: "delimiter",
                        next: "@pop"
                    }
                ]
            ]
        ],
        // After <script ... type
        scriptAfterType: [
            [
                /=/,
                "delimiter",
                "@scriptAfterTypeEquals"
            ],
            [
                />/,
                {
                    token: "delimiter",
                    next: "@scriptEmbedded",
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
                /"module"/,
                {
                    token: "attribute.value",
                    switchTo: "@scriptWithCustomType.text/javascript"
                }
            ],
            [
                /'module'/,
                {
                    token: "attribute.value",
                    switchTo: "@scriptWithCustomType.text/javascript"
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
                    token: "delimiter",
                    next: "@scriptEmbedded",
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
                />/,
                {
                    token: "delimiter",
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
                /<\/script/,
                {
                    token: "@rematch",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ],
            [
                /[^<]+/,
                ""
            ]
        ],
        // -- END <script> tags handling
        // -- BEGIN <style> tags handling
        // After <style
        style: [
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
                    token: "delimiter",
                    next: "@styleEmbedded",
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
                    "delimiter",
                    "tag",
                    {
                        token: "delimiter",
                        next: "@pop"
                    }
                ]
            ]
        ],
        // After <style ... type
        styleAfterType: [
            [
                /=/,
                "delimiter",
                "@styleAfterTypeEquals"
            ],
            [
                />/,
                {
                    token: "delimiter",
                    next: "@styleEmbedded",
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
                    token: "delimiter",
                    next: "@styleEmbedded",
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
                />/,
                {
                    token: "delimiter",
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
                /<\/style/,
                {
                    token: "@rematch",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ],
            [
                /[^<]+/,
                ""
            ]
        ]
    }
};

});


//# sourceMappingURL=html.061bfe85.js.map
