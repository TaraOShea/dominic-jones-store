
    (function (global) {
      try {
        var ls = global.localStorage
        var scrollPos = ls.getItem('slater-scroll')

        if (scrollPos) global.scrollTo(0, scrollPos)

        const socketio = document.createElement('script')
        socketio.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.slim.js'
        socketio.onload = function init () {
          var disconnected = false
          var socket = io('https://localhost:4000', {
            reconnectionAttempts: 1
          })
          socket.on('connect', function connect () {
            console.log('slater connected')
          })
          socket.on('refresh', function refresh () {
            ls.setItem('slater-scroll', global.scrollY)
            global.location.reload()
          })
          socket.on('disconnect', function disconnect () {
            disconnected = true
          })
          socket.on('reconnect_failed', function reconnectFailed (e) {
            if (disconnected) return
            console.group("slater - %cconnection to server at 4000 failed", "color: red")
            console.info("try visiting https://localhost:4000 and creating a security exception")
            console.log("for more info see https://github.com/the-couch/slater#live-reloading--https")
            console.groupEnd()
          })
        }
        document.head.appendChild(socketio)
      } catch (e) {}
    })(this);
  
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/lazim/dist/lazim.es.js":
/*!*********************************************!*\
  !*** ./node_modules/lazim/dist/lazim.es.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vsbl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vsbl */ "./node_modules/vsbl/dist/vsbl.es.js");
/* harmony default export */ __webpack_exports__["default"] = (function(e){return void 0===e&&(e="data-src"),function(){for(var o=document.querySelectorAll("["+e+"]"),i=function(i){var n=o[i],a="IMG"===n.nodeName?n:n.getElementsByTagName("img")[0],r=n.getAttribute(e);a.onload=function(){n.classList.add("is-loaded")},n.removeAttribute(e),Object(vsbl__WEBPACK_IMPORTED_MODULE_0__["default"])(n)(function(){n.classList.add("is-visible"),a.src=r}).update()},n=0;n<o.length;n++)i(n)}});
//# sourceMappingURL=lazim.es.js.map


/***/ }),

/***/ "./node_modules/operator/dist/operator.es.js":
/*!***************************************************!*\
  !*** ./node_modules/operator/dist/operator.es.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function n(n,t){for(var e=0,r=n.length;e<r;e++)if(!t(n[e],e,n))return!1;return!0}function t(n){if("/"===n)return n;47===n.charCodeAt(0)&&(n=n.substring(1));var t=n.length-1;return 47===n.charCodeAt(t)?n.substring(0,t):n}function e(n){return"/"===(n=t(n))?["/"]:n.split("/")}function r(n,t,e){return t.val===(e=n[e])&&0===t.type||("/"===e?t.type>1:0!==t.type&&(e||"").endsWith(t.end))}function o(n){if("/"===n)return[{old:n,type:0,val:n,end:""}];for(var e,r,o,a,i=t(n),c=-1,u=0,l=i.length,s=[];++c<l;)if(58!==(e=i.charCodeAt(c)))if(42!==e){for(u=c;c<l&&47!==i.charCodeAt(c);)++c;s.push({old:n,type:0,val:i.substring(u,c),end:""}),i=i.substring(c),l-=c,c=u=0}else s.push({old:n,type:2,val:i.substring(c),end:""});else{for(u=c+1,o=1,r=0,a="";c<l&&47!==i.charCodeAt(c);)63===(e=i.charCodeAt(c))?(r=c,o=3):46===e&&0===a.length&&(a=i.substring(r=c)),c++;s.push({old:n,type:o,val:i.substring(u,r||c),end:a}),i=i.substring(c),l-=c,c=0}return s}function a(n,t){for(var r,o,a=0,i=e(n),c={};a<t.length;a++)o=t[a],"/"!==(r=i[a])&&void 0!==r&&!1|o.type&&(c[o.val]=r.replace(o.end,""));return c}var i=new Map;function c(n){return n.replace(window.location.origin,"")}function u(t,o){var i="",c="",u=t.split(/#|\?/),l=u[0],s=u.slice(1);l=(l=l.replace(/\/$/g,""))||"/";for(var f=0;f<s.length;f++){var h=t.split(s[f])[0];"?"===h[h.length-1]&&(c=s[f]),"#"===h[h.length-1]&&(i=s[f])}var d=function(t,o){for(var a,i,c=0,u=e(t),l=u.length,s=r.bind(r,u);c<o.length;c++)if(((i=(a=o[c]).length)===l||i<l&&2===a[i-1].type||i>l&&3===a[i-1].type)&&n(a,s))return a;return[]}(l,o.map(function(n){return n.matcher})),p=o.filter(function(n){return n.path===d[0].old})[0];return d[0]?Object.assign({},p,{params:a(l,d),hash:i,search:c,pathname:l,location:t}):null}/* harmony default export */ __webpack_exports__["default"] = (function(n,t){void 0===t&&(t=["*"]);var e,r=document.querySelector(n),a=[],l={};t=t.concat(t.indexOf("*")<0?"*":[]).reduce(function(n,t){return"function"==typeof t?(a.push(t),n):n.concat(t)},[]).map(function(n){return n.path?Object.assign({},n,{matcher:o(n.path)}):{path:n,matcher:o(n)}}),"scrollRestoration"in history&&(history.scrollRestoration="manual");var s=u(c(window.location.href),t),f=Object.assign({previousDocument:null},s);function h(n){return l[n]?l[n].map(function(n){return n(f)}):[]}function d(n,t,e,o){f.previousDocument=n.cloneNode(!0),Promise.all(a.concat(e.handler||[]).map(function(n){return n(f)})).then(function(){window.scrollTo(0,0),requestAnimationFrame(function(){r.innerHTML=t,h("after"),e.hash&&h("hash")})})}function p(t,e,r){if(!e)return window.location.href=t;fetch(t,{credentials:"include"}).then(function(n){return n.text()}).then(function(o){var a=(new window.DOMParser).parseFromString(o,"text/html"),c=[a,a.querySelector(n).innerHTML];i.set(t,c),r&&r(c[0],c[1],e)})}function g(n,t,r){e=function(){var e=i.get(n);e&&!1!==t.cache?d(e[0],e[1],t):p(n,t,d)},Object.assign(f,t),Promise.all(h("before")).then(e)}function v(n){var e=c(n);return[e,u(e,t)]}return document.body.addEventListener("click",function(n){if(!(n.ctrlKey||n.metaKey||n.altKey||n.shiftKey||n.defaultPrevented)){for(var t=n.target;t&&(!t.href||"A"!==t.nodeName);)t=t.parentNode;if(!t)return n;var e=v(t.href),r=e[0],o=e[1];return o.ignore?n:f.pathname===o.pathname&&o.hash?(n.preventDefault(),Object.assign(f,o),h("hash"),n):window.location.origin!==t.origin||t.hasAttribute("download")||"_blank"===t.target||/^(?:mailto|tel):/.test(t.href)||t.classList.contains("no-ajax")?n:(n.preventDefault(),f.location!==r&&g(r,o),h("navigate"),!1)}}),window.addEventListener("popstate",function(n){if(n.target.location.pathname!==f.pathname)return g.apply(void 0,v(n.target.location.href).concat([!0])),!1}),{get state(){return f},go:function(n){e=null,g.apply(void 0,v(n).concat([!1]))},load:function(n,t){return p.apply(void 0,v(n).concat([t]))},on:function(n,t){return l[n]=l[n]?l[n].concat(t):[t],function(){return l[n].slice(l[n].indexOf(t),1)}}}});
//# sourceMappingURL=operator.es.js.map


/***/ }),

/***/ "./node_modules/picoapp/dist/picoapp.es.js":
/*!*************************************************!*\
  !*** ./node_modules/picoapp/dist/picoapp.es.js ***!
  \*************************************************/
/*! exports provided: component, picoapp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "picoapp", function() { return c; });
var n=function(n){if("object"!=typeof(t=n)||Array.isArray(t))throw"state should be an object";var t},t=function(n,t,r,e){return(o=n,o.reduce(function(n,t,r){return n.indexOf(t)>-1?n:n.concat(t)},[])).reduce(function(n,r){return n.concat(t[r]||[])},[]).map(function(n){return n(r,e)});var o};function r(r){void 0===r&&(r={});var e={};return{getState:function(){return Object.assign({},r)},hydrate:function(o){return n(o),Object.assign(r,o),function(){var n=["*"].concat(Object.keys(o));t(n,e,r)}},on:function(n,t){return(n=[].concat(n)).map(function(n){return e[n]=(e[n]||[]).concat(t)}),function(){return n.map(function(n){return e[n].splice(e[n].indexOf(t),1)})}},emit:function(o,u,c){var i=("*"===o?[]:["*"]).concat(o);(u="function"==typeof u?u(r):u)&&(n(u),Object.assign(r,u),i=i.concat(Object.keys(u))),t(i,e,r,c)}}}r();var e=function(n){return"object"==typeof n&&!Array.isArray(n)},o=function(n){return"function"==typeof n};function u(n){return function(t,r){var e=[];return{subs:e,unmount:n(t,Object.assign({},r,{on:function(n,t){var o=r.on(n,t);return e.push(o),o}})),node:t}}}function c(n,t,u){void 0===n&&(n={}),void 0===t&&(t={}),void 0===u&&(u=[]);var c=r(t),i=[];return{on:c.on,emit:c.emit,getState:function(){return c.getState()},add:function(t){if(!e(t))throw"components should be an object";Object.assign(n,t)},use:function(n){if(!o(n))throw"plugins should be a function";u.push(n)},hydrate:function(n){return c.hydrate(n)},mount:function(t){void 0===t&&(t="data-component"),t=[].concat(t);for(var r=0;r<t.length;r++){for(var a=t[r],f=[].slice.call(document.querySelectorAll("["+a+"]")),s=function(){for(var t=f.pop(),r=t.getAttribute(a).split(/\s/),s=0;s<r.length;s++){var v=n[r[s]];if(v){t.removeAttribute(a);try{var d=u.reduce(function(n,r){var o=r(t,c);return e(o)?Object.assign(n,o):n},{}),m=v(t,Object.assign({},d,c));o(m.unmount)&&i.push(m)}catch(n){console.error(n),c.emit("error",{error:n}),c.hydrate({error:void 0})}}}};f.length;)s();c.emit("mount")}},unmount:function(){for(var n=i.length-1;n>-1;n--){var t=i[n],r=t.subs;(0,t.unmount)(t.node),r.map(function(n){return n()}),i.splice(n,1)}c.emit("unmount")}}}
//# sourceMappingURL=picoapp.es.js.map


/***/ }),

/***/ "./node_modules/sliced/index.js":
/*!**************************************!*\
  !*** ./node_modules/sliced/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * An Array.prototype.slice.call(arguments) alternative
 *
 * @param {Object} args something with a length
 * @param {Number} slice
 * @param {Number} sliceEnd
 * @api public
 */

module.exports = function (args, slice, sliceEnd) {
  var ret = [];
  var len = args.length;

  if (0 === len) return ret;

  var start = slice < 0
    ? Math.max(0, slice + len)
    : slice || 0;

  if (sliceEnd !== undefined) {
    len = sliceEnd < 0
      ? sliceEnd + len
      : sliceEnd
  }

  while (len-- > start) {
    ret[len - start] = args[len];
  }

  return ret;
}



/***/ }),

/***/ "./node_modules/srraf/dist/srraf.es.js":
/*!*********************************************!*\
  !*** ./node_modules/srraf/dist/srraf.es.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var n,e,i,o,t,r,f,d,p,u=[];function w(n,a){return e=window.pageXOffset,o=window.pageYOffset,r=window.innerHeight,d=window.innerWidth,void 0===i&&(i=e),void 0===t&&(t=o),void 0===p&&(p=d),void 0===f&&(f=r),(a||o!==t||e!==i||r!==f||d!==p)&&(!function(n){for(var w=0;w<u.length;w++)u[w]({x:e,y:o,px:i,py:t,vh:r,pvh:f,vw:d,pvw:p},n)}(n),i=e,t=o,f=r,p=d),requestAnimationFrame(w)}/* harmony default export */ __webpack_exports__["default"] = (function(e){return u.indexOf(e)<0&&u.push(e),n=n||w(performance.now()),{update:function(){return w(performance.now(),!0),this},destroy:function(){u.splice(u.indexOf(e),1)}}});
//# sourceMappingURL=srraf.es.js.map


/***/ }),

/***/ "./node_modules/unfetch/dist/unfetch.module.js":
/*!*****************************************************!*\
  !*** ./node_modules/unfetch/dist/unfetch.module.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})});
//# sourceMappingURL=unfetch.module.js.map


/***/ }),

/***/ "./node_modules/vsbl/dist/vsbl.es.js":
/*!*******************************************!*\
  !*** ./node_modules/vsbl/dist/vsbl.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var srraf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! srraf */ "./node_modules/srraf/dist/srraf.es.js");
/* harmony default export */ __webpack_exports__["default"] = (function(r,o){return void 0===o&&(o={}),function(e,n){var a=!1,i=parseFloat(r.getAttribute("data-threshold")||o.threshold||0);return Object(srraf__WEBPACK_IMPORTED_MODULE_0__["default"])(function(){for(var t=[],o=arguments.length;o--;)t[o]=arguments[o];var d=t[0],h=d.y,l=d.vh,p=r.getBoundingClientRect(),u=p.top+h,f=i>=.5?i:i*l,v=u+p.height-f>=h&&u+f<=h+l;v&&!a?(a=!0,e&&e.apply(void 0,t)):!v&&a&&(a=!1,n&&n.apply(void 0,t))})}});
//# sourceMappingURL=vsbl.es.js.map


