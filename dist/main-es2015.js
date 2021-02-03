(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+8K2":
/*!**********************************************!*\
  !*** ./src/app/common/interceptors/index.ts ***!
  \**********************************************/
/*! exports provided: JwtInterceptor, ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.interceptor */ "vqtw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error_interceptor */ "nUvU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });





/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\my-app\src\main.ts */"zUnb");


/***/ }),

/***/ "3EkV":
/*!*********************************************!*\
  !*** ./src/app/shared/models/file.model.ts ***!
  \*********************************************/
/*! exports provided: File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
class File {
    constructor(data) {
        if (data) {
            Object.assign(this, data);
        }
    }
    deserialize(input) {
        // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
        this.id = input.id;
        this.fileName = input.file_name;
        this.path = input.path;
        this.mimeType = input.mime_type;
        this.status = input.status;
        this.ext = input.ext;
        this.size = input.size;
        this.createdAt = input.created_at;
        this.updatedAt = input.updated_at;
        this.originalName = input.original_name;
        this.isLocal = input.is_local || true;
        return this;
    }
    serialize() {
        return {
            id: this.id,
            file_name: this.fileName,
            original_name: this.originalName,
            path: this.path,
            mime_type: this.mimeType,
            ext: this.ext,
            size: this.size,
            status: this.status,
            is_local: this.isLocal,
            created_at: this.createdAt,
            updated_at: this.updatedAt
        };
    }
}


/***/ }),

/***/ "3mQS":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/local/local-storage.service.ts ***!
  \****************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


