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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/key.js\");\n\r\n\r\n//QUERY SELECTORS//\r\nlet searchForm = document.querySelector('#search-form');\r\nlet searchInput = document.querySelector('#search-input');\r\n\r\n//Show a default location weather or placeholder\r\n\r\n//Fetch function\r\nasync function fetchWeather(location) {\r\n    try {\r\n        const response = await fetch(\r\n            `http://api.weatherapi.com/v1/current.json?key=${_key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}&q=${location}`,\r\n            {\r\n                mode: 'cors',\r\n            }\r\n        );    \r\n        const weatherObj = await response.json();\r\n        console.log('fetching data...');\r\n        await timeout(5000);\r\n        //Test the timeout and fetch\r\n        console.log(weatherObj);\r\n        (function logWeatherData() {\r\n            console.log(weatherObj.location.name);\r\n            console.log(weatherObj.location.region);\r\n            console.log(weatherObj.current.condition.text);\r\n            console.log(weatherObj.current.condition.icon);\r\n            console.log(weatherObj.current.temp_f);\r\n        })();\r\n        //Pull JSON and display it\r\n        displayWeather(weatherObj);\r\n    } catch (err) {\r\n        console.log('An error has occured')\r\n        console.log(err);\r\n    }    \r\n}\r\n\r\n//Fetch weather data via submit form event\r\nsearchForm.addEventListener('submit', (evt) => {\r\n        evt.preventDefault();\r\n        searchWeather();\r\n    });\r\n\r\n//Function to search input location\r\nfunction searchWeather() {\r\n    let searchInput = document.querySelector('#search-input');\r\n    const searchLocation = searchInput.value;\r\n    fetchWeather(searchLocation);\r\n}\r\n\r\n//SetTimeout as a promise for async/await\r\nfunction timeout(ms) {\r\n    return new Promise(resolve => setTimeout(resolve, ms));\r\n    //Show a loading message until fetch is complete\r\n}\r\n\r\n//DOM MANIPULATION//\r\nfunction displayWeather(data) {\r\n    const city = data.location.name;\r\n    const region = data.location.region;\r\n    const condition = data.current.condition.text;\r\n    const icon = data.current.condition.icon;\r\n    const tempf = data.current.temp_f;\r\n    console.log(city, region, condition, icon, tempf);\r\n\r\n    let location = document.querySelector('#location');\r\n    location.innerText = city + \", \" + region;\r\n    let temp = document.querySelector('#temp');\r\n    temp.innerText = tempf + \"°F\";\r\n    let conditionIcon = document.querySelector('#condition-icon');\r\n    conditionIcon.src = icon;\r\n    let conditionText = document.querySelector('#condition-text');\r\n    conditionText.innerText = condition; \r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/key.js":
/*!********************!*\
  !*** ./src/key.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//set api key to a variable and then add it to gitingnore\r\n\r\nconst key = '06291ad7191745fa992190804230705';\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (key);\n\n//# sourceURL=webpack://weather-app/./src/key.js?");

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