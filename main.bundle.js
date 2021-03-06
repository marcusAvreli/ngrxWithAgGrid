webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/report-reader/report-reader.module": [
		"../../../../../src/app/report-reader/report-reader.module.ts",
		"report-reader.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// components
//import { LoginComponent } from './shared/login/login.component';
//import { PageNotFoundComponent } from './shared/not-found/not-found.component';
//import { AboutComponent } from './core/about/ReportReaderComponent';
var routes = [
    { path: '', redirectTo: '/report-reader', pathMatch: 'full' },
    {
        path: 'report-reader',
        loadChildren: 'app/report-reader/report-reader.module#ReportReaderModule',
    }
    //{ path: '**', component: PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-report-reader></app-report-reader>-->\r\n<app-nav ></app-nav>\r\n    <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_ngrx_reducers__ = __webpack_require__("../../../../../src/app/ngrx/reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["c" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_7_app_ngrx_reducers__["c" /* reducer */]),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_nav_component__ = __webpack_require__("../../../../../src/app/core/nav/nav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// modules

// components

var CoreModule = (function () {
    function CoreModule(parentModule) {
        // throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__nav_nav_component__["a" /* NavComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__nav_nav_component__["a" /* NavComponent */],
        ],
        providers: []
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"items\">\r\n  <nav class=\"navbar navbar-default full-width\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li *ngFor=\"let menu of items\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a routerLink=\"{{menu.action}}\" class=\"text-center\">\r\n          <i *ngIf=\"menu.icon\" class=\"fa fa-2x {{menu.icon}}\"></i>\r\n          <span>{{menu.title}}</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:focus,\n.navbar-default .navbar-nav > .active > a:hover {\n  color: #1E88E5;\n  background-color: #e7e7e7;\n  font-weight: bold; }\n\n.form-group {\n  margin-top: 10px;\n  margin-right: 10px; }\n\n.navbar-default > li:hover > a, .navbar-nav > li:hover > a {\n  background-color: #1E88E5;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
        if (!this.items || this.items.length === 0) {
            this.items = [];
            this.items[0] = { title: "identity", action: "report-reader" };
        }
    };
    return NavComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], NavComponent.prototype, "items", void 0);
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/core/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/nav/nav.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx/reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = reducer;
/* unused harmony export getCourseState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIsLoadingCourses; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_core_compose__ = __webpack_require__("../../../../@ngrx/core/compose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze__ = __webpack_require__("../../../../ngrx-store-freeze/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_reader_store_myReport_reducer__ = __webpack_require__("../../../../../src/app/report-reader/store/myReport.reducer.ts");
//import { AuthState } from './../auth/store/auth.state';





//import * as fromAuth from './../auth/store/auth.reducer';

;
var reducers = {
    // auth: fromAuth.authReducer,
    course: __WEBPACK_IMPORTED_MODULE_5__report_reader_store_myReport_reducer__["c" /* reducer */],
};
var developmentReducer = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["d" /* combineReducers */])(reducers);
var productionReducer = Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["d" /* combineReducers */])(reducers);
function reducer(state, action) {
    if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
        return productionReducer(state, action);
    }
    else {
        return productionReducer(state, action);
    }
}
// AUTH
/*export const getAuthState = (state: AppState) => state.auth;

export const getAuthUserData = createSelector(getAuthState, fromAuth.getUserData);
export const getAuthIsLoggedIn = createSelector(getAuthState, fromAuth.getIsUserLoggedIn);
export const getAuthError = createSelector(getAuthState, fromAuth.getError);
*/
// COURSES
var getCourseState = function (state) { return state.course; };
var getCourses = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCourseState, __WEBPACK_IMPORTED_MODULE_5__report_reader_store_myReport_reducer__["a" /* getCourses */]);
var getIsLoadingCourses = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCourseState, __WEBPACK_IMPORTED_MODULE_5__report_reader_store_myReport_reducer__["b" /* getIsLoading */]);
//export const getSelectedCourseUrl = createSelector(getCourseState, fromCourse.getSelectedCourse);
//export const getCourseLessons = createSelector(getCourseState, fromCourse.getCourseLessons);
// LESSONS
/*export const getLessonState = (state: AppState) => state.lesson;

export const getSelectedLessonUrl = createSelector(getLessonState, fromLesson.getSelectedLessonUrl);
export const getSelectedLesson = createSelector(getCourseLessons, getSelectedLessonUrl,
    (lessons, selectedUrl) => lessons.find(lesson => lesson.url == selectedUrl)
);*/ 
//# sourceMappingURL=reducers.js.map

