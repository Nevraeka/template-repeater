/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * This is a fork of a repeater created by Leon Revill (https://github.com/RevillWeb/rebel-repeater).
	 *
	 * Blog: http://www.revilweb.com
	 * GitHub: https://github.com/RevillWeb
	 * Twitter: @RevillWeb
	 */
	
	var TemplateRepeater = function (_HTMLElement) {
	    _inherits(TemplateRepeater, _HTMLElement);
	
	    function TemplateRepeater() {
	        _classCallCheck(this, TemplateRepeater);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TemplateRepeater).apply(this, arguments));
	    }
	
	    _createClass(TemplateRepeater, [{
	        key: 'createdCallback',
	        value: function createdCallback() {
	            this.shadow = this.createShadowRoot();
	        }
	    }, {
	        key: 'attachedCallback',
	        value: function attachedCallback() {
	            this.render();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var renderError = "Content should be an Array of objects.";
	            var content = TemplateRepeater.fromJson(this.getAttribute('content'));
	            var template = this.shadow.querySelector('template').cloneNode(true);
	
	            this.shadow.innerHTML = Array.isArray(content) ? content.map(mapTemplate).join('') : new Error(renderError);
	
	            function mapTemplate(item) {
	                return TemplateRepeater.interpolate(template, item);
	            }
	
	            return this.shadow.innerHTML;
	        }
	    }, {
	        key: 'attributeChangedCallback',
	        value: function attributeChangedCallback(name) {
	            switch (name) {
	                case "content":
	                    this.render();
	                    break;
	            }
	        }
	    }], [{
	        key: 'interpolate',
	        value: function interpolate(template, obj) {
	            if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == "object") {
	                for (var key in obj) {
	                    var searchPattern = "${" + key + "}";
	                    if (template.innerHTML.indexOf(searchPattern) > -1) {
	                        template = template.innerHTML.replace(searchPattern, obj[key]);
	                        delete obj[key];
	                    }
	                }
	            }
	            return template;
	        }
	    }, {
	        key: 'fromJson',
	        value: function fromJson(str) {
	            var obj = null;
	            if (typeof str == "string") {
	                try {
	                    obj = JSON.parse(str);
	                } catch (e) {
	                    throw new Error("Invalid JSON string provided. ");
	                }
	            }
	            return obj;
	        }
	    }]);
	
	    return TemplateRepeater;
	}(HTMLElement);
	
	document.registerElement("template-repeater", TemplateRepeater);

/***/ }
/******/ ]);
//# sourceMappingURL=template-repeater.js.map