const APP_PREFIX = 'T3T-';
class LocalStorageService {
    constructor() {
    }
    /**
     * Adding some data to local storage
     *
     * @param {string} key
     * @param {any} value
     *
     * @return void
     */
    setItem(key, value) {
        localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
    }
    /**
     * Get the value for a particular key
     *
     * @param {string} key
     *
     * @return any
     */
    getItem(key) {
        let value = localStorage.getItem(`${APP_PREFIX}${key}`);
        if (value && value != 'undefined') {
            return JSON.parse(value);
        }
        else {
            return null;
        }
    }
    /**
     * Remove key into storage
     *
     * @param {string} key
     *
     * @return any
     */
    remove(key) {
        localStorage.removeItem(`${APP_PREFIX}${key}`);
    }
    /**
     * Clear all local storage
     *
     * @return any
     */
    clearAll() {
        localStorage.clear();
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9Mav":
/*!**********************************************!*\
  !*** ./src/app/shared/services/api/index.ts ***!
  \**********************************************/
/*! exports provided: AuthService, HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "anFB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "pcdJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]; });





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
    production: false,
    api: 'https://api-dev.goonder.vn',
    appName: 'Goonder',
    version: 'v1',
    facebookAppId: "713987242838520",
    facebookApiVersion: "v4.0",
    facebookApiUrl: "https://graph.facebook.com",
    facebookWebUrl: "https://www.facebook.com"
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

/***/ "DLfj":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/translate/translate.component.ts ***!
  \********************************************************************/
/*! exports provided: TranslateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateComponent", function() { return TranslateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");




class TranslateComponent {
    constructor(_translate) {
        this._translate = _translate;
        this.key = "";
        this.replaces = {};
        this.translate = "";
        this._translate.use('vi');
    }
    ngOnInit() {
        this.fnTranslate();
    }
    fnTranslate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Promise.all(Object.keys(this.replaces).map((key) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let string = yield this.fnGetTranslate(this.replaces[key]);
                this.replaces[key] = string || '';
            })));
            this._translate.get(this.key, this.replaces).subscribe((res) => {
                this.translate = res;
            });
        });
    }
    fnGetTranslate(field) {
        return new Promise((resolve) => {
            this._translate.get(field).subscribe((res) => {
                return resolve(res);
            }, (err) => {
                return resolve('');
            });
        });
    }
}
TranslateComponent.ɵfac = function TranslateComponent_Factory(t) { return new (t || TranslateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
TranslateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TranslateComponent, selectors: [["app-translate"]], inputs: { key: "key", replaces: "replaces" }, decls: 1, vars: 1, template: function TranslateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.translate);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RyYW5zbGF0ZS90cmFuc2xhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-translate',
                templateUrl: './translate.component.html',
                styleUrls: ['./translate.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, { key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], replaces: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "FRWE":
/*!***********************************************************!*\
  !*** ./src/app/shared/layouts/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/api */ "9Mav");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");








const _c0 = ["app-header", ""];
function HeaderComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.sessionInfo.firstName, " ", ctx_r0.sessionInfo.lastName, " ");
} }
const _c1 = function () { return ["/users/login"]; };
function HeaderComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "LOGIN"), " ");
} }
const _c2 = function () { return ["/users/register"]; };
function HeaderComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "REGISTER"), " ");
} }
function HeaderComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "LOGOUT"), " ");
} }
function HeaderComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "LOGIN"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "REGISTER"), " ");
} }
function HeaderComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r5.sessionInfo.firstName, " ", ctx_r5.sessionInfo.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, "LOGOUT"), " ");
} }
const _c3 = function () { return [""]; };
class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.isCollapsed = true;
        this.isLogged = false;
        this.authService.sessionInfo.subscribe(x => this.sessionInfo = x);
        const accessToken = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this.sessionInfo, 'accessToken');
        if (accessToken)
            this.isLogged = true;
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["", "app-header", ""]], attrs: _c0, decls: 26, vars: 18, consts: [["id", "navbar-custom", 1, "navbar", "navbar-expand-md", "fixed-top", "goonder-nav", "py-0"], [1, "navbar-brand", "title", 3, "routerLink"], ["src", "assets/images/app/logo-xs.png", "alt", "Gooner_Logo"], [1, "d-inline"], ["type", "button", "data-target", "#navbarsDefault", "aria-controls", "navbarsDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "hidden-sm-up", "collapse-button", 3, "click"], [1, "fa", "fa-bars"], ["id", "navbarsDefault", 1, "collapse", "navbar-collapse", "goonder-navbar-menu", 3, "ngbCollapse"], [1, "navbar-nav", "mr-auto", "nav-right"], ["class", "nav-item dropdown ", "ngbDropdown", "", 4, "ngIf"], ["ngbDropdown", "", 1, "nav-item", "dropdown"], ["href", "#", 1, "nav-item"], [1, "navbar-collapse", "collapse", "order-3", "dual-collapse2"], [1, "navbar-nav", "ml-auto"], [4, "ngIf"], [1, "nav-item", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_6_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_li_10_Template, 3, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_li_11_Template, 4, 5, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_li_12_Template, 4, 5, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HeaderComponent_li_21_Template, 4, 3, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HeaderComponent_ng_container_24_Template, 9, 10, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HeaderComponent_ng_container_25_Template, 8, 5, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 11, "APP_NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed && ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed && !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed && !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, "HOME.NAV_SELLER_PAGE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 15, "HOME.NAV_BUYER_PAGE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed && ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".mobile-side-nav[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #f5821f;\n  font-weight: 500;\n  font-size: 3rem;\n  font-family: \"Nova Flat\", cursive;\n  line-height: 1.2;\n}\n\n.title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 60px;\n}\n\n.goonder-nav[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-bottom: 1px solid #FFFFFF;\n}\n\n.collapse-button[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  color: #000000 !important;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.2;\n  margin-right: 1.5rem;\n}\n\n.goonder-navbar-menu[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n@media only screen and (max-width: 575.98px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 54px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFVBQUE7QUFESjs7QUFHQTtFQUNJLGNDTlk7RURPWixnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0NLTztFREpQLGdCQUFBO0FBQUo7O0FBQ0k7RUFDSSxlQUFBO0FBQ1I7O0FBRUE7RUFDSSxtQkNkSTtFRGVKLGdDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQ2pCSTtBRG1CUjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUdKOztBQURBO0VBQ0kscUJBQUE7QUFJSjs7QUFEQTtFQUNJO0lBQ0ksZUFBQTtFQUlOO0VBSE07SUFDSSxlQUFBO0VBS1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzXCI7XHJcblxyXG4ubW9iaWxlLXNpZGUtbmF2IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBmb250LWZhbWlseTogJGFwcC1mb250O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xyXG4gICAgfVxyXG59XHJcbi5nb29uZGVyLW5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHdoaXRlO1xyXG59XHJcbi5jb2xsYXBzZS1idXR0b24ge1xyXG4gICAgY29sb3I6ICRibGFja1xyXG59XHJcbi5uYXYtaXRlbSB7XHJcbiAgICBjb2xvcjokYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbn1cclxuLmdvb25kZXItbmF2YmFyLW1lbnUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDU0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIkcHJpbWFyeS1jb2xvcjogI2Y1ODIxZjtcclxuJG1haW4tY29udGFpbmVyLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoNzUuNDhkZWcsIHJnYmEoMTM4LCAzNSwgMTM1LCAwLjY2NCkgNS4xNCUsIHJnYmEoMjMzLCA2NCwgODcsIDAuNTc2KSA0OS43NSUsIHJnYmEoMjQyLCAxMTMsIDMzLCAwLjYxNikgMTAwJSk7XHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4kcHJpbWFyeS1idXR0b24tY29sb3I6ICNGMjcxMjE7XHJcbiRwdXJwbGU6ICM4QTIzODc7XHJcbiRibHVlOiAjMDA3YmZmO1xyXG4kZ3JleTogIzQ4NDg0ODtcclxuJGFscGhhLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4kYWxwaGEtYmxhY2s6IHJnYmEoMCwwLDAsMC4yNSk7XHJcblxyXG4vLyBGb250c1xyXG4kYm9keS1mb250OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuLy8gQXBwIG5hbWUgZm9udDogTm92YSBGbGF0XHJcbiRhcHAtZm9udDogJ05vdmEgRmxhdCcsIGN1cnNpdmU7XHJcblxyXG4vLyBGb3JtIHN0eWxlc1xyXG4laW5wdXQtZGVjb3Ige1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjI1KTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-header]',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _services_api__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "G7Aa":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/local/shared.service.ts ***!
  \*********************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");

// import { SecureLayoutComponent} from '../layouts/secure.component';


class SharedService {
    constructor() {
        // Observable string sources
        this.missionAnnouncedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable string streams
        this.missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    }
    getSecure(data) {
        this.missionAnnouncedSource.next(data);
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "KJJU":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/*! exports provided: User, UserSocial, UserProfile, UserBank, AccessToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSocial", function() { return UserSocial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBank", function() { return UserBank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return AccessToken; });
/* harmony import */ var _file_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file.model */ "3EkV");

class User {
    constructor(data) {
        if (data) {
            Object.assign(this, data);
            if (data.userId)
                this.id = data.userId;
        }
    }
    deserialize(input) {
        this.code = input.code;
        this.email = input.email;
        this.sellerId = input.seller_id;
        this.password = input.password;
        this.firstName = input.first_name;
        this.lastName = input.last_name;
        this.phone = input.phone;
        this.status = input.status;
        this.isVerified = input.is_verified;
        this.type = input.type;
        this.avatar = input.avatar;
        this.id = input.user_id || input.id || input._id;
        // this.userProfile = new IUserProfile().deserialize(input.user_profile);
        // this.userBank = new IUserBank().deserialize(input.user_bank);
        // this.userSocial = new IUserSocial().deserialize(input.user_social);
        this.accessToken = input.access_token;
        return this;
    }
    serialize() {
        return {
            id: this.id,
            is_verified: this.isVerified,
            code: this.code,
            email: this.email,
            password: this.password,
            seller_id: this.sellerId,
            first_name: this.firstName,
            last_name: this.lastName,
            phone: this.phone,
            status: this.status,
            type: this.type,
            avatar: this.avatar,
            user_social: (this.userSocial) ? this.userSocial.serialize() : undefined,
            user_profile: (this.userProfile) ? this.userProfile.serialize() : undefined,
            user_bank: (this.userBank) ? this.userBank.serialize() : undefined,
            accesstoken: (this.accessToken) ? this.accessToken.serialize() : undefined,
        };
    }
}
class UserSocial {
    constructor(data) {
        if (data) {
            Object.assign(this, data);
        }
    }
    deserialize(input) {
        this.userId = input.user_id;
        this.email = input.email;
        this.phone = input.phone;
        this.extraData = input.extra_data;
        this.provider = input.provider;
        this.createdAt = input.created_at;
        this.updatedAt = input.updated_at;
        return this;
    }
    serialize() {
        return {
            id: this.id,
            user_id: this.userId,
            email: this.email,
            phone: this.phone,
            uuid: this.uuid,
            extra_data: this.extraData,
            provider: this.provider,
            created_at: this.createdAt,
            updated_at: this.updatedAt
        };
    }
}
class UserProfile {
    constructor(data) {
        if (data) {
            Object.assign(this, data);
        }
    }
    deserialize(input) {
        // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
        this.id = input.id;
        this.userId = input.user_id;
        this.cardFront = input.card_front;
        this.cardBack = input.card_back;
        this.shopUrls = input.shop_urls;
        this.orderReturnAddress = input.order_return_address;
        this.orderReturnProvince = input.order_return_province;
        this.orderCountries = input.order_countries;
        this.orderSourceType = input.order_source_type;
        this.personalUrlProfile = input.personal_url_profile;
        this.sellerUrlProfile = input.seller_url_profile;
        this.createdAt = input.created_at;
        this.updatedAt = input.updated_at;
        return this;
    }
    serialize() {
        return {
            id: this.id,
            user_id: this.userId,
            card_front: (this.cardFront) ? new _file_model__WEBPACK_IMPORTED_MODULE_0__["File"](this.cardFront).serialize() : null,
            card_back: (this.cardBack) ? new _file_model__WEBPACK_IMPORTED_MODULE_0__["File"](this.cardBack).serialize() : null,
            shop_urls: this.shopUrls,
            order_return_address: this.orderReturnAddress,
            order_return_province: this.orderReturnProvince,
            order_countries: this.orderCountries,
            order_source_type: this.orderSourceType,
            personal_url_profile: this.personalUrlProfile,
            seller_url_profile: this.sellerUrlProfile,
            created_at: this.createdAt,
            updated_at: this.updatedAt
        };
    }
}
class UserBank {
    constructor(data) {
        if (data) {
            Object.assign(this, data);
        }
    }
    deserialize(input) {
        // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
        this.id = input.id;
        this.userId = input.user_id;
        this.accountHolder = input.account_holder;
        this.bankName = input.bank_name;
        this.bankBranch = input.bank_branch;
        this.accountNumber = input.account_number;
        this.createdAt = input.created_at;
        this.updatedAt = input.updated_at;
        return this;
    }
    serialize() {
        return {
            id: this.id,
            user_id: this.userId,
            account_holder: this.accountHolder,
            bank_name: this.bankName,
            bank_branch: this.bankBranch,
            account_number: this.accountNumber,
            created_at: this.createdAt,
            updated_at: this.updatedAt
        };
    }
}
class AccessToken {
    constructor(data) {
        if (data) {
            Object.assign(data, this);
        }
    }
    deserialize(input) {
        this.userId = input.user_id;
        this.token = input.token;
        this.type = input.type;
        this.expiresIn = input.expires_in;
        return this;
    }
    serialize() {
        return {
            user_id: this.userId,
            token: this.token,
            type: this.type,
            expires_in: this.expiresIn
        };
    }
}


/***/ }),

/***/ "KJz6":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/app-field-error-display/app-field-error-display.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AppFieldErrorDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFieldErrorDisplayComponent", function() { return AppFieldErrorDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



function AppFieldErrorDisplayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "(error)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppFieldErrorDisplayComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppFieldErrorDisplayComponent.ɵfac = function AppFieldErrorDisplayComponent_Factory(t) { return new (t || AppFieldErrorDisplayComponent)(); };
AppFieldErrorDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppFieldErrorDisplayComponent, selectors: [["app-field-error-display"]], inputs: { errorMsg: "errorMsg", displayError: "displayError" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "glyphicon", "glyphicon-remove", "form-control-feedback", "fix-error-icon"], [1, "sr-only"], [1, "error-msg"]], template: function AppFieldErrorDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppFieldErrorDisplayComponent_div_0_Template, 5, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".error-msg[_ngcontent-%COMP%] {\n  color: #a94442;\n}\n\n.fix-error-icon[_ngcontent-%COMP%] {\n  top: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYXBwLWZpZWxkLWVycm9yLWRpc3BsYXkvYXBwLWZpZWxkLWVycm9yLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxTQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hcHAtZmllbGQtZXJyb3ItZGlzcGxheS9hcHAtZmllbGQtZXJyb3ItZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tc2cge1xyXG4gICAgY29sb3I6ICNhOTQ0NDI7XHJcbn1cclxuLmZpeC1lcnJvci1pY29uIHtcclxuICAgIHRvcDogMjdweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppFieldErrorDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-field-error-display',
                templateUrl: './app-field-error-display.component.html',
                styleUrls: ['./app-field-error-display.component.scss']
            }]
    }], function () { return []; }, { errorMsg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displayError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "LzQu":
/*!*******************************************!*\
  !*** ./src/app/shared/constants/index.ts ***!
  \*******************************************/
/*! exports provided: USER_INFO, ACCESS_TOKEN, PUBLIC_KEY, PROVIDER, USER_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INFO", function() { return USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN", function() { return ACCESS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLIC_KEY", function() { return PUBLIC_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROVIDER", function() { return PROVIDER; });
/* harmony import */ var _user_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.constant */ "Qkfx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_CONFIG", function() { return _user_constant__WEBPACK_IMPORTED_MODULE_0__["USER_CONFIG"]; });

