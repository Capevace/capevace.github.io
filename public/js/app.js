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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/_css/style.css":
/*!*******************************!*\
  !*** ./public/_css/style.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./public/_js/main.js":
/*!****************************!*\
  !*** ./public/_js/main.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var slider = __webpack_require__(/*! ./slider */ "./public/_js/slider.js");

var work = __webpack_require__(/*! ./work */ "./public/_js/work.js");

var ready = __webpack_require__(/*! ./util */ "./public/_js/util.js").ready; // var backgroundCanvas = require('./background-canvas');


ready(function () {
  slider('project-slider');
  work('work'); // backgroundCanvas('background-canvas-container');
});

/***/ }),

/***/ "./public/_js/slider.js":
/*!******************************!*\
  !*** ./public/_js/slider.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (sliderId) {
  var slider = document.getElementById(sliderId);

  if (!slider) {
    window.console.warn('No slider with id "' + sliderId + '" found.');
    return;
  } // var slideContainer = slider.querySelector('.slider-slides');


  var slides = slider.querySelectorAll('.slider-slide');
  var currentSlide = 0;
  var slideCount = slides.length;
  var slideInterval = resetInterval();
  var nextButton = slider.querySelector('.slider-action-next');
  var prevButton = slider.querySelector('.slider-action-prev');

  if (slideCount === 1) {
    clearInterval(slideInterval);
    if (nextButton) nextButton.style.display = 'none';
    if (prevButton) prevButton.style.display = 'none';
  }

  console.log(slides);

  for (var i = 0; i < slideCount; i++) {
    if (i === 0) {
      slides[i].style.opacity = 1;
    } else {
      slides[i].style.opacity = 0;
    } // slides[i].style.marginLeft = '-' + (i * 50) + '%';

  }

  if (nextButton) nextButton.addEventListener('click', function (e) {
    e.preventDefault();
    updateSlide(currentSlide + 1);
    slideInterval = resetInterval();
  });
  if (prevButton) prevButton.addEventListener('click', function (e) {
    e.preventDefault();
    updateSlide(currentSlide - 1);
    slideInterval = resetInterval();
  });

  function resetInterval() {
    clearInterval(slideInterval);
    return setInterval(function () {
      updateSlide(currentSlide + 1);
    }, 5000);
  }

  function updateSlide(index) {
    var oldSlide = currentSlide;
    currentSlide = index;

    if (currentSlide >= slideCount) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = slideCount - 1;
    } // slideContainer.style.marginLeft = '-' + (currentSlide * 100) + '%';


    slides[currentSlide].style.opacity = 1;
    slides[currentSlide].style.zIndex = 1;
    slides[oldSlide].style.opacity = 0;
    slides[oldSlide].style.zIndex = 0;
  }
};

/***/ }),

/***/ "./public/_js/util.js":
/*!****************************!*\
  !*** ./public/_js/util.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.ready = function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

module.exports.addClass = function addClass(element, className) {
  if (element.classList) element.classList.add(className);else element.className += ' ' + className;
};

module.exports.removeClass = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
};

/***/ }),

/***/ "./public/_js/work.js":
/*!****************************!*\
  !*** ./public/_js/work.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ./util */ "./public/_js/util.js");

module.exports = function work(workContainerId) {
  var container = document.querySelector('#' + workContainerId + ' .work-items');
  var viewMoreButton = container ? container.querySelector('#view-more-work-button') : null;
  if (viewMoreButton) viewMoreButton.addEventListener('click', function (e) {
    e.preventDefault();
    util.addClass(container, 'work-expanded');
  });
};

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./public/_js/main.js ./public/_css/style.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Lukas/Projects/capevace.github.io/public/_js/main.js */"./public/_js/main.js");
module.exports = __webpack_require__(/*! /Users/Lukas/Projects/capevace.github.io/public/_css/style.css */"./public/_css/style.css");


/***/ })

/******/ });