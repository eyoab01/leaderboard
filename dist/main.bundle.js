/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/game.js */ \"./src/modules/game.js\");\n/* harmony import */ var _modules_toast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/toast.js */ \"./src/modules/toast.js\");\n\r\n\r\n\r\n\r\nconst refreshButton = document.getElementById('refresh');\r\nrefreshButton.addEventListener('click', async () => {\r\n  (0,_modules_game_js__WEBPACK_IMPORTED_MODULE_1__.showScores)();\r\n});\r\n\r\nconst submitButton = document.querySelector('form > button');\r\nsubmitButton.addEventListener('click', async (e) => {\r\n  e.preventDefault();\r\n  const user = document.getElementById('name').value;\r\n  const score = document.getElementById('score').value;\r\n  const newScore = await (0,_modules_game_js__WEBPACK_IMPORTED_MODULE_1__.addScore)(user, score);\r\n  document.querySelector('form').reset();\r\n  (0,_modules_toast_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newScore.result);\r\n});\r\n\r\n(0,_modules_game_js__WEBPACK_IMPORTED_MODULE_1__.showScores)();\r\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addScore\": () => (/* binding */ addScore),\n/* harmony export */   \"showScores\": () => (/* binding */ showScores)\n/* harmony export */ });\nconst gameID = 'xLw0Vz72706E0aKqRFgf';\r\nconst url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';\r\n\r\nconst getScores = async () => {\r\n  const games = await fetch(`${url}/games/${gameID}/scores/`);\r\n  const gamesJSON = await games.json();\r\n  return gamesJSON.result;\r\n};\r\n\r\nconst addScore = async (user, score) => {\r\n  const newScore = await fetch(`${url}/games/${gameID}/scores/`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({ user, score }),\r\n  });\r\n  const newScoreJSON = await newScore.json();\r\n  return newScoreJSON;\r\n};\r\n\r\nconst showScores = async () => {\r\n  const scoresList = document.getElementById('scores');\r\n  scoresList.innerHTML = '';\r\n  const scores = await getScores();\r\n\r\n  scores.forEach((score) => {\r\n    const li = document.createElement('li');\r\n    li.innerHTML = `${score.user}: ${score.score}`;\r\n    scoresList.appendChild(li);\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/toast.js":
/*!******************************!*\
  !*** ./src/modules/toast.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showToast = (message) => {\r\n  const toast = document.getElementById('toast');\r\n  toast.innerText = message;\r\n  toast.style.display = 'block';\r\n  setTimeout(() => {\r\n    toast.style.display = '';\r\n  }, 3000);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ showToast });\r\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/toast.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @import url('https://fonts.googleapis.com/css2?family=Rampart+One&family=Tilt+Neon&display=swap');\\n| \\n| $breakpoint-tablet: 768px;\");\n\n//# sourceURL=webpack://leaderboard/./src/style.scss?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);