const USER_INFO = "USER_INFO";
const ACCESS_TOKEN = "ACCESS_TOKEN";
const PUBLIC_KEY = "PUBLIC_KEY";
const PROVIDER = {
    FACEBOOK: 1
};



/***/ }),

/***/ "PgP2":
/*!***********************************************************!*\
  !*** ./src/app/shared/layouts/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");



const _c0 = ["app-footer", ""];
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["", "app-footer", ""]], attrs: _c0, decls: 4, vars: 3, consts: [[1, "footer", "fixed-bottom"], ["id", "copyrightDescription", 1, "d-block", "text-capitalize", "text-center", "w-100", "order-last"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "FOOTER.COPY_RIGHT_DESCRIPTION"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".footer[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background-color: #FFFFFF;\n  width: 100%;\n  bottom: 0;\n}\n\n#leftFooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #rightFooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.empty-div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n}\n\n#copyrightDescription[_ngcontent-%COMP%] {\n  background-color: #f5821f;\n  height: 25px;\n}\n\n.app-name[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #f5821f;\n  font-family: \"Nova Flat\", cursive;\n}\n\n.fa-facebook-f[_ngcontent-%COMP%] {\n  background: #3B5998;\n  color: white;\n  padding: 10px;\n  font-size: 30px;\n  width: 50px;\n  text-align: center;\n  text-decoration: none;\n  margin: 5px 2px;\n}\n\n.fa[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.fa-google[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 30px;\n  width: 50px;\n  text-align: center;\n  text-decoration: none;\n  margin: 5px 2px;\n  background: #dd4b39;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNDREk7RURFSix5QkNGSTtFREdKLFdBQUE7RUFDQSxTQUFBO0FBREo7O0FBTUk7O0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUFGUjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRko7O0FBSUE7RUFDSSx5QkNyQlk7RURzQlosWUFBQTtBQURKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGNDMUJZO0VEMkJaLGlDQ2JPO0FEYVg7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzXCI7XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuI2xlZnRGb290ZXIsXHJcbiNyaWdodEZvb3RlciB7XHJcbiAgICBhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4uZW1wdHktZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbiNjb3B5cmlnaHREZXNjcmlwdGlvbiB7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmFwcC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGZvbnQtZmFtaWx5OiAkYXBwLWZvbnQ7XHJcbn1cclxuLmZhLWZhY2Vib29rLWYge1xyXG4gICAgYmFja2dyb3VuZDogIzNCNTk5ODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbjogNXB4IDJweDtcclxufVxyXG4uZmE6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5mYS1nb29nbGUge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOiA1cHggMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkNGIzOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSIsIiRwcmltYXJ5LWNvbG9yOiAjZjU4MjFmO1xyXG4kbWFpbi1jb250YWluZXItY29sb3I6IGxpbmVhci1ncmFkaWVudCg3NS40OGRlZywgcmdiYSgxMzgsIDM1LCAxMzUsIDAuNjY0KSA1LjE0JSwgcmdiYSgyMzMsIDY0LCA4NywgMC41NzYpIDQ5Ljc1JSwgcmdiYSgyNDIsIDExMywgMzMsIDAuNjE2KSAxMDAlKTtcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiRwcmltYXJ5LWJ1dHRvbi1jb2xvcjogI0YyNzEyMTtcclxuJHB1cnBsZTogIzhBMjM4NztcclxuJGJsdWU6ICMwMDdiZmY7XHJcbiRncmV5OiAjNDg0ODQ4O1xyXG4kYWxwaGEtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiRhbHBoYS1ibGFjazogcmdiYSgwLDAsMCwwLjI1KTtcclxuXHJcbi8vIEZvbnRzXHJcbiRib2R5LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4vLyBBcHAgbmFtZSBmb250OiBOb3ZhIEZsYXRcclxuJGFwcC1mb250OiAnTm92YSBGbGF0JywgY3Vyc2l2ZTtcclxuXHJcbi8vIEZvcm0gc3R5bGVzXHJcbiVpbnB1dC1kZWNvciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuMjUpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-footer]',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QONO":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/api/global.service.ts ***!
  \*******************************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api/http.service */ "pcdJ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @constants */ "LzQu");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_app_shared_services_local_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/local/local-storage.service */ "3mQS");









