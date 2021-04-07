/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction pageLoad() {\n    const content = document.getElementById(\"content\")\n    const h1 = document.createElement(\"h1\")\n    h1.textContent = \"Contact us\"\n    content.appendChild(h1)\n    const container = document.createElement(\"div\")\n    container.classList.add(\"container\")\n    const contactBox = document.createElement(\"div\")\n    contactBox.classList.add(\"contact-box\")\n    const info = {\n                \"Address\": \"42 TQT Street, Distinct 3, HCM City, Viet Nam\", \n                \"Phone number\": \"0942xxxxxx\",\n                \"Email\": \"42@gmail.com\",\n                }\n    \n\n    for(const [key, value] of Object.entries(info)) {\n        const p = document.createElement(\"p\")\n        p.textContent = `${key}: ${value}`\n        contactBox.appendChild(p)\n    }\n    container.appendChild(contactBox)\n    content.appendChild(container)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction pageLoad() {\n    const content = document.getElementById(\"content\");\n    const h1 = document.createElement(\"h1\")\n    h1.textContent = \"Le's Restaurant\";\n    const p = document.createElement(\"p\")\n    p.textContent = \"We are a small restaurant that you can eat and code at the same time. Our food will definitely make your brain fresh again. And guess what, you can have these ducks while eating\";\n    const pic1 = document.createElement(\"img\")\n    pic1.setAttribute(\"src\", \"../img/IMG_7540.jpeg\")\n    const imgCtn = document.createElement('div')\n    imgCtn.classList.add(\"imgCtn\")\n    imgCtn.appendChild(pic1)\n    const textCtn = document.createElement('div')\n    textCtn.classList.add(\"textCtn\")\n    textCtn.appendChild(p)\n    const ctn = document.createElement('div')\n    ctn.classList.add(\"ctn\")\n    ctn.appendChild(imgCtn)\n    ctn.appendChild(textCtn)\n    const container = document.createElement('div')\n    container.classList.add(\"container\")\n    container.appendChild(ctn)\n    content.appendChild(h1)\n    content.appendChild(container)\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst tabs = document.querySelectorAll(\".tabs button\")\nconst content = document.getElementById(\"content\")\nconst pageLoad = {Home: _home__WEBPACK_IMPORTED_MODULE_0__.default, Menu: _menu__WEBPACK_IMPORTED_MODULE_1__.default, Contact: _contact__WEBPACK_IMPORTED_MODULE_2__.default}\ntabs.forEach(tab => {\n    tab.addEventListener('click', e => {\n        if(!tab.classList.contains(\"isActive\")) {\n            content.textContent = \"\"\n            removeActiveTab()\n            activeCurrentTab(tab)\n            pageLoad[`${e.target.textContent}`]()\n        }\n        \n    })\n})\n\n;(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)()\n\nfunction removeActiveTab() {\n    tabs.forEach(tab => {\n        tab.classList.remove(\"isActive\")\n    })\n}\n\nfunction activeCurrentTab(tab) {\n    tab.classList.add(\"isActive\")\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction pageLoad() {\n    const content = document.getElementById(\"content\");\n    const columnCtn = document.createElement(\"div\")\n    columnCtn.classList.add(\"column-container\")\n    const h1 = document.createElement(\"h1\")\n    h1.textContent = \"Menu\"\n    columnCtn.appendChild(h1)\n    const p = document.createElement(\"p\")\n    p.textContent = \"We deliver healthy dishes for your to have the best code ever\"\n    columnCtn.appendChild(p)\n    const menu = document.createElement(\"div\")\n    menu.classList.add(\"menu\")\n    const item1 = makeItem(\"../img/comtam.jpg\", \"Com tam dish\")\n    const item2 = makeItem(\"../img/pizza.jpg\", \"Pizza\")\n    menu.appendChild(item1)\n    menu.appendChild(item2)\n    columnCtn.appendChild(menu)\n    content.appendChild(columnCtn)\n}\n\nfunction makeItem(src, alt) {\n    const item = document.createElement(\"div\")\n    item.classList.add(\"item\")\n    const img = document.createElement(\"img\")\n    img.setAttribute(\"src\", src)\n    img.setAttribute(\"alt\", alt)\n    item.appendChild(img)\n\n    return item\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;