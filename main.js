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

eval("//QUERY SELECTORS//\r\nlet searchForm = document.querySelector('#search-form');\r\nlet searchInput = document.querySelector('#search-input');\r\nlet searchBtn = document.querySelector('#search-button');\r\n\r\n//show a default location weather or placeholder\r\n\r\n//fetch\r\nasync function fetchWeather(location) {\r\n    try {\r\n        const response = await fetch(\r\n            `http://api.weatherapi.com/v1/current.json?key=06291ad7191745fa992190804230705&q=${location}`,\r\n            {\r\n                mode: 'cors',\r\n            }\r\n        );    \r\n        const weatherObj = await response.json();\r\n        console.log('fetching data...');\r\n        await timeout(5000);    \r\n        //console.log(weatherObj);\r\n        (function logWeatherData() {\r\n            console.log(weatherObj.location.name);\r\n            console.log(weatherObj.location.region);\r\n            console.log(weatherObj.current.condition.text);\r\n            console.log(weatherObj.current.condition.icon);\r\n            console.log(weatherObj.current.temp_f);\r\n        })();\r\n        //show a loading message until fetch is complete (test with timeout)\r\n    } catch (err) {\r\n        console.log('An error has occured')\r\n        console.log(err);\r\n    }\r\n    \r\n}\r\n\r\n//fetch weather data via submit form event\r\nsearchForm.addEventListener('submit', (evt) => {\r\n        evt.preventDefault();\r\n        searchWeather();\r\n    });\r\n\r\n//function to search input location\r\nfunction searchWeather() {\r\n    let searchInput = document.querySelector('#search-input');\r\n    const searchLocation = searchInput.value;\r\n    fetchWeather(searchLocation);\r\n}\r\n\r\n//setTimeout as a promise for async/await\r\nfunction timeout(ms) {\r\n    return new Promise(resolve => setTimeout(resolve, ms));\r\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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