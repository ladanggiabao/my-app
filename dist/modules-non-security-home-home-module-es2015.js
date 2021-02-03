(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-non-security-home-home-module"],{

/***/ "r8Bp":
/*!******************************************************************!*\
  !*** ./src/app/modules/non-security/home/home-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "yQDM");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            },
        ]
    },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yQDM":
/*!*************************************************************!*\
  !*** ./src/app/modules/non-security/home/home.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");




const _c0 = ["app-home", ""];
const _c1 = function () { return ["/users/login"]; };
const _c2 = function () { return ["/users/search"]; };
class HomeComponent {
    constructor() { }
    ngOnInit() {
        console.log('==============');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["", "app-home", ""]], attrs: _c0, decls: 22, vars: 13, consts: [["role", "main", 1, "main-content"], ["id", "topFix"], [1, "container-md", "introduce"], ["id", "main-container", 1, "row", "mb-auto"], [1, "col-sm-6", "home-introduce", "my-auto", "py-3"], [1, "px-3", "py-2"], [1, "section-title"], [1, "more-introduce", "mb-3"], ["id", "right-container", 1, "col-sm-6", "d-block", "d-sm-none", "w-75", "m-auto"], ["src", "assets/images/app/home/right-header.svg", 1, "w-100", "d-block", "mx-auto"], [1, "button-redirect", "mt-3", "row"], [1, "col-lg-6", "btn-verify-seller", "text-capitalize", "text-center", "px-2", "py-3", "my-2", "col-12", 3, "routerLink"], [1, "col-lg-6", "btn-check-seller", "text-capitalize", "text-center", "px-2", "py-3", "my-2", "col-12", 3, "routerLink"], ["id", "right-container", 1, "col-sm-6", "d-none", "d-sm-block", "m-auto", "py-3"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "GOONDER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, "GLOBAL.SHORT_INTRODUCE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 7, "HOME.LOGIN_SELLER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 9, "HOME.CHECK_SELLER"), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".main-content[_ngcontent-%COMP%] {\n  height: calc(100vh - 105px - 193px);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem !important;\n}\n\n.introduce[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n.more-description[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: normal;\n  color: #000000;\n}\n\n#right-container[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n\n#right-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.more-introduce[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  white-space: pre-wrap;\n}\n\n@media only screen and (max-width: 767.98px) {\n  .more-introduce[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n\n.spacer[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n}\n\n#topFix[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  height: 1px;\n}\n\n@media only screen and (min-width: 576px) {\n  #topFix[_ngcontent-%COMP%] {\n    padding-top: 80px;\n  }\n}\n\n@media only screen and (min-width: 990px) {\n  #topFix[_ngcontent-%COMP%] {\n    padding-top: 120px;\n  }\n}\n\n.btn-verify-seller[_ngcontent-%COMP%] {\n  background: #8A2387;\n  border-radius: 90px;\n  box-shadow: 5px 6px 6px rgba(0, 0, 0, 0.12);\n  border-color: #FFFFFF;\n  color: #FFFFFF;\n  padding: 0.3rem;\n  border: 0px;\n}\n\n.btn-check-seller[_ngcontent-%COMP%] {\n  background: #F27121;\n  box-shadow: 5px 6px 6px rgba(0, 0, 0, 0.12);\n  border-radius: 90px;\n  border: 0px;\n  color: #FFFFFF;\n  padding: 0.3rem;\n}\n\n.member-total[_ngcontent-%COMP%] {\n  font-size: 72px;\n  background: linear-gradient(270deg, #8A2387 28.33%, #F27121 49.72%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.channel-total[_ngcontent-%COMP%] {\n  background: linear-gradient(270deg, #E94057 11.22%, #C471ED 73.7%);\n  font-size: 72px;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.description-total[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ub24tc2VjdXJpdHkvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksbUNBQUE7QUFGSjs7QUFJQTtFQUNJLDRCQUFBO0FBREo7O0FBR0E7RUFDSSxjQ1JJO0FEUVI7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ1pJO0FEYVI7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFBSTtFQUNJLGdCQUFBO0FBRVI7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFFSTtJQUNJLGlCQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksaUJBQUE7RUFDTjtBQUNGOztBQUNBO0VBQ0k7SUFDSSxrQkFBQTtFQUNOO0FBQ0Y7O0FBR0E7RUFDSSxtQkN0REs7RUR1REwsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHFCQzVESTtFRDZESixjQzdESTtFRDhESixlQUFBO0VBQ0EsV0FBQTtBQURKOztBQUdBO0VBQ0ksbUJDaEVtQjtFRGlFbkIsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQ3RFSTtFRHVFSixlQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUVBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrRUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbm9uLXNlY3VyaXR5L2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zaGFyZWQvdmFyaWFibGVzXCI7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tIE1haW4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4ubWFpbi1jb250ZW50IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwNXB4IC0gMTkzcHgpO1xyXG59XHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmludHJvZHVjZSB7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG59XHJcbi5tb3JlLWRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogJGJsYWNrO1xyXG59XHJcblxyXG4jcmlnaHQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tb3JlLWludHJvZHVjZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcblxyXG4gICAgLm1vcmUtaW50cm9kdWNlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiN0b3BGaXgge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgI3RvcEZpeCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTBweCkge1xyXG4gICAgI3RvcEZpeCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEyMHB4O1xyXG4gICAgfVxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0gQXNzZXRzLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG5cclxuLmJ0bi12ZXJpZnktc2VsbGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRwdXJwbGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGJvcmRlci1jb2xvcjogJHdoaXRlO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG59XHJcbi5idG4tY2hlY2stc2VsbGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWJ1dHRvbi1jb2xvcjtcclxuICAgIGJveC1zaGFkb3c6IDVweCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC4zcmVtO1xyXG59XHJcbi5tZW1iZXItdG90YWwge1xyXG4gICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzhBMjM4NyAyOC4zMyUsICNGMjcxMjEgNDkuNzIlKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5jaGFubmVsLXRvdGFsIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNFOTQwNTcgMTEuMjIlLCAjQzQ3MUVEIDczLjclKTtcclxuICAgIGZvbnQtc2l6ZTogNzJweDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5kZXNjcmlwdGlvbi10b3RhbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufSIsIiRwcmltYXJ5LWNvbG9yOiAjZjU4MjFmO1xyXG4kbWFpbi1jb250YWluZXItY29sb3I6IGxpbmVhci1ncmFkaWVudCg3NS40OGRlZywgcmdiYSgxMzgsIDM1LCAxMzUsIDAuNjY0KSA1LjE0JSwgcmdiYSgyMzMsIDY0LCA4NywgMC41NzYpIDQ5Ljc1JSwgcmdiYSgyNDIsIDExMywgMzMsIDAuNjE2KSAxMDAlKTtcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiRwcmltYXJ5LWJ1dHRvbi1jb2xvcjogI0YyNzEyMTtcclxuJHB1cnBsZTogIzhBMjM4NztcclxuJGJsdWU6ICMwMDdiZmY7XHJcbiRncmV5OiAjNDg0ODQ4O1xyXG4kYWxwaGEtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiRhbHBoYS1ibGFjazogcmdiYSgwLDAsMCwwLjI1KTtcclxuXHJcbi8vIEZvbnRzXHJcbiRib2R5LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4vLyBBcHAgbmFtZSBmb250OiBOb3ZhIEZsYXRcclxuJGFwcC1mb250OiAnTm92YSBGbGF0JywgY3Vyc2l2ZTtcclxuXHJcbi8vIEZvcm0gc3R5bGVzXHJcbiVpbnB1dC1kZWNvciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuMjUpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-home]',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "z72V":
/*!**********************************************************!*\
  !*** ./src/app/modules/non-security/home/home.module.ts ***!
  \**********************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "r8Bp");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "yQDM");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/modules/shared.module */ "UKGz");






class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                    _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-non-security-home-home-module-es2015.js.map