class GlobalService extends src_app_shared_services_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] {
    constructor(http, _localStorageService) {
        super(http);
        this._localStorageService = _localStorageService;
        this.publicKeySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this._localStorageService.getItem(_constants__WEBPACK_IMPORTED_MODULE_4__["PUBLIC_KEY"]));
        this.publicKey = this.publicKeySubject.asObservable();
    }
    /**
     * function register  account
     * @param user
     */
    fnGetPublicKey() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield this.get('api/public-key').toPromise();
            const key = lodash__WEBPACK_IMPORTED_MODULE_5__["get"](response, 'data.item.public_key');
            if (key) {
                this._localStorageService.setItem(_constants__WEBPACK_IMPORTED_MODULE_4__["PUBLIC_KEY"], key);
                this.publicKeySubject.next(key);
            }
        });
    }
    get key() {
        return this.publicKeySubject.value;
    }
}
GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_shared_services_local_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"])); };
GlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GlobalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: src_app_shared_services_local_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "Qkfx":
/*!***************************************************!*\
  !*** ./src/app/shared/constants/user.constant.ts ***!
  \***************************************************/
/*! exports provided: USER_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_CONFIG", function() { return USER_CONFIG; });
const USER_CONFIG = {
    STATUS: {
        ACTIVE: 1,
        INACTIVE: 2,
        DELETED: 3
    },
    LOGIN_TYPE: {
        NORMAL: 1,
        FACEBOOK: 2,
        GOOGLE: 3
    },
    PROVIDER: {
        FACEBOOK: 1,
        GOOGLE: 2
    },
    TYPE: {
        DEFAULT: 1,
        SOCIAL: 2
    },
    IS_VERIFIED: {
        NOT_VERIFIED: 1,
        VERIFIED: 2,
        REJECT: 3
    },
    FILE_CARD_TYPE: {
        CARD_FRONT: 1,
        CARD_BACK: 2
    }
};


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environment/environment */ "AytR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _services_local_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/local/title.service */ "vqFO");
/* harmony import */ var _services_api_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/api/global.service */ "QONO");
/* harmony import */ var _shared_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/layouts/header/header.component */ "FRWE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/layouts/footer/footer.component */ "PgP2");









