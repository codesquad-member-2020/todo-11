!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(r).concat([i]).join("\n")}var a,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e,t){var o=t(2),i=t(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1},a=(o(i,r),i.locals?i.locals:{});n.exports=a},function(n,e,t){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function s(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],i=0;i<n.length;i++){var r=n[i],c=e.base?r[0]+e.base:r[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var u=s(l),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:h(p,e),references:1}),o.push(l)}return o}function d(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,u=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=u(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function b(n,e,t){var o=t.css,i=t.media,r=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,f=0;function h(n,e){var t,o,i;if(e.singleton){var r=f++;t=m||(m=d(e)),o=p.bind(null,t,r,!1),i=p.bind(null,t,r,!0)}else t=d(e),o=b.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var i=s(t[o]);a[i].references--}for(var r=c(n,e),d=0;d<t.length;d++){var l=s(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=r}}}},function(n,e,t){var o=t(0),i=t(4);(e=o(!1)).i(i),e.push([n.i,"body {\n    box-sizing: border-box;\n  }\n\n.header {\n    box-sizing: border-box;\n    display: flex;\n    background-color: black;\n    color: white;\n    padding: 10px 20px;\n    font-size: large;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.header .menu {\n    color: white;\n}\n\n.column-wrap {\n    display: -webkit-box;\n    overflow-x: scroll;\n}\n\n.column {\n    height: 650px;\n    margin: 10px;\n    width: 350px;\n    border-radius: 10px;\n    padding: 10px;\n    background-color: #F0F1F3;\n    overflow-y: scroll;\n}\n\n.column-menu {\n    display: flex;\n    width: 100%;\n    height: 30px;\n    font-weight: bold;\n    justify-content: space-between;\n}\n\n.column-menu_count {\n    display: inline-block;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    line-height: 22px;\n    text-align: center;\n    background-color: #D1D2D4;\n}\n\n.column-menu_right {\n    color: #818890;\n    font-size: 25px;\n}\n\n.column-menu_addBtn:hover {\n    color: #0166D6;\n}\n\n.column-menu_menu {\n    bottom: 5px;\n    position: relative;\n}\n\n.add-column {\n    width: 350px;\n    height: 100px;\n    margin: 10px;\n    border-radius: 10px;\n    border: dashed 1px #B0B6BB;\n    color: #596069;\n}\n\n.add-note_input {\n    box-sizing: border-box;\n    display: inline;\n    width: 100%;\n    height: 70px;\n    padding: 10px;\n    margin: 5px 0;\n    border: none;\n    border-radius: 10px;\n    overflow: scroll;\n    word-break: break-all;\n}\n\n.add-note {\n    display: none;\n}\n\n.add-note > button {\n    border-radius: 7px;\n    width: 48%;\n    height: 30px;\n}\n\n.add-note_addBtn {\n    margin-right: 2%;\n    border: solid 1px #276736;\n    background-color: #2CBB4D;\n    color: #FFFFFF;\n}\n\n.add-note_addBtn:disabled {\n    border: solid 1px #7BAE89;\n    background-color: #94D3A2;\n    color: #D5EEDB;\n}\n\n.add-note_cancleBtn {\n    border: solid 1px #C9CDCF;\n    background-color: #F4F7F9;\n}\n\n.note {\n    display: flex;\n    background-color: white;\n    border-radius: 10px;\n    padding: 10px;\n    margin: 10px 0;\n    position: relative;\n}\n\n.note-icon {\n    color: #818890;\n    margin-right: 5px;\n}\n\n.note-content {\n    margin: 15px 0;\n}\n\n.note-main {\n    margin-top: 1px;\n}\n\n.note-author {\n    font-size: small;\n}\n\n.note-author_msg {\n    color: #818890;\n}\n\n.note-removeBtn {\n    color: #818890;\n    font-weight: bold;\n    position: absolute;\n    right: 10px;\n    top: 8px;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,'/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0-modified | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n    outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\ninput[type=search] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n}\n\ntextarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n\n[hidden] {\n    display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-size: 100%; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -ms-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\n\nimg {\n    border: 0; /* 1 */\n    -ms-interpolation-mode: bicubic; /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\n\nfigure {\n    margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\n\nform {\n    margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0;\n    white-space: normal; /* 2 */\n    *margin-left: -7px; /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%; /* 1 */\n    margin: 0; /* 2 */\n    vertical-align: baseline; /* 3 */\n    *vertical-align: middle; /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\n\nbutton,\nhtml input[type="button"], /* 1 */\ninput[type="reset"],\ninput[type="submit"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n    *overflow: visible;  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\n\ninput[type="checkbox"],\ninput[type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    *height: 13px; /* 3 */\n    *width: 13px; /* 3 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: #222;\n}\n\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\nimg {\n    vertical-align: middle;\n}\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\ntextarea {\n    resize: vertical;\n}\n\n.chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}\n\nbutton {\n  background: none;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}',""]),n.exports=e},function(n,e){},function(n,e,t){"use strict";t.r(e);t(1);function o(n){return document.querySelector(n)}function i(n){n.style.display="block"}const r={GET_COLUMNS_API:"http://15.165.223.140:80/api/columns",DELETE_NOTE_API:"http://15.165.223.140:80/api/notes?id=",CREATE_NOTE_API:"http://15.165.223.140:80/api/notes",GET_SPECIFIC_COLUMN_NOTES_API:"http://15.165.223.140:80/api/notes/column?columnName="},a=(n,e)=>{o(`.${e} > .note-wrap`).innerHTML=(n=>{let e="";return n.contents.notes.forEach((n,t)=>{o(`.${t} > .column-menu_count`).innerHTML++;const i=n.content.split("\n"),r=i[0];i.splice(0,1);const a=i.join("");e+=`\n            <div class="note" value="${n.id}">\n                <span class="note-icon"><i class="far fa-comment-alt"></i></span>\n                <span class="note-main">\n                    <div class="note-title">${r}</div>\n                    <div class="note-content">${a}</div>\n                    <div class="note-author">\n                        <span class="note-author_msg">Added by</span>\n                        <span class="note-author_name">${n.userId}</span>\n                    </div>\n                </span>\n                <button class="note-removeBtn">X</button>\n            </div>\n        `}),e})(n)},s=async()=>{const n=await c(r.GET_COLUMNS_API);(n=>{o(".column-wrap").innerHTML=(n=>{let e="";return n.contents.columns.forEach(n=>{e+=`\n            <div class="column ${n}">\n                <div class="column-menu">\n                    <div class="column-menu_left">\n                        <span class="column-menu_count"></span>\n                        <span class="column-menu_title">${n}</span>\n                    </div>\n                    <div class="column-menu_right">\n                        <button class="column-menu_addBtn">+</button>\n                        <button class="column-menu_menu">&hellip;</button>\n                    </div>\n                </div>\n                <div class="add-note">\n                    <input class="add-note_input" type="text" placeholder="Enter a note">\n                    <button class="add-note_addBtn" disabled="disabled">Add</button>\n                    <button class="add-note_cancleBtn">Cancle</button>\n                </div>\n                <div class="note-wrap"></div>\n            </div>\n        `}),e+'<button class="add-column">+Add column</button>'})(n)})(n),n.contents.columns.forEach(async n=>{const e=await c(r.GET_SPECIFIC_COLUMN_NOTES_API+n);a(e,n)})},c=n=>fetch(n,{method:"GET",headers:{Accept:"*/*"}}).then(n=>n.json());t(5);window.addEventListener("DOMContentLoaded",async()=>{await s(),o(".column-menu_addBtn").addEventListener("click",()=>{const n=o(".add-note");switch(n.style.display){case"block":n.style.display="none";break;case"":case"none":i(n)}})})}]);