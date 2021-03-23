(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/marksApp/src/main.ts */"zUnb");


/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n    box-sizing: border-box;\n    font-family: 'Times New Roman', Times, serif;\n}\nbody{\n    margin: 0px;\n    background-image:url(https://wallpapercrafter.com/desktop/294109-books-student-study-education-university-studying.jpg);\n    height: 580px;\n    background-attachment: fixed;\n    background-position: center;\n    background-size: cover;\n    z-index: -1;\n}\n.topBar{\n    text-align: center;\n    height: 70px;\n    width: 100%;\n    border: solid transparent 1px;\n    background-color:lightyellow;\n    color: darkred;\n    font-family: 'Times New Roman';\n    z-index: 1;\n}\n.innerBox{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    margin-top: 100px;\n}\ntable{\n    border-collapse: collapse;\n    border: white 1px solid;\n}\nth{\n    background-color:darkred;\n    color: whitesmoke;\n    padding: 5px;\n}\ntd{\n    background-color:rgb(165, 1, 1);\n    color: whitesmoke;\n    padding: 5px;\n}\ntd input{\n    background: rgb(165, 1, 1);\n    border: transparent solid 1px;\n    color: whitesmoke;\n    font-weight: bolder;\n}\n.inputs{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n   \n}\n.nameInput{\n    background-color: rgb(226, 223, 223);\n    height: 30px;\n    border-color: transparent;\n    width: 100%;\n    border-radius: 7px;\n}\n.save{\n    border:1px solid transparent;\n    \n    color: black;\n    height: 30px;\n    width: 40px;\n    text-align: center;\n}\n.save:active{\n    background-color: darkgrey;\n}\n.save:disabled{\n    color:white;\n}\n.name{\n    padding: 10px;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-direction: column;\n}\n.name button{\n    margin-top: 10px;\n    margin-right: 0px;\n}\ntd button{\n    margin-left:5px ;\n    margin-right: 5px;\n    border: transparent solid 1px;\n}\n.output{\n    margin-top: 4%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksV0FBVztJQUNYLHVIQUF1SDtJQUN2SCxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCOztBQUVqQztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNEJBQTRCOztJQUU1QixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cbmJvZHl7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly93YWxscGFwZXJjcmFmdGVyLmNvbS9kZXNrdG9wLzI5NDEwOS1ib29rcy1zdHVkZW50LXN0dWR5LWVkdWNhdGlvbi11bml2ZXJzaXR5LXN0dWR5aW5nLmpwZyk7XG4gICAgaGVpZ2h0OiA1ODBweDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHotaW5kZXg6IC0xO1xufVxuLnRvcEJhcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQgMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHR5ZWxsb3c7XG4gICAgY29sb3I6IGRhcmtyZWQ7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xuICAgIHotaW5kZXg6IDE7XG59XG4uaW5uZXJCb3h7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xufVxudGFibGV7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXI6IHdoaXRlIDFweCBzb2xpZDtcbn1cbnRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ZGFya3JlZDtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG50ZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNjUsIDEsIDEpO1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbnRkIGlucHV0e1xuICAgIGJhY2tncm91bmQ6IHJnYigxNjUsIDEsIDEpO1xuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQgc29saWQgMXB4O1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4uaW5wdXRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgIFxufVxuLm5hbWVJbnB1dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMjMsIDIyMyk7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLnNhdmV7XG4gICAgYm9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zYXZlOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcbn1cbi5zYXZlOmRpc2FibGVke1xuICAgIGNvbG9yOndoaXRlO1xufVxuLm5hbWV7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubmFtZSBidXR0b257XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cbnRkIGJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDo1cHggO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQgc29saWQgMXB4O1xufVxuLm91dHB1dHtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'marksApp';
        this.studentDetail = [];
        this.outputTable = [];
        const x = {
            subjectName: '',
            mark: ''
        };
        this.studentDetail.push(x);
    }
    save() {
        const x = {
            studentName: this.personName,
            opSub: this.studentDetail
        };
        this.outputTable.push(x);
        console.table(this.outputTable);
    }
    newRow() {
        const x = {
            subjectName: this.subjectName,
            mark: this.mark
        };
        this.studentDetail.push(x);
        console.log(this.studentDetail);
    }
    delete(i) {
        this.studentDetail.splice(i, 1);
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n  <div class=\"topBar\">\n    <h1>Mark Details App</h1>\n  </div>\n  <div class=\"innerBox\">\n    <div class=\"inputs\">\n      <div class=\"name\">\n        <label for=\".nameInput\" style=\"color: white;font-weight: bolder;\">Name:</label><br>\n        <input type=\"text\" class=\"nameInput\" [(ngModel)]=\"personName\" #name=\"ngModel\" required />\n\n      </div>\n      <div class=\"table\">\n        <table border=\"1\">\n          <tr>\n            <th>Subject Name</th>\n            <th>Marks</th>\n            <th>Action</th>\n          </tr>\n          <tr *ngFor=\"let x of studentDetail;index as i\">\n            <td><input type=\"text\" [(ngModel)]=\"x.subjectName\" #note=\"ngModel\" required />{{x.subName}}</td>\n            <td><input type=\"number\" [(ngModel)]=\"x.mark\" #mark=\"ngModel\"\n                oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                maxlength=\"3\" required />{{x.marks}}</td>\n            <td>\n              <button (click)=\"newRow()\" [disabled]=\"note.invalid || mark.invalid\">Add</button>\n              <button (click)=\"delete(i)\">Delete</button>\n            </td>\n          </tr>\n        </table>\n      </div>\n      <br>\n      <button class=\"save\" [disabled]=\"name.invalid\" (click)=\"save()\">Save</button>\n    </div>\n    <div class=\"output\">\n      <table border=\"1\">\n        <tr>\n          <th>Name</th>\n          <th>Subject Names & Marks</th>\n          <th>Action</th>\n        </tr>\n        <tr *ngFor=\"let x of outputTable;index as i\">\n          <td>{{x.studentName}}</td>\n          <td>{{x.opSub[i].subjectName}}-{{x.opSub[i].mark}}</td>\n          <td>\n            <button>Edit</button>\n            <button>Delete</button>\n          </td>\n        </tr>\n      </table>\n    </div>\n    <router-outlet></router-outlet>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map