const _c0 = ["app-root", ""];
class AppComponent {
    constructor(_translateService, _titleService, _globalService) {
        this._translateService = _translateService;
        this._titleService = _titleService;
        this._globalService = _globalService;
        this._translateService.use('vi');
        this._titleService.setTitle();
        this._globalService.fnGetPublicKey();
    }
    ngOnInit() {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar-custom").style.top = "0";
                // let collapseButton = Array.from(document.getElementsByClassName('collapse-button') as HTMLCollectionOf<HTMLElement>);
                // let navItems = Array.from(document.getElementsByClassName("nav-item") as HTMLCollectionOf<HTMLElement>);
                // if(currentScrollPos > 0 ) { 
                //   document.getElementById("navbar-custom").style.backgroundColor = "white";
                //   for( let i = 0 ; i < collapseButton.length; i++) {
                //     collapseButton[i].style.setProperty("color", "black", "important")
                //   }
                //   for( let i = 0 ; i < navItems.length; i++) {
                //     navItems[i].style.setProperty("color", "black", "important")
                //   }
                //   // document.getElementsByClassName(".collapse-button,.nav-item").style.color = "black";
                // }
                // else {
                //   document.getElementById("navbar-custom").style.backgroundColor = "transparent";
                //   for( let i = 0 ; i < collapseButton.length; i++) {
                //     collapseButton[i].style.setProperty("color", "white", "important")
                //   }
                //   for( let i = 0 ; i < navItems.length; i++) {
                //     navItems[i].style.setProperty("color", "white", "important")
                //   }
                // }
            }
            else {
                document.getElementById("navbar-custom").style.top = "-106px";
            }
            prevScrollpos = currentScrollPos;
        };
        this.fbLibrary();
    }
    fbLibrary() {
        window.fbAsyncInit = function () {
            window['FB'].init({
                appId: _environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].facebookAppId,
                cookie: true,
                xfbml: true,
                version: 'v3.1'
            });
            window['FB'].AppEvents.logPageView();
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["", "app-root", ""]], attrs: _c0, decls: 4, vars: 0, consts: [["app-header", ""], ["id", "fixHeader"], ["app-footer", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "footer", 2);
    } }, directives: [_shared_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _shared_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-root]',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _services_local_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"] }, { type: _services_api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "TwVa":