/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/header.js */ "./src/scripts/components/header.js");
/* harmony import */ var _components_product_selection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/product-selection.js */ "./src/scripts/components/product-selection.js");
/* harmony import */ var _components_cartDrawer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/cartDrawer.js */ "./src/scripts/components/cartDrawer.js");
/* harmony import */ var _components_cartDrawerItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/cartDrawerItem.js */ "./src/scripts/components/cartDrawerItem.js");
/* harmony import */ var _components_accountLogin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/accountLogin.js */ "./src/scripts/components/accountLogin.js");
/* harmony import */ var _components_product_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/product.js */ "./src/scripts/components/product.js");
/* harmony import */ var _components_product_counter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/product-counter.js */ "./src/scripts/components/product-counter.js");
/* harmony import */ var _components_collectionList_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/collectionList.js */ "./src/scripts/components/collectionList.js");









var state = {
  cartOpen: false,
  menuOpen: false
};
var components = {
  accountLogin: _components_accountLogin_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  header: _components_header_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  productSelection: _components_product_selection_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  cartDrawer: _components_cartDrawer_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  cartDrawerItem: _components_cartDrawerItem_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  product: _components_product_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  productCounter: _components_product_counter_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  collectionList: _components_collectionList_js__WEBPACK_IMPORTED_MODULE_8__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["picoapp"])(components, state));

/***/ }),

/***/ "./src/scripts/components/accountLogin.js":
/*!************************************************!*\
  !*** ./src/scripts/components/accountLogin.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (node, ctx) {
  var login = node.querySelector('.js-login-dialog');
  var recover = node.querySelector('.js-recover-dialog');
  var recoverLink = node.querySelector('.js-recover-trigger');
  var cancelRecoverLink = node.querySelector('.js-recover-cancel');
  /* eslint-disable */

  var recoverIsTarget = window.location.hash.match(/\#recover/) ? true : false;
  /* eslint-enable */

  var successMessage = node.querySelector('.js-recover-success') !== null;

  if (recoverIsTarget || successMessage) {
    login.style.display = 'none';
    recover.style.display = 'block';
  } else {
    login.style.display = 'block';
  }

  recoverLink.addEventListener('click', function (e) {
    e.preventDefault();
    login.style.display = 'none';
    recover.style.display = 'block';
  });
  cancelRecoverLink.addEventListener('click', function (e) {
    e.preventDefault();
    recover.style.display = 'none';
    login.style.display = 'block';
  });
}));

/***/ }),

/***/ "./src/scripts/components/cartDrawer.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/cartDrawer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var _lib_images_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/images.js */ "./src/scripts/lib/images.js");
/* harmony import */ var _lib_currency_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/currency.js */ "./src/scripts/lib/currency.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app.js */ "./src/scripts/app.js");





var X = "<svg viewBox=\"0 0 16 16\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"currentcolor\" stroke-width=\"3\" style=\"display:inline-block;vertical-align:middle;overflow:visible;\"><path d=\"M1.0606601717798212 1.0606601717798212 L14.939339828220179 14.939339828220179\"></path><path d=\"M14.939339828220179 1.0606601717798212 L1.0606601717798212 14.939339828220179\"></path></svg>";

function createItem(_ref) {
  var id = _ref.variant_id,
      title = _ref.product_title,
      price = _ref.line_price,
      color = _ref.variant_title,
      image = _ref.image,
      url = _ref.url,
      quantity = _ref.quantity,
      item = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["variant_id", "product_title", "line_price", "variant_title", "image", "url", "quantity"]);

  var img = image ? Object(_lib_images_js__WEBPACK_IMPORTED_MODULE_2__["getSizedImageUrl"])(image.replace('.' + Object(_lib_images_js__WEBPACK_IMPORTED_MODULE_2__["imageSize"])(image), ''), '200x' // TODO hacky af
  ) : 'https://source.unsplash.com/R9OS29xJb-8/2000x1333';
  return "\n<div class='cart-drawer__item' data-component='cartDrawerItem' data-id=".concat(id, ">\n  <div class='f aic'>\n    <a href='").concat(url, "'>\n      <img src='").concat(img, "' />\n    </a>\n    <div class='__content pl1 f y ais jcb'>\n      <div>\n        <a href='").concat(url, "' class='serif mv0 p mv0'>").concat(title, "</a>\n        <div class='small sans track mt025 mb05 book'>").concat(Object(_lib_currency_js__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(price), "</div>\n        <div class='f aic'>\n          <div class='cart-quantity js-remove-single px05'>-</div>\n          <div class='js-single-quantity'>").concat(quantity, "</div>\n          <div class='cart-quantity js-add-single px05'>+</div>\n        </div>\n        ").concat(color ? "<div class='xsmall sans caps track cm mv025 book'>".concat(color.split(':')[0], "</div>") : "", "\n      </div>\n\n      <button class='button--reset js-remove-item'>").concat(X, "</button>\n    </div>\n  </div>\n</div>\n");
}

function renderItems(items) {
  return items.length > 0 ? items.reduce(function (markup, item) {
    markup += createItem(item);
    return markup;
  }, '') : "<div class='pv1'><p class='pv1 mv05 sans small cm i ac'>Your cart is empty</p></div>";
}

/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_1__["component"])(function (node, ctx) {
  var overlay = node.querySelector('.js-overlay');
  var closeButton = node.querySelector('.js-close');
  var subtotal = node.querySelector('.js-subtotal');
  var itemsRoot = node.querySelector('.js-items');
  var loading = itemsRoot.innerHTML;

  var render = function render(cart) {
    itemsRoot.innerHTML = renderItems(cart.items);
    subtotal.innerHTML = Object(_lib_currency_js__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(cart.total_price);
  };

  var open = function open(cart) {
    node.classList.add('is-active');
    itemsRoot.innerHTML = loading;
    setTimeout(function () {
      node.classList.add('is-visible');
      setTimeout(render(cart), 10);
      _app_js__WEBPACK_IMPORTED_MODULE_4__["default"].mount();
    }, 50);
  };

  var close = function close() {
    node.classList.remove('is-visible');
    setTimeout(function () {
      node.classList.remove('is-active');
      _app_js__WEBPACK_IMPORTED_MODULE_4__["default"].hydrate({
        cartOpen: false
      });
    }, 400);
  };

  render(ctx.getState().cart);
  overlay.addEventListener('click', close);
  closeButton.addEventListener('click', close);
  ctx.on('cart:toggle', function (_ref2) {
    var cart = _ref2.cart,
        cartOpen = _ref2.cartOpen;
    cartOpen && open(cart);
  });
  ctx.on('cart:updated', function () {
    render(ctx.getState().cart);
    _app_js__WEBPACK_IMPORTED_MODULE_4__["default"].mount();
  });
}));

/***/ }),

/***/ "./src/scripts/components/cartDrawerItem.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/cartDrawerItem.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var _lib_cart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/cart.js */ "./src/scripts/lib/cart.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (node, ctx) {
  var button = node.querySelector('.js-remove-item');
  var decrease = node.querySelector('.js-remove-single');
  var increase = node.querySelector('.js-add-single');
  var currentQty = node.querySelector('.js-single-quantity').innerHTML;
  var id = node.getAttribute('data-id');
  button.addEventListener('click', function (e) {
    e.preventDefault();
    Object(_lib_cart_js__WEBPACK_IMPORTED_MODULE_1__["removeAddon"])(id);
  });
  decrease.addEventListener('click', function (e) {
    e.preventDefault();
    Object(_lib_cart_js__WEBPACK_IMPORTED_MODULE_1__["updateAddon"])(id, parseInt(currentQty) - 1);
  });
  increase.addEventListener('click', function (e) {
    e.preventDefault();
    Object(_lib_cart_js__WEBPACK_IMPORTED_MODULE_1__["updateAddon"])(id, parseInt(currentQty) + 1);
  });
}));

/***/ }),

/***/ "./src/scripts/components/collectionList.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/collectionList.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (node, ctx) {
  var filter = node.querySelector('#filter-category');
  var filterChild = node.querySelector('.filters-toolbar__sub_menu');
  filter.addEventListener('click', function (e) {
    filterChild.classList.toggle('open');
    filter.classList.toggle('open');
  });
  return function (node) {
    console.log('filter unmounted');
  };
}));

/***/ }),

/***/ "./src/scripts/components/header.js":
/*!******************************************!*\
  !*** ./src/scripts/components/header.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (node, ctx) {
  var cartCount = node.querySelector('.js-cart-count');
  var cartToggles = node.querySelectorAll('.js-cart-drawer-toggle');
  var swatches = node.querySelectorAll('.cart-swatch');
  var parentMenuItems = node.querySelectorAll('.menu-parent');
  var hamburger = node.querySelectorAll('#hamburger');
  var mobileMenu = node.querySelectorAll('#mobile-menu');
  var parentMenuItemsMobile = node.querySelectorAll('.menu-parent'); //DESKTOP MENU CLICK

  for (var i = 0; i < parentMenuItems.length; i++) {
    var child = parentMenuItems[i].parentElement.querySelectorAll('[data-parent]'); // console.log(parentMenuItems, child)

    parentMenuItems[i].addEventListener('click', function (e) {
      e.preventDefault();
      ctx.emit('menu:open', function (state) {
        return {
          menuOpen: true
        };
      });
    });
    ctx.on('menu:open', function (state) {
      // console.log(parentMenuItems[i])
      child[0] !== undefined ? child[0].classList.toggle('open') : null;
    });
    ctx.on('menu:close', function (state) {
      child[0] !== undefined ? child[0].classList.toggle('open') : null;
    });
  } //mobile triggger


  hamburger[0].addEventListener('click', function (e) {
    e.preventDefault();
    hamburger[0].classList.toggle('is-active'); // console.log(mobileMenu, hamburger)

    mobileMenu[0].classList.toggle('is-active');
  }); //SITE COLOUR

  if (localStorage.getItem('siteColour') !== null) {
    localStorage.getItem('siteColour') === 'dark' ? document.body.className = 'bg-dark c-light' : document.body.className = 'c-dark bg-light';
  } //COLOUR SWITCH


  var _loop = function _loop(_i) {
    swatches[_i].addEventListener('click', function (e) {
      e.preventDefault();

      if (swatches[_i].getAttribute('data-colour') == 'dark') {
        document.body.className = 'bg-dark c-light';
        localStorage.setItem('siteColour', 'dark');
      } else if (swatches[_i].getAttribute('data-colour') == 'light') {
        document.body.className = 'c-dark bg-light';
        localStorage.setItem('siteColour', 'light');
      }
    });
  };

  for (var _i = 0; _i < swatches.length; _i++) {
    _loop(_i);
  } //CART TOGGLE


  for (var _i2 = 0; _i2 < cartToggles.length; _i2++) {
    cartToggles[_i2].addEventListener('click', function (e) {
      e.preventDefault();
      ctx.emit('cart:toggle', function (state) {
        return {
          cartOpen: !state.cartOpen
        };
      });
    });
  } //CART UPDATE


  ctx.on('cart:updated', function (state) {
    cartCount.innerHTML = state.cart.item_count;
  });
  cartCount.innerHTML = ctx.getState().cart.item_count;
}));

/***/ }),

/***/ "./src/scripts/components/product-counter.js":
/*!***************************************************!*\
  !*** ./src/scripts/components/product-counter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (node, ctx) {
  var decrease = node.querySelector('.js-counter-remove');
  var increase = node.querySelector('.js-counter-add');
  var quantity = node.querySelector('.js-counter-quantity');
  var min = parseInt(quantity.attributes.min.value);
  var max = parseInt(quantity.attributes.max.value);
  var count = parseInt(quantity.value);

  var set = function set(i) {
    count = Math.max(min, Math.min(i, max || 10000));
    quantity.value = count;
  };

  decrease.addEventListener('click', function (e) {
    e.preventDefault();
    set(--count);
  });
  increase.addEventListener('click', function (e) {
    e.preventDefault();
    set(++count);
  });
}));

/***/ }),

/***/ "./src/scripts/components/product-selection.js":
/*!*****************************************************!*\
  !*** ./src/scripts/components/product-selection.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var _lib_cart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/cart.js */ "./src/scripts/lib/cart.js");
/* harmony import */ var _lib_radio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/radio.js */ "./src/scripts/lib/radio.js");
/* harmony import */ var _lib_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/options.js */ "./src/scripts/lib/options.js");
/* harmony import */ var _lib_getProductJson_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/getProductJson.js */ "./src/scripts/lib/getProductJson.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (_ref) {
  var node = _ref.node;
  var opts = Object(_lib_options_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node); // cache

  Object(_lib_getProductJson_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  opts.onUpdate(function (state) {
    Object(_lib_getProductJson_js__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (json) {
      var variant = json.variants.filter(function (v) {
        return v.id == state.id;
      })[0];
    });
  });
}));

/***/ }),

/***/ "./src/scripts/components/product.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/product.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var _lib_cart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/cart.js */ "./src/scripts/lib/cart.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (node, ctx) {
  var json = JSON.parse(node.querySelector('.js-product-json').innerHTML);
  var form = node.querySelector('form');
  var selectedOrFirstAvailableVariant = json.selectedOrFirstAvailableVariant,
      product = json.product;
  var currentVariant = product.variants.filter(function (v) {
    return v.id === selectedOrFirstAvailableVariant;
  })[0];
  var currentInventory = json.inventory.filter(function (v) {
    return v.id === currentVariant.id;
  })[0];
  console.log(json);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    currentVariant = product.variants.filter(function (v) {
      return v.id === parseInt(form.elements.id.value);
    })[0];
    currentInventory = json.inventory.filter(function (v) {
      return v.id === currentVariant.id;
    })[0];
    Object(_lib_cart_js__WEBPACK_IMPORTED_MODULE_1__["addVariant"])(currentVariant, form.elements.quantity.value, currentInventory);
  });
  ctx.on("cartError", function (_ref) {
    var error = _ref.error;
    console.log("cartError", error);
  });
}));

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_select_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/select.js */ "./src/scripts/lib/select.js");
/* harmony import */ var lazim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazim */ "./node_modules/lazim/dist/lazim.es.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app.js */ "./src/scripts/app.js");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/router.js */ "./src/scripts/router.js");
/* harmony import */ var _lib_cart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/cart.js */ "./src/scripts/lib/cart.js");







/**
 * store binding fn
 */

