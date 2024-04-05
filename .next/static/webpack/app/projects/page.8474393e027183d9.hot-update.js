"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/projects/page",{

/***/ "(app-pages-browser)/./app/projects/page.jsx":
/*!*******************************!*\
  !*** ./app/projects/page.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/tabs */ \"(app-pages-browser)/./components/ui/tabs.jsx\");\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ProjectCard */ \"(app-pages-browser)/./components/ProjectCard.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst projectData = [\n    {\n        image: \"/work/3.png\",\n        category: \"react js\",\n        name: \"test1\",\n        description: \"test1 description test1 description test1 description test1 description test1 description\",\n        link: \"/\",\n        github: \"/\"\n    },\n    {\n        image: \"/work/4.png\",\n        category: \"react js\",\n        name: \"test2\",\n        description: \"test2 description test2 description test2 description test2 description test2 description\",\n        link: \"/\",\n        github: \"/\"\n    },\n    {\n        image: \"/work/2.png\",\n        category: \"react js\",\n        name: \"test3\",\n        description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.\",\n        link: \"/\",\n        github: \"/\"\n    },\n    {\n        image: \"/work/1.png\",\n        category: \"react js\",\n        name: \"test4\",\n        description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.\",\n        link: \"/\",\n        github: \"/\"\n    },\n    {\n        image: \"/work/3.png\",\n        category: \"next js\",\n        name: \"test5\",\n        description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.\",\n        link: \"/\",\n        github: \"/\"\n    }\n];\n// remove category duplicates\nconst uniqueCategories = [\n    \"all projects\",\n    ...new Set(projectData.map((item)=>item.category))\n];\nconst Projects = ()=>{\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(uniqueCategories);\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all projects\");\n    const filteredProjects = projectData.filter((project)=>{\n        // if category is 'all projects' return all projects, else filter by category\n        return category === \"all projects\" ? project : project.category === category;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"min-h-screen pt-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"section-title mb-8 xl:mb-16 text-center mx-auto\",\n                    children: \"Mes projets\"\n                }, void 0, false, {\n                    fileName: \"/Users/tleodev/TLeoDev/Portfolio/app/projects/page.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {\n                    defaultValue: category,\n                    className: \"mb-24 xl:mb-48\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_2__.TabsList, {\n                            className: \"w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none\",\n                            children: categories.map((category, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_2__.TabsTrigger, {\n                                    onClick: ()=>setCategory(category),\n                                    value: category,\n                                    className: \"capitalize w-[162px] md:w-auto\",\n                                    children: category\n                                }, index, false, {\n                                    fileName: \"/Users/tleodev/TLeoDev/Portfolio/app/projects/page.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/tleodev/TLeoDev/Portfolio/app/projects/page.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4\",\n                            children: filteredProjects.map((project, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_2__.TabsContent, {\n                                    value: category,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        project: project\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tleodev/TLeoDev/Portfolio/app/projects/page.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"/Users/tleodev/TLeoDev/Portfolio/app/projects/page.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/tleodev/TLeoDev/Portfolio/app/projects/page.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tleodev/TLeoDev/Portfolio/app/projects/page.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tleodev/TLeoDev/Portfolio/app/projects/page.jsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tleodev/TLeoDev/Portfolio/app/projects/page.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Projects, \"uIDpnm9lp0WNH7Jw16ygPow0ZUw=\");\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9qZWN0cy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3QztBQUN3QztBQUM3QjtBQUVuRCxNQUFNTyxjQUFjO0lBQ2xCO1FBQ0VDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxNQUFNO1FBQ05DLGFBQ0k7UUFDSkMsTUFBTTtRQUNOQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFTCxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsTUFBTTtRQUNOQyxhQUNJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLE1BQU07UUFDTkMsYUFDSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7SUFDVjtJQUNBO1FBQ0VMLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxNQUFNO1FBQ05DLGFBQ0k7UUFDSkMsTUFBTTtRQUNOQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFTCxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsTUFBTTtRQUNOQyxhQUNJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtJQUNWO0NBQ0Q7QUFFRCw2QkFBNkI7QUFDN0IsTUFBTUMsbUJBQW1CO0lBQ3ZCO09BQ0csSUFBSUMsSUFBSVIsWUFBWVMsR0FBRyxDQUFDLENBQUNDLE9BQVNBLEtBQUtSLFFBQVE7Q0FDbkQ7QUFFRCxNQUFNUyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHbkIsK0NBQVFBLENBQUNhO0lBQzdDLE1BQU0sQ0FBQ0wsVUFBVVksWUFBWSxHQUFHcEIsK0NBQVFBLENBQUM7SUFFekMsTUFBTXFCLG1CQUFtQmYsWUFBWWdCLE1BQU0sQ0FBQyxDQUFDQztRQUMzQyw2RUFBNkU7UUFDN0UsT0FBT2YsYUFBYSxpQkFDaEJlLFVBQ0FBLFFBQVFmLFFBQVEsS0FBS0E7SUFDM0I7SUFFQSxxQkFDRSw4REFBQ2dCO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQWtEOzs7Ozs7OEJBSWhFLDhEQUFDeEIscURBQUlBO29CQUFDMkIsY0FBY3BCO29CQUFVaUIsV0FBVTs7c0NBQ3RDLDhEQUFDdkIseURBQVFBOzRCQUFDdUIsV0FBVTtzQ0FDakJQLFdBQVdILEdBQUcsQ0FBQyxDQUFDUCxVQUFVcUI7Z0NBQ3pCLHFCQUNFLDhEQUFDekIsNERBQVdBO29DQUNWMEIsU0FBUyxJQUFNVixZQUFZWjtvQ0FDM0J1QixPQUFPdkI7b0NBRVBpQixXQUFVOzhDQUVUakI7bUNBSElxQjs7Ozs7NEJBTVg7Ozs7OztzQ0FHRiw4REFBQ0g7NEJBQUlELFdBQVU7c0NBQ1pKLGlCQUFpQk4sR0FBRyxDQUFDLENBQUNRLFNBQVNNO2dDQUM5QixxQkFDRSw4REFBQzFCLDREQUFXQTtvQ0FBQzRCLE9BQU92Qjs4Q0FDbEIsNEVBQUNILCtEQUFXQTt3Q0FBQ2tCLFNBQVNBOzs7Ozs7bUNBRFdNOzs7Ozs0QkFJdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0EvQ01aO0tBQUFBO0FBaUROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wcm9qZWN0cy9wYWdlLmpzeD85M2VjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUYWJzLCBUYWJzTGlzdCwgVGFic0NvbnRlbnQsIFRhYnNUcmlnZ2VyIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3RhYnMnO1xyXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSAnQC9jb21wb25lbnRzL1Byb2plY3RDYXJkJztcclxuXHJcbmNvbnN0IHByb2plY3REYXRhID0gW1xyXG4gIHtcclxuICAgIGltYWdlOiAnL3dvcmsvMy5wbmcnLFxyXG4gICAgY2F0ZWdvcnk6ICdyZWFjdCBqcycsXHJcbiAgICBuYW1lOiAndGVzdDEnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgJ3Rlc3QxIGRlc2NyaXB0aW9uIHRlc3QxIGRlc2NyaXB0aW9uIHRlc3QxIGRlc2NyaXB0aW9uIHRlc3QxIGRlc2NyaXB0aW9uIHRlc3QxIGRlc2NyaXB0aW9uJyxcclxuICAgIGxpbms6ICcvJyxcclxuICAgIGdpdGh1YjogJy8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvd29yay80LnBuZycsXHJcbiAgICBjYXRlZ29yeTogJ3JlYWN0IGpzJyxcclxuICAgIG5hbWU6ICd0ZXN0MicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAndGVzdDIgZGVzY3JpcHRpb24gdGVzdDIgZGVzY3JpcHRpb24gdGVzdDIgZGVzY3JpcHRpb24gdGVzdDIgZGVzY3JpcHRpb24gdGVzdDIgZGVzY3JpcHRpb24nLFxyXG4gICAgbGluazogJy8nLFxyXG4gICAgZ2l0aHViOiAnLycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJy93b3JrLzIucG5nJyxcclxuICAgIGNhdGVnb3J5OiAncmVhY3QganMnLFxyXG4gICAgbmFtZTogJ3Rlc3QzJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW1xdWUsIHF1aXMuJyxcclxuICAgIGxpbms6ICcvJyxcclxuICAgIGdpdGh1YjogJy8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvd29yay8xLnBuZycsXHJcbiAgICBjYXRlZ29yeTogJ3JlYWN0IGpzJyxcclxuICAgIG5hbWU6ICd0ZXN0NCcsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtcXVlLCBxdWlzLicsXHJcbiAgICBsaW5rOiAnLycsXHJcbiAgICBnaXRodWI6ICcvJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnL3dvcmsvMy5wbmcnLFxyXG4gICAgY2F0ZWdvcnk6ICduZXh0IGpzJyxcclxuICAgIG5hbWU6ICd0ZXN0NScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtcXVlLCBxdWlzLicsXHJcbiAgICBsaW5rOiAnLycsXHJcbiAgICBnaXRodWI6ICcvJyxcclxuICB9XHJcbl07XHJcblxyXG4vLyByZW1vdmUgY2F0ZWdvcnkgZHVwbGljYXRlc1xyXG5jb25zdCB1bmlxdWVDYXRlZ29yaWVzID0gW1xyXG4gICdhbGwgcHJvamVjdHMnLFxyXG4gIC4uLm5ldyBTZXQocHJvamVjdERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KSksXHJcbl07XHJcblxyXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZSh1bmlxdWVDYXRlZ29yaWVzKTtcclxuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKCdhbGwgcHJvamVjdHMnKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3REYXRhLmZpbHRlcigocHJvamVjdCkgPT4ge1xyXG4gICAgLy8gaWYgY2F0ZWdvcnkgaXMgJ2FsbCBwcm9qZWN0cycgcmV0dXJuIGFsbCBwcm9qZWN0cywgZWxzZSBmaWx0ZXIgYnkgY2F0ZWdvcnlcclxuICAgIHJldHVybiBjYXRlZ29yeSA9PT0gJ2FsbCBwcm9qZWN0cydcclxuICAgICAgPyBwcm9qZWN0XHJcbiAgICAgIDogcHJvamVjdC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J21pbi1oLXNjcmVlbiBwdC0xMic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgbXgtYXV0byc+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT0nc2VjdGlvbi10aXRsZSBtYi04IHhsOm1iLTE2IHRleHQtY2VudGVyIG14LWF1dG8nPlxyXG4gICAgICAgICAgTWVzIHByb2pldHNcclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIHsvKiB0YWJzICovfVxyXG4gICAgICAgIDxUYWJzIGRlZmF1bHRWYWx1ZT17Y2F0ZWdvcnl9IGNsYXNzTmFtZT0nbWItMjQgeGw6bWItNDgnPlxyXG4gICAgICAgICAgPFRhYnNMaXN0IGNsYXNzTmFtZT0ndy1mdWxsIGdyaWQgaC1mdWxsIG1kOmdyaWQtY29scy00IGxnOm1heC13LVs2NDBweF0gbWItMTIgbXgtYXV0byBtZDpib3JkZXIgZGFyazpib3JkZXItbm9uZSc+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUYWJzVHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDYXRlZ29yeShjYXRlZ29yeSl9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXBpdGFsaXplIHctWzE2MnB4XSBtZDp3LWF1dG8nXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIDwvVGFic1RyaWdnZXI+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1RhYnNMaXN0PlxyXG4gICAgICAgICAgey8qIHRhYnMgY29udGVudCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWxnIHhsOm10LTggZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMyBnYXAtNCc+XHJcbiAgICAgICAgICAgIHtmaWx0ZXJlZFByb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPXtjYXRlZ29yeX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZCBwcm9qZWN0PXtwcm9qZWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJzQ29udGVudD5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRhYnMiLCJUYWJzTGlzdCIsIlRhYnNDb250ZW50IiwiVGFic1RyaWdnZXIiLCJQcm9qZWN0Q2FyZCIsInByb2plY3REYXRhIiwiaW1hZ2UiLCJjYXRlZ29yeSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJnaXRodWIiLCJ1bmlxdWVDYXRlZ29yaWVzIiwiU2V0IiwibWFwIiwiaXRlbSIsIlByb2plY3RzIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJzZXRDYXRlZ29yeSIsImZpbHRlcmVkUHJvamVjdHMiLCJmaWx0ZXIiLCJwcm9qZWN0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwiZGVmYXVsdFZhbHVlIiwiaW5kZXgiLCJvbkNsaWNrIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/projects/page.jsx\n"));

/***/ })

});