/*!****************************************!*\
  !*** ./src/app/shared/models/index.ts ***!
  \****************************************/
/*! exports provided: File, User, UserSocial, UserProfile, UserBank, AccessToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file.model */ "3EkV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "File", function() { return _file_model__WEBPACK_IMPORTED_MODULE_0__["File"]; });

/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.model */ "KJJU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user_model__WEBPACK_IMPORTED_MODULE_1__["User"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSocial", function() { return _user_model__WEBPACK_IMPORTED_MODULE_1__["UserSocial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return _user_model__WEBPACK_IMPORTED_MODULE_1__["UserProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserBank", function() { return _user_model__WEBPACK_IMPORTED_MODULE_1__["UserBank"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return _user_model__WEBPACK_IMPORTED_MODULE_1__["AccessToken"]; });





/***/ }),

/***/ "UKGz":
/*!*************************************************!*\
  !*** ./src/app/shared/modules/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/page-title/page-title.component */ "n4kJ");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _core_components_translate_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core-components/translate/translate.component */ "DLfj");
/* harmony import */ var _core_components_app_field_error_display_app_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core-components/app-field-error-display/app-field-error-display.component */ "KJz6");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "EApP");










class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [src_app_shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__["PageTitleComponent"], _core_components_translate_translate_component__WEBPACK_IMPORTED_MODULE_5__["TranslateComponent"], _core_components_app_field_error_display_app_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__["AppFieldErrorDisplayComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]], exports: [src_app_shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__["PageTitleComponent"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _core_components_translate_translate_component__WEBPACK_IMPORTED_MODULE_5__["TranslateComponent"], _core_components_app_field_error_display_app_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__["AppFieldErrorDisplayComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()],
                declarations: [src_app_shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__["PageTitleComponent"], _core_components_translate_translate_component__WEBPACK_IMPORTED_MODULE_5__["TranslateComponent"], _core_components_app_field_error_display_app_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__["AppFieldErrorDisplayComponent"]],
                exports: [src_app_shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__["PageTitleComponent"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _core_components_translate_translate_component__WEBPACK_IMPORTED_MODULE_5__["TranslateComponent"], _core_components_app_field_error_display_app_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__["AppFieldErrorDisplayComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "XjKp":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/api/notify.service.ts ***!
  \*******************************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environment/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "EApP");




class NotifyService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    success(message) {
        return this.toastr.success(message, _environment_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appName);
    }
    error(message) {
        return this.toastr.error(message, _environment_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appName);
    }
    warning(message) {
        return this.toastr.warning(message, _environment_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appName);
    }
    info(message) {
        return this.toastr.info(message, _environment_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appName);
    }
}
NotifyService.ɵfac = function NotifyService_Factory(t) { return new (t || NotifyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
NotifyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotifyService, factory: NotifyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotifyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/layouts/header/header.component */ "FRWE");
/* harmony import */ var _shared_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/layouts/footer/footer.component */ "PgP2");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "k5Gf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/modules/shared.module */ "UKGz");
/* harmony import */ var _services_local_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/local/shared.service */ "G7Aa");
/* harmony import */ var _common_interceptors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/interceptors */ "+8K2");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");

















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/locales/', '.json');
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_local_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _common_interceptors__WEBPACK_IMPORTED_MODULE_13__["JwtInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _common_interceptors__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                }
            }),
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _shared_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _shared_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _shared_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _shared_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                        }
                    }),
                    _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]
                ],
                providers: [
                    _services_local_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _common_interceptors__WEBPACK_IMPORTED_MODULE_13__["JwtInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _common_interceptors__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "anFB":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/api/auth.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api/http.service */ "pcdJ");
/* harmony import */ var src_app_shared_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models */ "TwVa");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @constants */ "LzQu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_app_shared_services_local_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/local/local-storage.service */ "3mQS");









class AuthService extends src_app_shared_services_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] {
    constructor(http, _localStorageService) {
        super(http);
        this._localStorageService = _localStorageService;
        this.sessionInfoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._localStorageService.getItem(_constants__WEBPACK_IMPORTED_MODULE_5__["USER_INFO"]));
        this.sessionInfo = this.sessionInfoSubject.asObservable();
    }
    /**
     * service login to authencation
     * userInfo {
     *    email: <string>
     *    password: <string>
     * }
     * when authencation is success, localstorage will store token to database
     * @param userInfo
     */
    fnLogin(userInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { email, password } = userInfo;
            try {
                const response = yield this.post(`api/users/login`, { email, password }).toPromise();
                const { access_token: accessToken } = response.data.item;
                this._localStorageService.setItem(_constants__WEBPACK_IMPORTED_MODULE_5__["USER_INFO"], new src_app_shared_models__WEBPACK_IMPORTED_MODULE_3__["User"]().deserialize(response.data.item));
                this._localStorageService.setItem(_constants__WEBPACK_IMPORTED_MODULE_5__["ACCESS_TOKEN"], accessToken);
                this.sessionInfoSubject.next(userInfo);
                return userInfo;
            }
            catch (error) {
                throw error;
            }
        });
    }
    fnLoginFacebook(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userInfo = user.serialize();
            try {
                const response = yield this.post(`api/users/facebook`, userInfo).toPromise();
                const { access_token: accessToken } = response.data.item;
                this._localStorageService.setItem(_constants__WEBPACK_IMPORTED_MODULE_5__["USER_INFO"], new src_app_shared_models__WEBPACK_IMPORTED_MODULE_3__["User"]().deserialize(response.data.item));
                this._localStorageService.setItem(_constants__WEBPACK_IMPORTED_MODULE_5__["ACCESS_TOKEN"], accessToken);
                this.sessionInfoSubject.next(userInfo);
                return userInfo;
            }
            catch (error) {
                throw error;
            }
        });
    }
    /**
     * service logout user
     * when logout click, system will remove token , and call api to server to remove it.
     */
    logout() {
        // remove user from local storage to log user out
        this._localStorageService.remove(_constants__WEBPACK_IMPORTED_MODULE_5__["USER_INFO"]);
        this._localStorageService.remove(_constants__WEBPACK_IMPORTED_MODULE_5__["ACCESS_TOKEN"]);
        this.sessionInfoSubject.next(null);
    }
    /**
     * function register  account
     * @param user
     */
    fnRegister(user) {
        return this.post('api/users/register', Object.assign(Object.assign({}, user.serialize()), { type: _constants__WEBPACK_IMPORTED_MODULE_5__["USER_CONFIG"].LOGIN_TYPE.NORMAL }));
    }
    /**
     * function update profile
     * @param user
     */
    fnUpdateProfile(data) {
        return this.post('api/users/profile', data);
    }
    get userInfo() {
        return this.sessionInfoSubject.value;
    }
    get accessToken() {
        const sessionInfo = this.sessionInfoSubject.value;
        return sessionInfo.accessToken;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_shared_services_local_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: src_app_shared_services_local_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "n4kJ":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/page-title/page-title.component.ts ***!
  \**********************************************************************/
/*! exports provided: PageTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function() { return PageTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class PageTitleComponent {
}
PageTitleComponent.ɵfac = function PageTitleComponent_Factory(t) { return new (t || PageTitleComponent)(); };
PageTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageTitleComponent, selectors: [["app-page-title"]], inputs: { heading: "heading", subheading: "subheading", icon: "icon" }, decls: 10, vars: 5, consts: [[1, "app-page-title"], [1, "page-title-wrapper"], [1, "page-title-heading"], [1, "page-title-icon"], [1, "page-title-subheading"], [1, "page-title-actions"]], template: function PageTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", ctx.icon, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.heading, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subheading, " ");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-title',
                templateUrl: './page-title.component.html',
            }]
    }], null, { heading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subheading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "nUvU":
/*!**********************************************************!*\
  !*** ./src/app/common/interceptors/error_interceptor.ts ***!
  \**********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/api */ "9Mav");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _services_api_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/api/notify.service */ "XjKp");








