"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/task/page",{

/***/ "(app-pages-browser)/./src/app/task/tasklist.tsx":
/*!***********************************!*\
  !*** ./src/app/task/tasklist.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tasklist: function() { return /* binding */ Tasklist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _slices_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/slices/task */ \"(app-pages-browser)/./src/slices/task.ts\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"(app-pages-browser)/./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ Tasklist auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Tasklist = ()=>{\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Use the memoized selector to get tasks from the store\n    const tasks = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.taskReducer.tasks);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    console.log(tasks);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: text,\n                onChange: (e)=>setText(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/ankitnidhishroff/Desktop/personal/redux-implementation/src/app/task/tasklist.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    if (text.trim() !== \"\") {\n                        dispatch((0,_slices_task__WEBPACK_IMPORTED_MODULE_2__.addTask)({\n                            id: lodash__WEBPACK_IMPORTED_MODULE_3___default().uniqueId(),\n                            text: text,\n                            completed: false\n                        }));\n                        setText(\"\");\n                    }\n                },\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"/Users/ankitnidhishroff/Desktop/personal/redux-implementation/src/app/task/tasklist.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            tasks && tasks.length > 0 ? tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            checked: task.completed,\n                            onChange: ()=>dispatch((0,_slices_task__WEBPACK_IMPORTED_MODULE_2__.editTask)({\n                                    ...task,\n                                    completed: !task.completed\n                                }))\n                        }, void 0, false, {\n                            fileName: \"/Users/ankitnidhishroff/Desktop/personal/redux-implementation/src/app/task/tasklist.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: task.text\n                        }, void 0, false, {\n                            fileName: \"/Users/ankitnidhishroff/Desktop/personal/redux-implementation/src/app/task/tasklist.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>dispatch((0,_slices_task__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(task)),\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ankitnidhishroff/Desktop/personal/redux-implementation/src/app/task/tasklist.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, task.id, true, {\n                    fileName: \"/Users/ankitnidhishroff/Desktop/personal/redux-implementation/src/app/task/tasklist.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No tasks available\"\n            }, void 0, false, {\n                fileName: \"/Users/ankitnidhishroff/Desktop/personal/redux-implementation/src/app/task/tasklist.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ankitnidhishroff/Desktop/personal/redux-implementation/src/app/task/tasklist.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Tasklist, \"z85jiPqazhf45wHZJrC6hHN4E/c=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = Tasklist;\nvar _c;\n$RefreshReg$(_c, \"Tasklist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGFzay90YXNrbGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUV3QztBQUNlO0FBQ087QUFDdkM7QUFFaEIsTUFBTVEsV0FBVzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBRWpDLHdEQUF3RDtJQUN4RCxNQUFNVSxRQUFRVCx3REFBV0EsQ0FBQyxDQUFDVSxRQUFlQSxNQUFNQyxXQUFXLENBQUNGLEtBQUs7SUFDakUsTUFBTUcsV0FBV1gsd0RBQVdBO0lBQzlCWSxRQUFRQyxHQUFHLENBQUNMO0lBRVYscUJBQ0UsOERBQUNNOzswQkFDQyw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLE9BQU9YO2dCQUNQWSxVQUFVLENBQUNDLElBQU1aLFFBQVFZLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzBCQUV6Qyw4REFBQ0k7Z0JBQ0NDLFNBQVM7b0JBQ1AsSUFBSWhCLEtBQUtpQixJQUFJLE9BQU8sSUFBSTt3QkFDdEJaLFNBQVNWLHFEQUFPQSxDQUFDOzRCQUNmdUIsSUFBSXBCLHNEQUFVOzRCQUNkRSxNQUFNQTs0QkFDTm9CLFdBQVc7d0JBQ2I7d0JBQ0FuQixRQUFRO29CQUNWO2dCQUNGOzBCQUNEOzs7Ozs7WUFJQUMsU0FBU0EsTUFBTW1CLE1BQU0sR0FBRyxJQUN2Qm5CLE1BQU1vQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1QsOERBQUNmOztzQ0FDQyw4REFBQ0M7NEJBQ0NDLE1BQUs7NEJBQ0xjLFNBQVNELEtBQUtILFNBQVM7NEJBQ3ZCUixVQUFVLElBQU1QLFNBQVNSLHNEQUFRQSxDQUFDO29DQUNoQyxHQUFHMEIsSUFBSTtvQ0FDUEgsV0FBVyxDQUFDRyxLQUFLSCxTQUFTO2dDQUM1Qjs7Ozs7O3NDQUVGLDhEQUFDSztzQ0FBTUYsS0FBS3ZCLElBQUk7Ozs7OztzQ0FDaEIsOERBQUNlOzRCQUFPQyxTQUFTLElBQU1YLFNBQVNULHdEQUFVQSxDQUFDMkI7c0NBQVE7Ozs7Ozs7bUJBVjNDQSxLQUFLTCxFQUFFOzs7OytDQWNuQiw4REFBQ1E7MEJBQUU7Ozs7Ozs7Ozs7OztBQUlYLEVBQUU7R0FsRFczQjs7UUFJR04sb0RBQVdBO1FBQ1JDLG9EQUFXQTs7O0tBTGpCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Rhc2svdGFza2xpc3QudHN4PzQzMjAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnOyAvLyBUaGlzIGVuc3VyZXMgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZCBvbmx5IG9uIHRoZSBjbGllbnRcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYWRkVGFzaywgZGVsZXRlVGFzaywgZWRpdFRhc2sgfSBmcm9tICdAL3NsaWNlcy90YXNrJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjb25zdCBUYXNrbGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xuXG4gIC8vIFVzZSB0aGUgbWVtb2l6ZWQgc2VsZWN0b3IgdG8gZ2V0IHRhc2tzIGZyb20gdGhlIHN0b3JlXG4gIGNvbnN0IHRhc2tzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnRhc2tSZWR1Y2VyLnRhc2tzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuY29uc29sZS5sb2codGFza3MpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmICh0ZXh0LnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGFkZFRhc2soe1xuICAgICAgICAgICAgICBpZDogXy51bmlxdWVJZCgpLFxuICAgICAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBzZXRUZXh0KCcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZFxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHt0YXNrcyAmJiB0YXNrcy5sZW5ndGggPiAwID8gKFxuICAgICAgICB0YXNrcy5tYXAoKHRhc2s6IGFueSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXt0YXNrLmlkfT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjaGVja2VkPXt0YXNrLmNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGRpc3BhdGNoKGVkaXRUYXNrKHtcbiAgICAgICAgICAgICAgICAuLi50YXNrLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogIXRhc2suY29tcGxldGVkXG4gICAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3Bhbj57dGFzay50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZGVsZXRlVGFzayh0YXNrKSl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgKSA6IChcbiAgICAgICAgPHA+Tm8gdGFza3MgYXZhaWxhYmxlPC9wPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiYWRkVGFzayIsImRlbGV0ZVRhc2siLCJlZGl0VGFzayIsIl8iLCJUYXNrbGlzdCIsInRleHQiLCJzZXRUZXh0IiwidGFza3MiLCJzdGF0ZSIsInRhc2tSZWR1Y2VyIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwidHJpbSIsImlkIiwidW5pcXVlSWQiLCJjb21wbGV0ZWQiLCJsZW5ndGgiLCJtYXAiLCJ0YXNrIiwiY2hlY2tlZCIsInNwYW4iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/task/tasklist.tsx\n"));

/***/ })

});