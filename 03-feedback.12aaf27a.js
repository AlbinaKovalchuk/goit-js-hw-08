!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var i=o("hKHmD"),u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f.default(e,t,r[t])}))}return e};var a,f=(a=o("hKHmD"))&&a.__esModule?a:{default:a};var c,l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var d="Expected a function",s=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,O=g||y||Function("return this")(),j=Object.prototype.toString,S=Math.max,x=Math.min,h=function(){return O.Date.now()};function w(e,t,r){var n,o,i,u,a,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError(d);function v(t){var r=n,i=o;return n=o=void 0,c=t,u=e.apply(i,r)}function m(e){return c=e,a=setTimeout(g,t),l?v(e):u}function b(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-c>=i}function g(){var e=h();if(b(e))return y(e);a=setTimeout(g,function(e){var r=t-(e-f);return s?x(r,i-(e-c)):r}(e))}function y(e){return a=void 0,p&&n?v(e):(n=o=void 0,u)}function O(){var e=h(),r=b(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return m(f);if(s)return a=setTimeout(g,t),v(f)}return void 0===a&&(a=setTimeout(g,t)),u}return t=T(t)||0,_(r)&&(l=!!r.leading,i=(s="maxWait"in r)?S(T(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,n=f=o=a=void 0},O.flush=function(){return void 0===a?u:y(h())},O}function _(t){var r=void 0===t?"undefined":e(l)(t);return!!t&&("object"==r||"function"==r)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(l)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==j.call(t)}(t))return NaN;if(_(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=_(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var n=v.test(t);return n||m.test(t)?b(t.slice(2),n?2:8):p.test(t)?NaN:+t}c=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(d);return _(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),w(e,t,{leading:n,maxWait:t,trailing:o})};var N="feedback-form-state",D={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};D.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(N))),e.currentTarget.reset(),localStorage.removeItem(N)})),D.form.addEventListener("input",e(c)((function(t){var r=JSON.parse(localStorage.getItem(N));localStorage.setItem(N,JSON.stringify(e(u)({},r,e(i)({},t.target.name,t.target.value))))}),500)),function(){var e=localStorage.getItem(N);if(e){var t=JSON.parse(e);t.email&&(D.input.value=t.email),t.message&&(D.textarea.value=t.message)}}()}();
//# sourceMappingURL=03-feedback.12aaf27a.js.map
