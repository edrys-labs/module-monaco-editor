
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("jdNgO", function(module, exports) {

$parcel$export(module.exports, "conf", () => $dfe573411f16791a$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $dfe573411f16791a$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/csp/csp.ts
var $dfe573411f16791a$export$c83be1687c028fc9 = {
    brackets: [],
    autoClosingPairs: [],
    surroundingPairs: []
};
var $dfe573411f16791a$export$789c912f57fe164c = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    // defaultToken: 'invalid',
    keywords: [],
    typeKeywords: [],
    tokenPostfix: ".csp",
    operators: [],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            [
                /child-src/,
                "string.quote"
            ],
            [
                /connect-src/,
                "string.quote"
            ],
            [
                /default-src/,
                "string.quote"
            ],
            [
                /font-src/,
                "string.quote"
            ],
            [
                /frame-src/,
                "string.quote"
            ],
            [
                /img-src/,
                "string.quote"
            ],
            [
                /manifest-src/,
                "string.quote"
            ],
            [
                /media-src/,
                "string.quote"
            ],
            [
                /object-src/,
                "string.quote"
            ],
            [
                /script-src/,
                "string.quote"
            ],
            [
                /style-src/,
                "string.quote"
            ],
            [
                /worker-src/,
                "string.quote"
            ],
            [
                /base-uri/,
                "string.quote"
            ],
            [
                /plugin-types/,
                "string.quote"
            ],
            [
                /sandbox/,
                "string.quote"
            ],
            [
                /disown-opener/,
                "string.quote"
            ],
            [
                /form-action/,
                "string.quote"
            ],
            [
                /frame-ancestors/,
                "string.quote"
            ],
            [
                /report-uri/,
                "string.quote"
            ],
            [
                /report-to/,
                "string.quote"
            ],
            [
                /upgrade-insecure-requests/,
                "string.quote"
            ],
            [
                /block-all-mixed-content/,
                "string.quote"
            ],
            [
                /require-sri-for/,
                "string.quote"
            ],
            [
                /reflected-xss/,
                "string.quote"
            ],
            [
                /referrer/,
                "string.quote"
            ],
            [
                /policy-uri/,
                "string.quote"
            ],
            [
                /'self'/,
                "string.quote"
            ],
            [
                /'unsafe-inline'/,
                "string.quote"
            ],
            [
                /'unsafe-eval'/,
                "string.quote"
            ],
            [
                /'strict-dynamic'/,
                "string.quote"
            ],
            [
                /'unsafe-hashed-attributes'/,
                "string.quote"
            ]
        ]
    }
};

});


//# sourceMappingURL=csp.0b9c17f4.js.map