var images = Object(lazim__WEBPACK_IMPORTED_MODULE_3__["default"])();
/**
 * bind on page load
 */

images();
_router_js__WEBPACK_IMPORTED_MODULE_5__["default"].on('before', function () {
  if (_app_js__WEBPACK_IMPORTED_MODULE_4__["default"].getState().menuOpen === true) {
    _app_js__WEBPACK_IMPORTED_MODULE_4__["default"].emit('menu:close', function (state) {
      return {
        menuOpen: false
      };
    });
  }
});
_router_js__WEBPACK_IMPORTED_MODULE_5__["default"].on('after', function () {
  _app_js__WEBPACK_IMPORTED_MODULE_4__["default"].unmount();
  _app_js__WEBPACK_IMPORTED_MODULE_4__["default"].mount();
  /**
   * bind new images
   */

  images();
});
/**
 * load any data that your site needs on fist load
 */

Promise.all([Object(_lib_cart_js__WEBPACK_IMPORTED_MODULE_6__["fetchCart"])()]).then(function (_ref) {
  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 1),
      cart = _ref2[0];

  /**
   * add the cart data to the picoapp instance
   */
  _app_js__WEBPACK_IMPORTED_MODULE_4__["default"].hydrate({
    cart: cart
  });
  /**
   * mount any components defined on the page
   */

  _app_js__WEBPACK_IMPORTED_MODULE_4__["default"].mount();
});

/***/ }),

/***/ "./src/scripts/lib/cart.js":
/*!*********************************!*\
  !*** ./src/scripts/lib/cart.js ***!
  \*********************************/
/*! exports provided: addVariant, updateAddon, removeAddon, addItemById, fetchCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVariant", function() { return addVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAddon", function() { return updateAddon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAddon", function() { return removeAddon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemById", function() { return addItemById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCart", function() { return fetchCart; });
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.module.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app.js */ "./src/scripts/app.js");


function addVariant(variant, quantity, inventory) {
  // const numAvailable = variant.inventory_policy === 'deny' && variant.inventory_management === 'shopify' ? (
  //   variant.inventory_quantity
  // ) : null // null means they can add as many as they want
  var numAvailable = variant.inventory_management === 'shopify' ? inventory.amountAvailable : null;
  return fetchCart().then(function (_ref) {
    var items = _ref.items;
    var numInCart = items.filter(function (v) {
      return v.id === variant.id;
    })[0];
    numInCart = numInCart !== undefined ? numInCart.quantity : 0;
    console.log(numInCart, parseInt(quantity), inventory.amountAvailable);

    if (inventory.amountAvailable !== null && numInCart + parseInt(quantity) > inventory.amountAvailable) {
      var err = "There are only ".concat(inventory.amountAvailable, " of that product available, requested ").concat(parseInt(quantity), ".");
      console.log("error");
      _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cartError', {
        error: err
      }); // throw new Error(err)
    } else {
      console.log("add");
      return addItemById(variant.id, quantity);
    }
  });
}
function updateAddon(id, quantity) {
  return fetchCart().then(function (_ref2) {
    var items = _ref2.items;

    for (var i = 0; i < items.length; i++) {
      if (items[i].variant_id === parseInt(id)) {
        return changeAddon(i + 1, quantity); // shopify cart is a 1-based index
      }
    }
  });
}
function removeAddon(id) {
  return updateAddon(id, 0);
}

function changeAddon(line, quantity) {
  _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart:updating');
  return Object(unfetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/cart/change.js', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      line: line,
      quantity: quantity
    })
  }).then(function (res) {
    return res.json();
  }).then(function (cart) {
    _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].hydrate({
      cart: cart
    });
    _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart:updated', {
      cart: cart
    });
    return cart;
  });
}
/**
 * Warning: this does not check available products first
 */


function addItemById(id, quantity) {
  _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart:updating');
  return Object(unfetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/cart/add.js', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      quantity: quantity
    })
  }).then(function (r) {
    return r.json();
  }).then(function (item) {
    return fetchCart().then(function (cart) {
      _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].hydrate({
        cart: cart
      });
      _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart:updated');
      _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart:toggle', function (state) {
        return {
          cartOpen: !state.cartOpen
        };
      }); // app.emit('updated', { item, cart })

      return {
        item: item,
        cart: cart
      };
    });
  });
}
function fetchCart() {
  return Object(unfetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/cart.js', {
    method: 'GET',
    credentials: 'include'
  }).then(function (r) {
    return r.json();
  })["catch"](function (e) {
    console.log(e);
  });
}

/***/ }),

/***/ "./src/scripts/lib/currency.js":
/*!*************************************!*\
  !*** ./src/scripts/lib/currency.js ***!
  \*************************************/
/*! exports provided: formatMoney */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */

/**
 * Format money values based on your shop currency settings
 * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
 * or 3.00 dollars
 * @param  {String} format - shop money_format setting
 * @return {String} value - formatted value
 */

/* eslint-disable */
function formatMoney(cents) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '${{amount}}';

  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }

  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = precision || 2;
    thousands = thousands || ',';
    decimal = decimal || '.';

    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);
    var parts = number.split('.');
    var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
    var centsAmount = parts[1] ? decimal + parts[1] : '';
    return dollarsAmount + centsAmount;
  }

  switch (format.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;

    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;

    case 'amount_with_space_separator':
      value = formatWithDelimiters(cents, 2, ' ', '.');
      break;

    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, ',', '.');
      break;

    case 'amount_no_decimals_with_space_separator':
      value = formatWithDelimiters(cents, 0, ' ');
      break;
  }

  return format.replace(placeholderRegex, value);
}

/***/ }),

/***/ "./src/scripts/lib/getProductJson.js":
/*!*******************************************!*\
  !*** ./src/scripts/lib/getProductJson.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getProductJson; });
var cache = {};
function getProductJson() {
  var slug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.pathname.split('/').reverse()[0];
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (cache[slug] && !opts.refetch) return Promise.resolve(cache[slug]);
  return fetch(window.location.origin + '/products/' + slug + '.json').then(function (res) {
    return res.json();
  }).then(function (_ref) {
    var product = _ref.product;
    cache[slug] = product;
    return product;
  });
}

/***/ }),

/***/ "./src/scripts/lib/images.js":
/*!***********************************!*\
  !*** ./src/scripts/lib/images.js ***!
  \***********************************/
/*! exports provided: preload, loadImage, imageSize, getSizedImageUrl, removeProtocol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageSize", function() { return imageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizedImageUrl", function() { return getSizedImageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProtocol", function() { return removeProtocol; });
/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

/**
 * Preloads an image in memory and uses the browsers cache to store it until needed.
 *
 * @param {Array} images - A list of image urls
 * @param {String} size - A shopify image size attribute
 */
function preload(images, size) {
  if (typeof images === 'string') {
    images = [images];
  }

  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    loadImage(getSizedImageUrl(image, size));
  }
}
/**
 * Loads and caches an image in the browsers cache.
 * @param {string} path - An image url
 */

function loadImage(path) {
  /* eslint-disable */
  new Image().src = path;
  /* eslint-enable */
}
/**
 * Find the Shopify image attribute size
 *
 * @param {string} src
 * @returns {null}
 */

function imageSize(src) {
  /* eslint-disable */
  var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
  /* esling-enable */

  if (match) {
    return match[1];
  } else {
    return null;
  }
}
/**
 * Adds a Shopify size attribute to a URL
 *
 * @param src
 * @param size
 * @returns {*}
 */

function getSizedImageUrl(src, size) {
  if (size === null) {
    return src;
  }

  if (size === 'master') {
    return removeProtocol(src);
  }

  var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

  if (match) {
    var prefix = src.split(match[0]);
    var suffix = match[0];
    return removeProtocol(prefix[0] + '_' + size + suffix);
  } else {
    return null;
  }
}
function removeProtocol(path) {
  return path.replace(/http(s)?:/, '');
}

/***/ }),

/***/ "./src/scripts/lib/options.js":
/*!************************************!*\
  !*** ./src/scripts/lib/options.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return productSelection; });
/* harmony import */ var _lib_radio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/radio.js */ "./src/scripts/lib/radio.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function productSelection(node, opts) {
  opts = Object.assign({
    select: '[data-option-select]',
    radio: '[data-option-radio]',
    main: '[data-option-main]'
  }, opts);
  console.log(node, opts);
  var listeners = [];
  var state = {
    id: null,
    options: []
  };
  var selects = slater.qsa(opts.select);
  var radios = slater.qsa(opts.radio);
  var main = slater.qs(opts.main);
  if (!main || !main.length) throw 'data-option-main is missing';
  if (radios.length > 3) throw 'you have more than three radio groups';
  if (selects.length > 3) throw 'you have more than three select inputs';
  var variants = [].slice.call(main.children).reduce(function (variants, child) {
    variants[child.innerHTML] = child.value;
    return variants;
  }, {});
  selects.forEach(function (select) {
    if (select.nodeName !== 'SELECT') throw 'data-option-select should be defined on the individual option selectors';
    var index = parseInt(select.getAttribute('data-index')); // set initial value

    state.options[index] = select.value;
    select.addEventListener('change', function (e) {
      state.options[index] = e.target.value;
      updateSelection();
    });
  });
  radios.forEach(function (r) {
    if (r.nodeName === 'INPUT') throw 'data-option-radio should be defined on a parent of the radio group, not the inputs themselves';
    var index = parseInt(r.getAttribute('data-index'));
    var inputs = [].slice.call(r.getElementsByTagName('input')); // set initial value

    inputs.forEach(function (r) {
      if (r.checked) state.options[index] = r.value;
    });
    Object(_lib_radio_js__WEBPACK_IMPORTED_MODULE_0__["default"])(inputs, function (value) {
      state.options[index] = value;
      updateSelection();
    });
  });
  updateSelection();

  function updateSelection() {
    state.id = variants[state.options.join(' / ')];
    main.value = state.id;

    var _iterator = _createForOfIteratorHelper(listeners),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var fn = _step.value;
        fn(state);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return {
    get state() {
      return state;
    },

    onUpdate: function onUpdate(fn) {
      listeners.indexOf(fn) < 0 && listeners.push(fn);
      return function () {
        return listeners.splice(listeners.indexOf(fn), 1);
      };
    }
  };
}

/***/ }),

/***/ "./src/scripts/lib/radio.js":
/*!**********************************!*\
  !*** ./src/scripts/lib/radio.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return radio; });
function radio(radios, cb) {
  radios.map(function (r) {
    return r.onclick = function (e) {
      return cb(e.target.value);
    };
  });
}

/***/ }),

/***/ "./src/scripts/lib/select.js":
/*!***********************************!*\
  !*** ./src/scripts/lib/select.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sliced__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sliced */ "./node_modules/sliced/index.js");
/* harmony import */ var sliced__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sliced__WEBPACK_IMPORTED_MODULE_0__);

window.slater = Object.assign(window.slater || {}, {
  qs: function qs(q, ctx) {
    return (ctx || document).querySelector(q);
  },
  qsa: function qsa(q, ctx) {
    return sliced__WEBPACK_IMPORTED_MODULE_0___default()((ctx || document).querySelectorAll(q));
  },
  gebtn: function gebtn(q, ctx) {
    return sliced__WEBPACK_IMPORTED_MODULE_0___default()((ctx || document).getElementsByTagName(q));
  },
  gebi: function gebi(q) {
    return document.getElementById(q);
  }
});

/***/ }),

/***/ "./src/scripts/router.js":
/*!*******************************!*\
  !*** ./src/scripts/router.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! operator */ "./node_modules/operator/dist/operator.es.js");

/**
 * operator is a tiny "PJAX" library, please have a look at the docs for
 * more info
 *
 * @see https://github.com/estrattonbailey/operator
 */

