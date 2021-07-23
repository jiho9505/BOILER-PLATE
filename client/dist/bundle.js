/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/1page/1page.js":
/*!**********************************!*\
  !*** ./src/pages/1page/1page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page1)
/* harmony export */ });
/* harmony import */ var _1page_inner_page_inner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1page__inner/page__inner.js */ "./src/pages/1page/1page__inner/page__inner.js");

class Page1 {
  constructor($target) {
    var element = document.createElement("div");
    element.innerHTML = `
            <nav class='main__nav'></nav>
            <a href='/ano' data-link>Move to page2</a>
        `;
    new _1page_inner_page_inner_js__WEBPACK_IMPORTED_MODULE_0__.default(element);
    $target.appendChild(element);
  }

  setState() {}

  render() {}

}

/***/ }),

/***/ "./src/pages/1page/1page__inner/page__inner.js":
/*!*****************************************************!*\
  !*** ./src/pages/1page/1page__inner/page__inner.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page__inner)
/* harmony export */ });
class Page__inner {
  constructor($target) {
    const div = document.createElement("div");
    div.innerHTML = `
                <div>
                    Inner 
                </div>
                `;
    $target.appendChild(div);
  }

}

/***/ }),

/***/ "./src/pages/2page/2page.js":
/*!**********************************!*\
  !*** ./src/pages/2page/2page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page2)
/* harmony export */ });
class Page2 {
  constructor($target) {
    var element = document.createElement("div");
    element.innerHTML = `
            <a href='/' data-link>Move to Page1</a>
        `;
    $target.appendChild(element);
  }

}

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "router": () => (/* binding */ router),
/* harmony export */   "navigateTo": () => (/* binding */ navigateTo)
/* harmony export */ });
/* harmony import */ var _pages_1page_1page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/1page/1page.js */ "./src/pages/1page/1page.js");
/* harmony import */ var _pages_2page_2page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/2page/2page.js */ "./src/pages/2page/2page.js");



const pathToRegex = path => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

const router = () => {
  const routes = [{
    path: '/',
    view: _pages_1page_1page_js__WEBPACK_IMPORTED_MODULE_0__.default
  }, {
    path: '/ano',
    view: _pages_2page_2page_js__WEBPACK_IMPORTED_MODULE_1__.default
  } // { path: '/posts/:id', view: PostView },
  // { path: '/settings', view: Settings },
  ]; // Test each route for potential match

  const potentialMatches = routes.map(route => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path))
    };
  }); // console.log('l',location.pathname)
  // console.log('p',potentialMatches) 

  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null); // console.log('m',match) 

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    };
  } // console.log(match.route)


  const app = document.querySelector('.app');
  app.innerHTML = '';
  new match.route.view(app);
};



/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.js */ "./src/router.js");



