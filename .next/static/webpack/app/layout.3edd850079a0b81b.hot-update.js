"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"62c84417f56b\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzQ1NTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI2MmM4NDQxN2Y1NmJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Nav.jsx":
/*!****************************!*\
  !*** ./components/Nav.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n// link (next js)\n\nvar _s = $RefreshSig$();\n\n// next hooks\n\n// framer motion\n\nconst links = [\n    {\n        path: \"/\",\n        name: \"Accueil\"\n    },\n    {\n        path: \"/projects\",\n        name: \"Mes projets\"\n    },\n    {\n        path: \"/contact\",\n        name: \"Me contacter\"\n    }\n];\nconst Nav = (param)=>{\n    let { containerStyles, linkStyles, underlineStyles } = param;\n    _s();\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"\".concat(containerStyles),\n        children: links.map((link, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: link.path,\n                className: \"capitalize \".concat(linkStyles),\n                children: [\n                    link.path === path && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                        initial: {\n                            y: \"-100%\"\n                        },\n                        animate: {\n                            y: 0\n                        },\n                        transition: {\n                            type: \"tween\"\n                        },\n                        layoutId: \"underline\",\n                        className: \"\".concat(underlineStyles)\n                    }, void 0, false, {\n                        fileName: \"/Users/tleodev/TLeoDev/Portfolio/components/Nav.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 15\n                    }, undefined),\n                    link.name\n                ]\n            }, index, true, {\n                fileName: \"/Users/tleodev/TLeoDev/Portfolio/components/Nav.jsx\",\n                lineNumber: 22,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/tleodev/TLeoDev/Portfolio/components/Nav.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Nav, \"kx72sda92+XlSh1QiZvq/YVQxpY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsaUJBQWlCOzs7QUFDWTtBQUU3QixhQUFhO0FBQ2lDO0FBRTlDLGdCQUFnQjtBQUN1QjtBQUV2QyxNQUFNRyxRQUFRO0lBQ1o7UUFBRUMsTUFBTTtRQUFLQyxNQUFNO0lBQVU7SUFDN0I7UUFBRUQsTUFBTTtRQUFhQyxNQUFNO0lBQWM7SUFDekM7UUFBRUQsTUFBTTtRQUFZQyxNQUFNO0lBQWU7Q0FDMUM7QUFFRCxNQUFNQyxNQUFNO1FBQUMsRUFBRUMsZUFBZSxFQUFFQyxVQUFVLEVBQUVDLGVBQWUsRUFBRTs7SUFDM0QsTUFBTUwsT0FBT0gsNERBQVdBO0lBQ3hCLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFXLEdBQW1CLE9BQWhCSjtrQkFDaEJKLE1BQU1TLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztZQUNoQixxQkFDRSw4REFBQ2Qsa0RBQUlBO2dCQUNIZSxNQUFNRixLQUFLVCxJQUFJO2dCQUVmTyxXQUFXLGNBQXlCLE9BQVhIOztvQkFFeEJLLEtBQUtULElBQUksS0FBS0Esc0JBQ2IsOERBQUNGLGlEQUFNQSxDQUFDYyxJQUFJO3dCQUNWQyxTQUFTOzRCQUFFQyxHQUFHO3dCQUFRO3dCQUN0QkMsU0FBUzs0QkFBRUQsR0FBRzt3QkFBRTt3QkFDaEJFLFlBQVk7NEJBQUVDLE1BQU07d0JBQVE7d0JBQzVCQyxVQUFTO3dCQUNUWCxXQUFXLEdBQW1CLE9BQWhCRjs7Ozs7O29CQUdqQkksS0FBS1IsSUFBSTs7ZUFaTFM7Ozs7O1FBZVg7Ozs7OztBQUdOO0dBMUJNUjs7UUFDU0wsd0RBQVdBOzs7S0FEcEJLO0FBNEJOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzeD85ODk5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpbmsgKG5leHQganMpXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vLyBuZXh0IGhvb2tzXHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuXHJcbi8vIGZyYW1lciBtb3Rpb25cclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5jb25zdCBsaW5rcyA9IFtcclxuICB7IHBhdGg6ICcvJywgbmFtZTogJ0FjY3VlaWwnIH0sXHJcbiAgeyBwYXRoOiAnL3Byb2plY3RzJywgbmFtZTogJ01lcyBwcm9qZXRzJyB9LFxyXG4gIHsgcGF0aDogJy9jb250YWN0JywgbmFtZTogJ01lIGNvbnRhY3RlcicgfSxcclxuXTtcclxuXHJcbmNvbnN0IE5hdiA9ICh7IGNvbnRhaW5lclN0eWxlcywgbGlua1N0eWxlcywgdW5kZXJsaW5lU3R5bGVzIH0pID0+IHtcclxuICBjb25zdCBwYXRoID0gdXNlUGF0aG5hbWUoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e2Ake2NvbnRhaW5lclN0eWxlc31gfT5cclxuICAgICAge2xpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj17bGluay5wYXRofVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjYXBpdGFsaXplICR7bGlua1N0eWxlc31gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGluay5wYXRoID09PSBwYXRoICYmIChcclxuICAgICAgICAgICAgICA8bW90aW9uLnNwYW5cclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgeTogJy0xMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAwIH19XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IHR5cGU6ICd0d2VlbicgfX1cclxuICAgICAgICAgICAgICAgIGxheW91dElkPSd1bmRlcmxpbmUnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3VuZGVybGluZVN0eWxlc31gfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtsaW5rLm5hbWV9XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVBhdGhuYW1lIiwibW90aW9uIiwibGlua3MiLCJwYXRoIiwibmFtZSIsIk5hdiIsImNvbnRhaW5lclN0eWxlcyIsImxpbmtTdHlsZXMiLCJ1bmRlcmxpbmVTdHlsZXMiLCJuYXYiLCJjbGFzc05hbWUiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJocmVmIiwic3BhbiIsImluaXRpYWwiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwibGF5b3V0SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Nav.jsx\n"));

/***/ })

});