var router = Object(operator__WEBPACK_IMPORTED_MODULE_0__["default"])('#root', [
/**
 * creates a page transition
 * @see https://github.com/estrattonbailey/operator#transition-animation
 */
function (state) {
  return new Promise(function (res) {
    document.body.classList.add('is-transitioning');
    setTimeout(res, 200);
    setTimeout(function () {
      return document.body.classList.remove('is-transitioning');
    }, 300);
  });
}]);
router.on('after', function (_ref) {
  var previousDocument = _ref.previousDocument,
      location = _ref.location;
  document.title = previousDocument.title;
  window.history.pushState({}, '', location);
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXppbS9kaXN0L2xhemltLmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vcGVyYXRvci9kaXN0L29wZXJhdG9yLmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9waWNvYXBwL2Rpc3QvcGljb2FwcC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpY2VkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zcnJhZi9kaXN0L3NycmFmLmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmZldGNoL2Rpc3QvdW5mZXRjaC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzYmwvZGlzdC92c2JsLmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2FjY291bnRMb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2NhcnREcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9jYXJ0RHJhd2VySXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2NvbGxlY3Rpb25MaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdC1jb3VudGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdC1zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xpYi9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xpYi9jdXJyZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9saWIvZ2V0UHJvZHVjdEpzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGliL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9saWIvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9saWIvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGliL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwidmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgPSByZXF1aXJlKFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJpbXBvcnQgdCBmcm9tXCJ2c2JsXCI7ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiZGF0YS1zcmNcIiksZnVuY3Rpb24oKXtmb3IodmFyIG89ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltcIitlK1wiXVwiKSxpPWZ1bmN0aW9uKGkpe3ZhciBuPW9baV0sYT1cIklNR1wiPT09bi5ub2RlTmFtZT9uOm4uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIilbMF0scj1uLmdldEF0dHJpYnV0ZShlKTthLm9ubG9hZD1mdW5jdGlvbigpe24uY2xhc3NMaXN0LmFkZChcImlzLWxvYWRlZFwiKX0sbi5yZW1vdmVBdHRyaWJ1dGUoZSksdChuKShmdW5jdGlvbigpe24uY2xhc3NMaXN0LmFkZChcImlzLXZpc2libGVcIiksYS5zcmM9cn0pLnVwZGF0ZSgpfSxuPTA7bjxvLmxlbmd0aDtuKyspaShuKX19XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sYXppbS5lcy5qcy5tYXBcbiIsImZ1bmN0aW9uIG4obix0KXtmb3IodmFyIGU9MCxyPW4ubGVuZ3RoO2U8cjtlKyspaWYoIXQobltlXSxlLG4pKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIHQobil7aWYoXCIvXCI9PT1uKXJldHVybiBuOzQ3PT09bi5jaGFyQ29kZUF0KDApJiYobj1uLnN1YnN0cmluZygxKSk7dmFyIHQ9bi5sZW5ndGgtMTtyZXR1cm4gNDc9PT1uLmNoYXJDb2RlQXQodCk/bi5zdWJzdHJpbmcoMCx0KTpufWZ1bmN0aW9uIGUobil7cmV0dXJuXCIvXCI9PT0obj10KG4pKT9bXCIvXCJdOm4uc3BsaXQoXCIvXCIpfWZ1bmN0aW9uIHIobix0LGUpe3JldHVybiB0LnZhbD09PShlPW5bZV0pJiYwPT09dC50eXBlfHwoXCIvXCI9PT1lP3QudHlwZT4xOjAhPT10LnR5cGUmJihlfHxcIlwiKS5lbmRzV2l0aCh0LmVuZCkpfWZ1bmN0aW9uIG8obil7aWYoXCIvXCI9PT1uKXJldHVyblt7b2xkOm4sdHlwZTowLHZhbDpuLGVuZDpcIlwifV07Zm9yKHZhciBlLHIsbyxhLGk9dChuKSxjPS0xLHU9MCxsPWkubGVuZ3RoLHM9W107KytjPGw7KWlmKDU4IT09KGU9aS5jaGFyQ29kZUF0KGMpKSlpZig0MiE9PWUpe2Zvcih1PWM7YzxsJiY0NyE9PWkuY2hhckNvZGVBdChjKTspKytjO3MucHVzaCh7b2xkOm4sdHlwZTowLHZhbDppLnN1YnN0cmluZyh1LGMpLGVuZDpcIlwifSksaT1pLnN1YnN0cmluZyhjKSxsLT1jLGM9dT0wfWVsc2Ugcy5wdXNoKHtvbGQ6bix0eXBlOjIsdmFsOmkuc3Vic3RyaW5nKGMpLGVuZDpcIlwifSk7ZWxzZXtmb3IodT1jKzEsbz0xLHI9MCxhPVwiXCI7YzxsJiY0NyE9PWkuY2hhckNvZGVBdChjKTspNjM9PT0oZT1pLmNoYXJDb2RlQXQoYykpPyhyPWMsbz0zKTo0Nj09PWUmJjA9PT1hLmxlbmd0aCYmKGE9aS5zdWJzdHJpbmcocj1jKSksYysrO3MucHVzaCh7b2xkOm4sdHlwZTpvLHZhbDppLnN1YnN0cmluZyh1LHJ8fGMpLGVuZDphfSksaT1pLnN1YnN0cmluZyhjKSxsLT1jLGM9MH1yZXR1cm4gc31mdW5jdGlvbiBhKG4sdCl7Zm9yKHZhciByLG8sYT0wLGk9ZShuKSxjPXt9O2E8dC5sZW5ndGg7YSsrKW89dFthXSxcIi9cIiE9PShyPWlbYV0pJiZ2b2lkIDAhPT1yJiYhMXxvLnR5cGUmJihjW28udmFsXT1yLnJlcGxhY2Uoby5lbmQsXCJcIikpO3JldHVybiBjfXZhciBpPW5ldyBNYXA7ZnVuY3Rpb24gYyhuKXtyZXR1cm4gbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXCJcIil9ZnVuY3Rpb24gdSh0LG8pe3ZhciBpPVwiXCIsYz1cIlwiLHU9dC5zcGxpdCgvI3xcXD8vKSxsPXVbMF0scz11LnNsaWNlKDEpO2w9KGw9bC5yZXBsYWNlKC9cXC8kL2csXCJcIikpfHxcIi9cIjtmb3IodmFyIGY9MDtmPHMubGVuZ3RoO2YrKyl7dmFyIGg9dC5zcGxpdChzW2ZdKVswXTtcIj9cIj09PWhbaC5sZW5ndGgtMV0mJihjPXNbZl0pLFwiI1wiPT09aFtoLmxlbmd0aC0xXSYmKGk9c1tmXSl9dmFyIGQ9ZnVuY3Rpb24odCxvKXtmb3IodmFyIGEsaSxjPTAsdT1lKHQpLGw9dS5sZW5ndGgscz1yLmJpbmQocix1KTtjPG8ubGVuZ3RoO2MrKylpZigoKGk9KGE9b1tjXSkubGVuZ3RoKT09PWx8fGk8bCYmMj09PWFbaS0xXS50eXBlfHxpPmwmJjM9PT1hW2ktMV0udHlwZSkmJm4oYSxzKSlyZXR1cm4gYTtyZXR1cm5bXX0obCxvLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gbi5tYXRjaGVyfSkpLHA9by5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIG4ucGF0aD09PWRbMF0ub2xkfSlbMF07cmV0dXJuIGRbMF0/T2JqZWN0LmFzc2lnbih7fSxwLHtwYXJhbXM6YShsLGQpLGhhc2g6aSxzZWFyY2g6YyxwYXRobmFtZTpsLGxvY2F0aW9uOnR9KTpudWxsfWV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG4sdCl7dm9pZCAwPT09dCYmKHQ9W1wiKlwiXSk7dmFyIGUscj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG4pLGE9W10sbD17fTt0PXQuY29uY2F0KHQuaW5kZXhPZihcIipcIik8MD9cIipcIjpbXSkucmVkdWNlKGZ1bmN0aW9uKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD8oYS5wdXNoKHQpLG4pOm4uY29uY2F0KHQpfSxbXSkubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBuLnBhdGg/T2JqZWN0LmFzc2lnbih7fSxuLHttYXRjaGVyOm8obi5wYXRoKX0pOntwYXRoOm4sbWF0Y2hlcjpvKG4pfX0pLFwic2Nyb2xsUmVzdG9yYXRpb25cImluIGhpc3RvcnkmJihoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uPVwibWFudWFsXCIpO3ZhciBzPXUoYyh3aW5kb3cubG9jYXRpb24uaHJlZiksdCksZj1PYmplY3QuYXNzaWduKHtwcmV2aW91c0RvY3VtZW50Om51bGx9LHMpO2Z1bmN0aW9uIGgobil7cmV0dXJuIGxbbl0/bFtuXS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIG4oZil9KTpbXX1mdW5jdGlvbiBkKG4sdCxlLG8pe2YucHJldmlvdXNEb2N1bWVudD1uLmNsb25lTm9kZSghMCksUHJvbWlzZS5hbGwoYS5jb25jYXQoZS5oYW5kbGVyfHxbXSkubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBuKGYpfSkpLnRoZW4oZnVuY3Rpb24oKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyLmlubmVySFRNTD10LGgoXCJhZnRlclwiKSxlLmhhc2gmJmgoXCJoYXNoXCIpfSl9KX1mdW5jdGlvbiBwKHQsZSxyKXtpZighZSlyZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY9dDtmZXRjaCh0LHtjcmVkZW50aWFsczpcImluY2x1ZGVcIn0pLnRoZW4oZnVuY3Rpb24obil7cmV0dXJuIG4udGV4dCgpfSkudGhlbihmdW5jdGlvbihvKXt2YXIgYT0obmV3IHdpbmRvdy5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhvLFwidGV4dC9odG1sXCIpLGM9W2EsYS5xdWVyeVNlbGVjdG9yKG4pLmlubmVySFRNTF07aS5zZXQodCxjKSxyJiZyKGNbMF0sY1sxXSxlKX0pfWZ1bmN0aW9uIGcobix0LHIpe2U9ZnVuY3Rpb24oKXt2YXIgZT1pLmdldChuKTtlJiYhMSE9PXQuY2FjaGU/ZChlWzBdLGVbMV0sdCk6cChuLHQsZCl9LE9iamVjdC5hc3NpZ24oZix0KSxQcm9taXNlLmFsbChoKFwiYmVmb3JlXCIpKS50aGVuKGUpfWZ1bmN0aW9uIHYobil7dmFyIGU9YyhuKTtyZXR1cm5bZSx1KGUsdCldfXJldHVybiBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKG4pe2lmKCEobi5jdHJsS2V5fHxuLm1ldGFLZXl8fG4uYWx0S2V5fHxuLnNoaWZ0S2V5fHxuLmRlZmF1bHRQcmV2ZW50ZWQpKXtmb3IodmFyIHQ9bi50YXJnZXQ7dCYmKCF0LmhyZWZ8fFwiQVwiIT09dC5ub2RlTmFtZSk7KXQ9dC5wYXJlbnROb2RlO2lmKCF0KXJldHVybiBuO3ZhciBlPXYodC5ocmVmKSxyPWVbMF0sbz1lWzFdO3JldHVybiBvLmlnbm9yZT9uOmYucGF0aG5hbWU9PT1vLnBhdGhuYW1lJiZvLmhhc2g/KG4ucHJldmVudERlZmF1bHQoKSxPYmplY3QuYXNzaWduKGYsbyksaChcImhhc2hcIiksbik6d2luZG93LmxvY2F0aW9uLm9yaWdpbiE9PXQub3JpZ2lufHx0Lmhhc0F0dHJpYnV0ZShcImRvd25sb2FkXCIpfHxcIl9ibGFua1wiPT09dC50YXJnZXR8fC9eKD86bWFpbHRvfHRlbCk6Ly50ZXN0KHQuaHJlZil8fHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tYWpheFwiKT9uOihuLnByZXZlbnREZWZhdWx0KCksZi5sb2NhdGlvbiE9PXImJmcocixvKSxoKFwibmF2aWdhdGVcIiksITEpfX0pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIixmdW5jdGlvbihuKXtpZihuLnRhcmdldC5sb2NhdGlvbi5wYXRobmFtZSE9PWYucGF0aG5hbWUpcmV0dXJuIGcuYXBwbHkodm9pZCAwLHYobi50YXJnZXQubG9jYXRpb24uaHJlZikuY29uY2F0KFshMF0pKSwhMX0pLHtnZXQgc3RhdGUoKXtyZXR1cm4gZn0sZ286ZnVuY3Rpb24obil7ZT1udWxsLGcuYXBwbHkodm9pZCAwLHYobikuY29uY2F0KFshMV0pKX0sbG9hZDpmdW5jdGlvbihuLHQpe3JldHVybiBwLmFwcGx5KHZvaWQgMCx2KG4pLmNvbmNhdChbdF0pKX0sb246ZnVuY3Rpb24obix0KXtyZXR1cm4gbFtuXT1sW25dP2xbbl0uY29uY2F0KHQpOlt0XSxmdW5jdGlvbigpe3JldHVybiBsW25dLnNsaWNlKGxbbl0uaW5kZXhPZih0KSwxKX19fX1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9wZXJhdG9yLmVzLmpzLm1hcFxuIiwidmFyIG49ZnVuY3Rpb24obil7aWYoXCJvYmplY3RcIiE9dHlwZW9mKHQ9bil8fEFycmF5LmlzQXJyYXkodCkpdGhyb3dcInN0YXRlIHNob3VsZCBiZSBhbiBvYmplY3RcIjt2YXIgdH0sdD1mdW5jdGlvbihuLHQscixlKXtyZXR1cm4obz1uLG8ucmVkdWNlKGZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gbi5pbmRleE9mKHQpPi0xP246bi5jb25jYXQodCl9LFtdKSkucmVkdWNlKGZ1bmN0aW9uKG4scil7cmV0dXJuIG4uY29uY2F0KHRbcl18fFtdKX0sW10pLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gbihyLGUpfSk7dmFyIG99O2Z1bmN0aW9uIHIocil7dm9pZCAwPT09ciYmKHI9e30pO3ZhciBlPXt9O3JldHVybntnZXRTdGF0ZTpmdW5jdGlvbigpe3JldHVybiBPYmplY3QuYXNzaWduKHt9LHIpfSxoeWRyYXRlOmZ1bmN0aW9uKG8pe3JldHVybiBuKG8pLE9iamVjdC5hc3NpZ24ocixvKSxmdW5jdGlvbigpe3ZhciBuPVtcIipcIl0uY29uY2F0KE9iamVjdC5rZXlzKG8pKTt0KG4sZSxyKX19LG9uOmZ1bmN0aW9uKG4sdCl7cmV0dXJuKG49W10uY29uY2F0KG4pKS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIGVbbl09KGVbbl18fFtdKS5jb25jYXQodCl9KSxmdW5jdGlvbigpe3JldHVybiBuLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gZVtuXS5zcGxpY2UoZVtuXS5pbmRleE9mKHQpLDEpfSl9fSxlbWl0OmZ1bmN0aW9uKG8sdSxjKXt2YXIgaT0oXCIqXCI9PT1vP1tdOltcIipcIl0pLmNvbmNhdChvKTsodT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB1P3Uocik6dSkmJihuKHUpLE9iamVjdC5hc3NpZ24ocix1KSxpPWkuY29uY2F0KE9iamVjdC5rZXlzKHUpKSksdChpLGUscixjKX19fXIoKTt2YXIgZT1mdW5jdGlvbihuKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgbiYmIUFycmF5LmlzQXJyYXkobil9LG89ZnVuY3Rpb24obil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbn07ZnVuY3Rpb24gdShuKXtyZXR1cm4gZnVuY3Rpb24odCxyKXt2YXIgZT1bXTtyZXR1cm57c3ViczplLHVubW91bnQ6bih0LE9iamVjdC5hc3NpZ24oe30scix7b246ZnVuY3Rpb24obix0KXt2YXIgbz1yLm9uKG4sdCk7cmV0dXJuIGUucHVzaChvKSxvfX0pKSxub2RlOnR9fX1mdW5jdGlvbiBjKG4sdCx1KXt2b2lkIDA9PT1uJiYobj17fSksdm9pZCAwPT09dCYmKHQ9e30pLHZvaWQgMD09PXUmJih1PVtdKTt2YXIgYz1yKHQpLGk9W107cmV0dXJue29uOmMub24sZW1pdDpjLmVtaXQsZ2V0U3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gYy5nZXRTdGF0ZSgpfSxhZGQ6ZnVuY3Rpb24odCl7aWYoIWUodCkpdGhyb3dcImNvbXBvbmVudHMgc2hvdWxkIGJlIGFuIG9iamVjdFwiO09iamVjdC5hc3NpZ24obix0KX0sdXNlOmZ1bmN0aW9uKG4pe2lmKCFvKG4pKXRocm93XCJwbHVnaW5zIHNob3VsZCBiZSBhIGZ1bmN0aW9uXCI7dS5wdXNoKG4pfSxoeWRyYXRlOmZ1bmN0aW9uKG4pe3JldHVybiBjLmh5ZHJhdGUobil9LG1vdW50OmZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PVwiZGF0YS1jb21wb25lbnRcIiksdD1bXS5jb25jYXQodCk7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe2Zvcih2YXIgYT10W3JdLGY9W10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiK2ErXCJdXCIpKSxzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWYucG9wKCkscj10LmdldEF0dHJpYnV0ZShhKS5zcGxpdCgvXFxzLykscz0wO3M8ci5sZW5ndGg7cysrKXt2YXIgdj1uW3Jbc11dO2lmKHYpe3QucmVtb3ZlQXR0cmlidXRlKGEpO3RyeXt2YXIgZD11LnJlZHVjZShmdW5jdGlvbihuLHIpe3ZhciBvPXIodCxjKTtyZXR1cm4gZShvKT9PYmplY3QuYXNzaWduKG4sbyk6bn0se30pLG09dih0LE9iamVjdC5hc3NpZ24oe30sZCxjKSk7byhtLnVubW91bnQpJiZpLnB1c2gobSl9Y2F0Y2gobil7Y29uc29sZS5lcnJvcihuKSxjLmVtaXQoXCJlcnJvclwiLHtlcnJvcjpufSksYy5oeWRyYXRlKHtlcnJvcjp2b2lkIDB9KX19fX07Zi5sZW5ndGg7KXMoKTtjLmVtaXQoXCJtb3VudFwiKX19LHVubW91bnQ6ZnVuY3Rpb24oKXtmb3IodmFyIG49aS5sZW5ndGgtMTtuPi0xO24tLSl7dmFyIHQ9aVtuXSxyPXQuc3ViczsoMCx0LnVubW91bnQpKHQubm9kZSksci5tYXAoZnVuY3Rpb24obil7cmV0dXJuIG4oKX0pLGkuc3BsaWNlKG4sMSl9Yy5lbWl0KFwidW5tb3VudFwiKX19fWV4cG9ydHt1IGFzIGNvbXBvbmVudCxjIGFzIHBpY29hcHB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGljb2FwcC5lcy5qcy5tYXBcbiIsIlxuLyoqXG4gKiBBbiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpIGFsdGVybmF0aXZlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFyZ3Mgc29tZXRoaW5nIHdpdGggYSBsZW5ndGhcbiAqIEBwYXJhbSB7TnVtYmVyfSBzbGljZVxuICogQHBhcmFtIHtOdW1iZXJ9IHNsaWNlRW5kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3MsIHNsaWNlLCBzbGljZUVuZCkge1xuICB2YXIgcmV0ID0gW107XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcblxuICBpZiAoMCA9PT0gbGVuKSByZXR1cm4gcmV0O1xuXG4gIHZhciBzdGFydCA9IHNsaWNlIDwgMFxuICAgID8gTWF0aC5tYXgoMCwgc2xpY2UgKyBsZW4pXG4gICAgOiBzbGljZSB8fCAwO1xuXG4gIGlmIChzbGljZUVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuID0gc2xpY2VFbmQgPCAwXG4gICAgICA/IHNsaWNlRW5kICsgbGVuXG4gICAgICA6IHNsaWNlRW5kXG4gIH1cblxuICB3aGlsZSAobGVuLS0gPiBzdGFydCkge1xuICAgIHJldFtsZW4gLSBzdGFydF0gPSBhcmdzW2xlbl07XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG4iLCJ2YXIgbixlLGksbyx0LHIsZixkLHAsdT1bXTtmdW5jdGlvbiB3KG4sYSl7cmV0dXJuIGU9d2luZG93LnBhZ2VYT2Zmc2V0LG89d2luZG93LnBhZ2VZT2Zmc2V0LHI9d2luZG93LmlubmVySGVpZ2h0LGQ9d2luZG93LmlubmVyV2lkdGgsdm9pZCAwPT09aSYmKGk9ZSksdm9pZCAwPT09dCYmKHQ9byksdm9pZCAwPT09cCYmKHA9ZCksdm9pZCAwPT09ZiYmKGY9ciksKGF8fG8hPT10fHxlIT09aXx8ciE9PWZ8fGQhPT1wKSYmKCFmdW5jdGlvbihuKXtmb3IodmFyIHc9MDt3PHUubGVuZ3RoO3crKyl1W3ddKHt4OmUseTpvLHB4OmkscHk6dCx2aDpyLHB2aDpmLHZ3OmQscHZ3OnB9LG4pfShuKSxpPWUsdD1vLGY9cixwPWQpLHJlcXVlc3RBbmltYXRpb25GcmFtZSh3KX1leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKXtyZXR1cm4gdS5pbmRleE9mKGUpPDAmJnUucHVzaChlKSxuPW58fHcocGVyZm9ybWFuY2Uubm93KCkpLHt1cGRhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdyhwZXJmb3JtYW5jZS5ub3coKSwhMCksdGhpc30sZGVzdHJveTpmdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihlKSwxKX19fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3JyYWYuZXMuanMubWFwXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlLG4pe3JldHVybiBuPW58fHt9LG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQscil7dmFyIHM9bmV3IFhNTEh0dHBSZXF1ZXN0LG89W10sdT1bXSxpPXt9LGE9ZnVuY3Rpb24oKXtyZXR1cm57b2s6Mj09KHMuc3RhdHVzLzEwMHwwKSxzdGF0dXNUZXh0OnMuc3RhdHVzVGV4dCxzdGF0dXM6cy5zdGF0dXMsdXJsOnMucmVzcG9uc2VVUkwsdGV4dDpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUocy5yZXNwb25zZVRleHQpfSxqc29uOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzLnJlc3BvbnNlVGV4dCkudGhlbihKU09OLnBhcnNlKX0sYmxvYjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3MucmVzcG9uc2VdKSl9LGNsb25lOmEsaGVhZGVyczp7a2V5czpmdW5jdGlvbigpe3JldHVybiBvfSxlbnRyaWVzOmZ1bmN0aW9uKCl7cmV0dXJuIHV9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gaVtlLnRvTG93ZXJDYXNlKCldfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKWluIGl9fX19O2Zvcih2YXIgbCBpbiBzLm9wZW4obi5tZXRob2R8fFwiZ2V0XCIsZSwhMCkscy5vbmxvYWQ9ZnVuY3Rpb24oKXtzLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnJlcGxhY2UoL14oLio/KTpbXlxcU1xcbl0qKFtcXHNcXFNdKj8pJC9nbSxmdW5jdGlvbihlLG4sdCl7by5wdXNoKG49bi50b0xvd2VyQ2FzZSgpKSx1LnB1c2goW24sdF0pLGlbbl09aVtuXT9pW25dK1wiLFwiK3Q6dH0pLHQoYSgpKX0scy5vbmVycm9yPXIscy53aXRoQ3JlZGVudGlhbHM9XCJpbmNsdWRlXCI9PW4uY3JlZGVudGlhbHMsbi5oZWFkZXJzKXMuc2V0UmVxdWVzdEhlYWRlcihsLG4uaGVhZGVyc1tsXSk7cy5zZW5kKG4uYm9keXx8bnVsbCl9KX1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuZmV0Y2gubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IHQgZnJvbVwic3JyYWZcIjtleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihyLG8pe3JldHVybiB2b2lkIDA9PT1vJiYobz17fSksZnVuY3Rpb24oZSxuKXt2YXIgYT0hMSxpPXBhcnNlRmxvYXQoci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRocmVzaG9sZFwiKXx8by50aHJlc2hvbGR8fDApO3JldHVybiB0KGZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLG89YXJndW1lbnRzLmxlbmd0aDtvLS07KXRbb109YXJndW1lbnRzW29dO3ZhciBkPXRbMF0saD1kLnksbD1kLnZoLHA9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSx1PXAudG9wK2gsZj1pPj0uNT9pOmkqbCx2PXUrcC5oZWlnaHQtZj49aCYmdStmPD1oK2w7diYmIWE/KGE9ITAsZSYmZS5hcHBseSh2b2lkIDAsdCkpOiF2JiZhJiYoYT0hMSxuJiZuLmFwcGx5KHZvaWQgMCx0KSl9KX19XG4vLyMgc291cmNlTWFwcGluZ1VSTD12c2JsLmVzLmpzLm1hcFxuIiwiaW1wb3J0IHsgcGljb2FwcCB9IGZyb20gJ3BpY29hcHAnXG5cbmltcG9ydCBoZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL2hlYWRlci5qcydcbmltcG9ydCBwcm9kdWN0U2VsZWN0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0LXNlbGVjdGlvbi5qcydcbmltcG9ydCBjYXJ0RHJhd2VyIGZyb20gJ0AvY29tcG9uZW50cy9jYXJ0RHJhd2VyLmpzJ1xuaW1wb3J0IGNhcnREcmF3ZXJJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9jYXJ0RHJhd2VySXRlbS5qcydcbmltcG9ydCBhY2NvdW50TG9naW4gZnJvbSAnQC9jb21wb25lbnRzL2FjY291bnRMb2dpbi5qcydcbmltcG9ydCBwcm9kdWN0IGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0LmpzJ1xuaW1wb3J0IHByb2R1Y3RDb3VudGVyIGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0LWNvdW50ZXIuanMnXG5pbXBvcnQgY29sbGVjdGlvbkxpc3QgZnJvbSAnQC9jb21wb25lbnRzL2NvbGxlY3Rpb25MaXN0LmpzJ1xuXG5jb25zdCBzdGF0ZSA9IHtcbiAgY2FydE9wZW46IGZhbHNlLFxuICBtZW51T3BlbjogZmFsc2Vcbn1cblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgYWNjb3VudExvZ2luLFxuICBoZWFkZXIsXG4gIHByb2R1Y3RTZWxlY3Rpb24sXG4gIGNhcnREcmF3ZXIsXG4gIGNhcnREcmF3ZXJJdGVtLFxuICBwcm9kdWN0LFxuICBwcm9kdWN0Q291bnRlcixcbiAgY29sbGVjdGlvbkxpc3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGljb2FwcChjb21wb25lbnRzLCBzdGF0ZSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGNvbnN0IGxvZ2luID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtbG9naW4tZGlhbG9nJylcbiAgY29uc3QgcmVjb3ZlciA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlY292ZXItZGlhbG9nJylcbiAgY29uc3QgcmVjb3ZlckxpbmsgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWNvdmVyLXRyaWdnZXInKVxuICBjb25zdCBjYW5jZWxSZWNvdmVyTGluayA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlY292ZXItY2FuY2VsJylcblxuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBjb25zdCByZWNvdmVySXNUYXJnZXQgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5tYXRjaCgvXFwjcmVjb3Zlci8pID8gdHJ1ZSA6IGZhbHNlXG4gIC8qIGVzbGludC1lbmFibGUgKi9cbiAgY29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWNvdmVyLXN1Y2Nlc3MnKSAhPT0gbnVsbFxuXG4gIGlmIChyZWNvdmVySXNUYXJnZXQgfHwgc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICBsb2dpbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgcmVjb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICB9IGVsc2Uge1xuICAgIGxvZ2luLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIH1cblxuICByZWNvdmVyTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbG9naW4uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHJlY292ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgfSlcblxuICBjYW5jZWxSZWNvdmVyTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmVjb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgbG9naW4uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IHsgZ2V0U2l6ZWRJbWFnZVVybCwgaW1hZ2VTaXplIH0gZnJvbSAnQC9saWIvaW1hZ2VzLmpzJ1xuaW1wb3J0IHsgZm9ybWF0TW9uZXkgfSBmcm9tICdAL2xpYi9jdXJyZW5jeS5qcydcbmltcG9ydCBhcHAgZnJvbSAnQC9hcHAuanMnXG5cbmNvbnN0IFggPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Y29sb3JcIiBzdHJva2Utd2lkdGg9XCIzXCIgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7b3ZlcmZsb3c6dmlzaWJsZTtcIj48cGF0aCBkPVwiTTEuMDYwNjYwMTcxNzc5ODIxMiAxLjA2MDY2MDE3MTc3OTgyMTIgTDE0LjkzOTMzOTgyODIyMDE3OSAxNC45MzkzMzk4MjgyMjAxNzlcIj48L3BhdGg+PHBhdGggZD1cIk0xNC45MzkzMzk4MjgyMjAxNzkgMS4wNjA2NjAxNzE3Nzk4MjEyIEwxLjA2MDY2MDE3MTc3OTgyMTIgMTQuOTM5MzM5ODI4MjIwMTc5XCI+PC9wYXRoPjwvc3ZnPmBcblxuZnVuY3Rpb24gY3JlYXRlSXRlbSAoe1xuICB2YXJpYW50X2lkOiBpZCxcbiAgcHJvZHVjdF90aXRsZTogdGl0bGUsXG4gIGxpbmVfcHJpY2U6IHByaWNlLFxuICB2YXJpYW50X3RpdGxlOiBjb2xvcixcbiAgaW1hZ2UsXG4gIHVybCxcbiAgcXVhbnRpdHksXG4gIC4uLml0ZW1cbn0pIHtcbiAgY29uc3QgaW1nID0gaW1hZ2UgPyBnZXRTaXplZEltYWdlVXJsKFxuICAgIGltYWdlLnJlcGxhY2UoJy4nICsgaW1hZ2VTaXplKGltYWdlKSwgJycpLCAnMjAweCcgLy8gVE9ETyBoYWNreSBhZlxuICApIDogJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9SOU9TMjl4SmItOC8yMDAweDEzMzMnXG5cbiAgcmV0dXJuIGBcbjxkaXYgY2xhc3M9J2NhcnQtZHJhd2VyX19pdGVtJyBkYXRhLWNvbXBvbmVudD0nY2FydERyYXdlckl0ZW0nIGRhdGEtaWQ9JHtpZH0+XG4gIDxkaXYgY2xhc3M9J2YgYWljJz5cbiAgICA8YSBocmVmPScke3VybH0nPlxuICAgICAgPGltZyBzcmM9JyR7aW1nfScgLz5cbiAgICA8L2E+XG4gICAgPGRpdiBjbGFzcz0nX19jb250ZW50IHBsMSBmIHkgYWlzIGpjYic+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YSBocmVmPScke3VybH0nIGNsYXNzPSdzZXJpZiBtdjAgcCBtdjAnPiR7dGl0bGV9PC9hPlxuICAgICAgICA8ZGl2IGNsYXNzPSdzbWFsbCBzYW5zIHRyYWNrIG10MDI1IG1iMDUgYm9vayc+JHtmb3JtYXRNb25leShwcmljZSl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2YgYWljJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJ0LXF1YW50aXR5IGpzLXJlbW92ZS1zaW5nbGUgcHgwNSc+LTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2pzLXNpbmdsZS1xdWFudGl0eSc+JHtxdWFudGl0eX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJ0LXF1YW50aXR5IGpzLWFkZC1zaW5nbGUgcHgwNSc+KzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHtjb2xvciA/IGA8ZGl2IGNsYXNzPSd4c21hbGwgc2FucyBjYXBzIHRyYWNrIGNtIG12MDI1IGJvb2snPiR7Y29sb3Iuc3BsaXQoJzonKVswXX08L2Rpdj5gIDogYGB9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uLS1yZXNldCBqcy1yZW1vdmUtaXRlbSc+JHtYfTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYFxufVxuXG5mdW5jdGlvbiByZW5kZXJJdGVtcyAoaXRlbXMpIHtcbiAgcmV0dXJuIGl0ZW1zLmxlbmd0aCA+IDAgPyAoXG4gICAgaXRlbXMucmVkdWNlKChtYXJrdXAsIGl0ZW0pID0+IHtcbiAgICAgIG1hcmt1cCArPSBjcmVhdGVJdGVtKGl0ZW0pXG4gICAgICByZXR1cm4gbWFya3VwXG4gICAgfSwgJycpXG4gICkgOiAoXG4gICAgYDxkaXYgY2xhc3M9J3B2MSc+PHAgY2xhc3M9J3B2MSBtdjA1IHNhbnMgc21hbGwgY20gaSBhYyc+WW91ciBjYXJ0IGlzIGVtcHR5PC9wPjwvZGl2PmBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtb3ZlcmxheScpXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtY2xvc2UnKVxuICBjb25zdCBzdWJ0b3RhbCA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLXN1YnRvdGFsJylcbiAgY29uc3QgaXRlbXNSb290ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtaXRlbXMnKVxuICBjb25zdCBsb2FkaW5nID0gaXRlbXNSb290LmlubmVySFRNTFxuXG4gIGNvbnN0IHJlbmRlciA9IChjYXJ0KSA9PiB7XG4gICAgaXRlbXNSb290LmlubmVySFRNTCA9IHJlbmRlckl0ZW1zKGNhcnQuaXRlbXMpXG4gICAgc3VidG90YWwuaW5uZXJIVE1MID0gZm9ybWF0TW9uZXkoY2FydC50b3RhbF9wcmljZSlcbiAgfVxuXG4gIGNvbnN0IG9wZW4gPSAoY2FydCkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcbiAgICBpdGVtc1Jvb3QuaW5uZXJIVE1MID0gbG9hZGluZ1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJylcbiAgICAgIHNldFRpbWVvdXQocmVuZGVyKGNhcnQpLCAxMClcbiAgICAgIGFwcC5tb3VudCgpXG4gICAgfSwgNTApXG4gIH1cblxuICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxuICAgICAgYXBwLmh5ZHJhdGUoe2NhcnRPcGVuOiBmYWxzZX0pXG4gICAgfSwgNDAwKVxuICB9XG5cbiAgcmVuZGVyKGN0eC5nZXRTdGF0ZSgpLmNhcnQpXG5cbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKVxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKVxuXG4gIGN0eC5vbignY2FydDp0b2dnbGUnLCAoeyBjYXJ0LCBjYXJ0T3BlbiB9KSA9PiB7XG4gICAgY2FydE9wZW4gJiYgb3BlbihjYXJ0KVxuICB9KVxuICBjdHgub24oJ2NhcnQ6dXBkYXRlZCcsICgpID0+IHtcbiAgICByZW5kZXIoY3R4LmdldFN0YXRlKCkuY2FydClcbiAgICBhcHAubW91bnQoKVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgeyByZW1vdmVBZGRvbiwgdXBkYXRlQWRkb24gfSBmcm9tICdAL2xpYi9jYXJ0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZW1vdmUtaXRlbScpXG4gIGNvbnN0IGRlY3JlYXNlID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVtb3ZlLXNpbmdsZScpXG4gIGNvbnN0IGluY3JlYXNlID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtYWRkLXNpbmdsZScpXG4gIGNvbnN0IGN1cnJlbnRRdHkgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zaW5nbGUtcXVhbnRpdHknKS5pbm5lckhUTUxcbiAgY29uc3QgaWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmVtb3ZlQWRkb24oaWQpXG4gIH0pXG5cbiAgZGVjcmVhc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVBZGRvbihpZCwgcGFyc2VJbnQoY3VycmVudFF0eSkgLSAxKVxuICB9KVxuXG4gIGluY3JlYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlQWRkb24oaWQsIHBhcnNlSW50KGN1cnJlbnRRdHkpICsgMSlcbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBjb25zdCBmaWx0ZXIgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItY2F0ZWdvcnknKTtcbiAgY29uc3QgZmlsdGVyQ2hpbGQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJzLXRvb2xiYXJfX3N1Yl9tZW51Jyk7XG5cbiAgZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgZmlsdGVyQ2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgIGZpbHRlci5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gIH0pXG4gIHJldHVybiBub2RlID0+IHtcbiAgICBjb25zb2xlLmxvZygnZmlsdGVyIHVubW91bnRlZCcpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBjb25zdCBjYXJ0Q291bnQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1jYXJ0LWNvdW50Jyk7XG4gIGNvbnN0IGNhcnRUb2dnbGVzID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuanMtY2FydC1kcmF3ZXItdG9nZ2xlJyk7XG4gIGNvbnN0IHN3YXRjaGVzID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FydC1zd2F0Y2gnKTtcbiAgY29uc3QgcGFyZW50TWVudUl0ZW1zID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1wYXJlbnQnKTtcbiAgY29uc3QgaGFtYnVyZ2VyID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcjaGFtYnVyZ2VyJyk7XG4gIGNvbnN0IG1vYmlsZU1lbnUgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJyNtb2JpbGUtbWVudScpO1xuICBjb25zdCBwYXJlbnRNZW51SXRlbXNNb2JpbGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXBhcmVudCcpO1xuXG4gIC8vREVTS1RPUCBNRU5VIENMSUNLXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyZW50TWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gcGFyZW50TWVudUl0ZW1zW2ldLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGFyZW50XScpO1xuICAgIC8vIGNvbnNvbGUubG9nKHBhcmVudE1lbnVJdGVtcywgY2hpbGQpXG4gICAgcGFyZW50TWVudUl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGN0eC5lbWl0KCdtZW51Om9wZW4nLCBzdGF0ZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWVudU9wZW46IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgIGN0eC5vbignbWVudTpvcGVuJywgc3RhdGUgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2cocGFyZW50TWVudUl0ZW1zW2ldKVxuICAgICAgY2hpbGRbMF0gIT09IHVuZGVmaW5lZCA/IGNoaWxkWzBdLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKSA6IG51bGwgICBcbiAgICB9KVxuXG4gICAgY3R4Lm9uKCdtZW51OmNsb3NlJywgc3RhdGUgPT4ge1xuICAgICAgY2hpbGRbMF0gIT09IHVuZGVmaW5lZCA/IGNoaWxkWzBdLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKSA6IG51bGxcbiAgICB9KVxuICB9XG4gIFxuXG4gIC8vbW9iaWxlIHRyaWdnZ2VyXG4gIGhhbWJ1cmdlclswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBoYW1idXJnZXJbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgLy8gY29uc29sZS5sb2cobW9iaWxlTWVudSwgaGFtYnVyZ2VyKVxuICAgIG1vYmlsZU1lbnVbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIH0pXG5cbiAgLy9TSVRFIENPTE9VUlxuICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2l0ZUNvbG91cicpICE9PSBudWxsKXtcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2l0ZUNvbG91cicpID09PSAnZGFyaycgPyBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICdiZy1kYXJrIGMtYmVpZ2UnIDogZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSAnYy1kYXJrIGJnLWJlaWdlJztcbiAgfVxuXG4gIC8vQ09MT1VSIFNXSVRDSFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN3YXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dhdGNoZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYoc3dhdGNoZXNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG91cicpID09ICdkYXJrJykge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICdiZy1kYXJrIGMtYmVpZ2UnO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2l0ZUNvbG91cicsICdkYXJrJyk7XG5cbiAgICAgIH0gZWxzZSBpZihzd2F0Y2hlc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3VyJykgPT0gJ2xpZ2h0Jyl7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gJ2MtZGFyayBiZy1iZWlnZSc7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaXRlQ29sb3VyJywgJ2xpZ2h0Jyk7XG4gICAgICB9XG4gICAgICBcbiAgICB9KVxuICB9XG5cbiAgLy9DQVJUIFRPR0dMRVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnRUb2dnbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2FydFRvZ2dsZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgY3R4LmVtaXQoJ2NhcnQ6dG9nZ2xlJywgc3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNhcnRPcGVuOiAhc3RhdGUuY2FydE9wZW5cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIFxuICAvL0NBUlQgVVBEQVRFXG4gIGN0eC5vbignY2FydDp1cGRhdGVkJywgc3RhdGUgPT4ge1xuICAgIGNhcnRDb3VudC5pbm5lckhUTUwgPSBzdGF0ZS5jYXJ0Lml0ZW1fY291bnRcbiAgfSlcblxuICBjYXJ0Q291bnQuaW5uZXJIVE1MID0gY3R4LmdldFN0YXRlKCkuY2FydC5pdGVtX2NvdW50XG5cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuXG4gIGNvbnN0IGRlY3JlYXNlID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtY291bnRlci1yZW1vdmUnKVxuICBjb25zdCBpbmNyZWFzZSA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLWNvdW50ZXItYWRkJylcbiAgY29uc3QgcXVhbnRpdHkgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb3VudGVyLXF1YW50aXR5JylcblxuICBjb25zdCBtaW4gPSBwYXJzZUludChxdWFudGl0eS5hdHRyaWJ1dGVzLm1pbi52YWx1ZSlcbiAgY29uc3QgbWF4ID0gcGFyc2VJbnQocXVhbnRpdHkuYXR0cmlidXRlcy5tYXgudmFsdWUpXG5cbiAgbGV0IGNvdW50ID0gcGFyc2VJbnQocXVhbnRpdHkudmFsdWUpXG5cbiAgY29uc3Qgc2V0ID0gKGkpID0+IHtcbiAgICBjb3VudCA9IE1hdGgubWF4KG1pbiwgTWF0aC5taW4oaSwgbWF4IHx8IDEwMDAwKSlcbiAgICBxdWFudGl0eS52YWx1ZSA9IGNvdW50XG4gIH1cblxuICBkZWNyZWFzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldCgtLWNvdW50KVxuICB9KVxuXG4gIGluY3JlYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0KCsrY291bnQpXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCB7IGFkZFZhcmlhbnQgfSBmcm9tICdAL2xpYi9jYXJ0LmpzJ1xuaW1wb3J0IHJhZGlvIGZyb20gJ0AvbGliL3JhZGlvLmpzJ1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnQC9saWIvb3B0aW9ucy5qcydcbmltcG9ydCBnZXRQcm9kdWN0SnNvbiBmcm9tICdAL2xpYi9nZXRQcm9kdWN0SnNvbi5qcydcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KCh7IG5vZGUgfSkgPT4ge1xuICBjb25zdCBvcHRzID0gb3B0aW9ucyhub2RlKVxuXG4gIC8vIGNhY2hlXG4gIGdldFByb2R1Y3RKc29uKClcblxuICBvcHRzLm9uVXBkYXRlKHN0YXRlID0+IHtcbiAgICBnZXRQcm9kdWN0SnNvbigpLnRoZW4oanNvbiA9PiB7XG4gICAgICBjb25zdCB2YXJpYW50ID0ganNvbi52YXJpYW50cy5maWx0ZXIodiA9PiB2LmlkID09IHN0YXRlLmlkKVswXVxuICAgIH0pXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCB7IGFkZFZhcmlhbnQgfSBmcm9tICdAL2xpYi9jYXJ0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcm9kdWN0LWpzb24nKS5pbm5lckhUTUwpXG4gIGNvbnN0IGZvcm0gPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKVxuXG4gIGNvbnN0IHsgc2VsZWN0ZWRPckZpcnN0QXZhaWxhYmxlVmFyaWFudCwgcHJvZHVjdCB9ID0ganNvblxuICBsZXQgY3VycmVudFZhcmlhbnQgPSBwcm9kdWN0LnZhcmlhbnRzLmZpbHRlcih2ID0+IHYuaWQgPT09IHNlbGVjdGVkT3JGaXJzdEF2YWlsYWJsZVZhcmlhbnQpWzBdXG4gIGxldCBjdXJyZW50SW52ZW50b3J5ID0ganNvbi5pbnZlbnRvcnkuZmlsdGVyKHYgPT4gdi5pZCA9PT0gY3VycmVudFZhcmlhbnQuaWQpWzBdXG4gIFxuICBjb25zb2xlLmxvZyhqc29uKVxuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY3VycmVudFZhcmlhbnQgPSBwcm9kdWN0LnZhcmlhbnRzLmZpbHRlcih2ID0+IHYuaWQgPT09IHBhcnNlSW50KGZvcm0uZWxlbWVudHMuaWQudmFsdWUpKVswXVxuICAgIGN1cnJlbnRJbnZlbnRvcnkgPSBqc29uLmludmVudG9yeS5maWx0ZXIodiA9PiB2LmlkID09PSBjdXJyZW50VmFyaWFudC5pZClbMF1cblxuICAgIGFkZFZhcmlhbnQoY3VycmVudFZhcmlhbnQsIGZvcm0uZWxlbWVudHMucXVhbnRpdHkudmFsdWUsIGN1cnJlbnRJbnZlbnRvcnkpXG4gIH0pXG5cbiAgY3R4Lm9uKFwiY2FydEVycm9yXCIsICh7IGVycm9yIH0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNhcnRFcnJvclwiLCBlcnJvcilcbiAgfSk7XG59KVxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnXG5pbXBvcnQgJ0AvbGliL3NlbGVjdC5qcydcbmltcG9ydCBsYXppbSBmcm9tICdsYXppbSdcbmltcG9ydCBhcHAgZnJvbSAnQC9hcHAuanMnXG5pbXBvcnQgcm91dGVyIGZyb20gJ0Avcm91dGVyLmpzJ1xuaW1wb3J0IHsgZmV0Y2hDYXJ0IH0gZnJvbSAnQC9saWIvY2FydC5qcydcblxuLyoqXG4gKiBzdG9yZSBiaW5kaW5nIGZuXG4gKi9cbmNvbnN0IGltYWdlcyA9IGxhemltKClcblxuLyoqXG4gKiBiaW5kIG9uIHBhZ2UgbG9hZFxuICovXG5pbWFnZXMoKVxuXG5yb3V0ZXIub24oJ2JlZm9yZScsICgpID0+IHtcbiAgaWYoYXBwLmdldFN0YXRlKCkubWVudU9wZW4gPT09IHRydWUpIHtcbiAgICBhcHAuZW1pdCgnbWVudTpjbG9zZScsIHN0YXRlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZW51T3BlbjogZmFsc2VcbiAgICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG5cbnJvdXRlci5vbignYWZ0ZXInLCAoKSA9PiB7XG4gIGFwcC51bm1vdW50KClcbiAgYXBwLm1vdW50KClcbiAgLyoqXG4gICAqIGJpbmQgbmV3IGltYWdlc1xuICAgKi9cbiAgaW1hZ2VzKClcbn0pXG5cbi8qKlxuICogbG9hZCBhbnkgZGF0YSB0aGF0IHlvdXIgc2l0ZSBuZWVkcyBvbiBmaXN0IGxvYWRcbiAqL1xuUHJvbWlzZS5hbGwoW1xuICBmZXRjaENhcnQoKVxuXSkudGhlbigoWyBjYXJ0IF0pID0+IHtcbiAgLyoqXG4gICAqIGFkZCB0aGUgY2FydCBkYXRhIHRvIHRoZSBwaWNvYXBwIGluc3RhbmNlXG4gICAqL1xuICBhcHAuaHlkcmF0ZSh7IGNhcnQgfSlcblxuICAvKipcbiAgICogbW91bnQgYW55IGNvbXBvbmVudHMgZGVmaW5lZCBvbiB0aGUgcGFnZVxuICAgKi9cbiAgYXBwLm1vdW50KClcbn0pXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAndW5mZXRjaCdcbmltcG9ydCBhcHAgZnJvbSAnQC9hcHAuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRWYXJpYW50ICh2YXJpYW50LCBxdWFudGl0eSwgaW52ZW50b3J5KSB7XG5cbiAgLy8gY29uc3QgbnVtQXZhaWxhYmxlID0gdmFyaWFudC5pbnZlbnRvcnlfcG9saWN5ID09PSAnZGVueScgJiYgdmFyaWFudC5pbnZlbnRvcnlfbWFuYWdlbWVudCA9PT0gJ3Nob3BpZnknID8gKFxuICAvLyAgIHZhcmlhbnQuaW52ZW50b3J5X3F1YW50aXR5XG4gIC8vICkgOiBudWxsIC8vIG51bGwgbWVhbnMgdGhleSBjYW4gYWRkIGFzIG1hbnkgYXMgdGhleSB3YW50XG5cbiAgY29uc3QgbnVtQXZhaWxhYmxlID0gdmFyaWFudC5pbnZlbnRvcnlfbWFuYWdlbWVudCA9PT0gJ3Nob3BpZnknID8gKFxuICAgIGludmVudG9yeS5hbW91bnRBdmFpbGFibGVcbiAgKSA6IG51bGxcblxuICBcbiAgcmV0dXJuIGZldGNoQ2FydCgpLnRoZW4oKHsgaXRlbXMgfSkgPT4ge1xuICAgIGxldCBudW1JbkNhcnQgPSBpdGVtcy5maWx0ZXIodiA9PiB2LmlkID09PSB2YXJpYW50LmlkKVswXTtcbiAgICBudW1JbkNhcnQgPSBudW1JbkNhcnQgIT09IHVuZGVmaW5lZCA/IG51bUluQ2FydC5xdWFudGl0eSA6IDA7XG4gICAgY29uc29sZS5sb2cobnVtSW5DYXJ0LCBwYXJzZUludChxdWFudGl0eSksIGludmVudG9yeS5hbW91bnRBdmFpbGFibGUpXG5cbiAgICBpZiAoaW52ZW50b3J5LmFtb3VudEF2YWlsYWJsZSAhPT0gbnVsbCAmJiAobnVtSW5DYXJ0ICsgcGFyc2VJbnQocXVhbnRpdHkpKSA+IGludmVudG9yeS5hbW91bnRBdmFpbGFibGUpIHsgIFxuICAgICAgY29uc3QgZXJyID0gYFRoZXJlIGFyZSBvbmx5ICR7aW52ZW50b3J5LmFtb3VudEF2YWlsYWJsZX0gb2YgdGhhdCBwcm9kdWN0IGF2YWlsYWJsZSwgcmVxdWVzdGVkICR7cGFyc2VJbnQocXVhbnRpdHkpfS5gXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXG4gICAgICBhcHAuZW1pdCgnY2FydEVycm9yJywge2Vycm9yOiBlcnJ9KVxuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGVycilcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJhZGRcIilcbiAgICAgIHJldHVybiBhZGRJdGVtQnlJZCh2YXJpYW50LmlkLCBxdWFudGl0eSlcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBZGRvbiAoaWQsIHF1YW50aXR5KSB7XG4gIHJldHVybiBmZXRjaENhcnQoKS50aGVuKCh7IGl0ZW1zIH0pID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaXRlbXNbaV0udmFyaWFudF9pZCA9PT0gcGFyc2VJbnQoaWQpKSB7XG4gICAgICAgIHJldHVybiBjaGFuZ2VBZGRvbihpICsgMSwgcXVhbnRpdHkpIC8vIHNob3BpZnkgY2FydCBpcyBhIDEtYmFzZWQgaW5kZXhcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBZGRvbiAoaWQpIHtcbiAgcmV0dXJuIHVwZGF0ZUFkZG9uKGlkLCAwKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VBZGRvbiAobGluZSwgcXVhbnRpdHkpIHtcbiAgYXBwLmVtaXQoJ2NhcnQ6dXBkYXRpbmcnKVxuXG4gIHJldHVybiBmZXRjaCgnL2NhcnQvY2hhbmdlLmpzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBsaW5lLCBxdWFudGl0eSB9KVxuICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGNhcnQgPT4ge1xuICAgIGFwcC5oeWRyYXRlKHsgY2FydDogY2FydCB9KVxuICAgIGFwcC5lbWl0KCdjYXJ0OnVwZGF0ZWQnLCB7IGNhcnQ6IGNhcnQgfSlcbiAgICByZXR1cm4gY2FydFxuICB9KVxufVxuXG4vKipcbiAqIFdhcm5pbmc6IHRoaXMgZG9lcyBub3QgY2hlY2sgYXZhaWxhYmxlIHByb2R1Y3RzIGZpcnN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRJdGVtQnlJZCAoaWQsIHF1YW50aXR5KSB7XG4gIGFwcC5lbWl0KCdjYXJ0OnVwZGF0aW5nJylcblxuICByZXR1cm4gZmV0Y2goJy9jYXJ0L2FkZC5qcycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQsIHF1YW50aXR5IH0pXG4gIH0pLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihpdGVtID0+IHtcbiAgICByZXR1cm4gZmV0Y2hDYXJ0KCkudGhlbihjYXJ0ID0+IHtcbiAgICAgIGFwcC5oeWRyYXRlKHsgY2FydDogY2FydCB9KVxuICAgICAgYXBwLmVtaXQoJ2NhcnQ6dXBkYXRlZCcpXG4gICAgICBhcHAuZW1pdCgnY2FydDp0b2dnbGUnLCBzdGF0ZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2FydE9wZW46ICFzdGF0ZS5jYXJ0T3BlblxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8gYXBwLmVtaXQoJ3VwZGF0ZWQnLCB7IGl0ZW0sIGNhcnQgfSlcbiAgICAgIHJldHVybiB7IGl0ZW0sIGNhcnQgfVxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENhcnQgKCkge1xuICByZXR1cm4gZmV0Y2goJy9jYXJ0LmpzJywge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICB9KS50aGVuKCByID0+IHtcbiAgICByZXR1cm4gci5qc29uKCk7XG4gIH0pLmNhdGNoKGUgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9KTtcbn0iLCIvKipcbiAqIEN1cnJlbmN5IEhlbHBlcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBIGNvbGxlY3Rpb24gb2YgdXNlZnVsIGZ1bmN0aW9ucyB0aGF0IGhlbHAgd2l0aCBjdXJyZW5jeSBmb3JtYXR0aW5nXG4gKlxuICogQ3VycmVudCBjb250ZW50c1xuICogLSBmb3JtYXRNb25leSAtIFRha2VzIGFuIGFtb3VudCBpbiBjZW50cyBhbmQgcmV0dXJucyBpdCBhcyBhIGZvcm1hdHRlZCBkb2xsYXIgdmFsdWUuXG4gKlxuICovXG5cbi8qKlxuICogRm9ybWF0IG1vbmV5IHZhbHVlcyBiYXNlZCBvbiB5b3VyIHNob3AgY3VycmVuY3kgc2V0dGluZ3NcbiAqIEBwYXJhbSAge051bWJlcnxzdHJpbmd9IGNlbnRzIC0gdmFsdWUgaW4gY2VudHMgb3IgZG9sbGFyIGFtb3VudCBlLmcuIDMwMCBjZW50c1xuICogb3IgMy4wMCBkb2xsYXJzXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGZvcm1hdCAtIHNob3AgbW9uZXlfZm9ybWF0IHNldHRpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdmFsdWUgLSBmb3JtYXR0ZWQgdmFsdWVcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9uZXkgKGNlbnRzLCBmb3JtYXQgPSAnJHt7YW1vdW50fX0nKSB7XG4gIGlmICh0eXBlb2YgY2VudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgY2VudHMgPSBjZW50cy5yZXBsYWNlKCcuJywgJycpXG4gIH1cblxuICBsZXQgdmFsdWUgPSAnJ1xuICBjb25zdCBwbGFjZWhvbGRlclJlZ2V4ID0gL1xce1xce1xccyooXFx3KylcXHMqXFx9XFx9L1xuXG4gIGZ1bmN0aW9uIGZvcm1hdFdpdGhEZWxpbWl0ZXJzIChudW1iZXIsIHByZWNpc2lvbiwgdGhvdXNhbmRzLCBkZWNpbWFsKSB7XG4gICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDJcbiAgICB0aG91c2FuZHMgPSB0aG91c2FuZHMgfHwgJywnXG4gICAgZGVjaW1hbCA9IGRlY2ltYWwgfHwgJy4nXG5cbiAgICBpZiAoaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICBudW1iZXIgPSAobnVtYmVyIC8gMTAwLjApLnRvRml4ZWQocHJlY2lzaW9uKVxuXG4gICAgY29uc3QgcGFydHMgPSBudW1iZXIuc3BsaXQoJy4nKVxuICAgIGNvbnN0IGRvbGxhcnNBbW91bnQgPSBwYXJ0c1swXS5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyg/IVxcZCkpL2csICckMScgKyB0aG91c2FuZHMpXG4gICAgY29uc3QgY2VudHNBbW91bnQgPSBwYXJ0c1sxXSA/IChkZWNpbWFsICsgcGFydHNbMV0pIDogJydcblxuICAgIHJldHVybiBkb2xsYXJzQW1vdW50ICsgY2VudHNBbW91bnRcbiAgfVxuXG4gIHN3aXRjaCAoZm9ybWF0Lm1hdGNoKHBsYWNlaG9sZGVyUmVnZXgpWzFdKSB7XG4gICAgY2FzZSAnYW1vdW50JzpcbiAgICAgIHZhbHVlID0gZm9ybWF0V2l0aERlbGltaXRlcnMoY2VudHMsIDIpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Ftb3VudF9ub19kZWNpbWFscyc6XG4gICAgICB2YWx1ZSA9IGZvcm1hdFdpdGhEZWxpbWl0ZXJzKGNlbnRzLCAwKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhbW91bnRfd2l0aF9zcGFjZV9zZXBhcmF0b3InOlxuICAgICAgdmFsdWUgPSBmb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMiwgJyAnLCAnLicpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Ftb3VudF9ub19kZWNpbWFsc193aXRoX2NvbW1hX3NlcGFyYXRvcic6XG4gICAgICB2YWx1ZSA9IGZvcm1hdFdpdGhEZWxpbWl0ZXJzKGNlbnRzLCAwLCAnLCcsICcuJylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYW1vdW50X25vX2RlY2ltYWxzX3dpdGhfc3BhY2Vfc2VwYXJhdG9yJzpcbiAgICAgIHZhbHVlID0gZm9ybWF0V2l0aERlbGltaXRlcnMoY2VudHMsIDAsICcgJylcbiAgICAgIGJyZWFrXG4gIH1cblxuICByZXR1cm4gZm9ybWF0LnJlcGxhY2UocGxhY2Vob2xkZXJSZWdleCwgdmFsdWUpXG59XG4iLCJjb25zdCBjYWNoZSA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFByb2R1Y3RKc29uIChcbiAgc2x1ZyA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLnJldmVyc2UoKVswXSxcbiAgb3B0cyA9IHt9XG4pIHtcbiAgaWYgKGNhY2hlW3NsdWddICYmICFvcHRzLnJlZmV0Y2gpIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVbc2x1Z10pXG5cbiAgcmV0dXJuIGZldGNoKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL3Byb2R1Y3RzLycgKyBzbHVnICsgJy5qc29uJylcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoeyBwcm9kdWN0IH0pID0+IHtcbiAgICAgIGNhY2hlW3NsdWddID0gcHJvZHVjdFxuICAgICAgcmV0dXJuIHByb2R1Y3RcbiAgICB9KVxufVxuIiwiLyoqXG4gKiBJbWFnZSBIZWxwZXIgRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQSBjb2xsZWN0aW9uIG9mIGZ1bmN0aW9ucyB0aGF0IGhlbHAgd2l0aCBiYXNpYyBpbWFnZSBvcGVyYXRpb25zLlxuICpcbiAqL1xuXG4vKipcbiAqIFByZWxvYWRzIGFuIGltYWdlIGluIG1lbW9yeSBhbmQgdXNlcyB0aGUgYnJvd3NlcnMgY2FjaGUgdG8gc3RvcmUgaXQgdW50aWwgbmVlZGVkLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGltYWdlcyAtIEEgbGlzdCBvZiBpbWFnZSB1cmxzXG4gKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIEEgc2hvcGlmeSBpbWFnZSBzaXplIGF0dHJpYnV0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZCAoaW1hZ2VzLCBzaXplKSB7XG4gIGlmICh0eXBlb2YgaW1hZ2VzID09PSAnc3RyaW5nJykge1xuICAgIGltYWdlcyA9IFtpbWFnZXNdXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbWFnZSA9IGltYWdlc1tpXVxuICAgIGxvYWRJbWFnZShnZXRTaXplZEltYWdlVXJsKGltYWdlLCBzaXplKSlcbiAgfVxufVxuXG4vKipcbiAqIExvYWRzIGFuZCBjYWNoZXMgYW4gaW1hZ2UgaW4gdGhlIGJyb3dzZXJzIGNhY2hlLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBBbiBpbWFnZSB1cmxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRJbWFnZSAocGF0aCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBuZXcgSW1hZ2UoKS5zcmMgPSBwYXRoXG4gIC8qIGVzbGludC1lbmFibGUgKi9cbn1cblxuLyoqXG4gKiBGaW5kIHRoZSBTaG9waWZ5IGltYWdlIGF0dHJpYnV0ZSBzaXplXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNyY1xuICogQHJldHVybnMge251bGx9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZVNpemUgKHNyYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICB2YXIgbWF0Y2ggPSBzcmMubWF0Y2goLy4rXygoPzpwaWNvfGljb258dGh1bWJ8c21hbGx8Y29tcGFjdHxtZWRpdW18bGFyZ2V8Z3JhbmRlKXxcXGR7MSw0fXhcXGR7MCw0fXx4XFxkezEsNH0pW19cXC5AXS8pXG4gIC8qIGVzbGluZy1lbmFibGUgKi9cblxuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4gbWF0Y2hbMV1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbi8qKlxuICogQWRkcyBhIFNob3BpZnkgc2l6ZSBhdHRyaWJ1dGUgdG8gYSBVUkxcbiAqXG4gKiBAcGFyYW0gc3JjXG4gKiBAcGFyYW0gc2l6ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXplZEltYWdlVXJsIChzcmMsIHNpemUpIHtcbiAgaWYgKHNpemUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gc3JjXG4gIH1cblxuICBpZiAoc2l6ZSA9PT0gJ21hc3RlcicpIHtcbiAgICByZXR1cm4gcmVtb3ZlUHJvdG9jb2woc3JjKVxuICB9XG5cbiAgdmFyIG1hdGNoID0gc3JjLm1hdGNoKC9cXC4oanBnfGpwZWd8Z2lmfHBuZ3xibXB8Yml0bWFwfHRpZmZ8dGlmKShcXD92PVxcZCspPyQvaSlcblxuICBpZiAobWF0Y2gpIHtcbiAgICB2YXIgcHJlZml4ID0gc3JjLnNwbGl0KG1hdGNoWzBdKVxuICAgIHZhciBzdWZmaXggPSBtYXRjaFswXVxuXG4gICAgcmV0dXJuIHJlbW92ZVByb3RvY29sKHByZWZpeFswXSArICdfJyArIHNpemUgKyBzdWZmaXgpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvdG9jb2wgKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvaHR0cChzKT86LywgJycpXG59XG4iLCJpbXBvcnQgcmFkaW8gZnJvbSAnQC9saWIvcmFkaW8uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2R1Y3RTZWxlY3Rpb24gKG5vZGUsIG9wdHMpIHtcbiAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHNlbGVjdDogJ1tkYXRhLW9wdGlvbi1zZWxlY3RdJyxcbiAgICByYWRpbzogJ1tkYXRhLW9wdGlvbi1yYWRpb10nLFxuICAgIG1haW46ICdbZGF0YS1vcHRpb24tbWFpbl0nLFxuICB9LCBvcHRzKVxuXG4gIGNvbnNvbGUubG9nKG5vZGUsIG9wdHMpXG4gIGNvbnN0IGxpc3RlbmVycyA9IFtdXG5cbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgb3B0aW9uczogW11cbiAgfVxuXG4gIGNvbnN0IHNlbGVjdHMgPSBzbGF0ZXIucXNhKG9wdHMuc2VsZWN0KVxuICBjb25zdCByYWRpb3MgPSBzbGF0ZXIucXNhKG9wdHMucmFkaW8pXG4gIGNvbnN0IG1haW4gPSBzbGF0ZXIucXMob3B0cy5tYWluKVxuXG4gIGlmICghbWFpbiB8fCAhbWFpbi5sZW5ndGgpIHRocm93ICdkYXRhLW9wdGlvbi1tYWluIGlzIG1pc3NpbmcnXG4gIGlmIChyYWRpb3MubGVuZ3RoID4gMykgdGhyb3cgJ3lvdSBoYXZlIG1vcmUgdGhhbiB0aHJlZSByYWRpbyBncm91cHMnXG4gIGlmIChzZWxlY3RzLmxlbmd0aCA+IDMpIHRocm93ICd5b3UgaGF2ZSBtb3JlIHRoYW4gdGhyZWUgc2VsZWN0IGlucHV0cydcblxuICBjb25zdCB2YXJpYW50cyA9IFtdLnNsaWNlLmNhbGwobWFpbi5jaGlsZHJlbikucmVkdWNlKCh2YXJpYW50cywgY2hpbGQpID0+IHtcbiAgICB2YXJpYW50c1tjaGlsZC5pbm5lckhUTUxdID0gY2hpbGQudmFsdWVcbiAgICByZXR1cm4gdmFyaWFudHNcbiAgfSwge30pXG5cbiAgc2VsZWN0cy5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgaWYgKHNlbGVjdC5ub2RlTmFtZSAhPT0gJ1NFTEVDVCcpIHRocm93ICdkYXRhLW9wdGlvbi1zZWxlY3Qgc2hvdWxkIGJlIGRlZmluZWQgb24gdGhlIGluZGl2aWR1YWwgb3B0aW9uIHNlbGVjdG9ycydcblxuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoc2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKVxuXG4gICAgLy8gc2V0IGluaXRpYWwgdmFsdWVcbiAgICBzdGF0ZS5vcHRpb25zW2luZGV4XSA9IHNlbGVjdC52YWx1ZVxuXG4gICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgc3RhdGUub3B0aW9uc1tpbmRleF0gPSBlLnRhcmdldC52YWx1ZVxuICAgICAgdXBkYXRlU2VsZWN0aW9uKClcbiAgICB9KVxuICB9KVxuXG4gIHJhZGlvcy5mb3JFYWNoKHIgPT4ge1xuICAgIGlmIChyLm5vZGVOYW1lID09PSAnSU5QVVQnKSB0aHJvdyAnZGF0YS1vcHRpb24tcmFkaW8gc2hvdWxkIGJlIGRlZmluZWQgb24gYSBwYXJlbnQgb2YgdGhlIHJhZGlvIGdyb3VwLCBub3QgdGhlIGlucHV0cyB0aGVtc2VsdmVzJ1xuXG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChyLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKVxuICAgIGNvbnN0IGlucHV0cyA9IFtdLnNsaWNlLmNhbGwoci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKSlcblxuICAgIC8vIHNldCBpbml0aWFsIHZhbHVlXG4gICAgaW5wdXRzLmZvckVhY2gociA9PiB7XG4gICAgICBpZiAoci5jaGVja2VkKSBzdGF0ZS5vcHRpb25zW2luZGV4XSA9IHIudmFsdWVcbiAgICB9KVxuXG4gICAgcmFkaW8oaW5wdXRzLCB2YWx1ZSA9PiB7XG4gICAgICBzdGF0ZS5vcHRpb25zW2luZGV4XSA9IHZhbHVlXG4gICAgICB1cGRhdGVTZWxlY3Rpb24oKVxuICAgIH0pXG4gIH0pXG5cbiAgdXBkYXRlU2VsZWN0aW9uKClcblxuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3Rpb24gKCkge1xuICAgIHN0YXRlLmlkID0gdmFyaWFudHNbc3RhdGUub3B0aW9ucy5qb2luKCcgLyAnKV1cbiAgICBtYWluLnZhbHVlID0gc3RhdGUuaWRcbiAgICBmb3IgKGxldCBmbiBvZiBsaXN0ZW5lcnMpIGZuKHN0YXRlKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgc3RhdGUgKCkge1xuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfSxcbiAgICBvblVwZGF0ZSAoZm4pIHtcbiAgICAgIGxpc3RlbmVycy5pbmRleE9mKGZuKSA8IDAgJiYgbGlzdGVuZXJzLnB1c2goZm4pXG4gICAgICByZXR1cm4gKCkgPT4gbGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lcnMuaW5kZXhPZihmbiksIDEpXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYWRpbyAocmFkaW9zLCBjYikge1xuICByYWRpb3MubWFwKHIgPT4gci5vbmNsaWNrID0gZSA9PiBjYihlLnRhcmdldC52YWx1ZSkpXG59XG4iLCJpbXBvcnQgc2xpY2VkIGZyb20gJ3NsaWNlZCdcblxud2luZG93LnNsYXRlciA9IE9iamVjdC5hc3NpZ24od2luZG93LnNsYXRlciB8fCB7fSwge1xuICBxcyAocSwgY3R4KSB7XG4gICAgcmV0dXJuIChjdHggfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3IocSlcbiAgfSxcbiAgcXNhIChxLCBjdHgpIHtcbiAgICByZXR1cm4gc2xpY2VkKChjdHggfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwocSkpXG4gIH0sXG4gIGdlYnRuIChxLCBjdHgpIHtcbiAgICByZXR1cm4gc2xpY2VkKChjdHggfHwgZG9jdW1lbnQpLmdldEVsZW1lbnRzQnlUYWdOYW1lKHEpKVxuICB9LFxuICBnZWJpIChxKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHEpXG4gIH1cbn0pXG4iLCJpbXBvcnQgb3BlcmF0b3IgZnJvbSAnb3BlcmF0b3InXG5cbi8qKlxuICogb3BlcmF0b3IgaXMgYSB0aW55IFwiUEpBWFwiIGxpYnJhcnksIHBsZWFzZSBoYXZlIGEgbG9vayBhdCB0aGUgZG9jcyBmb3JcbiAqIG1vcmUgaW5mb1xuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzdHJhdHRvbmJhaWxleS9vcGVyYXRvclxuICovXG5jb25zdCByb3V0ZXIgPSBvcGVyYXRvcignI3Jvb3QnLCBbXG4gIC8qKlxuICAgKiBjcmVhdGVzIGEgcGFnZSB0cmFuc2l0aW9uXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzdHJhdHRvbmJhaWxleS9vcGVyYXRvciN0cmFuc2l0aW9uLWFuaW1hdGlvblxuICAgKi9cbiAgKHN0YXRlKSA9PiBuZXcgUHJvbWlzZShyZXMgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaXMtdHJhbnNpdGlvbmluZycpXG4gICAgc2V0VGltZW91dChyZXMsIDIwMClcbiAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdHJhbnNpdGlvbmluZycpLCAzMDApXG4gIH0pXG5dKVxuXG5yb3V0ZXIub24oJ2FmdGVyJywgKHsgcHJldmlvdXNEb2N1bWVudCwgbG9jYXRpb24gfSkgPT4ge1xuICBkb2N1bWVudC50aXRsZSA9IHByZXZpb3VzRG9jdW1lbnQudGl0bGVcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgbG9jYXRpb24pXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUNBO0FBZ0RBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUEzREE7QUFDQTtBQThDQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUVBOzs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFFQTs7OztBQUdBO0FBRUE7QUFBQTtBQUNBO0FBQUE7OztBQUdBO0FBQUE7QUFBQTtBQUVBOzs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkdBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBOzs7Ozs7OztBQVFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFmQTtBQUNBO0FBaUJBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFTQTs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUMxQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==