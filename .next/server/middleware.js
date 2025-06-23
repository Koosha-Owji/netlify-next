"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "middleware";
exports.ids = ["middleware"];
exports.modules = {

/***/ "(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=%2FUsers%2Fkooshaowji%2FDocuments%2FGitHub%2Fnetlify-next%2Fsrc%2Fmiddleware.ts&page=%2Fmiddleware&rootDir=%2FUsers%2Fkooshaowji%2FDocuments%2FGitHub%2Fnetlify-next&matchers=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=%2FUsers%2Fkooshaowji%2FDocuments%2FGitHub%2Fnetlify-next%2Fsrc%2Fmiddleware.ts&page=%2Fmiddleware&rootDir=%2FUsers%2Fkooshaowji%2FDocuments%2FGitHub%2Fnetlify-next&matchers=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ nHandler)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/globals */ \"(middleware)/./node_modules/next/dist/server/web/globals.js\");\n/* harmony import */ var next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/adapter */ \"(middleware)/./node_modules/next/dist/server/web/adapter.js\");\n/* harmony import */ var next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_middleware_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/middleware.ts */ \"(middleware)/./src/middleware.ts\");\n/* harmony import */ var next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/components/is-next-router-error */ \"(middleware)/./node_modules/next/dist/client/components/is-next-router-error.js\");\n/* harmony import */ var next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3__);\n\n\n// Import the userland code.\n\n\n\nconst mod = {\n    ..._src_middleware_ts__WEBPACK_IMPORTED_MODULE_2__\n};\nconst handler = mod.middleware || mod.default;\nconst page = \"/middleware\";\nif (typeof handler !== 'function') {\n    throw Object.defineProperty(new Error(`The Middleware \"${page}\" must export a \\`middleware\\` or a \\`default\\` function`), \"__NEXT_ERROR_CODE\", {\n        value: \"E120\",\n        enumerable: false,\n        configurable: true\n    });\n}\n// Middleware will only sent out the FetchEvent to next server,\n// so load instrumentation module here and track the error inside middleware module.\nfunction errorHandledHandler(fn) {\n    return async (...args)=>{\n        try {\n            return await fn(...args);\n        } catch (err) {\n            // In development, error the navigation API usage in runtime,\n            // since it's not allowed to be used in middleware as it's outside of react component tree.\n            if (true) {\n                if ((0,next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3__.isNextRouterError)(err)) {\n                    err.message = `Next.js navigation API is not allowed to be used in Middleware.`;\n                    throw err;\n                }\n            }\n            const req = args[0];\n            const url = new URL(req.url);\n            const resource = url.pathname + url.search;\n            await (0,next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0__.edgeInstrumentationOnRequestError)(err, {\n                path: resource,\n                method: req.method,\n                headers: Object.fromEntries(req.headers.entries())\n            }, {\n                routerKind: 'Pages Router',\n                routePath: '/middleware',\n                routeType: 'middleware',\n                revalidateReason: undefined\n            });\n            throw err;\n        }\n    };\n}\nfunction nHandler(opts) {\n    return (0,next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1__.adapter)({\n        ...opts,\n        page,\n        handler: errorHandledHandler(handler)\n    });\n}\n\n//# sourceMappingURL=middleware.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1taWRkbGV3YXJlLWxvYWRlci5qcz9hYnNvbHV0ZVBhZ2VQYXRoPSUyRlVzZXJzJTJGa29vc2hhb3dqaSUyRkRvY3VtZW50cyUyRkdpdEh1YiUyRm5ldGxpZnktbmV4dCUyRnNyYyUyRm1pZGRsZXdhcmUudHMmcGFnZT0lMkZtaWRkbGV3YXJlJnJvb3REaXI9JTJGVXNlcnMlMkZrb29zaGFvd2ppJTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGbmV0bGlmeS1uZXh0Jm1hdGNoZXJzPSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzQztBQUNpQjtBQUN2RDtBQUM0QztBQUNxQztBQUNJO0FBQ3JGO0FBQ0EsT0FBTywrQ0FBSTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELEtBQUs7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBcUM7QUFDckQsb0JBQW9CLG1HQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrRkFBaUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZixXQUFXLHFFQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL2dsb2JhbHNcIjtcbmltcG9ydCB7IGFkYXB0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci93ZWIvYWRhcHRlclwiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgX21vZCBmcm9tIFwiLi9zcmMvbWlkZGxld2FyZS50c1wiO1xuaW1wb3J0IHsgZWRnZUluc3RydW1lbnRhdGlvbk9uUmVxdWVzdEVycm9yIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL2dsb2JhbHNcIjtcbmltcG9ydCB7IGlzTmV4dFJvdXRlckVycm9yIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9pcy1uZXh0LXJvdXRlci1lcnJvclwiO1xuY29uc3QgbW9kID0ge1xuICAgIC4uLl9tb2Rcbn07XG5jb25zdCBoYW5kbGVyID0gbW9kLm1pZGRsZXdhcmUgfHwgbW9kLmRlZmF1bHQ7XG5jb25zdCBwYWdlID0gXCIvbWlkZGxld2FyZVwiO1xuaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ldyBFcnJvcihgVGhlIE1pZGRsZXdhcmUgXCIke3BhZ2V9XCIgbXVzdCBleHBvcnQgYSBcXGBtaWRkbGV3YXJlXFxgIG9yIGEgXFxgZGVmYXVsdFxcYCBmdW5jdGlvbmApLCBcIl9fTkVYVF9FUlJPUl9DT0RFXCIsIHtcbiAgICAgICAgdmFsdWU6IFwiRTEyMFwiLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG59XG4vLyBNaWRkbGV3YXJlIHdpbGwgb25seSBzZW50IG91dCB0aGUgRmV0Y2hFdmVudCB0byBuZXh0IHNlcnZlcixcbi8vIHNvIGxvYWQgaW5zdHJ1bWVudGF0aW9uIG1vZHVsZSBoZXJlIGFuZCB0cmFjayB0aGUgZXJyb3IgaW5zaWRlIG1pZGRsZXdhcmUgbW9kdWxlLlxuZnVuY3Rpb24gZXJyb3JIYW5kbGVkSGFuZGxlcihmbikge1xuICAgIHJldHVybiBhc3luYyAoLi4uYXJncyk9PntcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBmbiguLi5hcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBJbiBkZXZlbG9wbWVudCwgZXJyb3IgdGhlIG5hdmlnYXRpb24gQVBJIHVzYWdlIGluIHJ1bnRpbWUsXG4gICAgICAgICAgICAvLyBzaW5jZSBpdCdzIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gbWlkZGxld2FyZSBhcyBpdCdzIG91dHNpZGUgb2YgcmVhY3QgY29tcG9uZW50IHRyZWUuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmIChpc05leHRSb3V0ZXJFcnJvcihlcnIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID0gYE5leHQuanMgbmF2aWdhdGlvbiBBUEkgaXMgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiBNaWRkbGV3YXJlLmA7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXEgPSBhcmdzWzBdO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChyZXEudXJsKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaDtcbiAgICAgICAgICAgIGF3YWl0IGVkZ2VJbnN0cnVtZW50YXRpb25PblJlcXVlc3RFcnJvcihlcnIsIHtcbiAgICAgICAgICAgICAgICBwYXRoOiByZXNvdXJjZSxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHJlcS5tZXRob2QsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogT2JqZWN0LmZyb21FbnRyaWVzKHJlcS5oZWFkZXJzLmVudHJpZXMoKSlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICByb3V0ZXJLaW5kOiAnUGFnZXMgUm91dGVyJyxcbiAgICAgICAgICAgICAgICByb3V0ZVBhdGg6ICcvbWlkZGxld2FyZScsXG4gICAgICAgICAgICAgICAgcm91dGVUeXBlOiAnbWlkZGxld2FyZScsXG4gICAgICAgICAgICAgICAgcmV2YWxpZGF0ZVJlYXNvbjogdW5kZWZpbmVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuSGFuZGxlcihvcHRzKSB7XG4gICAgcmV0dXJuIGFkYXB0ZXIoe1xuICAgICAgICAuLi5vcHRzLFxuICAgICAgICBwYWdlLFxuICAgICAgICBoYW5kbGVyOiBlcnJvckhhbmRsZWRIYW5kbGVyKGhhbmRsZXIpXG4gICAgfSk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pZGRsZXdhcmUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=%2FUsers%2Fkooshaowji%2FDocuments%2FGitHub%2Fnetlify-next%2Fsrc%2Fmiddleware.ts&page=%2Fmiddleware&rootDir=%2FUsers%2Fkooshaowji%2FDocuments%2FGitHub%2Fnetlify-next&matchers=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _kinde_oss_kinde_auth_nextjs_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kinde-oss/kinde-auth-nextjs/middleware */ \"(middleware)/./node_modules/@kinde-oss/kinde-auth-nextjs/dist/middleware.es.js\");\n// ts-nocheck\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_kinde_oss_kinde_auth_nextjs_middleware__WEBPACK_IMPORTED_MODULE_0__.withAuth)(async function middleware() {}, {\n    publicPaths: [\n        \"/\",\n        \"/api/public\"\n    ]\n}));\nconst config = {\n    matcher: [\n        // Run on everything but Next internals and static files\n        \"/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)\"\n    ],\n    runtime: \"nodejs\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsYUFBYTtBQUNzRDtBQUVuRSxpRUFBZUEsaUZBQVFBLENBQUMsZUFBZUMsY0FBYyxHQUFHO0lBQ3REQyxhQUFhO1FBQUM7UUFBSztLQUFjO0FBQ25DLEVBQUUsRUFBQztBQUVJLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFDUCx3REFBd0Q7UUFDeEQ7S0FDRDtJQUNEQyxTQUFTO0FBQ1gsRUFBRSIsInNvdXJjZXMiOlsiL1VzZXJzL2tvb3NoYW93amkvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5LW5leHQvc3JjL21pZGRsZXdhcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdHMtbm9jaGVja1xuaW1wb3J0IHsgd2l0aEF1dGggfSBmcm9tIFwiQGtpbmRlLW9zcy9raW5kZS1hdXRoLW5leHRqcy9taWRkbGV3YXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUoKSB7fSwge1xuICBwdWJsaWNQYXRoczogW1wiL1wiLCBcIi9hcGkvcHVibGljXCJdLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFtcbiAgICAvLyBSdW4gb24gZXZlcnl0aGluZyBidXQgTmV4dCBpbnRlcm5hbHMgYW5kIHN0YXRpYyBmaWxlc1xuICAgIFwiLygoPyFfbmV4dHxbXj9dKlxcXFwuKD86aHRtbD98Y3NzfGpzKD8hb24pfGpwZT9nfHdlYnB8cG5nfGdpZnxzdmd8dHRmfHdvZmYyP3xpY298Y3N2fGRvY3g/fHhsc3g/fHppcHx3ZWJtYW5pZmVzdCkpLiopXCIsXG4gIF0sXG4gIHJ1bnRpbWU6IFwibm9kZWpzXCIsXG59O1xuIl0sIm5hbWVzIjpbIndpdGhBdXRoIiwibWlkZGxld2FyZSIsInB1YmxpY1BhdGhzIiwiY29uZmlnIiwibWF0Y2hlciIsInJ1bnRpbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "../lib/cache-handlers/default.external":
/*!**************************************************************************!*\
  !*** external "next/dist/server/lib/cache-handlers/default.external.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/lib/cache-handlers/default.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "node:async_hooks":
/*!***********************************!*\
  !*** external "node:async_hooks" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("node:async_hooks");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@kinde","vendor-chunks/@kinde-oss","vendor-chunks/jose","vendor-chunks/uncrypto","vendor-chunks/cookie"], () => (__webpack_exec__("(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=%2FUsers%2Fkooshaowji%2FDocuments%2FGitHub%2Fnetlify-next%2Fsrc%2Fmiddleware.ts&page=%2Fmiddleware&rootDir=%2FUsers%2Fkooshaowji%2FDocuments%2FGitHub%2Fnetlify-next&matchers=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();