window.addEventListener('popstate', _router_js__WEBPACK_IMPORTED_MODULE_2__.router);
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      (0,_router_js__WEBPACK_IMPORTED_MODULE_2__.navigateTo)(e.target.href);
    }
  });
  (0,_router_js__WEBPACK_IMPORTED_MODULE_2__.router)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcGFnZXMvMXBhZ2UvMXBhZ2UuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzLzFwYWdlLzFwYWdlX19pbm5lci9wYWdlX19pbm5lci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcGFnZXMvMnBhZ2UvMnBhZ2UuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz80ZTQyIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzP2RkNTEiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhZ2UxIiwiY29uc3RydWN0b3IiLCIkdGFyZ2V0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIlBhZ2VfX2lubmVyIiwiYXBwZW5kQ2hpbGQiLCJzZXRTdGF0ZSIsInJlbmRlciIsImRpdiIsIlBhZ2UyIiwicGF0aFRvUmVnZXgiLCJwYXRoIiwiUmVnRXhwIiwicmVwbGFjZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicm91dGVyIiwicm91dGVzIiwidmlldyIsInBvdGVudGlhbE1hdGNoZXMiLCJtYXAiLCJyb3V0ZSIsInJlc3VsdCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJtYXRjaCIsImZpbmQiLCJwb3RlbnRpYWxNYXRjaCIsImFwcCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYm9keSIsImUiLCJ0YXJnZXQiLCJtYXRjaGVzIiwicHJldmVudERlZmF1bHQiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLE1BQU1BLEtBQU4sQ0FBWTtBQUUxQkMsYUFBVyxDQUFDQyxPQUFELEVBQVU7QUFFZCxRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0FGLFdBQU8sQ0FBQ0csU0FBUixHQUFxQjtBQUM3QjtBQUNBO0FBQ0EsU0FIUTtBQUtBLFFBQUlDLCtEQUFKLENBQWdCSixPQUFoQjtBQUVBRCxXQUFPLENBQUNNLFdBQVIsQ0FBb0JMLE9BQXBCO0FBQ047O0FBRUVNLFVBQVEsR0FBRSxDQUVUOztBQUNEQyxRQUFNLEdBQUUsQ0FFUDs7QUFwQnNCLEM7Ozs7Ozs7Ozs7Ozs7O0FDRlosTUFBTUgsV0FBTixDQUFrQjtBQUNoQ04sYUFBVyxDQUFDQyxPQUFELEVBQVU7QUFFZCxVQUFNUyxHQUFHLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBRUFNLE9BQUcsQ0FBQ0wsU0FBSixHQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxpQkFKUTtBQU1BSixXQUFPLENBQUNNLFdBQVIsQ0FBb0JHLEdBQXBCO0FBQ047O0FBWitCLEM7Ozs7Ozs7Ozs7Ozs7O0FDQWxCLE1BQU1DLEtBQU4sQ0FBWTtBQUUxQlgsYUFBVyxDQUFDQyxPQUFELEVBQVU7QUFFZCxRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0FGLFdBQU8sQ0FBQ0csU0FBUixHQUFxQjtBQUM3QjtBQUNBLFNBRlE7QUFJQUosV0FBTyxDQUFDTSxXQUFSLENBQW9CTCxPQUFwQjtBQUNOOztBQVZ5QixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0EzQjtBQUNBOztBQUVBLE1BQU1VLFdB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ZXIgZnJvbSBcIi4vMXBhZ2VfX2lubmVyL3BhZ2VfX2lubmVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UxIHtcblxuXHRjb25zdHJ1Y3RvcigkdGFyZ2V0KSB7XG5cbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxuYXYgY2xhc3M9J21haW5fX25hdic+PC9uYXY+XG4gICAgICAgICAgICA8YSBocmVmPScvYW5vJyBkYXRhLWxpbms+TW92ZSB0byBwYWdlMjwvYT5cbiAgICAgICAgYFxuICAgXG4gICAgICAgIG5ldyBQYWdlX19pbm5lcihlbGVtZW50KVxuXG4gICAgICAgICR0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdH1cblxuICAgIHNldFN0YXRlKCl7XG5cbiAgICB9XG4gICAgcmVuZGVyKCl7XG5cbiAgICB9XG5cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZV9faW5uZXIge1xuXHRjb25zdHJ1Y3RvcigkdGFyZ2V0KSB7XG5cdFx0XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBJbm5lciBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG5cbiAgICAgICAgJHRhcmdldC5hcHBlbmRDaGlsZChkaXYpO1xuXHR9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UyIHtcblxuXHRjb25zdHJ1Y3RvcigkdGFyZ2V0KSB7XG5cbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxhIGhyZWY9Jy8nIGRhdGEtbGluaz5Nb3ZlIHRvIFBhZ2UxPC9hPlxuICAgICAgICBgXG4gICBcbiAgICAgICAgJHRhcmdldC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0fVxuXG5cbn0iLCJpbXBvcnQgUGFnZTEgZnJvbSAnLi9wYWdlcy8xcGFnZS8xcGFnZS5qcydcbmltcG9ydCBQYWdlMiBmcm9tICcuL3BhZ2VzLzJwYWdlLzJwYWdlLmpzJ1xuXG5jb25zdCBwYXRoVG9SZWdleCA9IChwYXRoKSA9PlxuXHRuZXcgUmVnRXhwKCdeJyArIHBhdGgucmVwbGFjZSgvXFwvL2csICdcXFxcLycpLnJlcGxhY2UoLzpcXHcrL2csICcoLispJykgKyAnJCcpO1xuXG5jb25zdCBuYXZpZ2F0ZVRvID0gKHVybCkgPT4ge1xuXHRoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmwpO1xuXHRyb3V0ZXIoKTtcbn07XG5cbmNvbnN0IHJvdXRlciA9ICgpID0+IHtcblx0XG5cdGNvbnN0IHJvdXRlcyA9IFtcblx0XHR7IHBhdGg6ICcvJywgdmlldzogUGFnZTEgfSxcblx0XHR7IHBhdGg6ICcvYW5vJywgdmlldzogUGFnZTIgfSxcblx0XHQvLyB7IHBhdGg6ICcvcG9zdHMvOmlkJywgdmlldzogUG9zdFZpZXcgfSxcblx0XHQvLyB7IHBhdGg6ICcvc2V0dGluZ3MnLCB2aWV3OiBTZXR0aW5ncyB9LFxuXHRdO1xuXG5cdC8vIFRlc3QgZWFjaCByb3V0ZSBmb3IgcG90ZW50aWFsIG1hdGNoXG5cdGNvbnN0IHBvdGVudGlhbE1hdGNoZXMgPSByb3V0ZXMubWFwKChyb3V0ZSkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyb3V0ZTogcm91dGUsXG5cdFx0XHRyZXN1bHQ6IGxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKHBhdGhUb1JlZ2V4KHJvdXRlLnBhdGgpKSxcblx0XHR9O1xuXHR9KTtcblx0Ly8gY29uc29sZS5sb2coJ2wnLGxvY2F0aW9uLnBhdGhuYW1lKVxuXHQvLyBjb25zb2xlLmxvZygncCcscG90ZW50aWFsTWF0Y2hlcykgXG5cdGxldCBtYXRjaCA9IHBvdGVudGlhbE1hdGNoZXMuZmluZChcblx0XHQocG90ZW50aWFsTWF0Y2gpID0+IHBvdGVudGlhbE1hdGNoLnJlc3VsdCAhPT0gbnVsbFxuXHQpO1xuXHQvLyBjb25zb2xlLmxvZygnbScsbWF0Y2gpIFxuXG5cdGlmICghbWF0Y2gpIHtcblx0XHRtYXRjaCA9IHtcblx0XHRcdHJvdXRlOiByb3V0ZXNbMF0sXG5cdFx0XHRyZXN1bHQ6IFtsb2NhdGlvbi5wYXRobmFtZV0sXG5cdFx0fTtcblx0fVxuXHQvLyBjb25zb2xlLmxvZyhtYXRjaC5yb3V0ZSlcblxuXHRjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwJyk7XG5cdGFwcC5pbm5lckhUTUw9Jyc7XG5cdG5ldyBtYXRjaC5yb3V0ZS52aWV3KGFwcClcblx0XG59O1xuXG5leHBvcnQge1xuICAgIHJvdXRlciwgbmF2aWdhdGVUb1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0IHsgcm91dGVyICwgbmF2aWdhdGVUbyB9IGZyb20gJy4vcm91dGVyLmpzJztcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCByb3V0ZXIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRcblx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0aWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ1tkYXRhLWxpbmtdJykpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdG5hdmlnYXRlVG8oZS50YXJnZXQuaHJlZik7XG5cdFx0fVxuXHR9KTtcblxuXHRyb3V0ZXIoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==