/***/ }),

/***/ "../../../../../src/app/report-reader/store/myReport.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_MY_REPORT_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_MY_REPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SEARCH_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SEARCH_COMPLETE2; });
/* unused harmony export GetMyReport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SearchCompleteAction; });
/* unused harmony export GetMyReportPost */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SearchCompleteAction2; });
// Section 2
var GET_MY_REPORT_POST = '[MY_REPORT] POST';
var GET_MY_REPORT = '[MY_REPORT] GET';
var SEARCH_COMPLETE = '[MY_REPORT] Search Complete';
var SEARCH_COMPLETE2 = '[MY_REPORT] Search Complete2';
//export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'
// Section 3
var GetMyReport = (function () {
    function GetMyReport() {
        this.type = GET_MY_REPORT;
    }
    return GetMyReport;
}());

var SearchCompleteAction = (function () {
    function SearchCompleteAction(payload) {
        this.payload = payload;
        this.type = SEARCH_COMPLETE;
    }
    return SearchCompleteAction;
}());

var GetMyReportPost = (function () {
    function GetMyReportPost(payload) {
        this.payload = payload;
        this.type = GET_MY_REPORT_POST;
    }
    return GetMyReportPost;
}());

var SearchCompleteAction2 = (function () {
    function SearchCompleteAction2(payload) {
        this.payload = payload;
        this.type = SEARCH_COMPLETE2;
    }
    return SearchCompleteAction2;
}());

//# sourceMappingURL=myReport.actions.js.map

/***/ }),

