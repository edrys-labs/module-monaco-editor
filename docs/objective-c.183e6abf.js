!function(e,n,o,t,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i[t]&&i[t],c=s.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function a(n,o){if(!c[n]){if(!e[n]){var r="function"==typeof i[t]&&i[t];if(!o&&r)return r(n,!0);if(s)return s(n,!0);if(l&&"string"==typeof n)return l(n);var d=Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}p.resolve=function(o){var t=e[n][1][o];return null!=t?t:o},p.cache={};var u=c[n]=new a.Module(n);e[n][0].call(u.exports,p,u,u.exports,i)}return c[n].exports;function p(e){var n=p.resolve(e);return!1===n?{}:a(n)}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=c,a.parent=s,a.register=function(n,o){e[n]=[function(e,n){n.exports=o},{}]},Object.defineProperty(a,"root",{get:function(){return i[t]}}),i[t]=a;for(var d=0;d<n.length;d++)a(n[d])}({gldF6:[function(e,n,o,t){/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(o),r.export(o,"conf",()=>i),r.export(o,"language",()=>s);var i={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}]},s={defaultToken:"",tokenPostfix:".objective-c",keywords:["#import","#include","#define","#else","#endif","#if","#ifdef","#ifndef","#ident","#undef","@class","@defs","@dynamic","@encode","@end","@implementation","@interface","@package","@private","@protected","@property","@protocol","@public","@selector","@synthesize","__declspec","assign","auto","BOOL","break","bycopy","byref","case","char","Class","const","copy","continue","default","do","double","else","enum","extern","FALSE","false","float","for","goto","if","in","int","id","inout","IMP","long","nil","nonatomic","NULL","oneway","out","private","public","protected","readwrite","readonly","register","return","SEL","self","short","signed","sizeof","static","struct","super","switch","typedef","TRUE","true","union","unsigned","volatile","void","while"],decpart:/\d(_?\d)*/,decimal:/0|@decpart/,tokenizer:{root:[{include:"@comments"},{include:"@whitespace"},{include:"@numbers"},{include:"@strings"},[/[,:;]/,"delimiter"],[/[{}\[\]()<>]/,"@brackets"],[/[a-zA-Z@#]\w*/,{cases:{"@keywords":"keyword","@default":"identifier"}}],[/[<>=\\+\\-\\*\\/\\^\\|\\~,]|and\\b|or\\b|not\\b]/,"operator"]],whitespace:[[/\s+/,"white"]],comments:[["\\/\\*","comment","@comment"],["\\/\\/+.*","comment"]],comment:[["\\*\\/","comment","@pop"],[".","comment"]],numbers:[[/0[xX][0-9a-fA-F]*(_?[0-9a-fA-F])*/,"number.hex"],[/@decimal((\.@decpart)?([eE][\-+]?@decpart)?)[fF]*/,{cases:{"(\\d)*":"number",$0:"number.float"}}]],strings:[[/'$/,"string.escape","@popall"],[/'/,"string.escape","@stringBody"],[/"$/,"string.escape","@popall"],[/"/,"string.escape","@dblStringBody"]],stringBody:[[/[^\\']+$/,"string","@popall"],[/[^\\']+/,"string"],[/\\./,"string"],[/'/,"string.escape","@popall"],[/\\$/,"string"]],dblStringBody:[[/[^\\"]+$/,"string","@popall"],[/[^\\"]+/,"string"],[/\\./,"string"],[/"/,"string.escape","@popall"],[/\\$/,"string"]]}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k3151:[function(e,n,o,t){o.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},o.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.exportAll=function(e,n){return Object.keys(e).forEach(function(o){"default"===o||"__esModule"===o||Object.prototype.hasOwnProperty.call(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:function(){return e[o]}})}),n},o.export=function(e,n,o){Object.defineProperty(e,n,{enumerable:!0,get:o})}},{}]},[],0,"parcelRequire94c2");
//# sourceMappingURL=objective-c.183e6abf.js.map