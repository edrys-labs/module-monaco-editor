
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("ahXCA", function(module, exports) {

$parcel$export(module.exports, "conf", () => $77d9bd7e6211b691$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $77d9bd7e6211b691$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/azcli/azcli.ts
var $77d9bd7e6211b691$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "#"
    }
};
var $77d9bd7e6211b691$export$789c912f57fe164c = {
    defaultToken: "keyword",
    ignoreCase: true,
    tokenPostfix: ".azcli",
    str: /[^#\s]/,
    tokenizer: {
        root: [
            {
                include: "@comment"
            },
            [
                /\s-+@str*\s*/,
                {
                    cases: {
                        "@eos": {
                            token: "key.identifier",
                            next: "@popall"
                        },
                        "@default": {
                            token: "key.identifier",
                            next: "@type"
                        }
                    }
                }
            ],
            [
                /^-+@str*\s*/,
                {
                    cases: {
                        "@eos": {
                            token: "key.identifier",
                            next: "@popall"
                        },
                        "@default": {
                            token: "key.identifier",
                            next: "@type"
                        }
                    }
                }
            ]
        ],
        type: [
            {
                include: "@comment"
            },
            [
                /-+@str*\s*/,
                {
                    cases: {
                        "@eos": {
                            token: "key.identifier",
                            next: "@popall"
                        },
                        "@default": "key.identifier"
                    }
                }
            ],
            [
                /@str+\s*/,
                {
                    cases: {
                        "@eos": {
                            token: "string",
                            next: "@popall"
                        },
                        "@default": "string"
                    }
                }
            ]
        ],
        comment: [
            [
                /#.*$/,
                {
                    cases: {
                        "@eos": {
                            token: "comment",
                            next: "@popall"
                        }
                    }
                }
            ]
        ]
    }
};

});