/***/ "../../../../../src/app/report-reader/store/myReport.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_REPORT */
/* harmony export (immutable) */ __webpack_exports__["c"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIsLoading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myReport_state__ = __webpack_require__("../../../../../src/app/report-reader/store/myReport.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__myReport_actions__ = __webpack_require__("../../../../../src/app/report-reader/store/myReport.actions.ts");

//import {createFeatureSelector } from '@ngrx/store';
//import {AppState} from '../app.state';
//https://codeburst.io/angular-10-ngrx-store-by-example-333cbf16862c
//https://www.learmoreseekmore.com/2019/10/angular-state-management-with-ngrx.html
//https://www.carloscaballero.io/build-your-pokedex-part1-introduction-ngrx/

//import { MyReportModel } from './models/myReport.model';
//import * as fromHeroes from './heroes/store/heroes.reducers';
//import { Product } from './product/product.model';
//https://github.com/ngrx/example-app/search?p=2&q=books
/*export interface State {
    
  readonly myReportModel: MyReportModel[];
    
  
}
*/
// Section 1
/*const initialState: MyReportModel[] = [{
    name: 'Initial Tutorial Report',
    email: 'empFirstName'
    
}]*/
var GET_REPORT = 'GET_REPORT';
// Section 2
function reducer(state, action) {
    // Section 3
    //console.log("typeof myReport.Reducer:"+(typeof action.payload));
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_0__myReport_state__["a" /* courseInitialState */]; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__myReport_actions__["a" /* GET_MY_REPORT */]:
            console.log("get my reports");
            // const myReportModel2 = action.payload;
            //  return action.payload;
            //return Array.prototype.concat(action.payload);
            return Object.assign({}, state, {
                reports: [
                    { name: "A", email: "xyz" }
                ],
                isLoadingCourses: true,
                selectedCourse: null,
                error: null
            });
        case __WEBPACK_IMPORTED_MODULE_1__myReport_actions__["c" /* SEARCH_COMPLETE */]:
            console.log("report complete");
            // const myReportModel2 = action.payload;
            //  return action.payload;
            //return Array.prototype.concat(action.payload);
            return Object.assign({}, state, {
                reports: action.payload,
                isLoadingCourses: false,
                selectedCourse: null,
                error: null
            });
        case __WEBPACK_IMPORTED_MODULE_1__myReport_actions__["d" /* SEARCH_COMPLETE2 */]:
            console.log("report complete2");
            // const myReportModel2 = action.payload;
            return action.payload;
        default:
            return state;
    }
}
/*************************
 * SELECTORS
 ************************/
//export const getEntities = (state: AppState) => state.myReportModel;
var getCourses = function (state) { return state.reports; };
var getIsLoading = function (state) { return state.isLoadingCourses; };
//# sourceMappingURL=myReport.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/report-reader/store/myReport.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return courseInitialState; });
var courseInitialState = {
    reports: [
        { name: "A", email: "xyz" }
    ],
    isLoadingCourses: true,
    selectedCourse: null,
    error: null,
};
//# sourceMappingURL=myReport.state.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_elements_ui_elements_module__ = __webpack_require__("../../../../../src/app/ui-elements/ui-elements.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules




// services

var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            // HttpClientModule,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
            // BsDatepickerModule.forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__ui_elements_ui_elements_module__["a" /* UIElementsModule */]
        ],
        declarations: [],
        providers: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            // HttpClientModule,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
            // BsDatepickerModule,
            __WEBPACK_IMPORTED_MODULE_4__ui_elements_ui_elements_module__["a" /* UIElementsModule */],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/ui-elements/loader/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-elements/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"test\" >\n  hello\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-elements/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__("../../../../../src/app/ui-elements/loader/loader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-elements/loader/loader.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoaderComponent);

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-elements/simple-ag-grid/simple-ag-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-elements/simple-ag-grid/simple-ag-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<ag-grid-angular #agGrid style=\"height: 600px;\" class=\"ag-theme-fresh\"\r\n        [columnDefs] = \"colmnObs | async\"\r\n        [pagination]=\"true\"\r\n\t\t \r\n        [enableColResize]=\"true\"\r\n        [enableSorting]=\"true\"\r\n        [paginationAutoPageSize]=\"true\"\r\n        [overlayNoRowsTemplate]=\"overlayNoRowsTemplate\"\r\n        (gridReady)=\"onGridReady($event)\"\r\n        >\r\n</ag-grid-angular>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-elements/simple-ag-grid/simple-ag-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIAgGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UIAgGridComponent = (function () {
    function UIAgGridComponent(cd) {
        this.cd = cd;
        // private rowData = [];
        this.columnDefs = [];
        this.headerStrArr = [];
        this.rowDataSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](undefined);
        this.colmnSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](undefined);
        this.rowDataObs = this.rowDataSub.asObservable();
        this.colmnObs = this.colmnSub.asObservable();
    }
    UIAgGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInitSimpleGrid");
        this.setNoRowTxt();
        //this.colHeadersObsrv.subscribe(console.log);
        //this.rowDataObsrv.subscribe(console.log);
        this.colHeadersObsrv.subscribe(function (head) { return _this.processHeaders(head); });
    };
    UIAgGridComponent.prototype.onGridReady = function (params) {
        var _this = this;
        console.log("Grid is Ready");
        this.rowDataObsrv.subscribe(function (rows) {
            var rowData = _this.processRowData(rows);
            //  console.log('onGridReady ' + rowData[0]);
            //rowData.subscribe(console.log);
            params.api.setRowData(rowData);
            if (rowData && rowData.length > 0) {
                console.log('hideOverlay ');
                params.api.hideOverlay();
            }
            else {
                console.log('showNoRowsOverlay ');
                // params.api.showNoRowsOverlay();
            }
        });
    };
    UIAgGridComponent.prototype.processHeaders = function (heads) {
        //heads.subscribe(console.log);
        //console.log("processHeadersArray"+heads[0]);
        // console.log(' processHeaders ' + typeof(heads));
        if (!heads) {
            return;
        }
        var testMe = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(heads);
        //Observable.of(heads).subscribe(val => this.headerStrArr = val);
        //res.subscribe(val => this.myReportsArray = val);
        // this.headerStrArr = heads;
        for (var _i = 0, heads_1 = heads; _i < heads_1.length; _i++) {
            var i = heads_1[_i];
            console.log(i);
            this.columnDefs.push({
                headerName: i,
                field: i,
                width: 100
            });
        }
        /*  this.columnDefs.push({
              headerName: "name"
              , field: "name"
              , width: 100
            });*/
        /* testMe.forEach(h => {
             console.log(h);
           this.columnDefs.push({
             headerName: h
             , field: h
             , width: 100
           });
         });*/
        this.colmnSub.next(this.columnDefs);
    };
    UIAgGridComponent.prototype.processRowData = function (rows) {
        // console.log('private processRowData Checkpost: ' + rows[0].name);
        if (!rows || rows.length === 0) {
            return [];
        }
        var rowData = [];
        var _loop_1 = function (d) {
            //console.log("Filling Rows: "+d);
            var newData = {};
            this_1.headerStrArr.forEach(function (h) { return Object.defineProperty(newData, h, { value: d[h] }); });
            //console.log("Filling Rows2: "+newData["Hello"]);
            rowData.push(newData);
        };
        var this_1 = this;
        for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
            var d = rows_1[_i];
            _loop_1(d);
        }
        return rows;
    };
    UIAgGridComponent.prototype.ngOnChanges = function (changes) {
        console.log("On changes");
        this.rowDataObsrv.subscribe(console.log);
    };
    UIAgGridComponent.prototype.setNoRowTxt = function () {
        this.overlayNoRowsTemplate = "No Records were fetched. Please try again later.";
    };
    return UIAgGridComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], UIAgGridComponent.prototype, "colHeadersObsrv", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], UIAgGridComponent.prototype, "rowDataObsrv", void 0);
UIAgGridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'simple-ag-grid',
        template: __webpack_require__("../../../../../src/app/ui-elements/simple-ag-grid/simple-ag-grid.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__("../../../../../src/app/ui-elements/simple-ag-grid/simple-ag-grid.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object])
], UIAgGridComponent);

var _a, _b, _c;
//# sourceMappingURL=simple-ag-grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-elements/ui-elements.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIElementsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ag_grid_angular_main__ = __webpack_require__("../../../../ag-grid-angular/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ag_grid_angular_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ag_grid_angular_main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simple_ag_grid_simple_ag_grid_component__ = __webpack_require__("../../../../../src/app/ui-elements/simple-ag-grid/simple-ag-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_loader_component__ = __webpack_require__("../../../../../src/app/ui-elements/loader/loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// modules
//import {AlertModule} from 'ngx-bootstrap';
//import {BsDatepickerModule} from 'ngx-bootstrap';
// components
//import {MessagesValidationComponent} from './messages-validation/messages-validation';
//import {UIInputComponent} from './ui-input/ui-input';
//import {UISelectComponent} from './ui-select/ui-select';
//import {UIReviewComponent} from './ui-review/ui-review';
//import {UINumberPickerComponent} from './ui-number-picker/ui-number-picker';
//import {UIDatePickerComponent} from './ui-datepicker/ui-datepicker.component';
//import {UIPasswordComponent} from './ui-password/ui-password';
// directives
/*import {HexadecimalValidatorDirective} from './directives/hexadecimal.directive';
import {NumericValidatorDirective} from './directives/numeric.directive';
import {DateValidatorDirective} from './directives/date.directive';
import {EmailValidatorDirective} from './directives/email.directive';
import {MaxDateTodayValidatorDirective} from './directives/maxDateToday.directive';
import {PasswordValidatorDirective} from './directives/password-valid.directive';
import {FocusDirective} from './directives/focus.directive';
*/
var UIElementsModule = (function () {
    function UIElementsModule() {
    }
    return UIElementsModule;
}());
UIElementsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_ag_grid_angular_main__["AgGridModule"].withComponents([])
            //AlertModule.forRoot(),
            //BsDatepickerModule.forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__simple_ag_grid_simple_ag_grid_component__["a" /* UIAgGridComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loader_loader_component__["a" /* LoaderComponent */]
            //UIInputComponent,
            // UINumberPickerComponent,
            //UISelectComponent,
            // UIReviewComponent,
            // UIDatePickerComponent,
            // UIPasswordComponent,
            // MessagesValidationComponent,
            /* HexadecimalValidatorDirective,
             NumericValidatorDirective,
             DateValidatorDirective,
             EmailValidatorDirective,
             MaxDateTodayValidatorDirective,
             PasswordValidatorDirective,
             FocusDirective*/
        ],
        providers: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__simple_ag_grid_simple_ag_grid_component__["a" /* UIAgGridComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loader_loader_component__["a" /* LoaderComponent */]
            /* UIInputComponent,
             UISelectComponent,
             UINumberPickerComponent,
             UIReviewComponent,
             UIDatePickerComponent,
             UIPasswordComponent,
             MessagesValidationComponent,
             HexadecimalValidatorDirective,
             NumericValidatorDirective,
             DateValidatorDirective,
             EmailValidatorDirective,
             MaxDateTodayValidatorDirective,
             PasswordValidatorDirective*/
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], UIElementsModule);

//# sourceMappingURL=ui-elements.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map