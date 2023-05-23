/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//QUERY SELECTORS//\r\nlet searchInput = document.querySelector('#search-input');\r\nlet searchBtn = document.querySelector('#search-button');\r\n\r\n//show a default location weather or placeholder\r\nasync function fetchWeather(location) {\r\n    const response = await fetch(\r\n        `http://api.weatherapi.com/v1/current.json?key=06291ad7191745fa992190804230705&q=${location}`,\r\n        {\r\n            mode: 'cors',\r\n        }\r\n    );\r\n    console.log(response.json);\r\n}\r\n\r\n//fetch weather data via search input\r\nsearchBtn.addEventListener('click', getWeather);\r\nfunction getWeather() {\r\n    let searchInput = document.querySelector('#search-input');\r\n    const searchLocation = searchInput.value;\r\n    fetchWeather(searchLocation);\r\n}\r\n//show a loading message until fetch is complete\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;