class ErrorInterceptor {
    constructor(authService, _translateService, notifyService) {
        this.authService = authService;
        this._translateService = _translateService;
        this.notifyService = notifyService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authService.logout();
                location.reload(true);
            }
            if (err.status === 0) {
                this._translateService.get("GLOBAL.UNKNOWN").toPromise().then((value) => {
                    this.notifyService.error(value);
                });
            }
            const message = lodash__WEBPACK_IMPORTED_MODULE_3__["get"](err, 'error.message');
            if (message)
                this.notifyService.error(message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_api__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_api_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_api__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _services_api_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"] }]; }, null); })();


/***/ }),

/***/ "pcdJ":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/api/http.service.ts ***!
  \*****************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



class HttpService {
    constructor(http) {
        this.http = http;
        this.URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api}`;
    }
    /**
     *
     * @param res
     */
    handleError(res) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(res.error.error || res.error);
    }
    /**
     *
     * @param res
     */
    extractData(res) {
        // let body = res.json();
        return res || {};
    }
    /**
     *
     * @param path
     * @param data
     */
    post(path, data) {
        const url = this.getUrl(path);
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            return this.extractData(res);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            return this.handleError(err);
        }));
    }
    /**
     * extend get http
     * @param url
     * @param data
     * @return {void}
     */
    get(path, data = {}) {
        const url = this.getUrl(path);
        return this.http.get(url, {
            params: Object.assign({}, data)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            return this.extractData(res);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            return this.handleError(err);
        }));
    }
    /**
     *
     * @param path
     */
    getUrl(path) {
        const url = `${this.URL}/${path}`;
        return url;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");




const routes = [
    {
        path: '',
        pathMatch: "full",
        loadChildren: () => __webpack_require__.e(/*! import() | modules-non-security-home-home-module */ "modules-non-security-home-home-module").then(__webpack_require__.bind(null, /*! ./modules/non-security/home/home.module */ "z72V")).then(m => m.HomeModule),
    },
    {
        path: 'users',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-non-security-user-user-module */ "modules-non-security-user-user-module").then(__webpack_require__.bind(null, /*! ./modules/non-security/user/user.module */ "+Tz8")).then(m => m.UserModule),
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-security-authentication-authentication-module */ "modules-security-authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./modules/security/authentication/authentication.module */ "ovJD")).then(m => m.AuthenticationModule),
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vqFO":
/*!********************************************************!*\
  !*** ./src/app/shared/services/local/title.service.ts ***!
  \********************************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");



class TitleService {
    constructor(_title) {
        this._title = _title;
        this.title = "Goonder";
    }
    setTitle(keyword) {
        if (!keyword) {
            this._title.setTitle(this.title);
        }
        else {
            this._title.setTitle(`${this.title} -  ${keyword}`);
        }
        return true;
    }
}
TitleService.ɵfac = function TitleService_Factory(t) { return new (t || TitleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
TitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TitleService, factory: TitleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "vqtw":
/*!********************************************************!*\
  !*** ./src/app/common/interceptors/jwt.interceptor.ts ***!
  \********************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_api_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api/auth.service */ "anFB");
/* harmony import */ var _services_api_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/api/global.service */ "QONO");
/* harmony import */ var _services_api_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/api/notify.service */ "XjKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");








class JwtInterceptor {
    constructor(authService, globalService, notifyService, 
    // private publicKey: string,
    router) {
        this.authService = authService;
        this.globalService = globalService;
        this.notifyService = notifyService;
        this.router = router;
        this.authService.sessionInfo.subscribe(x => this.sessionInfo = x);
        // this.globalService.publicKey.subscribe(x => this.publicKey = x);
    }
    intercept(req, next) {
        const accessToken = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this.sessionInfo, 'accessToken');
        if (accessToken) {
            const { token } = accessToken;
            if (token) {
                const authReq = req.clone({
                    headers: req.headers.set('Authorization', `Bearer ${token}`)
                });
                req = authReq;
            }
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(event => this.handleResponse(req, event), error => this.handleError(req, error)));
    }
    handleResponse(req, event) {
        if ([200, 201, 202, 204].includes(event.status)) {
            const message = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event, 'body.message');
            if (message)
                this.notifyService.error(message);
        }
    }
    handleError(req, event) {
        if (event.status == 401) {
            console.log('unauthorized');
            this.authService.logout();
            this.router.navigate(['/login']);
        }
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_api_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_api_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_shared_services_api_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }, { type: _services_api_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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
//# sourceMappingURL=main-es2015.js.map