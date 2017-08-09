webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"top__headers\">\n  <c-header-left></c-header-left>\n  <c-header-right></c-header-right>\n</section>\n<div [class.fixed]=\"!isVisible\" class=\"top__foreground\">\n  <c-chandelier></c-chandelier>\n\n</div>\n<!-- <div class=\"bottom__foreground\">\n  <c-ticket></c-ticket>\n</div> -->\n<section [class.fixed]=\"!isVisible\" class=\"content\">\n  <div id=\"\" class=\"content__splash\">\n    <h1 *ngIf=\"isVisible\" class=\"header\">\n      You're Invited\n    </h1>\n    <!--  -->\n    <img src=\"assets/svgs/willandpatrick.svg\" alt=\"\">\n  </div>\n  <ng-template [ngIf]=\"isVisible\">\n    <div id=\"navigation\" class=\"content__nav\">\n      <nav *ngIf=\"isVisible\" class=\"header_links\">\n        <a (click)=\"goToSection('information')\">Information</a>\n        <a (click)=\"goToSection('rsvp')\">Rsvp</a>\n        <a (click)=\"goToSection('faq')\">Faq</a>\n        <a (click)=\"goToSection('accomodation')\">Accomodation</a>\n        <a (click)=\"goToSection('travel')\">Travel</a>\n        \n      </nav>\n    </div>\n    <wedding-info id=\"information\"></wedding-info>\n    <router-outlet></router-outlet>\n    <wedding-faq id=\"faq\"></wedding-faq>\n    <wedding-accomodation id=\"accomodation\"></wedding-accomodation>\n    <wedding-travel id=\"travel\"></wedding-travel>\n\n\n  </ng-template>\n</section>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  padding-top: 50vh;\n  position: relative;\n  float: left;\n  width: 100vw;\n  z-index: 99999999; }\n  .content.fixed {\n    height: 100vh;\n    overflow: hidden; }\n  .content__splash {\n    height: 50vh;\n    position: relative;\n    float: left;\n    width: 100vw;\n    overflow: hidden;\n    z-index: 99999999;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .content__splash img {\n      margin-top: 15vh;\n      height: 75vh;\n      position: absolute;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n    .content__splash .header {\n      font-family: 'mrs-eaves'; }\n  .content__nav {\n    min-height: 100px;\n    background-color: white;\n    width: 100vw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    @media screen and (min-width: 320px) {\n      .content__nav nav {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 1.5rem 0;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: column nowrap;\n                flex-flow: column nowrap; }\n      .content__nav a {\n        width: 100%;\n        text-align: center;\n        margin-bottom: 0.75rem; }\n        .content__nav a:after {\n          content: ''; } }\n    @media screen and (min-width: 768px) {\n      .content__nav nav {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: row nowrap;\n                flex-flow: row nowrap; }\n      .content__nav a {\n        text-align: left; }\n        .content__nav a:after {\n          content: '-'; } }\n    .content__nav nav {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto; }\n      .content__nav nav a {\n        font-family: 'mrs-eaves';\n        font-size: 1.33333333rem;\n        line-height: 1.125;\n        text-decoration: none;\n        color: #3e3e3e;\n        margin-right: 2rem; }\n        .content__nav nav a:hover {\n          cursor: pointer;\n          text-decoration: underline; }\n        .content__nav nav a:after {\n          position: absolute;\n          margin-left: 0.75rem;\n          -webkit-transform: translateX(-0.1rem);\n                  transform: translateX(-0.1rem); }\n        .content__nav nav a:last-child:after {\n          content: ''; }\n  .content__accomodation {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    background-color: white;\n    height: 100vh;\n    height: 40vh;\n    padding: 0 35px; }\n    .content__accomodation img {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      height: 100%; }\n    .content__accomodation section {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto; }\n\n.top__headers {\n  float: left;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed; }\n\n.top__foreground {\n  width: 100vw;\n  z-index: 0; }\n  .top__foreground.fixed {\n    height: 100vh;\n    width: 100vw;\n    position: fixed;\n    top: 0;\n    overflow: hidden; }\n\nc-header-left,\nc-header-right {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 50%;\n          flex: 1 1 50%;\n  float: left;\n  position: relative;\n  width: 50%;\n  height: 100vh;\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shapes_mo_js_init__ = __webpack_require__("../../../../../src/app/shapes/mo-js.init.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zenscroll__ = __webpack_require__("../../../../zenscroll/zenscroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zenscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zenscroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils_ie__ = __webpack_require__("../../../../../src/app/core/utils/ie.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(mojo) {
        var _this = this;
        this.title = 'app works!';
        this.isVisible = false;
        mojo.init();
        if (__WEBPACK_IMPORTED_MODULE_3__core_utils_ie__["a" /* IEUTILS */].detectIE() || __WEBPACK_IMPORTED_MODULE_3__core_utils_ie__["a" /* IEUTILS */].detectFirefox()) {
            this.zen = __WEBPACK_IMPORTED_MODULE_2_zenscroll__["createScroller"](document.querySelector('html'), 750, 0);
        }
        else {
            this.zen = __WEBPACK_IMPORTED_MODULE_2_zenscroll__["createScroller"](document.body, 750, 0);
        }
        // 11000
        setTimeout(function () {
            _this.isVisible = true;
            setTimeout(function () {
                _this.zen.toY(100);
            }, 350);
        }, 10500);
    }
    AppComponent.prototype.goToSection = function ($event) {
        var el = document.getElementById($event);
        this.zen.intoView(el);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shapes_mo_js_init__["a" /* MojsInit */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shapes_mo_js_init__["a" /* MojsInit */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shapes_mo_js_init__ = __webpack_require__("../../../../../src/app/shapes/mo-js.init.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_left_header_left_component__ = __webpack_require__("../../../../../src/app/components/header-left/header-left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_right_header_right_component__ = __webpack_require__("../../../../../src/app/components/header-right/header-right.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_chandelier_chandelier_component__ = __webpack_require__("../../../../../src/app/components/chandelier/chandelier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ticket_ticket_component__ = __webpack_require__("../../../../../src/app/components/ticket/ticket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pages_pages_module__ = __webpack_require__("../../../../../src/app/pages/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_header_left_header_left_component__["a" /* HeaderLeftComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_header_right_header_right_component__["a" /* HeaderRightComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_chandelier_chandelier_component__["a" /* ChandelierComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_ticket_ticket_component__["a" /* TicketComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_10__pages_pages_pages_module__["a" /* PagesModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__shapes_mo_js_init__["a" /* MojsInit */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages_rsvp_default_rsvp_default_component__ = __webpack_require__("../../../../../src/app/pages/pages/rsvp-default/rsvp-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pages_rsvp_afters_rsvp_afters_component__ = __webpack_require__("../../../../../src/app/pages/pages/rsvp-afters/rsvp-afters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pages_rvsp_plusone_rvsp_plusone_component__ = __webpack_require__("../../../../../src/app/pages/pages/rvsp-plusone/rvsp-plusone.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var APP_ROUTES = [
    {
        path: 'invite',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_pages_rsvp_default_rsvp_default_component__["a" /* RsvpDefaultComponent */],
    },
    {
        path: 'rsvp',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_pages_rsvp_afters_rsvp_afters_component__["a" /* RsvpAftersComponent */],
    },
    {
        path: 'invitation',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_pages_rvsp_plusone_rvsp_plusone_component__["a" /* RvspPlusoneComponent */],
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__pages_pages_rsvp_afters_rsvp_afters_component__["a" /* RsvpAftersComponent */] }
];
// export const routing: any = RouterModule.forRoot(APP_ROUTES);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES, { enableTracing: false })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/chandelier/chandelier.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"shape_container\"></div>\n<div class=\"header_container\"></div>\n<div class=\"mask_container\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/chandelier/chandelier.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host,\nc-chandelier {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1); }\n  @media screen and (min-width: 320px) {\n    :host.is-done,\n    c-chandelier.is-done {\n      -webkit-transform: translateY(-145px);\n              transform: translateY(-145px); } }\n  @media screen and (min-width: 768px) {\n    :host.is-done,\n    c-chandelier.is-done {\n      -webkit-transform: translateY(-230px);\n              transform: translateY(-230px); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chandelier/chandelier.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChandelierComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shapes_chandelier_shape__ = __webpack_require__("../../../../../src/app/shapes/chandelier-shape.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shapes_header_shape__ = __webpack_require__("../../../../../src/app/shapes/header-shape.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChandelierComponent = (function () {
    function ChandelierComponent(el) {
        this.el = el;
        this.element = el.nativeElement;
    }
    ChandelierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.header = new __WEBPACK_IMPORTED_MODULE_2__shapes_header_shape__["a" /* Header */](this.el.nativeElement.querySelector('.header_container'));
        this.chandelier = new __WEBPACK_IMPORTED_MODULE_1__shapes_chandelier_shape__["a" /* Chandelier */](this.el.nativeElement.querySelector('.shape_container'));
        setTimeout(function () {
            _this.element.classList.add('is-done');
        }, 10000);
        // this.mask = new Mask(this.el.nativeElement.querySelector('.mask_container'));
        // this.topHat = new TopHat(this.el.nativeElement.querySelector('.mask_container'));
    };
    return ChandelierComponent;
}());
ChandelierComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'c-chandelier',
        template: __webpack_require__("../../../../../src/app/components/chandelier/chandelier.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chandelier/chandelier.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], ChandelierComponent);

var _a;
//# sourceMappingURL=chandelier.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header-left/header-left.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"shape_container\"></div>\n<div class=\"sub_shape_container\"></div>\n<div class=\"notes_container\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/header-left/header-left.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host,\nc-header-left {\n  margin-left: 25px; }\n  :host .shape_container,\n  c-header-left .shape_container {\n    position: absolute;\n    left: 0; }\n\n@media (max-width: 499px) {\n  :host,\n  c-header-left {\n    opacity: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header-left/header-left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderLeftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shapes_border_left_shape__ = __webpack_require__("../../../../../src/app/shapes/border-left-shape.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shapes_border_top_left_shape__ = __webpack_require__("../../../../../src/app/shapes/border-top--left-shape.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shapes_note_shapes__ = __webpack_require__("../../../../../src/app/shapes/note-shapes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderLeftComponent = (function () {
    function HeaderLeftComponent(el) {
        this.el = el;
    }
    HeaderLeftComponent.prototype.ngOnInit = function () {
        this.headerLeftItem = new __WEBPACK_IMPORTED_MODULE_1__shapes_border_left_shape__["a" /* HeaderItemLeft */](this.el.nativeElement.querySelector('.shape_container'));
        this.headerItemTopLeft = new __WEBPACK_IMPORTED_MODULE_2__shapes_border_top_left_shape__["a" /* HeaderItemTopLeft */](this.el.nativeElement.querySelector('.sub_shape_container'));
        this.musicNotes = new __WEBPACK_IMPORTED_MODULE_3__shapes_note_shapes__["a" /* MusicNotes */](this.el.nativeElement.querySelector('.notes_container'));
    };
    return HeaderLeftComponent;
}());
HeaderLeftComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'c-header-left',
        template: __webpack_require__("../../../../../src/app/components/header-left/header-left.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header-left/header-left.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], HeaderLeftComponent);

var _a;
//# sourceMappingURL=header-left.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header-right/header-right.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"shape_container\"></div>\n<div class=\"sub_shape_container\"></div>\n<div class=\"notes_container\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/header-right/header-right.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host,\nc-header-right {\n  margin-right: 25px; }\n  :host .shape_container,\n  c-header-right .shape_container {\n    position: absolute;\n    right: 0; }\n  :host .sub_shape_container,\n  c-header-right .sub_shape_container {\n    position: absolute;\n    right: 0;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n  :host .notes_container,\n  c-header-right .notes_container {\n    position: absolute;\n    right: 480px; }\n\n@media (max-width: 499px) {\n  :host,\n  c-header-right {\n    opacity: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header-right/header-right.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderRightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shapes_border_right_shape__ = __webpack_require__("../../../../../src/app/shapes/border-right-shape.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shapes_border_top_left_shape__ = __webpack_require__("../../../../../src/app/shapes/border-top--left-shape.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shapes_note_shapes__ = __webpack_require__("../../../../../src/app/shapes/note-shapes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderRightComponent = (function () {
    function HeaderRightComponent(el) {
        this.el = el;
    }
    HeaderRightComponent.prototype.ngOnInit = function () {
        this.headerRightItem = new __WEBPACK_IMPORTED_MODULE_1__shapes_border_right_shape__["a" /* HeaderItemRight */](this.el.nativeElement.querySelector('.shape_container'));
        this.headerItemTopLeft = new __WEBPACK_IMPORTED_MODULE_2__shapes_border_top_left_shape__["a" /* HeaderItemTopLeft */](this.el.nativeElement.querySelector('.sub_shape_container'));
        this.musicNotes = new __WEBPACK_IMPORTED_MODULE_3__shapes_note_shapes__["a" /* MusicNotes */](this.el.nativeElement.querySelector('.notes_container'));
    };
    return HeaderRightComponent;
}());
HeaderRightComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'c-header-right',
        template: __webpack_require__("../../../../../src/app/components/header-right/header-right.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header-right/header-right.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], HeaderRightComponent);

var _a;
//# sourceMappingURL=header-right.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/ticket/ticket.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"openTicket()\" class=\"ticket_container\">\n    <div class=\"ticketVertical\"></div>\n    <div class=\"ticketHorizontal\">\n        <div class=\"form\">\n            <!-- Begin MailChimp Signup Form -->\n            <!-- Begin MailChimp Signup Form -->\n            <div id=\"mc_embed_signup\">\n                <form (ngSubmit)=\"onSubmit(mailChimpForm)\" #mailChimpForm=\"ngForm\"  id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" autocomplete=\"off\" novalidate>\n                    <div id=\"mc_embed_signup_scroll\">\n                        <div class=\"group\">\n                            <div [class.complete]=\"isValidSubmit\" class=\"mc-field-group\">\n                                <input required type=\"text\" value=\"\" [(ngModel)]=\"model.FNAME\" name=\"name\" name=\"FNAME\" class=\"\" id=\"mce-FNAME\" placeholder=\"First Name\">\n                            </div>\n                            <div [class.complete]=\"isValidSubmit\" class=\"mc-field-group\">\n                                <input required type=\"text\" value=\"\" [(ngModel)]=\"model.LNAME\" name=\"LNAME\" class=\"\" id=\"mce-LNAME\"  placeholder=\"Surname\">\n                            </div>\n                            <div [class.complete]=\"isValidSubmit\" class=\"mc-field-group\">\n                                <input required type=\"email\" value=\"\" [(ngModel)]=\"model.EMAIL\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\" placeholder=\"Email\">\n                            </div>\n                            <div [class.complete]=\"isValidSubmit\" class=\"mc-field-group\">\n                                <input required type=\"text\" value=\"\"[(ngModel)]=\"model.ADDRESS\" name=\"ADDRESS\" class=\"required\" id=\"mce-ADDRESS\" placeholder=\"Address\">\n                            </div>\n                            <div [class.complete]=\"isValidSubmit\" class=\"mc-field-group\">\n                                <input required type=\"text\" value=\"\" [(ngModel)]=\"model.TOWN\" name=\"TOWN\" class=\"required\" id=\"mce-TOWN\" placeholder=\"Town/County\">\n                            </div>\n                            <div id=\"mce-responses\" class=\"clear\">\n                                <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n                                <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n                            </div>\n                            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n                            <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\" name=\"b_9c094231e20a57997f234dd79_8c27d4ca67\" tabindex=\"-1\" value=\"\"></div>\n                            <p [class.complete]=\"isValidSubmit\" class=\"response\">Check your email to confirm!</p>\n                        </div>\n                        <div class=\"clear\">\n                            <input [disabled]=\"!mailChimpForm.form.valid || isSubmitted\" type=\"submit\" [value]=\"defaultValue\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\">\n                        </div>\n                    </div>\n                </form>\n            </div>\n\n            <!--End mc_embed_signup-->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/ticket/ticket.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#mc_embed_signup_scroll {\n  position: relative;\n  overflow: hidden; }\n  #mc_embed_signup_scroll .mc-field-group {\n    float: left;\n    width: 100%;\n    transition: 0.3s all ease; }\n    #mc_embed_signup_scroll .mc-field-group.complete {\n      -webkit-transform: translateY(-200px);\n              transform: translateY(-200px); }\n  #mc_embed_signup_scroll .group {\n    height: 185px;\n    overflow: hidden; }\n  #mc_embed_signup_scroll p.response {\n    transition: 0.3s all ease 0.3s;\n    margin-top: 40px;\n    float: left;\n    width: 100%; }\n  #mc_embed_signup_scroll p.response.complete {\n    color: white;\n    float: left;\n    width: 100%;\n    -webkit-transform: translateY(-140px);\n            transform: translateY(-140px); }\n\n.ticket_container .ticketVertical {\n  transition: .3s all; }\n  .ticket_container .ticketVertical:hover {\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px); }\n\n@media (max-width: 499px) {\n  c-ticket {\n    position: absolute;\n    left: 0;\n    overflow: none;\n    width: 100%;\n    /* float: left; */\n    height: 100vh; }\n    c-ticket.open {\n      overflow: scroll; }\n  .ticket_container {\n    position: relative;\n    float: left;\n    width: 100%;\n    height: 100%;\n    margin-bottom: 100px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/ticket/ticket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MailchimpModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shapes_ticket_shape__ = __webpack_require__("../../../../../src/app/shapes/ticket-shape.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// action="//wilandpatrickwedding.us14.list-manage.com/subscribe/post?u=9c094231e20a57997f234dd79&amp;id=8c27d4ca67"
var MailchimpModel = (function () {
    function MailchimpModel(FNAME, LNAME, EMAIL, ADDRESS, TOWN) {
    }
    return MailchimpModel;
}());

var TicketComponent = (function () {
    function TicketComponent(http, el) {
        this.http = http;
        this.el = el;
        this.mailChimpUrl = 'http://wilandpatrickwedding.us14.list-manage.com/subscribe/post-json';
        this.ticketIsOpen = false;
        this.model = new MailchimpModel('', '', '', '', '');
        this.isSubmitted = false;
        this.isValidSubmit = false;
        this.isInvalidSubmit = false;
        this.defaultValue = "Save";
    }
    TicketComponent.prototype.ngOnInit = function () {
        this.ticket = new __WEBPACK_IMPORTED_MODULE_1__shapes_ticket_shape__["a" /* Ticket */](this.el.nativeElement.querySelector('.ticketVertical'), this.el.nativeElement.querySelector('.ticketHorizontal'));
    };
    TicketComponent.prototype.openTicket = function () {
        if (this.ticketIsOpen) {
            return;
        }
        this.ticket.open();
        this.ticketIsOpen = true;
    };
    TicketComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var formData = form.form.value;
        formData.u = '9c094231e20a57997f234dd79';
        formData.id = '8c27d4ca67';
        formData.subscribe = 'Subscribe';
        this.isSubmitted = true;
        this.isInvalidSubmit = false;
        this.isValidSubmit = false;
        var url = this.mailChimpUrl + this.jsonToQueryString(formData) + '&c=JSONP_CALLBACK';
        this.http.get(url).subscribe(function (next) {
            var res = next.json();
            if (res.result === 'error') {
                _this.isInvalidSubmit = true;
                _this.isSubmitted = false;
                _this.defaultValue = 'Try Again.';
            }
            else {
                _this.defaultValue = 'Thanks!';
                _this.isValidSubmit = true;
            }
        }, function (err) { console.log(err); });
    };
    TicketComponent.prototype.jsonToQueryString = function (json) {
        return '?' +
            Object.keys(json).map(function (key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(json[key]);
            }).join('&');
    };
    return TicketComponent;
}());
TicketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'c-ticket',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/components/ticket/ticket.component.html"),
        host: {
            '[class.open]': 'ticketIsOpen',
        },
        styles: [__webpack_require__("../../../../../src/app/components/ticket/ticket.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Jsonp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], TicketComponent);

var _a, _b;
//# sourceMappingURL=ticket.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/animations/stroke-dasharray.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrokeDashArray; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mo_js__ = __webpack_require__("../../../../mo-js/build/mo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mo_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mo_js__);


var StrokeDashArray = (function () {
    function StrokeDashArray(path, begin, end, circular) {
        this.animationTimer = null;
        this.timer = null;
        this.path = this.createSvg(path);
        this.length = this.path.getTotalLength();
        this.path.style.stroke = '#333232';
        this.path.style.strokeDashoffset = this.length * 2;
        this.begin = typeof begin !== 'undefined' ? this.valueOf(begin) : 0;
        this.end = typeof end !== 'undefined' ? this.valueOf(end) : this.length;
        this.circular = typeof circular !== 'undefined' ? circular : false;
        this.draw(this.begin, this.end, 0, { circular: this.circular });
    }
    StrokeDashArray.prototype.createSvg = function (path) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        svg.setAttributeNS(null, 'd', path);
        return svg;
    };
    StrokeDashArray.prototype.createTestShape = function (element, shape) {
        var s = new __WEBPACK_IMPORTED_MODULE_1_mo_js__["Shape"]({
            shape: shape,
            className: 'testObject',
            isShowStart: true,
            parent: element,
            fill: 'transparent',
            stroke: '#333232',
            duration: 1500,
            radius: 16,
            scale: 1
        });
        return element.querySelector('.testObject path');
    };
    StrokeDashArray.prototype.initDraw = function () {
        this.draw(this.begin, this.end, 0, { circular: this.circular });
    };
    StrokeDashArray.prototype.draw = function (begin, end, duration, options) {
        this.circular =
            options && options.hasOwnProperty('circular')
                ? options.circular
                : false;
        if (duration) {
            var delay = options && options.hasOwnProperty('delay')
                ? parseFloat(options.delay) * 1000
                : 0, easing_1 = options && options.hasOwnProperty('easing')
                ? options.easing
                : null, callback_1 = options && options.hasOwnProperty('callback')
                ? options.callback
                : null, that_1 = this;
            this.stop();
            if (delay) {
                delete options.delay;
                this.timer = setTimeout(function () {
                    that_1.draw(begin, end, duration, options);
                }, delay);
                return this.timer;
            }
            var startTime_1 = new Date(), initBegin_1 = this.begin, initEnd_1 = this.end, finalBegin_1 = this.valueOf(begin), finalEnd_1 = this.valueOf(end);
            (function calc() {
                var now = new Date(), elapsed = (now - startTime_1) / 1000, time = elapsed / parseFloat(duration);
                var t = time;
                if (typeof easing_1 === 'function') {
                    t = easing_1(t);
                }
                if (time > 1) {
                    t = 1;
                }
                else {
                    that_1.animationTimer = window.requestAnimationFrame(calc);
                }
                that_1.begin = initBegin_1 + (finalBegin_1 - initBegin_1) * t;
                that_1.end = initEnd_1 + (finalEnd_1 - initEnd_1) * t;
                that_1.begin = that_1.begin < 0 && !that_1.circular ? 0 : that_1.begin;
                that_1.begin =
                    that_1.begin > that_1.length && !that_1.circular
                        ? that_1.length
                        : that_1.begin;
                that_1.end = that_1.end < 0 && !that_1.circular ? 0 : that_1.end;
                that_1.end =
                    that_1.end > that_1.length && !that_1.circular
                        ? that_1.length
                        : that_1.end;
                if (that_1.end - that_1.begin <= that_1.length &&
                    that_1.end - that_1.begin > 0) {
                    that_1.draw(that_1.begin, that_1.end, 0, {
                        circular: that_1.circular
                    });
                }
                else {
                    if (that_1.circular && that_1.end - that_1.begin > that_1.length) {
                        that_1.draw(0, that_1.length, 0, {
                            circular: that_1.circular
                        });
                    }
                    else {
                        that_1.draw(that_1.begin + (that_1.end - that_1.begin), that_1.end - (that_1.end - that_1.begin), 0, { circular: that_1.circular });
                    }
                }
                if (time > 1 && typeof callback_1 === 'function') {
                    return callback_1.call(that_1);
                }
            })();
        }
        else {
            this.path.style.strokeDasharray = this.strokeDasharray(begin, end).join();
        }
    };
    StrokeDashArray.prototype.setPosition = function (begin, end, t) {
        var that = this;
        var startTime = new Date(), initBegin = this.begin, initEnd = this.end, finalBegin = this.valueOf(begin), finalEnd = this.valueOf(end);
        begin = initBegin + (finalBegin - initBegin) * t;
        end = initEnd + (finalEnd - initEnd) * t;
        this.path.style.strokeDasharray = this.strokeDasharray(begin, end).join();
    };
    StrokeDashArray.prototype.getPosition = function (begin, end, t) {
        var that = this;
        var startTime = new Date(), initBegin = this.begin, initEnd = this.end, finalBegin = this.valueOf(begin), finalEnd = this.valueOf(end);
        begin = initBegin + (finalBegin - initBegin) * t;
        end = initEnd + (finalEnd - initEnd) * t;
        return __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](this.strokeDasharray(begin, end), function (e) {
            return e;
        }).join(' ');
    };
    StrokeDashArray.prototype.percent = function (value) {
        return parseFloat(value) / 100 * this.length;
    };
    StrokeDashArray.prototype.valueOf = function (input) {
        var val = parseFloat(input);
        if (typeof input === 'string' || input instanceof String) {
            if (~input.indexOf('%')) {
                var arr = void 0;
                if (~input.indexOf('+')) {
                    arr = input.split('+');
                    val = this.percent(arr[0]) + parseFloat(arr[1]);
                }
                else if (~input.indexOf('-')) {
                    arr = input.split('-');
                    if (arr.length === 3) {
                        val = -this.percent(arr[1]) - parseFloat(arr[2]);
                    }
                    else {
                        val = arr[0]
                            ? this.percent(arr[0]) - parseFloat(arr[1])
                            : -this.percent(arr[1]);
                    }
                }
                else {
                    val = this.percent(input);
                }
            }
        }
        return val;
    };
    StrokeDashArray.prototype.strokeDasharray = function (begin, end) {
        this.begin = this.valueOf(begin);
        this.end = this.valueOf(end);
        if (this.circular) {
            var s = this.begin / parseInt(this.length, 10);
            var e = this.end / parseInt(this.length, 10);
            var division = this.begin > this.end ||
                (this.begin < 0 && this.begin < this.length * -1)
                ? parseInt(e, 10)
                : parseInt(s, 10);
            if (division !== 0) {
                this.begin = this.begin - this.length * division;
                this.end = this.end - this.length * division;
            }
        }
        if (this.end > this.length) {
            var plus = this.end - this.length;
            return [
                this.length,
                this.length,
                plus,
                this.begin - plus,
                this.end - this.begin
            ];
        }
        if (this.begin < 0) {
            var minus = this.length + this.begin;
            if (this.end < 0) {
                return [
                    this.length,
                    this.length + this.begin,
                    this.end - this.begin,
                    minus - this.end,
                    this.end - this.begin,
                    this.length
                ];
            }
            else {
                return [
                    this.length,
                    this.length + this.begin,
                    this.end - this.begin,
                    minus - this.end,
                    this.length
                ];
            }
        }
        return [this.length, this.length + this.begin, this.end - this.begin];
    };
    StrokeDashArray.prototype.stop = function () {
        window.cancelAnimationFrame(this.animationTimer);
        this.animationTimer = null;
        clearTimeout(this.timer);
        this.timer = null;
    };
    return StrokeDashArray;
}());

//# sourceMappingURL=stroke-dasharray.js.map

/***/ }),

/***/ "../../../../../src/app/core/consts/timings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BORDER_TIME_DELAY; });
var BORDER_TIME_DELAY = 8000;
//# sourceMappingURL=timings.js.map

/***/ }),

/***/ "../../../../../src/app/core/utils/ie.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IEUTILS; });
var IEUTILS = (function () {
    function IEUTILS() {
    }
    IEUTILS.detectIE = function () {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        // other browser
        return false;
    };
    IEUTILS.detectFirefox = function () {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    };
    return IEUTILS;
}());

//# sourceMappingURL=ie.js.map

/***/ }),

/***/ "../../../../../src/app/core/utils/measure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOP_BORDER_RIGHT_LEFT_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOP_BORDER_RIGHT_LEFT_2; });
/* unused harmony export TOP_BORDER_RIGHT_LEFT_3 */
var TOP_BORDER_RIGHT_LEFT_1 = 0;
var TOP_BORDER_RIGHT_LEFT_2 = 25;
var TOP_BORDER_RIGHT_LEFT_3 = 40;
//# sourceMappingURL=measure.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wedding_info_wedding_info_component__ = __webpack_require__("../../../../../src/app/pages/pages/wedding-info/wedding-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wedding_accomodation_wedding_accomodation_component__ = __webpack_require__("../../../../../src/app/pages/pages/wedding-accomodation/wedding-accomodation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wedding_travel_wedding_travel_component__ = __webpack_require__("../../../../../src/app/pages/pages/wedding-travel/wedding-travel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rsvp_default_rsvp_default_component__ = __webpack_require__("../../../../../src/app/pages/pages/rsvp-default/rsvp-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wedding_faq_wedding_faq_component__ = __webpack_require__("../../../../../src/app/pages/pages/wedding-faq/wedding-faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rsvp_afters_rsvp_afters_component__ = __webpack_require__("../../../../../src/app/pages/pages/rsvp-afters/rsvp-afters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rvsp_plusone_rvsp_plusone_component__ = __webpack_require__("../../../../../src/app/pages/pages/rvsp-plusone/rvsp-plusone.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__wedding_info_wedding_info_component__["a" /* WeddingInfoComponent */], __WEBPACK_IMPORTED_MODULE_3__wedding_accomodation_wedding_accomodation_component__["a" /* WeddingAccomodationComponent */], __WEBPACK_IMPORTED_MODULE_4__wedding_travel_wedding_travel_component__["a" /* WeddingTravelComponent */], __WEBPACK_IMPORTED_MODULE_5__rsvp_default_rsvp_default_component__["a" /* RsvpDefaultComponent */], __WEBPACK_IMPORTED_MODULE_7__wedding_faq_wedding_faq_component__["a" /* WeddingFaqComponent */], __WEBPACK_IMPORTED_MODULE_8__rsvp_afters_rsvp_afters_component__["a" /* RsvpAftersComponent */], __WEBPACK_IMPORTED_MODULE_9__rvsp_plusone_rvsp_plusone_component__["a" /* RvspPlusoneComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__wedding_info_wedding_info_component__["a" /* WeddingInfoComponent */], __WEBPACK_IMPORTED_MODULE_3__wedding_accomodation_wedding_accomodation_component__["a" /* WeddingAccomodationComponent */], __WEBPACK_IMPORTED_MODULE_4__wedding_travel_wedding_travel_component__["a" /* WeddingTravelComponent */], __WEBPACK_IMPORTED_MODULE_5__rsvp_default_rsvp_default_component__["a" /* RsvpDefaultComponent */], __WEBPACK_IMPORTED_MODULE_7__wedding_faq_wedding_faq_component__["a" /* WeddingFaqComponent */]]
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages/rsvp-afters/rsvp-afters.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n\n<h2>RSVP</h2>\n<div class=\"spacer\"></div>\n\n<form (ngSubmit)=\"onSubmit(mailChimpForm)\" #mailChimpForm=\"ngForm\"  method=\"post\"\n  id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\n  <div class=\"mc-form\">\n    <div class=\"mc-field-group\">\n      <label for=\"mce-EMAIL\">Email Address</label>\n      <input required [(ngModel)]=\"model.EMAIL\"  type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\">\n    </div>\n    <div class=\"mc-field-group\">\n      <label for=\"mce-FNAME\">First Name </label>\n      <input required [(ngModel)]=\"model.FNAME\" type=\"text\" value=\"\" name=\"FNAME\" class=\"\" id=\"mce-FNAME\">\n    </div>\n    <div class=\"mc-field-group\">\n      <label for=\"mce-LNAME\">Last Name </label>\n      <input required [(ngModel)]=\"model.LNAME\" type=\"text\" value=\"\" name=\"LNAME\" class=\"\" id=\"mce-LNAME\">\n    </div>\n    <div class=\"mc-field-group size1of2\">\n      <label for=\"mce-PHONE\">Phone Number </label>\n      <input [(ngModel)]=\"model.PHONE\" type=\"text\" name=\"PHONE\" class=\"\" value=\"\" id=\"mce-PHONE\">\n    </div>\n    <div id=\"mce-responses\" class=\"clear\">\n      <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n      <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n    </div>\n    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n    <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\" name=\"b_9c094231e20a57997f234dd79_c5f84c57bc\" tabindex=\"-1\" value=\"\"></div>\n    <div class=\"clear\">\n      <input *ngIf=\"!isComplete\" [disabled]=\"!mailChimpForm.form.valid || isLoading\" type=\"submit\" value=\"Confirm\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n      <p *ngIf=\"isComplete\">Thank you!</p>\n  </div>\n</form>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/pages/rsvp-afters/rsvp-afters.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  position: relative;\n  background-color: #f6f6f6;\n  width: 100vw;\n  padding: 0 35px;\n  overflow: hidden;\n  height: 100%;\n  float: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 95px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  @media screen and (min-width: 320px) {\n    :host {\n      padding: 0; }\n      :host .mc-form {\n        width: 100%; } }\n  @media screen and (min-width: 768px) {\n    :host {\n      padding: 0 35px; }\n      :host .mc-form {\n        width: 600px; } }\n  :host > section {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 100%;\n    padding: 6rem 65px 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 6rem; }\n    :host > section > h2 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      color: #3e3e3e;\n      text-align: center;\n      max-width: 70%;\n      font-family: 'mrs-eaves';\n      max-width: 60%;\n      margin-bottom: 3rem; }\n  :host .spacer {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100px;\n    height: 5px;\n    background-color: #3e3e3e;\n    margin-bottom: 3rem; }\n  :host form {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    max-width: 80%; }\n  :host .mc-form {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto; }\n  :host .mc-field-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    margin-bottom: 0.5rem; }\n    :host .mc-field-group label {\n      margin-bottom: 0.5rem; }\n    :host .mc-field-group input {\n      width: 100%;\n      padding: 0.75rem;\n      font-size: 1.33333333rem;\n      line-height: 1.125;\n      border: 1px solid rgba(0, 0, 0, 0.1);\n      margin-bottom: 0.75rem;\n      font-weight: 200;\n      font-family: Avenir, \"Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif; }\n      :host .mc-field-group input.ng-touched.ng-invalid {\n        border-color: #ffc1c1; }\n      :host .mc-field-group input:-webkit-autofill, :host .mc-field-group input:-webkit-autofill:hover, :host .mc-field-group input:-webkit-autofill:focus, :host .mc-field-group input.ng-touched.ng-valid {\n        border: 1px solid #b3c6d3;\n        -webkit-text-fill-color: #3e3e3e;\n        -webkit-box-shadow: 0 0 0px 1000px white inset;\n        transition: background-color 5000s ease-in-out 0s; }\n    :host .mc-field-group select {\n      height: 47px;\n      font-size: 1.33333333rem;\n      line-height: 1.125;\n      font-weight: 200;\n      font-family: Avenir, \"Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n      background-color: white;\n      margin-bottom: 0.75rem;\n      border: none;\n      border-radius: 0; }\n      :host .mc-field-group select:-webkit-autofill, :host .mc-field-group select:-webkit-autofill:hover, :host .mc-field-group select:-webkit-autofill:focus {\n        -webkit-text-fill-color: #3e3e3e;\n        -webkit-box-shadow: 0 0 0px 1000px white inset;\n        transition: background-color 5000s ease-in-out 0s; }\n  :host .mc-embedded-subscribe {\n    width: 100%; }\n  :host .mc-address-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap; }\n    :host .mc-address-group .mc-field-group {\n      width: 100%; }\n    :host .mc-address-group .size1of2 {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 50%;\n              flex: 1 1 50%;\n      padding-right: 0.75rem;\n      width: 50%; }\n      :host .mc-address-group .size1of2:nth-of-type(2n) {\n        padding-right: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pages/rsvp-afters/rsvp-afters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RSVPModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RsvpAftersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RSVPModel = (function () {
    function RSVPModel(EMAIL, FNAME, LNAME, PHONE) {
        if (EMAIL === void 0) { EMAIL = ''; }
        if (FNAME === void 0) { FNAME = ''; }
        if (LNAME === void 0) { LNAME = ''; }
        if (PHONE === void 0) { PHONE = ''; }
        this.EMAIL = EMAIL;
        this.FNAME = FNAME;
        this.LNAME = LNAME;
        this.PHONE = PHONE;
        this.mailChimpUrl = 'http://wilandpatrickwedding.us14.list-manage.com/subscribe/post-json';
    }
    return RSVPModel;
}());

var RsvpAftersComponent = (function () {
    function RsvpAftersComponent(http) {
        this.http = http;
        this.mailChimpUrl = 'http://wilandpatrickwedding.us14.list-manage.com/subscribe/post-json';
        this.model = new RSVPModel();
        this.id = 'rsvp';
        this.isComplete = false;
        this.isLoading = false;
    }
    RsvpAftersComponent.prototype.ngOnInit = function () { };
    RsvpAftersComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var formData = form.form.value;
        formData['ADDRESS[zip]'] = '00000';
        formData.u = '9c094231e20a57997f234dd79';
        formData.id = 'c20fcf1fe2';
        formData.subscribe = 'Subscribe';
        var url = this.mailChimpUrl +
            this.jsonToQueryString(formData) +
            '&c=JSONP_CALLBACK';
        this.isLoading = true;
        this.http.get(url).subscribe(function (next) {
            var res = next.json();
            _this.isComplete = true;
        });
    };
    RsvpAftersComponent.prototype.jsonToQueryString = function (json) {
        return ('?' +
            Object.keys(json)
                .map(function (key) {
                return (encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(json[key]));
            })
                .join('&'));
    };
    return RsvpAftersComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('attr.id'),
    __metadata("design:type", Object)
], RsvpAftersComponent.prototype, "id", void 0);
RsvpAftersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'rsvp-afters',
        template: __webpack_require__("../../../../../src/app/pages/pages/rsvp-afters/rsvp-afters.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/pages/rsvp-afters/rsvp-afters.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */]) === "function" && _a || Object])
], RsvpAftersComponent);

var _a;
//# sourceMappingURL=rsvp-afters.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages/rsvp-default/rsvp-default.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n\n<h2>RSVP</h2>\n<div class=\"spacer\"></div>\n\n<form (ngSubmit)=\"onSubmit(mailChimpForm)\" #mailChimpForm=\"ngForm\"  method=\"post\"\n  id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\n  <div class=\"mc-form\">\n    <div class=\"mc-field-group\">\n      <label for=\"mce-EMAIL\">Email Address</label>\n      <input required [(ngModel)]=\"model.EMAIL\"  type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\">\n    </div>\n    <div class=\"mc-field-group\">\n      <label for=\"mce-FNAME\">First Name </label>\n      <input required [(ngModel)]=\"model.FNAME\" type=\"text\" value=\"\" name=\"FNAME\" class=\"\" id=\"mce-FNAME\">\n    </div>\n    <div class=\"mc-field-group\">\n      <label for=\"mce-LNAME\">Last Name </label>\n      <input required [(ngModel)]=\"model.LNAME\" type=\"text\" value=\"\" name=\"LNAME\" class=\"\" id=\"mce-LNAME\">\n    </div>\n    <div class=\"mc-field-group size1of2\">\n      <label for=\"mce-PHONE\">Phone Number </label>\n      <input [(ngModel)]=\"model.PHONE\" type=\"text\" name=\"PHONE\" class=\"\" value=\"\" id=\"mce-PHONE\">\n    </div>\n    <div class=\"mc-address-group\">\n      <div class=\"mc-field-group\">\n        <label for=\"mce-ADDRESS-addr1\">Address </label>\n        <input [(ngModel)]=\"model.ADDRESS.addr1\" type=\"text\" value=\"\" maxlength=\"70\" name=\"ADDRESS[addr1]\" id=\"mce-ADDRESS-addr1\" class=\"\">\n      </div>\n      <div class=\"mc-field-group\">\n        <label for=\"mce-ADDRESS-addr2\">Address Line 2</label>\n        <input [(ngModel)]=\"model.ADDRESS.addr2\" type=\"text\" value=\"\" maxlength=\"70\" name=\"ADDRESS[addr2]\" id=\"mce-ADDRESS-addr2\">\n      </div>\n      <div class=\"mc-field-group size1of2\">\n        <label for=\"mce-ADDRESS-city\">City</label>\n        <input [(ngModel)]=\"model.ADDRESS.city\" type=\"text\" value=\"\" maxlength=\"40\" name=\"ADDRESS[city]\" id=\"mce-ADDRESS-city\" class=\"\">\n      </div>\n      <div class=\"mc-field-group size1of2\">\n        <label for=\"mce-ADDRESS-state\">State/Province/Region</label>\n        <input [(ngModel)]=\"model.ADDRESS.state\" type=\"text\" value=\"\" maxlength=\"20\" name=\"ADDRESS[state]\" id=\"mce-ADDRESS-state\" class=\"\">\n      </div>\n      <div class=\"mc-field-group size1of2\">\n        <label for=\"mce-ADDRESS-country\">Country</label>\n        <select [(ngModel)]=\"model.ADDRESS.country\" name=\"ADDRESS[country]\" id=\"mce-ADDRESS-country\" class=\"\"><option value=\"164\">USA</option><option value=\"286\">Aaland Islands</option><option value=\"274\">Afghanistan</option><option value=\"2\">Albania</option><option value=\"3\">Algeria</option><option value=\"178\">American Samoa</option><option value=\"4\">Andorra</option><option value=\"5\">Angola</option><option value=\"176\">Anguilla</option><option value=\"175\">Antigua And Barbuda</option><option value=\"6\">Argentina</option><option value=\"7\">Armenia</option><option value=\"179\">Aruba</option><option value=\"8\">Australia</option><option value=\"9\">Austria</option><option value=\"10\">Azerbaijan</option><option value=\"11\">Bahamas</option><option value=\"12\">Bahrain</option><option value=\"13\">Bangladesh</option><option value=\"14\">Barbados</option><option value=\"15\">Belarus</option><option value=\"16\">Belgium</option><option value=\"17\">Belize</option><option value=\"18\">Benin</option><option value=\"19\">Bermuda</option><option value=\"20\">Bhutan</option><option value=\"21\">Bolivia</option><option value=\"325\">Bonaire, Saint Eustatius and Saba</option><option value=\"22\">Bosnia and Herzegovina</option><option value=\"23\">Botswana</option><option value=\"181\">Bouvet Island</option><option value=\"24\">Brazil</option><option value=\"180\">Brunei Darussalam</option><option value=\"25\">Bulgaria</option><option value=\"26\">Burkina Faso</option><option value=\"27\">Burundi</option><option value=\"28\">Cambodia</option><option value=\"29\">Cameroon</option><option value=\"30\">Canada</option><option value=\"31\">Cape Verde</option><option value=\"32\">Cayman Islands</option><option value=\"33\">Central African Republic</option><option value=\"34\">Chad</option><option value=\"35\">Chile</option><option value=\"36\">China</option><option value=\"185\">Christmas Island</option><option value=\"37\">Colombia</option><option value=\"204\">Comoros</option><option value=\"38\">Congo</option><option value=\"183\">Cook Islands</option><option value=\"268\">Costa Rica</option><option value=\"275\">Cote D'Ivoire</option><option value=\"40\">Croatia</option><option value=\"276\">Cuba</option><option value=\"298\">Curacao</option><option value=\"41\">Cyprus</option><option value=\"42\">Czech Republic</option><option value=\"318\">Democratic Republic of the Congo</option><option value=\"43\">Denmark</option><option value=\"44\">Djibouti</option><option value=\"289\">Dominica</option><option value=\"187\">Dominican Republic</option><option value=\"45\">Ecuador</option><option value=\"46\">Egypt</option><option value=\"47\">El Salvador</option><option value=\"48\">Equatorial Guinea</option><option value=\"49\">Eritrea</option><option value=\"50\">Estonia</option><option value=\"51\">Ethiopia</option><option value=\"189\">Falkland Islands</option><option value=\"191\">Faroe Islands</option><option value=\"52\">Fiji</option><option value=\"53\">Finland</option><option value=\"54\">France</option><option value=\"193\">French Guiana</option><option value=\"277\">French Polynesia</option><option value=\"56\">Gabon</option><option value=\"57\">Gambia</option><option value=\"58\">Georgia</option><option value=\"59\">Germany</option><option value=\"60\">Ghana</option><option value=\"194\">Gibraltar</option><option value=\"61\">Greece</option><option value=\"195\">Greenland</option><option value=\"192\">Grenada</option><option value=\"196\">Guadeloupe</option><option value=\"62\">Guam</option><option value=\"198\">Guatemala</option><option value=\"270\">Guernsey</option><option value=\"63\">Guinea</option><option value=\"65\">Guyana</option><option value=\"200\">Haiti</option><option value=\"66\">Honduras</option><option value=\"67\">Hong Kong</option><option value=\"68\">Hungary</option><option value=\"69\">Iceland</option><option value=\"70\">India</option><option value=\"71\">Indonesia</option><option value=\"278\">Iran</option><option value=\"279\">Iraq</option><option value=\"74\" selected>Ireland</option><option value=\"323\">Isle of Man</option><option value=\"75\">Israel</option><option value=\"76\">Italy</option><option value=\"202\">Jamaica</option><option value=\"78\">Japan</option><option value=\"288\">Jersey  (Channel Islands)</option><option value=\"79\">Jordan</option><option value=\"80\">Kazakhstan</option><option value=\"81\">Kenya</option><option value=\"203\">Kiribati</option><option value=\"82\">Kuwait</option><option value=\"83\">Kyrgyzstan</option><option value=\"84\">Lao People's Democratic Republic</option><option value=\"85\">Latvia</option><option value=\"86\">Lebanon</option><option value=\"87\">Lesotho</option><option value=\"88\">Liberia</option><option value=\"281\">Libya</option><option value=\"90\">Liechtenstein</option><option value=\"91\">Lithuania</option><option value=\"92\">Luxembourg</option><option value=\"208\">Macau</option><option value=\"93\">Macedonia</option><option value=\"94\">Madagascar</option><option value=\"95\">Malawi</option><option value=\"96\">Malaysia</option><option value=\"97\">Maldives</option><option value=\"98\">Mali</option><option value=\"99\">Malta</option><option value=\"207\">Marshall Islands</option><option value=\"210\">Martinique</option><option value=\"100\">Mauritania</option><option value=\"212\">Mauritius</option><option value=\"241\">Mayotte</option><option value=\"101\">Mexico</option><option value=\"102\">Moldova, Republic of</option><option value=\"103\">Monaco</option><option value=\"104\">Mongolia</option><option value=\"290\">Montenegro</option><option value=\"294\">Montserrat</option><option value=\"105\">Morocco</option><option value=\"106\">Mozambique</option><option value=\"242\">Myanmar</option><option value=\"107\">Namibia</option><option value=\"108\">Nepal</option><option value=\"109\">Netherlands</option><option value=\"110\">Netherlands Antilles</option><option value=\"213\">New Caledonia</option><option value=\"111\">New Zealand</option><option value=\"112\">Nicaragua</option><option value=\"113\">Niger</option><option value=\"114\">Nigeria</option><option value=\"217\">Niue</option><option value=\"214\">Norfolk Island</option><option value=\"272\">North Korea</option><option value=\"116\">Norway</option><option value=\"117\">Oman</option><option value=\"118\">Pakistan</option><option value=\"222\">Palau</option><option value=\"282\">Palestine</option><option value=\"119\">Panama</option><option value=\"219\">Papua New Guinea</option><option value=\"120\">Paraguay</option><option value=\"121\">Peru</option><option value=\"122\">Philippines</option><option value=\"221\">Pitcairn</option><option value=\"123\">Poland</option><option value=\"124\">Portugal</option><option value=\"126\">Qatar</option><option value=\"315\">Republic of Kosovo</option><option value=\"127\">Reunion</option><option value=\"128\">Romania</option><option value=\"129\">Russia</option><option value=\"130\">Rwanda</option><option value=\"205\">Saint Kitts and Nevis</option><option value=\"206\">Saint Lucia</option><option value=\"324\">Saint Martin</option><option value=\"237\">Saint Vincent and the Grenadines</option><option value=\"132\">Samoa (Independent)</option><option value=\"227\">San Marino</option><option value=\"255\">Sao Tome and Principe</option><option value=\"133\">Saudi Arabia</option><option value=\"134\">Senegal</option><option value=\"266\">Serbia</option><option value=\"135\">Seychelles</option><option value=\"136\">Sierra Leone</option><option value=\"137\">Singapore</option><option value=\"302\">Sint Maarten</option><option value=\"138\">Slovakia</option><option value=\"139\">Slovenia</option><option value=\"223\">Solomon Islands</option><option value=\"140\">Somalia</option><option value=\"141\">South Africa</option><option value=\"257\">South Georgia and the South Sandwich Islands</option><option value=\"142\">South Korea</option><option value=\"311\">South Sudan</option><option value=\"143\">Spain</option><option value=\"144\">Sri Lanka</option><option value=\"293\">Sudan</option><option value=\"146\">Suriname</option><option value=\"225\">Svalbard and Jan Mayen Islands</option><option value=\"147\">Swaziland</option><option value=\"148\">Sweden</option><option value=\"149\">Switzerland</option><option value=\"285\">Syria</option><option value=\"152\">Taiwan</option><option value=\"260\">Tajikistan</option><option value=\"153\">Tanzania</option><option value=\"154\">Thailand</option><option value=\"233\">Timor-Leste</option><option value=\"155\">Togo</option><option value=\"232\">Tonga</option><option value=\"234\">Trinidad and Tobago</option><option value=\"156\">Tunisia</option><option value=\"157\">Turkey</option><option value=\"158\">Turkmenistan</option><option value=\"287\">Turks &amp; Caicos Islands</option><option value=\"159\">Uganda</option><option value=\"161\">Ukraine</option><option value=\"162\">United Arab Emirates</option><option value=\"262\">United Kingdom</option><option value=\"163\">Uruguay</option><option value=\"165\">Uzbekistan</option><option value=\"239\">Vanuatu</option><option value=\"166\">Vatican City State (Holy See)</option><option value=\"167\">Venezuela</option><option value=\"168\">Vietnam</option><option value=\"169\">Virgin Islands (British)</option><option value=\"238\">Virgin Islands (U.S.)</option><option value=\"188\">Western Sahara</option><option value=\"170\">Yemen</option><option value=\"173\">Zambia</option><option value=\"174\">Zimbabwe</option></select>\n      </div>\n    </div>\n    <div class=\"mc-field-group\">\n      <label for=\"mce-FMUSICAL\">Favourite Musical </label>\n      <input [(ngModel)]=\"model.FMUSICAL\" type=\"text\" value=\"\" name=\"FMUSICAL\" class=\"\" id=\"mce-FMUSICAL\">\n    </div>\n    <div class=\"mc-field-group\">\n      <label for=\"mce-DIETARY\">Dietary Requirements </label>\n      <input [(ngModel)]=\"model.DIETARY\" type=\"text\" value=\"\" name=\"DIETARY\" class=\"\" id=\"mce-DIETARY\">\n    </div>\n    <div id=\"mce-responses\" class=\"clear\">\n      <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n      <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n    </div>\n    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n    <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\" name=\"b_9c094231e20a57997f234dd79_c5f84c57bc\" tabindex=\"-1\" value=\"\"></div>\n    <div class=\"clear\">\n       <input *ngIf=\"!isComplete\" [disabled]=\"!mailChimpForm.form.valid || isLoading\" type=\"submit\" value=\"Confirm\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n      <p *ngIf=\"isComplete\">Thank you!</p>\n  </div>\n</form>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/pages/rsvp-default/rsvp-default.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  position: relative;\n  background-color: #f6f6f6;\n  width: 100vw;\n  padding: 0 35px;\n  overflow: hidden;\n  height: 100%;\n  float: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 95px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  @media screen and (min-width: 320px) {\n    :host {\n      padding: 0; }\n      :host .mc-form {\n        width: 100%; } }\n  @media screen and (min-width: 768px) {\n    :host {\n      padding: 0 35px; }\n      :host .mc-form {\n        width: 600px; } }\n  :host > section {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 100%;\n    padding: 6rem 65px 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 6rem; }\n    :host > section > h2 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      color: #3e3e3e;\n      text-align: center;\n      max-width: 70%;\n      font-family: 'mrs-eaves';\n      max-width: 60%;\n      margin-bottom: 3rem; }\n  :host .spacer {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100px;\n    height: 5px;\n    background-color: #3e3e3e;\n    margin-bottom: 3rem; }\n  :host form {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    max-width: 80%; }\n  :host .mc-form {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto; }\n  :host .mc-field-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    margin-bottom: 0.5rem; }\n    :host .mc-field-group label {\n      margin-bottom: 0.5rem; }\n    :host .mc-field-group input {\n      width: 100%;\n      padding: 0.75rem;\n      font-size: 1.33333333rem;\n      line-height: 1.125;\n      border: 1px solid rgba(0, 0, 0, 0.1);\n      margin-bottom: 0.75rem;\n      font-weight: 200;\n      font-family: Avenir, \"Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif; }\n      :host .mc-field-group input.ng-touched.ng-invalid {\n        border-color: #ffc1c1; }\n      :host .mc-field-group input:-webkit-autofill, :host .mc-field-group input:-webkit-autofill:hover, :host .mc-field-group input:-webkit-autofill:focus, :host .mc-field-group input.ng-touched.ng-valid {\n        border: 1px solid #b3c6d3;\n        -webkit-text-fill-color: #3e3e3e;\n        -webkit-box-shadow: 0 0 0px 1000px white inset;\n        transition: background-color 5000s ease-in-out 0s; }\n    :host .mc-field-group select {\n      height: 47px;\n      font-size: 1.33333333rem;\n      line-height: 1.125;\n      font-weight: 200;\n      font-family: Avenir, \"Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n      background-color: white;\n      margin-bottom: 0.75rem;\n      border: none;\n      border-radius: 0; }\n      :host .mc-field-group select:-webkit-autofill, :host .mc-field-group select:-webkit-autofill:hover, :host .mc-field-group select:-webkit-autofill:focus {\n        -webkit-text-fill-color: #3e3e3e;\n        -webkit-box-shadow: 0 0 0px 1000px white inset;\n        transition: background-color 5000s ease-in-out 0s; }\n  :host .mc-embedded-subscribe {\n    width: 100%; }\n  :host .mc-address-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap; }\n    :host .mc-address-group .mc-field-group {\n      width: 100%; }\n    :host .mc-address-group .size1of2 {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 50%;\n              flex: 1 1 50%;\n      padding-right: 0.75rem;\n      width: 50%; }\n      :host .mc-address-group .size1of2:nth-of-type(2n) {\n        padding-right: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pages/rsvp-default/rsvp-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Address */
/* unused harmony export RSVPModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RsvpDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Address = (function () {
    function Address(addr1, addr2, city, state, zip, country) {
        if (addr1 === void 0) { addr1 = ''; }
        if (addr2 === void 0) { addr2 = ''; }
        if (city === void 0) { city = ''; }
        if (state === void 0) { state = ''; }
        if (zip === void 0) { zip = ''; }
        if (country === void 0) { country = '74'; }
        this.addr1 = addr1;
        this.addr2 = addr2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
    }
    return Address;
}());

var RSVPModel = (function () {
    function RSVPModel(EMAIL, FNAME, LNAME, PHONE, ADDRESS, FMUSICAL, DIETARY) {
        if (EMAIL === void 0) { EMAIL = ''; }
        if (FNAME === void 0) { FNAME = ''; }
        if (LNAME === void 0) { LNAME = ''; }
        if (PHONE === void 0) { PHONE = ''; }
        if (ADDRESS === void 0) { ADDRESS = new Address(); }
        if (FMUSICAL === void 0) { FMUSICAL = ''; }
        if (DIETARY === void 0) { DIETARY = ''; }
        this.EMAIL = EMAIL;
        this.FNAME = FNAME;
        this.LNAME = LNAME;
        this.PHONE = PHONE;
        this.ADDRESS = ADDRESS;
        this.FMUSICAL = FMUSICAL;
        this.DIETARY = DIETARY;
        this.mailChimpUrl = 'http://wilandpatrickwedding.us14.list-manage.com/subscribe/post-json';
    }
    return RSVPModel;
}());

var RsvpDefaultComponent = (function () {
    function RsvpDefaultComponent(http) {
        this.http = http;
        // action="//wilandpatrickwedding.us14.list-manage.com/subscribe/post?u=9c094231e20a57997f234dd79&amp;id=c5f84c57bc"
        this.mailChimpUrl = 'http://wilandpatrickwedding.us14.list-manage.com/subscribe/post-json';
        this.model = new RSVPModel();
        this.id = 'rsvp';
        this.isComplete = false;
        this.isLoading = false;
    }
    RsvpDefaultComponent.prototype.ngOnInit = function () {
    };
    RsvpDefaultComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var formData = form.form.value;
        formData['ADDRESS[zip]'] = '00000';
        formData.u = '9c094231e20a57997f234dd79';
        formData.id = 'c5f84c57bc';
        formData.subscribe = 'Subscribe';
        var url = this.mailChimpUrl + this.jsonToQueryString(formData) + '&c=JSONP_CALLBACK';
        this.isLoading = true;
        this.http.get(url).subscribe(function (next) {
            var res = next.json();
            _this.isComplete = true;
        });
    };
    RsvpDefaultComponent.prototype.jsonToQueryString = function (json) {
        return '?' +
            Object.keys(json).map(function (key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(json[key]);
            }).join('&');
    };
    return RsvpDefaultComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('attr.id'),
    __metadata("design:type", Object)
], RsvpDefaultComponent.prototype, "id", void 0);
RsvpDefaultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'rsvp-default',
        template: __webpack_require__("../../../../../src/app/pages/pages/rsvp-default/rsvp-default.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/pages/rsvp-default/rsvp-default.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */]) === "function" && _a || Object])
], RsvpDefaultComponent);

var _a;
//# sourceMappingURL=rsvp-default.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages/rvsp-plusone/rvsp-plusone.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n\n<h2>RSVP</h2>\n<div class=\"spacer\"></div>\n\n<form (ngSubmit)=\"onSubmit(mailChimpForm)\" #mailChimpForm=\"ngForm\"  method=\"post\"\n  id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\n  <div class=\"mc-form\">\n    <div class=\"mc-field-group\">\n      <label for=\"mce-EMAIL\">Email Address</label>\n      <input required [(ngModel)]=\"model.EMAIL\"  type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\">\n    </div>\n    <div class=\"mc-field-group\">\n      <label for=\"mce-FNAME\">First Name </label>\n      <input required [(ngModel)]=\"model.FNAME\" type=\"text\" value=\"\" name=\"FNAME\" class=\"\" id=\"mce-FNAME\">\n    </div>\n    <div class=\"mc-field-group\">\n      <label for=\"mce-LNAME\">Last Name </label>\n      <input required [(ngModel)]=\"model.LNAME\" type=\"text\" value=\"\" name=\"LNAME\" class=\"\" id=\"mce-LNAME\">\n    </div>\n    <div class=\"mc-field-group\">\n      <label for=\"mce-NAMEPLUS1\">Name (+1)</label>\n      <input required [(ngModel)]=\"model.NAMEPLUS1\" type=\"text\" value=\"\" name=\"NAMEPLUS1\" class=\"\" id=\"mce-NAMEPLUS1\">\n    </div>\n    <div class=\"mc-field-group size1of2\">\n      <label for=\"mce-PHONE\">Phone Number </label>\n      <input [(ngModel)]=\"model.PHONE\" type=\"text\" name=\"PHONE\" class=\"\" value=\"\" id=\"mce-PHONE\">\n    </div>\n    <div class=\"mc-address-group\">\n      <div class=\"mc-field-group\">\n        <label for=\"mce-ADDRESS-addr1\">Address </label>\n        <input [(ngModel)]=\"model.ADDRESS.addr1\" type=\"text\" value=\"\" maxlength=\"70\" name=\"ADDRESS[addr1]\" id=\"mce-ADDRESS-addr1\" class=\"\">\n      </div>\n      <div class=\"mc-field-group\">\n        <label for=\"mce-ADDRESS-addr2\">Address Line 2</label>\n        <input [(ngModel)]=\"model.ADDRESS.addr2\" type=\"text\" value=\"\" maxlength=\"70\" name=\"ADDRESS[addr2]\" id=\"mce-ADDRESS-addr2\">\n      </div>\n      <div class=\"mc-field-group size1of2\">\n        <label for=\"mce-ADDRESS-city\">City</label>\n        <input [(ngModel)]=\"model.ADDRESS.city\" type=\"text\" value=\"\" maxlength=\"40\" name=\"ADDRESS[city]\" id=\"mce-ADDRESS-city\" class=\"\">\n      </div>\n      <div class=\"mc-field-group size1of2\">\n        <label for=\"mce-ADDRESS-state\">State/Province/Region</label>\n        <input [(ngModel)]=\"model.ADDRESS.state\" type=\"text\" value=\"\" maxlength=\"20\" name=\"ADDRESS[state]\" id=\"mce-ADDRESS-state\" class=\"\">\n      </div>\n      <div class=\"mc-field-group size1of2\">\n        <label for=\"mce-ADDRESS-country\">Country</label>\n        <select [(ngModel)]=\"model.ADDRESS.country\" name=\"ADDRESS[country]\" id=\"mce-ADDRESS-country\" class=\"\"><option value=\"164\">USA</option><option value=\"286\">Aaland Islands</option><option value=\"274\">Afghanistan</option><option value=\"2\">Albania</option><option value=\"3\">Algeria</option><option value=\"178\">American Samoa</option><option value=\"4\">Andorra</option><option value=\"5\">Angola</option><option value=\"176\">Anguilla</option><option value=\"175\">Antigua And Barbuda</option><option value=\"6\">Argentina</option><option value=\"7\">Armenia</option><option value=\"179\">Aruba</option><option value=\"8\">Australia</option><option value=\"9\">Austria</option><option value=\"10\">Azerbaijan</option><option value=\"11\">Bahamas</option><option value=\"12\">Bahrain</option><option value=\"13\">Bangladesh</option><option value=\"14\">Barbados</option><option value=\"15\">Belarus</option><option value=\"16\">Belgium</option><option value=\"17\">Belize</option><option value=\"18\">Benin</option><option value=\"19\">Bermuda</option><option value=\"20\">Bhutan</option><option value=\"21\">Bolivia</option><option value=\"325\">Bonaire, Saint Eustatius and Saba</option><option value=\"22\">Bosnia and Herzegovina</option><option value=\"23\">Botswana</option><option value=\"181\">Bouvet Island</option><option value=\"24\">Brazil</option><option value=\"180\">Brunei Darussalam</option><option value=\"25\">Bulgaria</option><option value=\"26\">Burkina Faso</option><option value=\"27\">Burundi</option><option value=\"28\">Cambodia</option><option value=\"29\">Cameroon</option><option value=\"30\">Canada</option><option value=\"31\">Cape Verde</option><option value=\"32\">Cayman Islands</option><option value=\"33\">Central African Republic</option><option value=\"34\">Chad</option><option value=\"35\">Chile</option><option value=\"36\">China</option><option value=\"185\">Christmas Island</option><option value=\"37\">Colombia</option><option value=\"204\">Comoros</option><option value=\"38\">Congo</option><option value=\"183\">Cook Islands</option><option value=\"268\">Costa Rica</option><option value=\"275\">Cote D'Ivoire</option><option value=\"40\">Croatia</option><option value=\"276\">Cuba</option><option value=\"298\">Curacao</option><option value=\"41\">Cyprus</option><option value=\"42\">Czech Republic</option><option value=\"318\">Democratic Republic of the Congo</option><option value=\"43\">Denmark</option><option value=\"44\">Djibouti</option><option value=\"289\">Dominica</option><option value=\"187\">Dominican Republic</option><option value=\"45\">Ecuador</option><option value=\"46\">Egypt</option><option value=\"47\">El Salvador</option><option value=\"48\">Equatorial Guinea</option><option value=\"49\">Eritrea</option><option value=\"50\">Estonia</option><option value=\"51\">Ethiopia</option><option value=\"189\">Falkland Islands</option><option value=\"191\">Faroe Islands</option><option value=\"52\">Fiji</option><option value=\"53\">Finland</option><option value=\"54\">France</option><option value=\"193\">French Guiana</option><option value=\"277\">French Polynesia</option><option value=\"56\">Gabon</option><option value=\"57\">Gambia</option><option value=\"58\">Georgia</option><option value=\"59\">Germany</option><option value=\"60\">Ghana</option><option value=\"194\">Gibraltar</option><option value=\"61\">Greece</option><option value=\"195\">Greenland</option><option value=\"192\">Grenada</option><option value=\"196\">Guadeloupe</option><option value=\"62\">Guam</option><option value=\"198\">Guatemala</option><option value=\"270\">Guernsey</option><option value=\"63\">Guinea</option><option value=\"65\">Guyana</option><option value=\"200\">Haiti</option><option value=\"66\">Honduras</option><option value=\"67\">Hong Kong</option><option value=\"68\">Hungary</option><option value=\"69\">Iceland</option><option value=\"70\">India</option><option value=\"71\">Indonesia</option><option value=\"278\">Iran</option><option value=\"279\">Iraq</option><option value=\"74\" selected>Ireland</option><option value=\"323\">Isle of Man</option><option value=\"75\">Israel</option><option value=\"76\">Italy</option><option value=\"202\">Jamaica</option><option value=\"78\">Japan</option><option value=\"288\">Jersey  (Channel Islands)</option><option value=\"79\">Jordan</option><option value=\"80\">Kazakhstan</option><option value=\"81\">Kenya</option><option value=\"203\">Kiribati</option><option value=\"82\">Kuwait</option><option value=\"83\">Kyrgyzstan</option><option value=\"84\">Lao People's Democratic Republic</option><option value=\"85\">Latvia</option><option value=\"86\">Lebanon</option><option value=\"87\">Lesotho</option><option value=\"88\">Liberia</option><option value=\"281\">Libya</option><option value=\"90\">Liechtenstein</option><option value=\"91\">Lithuania</option><option value=\"92\">Luxembourg</option><option value=\"208\">Macau</option><option value=\"93\">Macedonia</option><option value=\"94\">Madagascar</option><option value=\"95\">Malawi</option><option value=\"96\">Malaysia</option><option value=\"97\">Maldives</option><option value=\"98\">Mali</option><option value=\"99\">Malta</option><option value=\"207\">Marshall Islands</option><option value=\"210\">Martinique</option><option value=\"100\">Mauritania</option><option value=\"212\">Mauritius</option><option value=\"241\">Mayotte</option><option value=\"101\">Mexico</option><option value=\"102\">Moldova, Republic of</option><option value=\"103\">Monaco</option><option value=\"104\">Mongolia</option><option value=\"290\">Montenegro</option><option value=\"294\">Montserrat</option><option value=\"105\">Morocco</option><option value=\"106\">Mozambique</option><option value=\"242\">Myanmar</option><option value=\"107\">Namibia</option><option value=\"108\">Nepal</option><option value=\"109\">Netherlands</option><option value=\"110\">Netherlands Antilles</option><option value=\"213\">New Caledonia</option><option value=\"111\">New Zealand</option><option value=\"112\">Nicaragua</option><option value=\"113\">Niger</option><option value=\"114\">Nigeria</option><option value=\"217\">Niue</option><option value=\"214\">Norfolk Island</option><option value=\"272\">North Korea</option><option value=\"116\">Norway</option><option value=\"117\">Oman</option><option value=\"118\">Pakistan</option><option value=\"222\">Palau</option><option value=\"282\">Palestine</option><option value=\"119\">Panama</option><option value=\"219\">Papua New Guinea</option><option value=\"120\">Paraguay</option><option value=\"121\">Peru</option><option value=\"122\">Philippines</option><option value=\"221\">Pitcairn</option><option value=\"123\">Poland</option><option value=\"124\">Portugal</option><option value=\"126\">Qatar</option><option value=\"315\">Republic of Kosovo</option><option value=\"127\">Reunion</option><option value=\"128\">Romania</option><option value=\"129\">Russia</option><option value=\"130\">Rwanda</option><option value=\"205\">Saint Kitts and Nevis</option><option value=\"206\">Saint Lucia</option><option value=\"324\">Saint Martin</option><option value=\"237\">Saint Vincent and the Grenadines</option><option value=\"132\">Samoa (Independent)</option><option value=\"227\">San Marino</option><option value=\"255\">Sao Tome and Principe</option><option value=\"133\">Saudi Arabia</option><option value=\"134\">Senegal</option><option value=\"266\">Serbia</option><option value=\"135\">Seychelles</option><option value=\"136\">Sierra Leone</option><option value=\"137\">Singapore</option><option value=\"302\">Sint Maarten</option><option value=\"138\">Slovakia</option><option value=\"139\">Slovenia</option><option value=\"223\">Solomon Islands</option><option value=\"140\">Somalia</option><option value=\"141\">South Africa</option><option value=\"257\">South Georgia and the South Sandwich Islands</option><option value=\"142\">South Korea</option><option value=\"311\">South Sudan</option><option value=\"143\">Spain</option><option value=\"144\">Sri Lanka</option><option value=\"293\">Sudan</option><option value=\"146\">Suriname</option><option value=\"225\">Svalbard and Jan Mayen Islands</option><option value=\"147\">Swaziland</option><option value=\"148\">Sweden</option><option value=\"149\">Switzerland</option><option value=\"285\">Syria</option><option value=\"152\">Taiwan</option><option value=\"260\">Tajikistan</option><option value=\"153\">Tanzania</option><option value=\"154\">Thailand</option><option value=\"233\">Timor-Leste</option><option value=\"155\">Togo</option><option value=\"232\">Tonga</option><option value=\"234\">Trinidad and Tobago</option><option value=\"156\">Tunisia</option><option value=\"157\">Turkey</option><option value=\"158\">Turkmenistan</option><option value=\"287\">Turks &amp; Caicos Islands</option><option value=\"159\">Uganda</option><option value=\"161\">Ukraine</option><option value=\"162\">United Arab Emirates</option><option value=\"262\">United Kingdom</option><option value=\"163\">Uruguay</option><option value=\"165\">Uzbekistan</option><option value=\"239\">Vanuatu</option><option value=\"166\">Vatican City State (Holy See)</option><option value=\"167\">Venezuela</option><option value=\"168\">Vietnam</option><option value=\"169\">Virgin Islands (British)</option><option value=\"238\">Virgin Islands (U.S.)</option><option value=\"188\">Western Sahara</option><option value=\"170\">Yemen</option><option value=\"173\">Zambia</option><option value=\"174\">Zimbabwe</option></select>\n      </div>\n    </div>\n    <div class=\"mc-field-group\">\n      <label for=\"mce-FMUSICAL\">Favourite Musical </label>\n      <input [(ngModel)]=\"model.FMUSICAL\" type=\"text\" value=\"\" name=\"FMUSICAL\" class=\"\" id=\"mce-FMUSICAL\">\n    </div>\n    <div class=\"mc-field-group\">\n      <label for=\"mce-DIETARY\">Dietary Requirements </label>\n      <input [(ngModel)]=\"model.DIETARY\" type=\"text\" value=\"\" name=\"DIETARY\" class=\"\" id=\"mce-DIETARY\">\n    </div>\n    <div id=\"mce-responses\" class=\"clear\">\n      <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n      <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n    </div>\n    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n    <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\" name=\"b_9c094231e20a57997f234dd79_c5f84c57bc\" tabindex=\"-1\" value=\"\"></div>\n    <div class=\"clear\">\n       <input *ngIf=\"!isComplete\" [disabled]=\"!mailChimpForm.form.valid || isLoading\" type=\"submit\" value=\"Confirm\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n      <p *ngIf=\"isComplete\">Thank you!</p>\n  </div>\n</form>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/pages/rvsp-plusone/rvsp-plusone.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  position: relative;\n  background-color: #f6f6f6;\n  width: 100vw;\n  padding: 0 35px;\n  overflow: hidden;\n  height: 100%;\n  float: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 95px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  @media screen and (min-width: 320px) {\n    :host {\n      padding: 0; }\n      :host .mc-form {\n        width: 100%; } }\n  @media screen and (min-width: 768px) {\n    :host {\n      padding: 0 35px; }\n      :host .mc-form {\n        width: 600px; } }\n  :host > section {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 100%;\n    padding: 6rem 65px 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 6rem; }\n    :host > section > h2 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      color: #3e3e3e;\n      text-align: center;\n      max-width: 70%;\n      font-family: 'mrs-eaves';\n      max-width: 60%;\n      margin-bottom: 3rem; }\n  :host .spacer {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100px;\n    height: 5px;\n    background-color: #3e3e3e;\n    margin-bottom: 3rem; }\n  :host form {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    max-width: 80%; }\n  :host .mc-form {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto; }\n  :host .mc-field-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    margin-bottom: 0.5rem; }\n    :host .mc-field-group label {\n      margin-bottom: 0.5rem; }\n    :host .mc-field-group input {\n      width: 100%;\n      padding: 0.75rem;\n      font-size: 1.33333333rem;\n      line-height: 1.125;\n      border: 1px solid rgba(0, 0, 0, 0.1);\n      margin-bottom: 0.75rem;\n      font-weight: 200;\n      font-family: Avenir, \"Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif; }\n      :host .mc-field-group input.ng-touched.ng-invalid {\n        border-color: #ffc1c1; }\n      :host .mc-field-group input:-webkit-autofill, :host .mc-field-group input:-webkit-autofill:hover, :host .mc-field-group input:-webkit-autofill:focus, :host .mc-field-group input.ng-touched.ng-valid {\n        border: 1px solid #b3c6d3;\n        -webkit-text-fill-color: #3e3e3e;\n        -webkit-box-shadow: 0 0 0px 1000px white inset;\n        transition: background-color 5000s ease-in-out 0s; }\n    :host .mc-field-group select {\n      height: 47px;\n      font-size: 1.33333333rem;\n      line-height: 1.125;\n      font-weight: 200;\n      font-family: Avenir, \"Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n      background-color: white;\n      margin-bottom: 0.75rem;\n      border: none;\n      border-radius: 0; }\n      :host .mc-field-group select:-webkit-autofill, :host .mc-field-group select:-webkit-autofill:hover, :host .mc-field-group select:-webkit-autofill:focus {\n        -webkit-text-fill-color: #3e3e3e;\n        -webkit-box-shadow: 0 0 0px 1000px white inset;\n        transition: background-color 5000s ease-in-out 0s; }\n  :host .mc-embedded-subscribe {\n    width: 100%; }\n  :host .mc-address-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap; }\n    :host .mc-address-group .mc-field-group {\n      width: 100%; }\n    :host .mc-address-group .size1of2 {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 50%;\n              flex: 1 1 50%;\n      padding-right: 0.75rem;\n      width: 50%; }\n      :host .mc-address-group .size1of2:nth-of-type(2n) {\n        padding-right: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pages/rvsp-plusone/rvsp-plusone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Address */
/* unused harmony export RSVPModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RvspPlusoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Address = (function () {
    function Address(addr1, addr2, city, state, zip, country) {
        if (addr1 === void 0) { addr1 = ''; }
        if (addr2 === void 0) { addr2 = ''; }
        if (city === void 0) { city = ''; }
        if (state === void 0) { state = ''; }
        if (zip === void 0) { zip = ''; }
        if (country === void 0) { country = '74'; }
        this.addr1 = addr1;
        this.addr2 = addr2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
    }
    return Address;
}());

var RSVPModel = (function () {
    function RSVPModel(EMAIL, FNAME, LNAME, NAMEPLUS1, PHONE, ADDRESS, FMUSICAL, DIETARY) {
        if (EMAIL === void 0) { EMAIL = ''; }
        if (FNAME === void 0) { FNAME = ''; }
        if (LNAME === void 0) { LNAME = ''; }
        if (NAMEPLUS1 === void 0) { NAMEPLUS1 = ''; }
        if (PHONE === void 0) { PHONE = ''; }
        if (ADDRESS === void 0) { ADDRESS = new Address(); }
        if (FMUSICAL === void 0) { FMUSICAL = ''; }
        if (DIETARY === void 0) { DIETARY = ''; }
        this.EMAIL = EMAIL;
        this.FNAME = FNAME;
        this.LNAME = LNAME;
        this.NAMEPLUS1 = NAMEPLUS1;
        this.PHONE = PHONE;
        this.ADDRESS = ADDRESS;
        this.FMUSICAL = FMUSICAL;
        this.DIETARY = DIETARY;
        this.mailChimpUrl = 'http://wilandpatrickwedding.us14.list-manage.com/subscribe/post-json';
    }
    return RSVPModel;
}());

var RvspPlusoneComponent = (function () {
    function RvspPlusoneComponent(http) {
        this.http = http;
        this.id = 'rsvp';
        this.mailChimpUrl = 'http://wilandpatrickwedding.us14.list-manage.com/subscribe/post-json';
        this.model = new RSVPModel();
        this.isComplete = false;
        this.isLoading = false;
    }
    RvspPlusoneComponent.prototype.ngOnInit = function () { };
    RvspPlusoneComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var formData = form.form.value;
        formData['ADDRESS[zip]'] = '00000';
        formData.u = '9c094231e20a57997f234dd79';
        formData.id = 'd9e2324576';
        formData.subscribe = 'Subscribe';
        var url = this.mailChimpUrl +
            this.jsonToQueryString(formData) +
            '&c=JSONP_CALLBACK';
        this.isLoading = true;
        this.http.get(url).subscribe(function (next) {
            var res = next.json();
            _this.isComplete = true;
        });
    };
    RvspPlusoneComponent.prototype.jsonToQueryString = function (json) {
        return ('?' +
            Object.keys(json)
                .map(function (key) {
                return (encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(json[key]));
            })
                .join('&'));
    };
    return RvspPlusoneComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('attr.id'),
    __metadata("design:type", Object)
], RvspPlusoneComponent.prototype, "id", void 0);
RvspPlusoneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'rvsp-plusone',
        template: __webpack_require__("../../../../../src/app/pages/pages/rvsp-plusone/rvsp-plusone.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/pages/rvsp-plusone/rvsp-plusone.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */]) === "function" && _a || Object])
], RvspPlusoneComponent);

var _a;
//# sourceMappingURL=rvsp-plusone.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages/wedding-accomodation/wedding-accomodation.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"borders\" src=\"assets/svgs/left-lines.svg\" alt=\"\">\n<section>\n  <h2>Accomodation</h2>\n  <div class=\"spacer\"></div>\n\n  <div class=\"accomodation__container\">\n    <article class=\"accomodation__item\">\n      <header>\n        <img src=\"assets/svgs/hotel.svg\" alt=\"\">\n        <h6>The Hibernian Hotel</h6>\n      </header>\n      <div class=\"accomodation__details\">\n        <p class=\"accomodation__phone\">056 777 1888</p>\n        <p class=\"accomodation__address\">1 Ormonde St<br>Gardens,<br>Kilkenny.</p>\n        <p class=\"accomodation__info\">Across the river from Langtons, but virtually on the same street. This 4-star boutique hotel boasts a fabulously modern rooms with quirky décore.</p>\n      </div>\n    </article>\n\n    <article class=\"accomodation__item\">\n      <header>\n        <img src=\"assets/svgs/hotel.svg\" alt=\"\">\n        <h6>The Ormonde Hotel</h6>\n      </header>\n      <div class=\"accomodation__details\">\n        <p class=\"accomodation__phone\">056 775 0200</p>\n        <p class=\"accomodation__address\">Ormonde St,<br>Gardens,<br>Kilkenny.</p>\n        <p class=\"accomodation__info\">This 4-star hotel is a 6 minute walk to Langtons. The Kilkenny Ormonde Hotel offers on site car parking facilities in Q Park Ormonde Street, the multi storey car park immediately in front of the hotel.</p>\n      </div>\n    </article>\n\n     <article class=\"accomodation__item\">\n      <header>\n        <img src=\"assets/svgs/hotel.svg\" alt=\"\">\n        <h6>The Pembroke Hotel</h6>\n      </header>\n      <div class=\"accomodation__details\">\n        <p class=\"accomodation__phone\">056 778 3500</p>\n        <p class=\"accomodation__address\">11 Patrick St,<br>Gardens,<br>Kilkenny.</p>\n        <p class=\"accomodation__info\">A 4-star hotel built on the site of a historic Specials garage. 6 minute walk to Langtons.</p>\n      </div>\n    </article>\n\n    <article class=\"accomodation__item\">\n      <header>\n        <img src=\"assets/svgs/hotel.svg\" alt=\"\">\n        <h6>River Court Hotel</h6>\n      </header>\n      <div class=\"accomodation__details\">\n        <p class=\"accomodation__phone\">056 772 3388</p>\n        <p class=\"accomodation__address\">The Bridge,<br>John Street,<br>Kilkenny.</p>\n        <p class=\"accomodation__info\">Just across from Kilkenny Castle is the River Court Hotel with classically-styled rooms and suites, plus a casual bar and refined dining.</p>\n      </div>\n    </article>\n\n    <article class=\"accomodation__item\">\n      <header>\n        <img src=\"assets/svgs/hotel.svg\" alt=\"\">\n        <h6>Hotel Kilkenny</h6>\n      </header>\n      <div class=\"accomodation__details\">\n        <p class=\"accomodation__phone\">056 776 5133</p>\n        <p class=\"accomodation__address\">College Rd,<br>Sugarloafhill,<br>Kilkenny.</p>\n        <p class=\"accomodation__info\">Just next door to the reception, Langton House Hotel is on the main street in Kilkenny, there are a limited number\n          of rooms held for the night, please book early to avoid disappointment.</p>\n      </div>\n    </article>\n\n    <article class=\"accomodation__item\">\n      <header>\n        <img src=\"assets/svgs/airbnb.svg\" alt=\"\">\n        <h4>Airbnb</h4>\n      </header>\n      <div class=\"accomodation__details\">\n        <p class=\"accomodation__info\">If you're interested in a more intimate stay in Kilkenny, we both highly recommend some of the beautiful and relaxing\n          AirBnB options that are available in Kilkenny City.</p>\n        <p class=\"accomodation__link\"><a href=\"https://www.airbnb.com/s/Kilkenny--Ireland/homes?checkin=2017-09-23&checkout=2017-09-24&allow_override%5B%5D=&s_tag=DYKTJ5aT\">Click here to see whats available.</a></p>\n      </div>\n\n    </article>\n  </div>\n</section>\n<img class=\"borders\" src=\"assets/svgs/right-lines.svg\" alt=\"\">"

/***/ }),

/***/ "../../../../../src/app/pages/pages/wedding-accomodation/wedding-accomodation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  position: relative;\n  background-color: whitesmoke;\n  width: 100vw;\n  overflow: hidden;\n  padding: 0 35px;\n  float: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  @media screen and (min-width: 320px) {\n    :host {\n      padding: 0.75rem; }\n      :host > img.borders {\n        display: none; }\n      :host > section {\n        padding: 6rem 0 0; }\n      :host .accomodation__details {\n        width: 100%;\n        margin-left: 0; }\n      :host .accomodation__item header {\n        margin-bottom: 1.5rem; } }\n  @media screen and (min-width: 768px) {\n    :host {\n      padding: 0 35px; }\n      :host > img.borders {\n        display: block; }\n      :host > section {\n        padding: 6rem 65px 0; }\n      :host .accomodation__details {\n        margin-left: 3rem;\n        width: 50%; }\n      :host .accomodation__item header {\n        margin-bottom: 0; } }\n  :host > img.borders {\n    position: absolute;\n    height: 100%; }\n    :host > img.borders:last-of-type {\n      right: 35px; }\n  :host > section {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 6rem; }\n    :host > section > h2 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      color: #3e3e3e;\n      text-align: center;\n      max-width: 70%;\n      font-family: 'mrs-eaves';\n      max-width: 60%;\n      margin-bottom: 3rem; }\n  :host .spacer {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100px;\n    height: 5px;\n    background-color: #3e3e3e;\n    margin-bottom: 3rem; }\n  :host .accomodation__container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    width: 80%; }\n  :host .accomodation__item {\n    margin-bottom: 1.875rem;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n    :host .accomodation__item:last-child {\n      border-bottom: none; }\n    :host .accomodation__item header {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      :host .accomodation__item header img {\n        margin-right: 1.5rem; }\n      :host .accomodation__item header h5 {\n        font-family: 'jubilat';\n        font-weight: 400; }\n  :host .accomodation__phone, :host .accomodation__link {\n    font-size: 0.75rem;\n    line-height: 2;\n    color: #cdb58d;\n    margin-bottom: 0.75rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pages/wedding-accomodation/wedding-accomodation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeddingAccomodationComponent; });
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

var WeddingAccomodationComponent = (function () {
    function WeddingAccomodationComponent() {
    }
    WeddingAccomodationComponent.prototype.ngOnInit = function () {
    };
    return WeddingAccomodationComponent;
}());
WeddingAccomodationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'wedding-accomodation',
        template: __webpack_require__("../../../../../src/app/pages/pages/wedding-accomodation/wedding-accomodation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/pages/wedding-accomodation/wedding-accomodation.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WeddingAccomodationComponent);

//# sourceMappingURL=wedding-accomodation.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages/wedding-faq/wedding-faq.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"borders\" src=\"assets/svgs/left-lines.svg\" alt=\"\">\n<section>\n  <h2>FAQs</h2>\n  <div class=\"spacer\"></div>\n\n  <article>\n    <h5>Where will I stay/park?</h5>\n    <p>Please see the sections below on some details that we’ve put together to make this as easy as we can for you.</p>\n  </article>\n\n  <article>\n    <h5>What kind of ceremony will it be?</h5>\n    <p>We are having a secular ceremony that will be overseen by an independent celebrant. The structure will be familiar to most people attending though, with music, a couple of readings from our friends and family members, vows, and the exchanging of rings.</p>\n  </article>\n\n    <article>\n    <h5>What happens after the ceremony?</h5>\n    <p>Following on from the ceremony, we will enjoy some drinks and light nibbles in the back bar of Langtons. Dinner will be at 6pm, and afters will start at 9pm with music from The Seducers followed by Langtons resident DJ Brian Hennessy until late!</p>\n  </article>\n\n  <article>\n    <h5>Are young children welcome?</h5>\n    <p>Yes of course, please feel welcome to bring your smallies to enjoy everything with you. If you are eating with us, please advise us in advance though so we can make sure there’s numbers for the kids menu and for seating purposes.</p>\n  </article>\n\n  <article>\n    <h5>Is there a gift registry?</h5>\n    <p>We decided not to register for gifts, as we won’t be buying our own house until (fingers crossed) next year, and our current rental house is cozy. Any monetary gifts we kindly receive will be put towards our honeymoon of a lifetime where we will cruise around South Pacific Islands that we’ve been looking at for years on our favourite show, Survivor! On the day, please speak to a member of our wedding party who will gladly receive on our behalf.</p>\n  </article>\n\n  <article>\n    <h5>Is anything happening the days on either side?</h5>\n    <p>The day before and after we will be spending in Kilkenny with friends and family. We plan on keeping it quite relaxed, so please feel welcome to join us. We will be flying out early on the Wednesday morning to spend a week diving off the coast of Malta!</p>\n  </article>\n</section>\n<img class=\"borders\" src=\"assets/svgs/right-lines.svg\" alt=\"\">"

/***/ }),

/***/ "../../../../../src/app/pages/pages/wedding-faq/wedding-faq.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  position: relative;\n  background-color: white;\n  width: 100vw;\n  overflow: hidden;\n  float: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  @media screen and (min-width: 320px) {\n    :host {\n      padding: 0.75rem; }\n      :host > img.borders {\n        display: none; }\n      :host > section {\n        padding: 6rem 0 0; } }\n  @media screen and (min-width: 768px) {\n    :host {\n      padding: 0 35px; }\n      :host > img.borders {\n        display: block; }\n      :host > section {\n        padding: 6rem 65px 0; } }\n  :host > img.borders {\n    position: absolute;\n    height: 100%; }\n    :host > img.borders:last-of-type {\n      right: 35px; }\n  :host > section {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 6rem; }\n    :host > section > h2 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      color: #3e3e3e;\n      text-align: center;\n      max-width: 70%;\n      font-family: 'mrs-eaves';\n      max-width: 60%;\n      margin-bottom: 3rem; }\n  :host .spacer {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100px;\n    height: 5px;\n    background-color: #3e3e3e;\n    margin-bottom: 3rem; }\n  :host article {\n    width: 80%; }\n    :host article h5 {\n      margin-bottom: 1.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pages/wedding-faq/wedding-faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeddingFaqComponent; });
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

var WeddingFaqComponent = (function () {
    function WeddingFaqComponent() {
    }
    WeddingFaqComponent.prototype.ngOnInit = function () {
    };
    return WeddingFaqComponent;
}());
WeddingFaqComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'wedding-faq',
        template: __webpack_require__("../../../../../src/app/pages/pages/wedding-faq/wedding-faq.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/pages/wedding-faq/wedding-faq.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WeddingFaqComponent);

//# sourceMappingURL=wedding-faq.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages/wedding-info/wedding-info.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"borders\" src=\"assets/svgs/left-lines.svg\" alt=\"\">\n<section>\n  <h2>Please join Patrick and William on the 24th September as we celebrate our wedding </h2>\n  <div class=\"spacer\"></div>\n  <p>Sunday, 24th September</p>\n  <p>The ceremony will be held at 4pm in the Set Theatre of Langtons House hotel, we will gather at Bridie’s Bar next door from 3pm onwards. Dinner will be at 6pm followed by music from The Seducers and DJ till late.</p>\n  <p>Monday, 25th September</p>\n  <p>The Following day, afternoon tea, scones, and maybe a bit of an ould singsong for anyone sticking around!</p>\n</section>\n<img class=\"borders\" src=\"assets/svgs/right-lines.svg\" alt=\"\">"

/***/ }),

/***/ "../../../../../src/app/pages/pages/wedding-info/wedding-info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  position: relative;\n  background-color: #58768b;\n  width: 100vw;\n  overflow: hidden;\n  float: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  @media screen and (min-width: 320px) {\n    :host {\n      padding: 0.75rem; }\n      :host > img.borders {\n        display: none; }\n      :host > section {\n        padding: 6rem 0 0; } }\n  @media screen and (min-width: 768px) {\n    :host {\n      padding: 0 35px; }\n      :host > img.borders {\n        display: block; }\n      :host > section {\n        padding: 6rem 65px 0; } }\n  :host img.borders {\n    position: absolute;\n    height: 100%; }\n    :host img.borders:last-of-type {\n      right: 35px; }\n  :host section {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 100%;\n    padding-top: 6rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 6rem; }\n  :host h2,\n  :host p {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    color: #f6f6f6;\n    text-align: center;\n    max-width: 70%;\n    margin-bottom: 1.5rem; }\n  :host h2 {\n    font-family: 'mrs-eaves';\n    color: #f6f6f6;\n    max-width: 60%;\n    margin-bottom: 3rem; }\n  :host .spacer {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100px;\n    height: 5px;\n    background-color: #f6f6f6;\n    margin-bottom: 3rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pages/wedding-info/wedding-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeddingInfoComponent; });
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

var WeddingInfoComponent = (function () {
    function WeddingInfoComponent() {
    }
    WeddingInfoComponent.prototype.ngOnInit = function () { };
    return WeddingInfoComponent;
}());
WeddingInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'wedding-info',
        template: __webpack_require__("../../../../../src/app/pages/pages/wedding-info/wedding-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/pages/wedding-info/wedding-info.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WeddingInfoComponent);

//# sourceMappingURL=wedding-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages/wedding-travel/wedding-travel.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"borders\" src=\"assets/svgs/left-lines.svg\" alt=\"\">\n<section>\n  <h2>Travel</h2>\n  <div class=\"spacer\"></div>\n  <nav class=\"tabs\">\n    <a [class.active]=\"activeTab === 'bus'\" (click)=\"selectTab('bus')\">Bus</a>\n    <a [class.active]=\"activeTab === 'train'\" (click)=\"selectTab('train')\">Train</a>\n    <a [class.active]=\"activeTab === 'parking'\" (click)=\"selectTab('parking')\">Parking</a>\n  </nav>\n  <div class=\"tab__container\">\n    <div *ngIf=\"activeTab === 'bus'\" class=\"tab__item\">\n      <section>\n        <header>\n          <img src=\"assets/svgs/bus.svg\" alt=\"\">\n          <h3>From Dublin</h3>\n        </header>\n        <article>\n          <p>Bus Éireann has cancelled the No. 7 route, the other options are <a target=\"_blank\" href=\"http://jjkavanagh.ie/timetable-detail-page?RouteNo=717&IsWeb=1&IsCollegeRoute=0&Direction=1&RGrp=Main%20Routes%20^%20Airport%20Routes\"><strong>JJ Kavanaghs</strong></a> that goes at 6.50, 11.05, 13.05, 15.05, 17.05, 18.10, 19.05, 21.05 and 23.35 from Heuston Station or <a target=\"_blank\" href=\"http://www.dublincoach.ie/timetables-fares/M9-waterford-kilkenny-dublin-bus.php\"><strong>Dublin Coach</strong></a> that leaves from Burgh Quay every 2 hours from 6am.</p>\n        </article>\n      </section>\n\n      <section>\n        <header>\n          <img src=\"assets/svgs/bus.svg\" alt=\"\">\n          <h3>From Cork</h3>\n        </header>\n        <article>\n          <p>Get the Dublin Coach (600) towards Dublin from St Patricks Quay across from the bus station, every two hours from 5am.</p>\n        </article>\n      </section>\n\n       <section>\n        <header>\n          <img src=\"assets/svgs/bus.svg\" alt=\"\">\n          <h3>From Galway</h3>\n        </header>\n        <article>\n          <p>Take the <a target=\"_blank\" href=\"http://www.citylink.ie/uploads/images/timetables43/timetables26/timetable_800x850pixel.jpg\">Citylink</a> (760) or <a target=\"_blank\" href=\"http://www.gobus.ie/timetable.php?map=28\">GoBus</a> (720) to Dublin, then follow the directions from Dublin to Kilkenny. When transferring in Dublin Eden Quay is across the river from Burgh Quay when transfering with GoBus, with Citylink its easier to just transfer at the Airport. This will take around 5-6 hours, the train is 4 hours.</p>\n        </article>\n      </section>\n\n    </div>\n\n    <div *ngIf=\"activeTab === 'train'\" class=\"tab__item\">\n      <section>\n        <header>\n          <img src=\"assets/svgs/train.svg\" alt=\"\">\n          <h3>Trains</h3>\n        </header>\n        <article>\n          <p>Kilkenny city is on the Waterford-Dublin train route, however this service has limited trains on Sundays, so plan in advance which train to get using the below link. Langtons is a 5 minute stroll from Kilkenny station, and can be reached by turning right from the train station onto the Dublin Road, walking to the end of the street and turning left onto John Street Upper. Walk 200m and Langtons is on the left hand side.<br> <a href=\"http://www.irishrail.ie/media/04_dublin-waterford_25052015.pdf\"></a></p>\n        </article>\n      </section>\n    </div>\n\n    <div *ngIf=\"activeTab === 'parking'\" class=\"tab__item\">\n      <section>\n        <header>\n          <img src=\"assets/svgs/parking.svg\" alt=\"\">\n          <h3>Parking</h3>\n        </header>\n        <article>\n         <p>Parking spaces at Langtons are highly limited so keep some alternatives in mind if you are aiming to park there just in case. There are two large parking options nearby.</p>\n         <p>​The ​Park Rite​ at ​MacDonagh Junction Shopping Centre​ on ​Hebron Rd​, which as 1100 parking spots​​. Overnight parking here is a rate of €12, and it is located a 10 minute walk from Langtons.</p>\n         <p>The Q-Park on Ormond Street​, which has 800 spaces. This is located near many of the city centre hotels, and is a 10 minute walk to Langtons. The overnight rate is €16.</p>\n         <p>T​here ​are several other smaller car parks in the area, such as The Wolf Tone Street Car Park and the car park at the train station. For more information please <a href=\"https://www.parkopedia.ie/parking/locations/kilkenny_gc6ge164mg0/?country=ie&arriving=201709241200&leaving=201709251200\">click here</a>.</p>\n        </article>\n      </section>\n    </div>\n  </div>\n</section>\n<img class=\"borders\" src=\"assets/svgs/right-lines.svg\" alt=\"\">"

/***/ }),

/***/ "../../../../../src/app/pages/pages/wedding-travel/wedding-travel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  position: relative;\n  background-color: white;\n  width: 100vw;\n  overflow: hidden;\n  float: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  @media screen and (min-width: 320px) {\n    :host {\n      padding: 0.75rem; }\n      :host > img.borders {\n        display: none; }\n      :host > section {\n        padding: 6rem 0 0; } }\n  @media screen and (min-width: 768px) {\n    :host {\n      padding: 0 35px; }\n      :host > img.borders {\n        display: block; }\n      :host > section {\n        padding: 6rem 65px 0; } }\n  :host > img.borders {\n    position: absolute;\n    height: 100%; }\n    :host > img.borders:last-of-type {\n      right: 35px; }\n  :host > section {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 6rem; }\n    :host > section > h2 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      color: #3e3e3e;\n      text-align: center;\n      max-width: 70%;\n      font-family: 'mrs-eaves';\n      max-width: 60%;\n      margin-bottom: 3rem; }\n  :host .spacer {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100px;\n    height: 5px;\n    background-color: #3e3e3e;\n    margin-bottom: 3rem; }\n  :host .tab__container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    margin: 0 3rem;\n    width: 80%; }\n  :host .tab__item article {\n    max-width: 100%;\n    margin-left: 3rem; }\n  :host .tab__item header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    margin-bottom: 0.75rem; }\n    :host .tab__item header img {\n      margin-right: 1.5rem; }\n    :host .tab__item header h3 {\n      font-family: 'jubilat';\n      font-weight: 200; }\n  :host nav {\n    margin-bottom: 3rem; }\n    :host nav a {\n      font-family: 'mrs-eaves';\n      font-size: 1.33333333rem;\n      line-height: 1.125;\n      margin-right: 2rem;\n      cursor: pointer; }\n      :host nav a:after {\n        content: '-';\n        position: absolute;\n        margin-left: 1rem;\n        -webkit-transform: translateX(-0.1rem);\n                transform: translateX(-0.1rem); }\n      :host nav a:last-child {\n        margin-right: 0; }\n      :host nav a:last-child:after {\n        content: ''; }\n      :host nav a.active {\n        text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pages/wedding-travel/wedding-travel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeddingTravelComponent; });
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

var WeddingTravelComponent = (function () {
    function WeddingTravelComponent() {
        this.activeTab = 'bus';
    }
    WeddingTravelComponent.prototype.ngOnInit = function () { };
    WeddingTravelComponent.prototype.selectTab = function ($tab) {
        this.activeTab = $tab;
    };
    return WeddingTravelComponent;
}());
WeddingTravelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'wedding-travel',
        template: __webpack_require__("../../../../../src/app/pages/pages/wedding-travel/wedding-travel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/pages/wedding-travel/wedding-travel.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WeddingTravelComponent);

//# sourceMappingURL=wedding-travel.component.js.map

/***/ }),

/***/ "../../../../../src/app/shapes/border-left-shape.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderItemLeft; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mo_js__ = __webpack_require__("../../../../mo-js/build/mo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mo_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mo_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_animations_stroke_dasharray__ = __webpack_require__("../../../../../src/app/core/animations/stroke-dasharray.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_consts_timings__ = __webpack_require__("../../../../../src/app/core/consts/timings.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var HeaderItemLeft = (function () {
    function HeaderItemLeft(el) {
        var _this = this;
        this.shapeArr = [];
        this.initShapes();
        this.el = el;
        this.timeline = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Timeline"]({ delay: __WEBPACK_IMPORTED_MODULE_2__core_consts_timings__["a" /* BORDER_TIME_DELAY */] });
        this.shapeArr.forEach(function (e, i) {
            _this.createShape(e.name, e.stroke, e.path, i);
        });
        this.createCircle();
        this.timeline.play();
    }
    HeaderItemLeft.prototype.createShape = function (name, stroke, path, index) {
        var strokeDashArray = new __WEBPACK_IMPORTED_MODULE_1__core_animations_stroke_dasharray__["a" /* StrokeDashArray */](path);
        var startPosition = strokeDashArray.getPosition('0%', '0%', 1);
        var endPosition = strokeDashArray.getPosition('0%', '100%', 1);
        var s = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Shape"]({
            shape: name,
            isShowEnd: true,
            isShowStart: true,
            parent: this.el,
            delay: index * 300,
            fill: 'transparent',
            stroke: '#494949',
            strokeWidth: stroke,
            strokeDashoffset: strokeDashArray.length * 2,
            strokeDasharray: (_a = {}, _a[startPosition] = endPosition, _a),
            scale: 1,
            y: 0,
            left: 60,
            top: 75,
            duration: 1500,
            width: 800,
            height: window.innerHeight * 2,
            origin: '0% 0%'
        });
        this.timeline.add(s);
        var _a;
    };
    HeaderItemLeft.prototype.createCircle = function () {
        var s = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Shape"]({
            shape: 'circle',
            left: 40,
            parent: this.el,
            delay: 7 * 300,
            fill: '#494949',
            top: 125,
            radius: (_a = {}, _a[0] = 5, _a)
        });
        this.timeline.add(s);
        var _a;
    };
    HeaderItemLeft.prototype.initShapes = function () {
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader1', BorderLeftHeader1);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader2', BorderLeftHeader2);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader3', BorderLeftHeader3);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader4', BorderLeftHeader4);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader5', BorderLeftHeader5);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader6', BorderLeftHeader6);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader7', BorderLeftHeader7);
        this.shapeArr.push({
            name: 'BorderLeftHeader1',
            stroke: 2,
            path: "M140.1,23 57,94.4 57," + window.innerHeight
        }, {
            name: 'BorderLeftHeader2',
            stroke: 3,
            path: "M48.5," + window.innerHeight + " 48.5,87 142,8.5"
        }, {
            name: 'BorderLeftHeader3',
            stroke: 2,
            path: "M30," + window.innerHeight + "V104"
        }, {
            name: 'BorderLeftHeader4',
            stroke: 2,
            path: "M20," + window.innerHeight + "V106l0.4,0.4c7.8,7.9,12,8,19.3-0.8l0.4-0.4V" + window.innerHeight
        }, {
            name: 'BorderLeftHeader5',
            stroke: 2,
            path: "M380,23H105L26,88.2c1.1-0.4,2.3-0.6,3.5-0.6c5.6,0,10.2,4.2,10.7,9.8L40,42.2"
        }, {
            name: 'BorderLeftHeader6',
            stroke: 5,
            path: "M420.7,10.2 78.4,9.9 10.5,67.1 10.5," + window.innerHeight
        }, {
            name: 'BorderLeftHeader7',
            stroke: 2,
            path: "M455,1 113,1 1,95.1 1," + window.innerHeight
        });
    };
    HeaderItemLeft.prototype.BorderLeftHeader1 = function () {
        var svg = new BorderLeftHeader1();
    };
    return HeaderItemLeft;
}());

var BorderLeftHeader1 = (function (_super) {
    __extends(BorderLeftHeader1, _super);
    function BorderLeftHeader1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader1.prototype.getShape = function () {
        return "<path id=\"line1\" class=\"st0\" d=\"M140.1,23 57,94.4 57," + window.innerHeight + " \"/>";
    };
    return BorderLeftHeader1;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader2 = (function (_super) {
    __extends(BorderLeftHeader2, _super);
    function BorderLeftHeader2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader2.prototype.getShape = function () {
        return "<path id=\"line2\" class=\"st2\" d=\"M48.5," + window.innerHeight + " 48.5,87 142,8.5 \"/>";
    };
    return BorderLeftHeader2;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader3 = (function (_super) {
    __extends(BorderLeftHeader3, _super);
    function BorderLeftHeader3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader3.prototype.getShape = function () {
        return "<path id=\"line3\" class=\"st0\" d=\"M30," + window.innerHeight + "V104\"/>";
    };
    return BorderLeftHeader3;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader4 = (function (_super) {
    __extends(BorderLeftHeader4, _super);
    function BorderLeftHeader4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader4.prototype.getShape = function () {
        return "<path id=\"line4\" class=\"st0\" d=\"M20," + window.innerHeight + "V106l0.4,0.4c7.8,7.9,12,8,19.3-0.8l0.4-0.4V" + window.innerHeight + "\"/>";
    };
    return BorderLeftHeader4;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader5 = (function (_super) {
    __extends(BorderLeftHeader5, _super);
    function BorderLeftHeader5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader5.prototype.getShape = function () {
        return "<path id=\"line5\" class=\"st0\" d=\"M380,23H105L26.1,88.2c1.1-0.4,2.3-0.6,3.5-0.6c5.6,0,10.2,4.2,10.7,9.8L40,42.2\"/>";
    };
    return BorderLeftHeader5;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader6 = (function (_super) {
    __extends(BorderLeftHeader6, _super);
    function BorderLeftHeader6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader6.prototype.getShape = function () {
        return "<path id=\"line6\" class=\"st1\" d=\"M420.7,10.2 78.4,9.9 10.5,67.1 10.5," + window.innerHeight + " \"/>";
    };
    return BorderLeftHeader6;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader7 = (function (_super) {
    __extends(BorderLeftHeader7, _super);
    function BorderLeftHeader7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader7.prototype.getShape = function () {
        return "<path id=\"line7\" class=\"st0\" d=\"M452,1 113,1 1,95.1 1," + window.innerHeight + " \"/>";
    };
    return BorderLeftHeader7;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
//# sourceMappingURL=border-left-shape.js.map

/***/ }),

/***/ "../../../../../src/app/shapes/border-right-shape.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderItemRight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mo_js__ = __webpack_require__("../../../../mo-js/build/mo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mo_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mo_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_animations_stroke_dasharray__ = __webpack_require__("../../../../../src/app/core/animations/stroke-dasharray.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_consts_timings__ = __webpack_require__("../../../../../src/app/core/consts/timings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils_measure__ = __webpack_require__("../../../../../src/app/core/utils/measure.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var HeaderItemRight = (function () {
    function HeaderItemRight(el) {
        var _this = this;
        this.shapeArr = [];
        this.initShapes();
        this.el = el;
        this.timeline = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Timeline"]({ delay: __WEBPACK_IMPORTED_MODULE_2__core_consts_timings__["a" /* BORDER_TIME_DELAY */] });
        this.shapeArr.forEach(function (e, i) {
            _this.createShape(e.name, e.stroke, e.path, i);
        });
        this.createCircle();
        this.timeline.play();
    }
    HeaderItemRight.prototype.createShape = function (name, stroke, path, index) {
        var strokeDashArray = new __WEBPACK_IMPORTED_MODULE_1__core_animations_stroke_dasharray__["a" /* StrokeDashArray */](path);
        console.log(window.innerHeight);
        var startPosition = strokeDashArray.getPosition('0%', '0%', 1);
        var endPosition = strokeDashArray.getPosition('0%', '100%', 1);
        var s = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Shape"]({
            shape: name,
            isShowEnd: true,
            isShowStart: true,
            parent: this.el,
            delay: index * 300,
            fill: 'transparent',
            stroke: '#494949',
            strokeWidth: stroke,
            strokeDashoffset: strokeDashArray.length * 2,
            strokeDasharray: (_a = {}, _a[startPosition] = endPosition, _a),
            scale: 1,
            top: 75,
            left: -112,
            x: 0,
            duration: 1500,
            width: 800,
            height: window.innerHeight * 2
        });
        this.timeline.add(s);
        var _a;
    };
    HeaderItemRight.prototype.createCircle = function () {
        var s = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Shape"]({
            shape: 'circle',
            left: -40,
            parent: this.el,
            delay: 7 * 300,
            fill: '#494949',
            top: 125,
            radius: (_a = {}, _a[0] = 5, _a)
        });
        this.timeline.add(s);
        var _a;
    };
    HeaderItemRight.prototype.initShapes = function () {
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderRightHeader1', BorderRightHeader1);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderRightHeader2', BorderRightHeader2);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderRightHeader3', BorderRightHeader3);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderRightHeader4', BorderRightHeader4);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderRightHeader5', BorderRightHeader5);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderRightHeader6', BorderRightHeader6);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderRightHeader7', BorderRightHeader7);
        this.shapeArr.push({
            name: 'BorderRightHeader1',
            stroke: 2,
            path: "M311.9,23 395,94.4 395," + window.innerHeight
        }, {
            name: 'BorderRightHeader2',
            stroke: 3,
            path: "M403.5," + window.innerHeight + " 403.5,87 310,8.5"
        }, {
            name: 'BorderRightHeader3',
            stroke: 2,
            path: 'M70,23h277l78.9,65.2c-1.1-0.4-2.3-0.6-3.5-0.6c-5.6,0-10.2,4.2-10.7,9.8l0.3-55.1'
        }, {
            name: 'BorderRightHeader4',
            stroke: 2,
            path: "M422," + window.innerHeight + "V104"
        }, {
            name: 'BorderRightHeader5',
            stroke: 2,
            path: "M432," + window.innerHeight + "V106l-0.4,0.4c-7.8,7.9-12,8-19.3-0.8l-0.4-0.4V" + window.innerHeight
        }, {
            name: 'BorderRightHeader6',
            stroke: 5,
            path: "M" + __WEBPACK_IMPORTED_MODULE_3__core_utils_measure__["b" /* TOP_BORDER_RIGHT_LEFT_2 */] + ",10.2 373.6,9.9 441.5,67.1 441.5," + window.innerHeight
        }, {
            name: 'BorderRightHeader7',
            stroke: 2,
            path: "M" + __WEBPACK_IMPORTED_MODULE_3__core_utils_measure__["a" /* TOP_BORDER_RIGHT_LEFT_1 */] + ",1 339,1 451,95.1 451," + window.innerHeight
        });
    };
    HeaderItemRight.prototype.BorderRightHeader1 = function () {
        var svg = new BorderRightHeader1();
    };
    return HeaderItemRight;
}());

var BorderRightHeader1 = (function (_super) {
    __extends(BorderRightHeader1, _super);
    function BorderRightHeader1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderRightHeader1.prototype.getShape = function () {
        return "<path  transform=\"translate(-300)\" id=\"line1\" class=\"st0\" d=\"M311.9,23 395,94.4 395," + window.innerHeight + "\"/>";
    };
    return BorderRightHeader1;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderRightHeader2 = (function (_super) {
    __extends(BorderRightHeader2, _super);
    function BorderRightHeader2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderRightHeader2.prototype.getShape = function () {
        return "<path  transform=\"translate(-300)\" id=\"line2\" class=\"st2\" d=\"M403.5," + window.innerHeight + " 403.5,87 310,8.5\"/>";
    };
    return BorderRightHeader2;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderRightHeader3 = (function (_super) {
    __extends(BorderRightHeader3, _super);
    function BorderRightHeader3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderRightHeader3.prototype.getShape = function () {
        return "<path  transform=\"translate(-300)\" id=\"line3\" class=\"st0\" d=\"M70,23h277l78.9,65.2c-1.1-0.4-2.3-0.6-3.5-0.6c-5.6,0-10.2,4.2-10.7,9.8l0.3-55.1\"/>";
    };
    return BorderRightHeader3;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderRightHeader4 = (function (_super) {
    __extends(BorderRightHeader4, _super);
    function BorderRightHeader4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderRightHeader4.prototype.getShape = function () {
        return "<path  transform=\"translate(-300)\" id=\"line4\" class=\"st0\" d=\"M422," + window.innerHeight + "V104\"/>";
    };
    return BorderRightHeader4;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderRightHeader5 = (function (_super) {
    __extends(BorderRightHeader5, _super);
    function BorderRightHeader5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderRightHeader5.prototype.getShape = function () {
        return "<path  transform=\"translate(-300)\" id=\"line5\" class=\"st0\" d=\"M432," + window.innerHeight + "V106l-0.4,0.4c-7.8,7.9-12,8-19.3-0.8l-0.4-0.4V" + window.innerHeight + "\"/>";
    };
    return BorderRightHeader5;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderRightHeader6 = (function (_super) {
    __extends(BorderRightHeader6, _super);
    function BorderRightHeader6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderRightHeader6.prototype.getShape = function () {
        return "<path  transform=\"translate(-300)\" id=\"line6\" class=\"st1\" d=\"M" + __WEBPACK_IMPORTED_MODULE_3__core_utils_measure__["b" /* TOP_BORDER_RIGHT_LEFT_2 */] + ",10.2 373.6,9.9 441.5,67.1 441.5," + window.innerHeight + "\"/>";
    };
    return BorderRightHeader6;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderRightHeader7 = (function (_super) {
    __extends(BorderRightHeader7, _super);
    function BorderRightHeader7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderRightHeader7.prototype.getShape = function () {
        return "<path  transform=\"translate(-300)\" id=\"line7\" class=\"st0\" d=\"M1,1 339,1 451,95.1 451," + window.innerHeight + "\"/>";
    };
    return BorderRightHeader7;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
//# sourceMappingURL=border-right-shape.js.map

/***/ }),

/***/ "../../../../../src/app/shapes/border-top--left-shape.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderItemTopLeft; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mo_js__ = __webpack_require__("../../../../mo-js/build/mo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mo_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mo_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_animations_stroke_dasharray__ = __webpack_require__("../../../../../src/app/core/animations/stroke-dasharray.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_consts_timings__ = __webpack_require__("../../../../../src/app/core/consts/timings.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var HeaderItemTopLeft = (function () {
    function HeaderItemTopLeft(el) {
        var _this = this;
        this.shapeArr = [];
        this.initShapes();
        this.el = el;
        this.timeline = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Timeline"]({ delay: __WEBPACK_IMPORTED_MODULE_2__core_consts_timings__["a" /* BORDER_TIME_DELAY */] });
        this.shapeArr.forEach(function (e, i) {
            _this.createShape(e.name, e.stroke, e.path, i, e.round);
        });
        this.timeline.play();
    }
    HeaderItemTopLeft.prototype.createShape = function (name, stroke, path, index, round) {
        var strokeDashArray = new __WEBPACK_IMPORTED_MODULE_1__core_animations_stroke_dasharray__["a" /* StrokeDashArray */](path);
        var startPosition = strokeDashArray.getPosition('0%', '0%', 1);
        var endPosition = strokeDashArray.getPosition('0%', '100%', 1);
        var s = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Shape"]({
            shape: name,
            isShowEnd: true,
            isShowStart: true,
            parent: this.el,
            strokeLinecap: round ? 'round' : null,
            delay: index * 150,
            fill: 'transparent',
            stroke: '#494949',
            strokeWidth: stroke,
            strokeDashoffset: strokeDashArray.length * 2,
            strokeDasharray: (_a = {}, _a[startPosition] = endPosition, _a),
            scale: 1,
            origin: '0% 0%',
            top: 10,
            left: 10,
            x: 35,
            y: 35,
            duration: 1200,
            width: 70,
            height: 70
        });
        this.timeline.add(s);
        var _a;
    };
    HeaderItemTopLeft.prototype.initShapes = function () {
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader1', BorderLeftHeader1);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader2', BorderLeftHeader2);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader3', BorderLeftHeader3);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader4', BorderLeftHeader4);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader5', BorderLeftHeader5);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader6', BorderLeftHeader6);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader7', BorderLeftHeader7);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader8', BorderLeftHeader8);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader9', BorderLeftHeader9);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader10', BorderLeftHeader10);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader11', BorderLeftHeader11);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader12', BorderLeftHeader12);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BorderLeftHeader13', BorderLeftHeader13);
        this.shapeArr.push({
            name: 'BorderLeftHeader1',
            stroke: 1,
            round: true,
            path: "M13.5,13.6 20.5,20.6 30,21.2 36,25.9 30.8,25.8 30,21.2 25.5,25.7 30.8,25.8 32.2,32.4 25.5,25.7 32.2,32.4 25.4,31 25.5,35.8 21,30.3 25.4,31 25.5,25.7 21,30.3 20.5,20.6 25.5,25.7"
        }, {
            name: 'BorderLeftHeader2',
            stroke: 1,
            path: 'M13.8,33 13.8,13.8 32.8,13.8'
        }, { name: 'BorderLeftHeader3', stroke: 1.5, path: 'M7.9,67V17.1' }, {
            name: 'BorderLeftHeader4',
            stroke: 1.5,
            path: 'M4.9,0L4.7,61.1c0,0.2,0.2,0.3,0.3,0.1l2.7-4.1C7.9,57,8,57,8.1,57.1l2.7,4.1c0.1,0.1,0.3,0.1,0.3-0.1 L11,0'
        }, { name: 'BorderLeftHeader5', stroke: 1.5, path: 'M-1.4,7.5' }, { name: 'BorderLeftHeader6', stroke: 1.5, path: 'M15.8,4.5' }, { name: 'BorderLeftHeader7', stroke: 1.5, path: 'M15.8,10.6' }, { name: 'BorderLeftHeader8', stroke: 1.5, path: 'M17.1,7.8H67' }, {
            name: 'BorderLeftHeader9',
            stroke: 2,
            path: 'M0,10.9L61.1,11c0.2,0,0.3-0.2,0.1-0.3L57.1,8c-0.1-0.1-0.1-0.2,0-0.3l4.1-2.7c0.1-0.1,0.1-0.3-0.1-0.3 L0,4.8'
        }, { name: 'BorderLeftHeader10', stroke: 1.5, path: 'M7.8,17.1' }, { name: 'BorderLeftHeader11', stroke: 1.5, path: 'M4.7,0' }, { name: 'BorderLeftHeader12', stroke: 1.5, path: 'M10.8,0' }, {
            name: 'BorderLeftHeader13',
            stroke: 2,
            path: 'M1.1,47.4 1.1,0.9 47.2,0.9'
        });
    };
    return HeaderItemTopLeft;
}());

// Lines
var BorderLeftHeader1 = (function (_super) {
    __extends(BorderLeftHeader1, _super);
    function BorderLeftHeader1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader1.prototype.getShape = function () {
        return "<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10 transform=translate(15,15) class=\"st0\" d=\"M13.5,13.6 20.5,20.6 30,21.2 36,25.9 30.8,25.8 30,21.2 25.5,25.7 30.8,25.8 32.2,32.4\n\t25.5,25.7 32.2,32.4 25.4,31 25.5,35.8 21,30.3 25.4,31 25.5,25.7 21,30.3 20.5,20.6 25.5,25.7\"/>";
    };
    return BorderLeftHeader1;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader2 = (function (_super) {
    __extends(BorderLeftHeader2, _super);
    function BorderLeftHeader2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader2.prototype.getShape = function () {
        return "<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) id=\"group-15\" class=\"st0\" d=\"M13.8,33 13.8,13.8 32.8,13.8\"/>";
    };
    return BorderLeftHeader2;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader3 = (function (_super) {
    __extends(BorderLeftHeader3, _super);
    function BorderLeftHeader3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader3.prototype.getShape = function () {
        return "<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) class=\"st0\" d=\"M7.9,67V17.1\"/>";
    };
    return BorderLeftHeader3;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader4 = (function (_super) {
    __extends(BorderLeftHeader4, _super);
    function BorderLeftHeader4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader4.prototype.getShape = function () {
        return "<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) id=\"group-13\" class=\"st0\" d=\"M4.9,0L4.7,61.1c0,0.2,0.2,0.3,0.3,0.1l2.7-4.1C7.9,57,8,57,8.1,57.1l2.7,4.1c0.1,0.1,0.3,0.1,0.3-0.1\n\tL11,0\"/>";
    };
    return BorderLeftHeader4;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader5 = (function (_super) {
    __extends(BorderLeftHeader5, _super);
    function BorderLeftHeader5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader5.prototype.getShape = function () {
        return "<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) d=\"M-1.4,7.5\"></path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10 >";
    };
    return BorderLeftHeader5;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader6 = (function (_super) {
    __extends(BorderLeftHeader6, _super);
    function BorderLeftHeader6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader6.prototype.getShape = function () {
        return "<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) class=\"st0\" d=\"M15.8,4.5\"/>";
    };
    return BorderLeftHeader6;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader7 = (function (_super) {
    __extends(BorderLeftHeader7, _super);
    function BorderLeftHeader7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader7.prototype.getShape = function () {
        return "<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) id=\"group-10\" class=\"st0\" d=\"M15.8,10.6\"/>";
    };
    return BorderLeftHeader7;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader8 = (function (_super) {
    __extends(BorderLeftHeader8, _super);
    function BorderLeftHeader8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader8.prototype.getShape = function () {
        return "<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) class=\"st0\" d=\"M17.1,7.8H67\"/>";
    };
    return BorderLeftHeader8;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader9 = (function (_super) {
    __extends(BorderLeftHeader9, _super);
    function BorderLeftHeader9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader9.prototype.getShape = function () {
        return "<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) class=\"st0\" d=\"M0,10.9L61.1,11c0.2,0,0.3-0.2,0.1-0.3L57.1,8c-0.1-0.1-0.1-0.2,0-0.3l4.1-2.7c0.1-0.1,0.1-0.3-0.1-0.3\n\tL0,4.8\"/>";
    };
    return BorderLeftHeader9;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader10 = (function (_super) {
    __extends(BorderLeftHeader10, _super);
    function BorderLeftHeader10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader10.prototype.getShape = function () {
        return "<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) class=\"st0\" d=\"M7.8,17.1\"/>";
    };
    return BorderLeftHeader10;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader11 = (function (_super) {
    __extends(BorderLeftHeader11, _super);
    function BorderLeftHeader11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader11.prototype.getShape = function () {
        return "<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) class=\"st0\" d=\"M4.7,0\"/>";
    };
    return BorderLeftHeader11;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader12 = (function (_super) {
    __extends(BorderLeftHeader12, _super);
    function BorderLeftHeader12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader12.prototype.getShape = function () {
        return "<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) class=\"st0\" d=\"M10.8,0\"/>";
    };
    return BorderLeftHeader12;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BorderLeftHeader13 = (function (_super) {
    __extends(BorderLeftHeader13, _super);
    function BorderLeftHeader13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BorderLeftHeader13.prototype.getShape = function () {
        return "<path stroke-miterlimit=10  transform=translate(15,15) class=\"st0\" d=\"M1.1,47.4 1.1,0.9 47.2,0.9\"/>";
    };
    return BorderLeftHeader13;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
//# sourceMappingURL=border-top--left-shape.js.map

/***/ }),

/***/ "../../../../../src/app/shapes/chandelier-shape.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chandelier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mo_js__ = __webpack_require__("../../../../mo-js/build/mo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mo_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mo_js__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var extremeInElasticOutEasing = __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].path('M0,100 C50,100 50,100 50,50 C50,-15.815625 53.7148438,-19.1218754 60.4981394,0 C62.2625924,4.97393188 66.4286578,6.07928485 68.3303467,0 C71.3633751,-6.23011049 74.5489919,-1.10166123 75.7012545,0 C79.6946191,3.60945678 84.2063904,-0.104182975 84.2063905,0 C87.5409362,-2.25875668 90.4589294,-0.0327241098 93.4950242,0 C97.3271182,0.20445262 100,-0.104182352 100,0');
var Chandelier = (function () {
    function Chandelier(el) {
        var _this = this;
        this.shapeArr = [];
        this.initShapes();
        this.el = el;
        this.timeline = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Timeline"]();
        this.shapeArr.forEach(function (e, i) {
            _this.createShape(e.name, e.stroke, e.path, i, e.round);
        });
        this.createAmpersand();
        this.timeline.play();
    }
    Chandelier.prototype.createShape = function (name, stroke, path, index, round) {
        var angle = ['rand(-50,-70)'];
        var repeatCount = 0;
        var rPositions = [
            [-100, 100, 50],
            [-75, 75, 25],
            [-50, 50, 20],
            [-30, 30, 20],
            [-10, 10, 10],
            [0, 0]
        ];
        var mql = window.matchMedia('(max-width:499px)').matches;
        var height = window.innerHeight;
        var top = 180;
        if (mql) {
            top = 100;
            height = window.innerHeight - 50;
        }
        var lPos = -100;
        var flip1 = false;
        var s = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Shape"]({
            shape: name,
            className: 'chandelier-shape',
            isShowEnd: true,
            isShowStart: true,
            parent: this.el,
            strokeLinecap: round ? 'round' : null,
            fill: '#333232',
            strokeWidth: stroke,
            scale: 0.7,
            top: 0,
            origin: '50% 0%',
            left: '50%',
            angle: -10,
            x: 0,
            y: window.innerHeight + 280,
            repeat: 0,
            isYoyo: true,
            duration: 0,
            width: 286,
            height: 264
        })
            .then({
            // delay: 7000,
            duration: 4000,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].ease.inout,
            angle: { '-40': 50 },
            y: { to: top }
        })
            .then({
            duration: 1200,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].cubic.inout,
            angle: { to: -30 }
        })
            .then({
            duration: 1200,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].cubic.inout,
            angle: { to: 20 }
        })
            .then({
            duration: 1200,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].cubic.inout,
            angle: { to: -10 }
        })
            .then({
            duration: 1200,
            angle: { to: 0 }
        });
        this.timeline.add(s);
    };
    Chandelier.prototype.initShapes = function () {
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('ChandlierShape', ChandlierShape);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('Ampersand', Ampersand);
        this.shapeArr.push({
            name: 'ChandlierShape',
            stroke: 1,
            round: true,
            path: null
        });
    };
    Chandelier.prototype.createAmpersand = function () {
        var mql = window.matchMedia('(max-width:499px)').matches;
        var height = window.innerHeight;
        var top = 185;
        if (mql) {
            top = 105;
        }
        var s = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Shape"]({
            shape: 'Ampersand',
            fill: '#333232',
            stroke: 'none',
            parent: this.el,
            fillOpacity: { 0: 1 },
            top: 140,
            origin: '50% -180px',
            left: '50%',
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].cubic.inout,
            duration: 0,
            width: 412,
            height: 203,
            y: window.innerHeight + 280,
            x: -16,
            scale: 1,
            isShowStart: true
        })
            .then({
            duration: 4000,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].ease.inout,
            angle: { '-40': 50 },
            y: { to: top }
        })
            .then({
            duration: 1200,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].cubic.inout,
            angle: { to: -30 }
        })
            .then({
            duration: 1200,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].cubic.inout,
            angle: { to: 20 }
        })
            .then({
            duration: 1200,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].cubic.inout,
            angle: { to: -10 }
        })
            .then({
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].cubic.inout,
            duration: 500,
            angle: { to: 0 },
            top: window.innerHeight / 2,
            x: { to: 0 },
            y: { to: -5 }
        });
        this.timeline.add(s);
    };
    return Chandelier;
}());

var Ampersand = (function (_super) {
    __extends(Ampersand, _super);
    function Ampersand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ampersand.prototype.getShape = function () {
        return "<path id=\"ampersand\" transform=\"translate(-155, -51.5)\" class=\"st0\" d=\"M212.6,34.5c-1.2-1-2.8-1.4-4.3-1.2c-0.2-2.1-0.5-4.3-0.8-6.7l3.7-2.5\n\t\t\tc8.4-5.6,5.7-19.6,3.8-23.4c-9.3,5.4-9.9,16.1-9.5,22.5c-2.7,2-5.6,3.9-8.4,6.2c-4.8,3.9-4.3,10.6-3,13.9\n\t\t\tc2.6,5.2,8.5,7.9,14.1,6.5c0.2,2.1,0.1,4.2-0.4,6.2c-1.4,3.9-6.1,3.7-7,2.4c2.1,0.3,3.7-2,3.5-3.8c-0.2-2-2-3.5-4-3.3\n\t\t\tc-0.1,0-0.1,0-0.2,0c-1.9,0.4-3.4,2.3-3.1,5s4.5,4.9,9,3.3c3.8-1.3,3.9-6.6,3.6-10.5l0.2-0.1C218.3,45.8,216.3,37.3,212.6,34.5z\n\t\t\t M214.6,3.6c3.2,8.9-1.3,13.8-7.7,18.6C206.1,15.1,209,8,214.6,3.6z M203.9,48.5c-3.6-0.2-6.8-2.7-7.7-8.9\n\t\t\tc-0.6-4.1,3.9-7.9,9.8-12v0.2c0.1,0.9,0.4,3,0.7,5.8c-1.8,0.5-3.4,1.8-4.3,3.4c-0.9,2.2-0.9,5.5,2.3,8.8c-2.1-3.1-1-6.9,1.2-8.1\n\t\t\tc0.4-0.2,0.8-0.3,1.2-0.4c0.4,3.4,0.8,7.2,0.9,10.5C206.8,48.3,205.3,48.5,203.9,48.5z M212.8,42.7c-0.1,2-1.4,3.8-3.2,4.5l0,0\n\t\t\tc-0.2-2-0.4-5.4-0.9-9.8C211.2,37.9,212.9,40.2,212.8,42.7L212.8,42.7z\"/>";
    };
    return Ampersand;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var ChandlierShape = (function (_super) {
    __extends(ChandlierShape, _super);
    function ChandlierShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChandlierShape.prototype.getShape = function () {
        return "<path transform=translate(-93,-82) class=\"st0\" d=\"M43.6,190.9c0,0-0.1,0-0.2,0C43.5,190.9,43.5,190.9,43.6,190.9z M131.9,163c0.6,1,2,2.5,2.4,2.9\n\tc0.1,0.1,0.3,0.2,0.4,0.4c-0.6,0.3-1,0.8-1,1.5c0,0.8,0.6,1.5,1.4,1.6c-0.3,0.1-0.6,0.4-0.6,0.7c0,0.4,0.3,0.8,0.8,0.8\n\tc0.4,0,0.8-0.3,0.8-0.8c0-0.4-0.3-0.7-0.6-0.7c0.8-0.1,1.5-0.8,1.5-1.6c0-0.7-0.4-1.2-1-1.5c0.1-0.1,0.3-0.2,0.4-0.4\n\tc0.4-0.3,1.8-1.9,2.4-2.9c0.6-1,1.3-3.7,1.2-4.9c-0.1-1.3-0.6-2.8-0.6-2.8s1.2,0.5,2.2,0.6c1.1,0.1,3,0.1,3,0.1s-2-0.3-3.2-0.9\n\tc-1.2-0.7-2.3-1.8-3.9-3.7c-1.7-1.9-2.2-3.7-2.2-3.7h-0.1c0,0-0.5,1.8-2.2,3.7c-1.7,1.9-2.8,3-3.9,3.7c-1.2,0.7-3.2,0.9-3.2,0.9\n\ts1.9,0,3-0.1c1.1-0.1,2.2-0.6,2.2-0.6s-0.5,1.5-0.6,2.8C130.6,159.4,131.3,162,131.9,163z M92.6,232.4c0,0.4,0.3,0.7,0.7,0.7\n\tc-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7\n\tc0-0.3-0.2-0.6-0.4-0.7c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.8-0.9,1.1-1.3c0.3-0.5,0.6-1.7,0.6-2.3c0-0.6-0.3-1.3-0.3-1.3\n\ts0.5,0.2,1,0.3c0.5,0,1.4,0,1.4,0s-0.9-0.1-1.5-0.4c-0.5-0.3-1.1-0.8-1.8-1.7c-0.6-0.6-0.8-1.2-0.9-1.5c0.2,0,0.4-0.2,0.4-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.2,0.4,0.4,0.5c-0.1,0.3-0.4,0.9-0.9,1.6c-0.8,0.9-1.3,1.4-1.8,1.7\n\tc-0.5,0.3-1.5,0.4-1.5,0.4s0.9,0,1.4,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3c0,0.6,0.3,1.8,0.6,2.3c0.3,0.5,0.9,1.2,1.1,1.3\n\tc0.1,0.1,0.1,0.1,0.2,0.2C92.7,231.8,92.6,232,92.6,232.4z M97.9,224.7c0,0-0.2,0.7-0.3,1.3c0,0.6,0.3,1.8,0.6,2.3\n\tc0.3,0.5,0.9,1.2,1.1,1.3c0.1,0,0.1,0.1,0.2,0.2c-0.3,0.1-0.4,0.4-0.4,0.7c0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3\n\tc0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7\n\tc0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.8-0.9,1.1-1.3c0.3-0.5,0.6-1.7,0.6-2.3c0-0.6-0.3-1.3-0.3-1.3s0.5,0.2,1,0.3c0.5,0,1.4,0,1.4,0\n\ts-0.9-0.1-1.5-0.4c-0.5-0.3-1.1-0.8-1.8-1.7c-0.8-0.9-1-1.7-1-1.7h0c0,0-0.2,0.8-1,1.7c-0.8,0.9-1.3,1.4-1.8,1.7\n\tc-0.5,0.3-1.5,0.4-1.5,0.4s0.9,0,1.4,0C97.4,225,97.9,224.7,97.9,224.7z M61.8,232.5c0.1,0.1,0.1,0.1,0.2,0.2\n\tc-0.3,0.1-0.4,0.4-0.4,0.7c0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4\n\tc0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.9-0.9,1.1-1.3\n\tc0.3-0.5,0.6-1.7,0.6-2.3c0-0.6-0.3-1.3-0.3-1.3s0.5,0.2,1,0.3c0.5,0,1.4,0,1.4,0s-0.9-0.1-1.5-0.4c-0.5-0.3-1.1-0.8-1.8-1.7\n\tc-0.3-0.4-0.5-0.7-0.7-1c0.1-0.1,0.2-0.2,0.2-0.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.1,0.1,0.3,0.2,0.4\n\tc-0.2,0.3-0.4,0.7-0.7,1c-0.8,0.9-1.3,1.4-1.8,1.7c-0.5,0.3-1.5,0.4-1.5,0.4s0.9,0,1.4,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3\n\tc0,0.6,0.3,1.8,0.6,2.3C60.9,231.6,61.6,232.3,61.8,232.5z M65.6,237c-0.7,0.4-1.9,0.6-1.9,0.6s1.1,0,1.8,0c0.6,0,1.3-0.3,1.3-0.3\n\ts-0.3,0.9-0.3,1.6c0,0.8,0.4,2.3,0.7,2.9c0.3,0.6,1.2,1.5,1.4,1.7c0.1,0.1,0.2,0.1,0.2,0.2c-0.3,0.1-0.6,0.5-0.6,0.9\n\tc0,0.5,0.4,0.9,0.8,0.9c-0.2,0-0.4,0.2-0.4,0.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.2-0.2-0.4-0.4-0.4\n\tc0.5,0,0.9-0.5,0.9-1c0-0.4-0.2-0.7-0.6-0.9c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,1.1-1.1,1.4-1.7c0.3-0.6,0.8-2.2,0.7-2.9\n\tc0-0.8-0.3-1.6-0.3-1.6s0.7,0.3,1.3,0.3c0.2,0,0.4,0,0.6,0c0.3,1,0.6,1.9,0.9,2.4c0.6,1.1,2.3,2.9,2.7,3.3c0.1,0.1,0.3,0.3,0.4,0.4\n\tc-0.7,0.3-1.1,0.9-1.1,1.7c0,1,0.7,1.7,1.6,1.8c-0.4,0.1-0.7,0.4-0.7,0.9c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9\n\tc0-0.4-0.3-0.8-0.7-0.8c0.9-0.1,1.7-0.9,1.7-1.8c0-0.8-0.5-1.4-1.1-1.7c0.1-0.1,0.3-0.3,0.4-0.4c0.4-0.4,2.1-2.2,2.7-3.3\n\tc0.5-1,1.2-3.3,1.4-4.9c0.3,0,0.7,0,1,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3c0,0.6,0.3,1.8,0.6,2.3c0.3,0.5,0.9,1.2,1.1,1.3\n\tc0.1,0.1,0.1,0.1,0.2,0.2c-0.3,0.1-0.4,0.4-0.4,0.7c0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4\n\tc0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7c0.1-0.1,0.1-0.1,0.2-0.2\n\tc0.2-0.2,0.9-0.9,1.1-1.3c0.3-0.5,0.6-1.7,0.6-2.3c0-0.6-0.3-1.3-0.3-1.3s0.5,0.2,1,0.3c0.5,0,1.4,0,1.4,0s-0.9-0.1-1.5-0.4\n\tc-0.5-0.3-1.1-0.8-1.8-1.7c-0.4-0.4-0.6-0.8-0.8-1.1c0.7,0,1.2,0,1.2,0s-0.6-0.1-1.3-0.3c0,0,0,0,0-0.1c0.2-0.1,0.3-0.2,0.3-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5S87,230.8,87,231c0,0.2,0.1,0.4,0.3,0.4c-0.6-0.2-1.4-0.4-1.9-0.7c-1.3-0.8-2.6-2-4.5-4.2\n\tc-1.5-1.7-2.2-3.4-2.4-4c0.2-0.1,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.1,0.4,0.3,0.5\n\tc-0.2,0.6-0.9,2.3-2.4,4c-1.9,2.2-3.2,3.4-4.5,4.2c-0.5,0.3-1,0.5-1.6,0.6c0,0,0-0.1,0-0.2c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.1,0.1,0.3,0.2,0.4c-0.7,0.2-1.3,0.2-1.3,0.2s2.2,0,3.4-0.1c1.2-0.1,2.5-0.6,2.5-0.6s-0.6,1.7-0.6,3.2\n\tc0,0.7,0.2,1.9,0.4,3c-0.2-0.1-0.4-0.2-0.6-0.3c-0.7-0.4-1.3-1-2.3-2.2c-0.8-0.9-1.1-1.7-1.2-2c0.2,0,0.4-0.2,0.4-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.2,0.4,0.4,0.5c-0.1,0.3-0.5,1.2-1.2,2C67,235.9,66.3,236.6,65.6,237z\n\t M83,231.1c0,0,1.3,0.6,2.5,0.6c0.5,0,1.1,0,1.7,0c-0.2,0.3-0.4,0.7-0.8,1.2c-0.8,0.9-1.3,1.4-1.8,1.7c-0.3,0.2-0.7,0.3-1.1,0.4\n\tc0-0.3,0-0.5,0-0.7C83.6,232.8,83,231.1,83,231.1z M51.4,236.1c-0.7,0.4-1.9,0.6-1.9,0.6s1.1,0,1.8,0c0.6,0,1.3-0.3,1.3-0.3\n\ts-0.3,0.9-0.3,1.6c0,0.8,0.4,2.3,0.7,2.9c0.3,0.6,1.2,1.5,1.4,1.7c0.1,0.1,0.2,0.1,0.2,0.2c-0.3,0.1-0.6,0.5-0.6,0.9\n\tc0,0.5,0.4,0.9,0.8,1c-0.2,0-0.4,0.2-0.4,0.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.2-0.2-0.4-0.4-0.4\n\tc0.5,0,0.9-0.5,0.9-1c0-0.4-0.2-0.7-0.6-0.9c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,1.1-1.1,1.4-1.7c0.3-0.6,0.8-2.2,0.7-2.9\n\tc0-0.8-0.3-1.6-0.3-1.6s0.7,0.3,1.3,0.3c0.6,0,1.8,0,1.8,0s-1.2-0.2-1.9-0.6c-0.7-0.4-1.3-1-2.3-2.2c-0.7-0.8-1-1.5-1.2-1.9\n\tc0.2-0.1,0.3-0.2,0.3-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.2,0.4,0.4,0.5c-0.2,0.4-0.5,1.1-1.2,1.9\n\tC52.8,235,52.1,235.7,51.4,236.1z M26.8,218c-0.5,0.3-1.5,0.4-1.5,0.4s0.9,0,1.4,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3\n\tc0,0.6,0.3,1.8,0.6,2.3c0.3,0.5,0.9,1.2,1.1,1.3c0.1,0.1,0.1,0.1,0.2,0.2c-0.3,0.1-0.4,0.4-0.4,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7\n\tc0-0.3-0.2-0.6-0.4-0.7c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.8-0.9,1.1-1.3c0.3,0,0.9,0,1.2,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3\n\tc0,0.6,0.3,1.8,0.6,2.3c0.3,0.5,0.9,1.2,1.1,1.3c0.1,0,0.1,0.1,0.2,0.2c-0.3,0.1-0.4,0.4-0.4,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7\n\tc0-0.3-0.2-0.6-0.4-0.7c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.1,0.7-0.8,1-1.2c0.7,0,1.5,0,2.1-0.1c1.2-0.1,2.5-0.6,2.5-0.6\n\ts-0.6,1.7-0.6,3.2c-0.1,1.5,0.8,4.5,1.4,5.7c0.6,1.1,2.3,2.9,2.7,3.3c0.1,0.1,0.3,0.3,0.4,0.4c-0.7,0.3-1.1,0.9-1.1,1.7\n\tc0,1,0.7,1.7,1.6,1.8c-0.4,0.1-0.7,0.4-0.7,0.8c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9c0-0.4-0.3-0.8-0.7-0.8\n\tc0.9-0.1,1.7-0.9,1.7-1.8c0-0.8-0.5-1.4-1.1-1.7c0.1-0.1,0.3-0.3,0.4-0.4c0.4-0.4,2.1-2.2,2.7-3.3c0.6-1.1,1.5-4.2,1.4-5.7\n\tc-0.1-1.5-0.6-3.2-0.6-3.2s1.3,0.6,2.5,0.6c0.3,0,0.8,0,1.2,0c0.1,0.2,0.2,0.3,0.4,0.3c0.2,0,0.3-0.1,0.4-0.3c0.8,0,1.4,0,1.4,0\n\ts-0.6-0.1-1.3-0.3c0-0.3-0.2-0.5-0.5-0.5c-0.2,0-0.3,0.1-0.4,0.2c-0.5-0.2-1-0.3-1.4-0.6c-1.3-0.8-2.6-2-4.5-4.2\n\tc-1.6-1.8-2.3-3.6-2.4-4.1c0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.2,0.4,0.4,0.5\n\tc-0.2,0.5-0.8,2.3-2.4,4.1c-1.9,2.2-3.2,3.4-4.5,4.2c-0.6,0.3-1.4,0.6-2.1,0.8c0.2-0.6,0.5-1.6,0.5-2.1c0-0.6-0.3-1.3-0.3-1.3\n\ts0.5,0.2,1,0.3c0.5,0,1.4,0,1.4,0s-0.9-0.1-1.5-0.4c-0.5-0.3-1.1-0.8-1.8-1.7c-0.2-0.2-0.3-0.4-0.4-0.6c0.1-0.1,0.1-0.2,0.1-0.3\n\tc0-0.3-0.2-0.5-0.5-0.5c0,0,0,0-0.1,0c0-0.1,0-0.1-0.1-0.2c0,0,0.1,0,0.1,0c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.1,0.3,0.2,0.4c-0.1,0.3-0.4,0.9-1,1.6c-0.8,0.9-1.3,1.4-1.8,1.7c-0.4,0.2-1,0.3-1.3,0.4\n\tc0.3-0.5,0.6-1.7,0.6-2.3c0-0.6-0.3-1.3-0.3-1.3s0.5,0.2,1,0.3c0.5,0,1.4,0,1.4,0s-0.9-0.1-1.5-0.4c-0.5-0.3-1.1-0.8-1.8-1.7\n\tc-0.5-0.5-0.8-1.1-0.9-1.4c0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.1,0.4,0.3,0.5\n\tc-0.1,0.3-0.4,0.9-0.9,1.4C27.9,217.2,27.4,217.7,26.8,218z M21.7,212.7c-0.5,0.3-1.5,0.4-1.5,0.4s0.9,0,1.4,0c0.5,0,1-0.3,1-0.3\n\ts-0.2,0.7-0.3,1.3c0,0.6,0.3,1.8,0.6,2.3c0.3,0.5,0.9,1.2,1.1,1.3c0.1,0.1,0.1,0.1,0.2,0.2c-0.3,0.1-0.4,0.4-0.4,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3\n\tc0.4,0,0.7-0.4,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.9-0.9,1.1-1.3c0.3-0.5,0.6-1.7,0.6-2.3\n\tc0-0.6-0.3-1.3-0.3-1.3s0.5,0.2,1,0.3c0.5,0,1.4,0,1.4,0s-0.9-0.1-1.5-0.4c-0.5-0.3-1.1-0.8-1.8-1.7c-0.5-0.5-0.7-1-0.9-1.4\n\tc0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.1,0.4,0.3,0.4c-0.1,0.3-0.4,0.9-0.9,1.4\n\tC22.7,211.9,22.2,212.4,21.7,212.7z M47.2,163.1c0.3,0,0.6-0.2,0.6-0.2s-0.1,0.4-0.2,0.8c0,0.4,0.2,1.1,0.3,1.4\n\tc0.2,0.3,0.6,0.7,0.7,0.8c0,0,0.1,0.1,0.1,0.1c-0.2,0.1-0.3,0.2-0.3,0.4c0,0.2,0.2,0.4,0.4,0.4c-0.1,0-0.2,0.1-0.2,0.2\n\tc0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.2-0.1,0.2-0.2c0-0.1-0.1-0.2-0.2-0.2c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.4\n\tc0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.5-0.5,0.7-0.8c0.2-0.3,0.4-1,0.3-1.4c0-0.4-0.2-0.8-0.2-0.8s0.3,0.1,0.6,0.2c0.1,0,0.3,0,0.4,0\n\tc0,0.2,0.2,0.4,0.5,0.4c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c-0.1,0-0.3-0.1-0.4-0.2\n\tc-0.3-0.2-0.6-0.5-1.1-1c-0.3-0.3-0.4-0.6-0.5-0.8c0.2-0.1,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.2,0.2,0.4,0.4,0.5c-0.1,0.2-0.2,0.5-0.5,0.8c-0.5,0.5-0.8,0.8-1.1,1c-0.3,0.2-0.9,0.3-0.9,0.3S46.9,163.1,47.2,163.1z\n\t M49.8,168.1c0.3,0,0.6-0.2,0.6-0.2s-0.1,0.4-0.2,0.8c0,0.4,0.2,1.1,0.3,1.4c0.2,0.3,0.6,0.7,0.7,0.8c0,0,0.1,0.1,0.1,0.1\n\tc-0.2,0.1-0.3,0.2-0.3,0.4c0,0.2,0.2,0.4,0.4,0.4c-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.2-0.1,0.2-0.2\n\tc0-0.1-0.1-0.2-0.2-0.2c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.4c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.5-0.5,0.7-0.8\n\tc0.2-0.3,0.4-1,0.3-1.4c0-0.4-0.2-0.8-0.2-0.8s0.3,0.1,0.6,0.2c0.3,0,0.8,0,0.8,0s-0.6-0.1-0.9-0.3c-0.3-0.2-0.6-0.5-1.1-1\n\tc-0.5-0.5-0.6-1-0.6-1h0c0,0-0.1,0.5-0.6,1c-0.5,0.5-0.8,0.8-1.1,1c-0.3,0.2-0.9,0.3-0.9,0.3S49.5,168.1,49.8,168.1z M1.9,182.7\n\tc0.6,1.7,5.4,8.1,8.3,9.7c2.9,1.6,7.9,3.2,10.2,3.1c1.6-0.1,3-0.3,3.7-0.5c0,0.3,0.2,0.5,0.5,0.5c0.2,0,0.3-0.1,0.4-0.2\n\tc0.8,0.8,2.6,2.7,4.6,4.5c-0.2,0.1-0.3,0.2-0.3,0.4c0,0.3,0.2,0.5,0.5,0.5c0.2,0,0.4-0.1,0.5-0.3c0.6,0.6,1.2,1.1,1.8,1.6\n\tc0.9,0.7,2,1.5,3.2,2.3c0,0.1-0.1,0.2-0.1,0.3c0,0.3,0.2,0.5,0.5,0.5c0.2,0,0.3-0.1,0.4-0.2c3,1.9,6.7,3.9,9.4,5.3\n\tc0.2,0.1,0.5,0.3,0.8,0.4c-0.2,0-0.4,0.2-0.4,0.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.1,0-0.2-0.1-0.2\n\tc2.2,1,5.2,2.1,8,3.1c0,0.1,0,0.1,0,0.2c0,0.3,0.2,0.5,0.5,0.5c0.2,0,0.4-0.2,0.5-0.4c2.3,0.8,4.3,1.3,5.2,1.4\n\tc0.3,0,0.7,0.1,1.1,0.1c0,0.2,0.2,0.4,0.5,0.4c0.2,0,0.4-0.1,0.5-0.3c1.8,0.2,4,0.3,6.2,0.4c0.1,0.1,0.2,0.2,0.4,0.2\n\tc0.1,0,0.2,0,0.3-0.1c0.5,0,1,0,1.5,0.1c0,0,0.4,0,1,0c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3\n\tc0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7c0-0.2-0.1-0.4-0.2-0.5\n\tc0.6,0,1.2-0.1,1.9-0.1c0.1,0.2,0.1,0.3,0.2,0.4c0.3,0.5,0.9,1.2,1.1,1.3c0.1,0.1,0.1,0.1,0.2,0.2c-0.3,0.1-0.4,0.4-0.4,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3\n\tc0.4,0,0.7-0.4,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.4-0.4,0.7-0.8c0.1,0,0.1,0,0.2,0\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.1-0.1-0.3-0.2-0.4c0.1-0.2,0.1-0.3,0.2-0.5c0.4,0,0.7-0.1,1.1-0.1c0,0.6,0.3,1.7,0.6,2.2\n\tc0.3,0.5,0.9,1.2,1.1,1.3c0.1,0.1,0.1,0.1,0.2,0.2c-0.3,0.1-0.4,0.4-0.4,0.7c0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3\n\tc0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7\n\tc0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.9-0.9,1.1-1.3c0.3-0.5,0.6-1.7,0.6-2.3c0-0.2,0-0.3-0.1-0.5c0.9-0.2,1.9-0.3,2.8-0.5\n\tc0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.1,0-0.1,0-0.2c1.8-0.4,3.4-0.9,4.9-1.5c0,0,0,0,0,0c0,0.3,0.2,0.5,0.5,0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.1-0.1-0.3-0.2-0.4c0.1-0.1,0.3-0.1,0.4-0.2c1.7,0.9,9,4.6,13.4,5.4c5,1,10.4,2.1,13.4,1.6\n\tc2.1-0.3,3.5-0.6,4.3-0.8c0.2,0.4,0.3,0.7,0.5,1c1.6,2.8,5.7,7.3,6.8,8.2c0.4,0.3,0.7,0.7,1.1,1c-1.6,0.7-2.8,2.3-2.8,4.2\n\tc0,2.4,1.8,4.3,4.1,4.6c-1,0.2-1.7,1.1-1.7,2.1c0,1.2,1,2.2,2.2,2.2c1.2,0,2.2-1,2.2-2.2c0-1-0.7-1.9-1.7-2.1\n\tc2.3-0.2,4.2-2.2,4.2-4.6c0-1.9-1.1-3.5-2.8-4.2c0.3-0.3,0.7-0.7,1.1-1c1.1-0.9,5.2-5.4,6.8-8.2c0.2-0.3,0.3-0.6,0.5-1\n\tc0.8,0.2,2.3,0.4,4.3,0.7c2.9,0.5,8.3-0.6,13.4-1.6c4.4-0.9,11.6-4.5,13.4-5.4c0.1,0.1,0.3,0.1,0.4,0.2c-0.1,0.1-0.2,0.2-0.2,0.4\n\tc0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0,0,0,0,0,0c1.5,0.6,3.1,1.1,4.9,1.5c0,0.1,0,0.1,0,0.2c0,0.3,0.2,0.5,0.5,0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0.9,0.2,1.8,0.4,2.8,0.5c0,0.2,0,0.3-0.1,0.5c0,0.6,0.3,1.8,0.6,2.3c0.3,0.5,0.9,1.2,1.1,1.3\n\tc0.1,0.1,0.1,0.1,0.2,0.2c-0.3,0.1-0.4,0.4-0.4,0.7c0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4\n\ts0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7c0.1-0.1,0.1-0.1,0.2-0.2\n\tc0.2-0.2,0.8-0.9,1.1-1.3c0.2-0.4,0.5-1.5,0.6-2.2c0.4,0,0.8,0.1,1.1,0.1c0.1,0.2,0.1,0.4,0.2,0.5c-0.1,0.1-0.2,0.2-0.2,0.4\n\tc0,0.3,0.2,0.5,0.5,0.5c0.1,0,0.1,0,0.2,0c0.3,0.3,0.6,0.7,0.7,0.8c0.1,0.1,0.1,0.1,0.2,0.2c-0.3,0.1-0.4,0.4-0.4,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3\n\tc0.4,0,0.7-0.4,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.8-0.9,1.1-1.3c0.1-0.1,0.1-0.3,0.2-0.4\n\tc0.7,0,1.3,0.1,1.9,0.1c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4\n\tc0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7c0-0.2-0.1-0.3-0.1-0.4c0.7,0,1,0,1,0c0.5,0,1,0,1.5-0.1\n\tc0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.3-0.1,0.4-0.2c2.2-0.1,4.4-0.3,6.2-0.4c0.1,0.2,0.2,0.3,0.5,0.3c0.3,0,0.5-0.2,0.5-0.4\n\tc0.4,0,0.8-0.1,1.1-0.1c0.8-0.1,2.8-0.7,5.2-1.4c0.1,0.2,0.2,0.4,0.5,0.4c0.3,0,0.5-0.2,0.5-0.5c0-0.1,0-0.1,0-0.2\n\tc2.7-0.9,5.8-2.1,8-3.1c0,0.1-0.1,0.2-0.1,0.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.2-0.2-0.4-0.4-0.5\n\tc0.3-0.1,0.5-0.3,0.8-0.4c2.7-1.4,6.3-3.3,9.4-5.3c0.1,0.1,0.2,0.2,0.4,0.2c0.3,0,0.5-0.2,0.5-0.5c0-0.1,0-0.2-0.1-0.3\n\tc1.2-0.8,2.4-1.6,3.2-2.3c0.6-0.5,1.2-1,1.8-1.6c0.1,0.2,0.2,0.3,0.5,0.3c0.3,0,0.5-0.2,0.5-0.5c0-0.2-0.1-0.4-0.3-0.4\n\tc1.9-1.8,3.8-3.7,4.6-4.5c0.1,0.1,0.2,0.2,0.4,0.2c0.3,0,0.5-0.2,0.5-0.5c0.7,0.2,2.1,0.4,3.7,0.5c2.3,0.1,7.2-1.5,10.2-3.1\n\tc2.9-1.6,7.7-8,8.3-9.7c0.6-1.7,0.6-3.6,0.5-2.8c-0.1,0.7-1.6,3.1-1.6,2.7c0-0.4-0.1-1.1-0.2-2.5c-0.1-1.4-1.1-3.1-2.8-3.8\n\tc-1.7-0.7-2.7-0.7-4.4-0.2c-1.7,0.5-2.3,2-2.5,4.7c-0.1,2.7,2.1,3.1,2.1,3.1s-0.5-0.4-1.1-1.2c-0.6-0.9-0.5-1.8-0.1-3.2\n\tc0.4-1.3,1.7-1.8,2.6-2.2c0.9-0.4,1.6-0.1,3.1,0.7c1.5,0.9,1.8,2.1,2,3.6c0.1,1.5-0.4,2.7-1.2,3.8c-0.9,1.1-4.4,2.7-8.7,2.8\n\tc-1.9,0.1-3.8-0.5-5.6-1.2v-0.4c0,0,0-6.6,0-7.5c0.1-0.1,0.1-0.2,0.1-0.3c0.1-0.4,0.1-0.9,0-1.3c-0.1-0.4-0.4-0.9-0.7-1.3\n\tc-0.3-0.4-0.4-0.4-0.5-0.2c-0.1,0.2-0.7,0.7-0.9,1.2c-0.2,0.5-0.1,1.5,0.3,1.9c0.4,0.4,0.7,0.5,0.7,0.5v0.2c0,0,0,0-0.1,0.1\n\tc-0.2,0.1-0.6,0.4-0.6,0.4v6l0.8,0.5c-1.2-0.5-2.3-1.1-3.4-1.7c0-1.3,0-17.1,0-17.5c0-0.4-0.1-0.4-0.3-0.3c-0.1,0.2-0.2,0.5-0.6,1\n\tc-0.2,0.2-0.4,0.4-0.6,0.6l0-1.3c0,0,1.4-0.8,1.7-1.8c0.3-1,0.2-2.1,0.1-3c-0.2-0.9-1-2.1-1.6-3.1c-0.6-1-0.9-0.8-1.1-0.4\n\tc-0.3,0.4-1.7,1.6-2.1,2.7c-0.4,1.1-0.2,3.4,0.8,4.4c1,1,1.7,1.1,1.7,1.1l0,1.9c0,0-0.1,0.1-0.1,0.1c-0.4,0.3-1.4,1-1.4,1v12.9\n\tc-0.3-0.1-0.6-0.2-0.9-0.3c0.3-0.1,0.4-0.4,0.4-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.1,0,0.2,0.1,0.3\n\tc-0.9-0.3-1.5-0.4-2.2-0.6c-0.6-0.1-1.9-0.2-3.3-0.3c0.1-0.1,0.2-0.3,0.2-0.5c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.2,0.1,0.4,0.2,0.5c-1.3,0-2.7,0-3.8,0.1c-0.2,0-0.4,0.1-0.5,0.1c0.1-0.1,0.2-0.3,0.2-0.5c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.3,0.2,0.6,0.4,0.7c-2.3,0.7-4.9,2.3-6.6,3.5c-2,1.4-4,3.7-4,3.7s0.9-0.7,1.6-1.3\n\tc0.6-0.6,2.6-1.4,3.5-1.6c0.3-0.1,0.9-0.1,1.5-0.2c-0.9,0.5-1.7,1-2,1.3c-0.7,0.7-2.1,3.3-2.1,4.5c0,1.2,0.2,3.7,2.5,4.7\n\tc2.2,1,4.5,0.9,5.8-0.1c1.2-1,1.5-2.6,1.3-3.7c-0.1-1.1-0.6-2.7-3.7-2.1c0.4-0.1,1.2-0.1,1.8,0.7c0.9,1,1,2.5,0.6,3.4\n\tc-0.4,1-2.6,1.6-3.9,1.4c-1.3-0.2-2.6-1.1-2.9-2.5c-0.4-1.3,0-3.3,0.7-4.2c0.7-0.9,2.3-2.6,3.9-2.5c1.6,0.1,4.5,0.6,5.5,1.5\n\tc1,0.9,2.1,2.6,2.2,2.9c0.1,0.2,0.2-0.6,0.2-1.5c1.8,1.1,4.3,2.5,4.3,2.5s-2.2,1.8-3.3,2.9c-1.1,1-9,6-16.2,9.9\n\tc-4.3,2.4-8.2,3.2-12.2,3.7c-0.1-0.1-0.1-0.1-0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.8-0.9,1.1-1.3c0.3-0.5,0.6-1.7,0.6-2.3\n\tc0-0.6-0.3-1.3-0.3-1.3s0.5,0.2,1,0.3c0.2,0,0.5,0,0.8,0c0,0,0,0,0,0c0.1,0.1,0.1,0.1,0.2,0.2c-0.3,0.1-0.4,0.4-0.4,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3\n\tc0.4,0,0.7-0.4,0.7-0.7c0-0.3-0.2-0.6-0.5-0.7c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.9-0.9,1.1-1.3c0.3-0.5,0.6-1.7,0.6-2.3\n\tc0-0.6-0.3-1.3-0.3-1.3s0.5,0.2,1,0.3c0.5,0,1.4,0,1.4,0s-0.9-0.1-1.5-0.4c-0.5-0.3-1.1-0.8-1.8-1.7c-0.8-0.9-1-1.7-1-1.7h0\n\tc0,0-0.2,0.9-1,1.7c-0.8,0.9-1.3,1.4-1.8,1.7c-0.3,0.2-0.7,0.3-1,0.4c-0.1-0.1-0.2-0.2-0.4-0.2c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.1,0-0.2-0.1-0.2c0.3,0,0.6,0,0.9,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3\n\tc0,0.6,0.3,1.8,0.6,2.3c0.2,0.4,0.6,0.9,0.9,1.1c-0.2-0.1-0.5-0.2-0.7-0.3c-0.5-0.3-1.1-0.8-1.8-1.7c-0.8-0.9-1-1.7-1-1.7h0\n\tc0,0-0.2,0.9-1,1.7c-0.8,0.9-1.3,1.4-1.8,1.7c-0.5,0.3-1.5,0.4-1.5,0.4s0.9,0,1.4,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3\n\tc0,0.6,0.3,1.7,0.5,2.2c-0.1,0-0.2-0.1-0.3-0.1c-0.5-0.3-1.1-0.8-1.8-1.7c-0.7-0.7-0.9-1.5-1-1.7c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.4,0.5c-0.1,0.2-0.3,0.9-1,1.7c-0.8,0.9-1.3,1.4-1.8,1.7\n\tc-0.5,0.3-1.5,0.4-1.5,0.4s0.9,0,1.4,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3c0,0.2,0,0.6,0.1,0.9c-0.3,0-0.6,0-0.9,0.1\n\tc-0.2,0-0.3,0-0.5,0c-0.2-0.2-0.4-0.4-0.6-0.6c-0.6-0.7-0.9-1.3-1-1.6c0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c-0.1,0.3-0.4,0.9-1,1.6c-0.2,0.2-0.4,0.4-0.6,0.6c-0.8,0-1.6-0.1-2.4-0.2\n\tc0,0,0-0.1,0-0.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c-3.8-0.6-6.9-1.5-8.2-1.9c-0.1-0.1-0.2-0.1-0.3-0.1c0,0,0,0-0.1,0\n\tc-1.6-0.4-3.5-1.7-3.5-1.7s0.8-0.2,1.4-0.1c0.2,0,0.9,0,1.8-0.2c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.3,0.2,0.5,0.5,0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.1-0.1-0.3-0.2-0.4c1.2-0.2,2.6-0.5,4-0.8c0,0.1-0.1,0.1-0.1,0.2c0,0.3,0.2,0.5,0.5,0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.2-0.1-0.3-0.2-0.4c0.6-0.1,1.1-0.3,1.6-0.4c0.6-0.2,1.3-0.5,2-0.8c0.1,0.1,0.2,0.2,0.4,0.2\n\tc0.3,0,0.5-0.2,0.5-0.5c0,0,0-0.1,0-0.1c1.1-0.6,2.3-1.4,3.5-2.3c0,0,0,0,0,0.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.2-0.2-0.4-0.4-0.5c1.7-1.3,3.3-2.6,4.6-3.8c0.1,0.1,0.2,0.1,0.3,0.1c0.3,0,0.5-0.2,0.5-0.5c0-0.1,0-0.2-0.1-0.3\n\tc1.2-1.1,2.6-2.7,4-4.2c0.1,0.2,0.2,0.3,0.4,0.3c0.3,0,0.5-0.2,0.5-0.5c0-0.2-0.1-0.4-0.3-0.5c1.9-2.3,3.5-4.2,3.5-4.2s0,0,0.1,0\n\tc0,0,0,0.1,0,0.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.1,0-0.1,0-0.2c0.4,0,1-0.1,1.8-0.2c2.1-0.3,5.3-2,7.1-3.2\n\tc1.7-1.2,3.8-4.8,4.1-5.6c0.4-0.8,0.7-1.7,0.5-1.4c-0.3,0.4-1.3,1.4-1.3,1.4s0.3-0.6,0-2c-0.3-1.4-1.5-1.9-2.7-2.4\n\tc-1.2-0.5-2.7,0.1-3.4,0.7c-0.7,0.6-1.2,1.9-0.4,3.4c0.8,1.5,2.9,0.8,2.3,0.7c-0.6-0.1-1.6-0.6-1.7-1.6c-0.2-0.9,0.5-1.8,1.2-2.2\n\tc0.7-0.4,1.5-0.3,2.4,0.2c0.9,0.5,1,0.8,1.3,1.8c0.3,1-0.9,2.7-2.3,3.9c-1.3,1.1-3.8,1-5.6,0.9c0-1.9,0-5.6,0-5.7\n\tc0-0.2-0.1-0.2-0.1-0.1c0,0.1-0.1,0.2-0.2,0.4c-0.1,0.1-0.1,0.2-0.2,0.2l0-0.5c0,0,0.6-0.3,0.7-0.7c0.1-0.4,0.1-0.8,0-1.2\n\tc-0.1-0.3-0.4-0.8-0.6-1.2c-0.2-0.4-0.3-0.3-0.4-0.2c-0.1,0.2-0.7,0.6-0.8,1.1c-0.2,0.4-0.1,1.3,0.3,1.7c0.4,0.4,0.6,0.4,0.6,0.4\n\tl0,0.7c0,0,0,0-0.1,0c-0.2,0.1-0.5,0.4-0.5,0.4v4.4c-1-0.2-2.1-0.7-2.7-0.9v-0.2c0,0,0-6.7,0-6.8c0-0.2-0.1-0.2-0.1-0.1\n\tc0,0.1-0.1,0.2-0.2,0.4c-0.1,0.1-0.1,0.2-0.2,0.2l0-0.5c0,0,0.6-0.3,0.7-0.7c0.1-0.4,0.1-0.8,0-1.2c-0.1-0.3-0.4-0.8-0.6-1.2\n\tc-0.2-0.4-0.3-0.3-0.4-0.2c-0.1,0.2-0.7,0.6-0.8,1.1c-0.2,0.4-0.1,1.3,0.3,1.7c0.4,0.4,0.6,0.4,0.6,0.4l0,0.7c0,0,0,0-0.1,0\n\tc-0.2,0.1-0.6,0.4-0.6,0.4v5.2c-0.7-0.3-1.6-0.7-2.5-1c0-1.4,0-2.7,0-2.8c0-0.2-0.1-0.2-0.1-0.1c0,0.1-0.1,0.2-0.2,0.4\n\tc-0.1,0.1-0.1,0.2-0.2,0.2l0-0.5c0,0,0.6-0.3,0.7-0.7c0.1-0.4,0.1-0.8,0-1.2c-0.1-0.3-0.4-0.8-0.6-1.2c-0.2-0.4-0.3-0.3-0.4-0.2\n\tc-0.1,0.2-0.7,0.6-0.8,1.1c-0.2,0.4-0.1,1.3,0.3,1.7c0.4,0.4,0.6,0.4,0.6,0.4l0,0.7c0,0,0,0-0.1,0c-0.2,0.1-0.6,0.4-0.6,0.4v1.2\n\tc-0.9-0.3-1.7-0.4-2.4-0.5c-2.1-0.2-4.3-0.4-7.7,1c-3.4,1.4-4.5,3.8-4.5,3.8s0,0,0.9-0.6c0.9-0.6,2.7-1.2,2.7-1.2l-0.8,0.4\n\tc0,0-0.3,0.2-0.8,0.9c-0.3,0.5-0.7,1.5-0.8,2.6c-0.3-0.1-0.7-0.2-1-0.3c-0.5-0.3-1-0.7-1.7-1.5c-0.6-0.6-0.8-1.2-0.9-1.5\n\tc0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.4,0.5c-0.1,0.2-0.3,0.8-0.9,1.5\n\tc-0.7,0.8-1.2,1.3-1.7,1.5c-0.4,0.2-1.1,0.4-1.3,0.4c0,0,0,0,0-0.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5c0.2,0,0.4-0.2,0.5-0.4c0.2,0,0.8,0,1.2,0c0.4,0,0.9-0.2,0.9-0.2s-0.2,0.6-0.2,1.2c0,0.5,0.3,1.7,0.5,2.1\n\tc0.2,0.4,0.8,1.1,1,1.2c0.1,0,0.1,0.1,0.2,0.1c-0.2,0.1-0.4,0.3-0.4,0.5c-0.3-0.1-0.7-0.2-1.1-0.3c-0.5-0.3-1-0.7-1.7-1.5\n\tc-0.6-0.7-0.9-1.4-0.9-1.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tc0,0.1-0.3,0.8-0.9,1.5c-0.7,0.8-1.2,1.3-1.6,1.5c-0.5,0.3-1.3,0.4-1.3,0.4s0.8,0,1.3,0c0.4,0,0.9-0.2,0.9-0.2s-0.2,0.6-0.2,1.2\n\tc0,0.5,0.3,1.7,0.5,2.1c0.2,0.4,0.8,1.1,1,1.2c0.1,0,0.1,0.1,0.2,0.1c-0.2,0.1-0.4,0.3-0.4,0.6c0,0.4,0.3,0.6,0.6,0.7\n\tc-0.1,0-0.3,0.2-0.3,0.3c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3c0.3,0,0.6-0.3,0.6-0.7\n\tc0-0.3-0.2-0.5-0.4-0.6c0-0.1,0.1-0.1,0.2-0.1c0.2-0.1,0.8-0.8,1-1.2c0.2-0.4,0.5-1.5,0.5-2.1c0-0.5-0.2-1.2-0.2-1.2\n\ts0.5,0.2,0.9,0.2c0.3,0,0.7,0,1,0c0,0,0,0,0,0c0,0.4,0.3,0.6,0.6,0.7c-0.1,0-0.2,0.2-0.2,0.3c0,0.2,0.1,0.3,0.3,0.3\n\tc0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3c0.3,0,0.6-0.3,0.6-0.7c0-0.3-0.2-0.5-0.4-0.6c0.1-0.1,0.1-0.1,0.2-0.1\n\tc0.2-0.1,0.8-0.8,1-1.2c0.2-0.4,0.5-1.5,0.5-2.1c0-0.5-0.2-1.2-0.2-1.2s0.5,0.2,0.9,0.2c0.3,0,0.6,0,0.9,0c0,0.3,0,0.7,0.1,1\n\tc0.3,1.6,1.7,2.5,2.7,3c1,0.5,2.9,0.1,4-1.4c1.1-1.6-0.8-3.4-0.8-3.4c-0.9-0.9-2.7-0.2-2.7-0.2s0.7,0.1,1.2,0.2c0.5,0,1,0.5,1.2,0.9\n\tc0.2,0.5,0.1,1.5-0.3,1.9c-0.4,0.5-1.4,0.6-2.5,0.2c-1-0.4-1.3-1.2-1.2-2.7c0-1.4,1-1.9,1.7-2.6c0.7-0.6,2-0.8,3.2-0.5\n\tc1.2,0.2,3.1,1.7,3.1,1.7c2.7,1.5,3.7,2,2.7,3.2c-1,1.2-6.9,7.1-10.6,9.1c-3.7,2-13.3,6.4-19.6,5.6c-6.4-0.7-13-6.4-16-10.8\n\tc-2.9-4.4-3.2-11.3-2.5-14.5c0.6-2.6,1.9-4.4,2.3-5c1.1,0.4,2.1,0.7,2.7,0.8c0.8,0.1,2.2,0.2,3.7,0.2c-0.1,0.1-0.1,0.2-0.1,0.3\n\tc0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.1,0-0.2-0.1-0.3c0.9,0,1.9,0,2.8,0c0,0,0,0.1,0,0.1c0,0.3,0.2,0.5,0.5,0.5\n\ts0.5-0.2,0.5-0.5c0-0.1,0-0.1,0-0.1c1.2,0,2,0,2,0s1.1,0,2.8,0c0,1,0.7,1.9,1.6,2.2c-0.4,0.7-0.9,1.6-1.7,2.5\n\tc-1.9,2.2-3.2,3.4-4.5,4.2c-0.2,0.1-0.4,0.2-0.6,0.3c0,0,0,0-0.1,0c-0.1,0-0.3,0.1-0.4,0.2c-1.2,0.4-2.6,0.6-2.6,0.6s1.4,0,2.6,0\n\tc0.1,0.1,0.2,0.2,0.4,0.2c0.2,0,0.3-0.1,0.4-0.2c0,0,0,0,0,0c1.2-0.1,2.5-0.6,2.5-0.6s-0.6,1.7-0.6,3.2c-0.1,1.3,0.6,4,1.2,5.4\n\tc-0.3-0.1-0.7-0.2-1-0.3c-0.5-0.3-1-0.7-1.7-1.5c-0.7-0.8-0.9-1.5-0.9-1.6c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\ts-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c0,0.1-0.2,0.8-0.9,1.5c-0.7,0.8-1.2,1.3-1.7,1.5c-0.2,0.1-0.5,0.2-0.7,0.3\n\tc0.2-0.1,0.3-0.3,0.3-0.6c0-0.3-0.2-0.5-0.4-0.6c0.1,0,0.1-0.1,0.2-0.1c0.2-0.1,0.8-0.8,1-1.2c0.2-0.4,0.5-1.5,0.5-2.1\n\tc0-0.5-0.2-1.2-0.2-1.2s0.5,0.2,0.9,0.2c0.2,0,0.6,0,0.8,0c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0,0.2-0.1c0,0,0,0,0,0s0,0,0,0\n\tc0.2-0.1,0.3-0.2,0.3-0.4c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.1,0,0.2,0.1,0.3c-0.2-0.1-0.5-0.2-0.7-0.3\n\tc-0.5-0.3-1-0.7-1.7-1.5c-0.5-0.6-0.8-1.2-0.9-1.4c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.2,0.2,0.4,0.4,0.5c-0.1,0.2-0.3,0.8-0.9,1.4c-0.7,0.8-1.2,1.3-1.6,1.5c-0.5,0.3-1.3,0.4-1.3,0.4s0.8,0,1.3,0\n\tc0.4,0,0.9-0.2,0.9-0.2s-0.2,0.6-0.2,1.2c0,0.5,0.3,1.7,0.5,2.1c0.2,0.4,0.8,1.1,1,1.2c0.1,0,0.1,0.1,0.2,0.1\n\tc-0.2,0.1-0.4,0.3-0.4,0.6c0,0.3,0.3,0.6,0.6,0.7c-0.1,0-0.1,0-0.1,0s0.1,0,0.1,0c-0.1,0-0.2,0.2-0.2,0.3c0,0.2,0.1,0.3,0.3,0.3\n\tc0.2,0,0.3-0.1,0.3-0.3c0-0.1-0.1-0.3-0.2-0.3c0.3,0,0.7,0,0.9,0c0.4,0,0.9-0.2,0.9-0.2s-0.2,0.6-0.2,1.2c0,0.5,0.3,1.6,0.5,2.1\n\tc0.2,0.4,0.8,1.1,1,1.2c0.1,0,0.1,0.1,0.2,0.1c-0.2,0.1-0.4,0.3-0.4,0.6c0,0.4,0.3,0.6,0.6,0.7c-0.1,0-0.2,0.2-0.2,0.3\n\tc0,0.2,0.1,0.3,0.3,0.3s0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3c0.3,0,0.6-0.3,0.6-0.7c0-0.3-0.2-0.5-0.4-0.6c0,0,0.1-0.1,0.2-0.1\n\tc0.2-0.1,0.8-0.8,1-1.2c0.2-0.4,0.5-1.5,0.5-2.1c0-0.5-0.2-1.2-0.2-1.2s0.5,0.2,0.9,0.2c0.3,0,0.7,0,1,0c0,0.1,0.1,0.2,0.1,0.2\n\tc0.6,1.1,2.3,2.9,2.7,3.3c0.1,0.1,0.3,0.3,0.4,0.4c-0.7,0.3-1.1,0.9-1.1,1.7c0,1,0.7,1.8,1.7,1.8c-0.4,0.1-0.7,0.4-0.7,0.8\n\tc0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9c0-0.4-0.3-0.8-0.7-0.9c0.9-0.1,1.6-0.9,1.6-1.8c0-0.8-0.5-1.4-1.1-1.7\n\tc0.1-0.1,0.3-0.3,0.4-0.4c0.4-0.4,2.1-2.2,2.7-3.3c0.6-1.1,1.5-4.2,1.4-5.7c-0.1-1.5-0.6-3.2-0.6-3.2s1.3,0.6,2.5,0.6\n\tc0.1,0,0.1,0,0.2,0c0,0.2,0.2,0.4,0.5,0.4c0.2,0,0.4-0.2,0.5-0.4c1.1,0,2.3,0,2.3,0s-1.5-0.2-2.7-0.7c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.1,0.1,0.2,0.1,0.3c-0.2-0.1-0.3-0.2-0.5-0.2c-1.3-0.8-2.6-2-4.5-4.2\n\tc-0.8-0.9-1.3-1.8-1.7-2.5c0.9-0.3,1.6-1.2,1.6-2.3c3,0,6.4,0,9.3,0c0,0.1,0,0.1,0,0.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.1,0-0.1,0-0.2c2.3,0,4.3,0,5.5,0c5.1,0,9.3-2.4,13.6-4.1c4.3-1.7,7.3-5.4,8.5-7.2c0.5-0.7,0.8-1.3,1-1.8\n\tc0.1,0.1,0.2,0.2,0.4,0.2c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c0.2-0.4,0.4-0.6,0.7-0.7c0.3-0.1,0.8-0.1,1.5-0.2\n\tc0,0,0,0,0,0c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0,0,0-0.1,0-0.1c0.6-0.1,1.3-0.2,2.1-0.4c0,0,0,0,0.1,0c0,0,0,0,0,0\n\tc0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.2-0.1-0.4-0.2-0.5c0.5-0.3,1-0.6,1.5-0.9c0.1,0.3,0.4,0.4,0.7,0.4\n\tc0.4,0,0.7-0.3,0.7-0.7c0-0.2-0.1-0.4-0.3-0.6c0.3-0.3,0.6-0.6,0.9-0.9c0.1,0.1,0.3,0.2,0.4,0.2c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.2-0.1-0.4-0.2-0.5c0.4-0.6,0.8-1.2,1-1.7c0.9-2.4,0.1-4.1-0.9-5.5c-1-1.5-3.3-1-4.1-0.7c-0.7,0.3-2,1.3-1.8,2.8\n\tc0.2,1.5,0.8,2,1.8,2.8c1,0.7,2.4-0.9,1.3-0.8c-1.1,0.1-1.9-0.7-2-1.7c-0.1-1,1.2-2,2.5-1.9c1.3,0.1,2.3,1.3,2.4,2.5\n\tc0.1,1.2-1,2.7-2.3,3.6c-1.3,0.9-4.5,1.2-6.7,0.8c-0.5-0.1-1.3-0.3-2.1-0.7v0c0,0,0-17.1,0-17.6c0-0.4-0.1-0.4-0.3-0.3\n\tc-0.1,0.2-0.2,0.5-0.6,1c-0.2,0.2-0.4,0.4-0.6,0.6l0-1.3c0,0,1.4-0.8,1.7-1.8c0.3-1,0.2-2.1,0.1-3c-0.2-0.8-1-2.1-1.6-3.1\n\tc-0.6-1-0.9-0.8-1.1-0.4c-0.3,0.4-1.7,1.6-2.1,2.7c-0.4,1.1-0.2,3.4,0.8,4.4c1,1,1.7,1.1,1.7,1.1l0,1.9c0,0-0.1,0.1-0.1,0.1\n\tc-0.4,0.3-1.4,1-1.4,1v13c-0.6-0.3-1.1-0.5-1.6-0.8c0-1,0-6.5,0-6.6c0-0.2-0.1-0.2-0.1-0.1c0,0.1-0.1,0.2-0.2,0.4\n\tc-0.1,0.1-0.1,0.2-0.2,0.2l0-0.5c0,0,0.6-0.3,0.7-0.7c0.1-0.4,0.1-0.8,0-1.2c-0.1-0.3-0.4-0.8-0.6-1.2c-0.2-0.4-0.3-0.3-0.4-0.2\n\tc-0.1,0.2-0.7,0.6-0.8,1.1c-0.2,0.4-0.1,1.3,0.3,1.7c0.4,0.4,0.6,0.4,0.6,0.4l0,0.7c0,0,0,0-0.1,0c-0.2,0.1-0.6,0.4-0.6,0.4v4.9\n\tc-0.2-0.1-0.3-0.1-0.4-0.1c-1.7-0.4-7.1-0.2-8.8,0.6c0,0,0,0,0,0c0,0,0,0,0-0.1c0-0.4-0.3-0.7-0.7-0.7c-0.2,0-0.4,0.1-0.6,0.3\n\tc0,0,0,0,0,0c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.2,0,0.4-0.1,0.6-0.3c0,0,0,0,0,0\n\tc0,0.3,0.2,0.6,0.5,0.7c-1.1,1-1.8,2.4-2.3,3.5c-0.6,1.4-0.4,3,0.5,4.7c0.8,1.7,2.5,1.7,4,1.5c1.6-0.3,2.6-1.7,1.9-3.9\n\tc-0.6-2.1-3.9-1.1-3-1c0.8,0.1,1.7,0.4,1.9,0.6c0.3,0.3,0.5,1.7-0.4,2.4c-0.8,0.6-2.2,0.5-3.1-0.2c-0.9-0.6-0.8-2.9-0.6-3.9\n\tc0.3-0.9,3.2-2.3,4.7-1.5c1.5,0.8,4.2,2.4,5.5,3.1c1.3,0.7,2.3,0.8,2.3,0.8s0.6,0.4-0.6,2.2c-1.1,1.8-7.2,5.7-13.6,7.3\n\tc-6.4,1.6-13.4,1.7-13.4,1.7s0.6-2,1.3-2.9c0.7-0.9,4.3-2.2,5.7-2.9c1.4-0.7,2.6-1.9,3-3.7c0.4-1.8-1.4-3.1-2.2-3.4\n\tc-0.8-0.3-1.9-0.1-2.7,0.9c-0.8,1,0.1,2.2,0.1,2.2c0.6,0.9,1.4,0.1,0.5-0.6c-0.9-0.7,0.5-1.6,1.3-1.7c0.9-0.1,1.6,1,1.8,1.7\n\tc0.2,0.7-1.1,2.5-3.4,2.8c-0.9,0.1-1.8,0-2.6-0.2v-0.4V146l-0.3,0.6c0,0-0.2,0.2-0.4,0.5l0-0.6c0,0,0.7-0.5,0.9-1.2\n\tc0.2-0.6,0.2-1.4,0.1-1.9c-0.1-0.6-0.7-1.4-1-2c-0.4-0.6-0.6-0.5-0.7-0.3c-0.2,0.3-1.1,1-1.4,1.8c-0.3,0.7-0.1,2.2,0.5,2.8\n\tc0.7,0.6,0.9,0.7,0.9,0.7l0,1.3c-0.3,0.2-0.9,0.6-0.9,0.6v8.9c0,0-0.5-0.4-1.8-1c-1-0.4-3.2-0.8-5-0.9c0.1-0.4,0.2-0.8,0.2-1.1\n\tc0-0.5-0.2-1.2-0.2-1.2s0.5,0.2,0.9,0.2c0.4,0,1.3,0,1.3,0s-0.8-0.1-1.3-0.4c-0.5-0.3-1-0.7-1.7-1.5c-0.4-0.5-0.6-0.9-0.8-1.2\n\tc0.2-0.1,0.3-0.2,0.3-0.4c0-0.3-0.2-0.5-0.5-0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.2-0.1-0.3-0.2-0.4\n\tc0.5-0.3,0.8-0.4,0.8-0.4s-1.4,0-3.6,0c0,0,0,0,0-0.1c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0,0,0,0,0\n\tc-2.3-0.1-5.2-0.6-6.9-1.8c-2-1.5-3.2-3.9-3.2-3.9s1.4,0.6,3.1,1.5c1.7,0.9,4.9,2,7.4,2.1c0,0,0.1,0,0.1,0c-0.3,0.1-0.4,0.4-0.4,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7c1.9,0,4-0.5,5.6-1c0,0,0,0,0,0.1c0,0.3,0.2,0.5,0.4,0.5\n\tc-0.3,0-0.4,0.2-0.4,0.5c0,0.3,0.2,0.5,0.4,0.5c-0.3,0-0.4,0.2-0.4,0.5c0,0.3,0.2,0.5,0.4,0.5c-0.3,0-0.4,0.2-0.4,0.5\n\tc0,0.3,0.2,0.5,0.4,0.5c-0.3,0-0.4,0.2-0.4,0.5c0,0.3,0.2,0.5,0.4,0.5c-0.3,0-0.4,0.2-0.4,0.5c0,0.3,0.2,0.5,0.4,0.5\n\tc-0.3,0-0.4,0.2-0.4,0.5c0,0.3,0.2,0.5,0.4,0.5c-0.3,0-0.4,0.2-0.4,0.5c0,0.2,0.1,0.3,0.2,0.4c-0.1,0.1-0.2,0.2-0.3,0.3\n\tc-0.5,0.5-0.8,0.8-1.1,1c-0.3,0.2-0.9,0.3-0.9,0.3s0.5,0,0.8,0c0.3,0,0.6-0.2,0.6-0.2s-0.1,0.4-0.2,0.8c0,0.4,0.2,1.1,0.3,1.4\n\tc0.2,0.3,0.6,0.7,0.7,0.8c0,0,0.1,0.1,0.1,0.1c-0.2,0.1-0.3,0.2-0.3,0.4c0,0.2,0.2,0.4,0.4,0.4c-0.1,0-0.2,0.1-0.2,0.2\n\tc0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.2-0.1,0.2-0.2c0-0.1-0.1-0.2-0.2-0.2c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.4\n\tc0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.5-0.5,0.7-0.8c0.2-0.3,0.3-1,0.3-1.4c0-0.4-0.2-0.8-0.2-0.8s0.3,0.1,0.6,0.2c0.3,0,0.8,0,0.8,0\n\ts-0.6-0.1-0.9-0.3c-0.3-0.2-0.6-0.5-1.1-1c-0.1-0.1-0.2-0.3-0.3-0.4c0.1-0.1,0.1-0.2,0.1-0.3c0-0.3-0.2-0.5-0.4-0.5\n\tc0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.4-0.5c0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.4-0.5c0.2,0,0.4-0.2,0.4-0.5\n\tc0-0.3-0.2-0.5-0.4-0.5c0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.4-0.5c0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.4-0.5\n\tc0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.4-0.5c0.2,0,0.4-0.2,0.4-0.5c0-0.2-0.1-0.3-0.2-0.4c0.1,0,0.2-0.1,0.3-0.1\n\tc1.7-0.9,1-2.6,0-2.8c-1-0.2-2.5,0.9-3.1,1.2c-0.6,0.4-4,0.6-6.4,0.6s-5.4-0.6-7-1.6c-1.6-1-1-1.2,1-1c2.8,0.2,10.6-1.2,13.6-2.5\n\tc1.6-0.7,3.6-1.4,5.2-2.8c0.1,0.2,0.3,0.3,0.5,0.3c-0.3,0.1-0.6,0.4-0.6,0.7c0,0.4,0.3,0.7,0.6,0.7c-0.3,0.1-0.6,0.4-0.6,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.6-0.7c0.2-0.1,0.4-0.2,0.5-0.4c0.1,0.3,0.4,0.4,0.7,0.4\n\tc0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.3,0-0.6,0.2-0.7,0.5c-0.1-0.2-0.3-0.4-0.5-0.4c0.2-0.1,0.4-0.3,0.5-0.5\n\tc0.1,0.2,0.4,0.4,0.7,0.4c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.2-0.6-0.6-0.7\n\tc0.4,0,0.7-0.3,0.7-0.7c0-0.3-0.1-0.5-0.4-0.6c0-0.1,0-0.1,0-0.2c0.2-0.1,0.4-0.4,0.4-0.6c0-0.2-0.1-0.4-0.2-0.5c0,0,0,0,0,0\n\tc0.5-5.4-3.3-7-5.2-7c-1.8,0-3.7,0.4-5,1.8c-1.4,1.5-1.6,3.7,0.2,5.9c1.8,2.2,2.2,0.5,1.7-1.2c-0.5-1.7,1-3.6,2.5-3.8\n\tc1.5-0.2,3.1,1.1,3.2,3.4c0.1,2.3-2.5,4.4-4.3,6.1c-1.8,1.7-5.8,3.4-9.5,4.1c-1.9,0.4-6.9,0.4-6.9,0.4s0,0,0.7-0.7\n\tc0.7-0.7,1.9-2.4,4.7-1.1c1.9,0.9,3.9,0.5,4.9-0.7c1-1.2,0.6-3.4,0.6-3.4s2.8,0.2,4,0c1.2-0.2,2.7-1.6,2.7-1.6h-7.1c0,0,0,0-0.9-0.9\n\tc-0.9-0.9-3.7-1.7-5.4-1.8c-1.7-0.1-3.8,1.4-3.8,1.4s-0.9-1.1-1.2-3.1c-0.2-1.2,0-2.8,0.2-3.8c0.2-0.3,0.6-0.5,1-0.7\n\tc1-0.5,2.1-1,2.7-2.1c0.6-1.1,0.7-2.7,0.1-4.2c-0.5-1.3-2.6-2.1-3.6-2c-0.3,0-0.5,0.1-0.8,0.2c-0.1-0.3-0.4-0.6-0.7-0.6\n\tc-0.3,0-0.5,0.2-0.6,0.4c0-0.1,0-0.1,0-0.2c0-0.4-0.3-0.7-0.7-0.7c-0.2,0-0.4,0.1-0.6,0.3c0,0,0-0.1,0-0.1c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.2,0,0.4-0.1,0.6-0.3c0,0,0,0.1,0,0.1c0,0.4,0.3,0.7,0.7,0.7c0.3,0,0.5-0.2,0.6-0.4\n\tc0,0,0,0.1,0,0.2c0,0.2,0.1,0.3,0.2,0.5c-0.1,0.1-0.3,0.2-0.4,0.3c-0.6,0.6-1,2.1-0.8,3c0.2,1,1.1,1.9,2.1,1.8\n\tc0.9-0.1,1.1-0.8,1.1-0.8s-0.8,0.3-1.7-0.2c-0.9-0.5-1-2.2-0.2-3.1c0.5-0.6,1.8-0.9,2.6-0.8c0.7,0.1,1.7,0.6,2,1.7\n\tc0.4,2-0.2,3.2-1.1,4.1c-0.6,0.5-2.6,0.8-4,1c-0.1-0.3-0.3-0.6-0.7-0.6c-0.2,0-0.4,0.1-0.5,0.2c0-0.1,0-0.1,0-0.2\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.2,0-0.4,0.1-0.5,0.2c0-0.1,0-0.1,0-0.2c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c0.2,0,0.4-0.1,0.5-0.2c0,0.1,0,0.1,0,0.2c0,0.4,0.3,0.7,0.7,0.7c0.2,0,0.4-0.1,0.5-0.2\n\tc0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1,0,0.1c-0.3,0.3-0.9,1.2-1.1,2c-0.2,1-0.4,3.1,0,5c0.4,2,0.6,2.9,0.6,2.9s-0.5,0.1-1.4-0.4\n\tc-0.9-0.5-2.2-0.4-3.8,0.2c-1.6,0.7-3.1,3-2.8,3.4c0.2,0.5,0.9,0.9,1.7,1.2c0.7,0.4,2.8,3.5,3.1,5c0.2,1.5-0.4,2.1-0.5,1.7\n\tc-0.1-0.5-1.3-3.5-2.2-4.4c-0.9-0.9-3-1.1-2.2-0.8c0.8,0.3,2.4,2.4,2.9,5c0.5,2.6-1.2,3.7-1.2,3.7s0.2-0.9,0.1-2\n\tc-0.1-1.1-2-2.5-4.6-2c-2.6,0.5-2.2,4-1.2,4.9c1,0.9,3.3,1.3,3.3,1.3s-1.9,0.5-4.1-0.2c-2.2-0.7-4.8-3.2-4.3-2.3\n\tc0.5,0.9,5.3,5.7,5.3,5.7s-4.2-2.1-6.5-5c-2.3-2.8-2.6-6.6-2.5-9.1c0.1-2.5,1.6-4.3,3.3-4.3c1.7-0.1,3.1,0.5,3.3,2\n\tc0.2,1.4-0.2,2-0.2,2l-2.9,2.9c0,0,1.5,1.7,2.7,1.5c1.2-0.2,2.9-0.5,3.9-3.9c0.4-1.4,0.1-2.7-0.5-3.9c0.1-0.4,0.1-0.8,0-1\n\tc-0.2-0.6-1.4-1.9-2.4-2.4c-1.1-0.4-2-0.8-2.8-1.4c-0.7-0.6-1.6-3-1.6-4.2c-0.1-1.2,0.2-3.2,0.9-4.5c0.7-1.3,1.7-2,2.6-2.5\n\tc0.8-0.6,2.1-0.9,3-1c1.1-0.1,2.9,0.8,3.5,1.2c0.6,0.4,1.9,1.9,2.1,2.9c0.1,0.9,0.3,2-0.1,3.3c-0.4,1.2-1.5,2.1-3,2.3\n\tc-1.5,0.2-2.3-0.3-3.1-0.9c-0.8-0.6-0.9-1.7-0.9-2.6c0-0.9,0.9-1.6,1.3-1.9c0.4-0.3,1.4-0.3,2.1,0.1c0.7,0.4,0.9,1.4,0.9,2\n\tc0,0.6-0.3,1.2-1.6,1.3c-1.3,0.1-2.1-1.6-2.1-1.6s0.1,0.7,0.6,1.3c0.4,0.6,0.9,1.1,2,1.2c1.1,0.1,2.5-1.2,2.4-2.7\n\tc-0.1-1.4-1.3-3.3-2.9-3.4c-1.6-0.1-3.5,0.6-4.2,3.1c-0.6,2.5,1.2,4.5,2.9,5.3c1.7,0.7,3,0.5,4.7-0.2c1.6-0.7,3-3.5,2.9-5.2\n\tc-0.1-1.4-0.6-3.5-1.7-4.8c0,0,0-0.1,0-0.1c0-0.4-0.3-0.7-0.7-0.7c-0.1,0-0.1,0-0.2,0c-0.1-0.1-0.2-0.1-0.2-0.2\n\tc0.2-0.1,0.4-0.4,0.4-0.6c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0,0,0,0,0c-0.9-0.4-2-0.7-3.2-0.7c0,0,0,0,0,0\n\tc0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7c0.4,0,0.6-0.3,0.6-0.7c0-0.4-0.3-0.7-0.7-0.7s-0.7,0.3-0.7,0.7\n\tc0,0.3,0.2,0.6,0.5,0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.3,0.2,0.5,0.4,0.7c0,0-0.1,0-0.1,0c-0.5,0-1,0.1-1.5,0.3\n\tc-0.7,0.2-1.4,0.6-2.1,1.1c0,0,0-0.1,0-0.1c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc-0.1,0.1-0.1,0.1-0.2,0.2c-0.1-0.2-0.4-0.3-0.6-0.3c-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.5,0.3,0.6c-0.1,0-0.1,0-0.2,0\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.4,0.2,0.5c-0.1,0.1-0.2,0.3-0.2,0.4c-1.1,2-1.2,3-0.7,6.1c0.4,2.6,1.5,3.9,1.8,4.3\n\tc-1.1,0.1-1.8,0.3-2.3-0.1c-0.7-0.7-4.4-6.1-4.4-6.1l1.5-0.7c0,0,2.2-3.9,5.4-10.6c2.4-5.1,4-11.8,4.7-14.7c0.8,0.7,2,0.8,2,0.8\n\tc0.4-0.2,1.8-0.6,2.6,0.1c0.7,0.7,1.7,2.8,3.9,5c2.2,2.2,6.3,3.4,8.1,3.9c1.8,0.5,6,0,8.3-1.8c0.1-0.1,0.2-0.2,0.3-0.3\n\tc0,0.3,0.2,0.5,0.5,0.6c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7\n\tc-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7\n\tc0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7\n\tc-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7\n\tc0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.1,0,0.1,0,0.2\n\tc-0.4,0.5-0.7,0.7-1,0.9c-0.3,0.2-0.9,0.3-0.9,0.3s0.5,0,0.8,0c0.3,0,0.6-0.2,0.6-0.2s-0.1,0.4-0.2,0.8c0,0.4,0.2,1.1,0.3,1.4\n\tc0.2,0.3,0.6,0.7,0.7,0.8c0,0,0.1,0.1,0.1,0.1c-0.2,0.1-0.3,0.2-0.3,0.4c0,0.2,0.2,0.4,0.4,0.4c-0.1,0-0.2,0.1-0.2,0.2\n\tc0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.2-0.1,0.2-0.2c0-0.1-0.1-0.2-0.2-0.2c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.4\n\tc0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.5-0.5,0.7-0.8c0.2-0.3,0.4-1,0.3-1.4c0-0.4-0.2-0.8-0.2-0.8s0.3,0.1,0.6,0.2c0.3,0,0.8,0,0.8,0\n\ts-0.6-0.1-0.9-0.3c-0.3-0.2-0.6-0.5-1-0.9c0-0.1,0-0.1,0-0.2c0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7\n\tc0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7\n\tc0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7\n\tc0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7\n\tc0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7\n\tc0.3-0.1,0.5-0.4,0.5-0.7c0-0.4-0.3-0.7-0.7-0.7c0,0-0.1,0-0.1,0c0.8-1.6-0.3-3.2-0.3-3.2s0.4,1.6,0.1,2.2c-0.2,0.6-2.1,2.5-4.8,2.6\n\tc-1,0-2.1-0.2-3.3-0.5c0.1-0.8,0.1-2.4,0-5.2c-0.2-4.5-1.1-10.4-3.6-13.9c-1.6-2.2-4.7-4.3-4.7-4.3s-0.5-2.3-1.7-3.9\n\tc-1.2-1.6-4.7-2.8-7.4-1.6c-0.9,0.4-1.8,1-2.6,1.7c0-0.1,0-0.3,0-0.4c0-0.7-1.1-4.4-1.8-5.8c-0.7-1.3-3-4.6-4-5.4\n\tc-0.9-0.9-1.6-1.8-1.6-1.8c-1.5-1.8-2.3-5.1-2.3-5.1s-0.8,3.3-2.3,5.1c0,0-0.6,1-1.6,1.8c-0.9,0.9-3.3,4.1-4,5.4\n\tc-0.7,1.3-1.7,5-1.8,5.8c0,0.1,0,0.3,0,0.4c-0.8-0.7-1.7-1.2-2.6-1.7c-2.6-1.2-6.1,0-7.4,1.6c-1.2,1.6-1.7,3.9-1.7,3.9\n\ts-3.1,2.1-4.7,4.3c-2.5,3.4-3.3,9.3-3.6,13.9c-0.1,2.7-0.1,4.3,0,5.2c-1.1,0.3-2.3,0.5-3.3,0.5c-2.7-0.1-4.5-2-4.8-2.6\n\tc-0.2-0.6,0.1-2.2,0.1-2.2s-1.1,1.6-0.3,3.2c0,0-0.1,0-0.1,0c-0.4,0-0.7,0.3-0.7,0.7c0,0.3,0.2,0.6,0.5,0.7\n\tc-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7\n\tc0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7\n\tc-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7\n\tc0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7\n\tc-0.3,0.1-0.5,0.4-0.5,0.7c0,0.3,0.2,0.6,0.5,0.7c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.1,0,0.1,0,0.2c-0.4,0.5-0.7,0.7-1,0.9\n\tc-0.3,0.2-0.9,0.3-0.9,0.3s0.5,0,0.8,0c0.3,0,0.6-0.2,0.6-0.2s-0.1,0.4-0.2,0.8c0,0.4,0.2,1.1,0.3,1.4c0.2,0.3,0.6,0.7,0.7,0.8\n\tc0,0,0.1,0.1,0.1,0.1c-0.2,0.1-0.3,0.2-0.3,0.4c0,0.2,0.2,0.4,0.4,0.4c-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0.1,0.2,0.2,0.2\n\tc0.1,0,0.2-0.1,0.2-0.2c0-0.1-0.1-0.2-0.2-0.2c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.4c0,0,0.1-0.1,0.1-0.1\n\tc0.1-0.1,0.5-0.5,0.7-0.8c0.2-0.3,0.4-1,0.3-1.4c0-0.4-0.2-0.8-0.2-0.8s0.3,0.1,0.6,0.2c0.3,0,0.8,0,0.8,0s-0.6-0.1-0.9-0.3\n\tc-0.3-0.2-0.6-0.5-1-0.9c0-0.1,0-0.1,0-0.2c0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7\n\tc0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7\n\tc0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7\n\tc0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7\n\tc0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7c0.3-0.1,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7\n\tc0.3-0.1,0.4-0.3,0.5-0.6c0.1,0.1,0.2,0.2,0.3,0.3c2.3,1.8,6.5,2.3,8.3,1.8c1.8-0.5,5.9-1.7,8.1-3.9c2.2-2.2,3.2-4.3,3.9-5\n\tc0.7-0.7,2.2-0.4,2.6-0.1c0,0,1.2-0.1,2-0.8c0.6,2.9,2.2,9.6,4.7,14.7c3.2,6.6,5.4,10.6,5.4,10.6l1.5,0.7c0,0-3.7,5.4-4.4,6.1\n\tc-0.5,0.5-1.2,0.3-2.3,0.1c0.3-0.3,1.4-1.7,1.8-4.3c0.5-3,0.4-4.1-0.7-6.1c-0.1-0.1-0.1-0.3-0.2-0.4c0.1-0.1,0.2-0.3,0.2-0.5\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.1,0-0.1,0-0.2,0c0.2-0.1,0.3-0.3,0.3-0.6c0-0.4-0.3-0.7-0.7-0.7c-0.3,0-0.5,0.1-0.6,0.3\n\tc-0.1-0.1-0.1-0.1-0.2-0.2c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0,0,0.1,0,0.1\n\tc-0.7-0.5-1.4-0.9-2.1-1.1c-0.5-0.2-1-0.3-1.5-0.3c0,0-0.1,0-0.1,0c0.3-0.1,0.4-0.4,0.4-0.7c0-0.4-0.3-0.7-0.6-0.7\n\tc0.3-0.1,0.5-0.4,0.5-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.6,0.7c-0.3,0.1-0.5,0.4-0.5,0.7\n\tc0,0.3,0.2,0.6,0.5,0.7c0,0,0,0,0,0c-1.1,0-2.2,0.3-3.2,0.7c0,0,0,0,0,0c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.3,0.1,0.5,0.4,0.6c-0.1,0.1-0.2,0.1-0.2,0.2c-0.1,0-0.1,0-0.2,0c-0.4,0-0.7,0.3-0.7,0.7c0,0,0,0.1,0,0.1\n\tc-1.1,1.3-1.6,3.4-1.7,4.8c-0.1,1.6,1.2,4.5,2.9,5.2c1.6,0.7,3,0.9,4.7,0.2c1.7-0.7,3.5-2.7,2.9-5.3c-0.6-2.5-2.5-3.2-4.2-3.1\n\tc-1.6,0.1-2.9,1.9-2.9,3.4c-0.1,1.4,1.4,2.8,2.4,2.7c1.1-0.1,1.6-0.6,2-1.2c0.4-0.6,0.6-1.3,0.6-1.3s-0.7,1.7-2.1,1.6\n\tc-1.3-0.1-1.6-0.7-1.6-1.3c0-0.6,0.2-1.6,0.9-2c0.7-0.4,1.6-0.4,2.1-0.1c0.4,0.3,1.3,0.9,1.3,1.9c0,0.9-0.1,2-0.9,2.6\n\tc-0.8,0.6-1.6,1.1-3.1,0.9c-1.5-0.2-2.5-1.1-3-2.3c-0.4-1.2-0.2-2.4-0.1-3.3c0.1-0.9,1.5-2.4,2.1-2.9c0.6-0.4,2.4-1.3,3.5-1.2\n\tc0.9,0.1,2.2,0.4,3,1c0.8,0.6,1.9,1.2,2.5,2.5c0.7,1.3,0.9,3.3,0.9,4.5c-0.1,1.2-0.9,3.5-1.6,4.2c-0.7,0.6-1.7,1-2.8,1.4\n\tc-1.1,0.4-2.2,1.7-2.4,2.4c-0.1,0.2,0,0.6,0,1c-0.6,1.1-0.9,2.5-0.5,3.9c1,3.4,2.7,3.7,3.9,3.9c1.2,0.2,2.7-1.5,2.7-1.5l-2.9-2.9\n\tc0,0-0.3-0.5-0.2-2c0.2-1.4,1.6-2,3.3-2c1.7,0.1,3.2,1.8,3.3,4.3c0.1,2.5-0.3,6.3-2.5,9.1c-2.2,2.8-6.5,5-6.5,5s4.9-4.9,5.3-5.7\n\tc0.5-0.9-2.1,1.7-4.3,2.3c-2.2,0.7-4.1,0.2-4.1,0.2s2.2-0.4,3.3-1.3c1-0.9,1.4-4.4-1.2-4.9c-2.6-0.5-4.5,0.9-4.6,2\n\tc-0.1,1.1,0.1,2,0.1,2s-1.7-1.1-1.2-3.7c0.5-2.6,2.1-4.7,2.9-5c0.8-0.3-1.3-0.1-2.2,0.8c-0.9,0.9-2.1,3.9-2.2,4.4\n\tc-0.1,0.5-0.8-0.2-0.5-1.7c0.2-1.5,2.4-4.6,3.1-5c0.7-0.4,1.4-0.8,1.7-1.2c0.2-0.5-1.2-2.8-2.8-3.4c-1.6-0.7-2.9-0.7-3.8-0.2\n\tc-0.9,0.5-1.4,0.4-1.4,0.4s0.2-0.9,0.6-2.9c0.4-2,0.2-4,0-5c-0.2-0.8-0.9-1.7-1.1-2c0,0,0-0.1,0-0.1c0-0.1,0-0.2-0.1-0.2\n\tc0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.7-0.3,0.7-0.7c0-0.1,0-0.2,0-0.2c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.1,0,0.2,0,0.2c-0.1-0.1-0.3-0.2-0.5-0.2c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.1,0,0.2,0,0.2c-0.1-0.1-0.3-0.2-0.5-0.2c-0.4,0-0.6,0.2-0.7,0.6c-1.4-0.1-3.4-0.4-4-1c-0.9-0.9-1.5-2.1-1.1-4.1\n\tc0.2-1.1,1.2-1.6,2-1.7c0.7-0.1,2,0.2,2.6,0.8c0.8,0.9,0.7,2.6-0.2,3.1c-0.9,0.5-1.7,0.2-1.7,0.2s0.2,0.7,1.1,0.8\n\tc1.1,0.1,1.9-0.8,2.1-1.8c0.2-0.9-0.2-2.4-0.8-3c-0.1-0.1-0.3-0.2-0.4-0.3c0.1-0.1,0.2-0.3,0.2-0.5c0-0.1,0-0.1,0-0.2\n\tc0.1,0.2,0.4,0.4,0.6,0.4c0.4,0,0.7-0.3,0.7-0.7c0,0,0-0.1,0-0.1c0.1,0.2,0.3,0.3,0.6,0.3c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7s-0.7,0.3-0.7,0.7c0,0,0,0.1,0,0.1c-0.1-0.2-0.3-0.3-0.6-0.3c-0.4,0-0.7,0.3-0.7,0.7c0,0.1,0,0.1,0,0.2\n\tc-0.1-0.2-0.4-0.4-0.6-0.4c-0.4,0-0.6,0.3-0.7,0.6c-0.2-0.1-0.5-0.1-0.8-0.2c-1-0.1-3.1,0.7-3.6,2c-0.6,1.5-0.5,3.1,0.1,4.2\n\tc0.6,1.1,1.7,1.6,2.7,2.1c0.4,0.2,0.7,0.4,1,0.7c0.2,1,0.5,2.6,0.2,3.8c-0.4,2-1.2,3.1-1.2,3.1s-2.1-1.5-3.8-1.4\n\tc-1.7,0.1-4.5,1-5.4,1.8c-0.9,0.9-0.9,0.9-0.9,0.9h-7.1c0,0,1.5,1.4,2.7,1.6c1.2,0.2,4,0,4,0s-0.4,2.2,0.6,3.4c1,1.2,3,1.6,4.9,0.7\n\tc2.8-1.3,3.9,0.4,4.7,1.1c0.7,0.7,0.7,0.7,0.7,0.7s-4.9,0-6.9-0.4c-3.6-0.7-7.6-2.3-9.5-4.1c-1.8-1.7-4.4-3.8-4.3-6.1\n\tc0.1-2.3,1.7-3.7,3.2-3.4c1.5,0.2,2.9,2.1,2.5,3.8c-0.5,1.7-0.1,3.4,1.7,1.2c1.8-2.2,1.6-4.4,0.2-5.9c-1.3-1.5-3.2-1.8-5-1.8\n\tc-1.8,0-5.6,1.6-5.2,7c0,0,0,0,0,0c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.3,0.2,0.5,0.4,0.6c0,0.1,0,0.1,0,0.2c-0.2,0.1-0.4,0.4-0.4,0.6\n\tc0,0.4,0.3,0.7,0.7,0.7c-0.3,0.1-0.6,0.4-0.6,0.7c0,0.4,0.3,0.7,0.7,0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.3,0,0.5-0.2,0.7-0.4c0.1,0.2,0.3,0.4,0.5,0.5c-0.2,0-0.4,0.2-0.5,0.4c-0.1-0.3-0.4-0.5-0.7-0.5c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c0.3,0,0.6-0.2,0.7-0.4c0.1,0.2,0.3,0.4,0.5,0.4c-0.3,0.1-0.6,0.3-0.6,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7c0-0.3-0.2-0.6-0.6-0.7c0.3-0.1,0.6-0.3,0.6-0.7c0-0.3-0.2-0.6-0.6-0.7c0.2,0,0.4-0.1,0.5-0.3\n\tc1.6,1.4,3.6,2.2,5.2,2.8c2.9,1.2,10.7,2.7,13.6,2.5c2.1-0.2,2.6,0,1,1c-1.6,1-4.7,1.6-7,1.6s-5.8-0.2-6.4-0.6\n\tc-0.6-0.4-2.1-1.5-3.1-1.2s-1.7,2,0,2.8c0.1,0,0.2,0.1,0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.3,0.2,0.5,0.4,0.5\n\tc-0.3,0-0.4,0.2-0.4,0.5c0,0.3,0.2,0.5,0.4,0.5c-0.3,0-0.4,0.2-0.4,0.5c0,0.3,0.2,0.5,0.4,0.5c-0.3,0-0.4,0.2-0.4,0.5\n\tc0,0.3,0.2,0.5,0.4,0.5c-0.3,0-0.4,0.2-0.4,0.5c0,0.3,0.2,0.5,0.4,0.5c-0.3,0-0.4,0.2-0.4,0.5c0,0.3,0.2,0.5,0.4,0.5\n\tc-0.3,0-0.4,0.2-0.4,0.5c0,0.3,0.2,0.5,0.4,0.5c-0.3,0-0.4,0.2-0.4,0.5c0,0.1,0.1,0.2,0.1,0.3c-0.1,0.1-0.2,0.3-0.3,0.4\n\tc-0.5,0.5-0.8,0.8-1.1,1c-0.3,0.2-0.9,0.3-0.9,0.3s0.5,0,0.8,0c0.3,0,0.6-0.2,0.6-0.2s-0.1,0.4-0.2,0.8c0,0.4,0.2,1.1,0.3,1.4\n\tc0.2,0.3,0.6,0.7,0.7,0.8c0,0,0.1,0.1,0.1,0.1c-0.2,0.1-0.3,0.2-0.3,0.4c0,0.2,0.2,0.4,0.4,0.4c-0.1,0-0.2,0.1-0.2,0.2\n\tc0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.2-0.1,0.2-0.2c0-0.1-0.1-0.2-0.2-0.2c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.4\n\tc0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.5-0.5,0.7-0.8c0.2-0.3,0.4-1,0.3-1.4c0-0.4-0.2-0.8-0.2-0.8s0.3,0.1,0.6,0.2c0.3,0,0.8,0,0.8,0\n\ts-0.6-0.1-0.9-0.3c-0.3-0.2-0.6-0.5-1.1-1c-0.1-0.1-0.2-0.2-0.3-0.3c0.1-0.1,0.2-0.2,0.2-0.4c0-0.3-0.2-0.5-0.4-0.5\n\tc0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.4-0.5c0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.4-0.5c0.2,0,0.4-0.2,0.4-0.5\n\tc0-0.3-0.2-0.5-0.4-0.5c0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.4-0.5c0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.4-0.5\n\tc0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.4-0.5c0.2,0,0.4-0.2,0.4-0.5c0,0,0-0.1,0-0.1c1.6,0.6,3.7,1,5.6,1c-0.3,0.1-0.4,0.4-0.4,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7c0,0,0.1,0,0.1,0c2.5-0.1,5.6-1.2,7.4-2.1\n\tc1.7-0.9,3.1-1.5,3.1-1.5s-1.2,2.5-3.2,3.9c-1.7,1.3-4.6,1.7-6.9,1.8c0,0,0,0,0,0c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0,0,0,0,0.1c-2.1,0-3.6,0-3.6,0s0.3,0.2,0.8,0.4c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.3,0.2,0.5,0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.1,0.4,0.3,0.4c-0.1,0.3-0.4,0.7-0.8,1.2c-0.7,0.8-1.2,1.3-1.7,1.5c-0.5,0.3-1.3,0.4-1.3,0.4\n\ts0.8,0,1.3,0c0.4,0,0.9-0.2,0.9-0.2s-0.2,0.6-0.2,1.2c0,0.3,0.1,0.7,0.2,1.1c-1.8,0-4,0.4-5,0.9c-1.4,0.6-1.8,1-1.8,1v-8.9\n\tc0,0-0.6-0.4-0.9-0.6l0-1.3c0,0,0.3-0.1,0.9-0.7c0.7-0.6,0.8-2.1,0.5-2.8c-0.3-0.7-1.2-1.5-1.4-1.8c-0.2-0.3-0.4-0.4-0.7,0.3\n\tc-0.4,0.6-0.9,1.5-1,2c-0.1,0.5-0.1,1.3,0.1,1.9c0.2,0.6,0.9,1.2,0.9,1.2l0,0.6c-0.2-0.3-0.4-0.5-0.4-0.5l-0.3-0.6v11.9v0.4\n\tc-0.8,0.2-1.7,0.3-2.6,0.2c-2.3-0.4-3.7-2.1-3.4-2.8c0.2-0.7,1-1.8,1.8-1.7c0.9,0.1,2.2,1,1.3,1.7c-0.9,0.7-0.1,1.5,0.5,0.6\n\tc0,0,0.8-1.1,0.1-2.2c-0.8-1-1.9-1.2-2.7-0.9c-0.8,0.3-2.6,1.6-2.2,3.4c0.4,1.8,1.6,3,3,3.7c1.4,0.7,5.1,2.1,5.7,2.9\n\tc0.7,0.8,1.3,2.9,1.3,2.9s-7-0.1-13.4-1.7c-6.4-1.6-12.5-5.4-13.6-7.3c-1.1-1.8-0.6-2.2-0.6-2.2s1-0.1,2.3-0.8\n\tc1.3-0.7,4.1-2.3,5.5-3.1c1.5-0.8,4.4,0.6,4.7,1.5c0.3,0.9,0.4,3.2-0.6,3.9c-0.9,0.6-2.3,0.8-3.1,0.2c-0.8-0.6-0.6-2.1-0.4-2.4\n\tc0.3-0.3,1.1-0.6,1.9-0.6c0.8-0.1-2.4-1.1-3,1c-0.6,2.1,0.4,3.6,1.9,3.9c1.6,0.3,3.2,0.2,4.1-1.5c0.8-1.7,1-3.3,0.5-4.7\n\tc-0.4-1.1-1.1-2.5-2.3-3.5c0.3-0.1,0.5-0.4,0.5-0.7c0,0,0,0,0,0c0.1,0.2,0.3,0.3,0.6,0.3c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0,0,0,0,0c-0.1-0.2-0.3-0.3-0.6-0.3c-0.4,0-0.7,0.3-0.7,0.7c0,0,0,0,0,0.1\n\tc0,0,0,0,0,0c-1.7-0.8-7.2-1-8.8-0.6c-0.1,0-0.3,0.1-0.4,0.1v-4.9c0,0-0.4-0.3-0.5-0.4c0,0,0,0-0.1,0l0-0.7c0,0,0.2-0.1,0.6-0.4\n\tc0.4-0.4,0.5-1.3,0.3-1.7c-0.2-0.4-0.7-0.9-0.8-1.1c-0.1-0.2-0.2-0.2-0.4,0.2c-0.2,0.4-0.6,0.9-0.6,1.2c-0.1,0.3-0.1,0.8,0,1.2\n\tc0.1,0.4,0.7,0.7,0.7,0.7l0,0.5c-0.1-0.1-0.1-0.2-0.2-0.2c-0.2-0.2-0.2-0.3-0.2-0.4c0-0.1-0.1-0.1-0.1,0.1c0,0.1,0,5.7,0,6.6\n\tc-0.5,0.2-1,0.5-1.6,0.8v-13c0,0-1-0.7-1.4-1c0,0-0.1-0.1-0.1-0.1l0-1.9c0,0,0.7-0.1,1.7-1.1c1-1,1.2-3.3,0.8-4.4\n\tc-0.4-1.1-1.8-2.3-2.1-2.7c-0.3-0.4-0.6-0.6-1.1,0.4c-0.6,1-1.5,2.2-1.6,3.1c-0.2,0.9-0.2,2,0.1,3c0.3,1,1.7,1.8,1.7,1.8l0,1.3\n\tc-0.2-0.2-0.4-0.4-0.6-0.6c-0.4-0.5-0.5-0.8-0.6-1c-0.1-0.2-0.3-0.2-0.3,0.3c0,0.4,0,17.6,0,17.6v0c-0.8,0.3-1.5,0.6-2.1,0.7\n\tc-2.2,0.4-5.4,0.1-6.7-0.8c-1.3-0.9-2.4-2.4-2.3-3.6c0.1-1.2,1.1-2.4,2.4-2.5c1.3-0.1,2.6,0.9,2.5,1.9c-0.1,1-0.9,1.8-2,1.7\n\tc-1.1-0.1,0.3,1.6,1.3,0.8c1-0.7,1.7-1.3,1.8-2.8c0.2-1.5-1.1-2.5-1.8-2.8c-0.7-0.3-3-0.7-4,0.7c-1,1.5-1.8,3.1-0.9,5.5\n\tc0.2,0.6,0.6,1.1,1,1.7c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.4,0.3,0.7,0.7,0.7c0.2,0,0.3-0.1,0.4-0.2c0.3,0.3,0.6,0.6,0.9,0.9\n\tc-0.2,0.1-0.3,0.3-0.3,0.6c0,0.4,0.3,0.7,0.7,0.7c0.3,0,0.5-0.2,0.7-0.4c0.5,0.4,1,0.7,1.5,0.9c-0.1,0.1-0.2,0.3-0.2,0.5\n\tc0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0,0,0,0,0,0c0,0,0,0,0.1,0c0.8,0.2,1.5,0.3,2.1,0.4c0,0,0,0.1,0,0.1\n\tc0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0,0,0,0,0,0c0.7,0.1,1.2,0.1,1.5,0.2c0.3,0.1,0.5,0.3,0.7,0.7c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5c0.2,0,0.3-0.1,0.4-0.2c0.3,0.5,0.6,1.1,1,1.8c1.2,1.8,4.1,5.5,8.5,7.2c4.3,1.7,8.6,4.1,13.6,4.1\n\tc1.2,0,3.2,0,5.5,0c0,0.1,0,0.1,0,0.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.1,0-0.1,0-0.2c3,0,6.4,0,9.3,0\n\tc0,1,0.7,1.9,1.6,2.3c-0.4,0.7-0.9,1.6-1.7,2.5c-1.9,2.2-3.2,3.4-4.5,4.2c-0.2,0.1-0.3,0.2-0.5,0.2c0.1-0.1,0.1-0.2,0.1-0.3\n\tc0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c-1.3,0.5-2.7,0.7-2.7,0.7s1.2,0,2.3,0c0,0.2,0.2,0.4,0.5,0.4\n\tc0.3,0,0.4-0.2,0.5-0.4c0.1,0,0.1,0,0.2,0c1.2-0.1,2.5-0.6,2.5-0.6s-0.6,1.7-0.6,3.2c-0.1,1.5,0.8,4.5,1.4,5.7\n\tc0.6,1.1,2.3,2.9,2.7,3.3c0.1,0.1,0.3,0.3,0.4,0.4c-0.7,0.3-1.1,0.9-1.1,1.7c0,1,0.7,1.7,1.6,1.8c-0.4,0.1-0.7,0.4-0.7,0.9\n\tc0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9c0-0.4-0.3-0.8-0.7-0.8c0.9-0.1,1.7-0.9,1.7-1.8c0-0.8-0.5-1.4-1.1-1.7\n\tc0.1-0.1,0.3-0.3,0.4-0.4c0.4-0.4,2.1-2.2,2.7-3.3c0-0.1,0.1-0.2,0.1-0.2c0.3,0,0.7,0,1,0c0.4,0,0.9-0.2,0.9-0.2s-0.2,0.6-0.2,1.2\n\tc0,0.5,0.3,1.6,0.5,2.1c0.2,0.4,0.8,1.1,1,1.2c0.1,0,0.1,0.1,0.2,0.1c-0.2,0.1-0.4,0.3-0.4,0.6c0,0.4,0.3,0.6,0.6,0.7\n\tc-0.1,0-0.3,0.2-0.3,0.3c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3c0.3,0,0.6-0.3,0.6-0.7\n\tc0-0.3-0.2-0.5-0.4-0.6c0,0,0.1-0.1,0.2-0.1c0.2-0.1,0.8-0.8,1-1.2c0.2-0.4,0.5-1.5,0.5-2.1c0-0.5-0.2-1.2-0.2-1.2s0.5,0.2,0.9,0.2\n\tc0.3,0,0.7,0,0.9,0c-0.1,0-0.2,0.2-0.2,0.3c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3c0-0.1-0.1-0.3-0.2-0.3c0.1,0,0.1,0,0.1,0\n\ts0,0-0.1,0c0.3-0.1,0.6-0.3,0.6-0.7c0-0.3-0.2-0.5-0.4-0.6c0.1,0,0.1-0.1,0.2-0.1c0.2-0.1,0.8-0.8,1-1.2c0.2-0.4,0.5-1.5,0.5-2.1\n\tc0-0.5-0.2-1.2-0.2-1.2s0.5,0.2,0.9,0.2c0.4,0,1.3,0,1.3,0s-0.8-0.1-1.3-0.4c-0.5-0.3-1-0.7-1.7-1.5c-0.5-0.6-0.8-1.2-0.9-1.4\n\tc0.2-0.1,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c-0.1,0.3-0.3,0.8-0.9,1.4\n\tc-0.7,0.8-1.2,1.3-1.7,1.5c-0.2,0.1-0.5,0.2-0.7,0.3c0.1-0.1,0.1-0.2,0.1-0.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.2,0.1,0.4,0.3,0.4c0,0,0,0,0,0s0,0,0,0c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0,0.2-0.1c0.3,0,0.6,0,0.8,0c0.4,0,0.9-0.2,0.9-0.2\n\ts-0.2,0.6-0.2,1.2c0,0.5,0.3,1.7,0.5,2.1c0.2,0.4,0.8,1.1,1,1.2c0.1,0,0.1,0.1,0.2,0.1c-0.2,0.1-0.4,0.3-0.4,0.6\n\tc0,0.2,0.1,0.4,0.3,0.6c-0.2-0.1-0.5-0.2-0.7-0.3c-0.5-0.3-1-0.7-1.7-1.5c-0.7-0.8-0.9-1.5-0.9-1.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c0,0-0.2,0.8-0.9,1.6c-0.7,0.8-1.2,1.3-1.7,1.5\n\tc-0.3,0.2-0.7,0.3-1,0.3c0.6-1.3,1.3-4,1.2-5.4c-0.1-1.5-0.6-3.2-0.6-3.2s1.3,0.6,2.5,0.6c0,0,0,0,0,0c0.1,0.1,0.2,0.2,0.4,0.2\n\tc0.2,0,0.3-0.1,0.4-0.2c1.2,0,2.6,0,2.6,0s-1.4-0.2-2.6-0.6c-0.1-0.1-0.2-0.2-0.4-0.2c0,0,0,0-0.1,0c-0.2-0.1-0.4-0.2-0.6-0.3\n\tc-1.3-0.8-2.6-2-4.5-4.2c-0.8-0.9-1.3-1.8-1.7-2.5c0.9-0.3,1.6-1.2,1.6-2.2c1.7,0,2.8,0,2.8,0s0.8,0,2,0c0,0,0,0.1,0,0.1\n\tc0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0,0,0-0.1,0-0.1c0.9,0,1.8,0,2.8,0c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.3,0.2,0.5,0.5,0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.1,0-0.2-0.1-0.3c1.5,0,2.9-0.1,3.7-0.2c0.6-0.1,1.6-0.4,2.7-0.8c0.4,0.5,1.7,2.3,2.3,5\n\tc0.7,3.2,0.5,10.1-2.5,14.5c-2.9,4.4-9.6,10.1-16,10.8c-6.4,0.7-16-3.7-19.6-5.6c-3.7-2-9.6-7.9-10.6-9.1c-1-1.2,0-1.7,2.7-3.2\n\tc0,0,2-1.5,3.1-1.7c1.2-0.2,2.5-0.1,3.2,0.5c0.7,0.6,1.7,1.1,1.7,2.6c0,1.4-0.2,2.3-1.2,2.7c-1,0.4-2,0.2-2.5-0.2\n\tc-0.4-0.5-0.5-1.5-0.3-1.9c0.2-0.5,0.7-0.9,1.2-0.9c0.5,0,1.2-0.2,1.2-0.2s-1.8-0.7-2.7,0.2c0,0-1.9,1.8-0.8,3.4\n\tc1.1,1.6,3,1.9,4,1.4c1-0.5,2.5-1.4,2.7-3c0.1-0.3,0.1-0.7,0.1-1c0.3,0,0.6,0,0.9,0c0.4,0,0.9-0.2,0.9-0.2s-0.2,0.6-0.2,1.2\n\tc0,0.5,0.3,1.7,0.5,2.1c0.2,0.4,0.8,1.1,1,1.2c0.1,0,0.1,0.1,0.2,0.1c-0.2,0.1-0.4,0.3-0.4,0.6c0,0.4,0.3,0.6,0.6,0.7\n\tc-0.1,0-0.3,0.2-0.3,0.3c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3c0.3,0,0.6-0.3,0.6-0.7c0,0,0,0,0,0\n\tc0.3,0,0.7,0,1,0c0.4,0,0.9-0.2,0.9-0.2s-0.2,0.6-0.2,1.2c0,0.5,0.3,1.7,0.5,2.1c0.2,0.4,0.8,1.1,1,1.2c0.1,0,0.1,0.1,0.2,0.1\n\tc-0.2,0.1-0.4,0.3-0.4,0.6c0,0.4,0.3,0.6,0.6,0.7c-0.1,0-0.3,0.2-0.3,0.3c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3\n\tc0-0.2-0.1-0.3-0.2-0.3c0.3,0,0.6-0.3,0.6-0.7c0-0.3-0.2-0.5-0.4-0.6c0.1-0.1,0.1-0.1,0.2-0.1c0.2-0.1,0.8-0.8,1-1.2\n\tc0.2-0.4,0.5-1.5,0.5-2.1c0-0.5-0.2-1.2-0.2-1.2s0.5,0.2,0.9,0.2c0.4,0,1.3,0,1.3,0s-0.8-0.1-1.3-0.4c-0.5-0.3-1-0.7-1.7-1.5\n\tc-0.6-0.7-0.9-1.4-0.9-1.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.4,0.5\n\tc0,0.1-0.3,0.8-0.9,1.5c-0.7,0.8-1.2,1.3-1.7,1.5c-0.3,0.2-0.8,0.3-1.1,0.3c0-0.2-0.2-0.4-0.4-0.5c0.1-0.1,0.1-0.1,0.2-0.1\n\tc0.2-0.1,0.8-0.8,1-1.2c0.2-0.4,0.5-1.5,0.5-2.1c0-0.5-0.2-1.2-0.2-1.2s0.5,0.2,0.9,0.2c0.4,0,1,0,1.2,0c0,0.2,0.2,0.4,0.5,0.4\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0,0,0,0,0.1c-0.2,0-0.9-0.2-1.3-0.4c-0.5-0.3-1-0.7-1.7-1.5\n\tc-0.6-0.6-0.8-1.2-0.9-1.5c0.3,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.4,0.5\n\tc-0.1,0.2-0.3,0.8-0.9,1.5c-0.7,0.8-1.2,1.3-1.6,1.5c-0.3,0.2-0.7,0.3-1,0.3c0-1.1-0.5-2-0.8-2.6c-0.4-0.7-0.8-0.9-0.8-0.9l-0.8-0.4\n\tc0,0,1.9,0.6,2.7,1.2c0.9,0.6,0.9,0.6,0.9,0.6s-1-2.4-4.4-3.8c-3.4-1.4-5.6-1.3-7.7-1c-0.7,0.1-1.5,0.3-2.4,0.5v-1.2\n\tc0,0-0.4-0.3-0.6-0.4c0,0,0,0-0.1,0l0-0.7c0,0,0.3-0.1,0.6-0.4c0.4-0.4,0.5-1.3,0.3-1.7c-0.2-0.4-0.7-0.9-0.8-1.1\n\tc-0.1-0.2-0.2-0.2-0.4,0.2c-0.2,0.4-0.6,0.9-0.6,1.2c-0.1,0.3-0.1,0.8,0,1.2c0.1,0.4,0.7,0.7,0.7,0.7l0,0.5\n\tc-0.1-0.1-0.1-0.2-0.2-0.2c-0.2-0.2-0.2-0.3-0.2-0.4c0-0.1-0.1-0.1-0.1,0.1c0,0.1,0,1.3,0,2.8c-0.9,0.3-1.8,0.7-2.5,1v-5.2\n\tc0,0-0.4-0.3-0.6-0.4c0,0,0,0-0.1,0l0-0.7c0,0,0.3-0.1,0.6-0.4c0.4-0.4,0.5-1.3,0.3-1.7c-0.2-0.4-0.7-0.9-0.8-1.1\n\tc-0.1-0.2-0.2-0.2-0.4,0.2c-0.2,0.4-0.6,0.9-0.6,1.2c-0.1,0.3-0.1,0.8,0,1.2c0.1,0.4,0.7,0.7,0.7,0.7l0,0.5\n\tc-0.1-0.1-0.1-0.2-0.2-0.2c-0.2-0.2-0.2-0.3-0.2-0.4c0-0.1-0.1-0.1-0.1,0.1c0,0.2,0,6.8,0,6.8v0.2c-0.6,0.3-1.6,0.7-2.7,0.9V176\n\tc0,0-0.4-0.3-0.5-0.4c0,0,0,0-0.1,0l0-0.7c0,0,0.2-0.1,0.6-0.4c0.4-0.4,0.5-1.3,0.3-1.7c-0.2-0.4-0.7-0.9-0.8-1.1\n\tc-0.1-0.2-0.2-0.2-0.4,0.2c-0.2,0.4-0.6,0.9-0.6,1.2c-0.1,0.3-0.1,0.8,0,1.2c0.1,0.4,0.7,0.7,0.7,0.7l0,0.5\n\tc-0.1-0.1-0.1-0.2-0.2-0.2c-0.2-0.2-0.2-0.3-0.2-0.4c0-0.1-0.1-0.1-0.1,0.1c0,0.1,0,3.8,0,5.7c-1.8,0.1-4.3,0.2-5.6-0.9\n\tc-1.4-1.2-2.6-2.9-2.3-3.9c0.3-1,0.4-1.4,1.3-1.8c0.9-0.5,1.7-0.6,2.4-0.2c0.7,0.4,1.4,1.3,1.2,2.2c-0.2,0.9-1.1,1.5-1.7,1.6\n\tc-0.6,0.1,1.5,0.7,2.3-0.7c0.8-1.5,0.4-2.8-0.4-3.4c-0.7-0.6-2.2-1.2-3.4-0.7c-1.2,0.5-2.4,1-2.7,2.4c-0.3,1.4,0,2,0,2s-1-1-1.3-1.4\n\tc-0.3-0.4,0.1,0.6,0.5,1.4c0.4,0.8,2.4,4.4,4.1,5.6c1.7,1.2,5,2.9,7.1,3.2c0.8,0.1,1.3,0.2,1.8,0.2c0,0.1,0,0.1,0,0.2\n\tc0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0,0,0-0.1,0-0.1c0.1,0,0.1,0,0.1,0s1.5,2,3.5,4.2c-0.2,0.1-0.3,0.2-0.3,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5c0.2,0,0.4-0.1,0.4-0.3c1.3,1.5,2.7,3.1,4,4.2c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.3,0.2,0.5,0.5,0.5\n\tc0.1,0,0.2,0,0.3-0.1c1.3,1.2,3,2.6,4.6,3.8c-0.2,0-0.4,0.2-0.4,0.5c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0,0,0,0,0-0.1\n\tc1.2,0.9,2.4,1.7,3.5,2.3c0,0,0,0.1,0,0.1c0,0.3,0.2,0.5,0.5,0.5c0.1,0,0.3-0.1,0.4-0.2c0.7,0.4,1.4,0.6,2,0.8\n\tc0.5,0.2,1.1,0.3,1.6,0.4c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.1,0-0.2-0.1-0.2\n\tc1.4,0.3,2.9,0.6,4,0.8c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.1,0-0.2-0.1-0.3\n\tc0.9,0.1,1.6,0.2,1.8,0.2c0.6-0.1,1.4,0.1,1.4,0.1s-1.9,1.3-3.5,1.7c0,0,0,0-0.1,0c-0.1,0-0.2,0-0.3,0.1c-1.3,0.3-4.4,1.3-8.2,1.9\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0,0,0.1,0,0.1c-0.8,0.1-1.6,0.2-2.4,0.2c-0.2-0.2-0.4-0.4-0.6-0.6\n\tc-0.6-0.6-0.8-1.3-1-1.6c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.2,0.2,0.4,0.4,0.5\n\tc-0.1,0.3-0.4,0.9-1,1.6c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0-0.3,0-0.5,0c-0.3,0-0.6,0-0.9-0.1c0.1-0.4,0.1-0.7,0.1-0.9\n\tc0-0.6-0.3-1.3-0.3-1.3s0.5,0.2,1,0.3c0.5,0,1.4,0,1.4,0s-0.9-0.1-1.5-0.4c-0.5-0.3-1.1-0.8-1.8-1.7c-0.7-0.7-0.9-1.5-1-1.7\n\tc0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c-0.1,0.2-0.3,0.9-1,1.7\n\tc-0.8,0.9-1.3,1.4-1.8,1.7c-0.1,0.1-0.2,0.1-0.3,0.1c0.2-0.5,0.5-1.6,0.5-2.2c0-0.6-0.3-1.3-0.3-1.3s0.5,0.2,1,0.3\n\tc0.5,0,1.4,0,1.4,0s-0.9-0.1-1.5-0.4c-0.5-0.3-1.1-0.8-1.8-1.7c-0.8-0.9-1-1.7-1-1.7h0c0,0-0.2,0.9-1,1.7c-0.8,0.9-1.3,1.4-1.8,1.7\n\tc-0.2,0.1-0.5,0.2-0.7,0.3c0.3-0.3,0.7-0.8,0.9-1.1c0.3-0.5,0.6-1.7,0.6-2.3c0-0.6-0.3-1.3-0.3-1.3s0.5,0.2,1,0.3c0.2,0,0.6,0,0.9,0\n\tc0,0.1-0.1,0.1-0.1,0.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.3,0.1-0.4,0.2\n\tc-0.3-0.1-0.7-0.2-1-0.4c-0.5-0.3-1.1-0.8-1.8-1.7c-0.8-0.9-1-1.7-1-1.7h0c0,0-0.2,0.9-1,1.7c-0.8,0.9-1.3,1.4-1.8,1.7\n\tc-0.5,0.3-1.5,0.4-1.5,0.4s0.9,0,1.4,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3c0,0.6,0.3,1.8,0.6,2.3c0.3,0.5,0.9,1.2,1.1,1.3\n\tc0.1,0.1,0.1,0.1,0.2,0.2c-0.3,0.1-0.4,0.4-0.4,0.7c0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4\n\tc0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7c0.1-0.1,0.1-0.1,0.2-0.2c0,0,0,0,0,0\n\tc0.3,0,0.6,0,0.8,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3c0,0.6,0.3,1.8,0.6,2.3c0.3,0.5,0.9,1.2,1.1,1.3c0.1,0.1,0.1,0.1,0.2,0.2\n\tc-0.1,0-0.1,0.1-0.2,0.1c-4-0.4-7.9-1.3-12.2-3.7c-7.2-4-15.1-8.9-16.2-9.9c-1.1-1-3.3-2.9-3.3-2.9s2.5-1.4,4.3-2.5\n\tc0,1,0.2,1.7,0.2,1.5c0.1-0.4,1.2-2.1,2.2-2.9c1-0.9,3.9-1.4,5.5-1.5c1.6-0.1,3.2,1.6,3.9,2.5c0.7,0.9,1.1,2.8,0.7,4.2\n\tc-0.4,1.4-1.6,2.2-2.9,2.5c-1.3,0.2-3.6-0.4-3.9-1.4c-0.4-1-0.2-2.5,0.6-3.4c0.6-0.7,1.4-0.7,1.8-0.7c-3.1-0.6-3.6,1.1-3.7,2.1\n\tc-0.1,1.1,0.1,2.7,1.4,3.7c1.2,1,3.6,1.1,5.8,0.1c2.2-1,2.5-3.4,2.5-4.7c0-1.2-1.3-3.8-2.1-4.5c-0.3-0.3-1.1-0.8-2-1.3\n\tc0.6,0.1,1.2,0.1,1.5,0.2c0.9,0.2,2.9,1,3.5,1.6c0.6,0.6,1.6,1.3,1.6,1.3s-1.9-2.3-4-3.7c-1.7-1.1-4.3-2.8-6.6-3.5\n\tc0.3-0.1,0.4-0.4,0.4-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.3,0.2,0.5c-0.2,0-0.4-0.1-0.5-0.1\n\tc-1-0.1-2.4-0.1-3.8-0.1c0.1-0.1,0.2-0.3,0.2-0.5c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.4,0.2,0.5\n\tc-1.4,0.1-2.7,0.2-3.3,0.3c-0.7,0.1-1.3,0.3-2.2,0.6c0-0.1,0.1-0.2,0.1-0.3c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.3,0.2,0.5,0.4,0.7c-0.3,0.1-0.6,0.2-0.9,0.3v-12.9c0,0-1-0.7-1.4-1c0,0-0.1-0.1-0.1-0.1l0-1.9c0,0,0.7-0.1,1.7-1.1\n\tc1-1,1.2-3.2,0.8-4.4c-0.4-1.1-1.8-2.3-2.1-2.7c-0.3-0.4-0.6-0.6-1.1,0.4c-0.6,1-1.5,2.2-1.6,3.1c-0.2,0.9-0.2,2,0.1,3\n\tc0.3,1,1.7,1.8,1.7,1.8l0,1.3c-0.2-0.2-0.4-0.4-0.6-0.6c-0.4-0.5-0.5-0.8-0.6-1c-0.1-0.2-0.3-0.2-0.3,0.3c0,0.4,0,16.2,0,17.5\n\tc-1.1,0.5-2.2,1.1-3.4,1.7l0.8-0.5v-6c0,0-0.4-0.3-0.6-0.4c0,0,0,0-0.1-0.1l0-0.2c0,0,0.3-0.1,0.7-0.5c0.4-0.4,0.5-1.4,0.3-1.9\n\tc-0.2-0.5-0.8-1-0.9-1.2c-0.1-0.2-0.2-0.3-0.5,0.2c-0.3,0.4-0.6,1-0.7,1.3c-0.1,0.4-0.1,0.9,0,1.3c0,0.1,0.1,0.2,0.1,0.3\n\tc0,0.9,0,7.5,0,7.5v0.4c-1.8,0.7-3.6,1.2-5.6,1.2c-1,0-1.9-0.1-2.8-0.3c0.8-0.2,2.1-0.7,4-2.5c0,0-1.8,1.4-4.1,1.6\n\tc-2.3,0.2-4.3-0.3-5.8-1.6c-0.9-1.1-1.4-2.3-1.2-3.8c0.1-1.5,0.5-2.7,2-3.6c1.5-0.9,2.2-1.1,3.1-0.7c0.9,0.4,2.2,0.9,2.6,2.2\n\tc0.4,1.3,0.5,2.3-0.1,3.2c-0.6,0.9-1.1,1.2-1.1,1.2s2.2-0.4,2.1-3.1c-0.1-2.7-0.7-4.2-2.5-4.7c-1.7-0.5-2.7-0.5-4.4,0.2\n\tc-1.7,0.7-2.7,2.5-2.8,3.8c-0.1,1.3-0.2,2.1-0.2,2.5c0,0.4-1.5-2-1.6-2.7C1.3,179.1,1.3,180.9,1.9,182.7z M100.6,155.9\n\tc0,0.2,0.1,0.4,0.3,0.5c-0.1,0.3-0.4,0.7-0.8,1.2c-0.7,0.8-1.2,1.3-1.7,1.5c-0.5,0.3-1.3,0.4-1.3,0.4s0.8,0,1.3,0\n\tc0.4,0,0.9-0.2,0.9-0.2s-0.2,0.6-0.2,1.2c0,0.4,0.2,1.2,0.4,1.8c-0.8,0.4-4.8,2.6-7,2.8c-2.3,0.2-6.9-3.7-7-4.3\n\tc-0.1-0.6,2.6-1.6,4.2-2.2c0.8-0.3,1.5-0.4,2-0.4c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.3,0.3,0.6,0.6,0.7c-0.1,0-0.3,0.2-0.3,0.3\n\tc0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3c0.3,0,0.6-0.3,0.6-0.6c0,0,0.1,0.1,0.1,0.1\n\tc0.7,0.5,1.6,2.2,0.1,2.9c-1.5,0.7-2.5-0.6-2.2-1.1c0.2-0.5,1.2-0.6,1.2-0.6s-2.1-0.9-2.2,0.2c-0.1,1.1,0.4,2.9,2.3,2.7\n\tc2-0.2,2.9-1.2,2.9-2.8c0-1.1-0.7-2.5-1.6-3.4c0,0,0,0,0,0c0.2-0.4,0.5-1.5,0.5-2.1c0-0.5-0.2-1.2-0.2-1.2s0.5,0.2,0.9,0.2\n\tc0.1,0,0.2,0,0.3,0c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.2,0.2,0.4,0.4,0.4c-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0.1,0.2,0.2,0.2\n\tc0.1,0,0.2-0.1,0.2-0.2c0-0.1-0.1-0.2-0.2-0.2c0.2,0,0.4-0.2,0.4-0.4c0-0.1-0.1-0.3-0.2-0.3c0.2,0,0.4,0,0.4,0s-0.2,0-0.5-0.1\n\tc0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.5-0.5,0.7-0.8c0.2-0.3,0.4-1,0.3-1.4c0-0.4-0.2-0.8-0.2-0.8s0.3,0.1,0.6,0.2c0.3,0,0.8,0,0.8,0\n\ts-0.6-0.1-0.9-0.3c-0.3-0.2-0.6-0.5-1.1-1c-0.3-0.3-0.5-0.7-0.5-0.8c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.6,0.7c-0.1,0.2-0.2,0.5-0.5,0.9c-0.5,0.5-0.8,0.8-1.1,1c-0.3,0.2-0.9,0.3-0.9,0.3\n\ts0.5,0,0.8,0c0.3,0,0.6-0.2,0.6-0.2s-0.1,0.4-0.2,0.8c0,0.4,0.2,1.1,0.3,1.4c0.1,0.2,0.4,0.5,0.5,0.7c-0.1,0-0.1-0.1-0.2-0.1\n\tc-0.5-0.3-1-0.7-1.7-1.5c-0.4-0.4-0.6-0.9-0.8-1.2c0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.5-0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0,0,0,0,0,0c0.6,0.2,1.3,0.5,2,0.7c0.1,0.4,0.3,0.6,0.7,0.6c0.3,0,0.5-0.1,0.6-0.3c1,0.2,2,0.2,3,0\n\tc0.5-0.1,1-0.2,1.4-0.4c0,0.1,0,0.1,0,0.2c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5\n\tc-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5\n\tc0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5\n\tc-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5\n\tc0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5\n\tc-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5\n\tc0,0.2,0.1,0.4,0.3,0.5C100.8,155.5,100.6,155.7,100.6,155.9z M84.5,126.9c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1-0.3-0.3-0.5-0.7-0.5\n\tc0.2,0,0.4-0.1,0.5-0.3C84.2,126.5,84.3,126.7,84.5,126.9z M186.3,126.9c0.1-0.2,0.3-0.3,0.4-0.5c0.1,0.2,0.3,0.3,0.6,0.3\n\tc-0.3,0-0.6,0.2-0.7,0.5C186.5,127.1,186.4,127,186.3,126.9z M170.2,143c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5\n\tc0-0.1,0-0.1,0-0.2c0.5,0.1,0.9,0.3,1.4,0.4c1,0.2,2,0.2,3,0c0.1,0.2,0.3,0.3,0.6,0.3c0.4,0,0.7-0.3,0.7-0.6c0.7-0.2,1.4-0.5,2-0.7\n\tc0,0,0,0,0,0c0,0.3,0.2,0.5,0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.2,0.4,0.4,0.5c-0.1,0.3-0.4,0.7-0.8,1.2\n\tc-0.7,0.8-1.2,1.3-1.7,1.5c-0.1,0-0.1,0.1-0.2,0.1c0.2-0.2,0.4-0.5,0.5-0.7c0.2-0.3,0.4-1,0.3-1.4c0-0.4-0.2-0.8-0.2-0.8\n\ts0.3,0.1,0.6,0.2c0.3,0,0.8,0,0.8,0s-0.6-0.1-0.9-0.3c-0.3-0.2-0.6-0.5-1.1-1c-0.3-0.3-0.5-0.7-0.5-0.9c0.3-0.1,0.6-0.3,0.6-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c-0.1,0.2-0.2,0.5-0.5,0.8c-0.5,0.5-0.8,0.8-1.1,1\n\tc-0.3,0.2-0.9,0.3-0.9,0.3s0.5,0,0.8,0c0.3,0,0.6-0.2,0.6-0.2s-0.1,0.4-0.2,0.8c0,0.4,0.2,1.1,0.3,1.4c0.2,0.3,0.6,0.7,0.7,0.8\n\tc0,0,0.1,0,0.1,0.1c-0.3,0.1-0.5,0.1-0.5,0.1s0.2,0,0.4,0c-0.1,0.1-0.2,0.2-0.2,0.3c0,0.2,0.2,0.4,0.4,0.4c-0.1,0-0.2,0.1-0.2,0.2\n\tc0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.2-0.1,0.2-0.2c0-0.1-0.1-0.2-0.2-0.2c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.2-0.4\n\tc0.1,0,0.2,0,0.3,0c0.4,0,0.9-0.2,0.9-0.2s-0.2,0.6-0.2,1.2c0,0.5,0.3,1.7,0.5,2.1c0,0,0,0,0,0c-0.9,0.9-1.6,2.3-1.6,3.4\n\tc0,1.6,1,2.6,2.9,2.8c2,0.2,2.5-1.6,2.3-2.7c-0.1-1.1-2.2-0.2-2.2-0.2s1,0.1,1.2,0.6c0.2,0.5-0.7,1.8-2.2,1.1\n\tc-1.5-0.7-0.6-2.5,0.1-2.9c0,0,0.1-0.1,0.1-0.1c0,0.3,0.3,0.6,0.6,0.6c-0.1,0-0.2,0.2-0.2,0.3c0,0.2,0.1,0.3,0.3,0.3\n\tc0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3c0.3,0,0.6-0.3,0.6-0.7c0-0.1,0-0.3-0.1-0.4c0.6,0,1.2,0,2,0.4\n\tc1.6,0.6,4.3,1.6,4.2,2.2c-0.1,0.6-4.7,4.5-7,4.3c-2.1-0.2-6.2-2.4-7-2.8c0.2-0.5,0.4-1.3,0.4-1.8c0-0.5-0.2-1.2-0.2-1.2\n\ts0.5,0.2,0.9,0.2c0.4,0,1.3,0,1.3,0s-0.8-0.1-1.3-0.4c-0.5-0.3-1-0.7-1.7-1.5c-0.4-0.4-0.6-0.9-0.8-1.2c0.2-0.1,0.3-0.2,0.3-0.5\n\tc0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5\n\tc0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5\n\tc0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5\n\tc0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5\n\tc0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5\n\tc0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5C170,143.4,170.2,143.2,170.2,143z M205.2,208.6c0-0.6-0.3-1.3-0.3-1.3\n\ts0.5,0.2,1,0.3c0.1,0,0.3,0,0.4,0c0.3,0.4,0.8,1,1,1.1c0.1,0.1,0.1,0.1,0.2,0.2c-0.1,0.1-0.2,0.1-0.3,0.2c-0.7,0.1-1.4,0.1-2.1,0.2\n\tC205.2,209,205.2,208.8,205.2,208.6z M117.2,199.5c0.7,0,1.4-0.1,2.1-0.3c-5,4.6-8.2,5.8-11.4,6.9c-1.3,0.4-2.6,0.5-3.7,0.3\n\tc3.5-2.1,6.3-4,7.4-5.6c0.3-0.4,0.6-0.8,1-1.3C113.4,199.5,115,199.6,117.2,199.5z M111.1,143.7c0.3,0.5,1.2,1.9,1.1,3.6\n\tc-0.1,2.3-1.1,5.5-3.6,8c-1.6,1.6-3.4,3.1-4.5,4c-0.2-0.1-0.3-0.1-0.5-0.2c-0.5-0.3-1-0.7-1.7-1.5c-0.4-0.4-0.6-0.9-0.8-1.2\n\tc0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5\n\tc0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5\n\tc0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5\n\tc0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5\n\tc0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5\n\tc0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5c0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5\n\tc0.2-0.1,0.3-0.2,0.3-0.5c0-0.2-0.1-0.3-0.2-0.4c2.6-0.9,4.7-2.2,5.5-3.1c1-1.1,1.7-2.2,1.7-2.2s0.2,3.1,1.2,4.5\n\tc1,1.5,3.8,3.7,4.2,3.8C114.3,144.8,111.7,144.2,111.1,143.7z M103.8,159.4c0.1,0,0.1,0,0.2,0c-0.5,0.4-0.8,0.6-0.8,0.6l-0.1,0.1\n\tc-0.1-0.5-0.2-0.9-0.2-0.9S103.3,159.4,103.8,159.4z M110.5,85c-0.1,1.8-0.3,5.9-0.3,8.7c0,2.1-0.1,2.9,0.2,4.4\n\tc-0.3,0.2-0.7,0.4-1,0.5c-0.4-2.3-1.2-8.4,0.1-11.6C109.8,86.3,110.2,85.7,110.5,85z M112.3,97c-0.3,0.2-0.6,0.4-0.9,0.6\n\tc0,0-0.2-0.6-0.4-1.8c-0.2-1.2-0.2-4.1-0.1-7c0.1-2.8,0.6-5.1,0.6-5.1l0-0.1c0.2-0.3,0.4-0.6,0.6-0.9c0,1.8-0.1,6.4-0.1,9.4\n\tC111.9,94.5,111.9,95.2,112.3,97z M113.8,95.5c-0.2,0.2-0.4,0.5-0.6,0.7c-0.1-0.5-0.4-1.2-0.5-1.9c-0.2-1.2-0.2-4.1-0.1-7\n\tc0.1-2.8,0.3-5.4,0.3-5.5c0.3-0.4,0.6-0.7,0.8-0.9c0,1.2-0.3,6.7-0.3,10C113.5,93,113.4,93.8,113.8,95.5z M119.2,86.7v0.9\n\tc-0.7,0.3-1.4,0.8-1.8,1.8c-0.7,1.7-1.7,3.5-2.8,5.1c-0.1-0.3-0.2-0.8-0.4-1.6c-0.2-1.2-0.2-4.1-0.1-7c0.1-2.4,0.4-4.8,0.5-5.5\n\tL119.2,86.7z M160.6,93.7c0-2.8-0.2-6.9-0.3-8.7c0.4,0.6,0.7,1.3,1,2c1.3,3.2,0.5,9.3,0.1,11.6c-0.3-0.2-0.7-0.3-1-0.5\n\tC160.7,96.6,160.6,95.8,160.6,93.7z M158.5,97c0.4-1.8,0.3-2.5,0.3-4.8c0-3-0.1-7.6-0.1-9.4c0.2,0.3,0.4,0.6,0.6,0.9l0,0.1\n\tc0,0,0.5,2.2,0.6,5.1c0.1,2.8,0.2,5.7-0.1,7c-0.2,1.2-0.4,1.8-0.4,1.8C159.1,97.4,158.8,97.2,158.5,97z M157,95.5\n\tc0.4-1.7,0.3-2.4,0.3-4.7c0-3.3-0.3-8.7-0.3-10c0.2,0.2,0.5,0.6,0.8,0.9c0,0.1,0.2,2.8,0.3,5.5c0.1,2.8,0.2,5.7-0.1,7\n\tc-0.1,0.7-0.3,1.4-0.5,1.9C157.4,95.9,157.2,95.7,157,95.5z M151.6,86.7l4.6-6.3c0.1,0.7,0.4,3.1,0.5,5.5c0.1,2.8,0.2,5.7-0.1,7\n\tc-0.2,0.8-0.3,1.4-0.4,1.6c-1.1-1.6-2.1-3.4-2.8-5.1c-0.4-1-1.1-1.6-1.8-1.8V86.7z M135.4,109.6c-0.4-0.4-3.4-3.6-5.7-7.3\n\tc-1.9-3-4.7-8.3-5.8-10.5c0.2-0.2,0.3-0.5,0.3-0.8c0.2-1.6-0.1-1.8-1.1-2.7c-0.4-0.3-1.1-0.7-1.8-0.8v-0.8c0.7-0.2,1.6-0.5,2.5-0.8\n\tc1.6-0.6,5,0.1,5,0.1s-2.4-3.5-5.8-5.3c-2.4-1.3-2.8-1.4-3.5-2.4c-0.7-1-0.1-3,0.7-3.7c0.7-0.7,2.8-1.2,4-0.1\n\tc1.6,1.4,2.8,2.5,4.4,4.1c1.1,1.2,3.2,3.3,4.4,3.2c1.2-0.1,2.3-1.8,2.3-1.8s-0.2-0.1-0.5-0.3l0-0.4c0,0-3-1.2-3.7-3.5\n\tc-0.7-2.3-1-4.6-0.8-5.8c0.2-1.2,1-2.5,1-2.5s0.5,2.2,1.2,3.2c0.7,1,2.1,2.6,2.3,2.6c0.1,0,0.2,0.3,0.2,0.6c-0.4,0.2-0.6,0.6-0.6,1\n\tc0,0.5,0.3,0.9,0.8,1.1c-0.2,0.1-0.4,0.4-0.4,0.6c0,0.4,0.3,0.7,0.7,0.7c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.3-0.2-0.5-0.4-0.6c0.5-0.2,0.8-0.6,0.8-1.1c0-0.5-0.3-1-0.8-1.1c0.1-0.2,0.3-0.5,0.4-0.5c0.2,0,1.5-1.6,2.3-2.6\n\tc0.7-1,1.2-3.2,1.2-3.2s0.8,1.4,1,2.5c0.2,1.2-0.1,3.5-0.8,5.8c-0.7,2.3-3.7,3.5-3.7,3.5l0,0.4c-0.3,0.2-0.5,0.3-0.5,0.3\n\ts1.1,1.7,2.3,1.8c1.2,0.1,3.3-2,4.4-3.2c1.6-1.7,2.8-2.8,4.4-4.1c1.2-1,3.3-0.6,4,0.1c0.7,0.7,1.4,2.8,0.7,3.7\n\tc-0.7,1-1.1,1.1-3.5,2.4c-3.4,1.8-5.8,5.3-5.8,5.3s3.4-0.7,5-0.1c0.9,0.3,1.8,0.6,2.5,0.8v0.8c-0.8,0.2-1.5,0.5-1.8,0.8\n\tc-1,0.9-1.4,1.1-1.1,2.7c0,0.3,0.2,0.5,0.3,0.8c-1.2,2.3-4,7.5-5.9,10.5C138.8,105.9,135.8,109.2,135.4,109.6z M168.8,157.5\n\tc-0.7,0.8-1.2,1.3-1.7,1.5c-0.1,0.1-0.3,0.1-0.5,0.2c-1.1-0.9-2.9-2.4-4.5-4c-2.5-2.5-3.4-5.6-3.6-8c-0.1-1.7,0.8-3.1,1.1-3.6\n\tc-0.6,0.5-3.2,1.1-2.9,1c0.4-0.1,3.2-2.3,4.2-3.8c1-1.5,1.2-4.5,1.2-4.5s0.7,1.1,1.7,2.2c0.8,0.9,2.9,2.2,5.5,3.1\n\tc-0.1,0.1-0.2,0.2-0.2,0.4c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5\n\tc0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5\n\tc-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5\n\tc0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5\n\tc-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5\n\tc0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5\n\tc-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0.1,0.4,0.3,0.5C169.4,156.7,169.1,157.1,168.8,157.5z M167,159.4c0.4,0,0.9-0.2,0.9-0.2\n\ts-0.2,0.5-0.2,0.9l-0.1-0.1c0,0-0.3-0.2-0.8-0.6C166.9,159.4,167,159.4,167,159.4z M166.7,206.4c-1.2,0.1-2.5,0.1-3.7-0.3\n\tc-3.3-1.2-6.4-2.3-11.4-6.9c0.7,0.2,1.4,0.3,2.1,0.3c2.1,0.1,3.8,0.1,4.7,0c0.3,0.5,0.7,0.9,1,1.3\n\tC160.5,202.4,163.3,204.3,166.7,206.4z M147.5,212.9c0.7-2.7,1.2-5.6,1.1-7.4c-0.1-2.1-0.6-4.4-1-6c1.4,1.3,4.1,3.8,6.3,5.2\n\tc3.1,2,9.6,4.7,11.4,4.9c0.4,0.1,0.9,0.1,1.5,0.1c-2,1-5.4,2.2-8.6,3C154.5,213.5,148.5,213,147.5,212.9z M144.9,189.7\n\tC144.9,189.7,144.9,189.7,144.9,189.7c0.8-0.1,2.1-0.6,5.4,1.1c2.1,1.1,4.4,3.8,6.3,6.3c-0.6,0.1-2,0.2-4.1-0.8\n\tc-2.8-1.3-6.4-5.4-7-6C145.4,190.1,145.2,189.9,144.9,189.7z M124.8,179.3c-3.7-1.5-5.6-5.4-6.4-6.9c-0.6-1.2-1.7-3.8-2.1-4.8\n\tc1.6-0.7,2.7-1.2,2.7-1.2s-0.6,1.7,0.3,3.4c0.9,1.7,1.6,2.8,3.2,4.2c1.7,1.5,5.2,2.8,6.9,2.5c1.7-0.3,2.9-1.4,2.9-1.4\n\ts-5.5,1.4-8.3-1.7c-2.8-3.1-3.7-4.6-3.3-6.4c0.4-1.7,1-3.5,1.6-3.9c0.6-0.4,2.2-1.2,3.7-1.1c1.5,0.1,3,1.8,3,1.8s-0.7-2.3-2.2-2.9\n\tc-1.5-0.6-2.9,0.1-2.9,0.1s1-1.6,1.7-1.5c0.7,0.1-1.6-0.7-2.8,0.6c-1.2,1.3-3,3.2-5.3,4.5c-2.3,1.3-7.1,2.6-9.7,2.6\n\tc-2.6,0-6.6-0.2-6.6-0.2s2.7-0.6,5.8-3c3.1-2.4,3.4-2.8,3.4-2.8s0.6,1.6,2.3,2.4c1.7,0.8,3.8,1.2,5.3,0c1.6-1.1,2.6-2.4,2.5-4.3\n\tc-0.1-1.9-1.1-2.3-2.3-2.4c-1.6-0.2-2.8,1.3-3,2.1c-0.2,0.8,0.4,1.6,0.4,1.6s0.2-1.7,1.5-2.2c1.3-0.6,2.3-0.2,2.3,0.8\n\tc0,1-0.7,2.7-2.1,2.8c-1.4,0.1-2.9-0.6-3.3-1.4c-0.4-0.8-0.4-2.1,0.4-3.1c0.7-1,6.4-6.7,9.8-7.9c3.4-1.2,9.4-1.4,9.4-1.4h1.1\n\tc0,0-3.1-1.7-5.1-1.9c-1.9-0.3-2.4-0.2-2.4-0.2s4-3.2,5.1-5.2c1.1-2,1.8-3.6,1.8-3.6s1.1,2.5,1.3,2.9c0.3-0.4,1.4-2.9,1.4-2.9\n\ts0.6,1.6,1.8,3.6c1.1,2,5.1,5.2,5.1,5.2s-0.5-0.1-2.4,0.2c-1.9,0.3-5.1,1.9-5.1,1.9h1.1c0,0,6,0.2,9.4,1.4c3.4,1.2,9,6.9,9.8,7.9\n\tc0.7,1,0.7,2.3,0.4,3.1c-0.4,0.8-1.9,1.5-3.3,1.4c-1.4-0.1-2.1-1.7-2.1-2.8c0-1,1-1.4,2.3-0.8c1.3,0.6,1.5,2.2,1.5,2.2\n\ts0.6-0.7,0.4-1.6c-0.2-0.8-1.4-2.3-3-2.1c-1.2,0.1-2.2,0.5-2.3,2.4c-0.1,1.9,0.9,3.2,2.5,4.3c1.6,1.1,3.6,0.8,5.3,0\n\tc1.8-0.8,2.3-2.4,2.3-2.4s0.3,0.4,3.4,2.8c3.1,2.4,5.8,3,5.8,3s-4.1,0.2-6.6,0.2c-2.6,0-7.4-1.3-9.7-2.6c-2.3-1.3-4.1-3.2-5.3-4.5\n\tc-1.2-1.3-3.5-0.5-2.8-0.6c0.7-0.1,1.7,1.5,1.7,1.5s-1.4-0.6-2.9-0.1c-1.5,0.6-2.2,2.9-2.2,2.9s1.6-1.7,3-1.8\n\tc1.5-0.1,3.1,0.7,3.7,1.1c0.6,0.4,1.2,2.1,1.6,3.9c0.4,1.7-0.6,3.2-3.3,6.4c-2.8,3.1-8.3,1.7-8.3,1.7s1.2,1.1,2.9,1.4\n\tc1.7,0.3,5.2-1,6.9-2.5c1.7-1.5,2.3-2.5,3.2-4.2c0.9-1.7,0.3-3.4,0.3-3.4s1.2,0.5,2.7,1.2c-0.4,1-1.5,3.6-2.1,4.8\n\tc-0.7,1.5-2.7,5.4-6.4,6.9c-3.7,1.5-7.9,1-7.9,1c-0.1,0.1-0.2,0.3-0.4,0.4c-1.7-3-2.3-5.2-2.3-5.2h-0.2c0,0-0.6,2.2-2.3,5.2\n\tc-0.1-0.2-0.2-0.3-0.4-0.5C132.6,180.3,128.4,180.8,124.8,179.3z M118.3,196.3c-2,1-3.4,0.9-4.1,0.8c1.9-2.5,4.1-5.2,6.3-6.3\n\tc3.3-1.7,4.7-1.2,5.4-1.1c0,0,0,0,0,0c-0.3,0.2-0.5,0.5-0.6,0.6C124.6,190.9,121.1,194.9,118.3,196.3z M104,209.6\n\tc0.6,0,1.2,0,1.5-0.1c1.8-0.2,8.3-2.9,11.4-4.9c2.2-1.4,4.9-3.9,6.3-5.3c-0.4,1.6-1,3.9-1,6.1c-0.1,1.8,0.4,4.7,1.1,7.4\n\tc-0.9,0.1-6.9,0.7-10.7-0.3C109.4,211.8,105.9,210.6,104,209.6z M63.3,208.9c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.1,0.7-0.7,1-1.1\n\tc0.1,0,0.3,0,0.4,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3c0,0.2,0,0.4,0.1,0.7c-0.7,0-1.4-0.1-2.1-0.2C63.5,209,63.4,208.9,63.3,208.9\n\tz M111,143.6C111,143.7,111.1,143.7,111,143.6C111,143.5,110.9,143.5,111,143.6z M125,77.1c0-1.3-1-2.3-2.3-2.3\n\tc-1.3,0-2.3,1-2.3,2.3c0,1.3,1,2.3,2.3,2.3C124,79.4,125,78.4,125,77.1z M120.1,94.4c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.3-0.1,0.4-0.1\n\tc0.1,0,0.2,0.1,0.3,0.1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0\n\tc-0.1,0-0.3,0.1-0.4,0.1c-0.1-0.1-0.2-0.1-0.3-0.1c0,0-0.1,0-0.1,0c-0.1-0.1-0.3-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0.1\n\tc-0.1,0-0.1,0-0.2,0c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.1,0,0.2,0,0.3-0.1C119.9,94.4,119.9,94.4,120.1,94.4\n\tC120,94.4,120,94.4,120.1,94.4z M116.4,100.8c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tC116.7,100,116.4,100.4,116.4,100.8z M115.4,102c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tC115.8,101.3,115.4,101.6,115.4,102z M114.5,103.1c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tS114.5,102.7,114.5,103.1z M113.3,104.2c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tC113.6,103.4,113.3,103.8,113.3,104.2z M113.6,105.1c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7\n\tC113.3,105.8,113.6,105.5,113.6,105.1z M111.6,106.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tC110.9,106.3,111.2,106.7,111.6,106.7z M84.6,132.5c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tC83.8,132.2,84.1,132.5,84.6,132.5z M85,133.3c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tC84.7,134,85,133.7,85,133.3z M58.3,195.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5\n\tC58.5,194.6,58.3,194.8,58.3,195.1z M58.3,194c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5\n\tC58.5,193.5,58.3,193.7,58.3,194z M58.3,192.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5\n\tC58.5,192.4,58.3,192.6,58.3,192.9z M58.3,191.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC58.5,191.3,58.3,191.5,58.3,191.8z M58.3,190.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC58.5,190.2,58.3,190.4,58.3,190.7z M58.3,189.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC58.5,189.1,58.3,189.3,58.3,189.6z M58.3,188.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC58.5,188,58.3,188.2,58.3,188.5z M58.3,187.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC58.5,186.9,58.3,187.1,58.3,187.4z M62.5,198.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC62.7,198.1,62.5,198.3,62.5,198.6z M62.5,197.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC62.7,197,62.5,197.2,62.5,197.5z M62.5,196.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC62.7,195.9,62.5,196.1,62.5,196.4z M62.5,195.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5\n\tC62.7,194.8,62.5,195,62.5,195.3z M62.5,194.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC62.7,193.7,62.5,193.9,62.5,194.2z M62.5,193.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC62.7,192.6,62.5,192.8,62.5,193.1z M62.5,192c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC62.7,191.5,62.5,191.7,62.5,192z M67.3,202.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC67.5,201.7,67.3,201.9,67.3,202.2z M67.3,201.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC67.5,200.6,67.3,200.8,67.3,201.1z M67.3,200c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC67.5,199.5,67.3,199.7,67.3,200z M67.3,198.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC67.5,198.4,67.3,198.6,67.3,198.9z M67.3,197.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC67.5,197.3,67.3,197.5,67.3,197.8z M67.3,196.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC67.5,196.2,67.3,196.4,67.3,196.7z M72.3,205.8c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tS72.3,205.5,72.3,205.8z M72.3,204.7c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S72.3,204.4,72.3,204.7z\n\t M72.3,203.6c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S72.3,203.3,72.3,203.6z M72.3,202.5\n\tc0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S72.3,202.2,72.3,202.5z M72.3,201.4c0,0.3,0.2,0.5,0.5,0.5\n\ts0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S72.3,201.1,72.3,201.4z M76.7,208.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5C76.9,207.7,76.7,207.9,76.7,208.1z M76.7,207c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5C76.9,206.6,76.7,206.8,76.7,207z M76.7,205.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5C76.9,205.4,76.7,205.7,76.7,205.9z M76.7,204.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5C76.9,204.3,76.7,204.6,76.7,204.8z M76.7,203.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5C76.9,203.2,76.7,203.5,76.7,203.7z M81,207.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5C81.2,207.4,81,207.6,81,207.9z M81,206.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5C81.2,206.3,81,206.5,81,206.8z M81,205.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5C81.2,205.2,81,205.4,81,205.7z M85.7,206.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5C86,206.1,85.7,206.4,85.7,206.6z M93.8,221.6c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C93.6,222.1,93.8,221.9,93.8,221.6z M93.8,220.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C93.6,221,93.8,220.8,93.8,220.5z M93.8,219.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C93.6,219.9,93.8,219.7,93.8,219.4z M93.8,218.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C93.6,218.8,93.8,218.6,93.8,218.3z M93.8,217.2c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C93.6,217.7,93.8,217.5,93.8,217.2z M93.8,216.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C93.6,216.6,93.8,216.4,93.8,216.1z M93.8,215c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C93.6,215.5,93.8,215.2,93.8,215z M93.8,213.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C93.6,214.4,93.8,214.1,93.8,213.9z M88,229.9c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tS88,230.2,88,229.9z M88,228.8c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5S88,229.1,88,228.8z M88,227.7\n\tc0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5S88,228,88,227.7z M88,226.6c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5S88,226.9,88,226.6z M88,225.5c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tS88,225.8,88,225.5z M88,224.4c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5S88,224.7,88,224.4z M88,223.3\n\tc0-0.3-0.2-0.5-0.5-0.5S87,223,87,223.3c0,0.3,0.2,0.5,0.5,0.5S88,223.6,88,223.3z M88,222.2c0-0.3-0.2-0.5-0.5-0.5\n\ts-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5S88,222.5,88,222.2z M88,221c0-0.3-0.2-0.5-0.5-0.5S87,220.8,87,221s0.2,0.5,0.5,0.5\n\tS88,221.3,88,221z M88,219.9c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5S88,220.2,88,219.9z M88,218.8\n\tc0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5S88,219.1,88,218.8z M88,217.7c0-0.3-0.2-0.5-0.5-0.5\n\ts-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5S88,218,88,217.7z M88,216.6c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tS88,216.9,88,216.6z M88,215.5c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5S88,215.8,88,215.5z M78.9,221\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C78.6,221.5,78.9,221.2,78.9,221z M78.9,219.9\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C78.6,220.3,78.9,220.1,78.9,219.9z M78.9,218.8\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C78.6,219.2,78.9,219,78.9,218.8z M78.9,217.6\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C78.6,218.1,78.9,217.9,78.9,217.6z M69.8,230.1\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C69.5,230.6,69.8,230.4,69.8,230.1z M69.8,229\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C69.5,229.5,69.8,229.3,69.8,229z M69.8,227.9\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C69.5,228.4,69.8,228.2,69.8,227.9z M69.8,226.8\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C69.5,227.3,69.8,227.1,69.8,226.8z M69.8,225.7\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C69.5,226.2,69.8,226,69.8,225.7z M69.8,224.6c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C69.5,225.1,69.8,224.9,69.8,224.6z M69.8,223.5c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C69.5,224,69.8,223.7,69.8,223.5z M69.8,222.4c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C69.5,222.9,69.8,222.6,69.8,222.4z M69.8,221.3c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C69.5,221.8,69.8,221.5,69.8,221.3z M69.8,220.2c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C69.5,220.7,69.8,220.4,69.8,220.2z M69.8,219.1c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C69.5,219.5,69.8,219.3,69.8,219.1z M69.8,218c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C69.5,218.4,69.8,218.2,69.8,218z M69.8,216.8c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C69.5,217.3,69.8,217.1,69.8,216.8z M62.8,223.2c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C62.6,223.7,62.8,223.5,62.8,223.2z M62.8,222.1c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C62.6,222.6,62.8,222.4,62.8,222.1z M62.8,221c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C62.6,221.5,62.8,221.3,62.8,221z M62.8,219.9c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C62.6,220.4,62.8,220.2,62.8,219.9z M62.8,218.8c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C62.6,219.3,62.8,219.1,62.8,218.8z M62.8,217.7c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C62.6,218.2,62.8,218,62.8,217.7z M62.8,216.6c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C62.6,217.1,62.8,216.9,62.8,216.6z M55.5,230.5c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C55.3,231,55.5,230.7,55.5,230.5z M55.5,229.4c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C55.3,229.9,55.5,229.6,55.5,229.4z M55.5,228.3c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C55.3,228.8,55.5,228.5,55.5,228.3z M55.5,227.2c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C55.3,227.6,55.5,227.4,55.5,227.2z M55.5,226.1c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C55.3,226.5,55.5,226.3,55.5,226.1z M55.5,223.8c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C55.3,224.3,55.5,224.1,55.5,223.8z M55.5,222.7c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C55.3,223.2,55.5,223,55.5,222.7z M55.5,221.6c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C55.3,222.1,55.5,221.9,55.5,221.6z M55.5,220.5c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C55.3,221,55.5,220.8,55.5,220.5z M55.5,219.4c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C55.3,219.9,55.5,219.7,55.5,219.4z M55.5,218.3c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C55.3,218.8,55.5,218.6,55.5,218.3z M55.5,217.2c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C55.3,217.7,55.5,217.5,55.5,217.2z M55.5,216.1c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C55.3,216.6,55.5,216.4,55.5,216.1z M55.5,215c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C55.3,215.5,55.5,215.3,55.5,215z M46.7,214.2c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C46.5,214.7,46.7,214.5,46.7,214.2z M46.7,213.1c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C46.5,213.6,46.7,213.4,46.7,213.1z M46.7,212c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C46.5,212.5,46.7,212.3,46.7,212z M35.6,210.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5C35.1,210.3,35.3,210.5,35.6,210.5z M36.1,208.9c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C35.8,209.4,36.1,209.2,36.1,208.9z M36.1,207.8c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C35.8,208.3,36.1,208.1,36.1,207.8z M36.1,206.7c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C35.8,207.2,36.1,207,36.1,206.7z M36.1,205.6c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C35.8,206.1,36.1,205.9,36.1,205.6z M35.6,210.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5C36.1,210.7,35.8,210.5,35.6,210.5z M36.1,212.1c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C35.8,212.6,36.1,212.4,36.1,212.1z M36.1,213.2c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C35.8,213.7,36.1,213.5,36.1,213.2z M36.1,214.3c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C35.8,214.8,36.1,214.6,36.1,214.3z M36.1,215.4c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C35.8,215.9,36.1,215.7,36.1,215.4z M36.1,216.5c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C35.8,217,36.1,216.8,36.1,216.5z M29.7,205.1c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5C29.2,204.9,29.5,205.1,29.7,205.1z M30.2,203.5c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C30,204,30.2,203.8,30.2,203.5z M30.2,202.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\ts0.2,0.5,0.5,0.5C30,202.9,30.2,202.7,30.2,202.4z M30.2,201.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC30,201.8,30.2,201.6,30.2,201.3z M29.7,205.1c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5S30,205.1,29.7,205.1z\n\t M30.2,206.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C30,207.2,30.2,207,30.2,206.7z M30.2,207.8\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C30,208.3,30.2,208.1,30.2,207.8z M30.2,208.9\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C30,209.4,30.2,209.2,30.2,208.9z M30.2,210\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C30,210.5,30.2,210.3,30.2,210z M30.2,211.1\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C30,211.6,30.2,211.4,30.2,211.1z M30.2,212.2\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C30,212.7,30.2,212.5,30.2,212.2z M30.2,213.3\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C30,213.8,30.2,213.6,30.2,213.3z M24.6,199.8\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5C24.1,199.6,24.3,199.8,24.6,199.8z M25.1,198.2\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C24.8,198.7,25.1,198.5,25.1,198.2z M25.1,197.1\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C24.8,197.6,25.1,197.4,25.1,197.1z M25.1,196\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C24.8,196.5,25.1,196.3,25.1,196z M24.6,199.8\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5C25.1,200,24.8,199.8,24.6,199.8z M25.1,201.4\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C24.8,201.9,25.1,201.7,25.1,201.4z M25.1,202.5\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C24.8,203,25.1,202.8,25.1,202.5z M25.1,203.6\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C24.8,204.1,25.1,203.9,25.1,203.6z M25.1,204.7\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C24.8,205.2,25.1,205,25.1,204.7z M25.1,205.8c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C24.8,206.3,25.1,206.1,25.1,205.8z M25.1,206.9c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C24.8,207.4,25.1,207.2,25.1,206.9z M25.1,208.1c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C24.8,208.5,25.1,208.3,25.1,208.1z M80.6,179c0,0.3,0.2,0.5,0.5,0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5C80.8,178.5,80.6,178.7,80.6,179z M80.6,178c0,0.3,0.2,0.5,0.5,0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5C80.8,177.5,80.6,177.7,80.6,178z M80.6,176.9c0,0.3,0.2,0.5,0.5,0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5C80.8,176.5,80.6,176.7,80.6,176.9z M80.6,175.9c0,0.3,0.2,0.5,0.5,0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5C80.8,175.4,80.6,175.7,80.6,175.9z M80.6,174.9c0,0.3,0.2,0.5,0.5,0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5C80.8,174.4,80.6,174.7,80.6,174.9z M80.6,173.9c0,0.3,0.2,0.5,0.5,0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5C80.8,173.4,80.6,173.6,80.6,173.9z M80.6,172.9c0,0.3,0.2,0.5,0.5,0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5C80.8,172.4,80.6,172.6,80.6,172.9z M80.6,171.9c0,0.3,0.2,0.5,0.5,0.5\n\tc0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5C80.8,171.4,80.6,171.6,80.6,171.9z M52.1,158.6c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C51.9,159.1,52.1,158.8,52.1,158.6z M52.1,159.7c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C51.9,160.2,52.1,160,52.1,159.7z M52.1,160.8c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C51.9,161.3,52.1,161.1,52.1,160.8z M52.1,161.9c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C51.9,162.4,52.1,162.2,52.1,161.9z M52.1,164.2c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C51.9,164.6,52.1,164.4,52.1,164.2z M52.1,165.3c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C51.9,165.8,52.1,165.5,52.1,165.3z M49.4,157.2c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C49.2,157.7,49.4,157.5,49.4,157.2z M49.4,158.3c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C49.2,158.8,49.4,158.6,49.4,158.3z M49.4,159.5c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C49.2,160,49.4,159.7,49.4,159.5z M84.9,182.7c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5S84.9,182.5,84.9,182.7z M84.9,181.7c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tS84.9,181.4,84.9,181.7z M84.9,178.5c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5S84.9,178.3,84.9,178.5z M84.9,177.5\n\tc0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S84.9,177.2,84.9,177.5z M84.9,176.5c0,0.3,0.2,0.5,0.5,0.5\n\ts0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5S84.9,176.2,84.9,176.5z M84.9,175.4c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5\n\tS84.9,175.1,84.9,175.4z M84.9,174.4c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5S84.9,174.1,84.9,174.4z M84.9,173.3\n\tc0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S84.9,173.1,84.9,173.3z M84.9,172.3c0,0.3,0.2,0.5,0.5,0.5\n\ts0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S84.9,172,84.9,172.3z M84.9,171.2c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5S84.9,171,84.9,171.2z M101,183.1c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tC101.5,183.3,101.3,183.1,101,183.1z M101.5,181.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC101.3,182,101.5,181.8,101.5,181.5z M101.5,179.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC101.3,179.9,101.5,179.6,101.5,179.4z M101.5,178.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC101.3,178.8,101.5,178.6,101.5,178.3z M101.5,177.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC101.3,177.7,101.5,177.5,101.5,177.3z M101.5,176.2c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC101.3,176.7,101.5,176.5,101.5,176.2z M101.5,175.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC101.3,175.6,101.5,175.4,101.5,175.1z M101.5,174.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC101.3,174.6,101.5,174.4,101.5,174.1z M101.5,173c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC101.3,173.5,101.5,173.3,101.5,173z M101.5,172c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC101.3,172.5,101.5,172.2,101.5,172z M105.1,178.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC104.9,178.6,105.1,178.4,105.1,178.1z M105.1,177.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC104.9,177.6,105.1,177.4,105.1,177.1z M105.1,176.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC104.9,176.6,105.1,176.4,105.1,176.1z M105.1,175.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC104.9,175.6,105.1,175.4,105.1,175.1z M105.1,174.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC104.9,174.6,105.1,174.4,105.1,174.1z M105.1,173.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC104.9,173.6,105.1,173.3,105.1,173.1z M105.1,172.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC104.9,172.5,105.1,172.3,105.1,172.1z M83.8,135.4c0,0,0.1,0,0.1,0c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.3,0.2,0.6,0.4,0.7c0,0-0.1,0-0.1,0c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tC84.2,135.8,84.1,135.5,83.8,135.4z M95.7,142.6c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tC96.4,142.9,96.1,142.6,95.7,142.6z M95.7,145.5c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tC94.9,145.2,95.3,145.5,95.7,145.5z M95.7,147c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tC94.9,146.7,95.3,147,95.7,147z M83.8,137.5c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tC83.4,138.2,83.8,137.9,83.8,137.5z M83.1,138.9c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tC82.8,139.6,83.1,139.3,83.1,138.9z M81.5,141c0.1,0,0.1,0,0.2,0c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.5,0.3,0.6c-0.1,0-0.1,0-0.2,0c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7C81.9,141.3,81.7,141.1,81.5,141z M81,142.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C80.7,143.5,81,143.1,81,142.7z M80.2,143.9c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C79.9,144.7,80.2,144.4,80.2,143.9z M79.2,145.1c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C78.9,145.8,79.2,145.5,79.2,145.1z M78.2,146.2c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C77.9,146.9,78.2,146.6,78.2,146.2z M77.2,147.2c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C76.9,147.9,77.2,147.6,77.2,147.2z M76.1,148.2c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C75.8,149,76.1,148.6,76.1,148.2z M75,149.2c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C74.7,150,75,149.6,75,149.2z M73.8,150.1c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C73.5,150.9,73.8,150.6,73.8,150.1z M72.6,150.9c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C72.3,151.7,72.6,151.4,72.6,150.9z M44.9,157.1c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7C45.2,156.4,44.9,156.7,44.9,157.1z M45.6,158c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7C46.3,158.3,46,158,45.6,158z M46.3,160.3c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C46,161,46.3,160.7,46.3,160.3z M46.2,161.9c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C45.9,162.6,46.2,162.3,46.2,161.9z M46.2,163.4c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C45.9,164.1,46.2,163.8,46.2,163.4z M46.1,165c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C45.8,165.7,46.1,165.4,46.1,165z M46.1,166.6c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C45.7,167.3,46.1,167,46.1,166.6z M45.8,168.1c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C45.5,168.9,45.8,168.6,45.8,168.1z M45.6,169.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C45.3,170.4,45.6,170.1,45.6,169.7z M45.3,171.1c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C44.9,171.9,45.3,171.5,45.3,171.1z M45,172.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C44.7,173.4,45,173.1,45,172.7z M44.6,174.2c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C44.3,174.9,44.6,174.6,44.6,174.2z M44.2,175.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\ts0.3,0.7,0.7,0.7C43.8,176.4,44.2,176.1,44.2,175.7z M43.5,177.1c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C43.2,177.9,43.5,177.5,43.5,177.1z M42.9,178.6c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C42.6,179.3,42.9,179,42.9,178.6z M42.3,180.1c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C42,180.8,42.3,180.5,42.3,180.1z M30.2,180.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7C31,180.7,30.6,180.4,30.2,180.4z M31.4,179.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7C32.2,179.5,31.8,179.1,31.4,179.1z M32.6,178c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7C33.3,178.3,33,178,32.6,178z M33.7,176.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7C34.4,177,34.1,176.7,33.7,176.7z M34.7,175.3c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7C35.4,175.6,35.1,175.3,34.7,175.3z M35.7,173.8c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7C36.4,174.1,36.1,173.8,35.7,173.8z M36.6,172.3c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7C37.3,172.6,37,172.3,36.6,172.3z M37.4,171c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7C38.1,171.3,37.8,171,37.4,171z M38.1,169.3c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7C38.9,169.7,38.5,169.3,38.1,169.3z M38.8,167.7c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7S39.2,167.7,38.8,167.7z M39.3,166.2c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tC40.1,166.5,39.7,166.2,39.3,166.2z M39,165.2c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tC39.3,164.5,39,164.8,39,165.2z M40.2,164.4c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tC39.4,164.1,39.8,164.4,40.2,164.4z M39.7,162.1c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7\n\tC40,161.3,39.7,161.7,39.7,162.1z M39.9,160.4c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tC40.2,159.7,39.9,160,39.9,160.4z M40.1,158.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tC40.4,158,40.1,158.3,40.1,158.7z M40.3,157.1c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tC40.6,156.3,40.3,156.6,40.3,157.1z M40.3,155.3c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7\n\tC40.6,154.6,40.3,154.9,40.3,155.3z M40.4,153.6c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7\n\tC40.7,152.9,40.4,153.2,40.4,153.6z M37.2,179.9c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tC36.8,180.6,37.2,180.3,37.2,179.9z M38,178.4c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tC37.7,179.1,38,178.8,38,178.4z M38.9,177c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tC38.6,177.7,38.9,177.4,38.9,177z M39.7,175.5c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tC39.4,176.2,39.7,175.9,39.7,175.5z M40.5,173.9c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7\n\tC40.2,174.7,40.5,174.4,40.5,173.9z M40.4,173.2c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tS39.9,173.2,40.4,173.2z M41.8,170.8c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tC41.4,171.6,41.8,171.2,41.8,170.8z M42.3,169.1c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7\n\tC42,169.8,42.3,169.5,42.3,169.1z M42.7,167.4c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tC42.4,168.1,42.7,167.8,42.7,167.4z M42.3,166.5c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tC41.6,166.2,41.9,166.5,42.3,166.5z M41.8,164c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tC42.1,163.3,41.8,163.6,41.8,164z M42,162.4c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tC42.3,161.7,42,162,42,162.4z M43.6,160.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tC43.3,161.4,43.6,161.1,43.6,160.7z M43.6,159c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7\n\tC43.3,159.7,43.6,159.4,43.6,159z M43.6,157.3c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tC43.3,158,43.6,157.7,43.6,157.3z M43.6,155.6c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tC43.3,156.3,43.6,156,43.6,155.6z M82.4,130.3c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tC82.7,129.6,82.4,129.9,82.4,130.3z M82.9,131c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tC83.6,131.4,83.3,131,82.9,131z M82.4,132.5c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tC83.1,132.8,82.8,132.5,82.4,132.5z M81.8,133.8c-0.4,0-0.7,0.3-0.7,0.7c0,0.3,0.2,0.6,0.4,0.7c-0.1,0-0.1,0-0.2,0\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.3,0.1,0.5,0.4,0.6c-0.1,0-0.1,0-0.2,0c-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.4,0.3,0.6\n\tc-0.1,0-0.2-0.1-0.3-0.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.3,0.2,0.5c-0.1,0-0.1,0-0.2,0c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.2,0.1,0.3,0.2,0.4c-0.1,0-0.2-0.1-0.3-0.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.3,0.2,0.5c-0.1-0.1-0.2-0.1-0.4-0.1\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.1,0,0.3,0.1,0.4c-0.1-0.1-0.3-0.2-0.5-0.2c-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.3,0.1,0.4\n\tc-0.1-0.1-0.3-0.2-0.5-0.2c-0.4,0-0.7,0.3-0.7,0.7c0,0.1,0.1,0.3,0.1,0.4c-0.1-0.1-0.3-0.2-0.5-0.2c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.1,0,0.1,0,0.1c-0.1-0.1-0.2-0.1-0.4-0.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.1,0-0.1,0-0.1c0.1,0.1,0.2,0.1,0.4,0.1c0.4,0,0.7-0.3,0.7-0.7c0-0.1-0.1-0.3-0.1-0.4c0.1,0.1,0.3,0.2,0.5,0.2\n\tc0.4,0,0.7-0.3,0.7-0.7c0-0.2-0.1-0.3-0.1-0.4c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.7-0.3,0.7-0.7c0-0.1-0.1-0.3-0.1-0.4\n\tc0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.7-0.3,0.7-0.7c0-0.2-0.1-0.3-0.2-0.5c0.1,0.1,0.2,0.1,0.4,0.1c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.2-0.1-0.3-0.2-0.4c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.7-0.3,0.7-0.7c0-0.2-0.1-0.3-0.2-0.5c0.1,0,0.1,0,0.2,0\n\tc0.4,0,0.7-0.3,0.7-0.7c0-0.2-0.1-0.4-0.3-0.6c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.7-0.3,0.7-0.7c0-0.3-0.1-0.5-0.4-0.6\n\tc0.1,0,0.1,0,0.2,0c0.4,0,0.7-0.3,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7c0.1,0,0.1,0,0.2,0c0.4,0,0.7-0.3,0.7-0.7\n\tC82.6,134.2,82.2,133.8,81.8,133.8z M72.5,146.1c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0,0,0.1,0,0.1\n\tc-0.1-0.1-0.3-0.2-0.4-0.2c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0,0,0-0.1,0-0.1\n\tc0.1,0.1,0.3,0.2,0.4,0.2C72.2,146.8,72.5,146.5,72.5,146.1z M118.8,101.9c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7C118.1,101.6,118.4,101.9,118.8,101.9z M119.1,102.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C118.8,103.4,119.1,103.1,119.1,102.7z M117.9,104.9c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7C117.2,104.6,117.5,104.9,117.9,104.9z M117.1,106.3c0.1,0,0.1,0,0.2,0c0.4,0,0.7-0.3,0.7-0.7\n\ts-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.3,0.1,0.5,0.3,0.6c-0.1,0-0.1,0-0.2,0c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7C117.5,106.6,117.3,106.4,117.1,106.3z M115.4,110.7c0-0.2-0.1-0.4-0.2-0.5c0.1,0,0.2,0.1,0.2,0.1\n\tc0.4,0,0.7-0.3,0.7-0.7c0-0.3-0.1-0.5-0.3-0.6c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.3,0.1,0.5,0.3,0.6c-0.1,0-0.2-0.1-0.3-0.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.4,0.2,0.5\n\tc-0.1,0-0.2,0-0.2,0c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C115.1,111.5,115.4,111.1,115.4,110.7z M114.5,111.8\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C114.1,112.6,114.5,112.2,114.5,111.8z M113.5,112.9\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C113.1,113.5,113.5,113.2,113.5,112.9z M121.1,101.1\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C120.8,101.9,121.1,101.6,121.1,101.1z M120.3,103.3\n\tc0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.3,0.2,0.6,0.5,0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7C120.8,103.7,120.6,103.4,120.3,103.3z M120.6,105.5c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C120.3,106.2,120.6,105.9,120.6,105.5z M120.2,107c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C119.8,107.7,120.2,107.4,120.2,107z M119.7,108.4c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C119.4,109.1,119.7,108.8,119.7,108.4z M120.9,94.7c-0.1-0.1-0.3-0.1-0.4-0.1\n\tc-0.1,0-0.2,0-0.3,0.1c-0.1-0.1-0.3-0.1-0.4-0.1c-0.1,0-0.3,0-0.4,0.1c-0.1,0-0.2,0-0.2,0c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c0.1,0,0.3,0,0.4-0.1c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2,0,0.3-0.1c0.1,0.1,0.3,0.1,0.4,0.1\n\tc0.1,0,0.3,0,0.4-0.1c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.2,0,0.3-0.1c0,0,0.1,0,0.1,0c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.1,0-0.2,0-0.3,0.1c0,0-0.1,0-0.1,0C121.1,94.5,121,94.6,120.9,94.7z M121.7,100.5c-0.3,0.1-0.5,0.4-0.5,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c0.3,0,0.5-0.2,0.6-0.4c0.1,0.1,0.3,0.2,0.5,0.2c0,0,0.1,0,0.1,0c-0.2,0.1-0.4,0.3-0.4,0.5\n\tc-0.1-0.2-0.4-0.4-0.6-0.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.6c0.1,0.2,0.4,0.4,0.6,0.4\n\tc0.1,0,0.2,0,0.2,0c-0.2,0.1-0.4,0.4-0.4,0.6c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.1,0-0.2,0-0.2,0\n\tc0.2-0.1,0.4-0.4,0.4-0.6c0-0.4-0.3-0.7-0.7-0.7c0,0-0.1,0-0.1,0c0.3-0.1,0.4-0.4,0.4-0.7c0-0.4-0.3-0.7-0.7-0.7c0,0,0,0,0,0\n\tc0.2-0.1,0.4-0.4,0.4-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.2,0-0.4,0.1-0.6,0.3c-0.1-0.1-0.3-0.1-0.4-0.1c-0.3,0-0.5,0.1-0.6,0.4\n\tc-0.1-0.3-0.4-0.4-0.7-0.4c-0.4,0-0.7,0.3-0.7,0.6c-0.1-0.3-0.4-0.6-0.7-0.6c-0.2,0-0.4,0.1-0.5,0.2c-0.1-0.2-0.2-0.4-0.4-0.4\n\tc0,0,0,0,0.1,0c0.2,0,0.4-0.1,0.5-0.2c0.1,0.2,0.4,0.4,0.6,0.4c0.3,0,0.5-0.2,0.7-0.4c0.1,0.2,0.3,0.3,0.6,0.3\n\tc0.2,0,0.4-0.1,0.5-0.2c0.1,0.2,0.4,0.4,0.6,0.4c0.2,0,0.3-0.1,0.4-0.1c0.1,0.1,0.2,0.1,0.3,0.1c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.2,0-0.3,0.1-0.4,0.1c-0.1-0.1-0.2-0.1-0.3-0.1c-0.2,0-0.4,0.1-0.5,0.2c-0.1-0.1-0.2-0.3-0.3-0.3\n\tc0,0,0.1-0.1,0.1-0.1c0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.3,0,0.4-0.1c0.1,0,0.1,0,0.2,0c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.1,0-0.2,0-0.4,0.1c-0.1,0-0.1,0-0.2,0c-0.2,0-0.3,0.1-0.4,0.1c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.3,0.1-0.5,0.2\n\tc-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.3,0.1-0.4,0.2c-0.1-0.1-0.3-0.2-0.4-0.2c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.2,0,0.3-0.1,0.4-0.2c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3-0.1,0.5-0.2c0.1,0.1,0.1,0.1,0.2,0.2c-0.2,0.1-0.3,0.2-0.4,0.4\n\tc-0.1-0.2-0.3-0.3-0.6-0.3c-0.2,0-0.4,0.1-0.5,0.2c-0.1-0.2-0.4-0.4-0.6-0.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.3,0.2,0.6,0.4,0.7\n\tc0,0,0,0,0,0c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.2,0,0.4-0.1,0.5-0.2c0.1,0.3,0.4,0.5,0.7,0.5c0.4,0,0.7-0.3,0.7-0.6\n\tc0.1,0.3,0.4,0.6,0.7,0.6c0.3,0,0.5-0.1,0.6-0.4C121.2,100.3,121.4,100.5,121.7,100.5z M122,100.5c0.1,0,0.2-0.1,0.3-0.2\n\tc0.1,0.1,0.3,0.1,0.4,0.1c0,0,0,0,0,0c-0.1,0.1-0.2,0.2-0.3,0.3C122.3,100.5,122.2,100.5,122,100.5z M122.2,104.8\n\tc-0.3,0.1-0.6,0.4-0.6,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.6-0.6-0.7c0.3-0.1,0.6-0.4,0.6-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C121.6,104.5,121.8,104.8,122.2,104.8z M124.7,105.9c0,0,0.1,0,0.1,0\n\tc-0.2,0.1-0.3,0.3-0.3,0.6c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c0,0-0.1,0-0.1,0\n\tc0.2-0.1,0.3-0.3,0.3-0.6c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C124,105.5,124.3,105.9,124.7,105.9z M125.9,108.5\n\tc0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C125.2,108.2,125.5,108.5,125.9,108.5z M125.8,109.1\n\tc0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7C126.1,108.4,125.8,108.7,125.8,109.1z M227.2,190.9\n\tc0.1,0,0.2,0,0.3,0C227.3,190.9,227.2,190.9,227.2,190.9z M222.8,238.7c0,1,0.7,1.8,1.7,1.8c-0.4,0.1-0.7,0.4-0.7,0.8\n\tc0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9c0-0.4-0.3-0.8-0.7-0.8c0.9-0.1,1.6-0.9,1.6-1.8c0-0.8-0.5-1.4-1.1-1.7\n\tc0.1-0.1,0.3-0.3,0.4-0.4c0.4-0.4,2.1-2.2,2.7-3.3c0.6-1.1,1.5-4.2,1.4-5.7c-0.1-1.5-0.6-3.2-0.6-3.2s1.3,0.6,2.5,0.6\n\tc0.6,0,1.4,0,2.1,0.1c0.3,0.5,0.9,1.1,1,1.2c0.1,0,0.1,0.1,0.2,0.2c-0.3,0.1-0.4,0.4-0.4,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7\n\tc0-0.3-0.2-0.6-0.4-0.7c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.9-0.9,1.1-1.3c0.3-0.5,0.6-1.7,0.6-2.3c0-0.6-0.3-1.3-0.3-1.3\n\ts0.5,0.2,1,0.3c0.4,0,0.9,0,1.2,0c0.3,0.5,0.9,1.2,1.1,1.3c0.1,0.1,0.1,0.1,0.2,0.2c-0.3,0.1-0.4,0.4-0.4,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7\n\tc0-0.3-0.2-0.6-0.4-0.7c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.8-0.9,1.1-1.3c0.3-0.5,0.6-1.7,0.6-2.3c0-0.6-0.3-1.3-0.3-1.3\n\ts0.5,0.2,1,0.3c0.5,0,1.4,0,1.4,0s-0.9-0.1-1.5-0.4c-0.5-0.3-1.1-0.8-1.8-1.7c-0.5-0.6-0.8-1.1-0.9-1.4c0.2-0.1,0.3-0.2,0.3-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.2,0.4,0.4,0.5c-0.1,0.3-0.4,0.9-0.9,1.4c-0.8,0.9-1.3,1.4-1.8,1.7\n\tc-0.5,0.3-1.5,0.4-1.5,0.4s0.9,0,1.4,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3c0,0.6,0.3,1.8,0.6,2.3c-0.3-0.1-0.9-0.2-1.3-0.4\n\tc-0.5-0.3-1.1-0.8-1.8-1.7c-0.6-0.7-0.9-1.3-1-1.6c0.1-0.1,0.2-0.2,0.2-0.4c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5c0,0,0.1,0,0.1,0c0,0,0,0.1-0.1,0.2c0,0,0,0-0.1,0c-0.3,0-0.5,0.2-0.5,0.5c0,0.1,0,0.2,0.1,0.3\n\tc-0.1,0.2-0.3,0.4-0.4,0.6c-0.8,0.9-1.3,1.4-1.8,1.7c-0.5,0.3-1.5,0.4-1.5,0.4s0.9,0,1.4,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3\n\tc0,0.5,0.2,1.6,0.5,2.1c-0.7-0.2-1.5-0.4-2.1-0.8c-1.3-0.8-2.6-2-4.5-4.2c-1.6-1.8-2.3-3.6-2.4-4.1c0.2-0.1,0.4-0.2,0.4-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.2,0.4,0.4,0.5c-0.2,0.5-0.8,2.3-2.4,4.1c-1.9,2.2-3.2,3.4-4.5,4.2\n\tc-0.4,0.2-0.9,0.4-1.4,0.6c-0.1-0.1-0.2-0.2-0.4-0.2c-0.3,0-0.5,0.2-0.5,0.5c-0.7,0.2-1.3,0.3-1.3,0.3s0.6,0,1.4,0\n\tc0.1,0.2,0.2,0.3,0.4,0.3s0.4-0.1,0.4-0.3c0.4,0,0.9,0,1.2,0c1.2-0.1,2.5-0.6,2.5-0.6s-0.6,1.7-0.6,3.2c-0.1,1.5,0.8,4.5,1.4,5.7\n\tc0.6,1.1,2.3,2.9,2.7,3.3c0.1,0.1,0.3,0.3,0.4,0.4C223.2,237.3,222.8,238,222.8,238.7z M180.4,234.7c-0.5,0.3-1.5,0.4-1.5,0.4\n\ts0.9,0,1.4,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3c0,0.6,0.3,1.8,0.6,2.3c0.3,0.5,0.9,1.2,1.1,1.3c0.1,0.1,0.1,0.1,0.2,0.2\n\tc-0.3,0.1-0.4,0.4-0.4,0.7c0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4\n\tc0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.9-0.9,1.1-1.3\n\tc0.3-0.5,0.6-1.7,0.6-2.3c0-0.6-0.3-1.3-0.3-1.3s0.5,0.2,1,0.3c0.3,0,0.7,0,1,0c0.2,1.6,0.8,3.9,1.4,4.9c0.6,1.1,2.3,2.9,2.7,3.3\n\tc0.1,0.1,0.3,0.3,0.4,0.4c-0.7,0.3-1.1,0.9-1.1,1.7c0,1,0.7,1.8,1.7,1.8c-0.4,0.1-0.7,0.4-0.7,0.8c0,0.5,0.4,0.9,0.9,0.9\n\tc0.5,0,0.9-0.4,0.9-0.9c0-0.4-0.3-0.8-0.7-0.9c0.9-0.1,1.6-0.9,1.6-1.8c0-0.8-0.5-1.4-1.1-1.7c0.1-0.1,0.3-0.3,0.4-0.4\n\tc0.4-0.4,2.1-2.2,2.7-3.3c0.3-0.5,0.6-1.4,0.9-2.4c0.2,0,0.4,0,0.6,0c0.6,0,1.3-0.3,1.3-0.3s-0.3,0.9-0.3,1.6c0,0.8,0.4,2.3,0.7,2.9\n\tc0.3,0.6,1.2,1.5,1.4,1.7c0.1,0.1,0.2,0.1,0.2,0.2c-0.3,0.1-0.6,0.5-0.6,0.9c0,0.5,0.4,0.9,0.9,1c-0.2,0-0.4,0.2-0.4,0.4\n\tc0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.2-0.2-0.4-0.4-0.4c0.5-0.1,0.8-0.5,0.8-0.9c0-0.4-0.2-0.7-0.6-0.9\n\tc0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,1.1-1.1,1.4-1.7c0.3-0.6,0.8-2.2,0.7-2.9c0-0.8-0.3-1.6-0.3-1.6s0.7,0.3,1.3,0.3\n\tc0.6,0,1.8,0,1.8,0s-1.2-0.2-1.9-0.6c-0.7-0.4-1.3-1-2.3-2.2c-0.8-0.9-1.1-1.7-1.2-2c0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.4,0.5c-0.1,0.3-0.5,1.2-1.2,2c-1,1.1-1.6,1.8-2.3,2.2c-0.2,0.1-0.4,0.2-0.6,0.3\n\tc0.3-1.1,0.5-2.2,0.4-3c-0.1-1.5-0.6-3.2-0.6-3.2s1.3,0.6,2.5,0.6c1.2,0.1,3.4,0.1,3.4,0.1s-0.6-0.1-1.3-0.2\n\tc0.1-0.1,0.2-0.2,0.2-0.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.1,0,0.1,0,0.2c-0.5-0.2-1.1-0.4-1.6-0.6\n\tc-1.3-0.8-2.6-2-4.5-4.2c-1.5-1.7-2.2-3.4-2.4-4c0.2-0.1,0.3-0.2,0.3-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.2,0.2,0.4,0.4,0.5c-0.2,0.6-0.9,2.3-2.4,4c-1.9,2.2-3.2,3.4-4.5,4.2c-0.5,0.3-1.3,0.6-1.9,0.7c0.2-0.1,0.3-0.2,0.3-0.4\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.1,0.4,0.3,0.5c0,0,0,0,0,0.1c-0.7,0.2-1.3,0.3-1.3,0.3s0.5,0,1.2,0\n\tc-0.2,0.3-0.4,0.7-0.8,1.1C181.5,233.8,181,234.3,180.4,234.7z M183.5,231.8c0.6,0,1.2,0,1.7,0c1.2-0.1,2.5-0.6,2.5-0.6\n\ts-0.6,1.7-0.6,3.2c0,0.2,0,0.5,0,0.7c-0.3-0.1-0.8-0.2-1.1-0.4c-0.5-0.3-1.1-0.8-1.8-1.7C183.9,232.5,183.7,232.1,183.5,231.8z\n\t M174.6,226.4c-0.5,0.3-1.5,0.4-1.5,0.4s0.9,0,1.4,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3c0,0.6,0.3,1.8,0.6,2.3\n\tc0.3,0.5,0.9,1.2,1.1,1.3c0.1,0.1,0.1,0.1,0.2,0.2c-0.3,0.1-0.4,0.4-0.4,0.7c0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3\n\tc0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7\n\tc0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.8-0.9,1.1-1.3c0.3-0.5,0.6-1.7,0.6-2.3c0-0.6-0.3-1.3-0.3-1.3s0.5,0.2,1,0.3c0.5,0,1.4,0,1.4,0\n\ts-0.9-0.1-1.5-0.4c-0.5-0.3-1.1-0.8-1.8-1.7c-0.6-0.6-0.8-1.3-0.9-1.6c0.2-0.1,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.4,0.5c-0.1,0.3-0.4,0.9-0.9,1.5C175.7,225.6,175.2,226.1,174.6,226.4z M168.1,224.6\n\tc-0.5,0.3-1.5,0.4-1.5,0.4s0.9,0,1.4,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3c0,0.6,0.3,1.8,0.6,2.3c0.3,0.5,0.9,1.2,1.1,1.3\n\tc0.1,0,0.1,0.1,0.2,0.2c-0.3,0.1-0.4,0.4-0.4,0.7c0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4\n\tc0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7c0.1-0.1,0.1-0.1,0.2-0.2\n\tc0.2-0.2,0.9-0.9,1.1-1.3c0.3-0.5,0.6-1.7,0.6-2.3c0-0.6-0.3-1.3-0.3-1.3s0.5,0.2,1,0.3c0.5,0,1.4,0,1.4,0s-0.9-0.1-1.5-0.4\n\tc-0.5-0.3-1.1-0.8-1.8-1.7c-0.8-0.9-1-1.7-1-1.7h0c0,0-0.2,0.8-1,1.7C169.2,223.8,168.7,224.3,168.1,224.6z M207.8,233.3\n\tc0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3\n\tc0.4,0,0.7-0.4,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.8-0.9,1.1-1.3c0.3-0.5,0.6-1.7,0.6-2.3\n\tc0-0.6-0.3-1.3-0.3-1.3s0.5,0.2,1,0.3c0.5,0,1.4,0,1.4,0s-0.9-0.1-1.5-0.4c-0.5-0.3-1.1-0.8-1.8-1.7c-0.3-0.4-0.5-0.7-0.7-1\n\tc0.1-0.1,0.2-0.2,0.2-0.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.1,0.3,0.2,0.4c-0.2,0.3-0.4,0.6-0.7,1\n\tc-0.8,0.9-1.3,1.4-1.8,1.7c-0.5,0.3-1.5,0.4-1.5,0.4s0.9,0,1.4,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3c0,0.6,0.3,1.8,0.6,2.3\n\tc0.3,0.5,0.9,1.2,1.1,1.3c0.1,0.1,0.1,0.1,0.2,0.2C208,232.8,207.8,233,207.8,233.3z M212.1,236.1c-0.7,0.4-1.9,0.6-1.9,0.6\n\ts1.1,0,1.8,0c0.6,0,1.3-0.3,1.3-0.3s-0.3,0.9-0.3,1.6c0,0.8,0.4,2.3,0.7,2.9c0.3,0.6,1.2,1.5,1.4,1.7c0.1,0.1,0.2,0.1,0.2,0.2\n\tc-0.3,0.1-0.6,0.5-0.6,0.9c0,0.5,0.4,0.9,0.9,1c-0.2,0.1-0.4,0.2-0.4,0.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.2-0.2-0.4-0.4-0.4c0.5-0.1,0.8-0.5,0.8-1c0-0.4-0.2-0.7-0.6-0.9c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,1.1-1.1,1.4-1.7\n\tc0.3-0.6,0.8-2.2,0.7-2.9c0-0.8-0.3-1.6-0.3-1.6s0.7,0.3,1.3,0.3c0.6,0,1.8,0,1.8,0s-1.2-0.2-1.9-0.6c-0.7-0.4-1.3-1-2.3-2.2\n\tc-0.7-0.7-1-1.5-1.2-1.9c0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.1,0.4,0.3,0.5\n\tc-0.2,0.4-0.5,1.1-1.2,1.9C213.4,235,212.8,235.7,212.1,236.1z M245.5,218.6c0,0.4,0.3,0.7,0.7,0.7c-0.2,0-0.3,0.2-0.3,0.3\n\tc0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.3c0.4,0,0.7-0.4,0.7-0.7c0-0.3-0.2-0.6-0.4-0.7\n\tc0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.8-0.9,1.1-1.3c0.3-0.5,0.6-1.7,0.6-2.3c0-0.6-0.3-1.3-0.3-1.3s0.5,0.2,1,0.3c0.5,0,1.4,0,1.4,0\n\ts-0.9-0.1-1.5-0.4c-0.5-0.3-1.1-0.8-1.8-1.7c-0.5-0.5-0.7-1.1-0.9-1.4c0.2-0.1,0.3-0.2,0.3-0.4c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.2,0.4,0.4,0.5c-0.1,0.3-0.4,0.8-0.9,1.4c-0.8,0.9-1.3,1.4-1.8,1.7c-0.5,0.3-1.5,0.4-1.5,0.4\n\ts0.9,0,1.4,0c0.5,0,1-0.3,1-0.3s-0.2,0.7-0.3,1.3c0,0.6,0.3,1.8,0.6,2.3c0.3,0.5,0.9,1.2,1.1,1.3c0.1,0.1,0.1,0.1,0.2,0.2\n\tC245.7,218,245.5,218.3,245.5,218.6z M222.4,161.8c-0.3-0.3-0.4-0.6-0.5-0.8c0.2,0,0.4-0.2,0.4-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.2,0.2,0.4,0.4,0.5c-0.1,0.2-0.2,0.5-0.5,0.8c-0.5,0.5-0.8,0.8-1.1,1c-0.1,0.1-0.3,0.1-0.4,0.2\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c0.2,0,0.4-0.2,0.5-0.4c0.1,0,0.3,0,0.4,0\n\tc0.3,0,0.6-0.2,0.6-0.2s-0.1,0.4-0.2,0.8c0,0.4,0.2,1.1,0.3,1.4c0.2,0.3,0.6,0.7,0.7,0.8c0,0,0.1,0.1,0.1,0.1\n\tc-0.2,0.1-0.3,0.2-0.3,0.4c0,0.2,0.2,0.4,0.4,0.4c-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.2-0.1,0.2-0.2\n\tc0-0.1-0.1-0.2-0.2-0.2c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.4c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.5-0.5,0.7-0.8\n\tc0.2-0.3,0.4-1,0.3-1.4c0-0.4-0.2-0.8-0.2-0.8s0.3,0.1,0.6,0.2c0.3,0,0.8,0,0.8,0s-0.6-0.1-0.9-0.3\n\tC223.2,162.7,222.9,162.4,222.4,161.8z M217.5,168.1c0.3,0,0.6-0.2,0.6-0.2s-0.1,0.4-0.2,0.8c0,0.4,0.2,1.1,0.3,1.4\n\tc0.2,0.3,0.6,0.7,0.7,0.8c0,0,0.1,0.1,0.1,0.1c-0.2,0.1-0.3,0.2-0.3,0.4c0,0.2,0.2,0.4,0.4,0.4c-0.1,0-0.2,0.1-0.2,0.2\n\tc0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.2-0.1,0.2-0.2c0-0.1-0.1-0.2-0.2-0.2c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.3-0.4\n\tc0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.5-0.5,0.7-0.8c0.2-0.3,0.4-1,0.3-1.4c0-0.4-0.2-0.8-0.2-0.8s0.3,0.1,0.6,0.2c0.3,0,0.8,0,0.8,0\n\ts-0.6-0.1-0.9-0.3c-0.3-0.2-0.6-0.5-1.1-1c-0.5-0.5-0.6-1-0.6-1h0c0,0-0.1,0.5-0.6,1c-0.5,0.5-0.8,0.8-1.1,1\n\tc-0.3,0.2-0.9,0.3-0.9,0.3S217.2,168.1,217.5,168.1z M159.7,143.7C159.7,143.7,159.8,143.7,159.7,143.7\n\tC159.9,143.5,159.8,143.5,159.7,143.7z M145.8,77.1c0,1.3,1,2.3,2.3,2.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3\n\tC146.8,74.8,145.8,75.8,145.8,77.1z M150,94.4c0.1,0.1,0.2,0.1,0.4,0.1c0.2,0,0.3-0.1,0.4-0.1c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0\n\tc0.1,0.1,0.2,0.1,0.3,0.1c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.1,0-0.1,0-0.2,0c-0.1-0.1-0.2-0.1-0.3-0.1\n\tc-0.2,0-0.3,0.1-0.4,0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3,0.1c-0.1-0.1-0.2-0.1-0.4-0.1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0\n\tc-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0C149.8,94.5,149.9,94.5,150,94.4z M153,98.8\n\tC153,98.8,153,98.8,153,98.8c0.2-0.1,0.4-0.4,0.4-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.3,0-0.5,0.2-0.6,0.4c-0.1-0.1-0.3-0.2-0.5-0.2\n\tc-0.2,0-0.4,0.1-0.6,0.3c-0.1-0.2-0.2-0.3-0.4-0.4c0.1,0,0.2-0.1,0.2-0.2c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.4-0.2\n\tc0.1,0.1,0.3,0.2,0.4,0.2c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.2,0-0.3,0.1-0.4,0.2c-0.1-0.1-0.3-0.2-0.4-0.2\n\tc-0.2,0-0.4,0.1-0.5,0.2c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2,0-0.3,0.1-0.5,0.2c-0.1-0.1-0.3-0.1-0.4-0.1c-0.1,0-0.2,0-0.2,0\n\tc-0.1-0.1-0.2-0.1-0.4-0.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.1,0,0.2,0,0.2,0c0.1,0.1,0.2,0.1,0.4,0.1\n\tc0.2,0,0.3-0.1,0.5-0.2c0,0,0.1,0.1,0.1,0.1c-0.1,0.1-0.3,0.2-0.3,0.3c-0.1-0.1-0.3-0.2-0.5-0.2c-0.1,0-0.2,0-0.3,0.1\n\tc-0.1-0.1-0.2-0.1-0.4-0.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.1,0,0.2,0,0.3-0.1c0.1,0.1,0.3,0.1,0.4,0.1\n\tc0.3,0,0.5-0.2,0.6-0.4c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.3c0.1,0.2,0.4,0.4,0.7,0.4c0.3,0,0.5-0.2,0.6-0.4\n\tc0.1,0.1,0.3,0.2,0.5,0.2c0,0,0,0,0.1,0c-0.2,0.1-0.4,0.2-0.4,0.4c-0.1-0.1-0.3-0.2-0.5-0.2c-0.3,0-0.6,0.2-0.7,0.6\n\tc-0.1-0.3-0.3-0.6-0.7-0.6c-0.3,0-0.6,0.2-0.7,0.4c-0.1-0.2-0.4-0.4-0.6-0.4c-0.2,0-0.3,0.1-0.4,0.1c-0.1-0.2-0.3-0.3-0.6-0.3\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.3,0.2,0.5,0.4,0.7c0,0,0,0,0,0c-0.4,0-0.7,0.3-0.7,0.7c0,0.3,0.2,0.6,0.4,0.7c0,0-0.1,0-0.1,0\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.3,0.2,0.5,0.4,0.6c-0.1,0-0.1,0-0.2,0c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7\n\tc0-0.3-0.2-0.5-0.4-0.6c0.1,0,0.1,0,0.2,0c0.3,0,0.5-0.1,0.6-0.4c0.1,0.3,0.3,0.6,0.7,0.6c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.3,0-0.5,0.1-0.6,0.4c0-0.2-0.2-0.5-0.4-0.5c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.5-0.2\n\tc0.1,0.2,0.4,0.4,0.6,0.4c0.4,0,0.7-0.3,0.7-0.7c0-0.3-0.2-0.6-0.5-0.7c0.3,0,0.5-0.2,0.6-0.4c0.1,0.2,0.4,0.4,0.6,0.4\n\tc0.3,0,0.6-0.2,0.7-0.6c0.1,0.3,0.3,0.6,0.7,0.6c0.3,0,0.6-0.2,0.7-0.5c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.7-0.3,0.7-0.7\n\tC153.7,99.1,153.4,98.8,153,98.8z M148.8,100.5c-0.2,0-0.3,0.1-0.5,0.2c-0.1-0.1-0.2-0.2-0.3-0.3c0,0,0,0,0,0c0.2,0,0.3-0.1,0.4-0.1\n\tC148.6,100.3,148.7,100.4,148.8,100.5z M153.7,100c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tC154.5,100.4,154.1,100,153.7,100z M154.6,101.3c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tC155.4,101.6,155,101.3,154.6,101.3z M155.6,102.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tC156.4,102.7,156,102.4,155.6,102.4z M156.8,103.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tC157.5,103.8,157.2,103.4,156.8,103.4z M157.9,104.3c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tS158.4,104.3,157.9,104.3z M159.2,105.2c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tC159.9,105.5,159.6,105.2,159.2,105.2z M186.2,132.5c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7s-0.7,0.3-0.7,0.7\n\tC185.5,132.2,185.8,132.5,186.2,132.5z M186.6,134c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tC185.8,133.7,186.1,134,186.6,134z M212.5,195.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC212.3,195.6,212.5,195.4,212.5,195.1z M212.5,194c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC212.3,194.5,212.5,194.3,212.5,194z M212.5,192.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC212.3,193.4,212.5,193.2,212.5,192.9z M212.5,191.8c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC212.3,192.3,212.5,192.1,212.5,191.8z M212.5,190.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC212.3,191.2,212.5,191,212.5,190.7z M212.5,189.6c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC212.3,190.1,212.5,189.9,212.5,189.6z M212.5,188.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC212.3,189,212.5,188.8,212.5,188.5z M212.5,187.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC212.3,187.9,212.5,187.7,212.5,187.4z M208.3,198.6c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC208.1,199.1,208.3,198.9,208.3,198.6z M208.3,197.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC208.1,198,208.3,197.8,208.3,197.5z M208.3,196.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC208.1,196.9,208.3,196.7,208.3,196.4z M208.3,195.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC208.1,195.8,208.3,195.6,208.3,195.3z M208.3,194.2c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC208.1,194.7,208.3,194.5,208.3,194.2z M208.3,193.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC208.1,193.6,208.3,193.4,208.3,193.1z M208.3,192c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC208.1,192.5,208.3,192.3,208.3,192z M203.5,202.2c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC203.3,202.7,203.5,202.5,203.5,202.2z M203.5,201.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC203.3,201.6,203.5,201.4,203.5,201.1z M203.5,200c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC203.3,200.5,203.5,200.3,203.5,200z M203.5,198.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC203.3,199.4,203.5,199.2,203.5,198.9z M203.5,197.8c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC203.3,198.3,203.5,198.1,203.5,197.8z M203.5,196.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC203.3,197.2,203.5,197,203.5,196.7z M198.5,205.8c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC198.3,206.3,198.5,206.1,198.5,205.8z M198.5,204.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC198.3,205.2,198.5,205,198.5,204.7z M198.5,203.6c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC198.3,204.1,198.5,203.9,198.5,203.6z M198.5,202.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC198.3,203,198.5,202.8,198.5,202.5z M198.5,201.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC198.3,201.9,198.5,201.7,198.5,201.4z M194.1,208.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC193.9,208.6,194.1,208.4,194.1,208.1z M194.1,207c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC193.9,207.5,194.1,207.3,194.1,207z M194.1,205.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC193.9,206.4,194.1,206.2,194.1,205.9z M194.1,204.8c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC193.9,205.3,194.1,205.1,194.1,204.8z M194.1,203.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC193.9,204.2,194.1,204,194.1,203.7z M189.9,207.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC189.6,208.4,189.9,208.2,189.9,207.9z M189.9,206.8c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC189.6,207.3,189.9,207.1,189.9,206.8z M189.9,205.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC189.6,206.2,189.9,206,189.9,205.7z M184.6,207.1c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tC184.1,206.9,184.3,207.1,184.6,207.1z M177.9,221.6c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC177.7,222.1,177.9,221.9,177.9,221.6z M177.9,220.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC177.7,221,177.9,220.8,177.9,220.5z M177.9,219.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC177.7,219.9,177.9,219.7,177.9,219.4z M177.9,218.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC177.7,218.8,177.9,218.6,177.9,218.3z M177.9,217.2c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC177.7,217.7,177.9,217.5,177.9,217.2z M177.9,216.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC177.7,216.6,177.9,216.4,177.9,216.1z M177.9,215c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC177.7,215.5,177.9,215.2,177.9,215z M177.9,213.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC177.7,214.4,177.9,214.1,177.9,213.9z M183.8,229.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC183.6,230.4,183.8,230.2,183.8,229.9z M183.8,228.8c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC183.6,229.3,183.8,229.1,183.8,228.8z M183.8,227.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC183.6,228.2,183.8,228,183.8,227.7z M183.8,226.6c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC183.6,227.1,183.8,226.9,183.8,226.6z M183.8,225.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC183.6,226,183.8,225.8,183.8,225.5z M183.8,224.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC183.6,224.9,183.8,224.7,183.8,224.4z M183.8,223.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC183.6,223.8,183.8,223.6,183.8,223.3z M183.8,222.2c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC183.6,222.7,183.8,222.5,183.8,222.2z M183.8,221c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC183.6,221.5,183.8,221.3,183.8,221z M183.8,219.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC183.6,220.4,183.8,220.2,183.8,219.9z M183.8,218.8c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC183.6,219.3,183.8,219.1,183.8,218.8z M183.8,217.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC183.6,218.2,183.8,218,183.8,217.7z M183.8,216.6c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC183.6,217.1,183.8,216.9,183.8,216.6z M183.8,215.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC183.6,216,183.8,215.8,183.8,215.5z M192.9,221c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC192.7,221.5,192.9,221.2,192.9,221z M192.9,219.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC192.7,220.3,192.9,220.1,192.9,219.9z M192.9,218.8c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC192.7,219.2,192.9,219,192.9,218.8z M192.9,217.6c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC192.7,218.1,192.9,217.9,192.9,217.6z M202,230.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC201.8,230.6,202,230.4,202,230.1z M202,229c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC201.8,229.5,202,229.3,202,229z M202,227.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC201.8,228.4,202,228.2,202,227.9z M202,226.8c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC201.8,227.3,202,227.1,202,226.8z M202,225.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC201.8,226.2,202,226,202,225.7z M202,224.6c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC201.8,225.1,202,224.9,202,224.6z M202,223.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC201.8,224,202,223.7,202,223.5z M202,222.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC201.8,222.9,202,222.6,202,222.4z M202,221.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC201.8,221.8,202,221.5,202,221.3z M202,220.2c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC201.8,220.7,202,220.4,202,220.2z M202,219.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC201.8,219.5,202,219.3,202,219.1z M202,218c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC201.8,218.4,202,218.2,202,218z M202,216.8c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC201.8,217.3,202,217.1,202,216.8z M209,223.2c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC208.8,223.7,209,223.5,209,223.2z M209,222.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC208.8,222.6,209,222.4,209,222.1z M209,221c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC208.8,221.5,209,221.3,209,221z M209,219.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC208.8,220.4,209,220.2,209,219.9z M209,218.8c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC208.8,219.3,209,219.1,209,218.8z M209,217.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC208.8,218.2,209,218,209,217.7z M209,216.6c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC208.8,217.1,209,216.9,209,216.6z M215.3,230.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC215.5,230,215.3,230.2,215.3,230.5z M215.3,229.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5\n\tC215.5,228.9,215.3,229.1,215.3,229.4z M215.3,228.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC215.5,227.8,215.3,228,215.3,228.3z M215.3,227.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC215.5,226.7,215.3,226.9,215.3,227.2z M215.3,226.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tC215.5,225.6,215.3,225.8,215.3,226.1z M216.3,223.8c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC216,224.3,216.3,224.1,216.3,223.8z M216.3,222.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC216,223.2,216.3,223,216.3,222.7z M216.3,221.6c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC216,222.1,216.3,221.9,216.3,221.6z M216.3,220.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC216,221,216.3,220.8,216.3,220.5z M216.3,219.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC216,219.9,216.3,219.7,216.3,219.4z M216.3,218.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC216,218.8,216.3,218.6,216.3,218.3z M216.3,217.2c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC216,217.7,216.3,217.5,216.3,217.2z M216.3,216.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC216,216.6,216.3,216.4,216.3,216.1z M216.3,215c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC216,215.5,216.3,215.3,216.3,215z M225.1,214.2c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC224.9,214.7,225.1,214.5,225.1,214.2z M225.1,213.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC224.9,213.6,225.1,213.4,225.1,213.1z M225.1,212c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC224.9,212.5,225.1,212.3,225.1,212z M235.2,210.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5\n\tC234.7,210.3,235,210.5,235.2,210.5z M235.7,208.9c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tS235.7,209.2,235.7,208.9z M235.7,207.8c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5S235.7,208.1,235.7,207.8z\n\t M235.7,206.7c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5S235.7,207,235.7,206.7z M235.7,205.6\n\tc0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5S235.7,205.9,235.7,205.6z M235.2,210.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5C235.7,210.7,235.5,210.5,235.2,210.5z M235.7,212.1c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5S235.7,212.4,235.7,212.1z M235.7,213.2c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tS235.7,213.5,235.7,213.2z M235.7,214.3c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5S235.7,214.6,235.7,214.3z\n\t M235.7,215.4c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5S235.7,215.7,235.7,215.4z M235.7,216.5\n\tc0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5S235.7,216.8,235.7,216.5z M241.1,205.1c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5C240.6,204.9,240.8,205.1,241.1,205.1z M241.6,203.5c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C241.3,204,241.6,203.8,241.6,203.5z M241.6,202.4c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5C241.3,202.9,241.6,202.7,241.6,202.4z M241.6,201.3c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C241.3,201.8,241.6,201.6,241.6,201.3z M241.1,205.1c-0.3,0-0.5,0.2-0.5,0.5\n\ts0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5S241.3,205.1,241.1,205.1z M241.6,206.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\ts0.2,0.5,0.5,0.5C241.3,207.2,241.6,207,241.6,206.7z M241.6,207.8c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C241.3,208.3,241.6,208.1,241.6,207.8z M241.6,208.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C241.3,209.4,241.6,209.2,241.6,208.9z M241.6,210c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C241.3,210.5,241.6,210.3,241.6,210z M241.6,211.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C241.3,211.6,241.6,211.4,241.6,211.1z M241.6,212.2c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C241.3,212.7,241.6,212.5,241.6,212.2z M241.6,213.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C241.3,213.8,241.6,213.6,241.6,213.3z M246.2,199.8c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tc-0.3,0-0.5,0.2-0.5,0.5C245.7,199.6,246,199.8,246.2,199.8z M246.7,198.2c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C246.5,198.7,246.7,198.5,246.7,198.2z M246.7,197.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C246.5,197.6,246.7,197.4,246.7,197.1z M246.7,196c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C246.5,196.5,246.7,196.3,246.7,196z M246.2,199.8c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tc0.3,0,0.5-0.2,0.5-0.5C246.7,200,246.5,199.8,246.2,199.8z M246.7,201.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C246.5,201.9,246.7,201.7,246.7,201.4z M246.7,202.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C246.5,203,246.7,202.8,246.7,202.5z M246.7,203.6c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C246.5,204.1,246.7,203.9,246.7,203.6z M246.7,204.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\ts0.2,0.5,0.5,0.5C246.5,205.2,246.7,205,246.7,204.7z M246.7,205.8c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C246.5,206.3,246.7,206.1,246.7,205.8z M246.7,206.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C246.5,207.4,246.7,207.2,246.7,206.9z M246.7,208.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C246.5,208.5,246.7,208.3,246.7,208.1z M190.2,179c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C190,179.5,190.2,179.2,190.2,179z M190.2,178c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C190,178.4,190.2,178.2,190.2,178z M190.2,176.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C190,177.4,190.2,177.2,190.2,176.9z M190.2,175.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C190,176.4,190.2,176.2,190.2,175.9z M190.2,174.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C190,175.4,190.2,175.2,190.2,174.9z M190.2,173.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C190,174.4,190.2,174.2,190.2,173.9z M190.2,172.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C190,173.4,190.2,173.2,190.2,172.9z M190.2,171.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C190,172.4,190.2,172.2,190.2,171.9z M219.7,158.6c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C219.5,159.1,219.7,158.8,219.7,158.6z M219.7,159.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C219.5,160.2,219.7,160,219.7,159.7z M219.7,160.8c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C219.5,161.3,219.7,161.1,219.7,160.8z M219.7,161.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C219.5,162.4,219.7,162.2,219.7,161.9z M219.7,164.2c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C219.5,164.6,219.7,164.4,219.7,164.2z M219.7,165.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C219.5,165.8,219.7,165.5,219.7,165.3z M222.3,157.2c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C222.1,157.7,222.3,157.5,222.3,157.2z M222.3,158.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C222.1,158.8,222.3,158.6,222.3,158.3z M222.3,159.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C222.1,160,222.3,159.7,222.3,159.5z M185.9,182.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C185.7,183.2,185.9,183,185.9,182.7z M185.9,181.7c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C185.7,182.2,185.9,181.9,185.9,181.7z M185.9,178.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\ts0.2,0.5,0.5,0.5C185.7,179,185.9,178.8,185.9,178.5z M185.9,177.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\tc0,0.3,0.2,0.5,0.5,0.5C185.7,178,185.9,177.8,185.9,177.5z M185.9,176.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5\n\ts0.2,0.5,0.5,0.5C185.7,177,185.9,176.7,185.9,176.5z M185.9,175.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC185.7,175.9,185.9,175.7,185.9,175.4z M185.9,174.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5\n\tC185.7,174.9,185.9,174.6,185.9,174.4z M185.9,173.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC185.7,173.8,185.9,173.6,185.9,173.3z M185.9,172.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC185.7,172.8,185.9,172.6,185.9,172.3z M185.9,171.2c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tC185.7,171.7,185.9,171.5,185.9,171.2z M170.3,183.6c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n\tS170.3,183.9,170.3,183.6z M169.3,181.5c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S169.3,181.2,169.3,181.5z\n\t M169.3,179.4c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S169.3,179.1,169.3,179.4z M169.3,178.3\n\tc0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S169.3,178,169.3,178.3z M169.3,177.3c0,0.3,0.2,0.5,0.5,0.5\n\ts0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S169.3,177,169.3,177.3z M169.3,176.2c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5S169.3,175.9,169.3,176.2z M169.3,175.1c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5\n\tS169.3,174.9,169.3,175.1z M169.3,174.1c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S169.3,173.8,169.3,174.1z\n\t M169.3,173c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S169.3,172.7,169.3,173z M169.3,172c0,0.3,0.2,0.5,0.5,0.5\n\ts0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S169.3,171.7,169.3,172z M165.7,178.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\ts-0.2-0.5-0.5-0.5C165.9,177.6,165.7,177.9,165.7,178.1z M165.7,177.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5C165.9,176.6,165.7,176.9,165.7,177.1z M165.7,176.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5C165.9,175.6,165.7,175.8,165.7,176.1z M165.7,175.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5C165.9,174.6,165.7,174.8,165.7,175.1z M165.7,174.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5C165.9,173.6,165.7,173.8,165.7,174.1z M165.7,173.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5C165.9,172.6,165.7,172.8,165.7,173.1z M165.7,172.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5\n\tc0-0.3-0.2-0.5-0.5-0.5C165.9,171.6,165.7,171.8,165.7,172.1z M175.1,142.6c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7C175.9,142.9,175.5,142.6,175.1,142.6z M175.1,144.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7C175.9,144.4,175.5,144.1,175.1,144.1z M175.1,147c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7C174.4,146.7,174.7,147,175.1,147z M186.9,135.4c0,0,0.1,0,0.1,0c-0.3,0.1-0.4,0.4-0.4,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c0,0-0.1,0-0.1,0c0.3-0.1,0.4-0.4,0.4-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7S186.5,135.4,186.9,135.4z M187.8,138.2c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7C187,137.9,187.4,138.2,187.8,138.2z M188.5,139.6c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\ts-0.7,0.3-0.7,0.7C187.7,139.3,188.1,139.6,188.5,139.6z M189.1,141c0.1,0,0.1,0,0.2,0c-0.2,0.1-0.3,0.3-0.3,0.6\n\tc0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.1,0-0.1,0-0.2,0c0.2-0.1,0.3-0.3,0.3-0.6\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C188.3,140.7,188.7,141,189.1,141z M190.5,143.5c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C189.8,143.1,190.1,143.5,190.5,143.5z M191.3,144.7c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7s-0.7,0.3-0.7,0.7C190.6,144.4,190.9,144.7,191.3,144.7z M192.3,145.8c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7s-0.7,0.3-0.7,0.7C191.6,145.5,191.9,145.8,192.3,145.8z M193.3,146.9c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C192.6,146.6,192.9,146.9,193.3,146.9z M194.3,147.9c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C193.6,147.6,193.9,147.9,194.3,147.9z M195.4,149c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C194.7,148.6,195,149,195.4,149z M196.6,150c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C195.8,149.6,196.2,150,196.6,150z M197.7,150.9c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C197,150.6,197.3,150.9,197.7,150.9z M198.2,150.9c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7C198.5,150.2,198.2,150.5,198.2,150.9z M225.9,157.1c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C225.6,157.9,225.9,157.6,225.9,157.1z M225.9,158.7c0-0.4-0.3-0.7-0.7-0.7\n\ts-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7S225.9,159.1,225.9,158.7z M225.9,160.3c0-0.4-0.3-0.7-0.7-0.7s-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7S225.9,160.7,225.9,160.3z M226,161.9c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tC225.7,162.6,226,162.3,226,161.9z M226.1,163.4c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tC225.8,164.1,226.1,163.8,226.1,163.4z M226.2,165c0-0.4-0.3-0.7-0.7-0.7s-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tS226.2,165.4,226.2,165z M226.2,166.6c0-0.4-0.3-0.7-0.7-0.7s-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7S226.2,167,226.2,166.6z\n\t M225.7,167.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7C226.4,167.7,226.1,167.4,225.7,167.4z\n\t M226.6,169.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C226.3,170.4,226.6,170.1,226.6,169.7z\n\t M226.3,170.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7C227,170.7,226.7,170.4,226.3,170.4z\n\t M226.5,171.9c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7C227.3,172.2,226.9,171.9,226.5,171.9z\n\t M227,174.9c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C226.2,174.6,226.5,174.9,227,174.9z M227.4,176.4\n\tc0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7S227,176.4,227.4,176.4z M228,177.9c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C227.3,177.5,227.6,177.9,228,177.9z M228.6,179.3c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C227.9,179,228.2,179.3,228.6,179.3z M229.9,180.1c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C229.6,180.8,229.9,180.5,229.9,180.1z M241.3,181.1c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C241,181.9,241.3,181.5,241.3,181.1z M240.1,179.9c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C239.8,180.6,240.1,180.3,240.1,179.9z M239,178.7c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C238.6,179.4,239,179.1,239,178.7z M237.9,177.4c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C237.5,178.2,237.9,177.9,237.9,177.4z M236.9,176c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C236.5,176.8,236.9,176.4,236.9,176z M235.8,174.5c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C235.5,175.3,235.8,175,235.8,174.5z M235,173c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C234.6,173.8,235,173.4,235,173z M234.1,171.7c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C233.8,172.4,234.1,172.1,234.1,171.7z M233.4,170.1c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C233.1,170.8,233.4,170.5,233.4,170.1z M232.7,168.5c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7C232.4,169.2,232.7,168.9,232.7,168.5z M232.2,166.9c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C231.9,167.6,232.2,167.3,232.2,166.9z M231.1,164.5c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7C231.8,164.8,231.5,164.5,231.1,164.5z M230.6,162.9c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7C231.4,163.3,231,162.9,230.6,162.9z M230.4,161.3c-0.4,0-0.7,0.3-0.7,0.7\n\ts0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7S230.8,161.3,230.4,161.3z M230.2,159.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\tc0.4,0,0.7-0.3,0.7-0.7C230.9,160,230.6,159.7,230.2,159.7z M230.7,158.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C230.4,159.4,230.7,159.1,230.7,158.7z M230.5,157.1c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7C230.2,157.8,230.5,157.5,230.5,157.1z M230.5,155.3c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\ts0.3,0.7,0.7,0.7C230.2,156.1,230.5,155.8,230.5,155.3z M230.5,153.6c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7\n\tC230.1,154.3,230.5,154,230.5,153.6z M234.4,179.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tC235.1,179.5,234.8,179.1,234.4,179.1z M233.5,179.1c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tC232.8,178.8,233.1,179.1,233.5,179.1z M232.6,177.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tC231.9,177.4,232.2,177.7,232.6,177.7z M231.8,176.2c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tC231.1,175.9,231.4,176.2,231.8,176.2z M231.1,174.7c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tS230.6,174.7,231.1,174.7z M230.5,173.2c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7S230,173.2,230.5,173.2z\n\t M229.8,170.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7C230.5,170.4,230.2,170.1,229.8,170.1z\n\t M229.3,168.3c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7S229.7,168.3,229.3,168.3z M228.8,166.7\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7C229.5,167,229.2,166.7,228.8,166.7z M228.5,166.5\n\tc0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C227.7,166.2,228.1,166.5,228.5,166.5z M229,164\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C228.7,164.8,229,164.5,229,164z M228.8,162.4\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C228.5,163.1,228.8,162.8,228.8,162.4z M228.7,160.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C228.3,161.4,228.7,161.1,228.7,160.7z M228.7,159\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7C228.3,159.7,228.7,159.4,228.7,159z M228.7,157.3\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C228.3,158,228.7,157.7,228.7,157.3z M228.7,155.6\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C228.3,156.3,228.7,156,228.7,155.6z M186.9,130.3\n\tc0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7C187.2,129.6,186.9,129.9,186.9,130.3z M188.7,131.8\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C188.3,132.5,188.7,132.2,188.7,131.8z M189.2,133.2\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C188.8,133.9,189.2,133.6,189.2,133.2z M198.5,145.4\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.1,0-0.2,0-0.4,0.1c0-0.1,0-0.1,0-0.1c0-0.4-0.3-0.7-0.7-0.7c-0.2,0-0.4,0.1-0.5,0.2\n\tc0.1-0.1,0.1-0.2,0.1-0.4c0-0.4-0.3-0.7-0.7-0.7c-0.2,0-0.3,0.1-0.5,0.2c0.1-0.1,0.1-0.3,0.1-0.4c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.2,0-0.4,0.1-0.5,0.2c0.1-0.1,0.1-0.2,0.1-0.4c0-0.4-0.3-0.7-0.7-0.7c-0.2,0-0.3,0.1-0.4,0.1c0.1-0.1,0.2-0.3,0.2-0.5\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.1,0-0.2,0-0.3,0.1c0.1-0.1,0.2-0.3,0.2-0.4c0-0.4-0.3-0.7-0.7-0.7c-0.1,0-0.1,0-0.2,0\n\tc0.1-0.1,0.2-0.3,0.2-0.5c0-0.4-0.3-0.7-0.7-0.7c-0.1,0-0.2,0-0.3,0.1c0.2-0.1,0.3-0.3,0.3-0.6c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.1,0-0.1,0-0.2,0c0.2-0.1,0.4-0.4,0.4-0.6c0-0.4-0.3-0.7-0.7-0.7c-0.1,0-0.1,0-0.2,0c0.3-0.1,0.4-0.4,0.4-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.1,0,0.1,0,0.2,0c-0.3,0.1-0.4,0.4-0.4,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c0.1,0,0.1,0,0.2,0c-0.2,0.1-0.4,0.4-0.4,0.6c0,0.4,0.3,0.7,0.7,0.7c0.1,0,0.2,0,0.3-0.1\n\tc-0.2,0.1-0.3,0.3-0.3,0.6c0,0.4,0.3,0.7,0.7,0.7c0.1,0,0.2,0,0.2,0c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.4,0.3,0.7,0.7,0.7\n\tc0.1,0,0.2,0,0.3-0.1c-0.1,0.1-0.2,0.3-0.2,0.4c0,0.4,0.3,0.7,0.7,0.7c0.2,0,0.3-0.1,0.4-0.1c-0.1,0.1-0.2,0.3-0.2,0.5\n\tc0,0.4,0.3,0.7,0.7,0.7c0.2,0,0.4-0.1,0.5-0.2c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.4,0.3,0.7,0.7,0.7c0.2,0,0.3-0.1,0.5-0.2\n\tc-0.1,0.1-0.1,0.3-0.1,0.4c0,0.4,0.3,0.7,0.7,0.7c0.2,0,0.4-0.1,0.5-0.2c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.4,0.3,0.7,0.7,0.7\n\tc0.1,0,0.2,0,0.4-0.1c0,0.1,0,0.1,0,0.1c0,0.4,0.3,0.7,0.7,0.7C198.1,146.1,198.5,145.8,198.5,145.4z M200.9,146.8\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.2,0-0.3,0.1-0.4,0.2c0,0,0-0.1,0-0.1c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tc0,0.4,0.3,0.7,0.7,0.7c0.2,0,0.3-0.1,0.4-0.2c0,0,0,0.1,0,0.1c0,0.4,0.3,0.7,0.7,0.7C200.6,147.5,200.9,147.2,200.9,146.8z\n\t M150.7,94.6c-0.1,0-0.2-0.1-0.3-0.1c-0.2,0-0.3,0.1-0.4,0.1c-0.1-0.1-0.2-0.1-0.4-0.1c0,0-0.1,0-0.1,0c-0.1-0.1-0.2-0.1-0.3-0.1\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0,0,0.1,0,0.1,0c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.3-0.1,0.4-0.1\n\tc0.1,0.1,0.2,0.1,0.4,0.1c0.2,0,0.3-0.1,0.4-0.1c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.2-0.1c0.1,0.1,0.2,0.1,0.4,0.1\n\tc0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.1,0-0.2,0-0.2,0c-0.1-0.1-0.2-0.1-0.4-0.1C150.9,94.5,150.8,94.5,150.7,94.6z\n\t M152,101.9c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C151.3,101.6,151.6,101.9,152,101.9z M152.4,101.9\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7C153.2,102.3,152.8,101.9,152.4,101.9z M152.9,104.9\n\tc0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C152.2,104.6,152.5,104.9,152.9,104.9z M153.5,106.3\n\tc0.1,0,0.1,0,0.2,0c-0.2,0.1-0.3,0.3-0.3,0.6c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tc-0.1,0-0.1,0-0.2,0c0.2-0.1,0.3-0.3,0.3-0.6c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7S153.1,106.3,153.5,106.3z M154.7,108.9\n\tc0.1,0,0.2,0,0.3-0.1c-0.2,0.1-0.3,0.4-0.3,0.6c0,0.4,0.3,0.7,0.7,0.7c0.1,0,0.2,0,0.2-0.1c-0.1,0.1-0.2,0.3-0.2,0.5\n\tc0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.1,0-0.2,0-0.2,0c0.1-0.1,0.2-0.3,0.2-0.5\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.1,0-0.2,0-0.3,0.1c0.2-0.1,0.3-0.4,0.3-0.6c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tC154,108.6,154.3,108.9,154.7,108.9z M157.1,112.6c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n\tC156.4,112.2,156.7,112.6,157.1,112.6z M158.1,112.2c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tC158.8,112.5,158.5,112.2,158.1,112.2z M149.7,101.1c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7\n\tC150,100.4,149.7,100.7,149.7,101.1z M150.5,103.3c-0.3,0.1-0.5,0.4-0.5,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c0.3-0.1,0.5-0.4,0.5-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C149.8,103,150.1,103.3,150.5,103.3z\n\t M151,106.2c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C150.2,105.9,150.5,106.2,151,106.2z M151.4,107.7\n\tc0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C150.6,107.4,151,107.7,151.4,107.7z M152.5,108.4\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C152.2,109.1,152.5,108.8,152.5,108.4z M148.3,104.8\n\tc-0.3,0.1-0.6,0.4-0.6,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.6-0.6-0.7c0.3-0.1,0.6-0.4,0.6-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C147.8,104.5,148,104.8,148.3,104.8z M145.7,105.7c0,0-0.1,0-0.1,0\n\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.2-0.1-0.4-0.3-0.6c0,0,0.1,0,0.1,0c0.4,0,0.7-0.3,0.7-0.7\n\tc0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7C145.4,105.4,145.5,105.6,145.7,105.7z M144.1,107.8c0,0.4,0.3,0.7,0.7,0.7\n\ts0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7S144.1,107.4,144.1,107.8z M144.3,108.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7\n\ts0.7-0.3,0.7-0.7C145,108.7,144.7,108.4,144.3,108.4z\"/>";
    };
    return ChandlierShape;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
//# sourceMappingURL=chandelier-shape.js.map

/***/ }),

/***/ "../../../../../src/app/shapes/header-shape.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mo_js__ = __webpack_require__("../../../../mo-js/build/mo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mo_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mo_js__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Header = (function () {
    function Header(el) {
        this.shapeArr = [];
        this.initShapes();
        this.el = el;
        this.timeline = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Timeline"]();
        // this.shapeArr.forEach((e, i) => {
        // 	this.createShape(e.name, e.stroke, e.path, i, e.round);
        // });
        this.createShape('TopLines', 0, window.innerHeight + 280);
        this.createShape('BottomLines', 0, window.innerHeight + 280);
        this.createShape('DottedBottomLines', 0, window.innerHeight + 280);
        this.createShape('DottedTopLines', 0, window.innerHeight + 280);
        // this.createShape('Ampersand', 0,  window.innerHeight + 280);
        this.createShape('Circles', 0, window.innerHeight + 280);
        this.createShape('WillPatrick', 0, window.innerHeight + 280);
        // this.createAmpersand();
        this.timeline.play();
    }
    Header.prototype.initShapes = function () {
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('TopLines', TopLines);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('BottomLines', BottomLines);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('DottedBottomLines', DottedBottomLines);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('DottedTopLines', DottedTopLines);
        // addShape('Ampersand', Ampersand);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('Circles', Circles);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('WillPatrick', WillPatrick);
    };
    Header.prototype.createShape = function (shape, x, y) {
        var mql = window.matchMedia('(max-width:499px)').matches;
        var scale = 1;
        if (mql) {
            scale = 0.8;
        }
        var s = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Shape"]({
            shape: shape,
            fill: '#333232',
            stroke: 'none',
            fillOpacity: 0,
            parent: this.el,
            top: window.innerHeight / 2,
            left: '50%',
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].cubic.inout,
            duration: 8800 - 1000,
            width: 412,
            height: 206,
            y: 0,
            x: x,
            scale: scale,
            isShowStart: true
        }).then({
            duration: 600,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].expo.inout,
            fillOpacity: { 0: 1 }
        });
        this.timeline.add(s);
        return s;
    };
    return Header;
}());

var WillPatrick = (function (_super) {
    __extends(WillPatrick, _super);
    function WillPatrick() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WillPatrick.prototype.getShape = function () {
        return "<g id=\"will-patrick\" transform=\"translate(-155, -51.5)\">\n\t<path class=\"st1\" d=\"M92.1,121.3v7l-2.1,2v-13.1c-0.7,0-1.4-0.1-2-0.3c-0.6-0.2-1.4-0.6-2.4-1.2c-1-0.6-1.8-1.5-2.5-2.8\n\t\tc-0.7-1.3-1.1-2.7-1.1-4.1c0-2.3,0.6-4,1.7-5.2c1.2-1.2,2.2-2,3.2-2.5c1-0.5,2-0.7,3.1-0.7h0.4h1.5h0.2c1.8,0,3.5,0.5,5.1,1.4\n\t\tc1.6,0.9,2.8,2.2,3.7,3.8c0.9,1.6,1.4,3.3,1.4,5.2c0,1.4-0.3,2.7-0.8,3.9c-0.5,1.3-1.2,2.4-2.2,3.3c-0.9,0.9-2.1,1.7-3.3,2.3\n\t\tC94.8,121.1,93.5,121.3,92.1,121.3z M90,115.2v-12.6c-1.6,0-3,0.6-4.2,1.9c-1.2,1.3-1.7,2.7-1.7,4.4c0,1.7,0.4,3,1.3,3.9\n\t\tc0.9,0.9,1.7,1.5,2.4,1.9S89.2,115.2,90,115.2z M97.1,113.9c-1.3,1.7-3,2.8-5,3.2v2.2c1.2,0,2.2-0.2,3.1-0.6c0.9-0.4,2-1.2,3.2-2.5\n\t\tc1.2-1.2,1.8-3,1.8-5.2c0-2.3-0.6-4.1-1.8-5.3c-1.2-1.2-2.3-2-3.2-2.4c-0.9-0.4-2-0.6-3.1-0.6V115c1.4-0.4,2.5-1.2,3.4-2.4\n\t\tL97.1,113.9z\"/>\n\t<path class=\"st1\" d=\"M105.7,108.9h-1.2l-0.7-2h1.8v-2.2c0-1.2,0.4-2.2,1.2-3.1c0.8-0.9,1.9-1.3,3.1-1.3c0.7,0,1.3,0.1,1.7,0.3\n\t\tc0.5,0.2,0.9,0.5,1.3,0.9c0.4,0.4,0.7,0.9,1,1.4c0.2,0.5,0.3,1.1,0.3,1.7v21.3h-2.1v-17h-4.5v17h-2.1V108.9z M112.3,106.8v-2.2\n\t\tc0-0.6-0.2-1.2-0.6-1.6s-1-0.7-1.7-0.7c-0.6,0-1.1,0.2-1.5,0.6c-0.4,0.4-0.7,1-0.7,1.7v2.2H112.3z\"/>\n\t<path class=\"st1\" d=\"M121.6,125.9h-2.1v-23.3h-3.7v-2.1h9.5v2.1h-3.7V125.9z\"/>\n\t<path class=\"st1\" d=\"M126.8,100.5h0.4h1.5h0.2c1.8,0,3.5,0.5,5.1,1.4c1.6,0.9,2.8,2.2,3.7,3.8c0.9,1.6,1.4,3.3,1.4,5.2\n\t\tc0,2.2-0.7,4.3-2.1,6.2s-3.2,3.1-5.2,3.7l6.2,5l-3,0l-6.1-4.8v4.8h-2.1V100.5z M128.9,119.3c1.2,0,2.2-0.2,3.1-0.6\n\t\tc0.9-0.4,2-1.2,3.2-2.5s1.8-3,1.8-5.2c0-2.3-0.6-4.1-1.8-5.3c-1.2-1.2-2.3-2-3.2-2.4c-0.9-0.4-2-0.6-3.1-0.6V119.3z\"/>\n\t<path class=\"st1\" d=\"M140.6,100.5h2.1v25.4h-2.1V100.5z\"/>\n\t<path class=\"st1\" d=\"M157.5,123.8v2.1c-2.4,0-4.6-0.5-6.7-1.6s-3.7-2.6-4.8-4.5s-1.8-4.1-1.8-6.5c0-2.4,0.6-4.6,1.7-6.5\n\t\tc1.2-1.9,2.8-3.5,4.9-4.6c2.1-1.1,4.3-1.7,6.7-1.7v2.1c-3,0-5.3,0.7-6.9,2.1c-1.6,1.4-2.7,2.8-3.4,4.1c-0.6,1.3-0.9,2.8-0.9,4.4\n\t\tc0,1.9,0.5,3.6,1.4,5.2c0.9,1.6,2.3,2.9,4,3.9C153.4,123.3,155.3,123.8,157.5,123.8z\"/>\n\t<path class=\"st1\" d=\"M161.1,125.9H159v-25.4h2.1v5.9l5.1-5.9l2.8,0l-5.7,6.6l6.4,18.8l-2.3,0l-6.3-18.7L161.1,125.9z\"/>\n\t<path class=\"st1\" d=\"M191.9,120.3c-0.7,0.8-1.7,1.4-3,1.9v6l-2.1,2v-7.6h-0.4c-1.4,0-2.7-0.3-3.9-1c-1.2-0.7-2.1-1.5-2.6-2.4\n\t\tc-0.5-0.9-0.9-1.7-1.1-2.4c-0.2-0.7-0.3-1.4-0.3-2.1c0-1.4,0.4-2.7,1.1-3.9c0.7-1.2,1.7-2.2,2.9-2.8s2.5-1,3.9-1h0.4v-2.2\n\t\tc0-1.2,0.4-2.2,1.2-3.1s1.9-1.3,3.1-1.3c0.7,0,1.3,0.1,1.7,0.3c0.5,0.2,0.9,0.5,1.3,0.9c0.4,0.4,0.7,0.9,1,1.4\n\t\tc0.2,0.5,0.3,1.1,0.3,1.7v21.3h-2.1v-17h-4.5V120c0.6-0.2,1.1-0.6,1.6-1.2L191.9,120.3z M186.8,120.5v-11.6h-0.4\n\t\tc-0.6,0-1.1,0.1-1.5,0.2c-0.4,0.1-1,0.4-1.7,0.8c-0.7,0.4-1.2,1.1-1.8,2c-0.5,0.9-0.8,1.9-0.8,2.9c0,1.6,0.6,2.9,1.7,4.1\n\t\tc1.1,1.1,2.5,1.7,4.1,1.7H186.8z M193.4,106.9v-2.2c0-0.6-0.2-1.2-0.6-1.6c-0.4-0.5-1-0.7-1.7-0.7c-0.6,0-1.1,0.2-1.6,0.6\n\t\tc-0.4,0.4-0.6,1-0.6,1.7v2.2H193.4z\"/>\n\t<path class=\"st1\" d=\"M204.5,104.5v-4h2.1v25.4h-2.1v-19.1l-5.4-4v23H197v-25.4h2.1L204.5,104.5z\"/>\n\t<path class=\"st1\" d=\"M210.6,125.9h-2.5v-25.4h2.5c1.8,0,3.4,0.3,4.9,0.9c1.5,0.6,2.8,1.6,4,2.8c1.2,1.2,2.1,2.6,2.8,4.1\n\t\ts1,3.2,1,4.9c0,1.8-0.3,3.4-1,4.9c-0.6,1.5-1.6,2.9-2.7,4c-1.2,1.2-2.6,2.1-4.1,2.8C213.9,125.6,212.3,125.9,210.6,125.9z\n\t\t M210.6,123.8c3,0,5.3-0.8,6.8-2.4c1.5-1.6,2.5-3,3-4.4c0.5-1.4,0.8-2.6,0.8-3.8c0-1.5-0.3-2.9-0.8-4.2c-0.6-1.3-1.3-2.4-2.3-3.4\n\t\tc-1-1-2.1-1.7-3.4-2.2c-1.3-0.5-2.7-0.8-4.1-0.8h-0.4v21.2H210.6z\"/>\n\t<path class=\"st1\" d=\"M248.6,109.6l-4,17l-3.1-13c-1,0.3-1.8,0.5-2.5,0.5c-1.9,0-3.4-0.7-4.8-2c-1.3-1.3-2-2.9-2-4.8s0.7-3.5,2-4.8\n\t\tc1.3-1.3,2.9-2,4.8-2h1.6l2.2,9.5c0.3-0.5,0.6-1,0.8-1.6l0.8,3.1l-0.5,0.5l-0.4,0.4l1.2,4.9l4-16.8l4,16.8l4-16.9l2.2,0l-6.1,26.1\n\t\tL248.6,109.6z M238.9,102.6c-1.3,0-2.3,0.5-3.2,1.4c-0.9,0.9-1.3,2-1.3,3.3c0,1.3,0.5,2.4,1.4,3.3s2,1.4,3.3,1.4\n\t\tc0.8,0,1.4-0.1,2-0.4L238.9,102.6z\"/>\n\t<path class=\"st1\" d=\"M260.3,100.5h2.1v25.4h-2.1V100.5z\"/>\n\t<path class=\"st1\" d=\"M263.8,100.5h2.1v23.3h4.5v2.1h-6.6V100.5z\"/>\n\t<path class=\"st1\" d=\"M272,100.5h2.1v23.3h4.5v2.1H272V100.5z\"/>\n\t<path class=\"st1\" d=\"M280.1,100.5h2.1v25.4h-2.1V100.5z\"/>\n\t<path class=\"st1\" d=\"M285.5,108.9h-1.2l-0.7-2h1.8v-2.2c0-1.2,0.4-2.2,1.2-3.1c0.8-0.9,1.9-1.3,3.1-1.3c0.7,0,1.3,0.1,1.7,0.3\n\t\tc0.5,0.2,0.9,0.5,1.3,0.9c0.4,0.4,0.7,0.9,1,1.4c0.2,0.5,0.3,1.1,0.3,1.7v21.3h-2.1v-17h-4.5v17h-2.1V108.9z M292.1,106.8v-2.2\n\t\tc0-0.6-0.2-1.2-0.6-1.6c-0.4-0.5-1-0.7-1.7-0.7c-0.6,0-1.1,0.2-1.5,0.6s-0.7,1-0.7,1.7v2.2H292.1z\"/>\n\t<path class=\"st1\" d=\"M300.4,100l3.8,8.5l3.8-8.5l4.8,25.9l-2.1,0l-3.5-18.9l-2.9,6.5l-3-6.6l-3.5,19l-2.1,0L300.4,100z\"/>\n</g>";
    };
    return WillPatrick;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var TopLines = (function (_super) {
    __extends(TopLines, _super);
    function TopLines() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopLines.prototype.getShape = function () {
        return "<g transform=\"translate(-155, -51.5) scale(1, 1)\"><path class=\"st0\" d=\"M183.4,82.4H10.7c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9c0,0,0,0,0,0h172.7c11.5,0,20.8-9.3,20.8-20.8\n\t\t\t\tc0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9C206,72.3,195.8,82.4,183.4,82.4z\"/>\n\t\t\t<path class=\"st0\" d=\"M226.8,82.4h172.7c0.5,0,0.9-0.4,0.9-0.9s-0.4-0.9-0.9-0.9c0,0,0,0,0,0H226.8c-11.5,0-20.7-9.3-20.8-20.8\n\t\t\t\tc0-0.5-0.4-0.9-0.9-0.9s-0.9,0.4-0.9,0.9C204.2,72.3,214.3,82.4,226.8,82.4z\"/>\n\t\t\t<path class=\"st0\" d=\"M387,89.9H23.1c-1,0-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8c0,0,0,0,0,0H387c1,0,1.8,0.8,1.8,1.8\n\t\t\t\tC388.8,89.1,388,89.9,387,89.9z\"/></g>";
    };
    return TopLines;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var BottomLines = (function (_super) {
    __extends(BottomLines, _super);
    function BottomLines() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BottomLines.prototype.getShape = function () {
        return "<g transform=\"translate(-155, -51.5) scale(1, 1)\"><path class=\"st0\" d=\"M183.4,142.6H10.7c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9h172.7c11.5,0,20.8,9.3,20.8,20.8\n\t\t\t\tc0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9C206,152.7,195.8,142.6,183.4,142.6z\"/>\n\t\t\t<path class=\"st0\" d=\"M226.8,142.6h172.7c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9H226.8c-11.5,0-20.7,9.3-20.8,20.8\n\t\t\t\tc0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9C204.2,152.7,214.3,142.6,226.8,142.6z\"/>\n\t\t\t<path class=\"st0\" d=\"M387,138.7H23.1c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8H387c1,0,1.8,0.8,1.8,1.8\n\t\t\t\tC388.8,137.9,388,138.7,387,138.7z\"/></g>";
    };
    return BottomLines;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var Ampersand = (function (_super) {
    __extends(Ampersand, _super);
    function Ampersand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ampersand.prototype.getShape = function () {
        return "<path id=\"ampersand\" transform=\"translate(-155, -51.5)\" class=\"st0\" d=\"M212.6,34.5c-1.2-1-2.8-1.4-4.3-1.2c-0.2-2.1-0.5-4.3-0.8-6.7l3.7-2.5\n\t\t\tc8.4-5.6,5.7-19.6,3.8-23.4c-9.3,5.4-9.9,16.1-9.5,22.5c-2.7,2-5.6,3.9-8.4,6.2c-4.8,3.9-4.3,10.6-3,13.9\n\t\t\tc2.6,5.2,8.5,7.9,14.1,6.5c0.2,2.1,0.1,4.2-0.4,6.2c-1.4,3.9-6.1,3.7-7,2.4c2.1,0.3,3.7-2,3.5-3.8c-0.2-2-2-3.5-4-3.3\n\t\t\tc-0.1,0-0.1,0-0.2,0c-1.9,0.4-3.4,2.3-3.1,5s4.5,4.9,9,3.3c3.8-1.3,3.9-6.6,3.6-10.5l0.2-0.1C218.3,45.8,216.3,37.3,212.6,34.5z\n\t\t\t M214.6,3.6c3.2,8.9-1.3,13.8-7.7,18.6C206.1,15.1,209,8,214.6,3.6z M203.9,48.5c-3.6-0.2-6.8-2.7-7.7-8.9\n\t\t\tc-0.6-4.1,3.9-7.9,9.8-12v0.2c0.1,0.9,0.4,3,0.7,5.8c-1.8,0.5-3.4,1.8-4.3,3.4c-0.9,2.2-0.9,5.5,2.3,8.8c-2.1-3.1-1-6.9,1.2-8.1\n\t\t\tc0.4-0.2,0.8-0.3,1.2-0.4c0.4,3.4,0.8,7.2,0.9,10.5C206.8,48.3,205.3,48.5,203.9,48.5z M212.8,42.7c-0.1,2-1.4,3.8-3.2,4.5l0,0\n\t\t\tc-0.2-2-0.4-5.4-0.9-9.8C211.2,37.9,212.9,40.2,212.8,42.7L212.8,42.7z\"/>";
    };
    return Ampersand;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var DottedTopLines = (function (_super) {
    __extends(DottedTopLines, _super);
    function DottedTopLines() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DottedTopLines.prototype.getShape = function () {
        return "<g id=\"dotted-top\" transform=\"translate(-155, -51.5) scale(1, 1)\">\n\t\t\t<path class=\"st0\" d=\"M170.6,74.3h-1.8c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9h1.8c0.5,0,0.9,0.4,0.9,0.9\n\t\t\t\tS171.1,74.3,170.6,74.3C170.6,74.3,170.6,74.3,170.6,74.3L170.6,74.3z M163.3,74.3h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tc0-0.5,0.4-0.9,0.9-0.9h1.8c0.5,0,0.9,0.4,0.9,0.9C164.2,73.9,163.8,74.3,163.3,74.3z M156.1,74.3h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tc0-0.5,0.4-0.9,0.9-0.9h1.8c0.5,0,0.9,0.4,0.9,0.9C157,73.9,156.6,74.3,156.1,74.3z M148.8,74.3H147c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tc0-0.5,0.4-0.9,0.9-0.9h1.8c0.5,0,0.9,0.4,0.9,0.9C149.7,73.9,149.3,74.3,148.8,74.3L148.8,74.3z M141.5,74.3h-1.8\n\t\t\t\tc-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9c0,0,0,0,0,0h1.8c0.5,0,0.9,0.4,0.9,0.9C142.4,73.9,142,74.3,141.5,74.3z M134.2,74.3\n\t\t\t\th-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9c0,0,0,0,0,0h1.8c0.5,0,0.9,0.4,0.9,0.9C135.1,73.9,134.7,74.3,134.2,74.3z\n\t\t\t\t M126.9,74.3h-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9c0,0,0,0,0,0h1.8c0.5,0,0.9,0.4,0.9,0.9S127.4,74.3,126.9,74.3\n\t\t\t\tC126.9,74.3,126.9,74.3,126.9,74.3z M119.7,74.3h-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9c0,0,0,0,0,0h1.8\n\t\t\t\tc0.5,0,0.9,0.4,0.9,0.9S120.2,74.3,119.7,74.3C119.7,74.3,119.7,74.3,119.7,74.3z M112.4,74.3h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tc0-0.5,0.4-0.9,0.9-0.9h1.8c0.5,0,0.9,0.4,0.9,0.9S112.9,74.3,112.4,74.3C112.4,74.3,112.4,74.3,112.4,74.3z M105.1,74.3h-1.8\n\t\t\t\tc-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9h1.8c0.5,0,0.9,0.4,0.9,0.9C106,73.9,105.6,74.3,105.1,74.3L105.1,74.3z\n\t\t\t\t M97.8,74.3H96c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9h1.8c0.5,0,0.9,0.4,0.9,0.9C98.7,73.9,98.3,74.3,97.8,74.3\n\t\t\t\tL97.8,74.3z M90.5,74.3h-1.8c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9h1.8c0.5,0,0.9,0.4,0.9,0.9\n\t\t\t\tC91.5,73.9,91.1,74.3,90.5,74.3L90.5,74.3z M83.3,74.3h-1.8c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9h1.8\n\t\t\t\tc0.5,0,0.9,0.4,0.9,0.9C84.2,73.9,83.8,74.3,83.3,74.3L83.3,74.3z M76,74.3h-1.8c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9\n\t\t\t\tH76c0.5,0,0.9,0.4,0.9,0.9C76.9,73.9,76.5,74.3,76,74.3L76,74.3z M68.7,74.3h-1.8c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9\n\t\t\t\th1.8c0.5,0,0.9,0.4,0.9,0.9C69.6,73.9,69.2,74.3,68.7,74.3L68.7,74.3z M61.4,74.3h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tc0-0.5,0.4-0.9,0.9-0.9c0,0,0,0,0,0h1.8c0.5,0,0.9,0.4,0.9,0.9C62.4,73.9,62,74.3,61.4,74.3L61.4,74.3z M54.1,74.3h-1.8\n\t\t\t\tc-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9c0,0,0,0,0,0h1.8c0.5,0,0.9,0.4,0.9,0.9C55.1,73.9,54.7,74.3,54.1,74.3L54.1,74.3z\n\t\t\t\t M46.9,74.3h-1.8c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9c0,0,0,0,0,0h1.8c0.5,0,0.9,0.4,0.9,0.9\n\t\t\t\tC47.8,73.9,47.4,74.3,46.9,74.3C46.9,74.3,46.9,74.3,46.9,74.3L46.9,74.3z M39.6,74.3h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tc0-0.5,0.4-0.9,0.9-0.9c0,0,0,0,0,0h1.8c0.5,0,0.9,0.4,0.9,0.9C40.5,73.9,40.1,74.3,39.6,74.3L39.6,74.3z M32.3,74.3h-1.8\n\t\t\t\tc-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9c0,0,0,0,0,0h1.8c0.5,0,0.9,0.4,0.9,0.9C33.2,73.9,32.8,74.3,32.3,74.3L32.3,74.3z\n\t\t\t\t M25,74.3h-1.8c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9h1.8c0.5,0,0.9,0.4,0.9,0.9C26,73.9,25.6,74.3,25,74.3\n\t\t\t\tC25.1,74.3,25.1,74.3,25,74.3L25,74.3z M17.7,74.3H16c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9h1.8c0.5,0,0.9,0.4,0.9,0.9\n\t\t\t\tC18.7,73.9,18.3,74.3,17.7,74.3C17.8,74.3,17.8,74.3,17.7,74.3L17.7,74.3z M10.5,74.3H8.7c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\ts0.4-0.9,0.9-0.9c0,0,0,0,0,0h1.8c0.5,0,0.9,0.4,0.9,0.9S11,74.3,10.5,74.3C10.5,74.3,10.5,74.3,10.5,74.3L10.5,74.3z M3.2,74.3\n\t\t\t\tH1.4c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9c0,0,0,0,0,0h1.8c0.5,0,0.9,0.4,0.9,0.9S3.7,74.3,3.2,74.3\n\t\t\t\tC3.2,74.3,3.2,74.3,3.2,74.3L3.2,74.3z M176,74.3c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-1c0.6,0,1.2-0.1,1.7-0.2\n\t\t\t\tc0.5,0,0.9,0.3,1,0.8c0,0.4-0.2,0.8-0.7,1c-0.6,0.1-1.2,0.2-1.9,0.2L176,74.3z M183,72.4c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tc0-0.4,0.2-0.7,0.5-0.8c0.5-0.2,1.1-0.5,1.6-0.8c0.5-0.2,1,0,1.2,0.4c0.2,0.4,0.1,0.9-0.3,1.2c-0.6,0.3-1.1,0.6-1.7,0.8\n\t\t\t\tC183.3,72.4,183.2,72.4,183,72.4L183,72.4z\"/>\n\t\t\t<path class=\"st0\" d=\"M238.6,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9h-1.8\n\t\t\t\tC239,74.3,238.6,73.9,238.6,73.4z M245.9,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9\n\t\t\t\tc0,0,0,0,0,0h-1.8C246.3,74.3,245.9,73.9,245.9,73.4z M253.2,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8c0.5,0,0.9,0.4,0.9,0.9\n\t\t\t\ts-0.4,0.9-0.9,0.9c0,0,0,0,0,0h-1.8C253.6,74.3,253.2,73.9,253.2,73.4z M260.4,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8\n\t\t\t\tc0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9c0,0,0,0,0,0h-1.8C260.8,74.3,260.4,73.9,260.4,73.4C260.4,73.4,260.4,73.4,260.4,73.4\n\t\t\t\tL260.4,73.4z M267.7,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9h-1.8\n\t\t\t\tC268.1,74.3,267.7,73.9,267.7,73.4C267.7,73.4,267.7,73.4,267.7,73.4L267.7,73.4z M275,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8\n\t\t\t\tc0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9h-1.8C275.4,74.3,275,73.9,275,73.4z M282.3,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8\n\t\t\t\tc0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9h-1.8C282.7,74.3,282.3,73.9,282.3,73.4L282.3,73.4z M289.6,73.4\n\t\t\t\tc0-0.5,0.4-0.9,0.9-0.9l0,0h1.8c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9h-1.8C290,74.4,289.6,74,289.6,73.4\n\t\t\t\tC289.5,73.4,289.5,73.4,289.6,73.4L289.6,73.4z M296.8,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8c0.5,0,0.9,0.4,0.9,0.9\n\t\t\t\tc0,0.5-0.4,0.9-0.9,0.9h-1.8C297.2,74.4,296.8,74,296.8,73.4C296.8,73.4,296.8,73.4,296.8,73.4L296.8,73.4z M304.1,73.4\n\t\t\t\tc0-0.5,0.4-0.9,0.9-0.9l0,0h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9c0,0,0,0,0,0H305C304.5,74.3,304.1,73.9,304.1,73.4\n\t\t\t\tL304.1,73.4z M311.4,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9c0,0,0,0,0,0h-1.8\n\t\t\t\tC311.8,74.4,311.4,74,311.4,73.4C311.4,73.4,311.4,73.4,311.4,73.4L311.4,73.4z M318.7,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8\n\t\t\t\tc0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9c0,0,0,0,0,0h-1.8C319.1,74.4,318.7,74,318.7,73.4C318.7,73.5,318.6,73.4,318.7,73.4\n\t\t\t\tL318.7,73.4z M326,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9c0,0,0,0,0,0h-1.8\n\t\t\t\tC326.4,74.4,325.9,74,326,73.4C325.9,73.5,325.9,73.4,326,73.4L326,73.4z M333.2,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8\n\t\t\t\tc0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9h-1.8C333.6,74.4,333.2,74,333.2,73.4C333.2,73.5,333.2,73.4,333.2,73.4L333.2,73.4\n\t\t\t\tz M340.5,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9h-1.9\n\t\t\t\tC340.9,74.3,340.5,73.9,340.5,73.4L340.5,73.4z M347.8,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8c0.5,0,0.9,0.4,0.9,0.9\n\t\t\t\tc0,0.5-0.4,0.9-0.9,0.9h-1.8C348.2,74.4,347.8,74,347.8,73.4C347.8,73.5,347.8,73.4,347.8,73.4L347.8,73.4z M355.1,73.4\n\t\t\t\tc0-0.5,0.4-0.9,0.9-0.9l0,0h1.8c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9H356C355.5,74.4,355.1,74,355.1,73.4\n\t\t\t\tC355,73.5,355,73.5,355.1,73.4L355.1,73.4z M362.4,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.7c0.5,0,0.9,0.4,0.9,0.9\n\t\t\t\tc0,0.5-0.4,0.9-0.9,0.9h-1.8C362.7,74.3,362.3,73.9,362.4,73.4L362.4,73.4z M369.6,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8\n\t\t\t\tc0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9c0,0,0,0,0,0h-1.8C370,74.4,369.6,74,369.6,73.4C369.6,73.5,369.6,73.4,369.6,73.4\n\t\t\t\tL369.6,73.4z M376.9,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9c0,0,0,0,0,0h-1.8\n\t\t\t\tC377.3,74.4,376.9,74,376.9,73.4C376.9,73.5,376.9,73.4,376.9,73.4L376.9,73.4z M384.2,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8\n\t\t\t\tc0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9c0,0,0,0,0,0h-1.8C384.6,74.4,384.2,74,384.2,73.4C384.2,73.5,384.1,73.4,384.2,73.4\n\t\t\t\tL384.2,73.4z M391.5,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9h-1.8\n\t\t\t\tC391.9,74.4,391.5,74,391.5,73.4C391.4,73.5,391.4,73.4,391.5,73.4L391.5,73.4z M398.8,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8\n\t\t\t\tc0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9h-1.8C399.2,74.4,398.7,74,398.8,73.4C398.7,73.5,398.7,73.4,398.8,73.4L398.8,73.4\n\t\t\t\tz M406,73.4c0-0.5,0.4-0.9,0.9-0.9l0,0h1.8c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9h-1.9C406.4,74.3,406,73.9,406,73.4\n\t\t\t\tL406,73.4z M234,74.3c-0.7-0.1-1.3-0.1-1.9-0.2c-0.5-0.1-0.8-0.6-0.7-1.1c0.1-0.4,0.5-0.7,1-0.7c0.6,0.1,1.1,0.2,1.7,0.2\n\t\t\t\tc0.5,0,0.9,0.4,0.9,1C235,73.9,234.6,74.3,234,74.3L234,74.3z M226.7,72.4c-0.6-0.3-1.1-0.5-1.7-0.8c-0.4-0.3-0.6-0.8-0.3-1.3\n\t\t\t\tc0.2-0.4,0.7-0.5,1.2-0.3c0.5,0.3,1,0.5,1.6,0.8c0.5,0.2,0.7,0.7,0.5,1.2S227.2,72.6,226.7,72.4z\"/>\n\t\t</g>";
    };
    return DottedTopLines;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var DottedBottomLines = (function (_super) {
    __extends(DottedBottomLines, _super);
    function DottedBottomLines() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DottedBottomLines.prototype.getShape = function () {
        return "<g id=\"dotted-bottom\" transform=\"translate(-155, -51.5) scale(1, 1)\">\n\t\t\t<path class=\"st0\" d=\"M171.5,151.6c0,0.5-0.4,0.9-0.9,0.9l0,0h-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8\n\t\t\t\tC171.1,150.7,171.5,151.1,171.5,151.6z M164.2,151.6c0,0.5-0.4,0.9-0.9,0.9l0,0h-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8\n\t\t\t\tC163.8,150.6,164.2,151,164.2,151.6C164.2,151.6,164.2,151.6,164.2,151.6L164.2,151.6z M157,151.6c0,0.5-0.4,0.9-0.9,0.9l0,0\n\t\t\t\th-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8C156.6,150.6,157,151,157,151.6C157,151.5,157,151.5,157,151.6L157,151.6z\n\t\t\t\t M149.7,151.6c0,0.5-0.4,0.9-0.9,0.9l0,0H147c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8C149.3,150.7,149.7,151.1,149.7,151.6\n\t\t\t\tL149.7,151.6z M142.4,151.6c0,0.5-0.4,0.9-0.9,0.9l0,0h-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8\n\t\t\t\tC142,150.6,142.4,151,142.4,151.6C142.4,151.6,142.4,151.6,142.4,151.6L142.4,151.6z M135.1,151.6c0,0.5-0.4,0.9-0.9,0.9l0,0\n\t\t\t\th-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8C134.7,150.6,135.1,151,135.1,151.6C135.1,151.5,135.1,151.6,135.1,151.6\n\t\t\t\tL135.1,151.6z M127.8,151.6c0,0.5-0.4,0.9-0.9,0.9h0h-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9l0,0h1.8\n\t\t\t\tC127.4,150.6,127.8,151,127.8,151.6C127.9,151.5,127.9,151.6,127.8,151.6L127.8,151.6z M120.6,151.6c0,0.5-0.4,0.9-0.9,0.9h0\n\t\t\t\th-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8C120.2,150.6,120.6,151,120.6,151.6C120.6,151.5,120.6,151.6,120.6,151.6\n\t\t\t\tL120.6,151.6z M113.3,151.6c0,0.5-0.4,0.9-0.9,0.9h0h-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8\n\t\t\t\tC112.9,150.6,113.3,151,113.3,151.6C113.3,151.5,113.3,151.6,113.3,151.6L113.3,151.6z M106,151.6c0,0.5-0.4,0.9-0.9,0.9h0h-1.8\n\t\t\t\tc-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9l0,0h1.8C105.6,150.7,106,151.1,106,151.6L106,151.6z M98.7,151.6c0,0.5-0.4,0.9-0.9,0.9\n\t\t\t\th0H96c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8C98.3,150.6,98.7,151,98.7,151.6C98.7,151.5,98.8,151.6,98.7,151.6L98.7,151.6z\n\t\t\t\t M91.4,151.6c0,0.5-0.4,0.9-0.9,0.9h0h-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8C91.1,150.6,91.5,151.1,91.4,151.6\n\t\t\t\tL91.4,151.6L91.4,151.6z M84.2,151.6c0,0.5-0.4,0.9-0.9,0.9h0h-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8\n\t\t\t\tC83.8,150.6,84.2,151.1,84.2,151.6L84.2,151.6L84.2,151.6z M76.9,151.6c0,0.5-0.4,0.9-0.9,0.9h0h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\ts0.4-0.9,0.9-0.9H76C76.5,150.6,76.9,151,76.9,151.6C76.9,151.6,76.9,151.6,76.9,151.6L76.9,151.6z M69.6,151.6\n\t\t\t\tc0,0.5-0.4,0.9-0.9,0.9h0h-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9l0,0h1.8C69.2,150.6,69.6,151.1,69.6,151.6L69.6,151.6z\n\t\t\t\t M62.3,151.6c0,0.5-0.4,0.9-0.9,0.9h0h-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9l0,0h1.8C62,150.6,62.4,151.1,62.3,151.6\n\t\t\t\tL62.3,151.6L62.3,151.6z M55,151.6c0,0.5-0.4,0.9-0.9,0.9h0h-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8\n\t\t\t\tC54.7,150.6,55.1,151.1,55,151.6L55,151.6L55,151.6z M47.8,151.6c0,0.5-0.4,0.9-0.9,0.9h0h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\ts0.4-0.9,0.9-0.9h1.8C47.4,150.7,47.8,151.1,47.8,151.6L47.8,151.6z M40.5,151.6c0,0.5-0.4,0.9-0.9,0.9h0h-1.8\n\t\t\t\tc-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8C40.1,150.6,40.5,151.1,40.5,151.6L40.5,151.6L40.5,151.6z M33.2,151.6\n\t\t\t\tc0,0.5-0.4,0.9-0.9,0.9h0h-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8C32.8,150.6,33.2,151.1,33.2,151.6L33.2,151.6\n\t\t\t\tL33.2,151.6z M25.9,151.6c0,0.5-0.4,0.9-0.9,0.9c0,0,0,0,0,0h-1.8c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8\n\t\t\t\tC25.6,150.6,26,151,25.9,151.6C26,151.5,26,151.5,25.9,151.6L25.9,151.6z M18.6,151.6c0,0.5-0.4,0.9-0.9,0.9c0,0,0,0,0,0H16\n\t\t\t\tc-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8C18.3,150.7,18.7,151.1,18.6,151.6L18.6,151.6z M11.4,151.6c0,0.5-0.4,0.9-0.9,0.9\n\t\t\t\tc0,0,0,0,0,0H8.7c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8C11,150.6,11.4,151.1,11.4,151.6L11.4,151.6L11.4,151.6z M4.1,151.6\n\t\t\t\tc0,0.5-0.4,0.9-0.9,0.9c0,0,0,0,0,0H1.4c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h1.8C3.7,150.6,4.1,151.1,4.1,151.6L4.1,151.6\n\t\t\t\tL4.1,151.6z M176.1,150.7c0.7,0.1,1.3,0.1,1.9,0.2c0.5,0.1,0.8,0.6,0.7,1.1c-0.1,0.4-0.5,0.7-1,0.7c-0.6-0.1-1.1-0.2-1.7-0.2\n\t\t\t\tc-0.5,0-0.9-0.4-0.9-1C175.1,151.1,175.5,150.7,176.1,150.7L176.1,150.7z M183.4,152.6c0.6,0.3,1.1,0.5,1.7,0.9\n\t\t\t\tc0.4,0.3,0.6,0.8,0.3,1.3c-0.2,0.4-0.7,0.5-1.2,0.3c-0.5-0.3-1-0.5-1.6-0.8c-0.5-0.2-0.7-0.7-0.5-1.2S182.9,152.4,183.4,152.6\n\t\t\t\tL183.4,152.6z\"/>\n\t\t\t<path class=\"st0\" d=\"M239.5,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tS239,150.6,239.5,150.6z M246.8,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tS246.3,150.6,246.8,150.6L246.8,150.6z M254.1,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tS253.6,150.6,254.1,150.6L254.1,150.6z M261.4,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tS260.8,150.6,261.4,150.6z M268.6,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tS268.1,150.6,268.6,150.6z M275.9,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tS275.4,150.6,275.9,150.6L275.9,150.6z M283.2,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tS282.7,150.6,283.2,150.6L283.2,150.6z M290.5,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tS290,150.6,290.5,150.6z M297.8,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9l0,0h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tS297.2,150.6,297.8,150.6z M305,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9H305c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tS304.5,150.6,305,150.6L305,150.6z M312.3,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tS311.8,150.6,312.3,150.6z M319.6,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tS319.1,150.6,319.6,150.6z M326.9,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tS326.4,150.6,326.9,150.6L326.9,150.6z M334.1,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tS333.6,150.6,334.1,150.6z M341.4,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.9c-0.5,0-0.9-0.4-0.9-0.9\n\t\t\t\tS340.9,150.6,341.4,150.6L341.4,150.6L341.4,150.6z M348.7,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8\n\t\t\t\tc-0.5,0-0.9-0.4-0.9-0.9S348.2,150.6,348.7,150.6z M356,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9H356\n\t\t\t\tc-0.5,0-0.9-0.4-0.9-0.9S355.5,150.6,356,150.6L356,150.6L356,150.6z M363.3,150.6h1.7c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9\n\t\t\t\th-1.8c-0.5,0-0.9-0.4-0.9-0.9S362.7,150.6,363.3,150.6L363.3,150.6z M370.5,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9\n\t\t\t\th-1.8c-0.5,0-0.9-0.4-0.9-0.9S370,150.6,370.5,150.6L370.5,150.6z M377.8,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8\n\t\t\t\tc-0.5,0-0.9-0.4-0.9-0.9S377.3,150.6,377.8,150.6z M385.1,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8\n\t\t\t\tc-0.5,0-0.9-0.4-0.9-0.9S384.6,150.6,385.1,150.6z M392.4,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8\n\t\t\t\tc-0.5,0-0.9-0.4-0.9-0.9S391.9,150.6,392.4,150.6z M399.7,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.8\n\t\t\t\tc-0.5,0-0.9-0.4-0.9-0.9S399.2,150.6,399.7,150.6z M406.9,150.6h1.8c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9h-1.9\n\t\t\t\tc-0.5,0-0.9-0.4-0.9-0.9S406.4,150.6,406.9,150.6L406.9,150.6z M234.1,150.7c0.5,0,0.9,0.4,1,0.9c0,0.5-0.4,0.9-0.9,1\n\t\t\t\tc-0.6,0-1.2,0.1-1.7,0.2c-0.5,0.1-0.9-0.3-1-0.8c-0.1-0.5,0.2-0.9,0.7-1C232.8,150.9,233.4,150.8,234.1,150.7L234.1,150.7z\n\t\t\t\t M227.1,152.6c0.5,0,0.9,0.4,0.9,0.9c0,0.4-0.2,0.7-0.5,0.8c-0.5,0.2-1.1,0.5-1.6,0.8c-0.5,0.2-1,0-1.2-0.4\n\t\t\t\tc-0.2-0.4-0.1-0.9,0.3-1.2c0.6-0.3,1.1-0.6,1.7-0.9c0.1,0,0.2-0.1,0.3-0.1H227.1z\"/>\n\t\t</g>";
    };
    return DottedBottomLines;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var Circles = (function (_super) {
    __extends(Circles, _super);
    function Circles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circles.prototype.getShape = function () {
        return "<g id=\"circles\" transform=\"translate(-155, -51.5) scale(1, 1)\">\n\t\t\t<path class=\"st0\" d=\"M206,170.8c0,9.1-7.4,16.4-16.4,16.4s-16.4-7.4-16.4-16.4s7.4-16.4,16.4-16.4l0,0\n\t\t\t\tC198.6,154.4,206,161.7,206,170.8z M204.2,170.8c0-8.1-6.5-14.6-14.6-14.6s-14.6,6.5-14.6,14.6s6.5,14.6,14.6,14.6\n\t\t\t\tC197.6,185.3,204.1,178.8,204.2,170.8L204.2,170.8z\"/>\n\t\t\t<path class=\"st0\" d=\"M237,170.8c0,9.1-7.4,16.4-16.4,16.4s-16.4-7.4-16.4-16.4s7.4-16.4,16.4-16.4l0,0\n\t\t\t\tC229.6,154.4,237,161.7,237,170.8z M235.2,170.8c0-8.1-6.5-14.6-14.6-14.6s-14.6,6.5-14.6,14.6s6.5,14.6,14.6,14.6\n\t\t\t\tC228.6,185.4,235.2,178.8,235.2,170.8L235.2,170.8z\"/>\n\t\t\t<path class=\"st0\" d=\"M222,187.1c0,9.4-7.6,16.9-16.9,16.9s-16.9-7.6-16.9-16.9c0-9.4,7.6-16.9,16.9-16.9\n\t\t\t\tC214.4,170.2,222,177.7,222,187.1z M220.2,187.1c0-8.4-6.8-15.1-15.1-15.1c-8.4,0-15.1,6.8-15.1,15.1c0,8.4,6.8,15.1,15.1,15.1\n\t\t\t\tc0,0,0,0,0,0C213.4,202.2,220.2,195.4,220.2,187.1z\"/>\n\t\t\t<path class=\"st0\" d=\"M200.9,190.1c0.1,2.3,2,4,4.3,3.9c2.1-0.1,3.8-1.8,3.9-3.9c0-2.3-4.1-8.4-4.1-8.4S201,187.8,200.9,190.1z\"/>\n\t\t\t<path class=\"st0\" d=\"M190.8,162.8c-2.3-0.1-4.2,1.6-4.3,3.9c-0.1,2.3,1.6,4.2,3.9,4.3c0.1,0,0.3,0,0.4,0c2.3,0,8.4-4.1,8.4-4.1\n\t\t\t\tS193,162.8,190.8,162.8z\"/>\n\t\t\t<path class=\"st0\" d=\"M219.4,162.8c2.3,0.1,4,2,3.9,4.3c-0.1,2.1-1.8,3.8-3.9,3.9c-2.3,0-8.4-4.1-8.4-4.1S217.1,162.8,219.4,162.8\n\t\t\t\tz\"/>\n\t\t</g>";
    };
    return Circles;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
//# sourceMappingURL=header-shape.js.map

/***/ }),

/***/ "../../../../../src/app/shapes/mo-js.init.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MojsInit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MojsInit = (function () {
    function MojsInit() {
    }
    MojsInit.prototype.init = function () {
        // this.headerItemLeft = new HeaderItemLeft();
        // this.headerItemRight = new HeaderItemRight();
    };
    return MojsInit;
}());
MojsInit = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], MojsInit);

//# sourceMappingURL=mo-js.init.js.map

/***/ }),

/***/ "../../../../../src/app/shapes/note-shapes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicNotes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mo_js__ = __webpack_require__("../../../../mo-js/build/mo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mo_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mo_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_consts_timings__ = __webpack_require__("../../../../../src/app/core/consts/timings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var MusicNotes = (function () {
    function MusicNotes(el) {
        this.shapeArr = [];
        this.initShapes();
        this.el = el;
        this.timeline = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Timeline"]();
        this.headerTimeline = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Timeline"]();
        this.configureOptions();
        this.createHeaderShapes();
        this.timeline.play();
        this.headerTimeline.play();
    }
    MusicNotes.prototype.initShapes = function () {
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('MusicNote1', MusicNote1);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('MusicNote2', MusicNote2);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('MusicNote3', MusicNote3);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('MusicNote4', MusicNote4);
    };
    MusicNotes.prototype.createHeaderShapes = function () {
        // 75 - top level
        // 85 - middle
        // 95  - bar
        // 102 -- bottom
        var s = this.createHeaderShape(__WEBPACK_IMPORTED_MODULE_1__core_consts_timings__["a" /* BORDER_TIME_DELAY */] + 5000, 220, { 'rand(75,115)': '95' }, 95, 'MusicNote1');
        var s2 = this.createHeaderShape(__WEBPACK_IMPORTED_MODULE_1__core_consts_timings__["a" /* BORDER_TIME_DELAY */] + 5200, 235, { 'rand(75,115)': '102' }, 102, 'MusicNote2');
        var s3 = this.createHeaderShape(__WEBPACK_IMPORTED_MODULE_1__core_consts_timings__["a" /* BORDER_TIME_DELAY */] + 5400, 325, { 'rand(75,115)': '85' }, 85, 'MusicNote1');
        var s4 = this.createHeaderShape(__WEBPACK_IMPORTED_MODULE_1__core_consts_timings__["a" /* BORDER_TIME_DELAY */] + 5600, 340, { 'rand(75,115)': '95' }, 95, 'MusicNote1');
        var s5 = this.createHeaderShape(__WEBPACK_IMPORTED_MODULE_1__core_consts_timings__["a" /* BORDER_TIME_DELAY */] + 5800, 365, { 'rand(75,115)': '75' }, 75, 'MusicNote3');
        var s6 = this.createHeaderShape(__WEBPACK_IMPORTED_MODULE_1__core_consts_timings__["a" /* BORDER_TIME_DELAY */] + 6000, 380, { 'rand(75,115)': '100' }, 100, 'MusicNote4');
        this.headerTimeline.add(s, s2, s3, s4, s5, s6);
    };
    MusicNotes.prototype.createHeaderShape = function (delay, left, y, y2, shape) {
        return new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Shape"]({
            shape: shape,
            fill: '#494949',
            fillOpacity: { 0: 1 },
            radius: 20,
            top: 0,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].cubic.inout,
            delay: delay,
            y: y,
            left: left,
            scale: 3,
            isYoyo: false,
            duration: 900,
            isShowStart: false,
            parent: this.el
        });
    };
    MusicNotes.prototype.configureOptions = function () {
        var SWIRL_OPTS = {
            fill: '#494949',
            degree: 0,
            count: 10,
            angle: 0,
            top: '100%',
            delay: 0,
            radius: { 0: 400 },
            children: {
                shape: ['MusicNote1', 'MusicNote2', 'MusicNote3', 'MusicNote4'],
                fill: '#494949',
                pathScale: 'rand(0.5, 1)',
                radius: 'rand(20, 40)',
                angle: -90,
                repeat: 1,
                swirlSize: 'rand(10, 15)',
                swirlFrequency: 'rand(2, 4)',
                direction: [1, -1],
                duration: "rand(2000, 4000)",
                delay: 'rand(0, 500)',
                easing: 'quad.out',
                isSwirl: true,
                isForce3d: true
            }
        };
        var burst = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Burst"](SWIRL_OPTS);
        var burst2 = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Burst"](__WEBPACK_IMPORTED_MODULE_2_lodash__["assign"]({}, SWIRL_OPTS, {
            children: __WEBPACK_IMPORTED_MODULE_2_lodash__["assign"]({}, SWIRL_OPTS.children, {
                delay: 'rand(1000, 1500)'
            })
        }));
        this.timeline.add(burst, burst2);
    };
    return MusicNotes;
}());

var MusicNote1 = (function (_super) {
    __extends(MusicNote1, _super);
    function MusicNote1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MusicNote1.prototype.getShape = function () {
        return "<ellipse transform=\"matrix(0.9292 -0.3696 0.3696 0.9292 -9.2456 3.4187)\" class=\"st0\" cx=\"4.3\" cy=\"25.8\" rx=\"4.5\" ry=\"2.8\"/>\n        <path class=\"st0\" d=\"M7.6,1.3v22.9l1,0.6V1.3H7.6z\"/>";
    };
    return MusicNote1;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var MusicNote2 = (function (_super) {
    __extends(MusicNote2, _super);
    function MusicNote2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MusicNote2.prototype.getShape = function () {
        return "<ellipse transform=\"matrix(0.9292 -0.3696 0.3696 0.9292 -10.6246 13.2944)\" class=\"st0\" cx=\"29.4\" cy=\"34.4\" rx=\"6.3\" ry=\"3.9\"/>\n    <path class=\"st0\" d=\"M34,0v32.2l1.5,0.9V0H34z\"/>\n    <ellipse transform=\"matrix(0.9292 -0.3696 0.3696 0.9292 -12.2584 4.7763)\" class=\"st0\" cx=\"6.3\" cy=\"34.4\" rx=\"6.3\" ry=\"3.9\"/>\n    <path class=\"st0\" d=\"M10.9,0v32.2l1.5,0.9V0H10.9z\"/>\n    <ellipse transform=\"matrix(0.9292 -0.3696 0.3696 0.9292 -8.9027 22.2962)\" class=\"st0\" cx=\"53.7\" cy=\"34.4\" rx=\"6.3\" ry=\"3.9\"/>\n    <path class=\"st0\" d=\"M58.3,0v32.2l1.5,0.9V0H58.3z\"/>\n    <rect x=\"12.4\" y=\"0\" class=\"st0\" width=\"45.9\" height=\"5.5\"/>\n    <rect x=\"35.4\" y=\"8.5\" class=\"st0\" width=\"22.9\" height=\"3.2\"/>";
    };
    return MusicNote2;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var MusicNote3 = (function (_super) {
    __extends(MusicNote3, _super);
    function MusicNote3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MusicNote3.prototype.getShape = function () {
        return "<path class=\"st0\" d=\"M2.5,51.8V1.6L0.2,0.2v51.6H2.5z\"/>\n<path class=\"st0\" d=\"M2.6,51.8c11.4-7.4,20.6-29.2,0-17.3v1.8c7.6-5.3,17-0.5-0.7,14.4C2.6,50.7,2.6,51.8,2.6,51.8z\"/>";
    };
    return MusicNote3;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var MusicNote4 = (function (_super) {
    __extends(MusicNote4, _super);
    function MusicNote4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MusicNote4.prototype.getShape = function () {
        return "<ellipse transform=\"matrix(0.9292 -0.3696 0.3696 0.9292 -14.7574 5.5069)\" class=\"st0\" cx=\"7\" cy=\"41.3\" rx=\"6.8\" ry=\"4.2\"/>\n\t<path class=\"st0\" d=\"M13.5,39.8V6.9c2.2,2.2,8.1,7.4,5,15.6c6.8-12.1-5.6-15.8-6.6-22.4v38.8L13.5,39.8z\"/>\n\t<path class=\"st0\" d=\"M13.5,18.5c2.2,2.2,8.1,7.4,5,15.6c5.5-9.8-1.6-14.1-5-18.8V18.5z\"/>";
    };
    return MusicNote4;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
//# sourceMappingURL=note-shapes.js.map

/***/ }),

/***/ "../../../../../src/app/shapes/ticket-shape.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ticket; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mo_js__ = __webpack_require__("../../../../mo-js/build/mo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mo_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mo_js__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Ticket = (function () {
    function Ticket(el, el2) {
        this.isOpen = false;
        this.initShapes();
        this.timeline = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Timeline"]();
        this.el = el;
        this.el2 = el2;
        this.createShape();
        this.createText();
    }
    Ticket.prototype.open = function () {
        if (this.isOpen) {
            return;
        }
        this.textShape1.setProgress(0).pause();
        this.textShape2.setProgress(0).pause();
        var vEl = this.el.querySelector('.ticketVertical');
        var leftHeaderItems = document.querySelector('c-header-left');
        var RightHeaderItems = document.querySelector('c-header-right');
        var chanelier = document.querySelector('c-chandelier');
        this.formElement = document.querySelector('.form');
        this.moveItemHorizontal(leftHeaderItems, -window.innerWidth / 4);
        this.moveItemHorizontal(RightHeaderItems, window.innerWidth / 4);
        this.moveItemVertical(chanelier, -window.innerHeight);
        this.shape.pause();
        vEl.style.transform = "translateY(600px) rotate(90deg)";
        this.formElement.style.transform = "translateY(" + (window.innerHeight /
            2 +
            50) + "px) translateX(-50%)";
        this.createHorizontalShape();
        this.isOpen = true;
        setTimeout(function () {
            vEl.style.display = 'none';
        }, 400);
    };
    Ticket.prototype.initShapes = function () {
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('TicketShape', TicketShape);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('TicketShapeNoText', TicketShapeNoText);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('saveTheDate', SaveTheDate);
        Object(__WEBPACK_IMPORTED_MODULE_0_mo_js__["addShape"])('clickHere', ClickHere);
    };
    Ticket.prototype.moveItemHorizontal = function (el, to) {
        var tween = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Tween"]({
            delay: 0,
            duration: 1500,
            isYoyo: true,
            repeat: 1,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].cubic.inout,
            onUpdate: function (ep, p) {
                var v = ep * to;
                el.style.transform = "translateX(" + v + "px)";
            }
        });
        tween.play();
    };
    Ticket.prototype.moveItemVertical = function (el, to) {
        var tween = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Tween"]({
            delay: 750,
            duration: 3000,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].cubic.out,
            onUpdate: function (ep, p) {
                var v = ep * to;
                el.style.transform = "translateY(" + v + "px)";
            }
        });
        tween.play();
    };
    Ticket.prototype.createShape = function () {
        var width = 1000;
        var height = width * 0.51;
        this.shape = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Shape"]({
            shape: 'TicketShapeNoText',
            className: 'ticketVertical',
            isShowEnd: true,
            isShowStart: true,
            parent: this.el,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].elastic.inout,
            top: window.innerHeight,
            scale: 1,
            origin: '50% 50%',
            angle: 90,
            delay: 10250,
            x: 0,
            y: { '100%': '25%' },
            duration: 1800,
            width: width,
            height: height
        });
        this.shape.play();
    };
    Ticket.prototype.createText = function () {
        var width = 15;
        var height = 100;
        this.textShape1 = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Shape"]({
            shape: 'saveTheDate',
            className: 'ticketVertical',
            isShowEnd: true,
            isShowStart: false,
            parent: this.el,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].bounce.in,
            top: window.innerHeight - 130,
            scale: { 0: 1 },
            origin: '50% 50%',
            angle: 90,
            delay: 12100,
            x: 0,
            y: { '100%': '25%' },
            duration: 300,
            width: width,
            height: height
        }).then({
            isYoyo: true,
            repeat: 99,
            scale: { 1: 0 },
            duration: 300,
            delay: 3600
        });
        this.textShape2 = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Shape"]({
            shape: 'clickHere',
            className: 'ticketVertical',
            isShowEnd: true,
            isShowStart: false,
            parent: this.el,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].bounce.in,
            top: window.innerHeight - 130,
            scale: 0,
            origin: '50% 50%',
            angle: 90,
            delay: 12100,
            x: 0,
            y: { '100%': '25%' },
            duration: 300,
            width: width,
            height: height
        }).then({
            isYoyo: true,
            repeat: 99,
            scale: { 0: 1 },
            duration: 300,
            delay: 3600
        });
        this.textShape1.play();
        this.textShape2.play();
    };
    Ticket.prototype.createHorizontalShape = function () {
        var _this = this;
        var width = 626;
        var height = width * 0.51;
        this.shape2 = new __WEBPACK_IMPORTED_MODULE_0_mo_js__["Shape"]({
            shape: 'TicketShape',
            className: 'ticketHorizontal',
            isShowEnd: true,
            isShowStart: false,
            delay: 1500,
            parent: this.el2,
            easing: __WEBPACK_IMPORTED_MODULE_0_mo_js__["easing"].elastic.inout,
            top: window.innerHeight / 2,
            scale: 0.95,
            origin: '50% 50%',
            angle: 90,
            x: 0,
            y: { '250%': '15%' },
            duration: 3000,
            width: width,
            onComplete: function () {
                _this.formElement.style.opacity = '1';
            },
            height: height
        });
        this.shape2.play();
    };
    return Ticket;
}());

var ClickHere = (function (_super) {
    __extends(ClickHere, _super);
    function ClickHere() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClickHere.prototype.getShape = function () {
        return "<g id=\"click-here\" transform=\"translate(-32.5, -110) scale(1, 1)\">\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M81.4,195.5c-3.1,0-5.7-2.5-5.7-5.5c0-1.3,0.6-2.4,1.5-3.3c-0.2-0.2-0.6-0.5-1-0.6v-0.4h4v0.4\n\t\t\tc-2.3,0.5-3.8,1.9-3.8,3.9c0,2.9,2.8,3.9,5,3.9c2.2,0,5-1,5-3.9c0-2-1.4-3.4-3.7-3.9v-0.4h4v0.4c-0.4,0.1-0.9,0.4-1,0.6\n\t\t\tc1,0.9,1.5,2.1,1.5,3.3C87.1,193,84.5,195.5,81.4,195.5z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M86.4,184c0-1.2-0.3-1.4-2.1-1.4h-5.7c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h8.6\n\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1H86.4z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M77.9,177.6c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8c0.5,0,0.8,0.4,0.8,0.8\n\t\t\tC78.7,177.2,78.4,177.6,77.9,177.6z M86.4,178.8c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4H81l-0.5-2.7h3.8\n\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1H86.4z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M84,173.5c-2.1,0-3.5-1.7-3.5-3.2c0-1.5,0.6-2.1,1.3-2.1c0.3,0,0.8,0.2,0.8,0.8\n\t\t\tc0,0.4-0.3,0.7-0.7,0.7c-0.6,0-0.8,0.3-0.8,0.6c0,1,1.2,1.7,2.9,1.7c1.4,0,2.4-0.7,2.4-2.2c0-0.6-0.3-1.3-0.8-1.9l0.4-0.3\n\t\t\tc0.7,0.7,1.2,1.7,1.2,2.7C87.1,172.3,85.8,173.5,84,173.5z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M86.4,167c0-1.2-0.3-1.4-2.1-1.4h-5.7c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h7.7l-1.2-1.5\n\t\t\tc-0.5-0.6-1-0.3-1,0.5h-0.4v-3.6h0.4c0,0,0.1,1.2,0.6,1.9l1.3,1.5l2.9-2.9c0.3-0.3,0.4-0.8,0.4-1.1h0.4v2l-3,2.9l0.2,0.2h0.3\n\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1H86.4z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M86.4,154.5c0-1.5-0.3-1.7-2.1-1.7h-5.9c-1.8,0-2.1,0.2-2.1,1.7H76v-4.9h0.4c0,1.5,0.3,1.7,2.1,1.7\n\t\t\th2.3v-6.1h-2.3c-1.8,0-2.1,0.2-2.1,1.7H76v-4.9h0.4c0,1.5,0.3,1.7,2.1,1.7h5.9c1.8,0,2.1-0.2,2.1-1.7h0.4v4.9h-0.4\n\t\t\tc0-1.5-0.3-1.7-2.1-1.7h-2.9v6.1h2.9c1.8,0,2.1-0.2,2.1-1.7h0.4v4.9H86.4z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.8,140.7c-1.9,0-3.3-1.7-3.3-3.3c0-1.6,1.3-2.9,2.8-2.4v4.3c1.7,0.2,3-0.5,3-2.3\n\t\t\tc0-0.6-0.3-1.5-0.8-2l0.4-0.3c0.7,0.6,1.2,1.7,1.2,2.8C87.1,139.4,85.6,140.7,83.8,140.7z M82.7,136.2c-0.6-0.2-1.5,0.1-1.5,1.3\n\t\t\tc0,0.8,0.6,1.4,1.5,1.7V136.2z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M86.4,133.3c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4H81l-0.5-2.4\n\t\t\tc0.2-0.1,0.9-0.3,1.3-0.3c-0.7-0.4-1.3-1.2-1.3-1.9c0-1,0.7-1.4,1.1-1.4c0.4,0,0.8,0.2,0.8,0.7c0,0.3-0.3,0.6-0.6,0.6\n\t\t\tc-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.7,1.4,2.1,1.4h1c1.8,0,2.1-0.2,2.1-1.4h0.4v4.1H86.4z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.8,126.4c-1.9,0-3.3-1.7-3.3-3.3c0-1.6,1.3-2.9,2.8-2.4v4.3c1.7,0.2,3-0.5,3-2.3\n\t\t\tc0-0.6-0.3-1.5-0.8-2l0.4-0.3c0.7,0.6,1.2,1.7,1.2,2.8C87.1,125,85.6,126.4,83.8,126.4z M82.7,121.8c-0.6-0.2-1.5,0.1-1.5,1.3\n\t\t\tc0,0.8,0.6,1.4,1.5,1.7V121.8z\"/>\n\t</g>";
    };
    return ClickHere;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var SaveTheDate = (function (_super) {
    __extends(SaveTheDate, _super);
    function SaveTheDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaveTheDate.prototype.getShape = function () {
        return "<g id=\"save-the-date\" transform=\"translate(-32.5, -110) scale(1, 1)\">\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M82.8,205.2v-0.4c0,0,3.2,0,3.2-3.3c0-1.3-0.8-2.2-2-2.2c-0.8,0-1.5,0.8-2.2,2.1l-0.9,1.7\n\t\t\t\tc-0.5,1-1.6,2-3,2c-1.5,0-2.7-1.2-2.7-3c0-1.1,0.3-1.7,0.7-2.2c-0.2-0.2-0.5-0.4-0.8-0.5V199h4v0.4c-1.4,0.1-3.2,0.7-3.2,2.8\n\t\t\t\tc0,1,0.7,1.7,1.6,1.7s1.4-0.6,2.2-2.2l0.9-1.7c0.7-1.4,1.7-1.9,2.7-1.9c2,0,3.2,1.6,3.2,3.4c0,1.4-0.7,2.2-0.8,2.8\n\t\t\t\tc0.2,0.2,0.5,0.4,0.8,0.5v0.4H82.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M85.2,196.2c-1.5,0-2.2-1.8-2.6-3.8c-1.4,0-1.9,0.2-1.9,1.2c0,0.4,0.3,1,0.9,1\n\t\t\t\tc0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6c-0.9,0-1.4-1.1-1.4-2.3c0-1.7,0.7-2.5,2.4-2.5h2.7c0.5,0,0.7-0.1,0.7-0.4\n\t\t\t\tc0-0.2-0.1-0.4-0.3-0.5l0.3-0.3c0.4,0.3,0.6,0.8,0.6,1.2c0,0.7-0.4,1.1-1,1.2c0.8,0.9,1.1,1.5,1.1,2.3\n\t\t\t\tC86.7,195.5,86.2,196.2,85.2,196.2z M85.1,192.4h-1.8c0.4,1.7,1,2.5,1.8,2.5c0.6,0,0.9-0.4,0.9-0.8\n\t\t\t\tC85.9,193.6,85.8,193.2,85.1,192.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M81.9,188.5c-0.8,0.3-1.1,0.6-1.1,1.2h-0.4v-3.2h0.4c0,0.8,0.2,0.9,1.1,0.6l3-1.3l-3-1.3\n\t\t\t\tc-0.8-0.3-1.1-0.3-1.1,0.5h-0.4v-2.5h0.4c0,0.6,0.3,0.9,1.1,1.3l4.9,2.2v0.4L81.9,188.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.5,181.7c-1.9,0-3.3-1.7-3.3-3.3s1.3-2.9,2.8-2.4v4.3c1.7,0.2,3-0.5,3-2.3c0-0.6-0.3-1.5-0.8-2\n\t\t\t\tl0.4-0.3c0.7,0.6,1.2,1.7,1.2,2.8C86.8,180.4,85.3,181.7,83.5,181.7z M82.4,177.2c-0.6-0.2-1.5,0.1-1.5,1.3c0,0.8,0.6,1.4,1.5,1.7\n\t\t\t\tV177.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M84.7,169.4h-3.6v0.9h-0.4c-0.2-1.1-1-1.5-2.2-1.6v-0.6h2v-1.6h0.6v1.6h3.6c0.8,0,1.3-0.2,1.3-0.8\n\t\t\t\tc0-0.3-0.2-0.8-0.6-1.2l0.3-0.3c0.6,0.5,1,1.3,1,1.9C86.8,168.7,86.1,169.4,84.7,169.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M86.1,165.2c0-1.2-0.3-1.4-2.1-1.4h-5.7c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h6.1\n\t\t\t\tc-0.6-0.5-1.3-1.3-1.3-2.4c0-1.7,1.2-2.2,2.7-2.2H84c1.8,0,2.1-0.2,2.1-1.4h0.4v4h-0.4c0-1.1-0.3-1.3-2.1-1.3h-1\n\t\t\t\tc-1.2,0-1.9,0.4-1.9,1.4c0,0.9,0.8,1.9,1.8,1.9H84c1.9,0,2.1-0.1,2.1-1.1h0.4v3.8H86.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.5,155.2c-1.9,0-3.3-1.7-3.3-3.3s1.3-2.9,2.8-2.4v4.3c1.7,0.2,3-0.5,3-2.3c0-0.6-0.3-1.5-0.8-2\n\t\t\t\tl0.4-0.3c0.7,0.6,1.2,1.7,1.2,2.8C86.8,153.9,85.3,155.2,83.5,155.2z M82.4,150.7c-0.6-0.2-1.5,0.1-1.5,1.3c0,0.8,0.6,1.4,1.5,1.7\n\t\t\t\tV150.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M86.1,143.6c0-1.5-0.3-1.7-2.1-1.7h-5.9c-1.8,0-2.1,0.2-2.1,1.7h-0.4v-4.9c0-4.2,2.4-6,5.4-6\n\t\t\t\ts5.4,1.8,5.4,6v4.9H86.1z M85.8,138.7c0-3.5-2.6-4.3-4.7-4.3s-4.7,0.8-4.7,4.3v1.7h7.4C85.5,140.5,85.8,140.3,85.8,138.7\n\t\t\t\tL85.8,138.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M85.2,131.2c-1.5,0-2.2-1.8-2.6-3.8c-1.4,0-1.9,0.2-1.9,1.2c0,0.4,0.3,1,0.9,1\n\t\t\t\tc0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6c-0.9,0-1.4-1.1-1.4-2.3c0-1.7,0.7-2.5,2.4-2.5h2.7c0.5,0,0.7-0.1,0.7-0.4\n\t\t\t\tc0-0.2-0.1-0.4-0.3-0.5l0.3-0.3c0.4,0.3,0.6,0.8,0.6,1.2c0,0.7-0.4,1.1-1,1.2c0.8,0.9,1.1,1.5,1.1,2.3\n\t\t\t\tC86.7,130.4,86.2,131.2,85.2,131.2z M85.1,127.3h-1.8c0.4,1.7,1,2.5,1.8,2.5c0.6,0,0.9-0.4,0.9-0.8\n\t\t\t\tC85.9,128.6,85.8,128.1,85.1,127.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M84.7,123.1h-3.6v0.9h-0.4c-0.2-1.1-1-1.5-2.2-1.6v-0.6h2v-1.6h0.6v1.6h3.6c0.8,0,1.3-0.2,1.3-0.8\n\t\t\t\tc0-0.3-0.2-0.8-0.6-1.2l0.3-0.3c0.6,0.5,1,1.3,1,1.9C86.8,122.5,86.1,123.1,84.7,123.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.5,118.4c-1.9,0-3.3-1.7-3.3-3.3c0-1.6,1.3-2.9,2.8-2.4v4.3c1.7,0.2,3-0.5,3-2.3\n\t\t\t\tc0-0.6-0.3-1.5-0.8-2l0.4-0.3c0.7,0.6,1.2,1.7,1.2,2.8C86.8,117.1,85.3,118.4,83.5,118.4z M82.4,113.9c-0.6-0.2-1.5,0.1-1.5,1.3\n\t\t\t\tc0,0.8,0.6,1.4,1.5,1.7V113.9z\"/>\n\t\t</g>";
    };
    return SaveTheDate;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var TicketShape = (function (_super) {
    __extends(TicketShape, _super);
    function TicketShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TicketShape.prototype.getShape = function () {
        return "<g transform=\"translate(-263, -110) scale(1, 1)\">\n\t\t<g>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M625.8,115.2V18.8c-10.9,0-18.6-7.7-18.6-17.7H179.1c0,10-8.1,18.1-18.1,18.1s-18.1-8.1-18.1-18.1\n\t\t\tH18c0,10-7.7,17.7-17.7,17.7v96.4c24.4,0,45.3,20.3,45.3,45.3s-20.8,45.3-45.3,45.3v95.5c10,0,17.7,7.7,17.7,18.6h125\n\t\t\tc0-0.9,0-0.8,0-1.1c0-10,7.9-18.1,17.9-18.1s18.3,8.2,18.3,18.2c0,0.3,0,0.2,0,1.1h427.5c0-10,8.2-18.2,18.2-18.2c0.3,0,1,0,1,0\n\t\t\tV206c-25.3,0-45.3-20.3-45.3-45.3S600.4,115.2,625.8,115.2z M567.1,160.5c0,22.5,17.9,58.8,40.7,58.8v68.2c0,0-0.6,0-0.9,0\n\t\t\tc-9,0-16.4,7.4-16.4,16.4H185.9c-0.7,0-1.9,0-1.9,0c-4.5-6.1-15.7-13.4-23.4-13.4s-17.3,7.4-21.1,13.4H33.6\n\t\t\tc0-9.8-6.9-16.7-15.9-16.7v-67.8c22,0,40.7-36.3,40.7-58.8s-18.7-58.8-40.7-58.8V33c9,0,15.9-6.9,15.9-15.9h105.7\n\t\t\tc4.1,7.6,13.8,11.7,21.2,11.7c7.3,0,18.9-4.2,23.4-11.7H591c0,9,6.9,15.9,16.7,15.9v68.7C585,101.7,567.1,138,567.1,160.5z\"/>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"258.4\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"260.4\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"269.8\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"279.1\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"230.3\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"232.3\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"241.7\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"251\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"202.1\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"204.2\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"213.6\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"222.9\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"174\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"176.1\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"185.5\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"194.8\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"145.9\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"148\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"157.3\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"166.7\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"117.8\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"119.9\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"129.2\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"138.6\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"89.7\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"91.8\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"101.1\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"110.4\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"61.6\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"63.6\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"73\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"82.3\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"33.4\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"35.5\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"44.9\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"54.2\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M56.4,29.4c0-1.4-0.2-1.6-1.3-1.6v-0.4h3.3v0.4c-1.2,0-1.3,0.2-1.3,1.6V36h-0.4l-5.8-6.9v4.6\n\t\t\tc0,1.4,0.2,1.6,1.3,1.6v0.4h-3.3v-0.4c1.2,0,1.3-0.2,1.3-1.6v-4.3c0-1.4-0.2-1.6-1.3-1.6v-0.4h2.8l4.7,5.6V29.4z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M61.8,36c-1.6,0-2.8-1.2-2.8-2.6c0-1.4,1.3-2.6,2.8-2.6s2.8,1.1,2.8,2.6S63.3,36,61.8,36z\n\t\t\t M61.8,31.6c-0.8,0-1.1,0.9-1.1,1.9c0,1.1,0.4,1.9,1.1,1.9c0.8,0,1.1-0.9,1.1-1.9C62.9,32.4,62.6,31.6,61.8,31.6z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M68.2,35c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9C67.9,34.1,68.2,34.5,68.2,35z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M80.1,32.8c0,1.8-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3S80.1,31,80.1,32.8z M74.8,32.8\n\t\t\tc0,1.2,0.9,2.1,2,2.1s2-0.9,2-2.1c0-1.1-0.9-2.1-2-2.1C75.8,30.7,74.8,31.6,74.8,32.8z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M81.7,35.8v-0.4c1.2,0,1.3-0.2,1.3-1.6v-2c0-1.4-0.2-1.6-1.3-1.6v-0.4H86v0.4\n\t\t\tc-1.2,0-1.3,0.2-1.3,1.6v2c0,1.4,0.2,1.6,1.3,1.6v0.4H81.7z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M91.7,34.6L91.7,34.6c1.3,0,1.5-0.3,1.7-1.1l0.1-0.3h0.4l-0.1,2h-2v0.9c0,1.4,0.2,1.6,1.3,1.6v0.4\n\t\t\th-4.3v-0.4c1.2,0,1.3-0.2,1.3-1.6v-0.9h-2.9v-0.4l4.1-5.9h0.4V34.6z M90.1,31.7l-2,2.8h2V31.7z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M97.2,34.8c-0.3-0.2,0-0.5,0.3-0.8l0.8-0.8c0.5-0.5,0.7-1.2,0.7-1.6c0-0.9-0.4-1.4-1.1-1.4\n\t\t\tc-0.8,0-1.5,0.9-0.9,2l-0.7,0.4c-1.7-1-0.8-3.1,1.6-3.1c1.6,0,2.9,0.7,2.9,1.9c0,1-0.9,1.7-1.5,2.1l-0.7,0.4\n\t\t\tc1.4,0.2,2.4,1.2,2.4,2.3c0,1.5-1.4,2.3-3,2.3c-2.3,0-3.2-1.8-2.2-2c0.7-0.1,0.7,1.4,2.1,1.4c0.8,0,1.2-0.8,1.2-1.7\n\t\t\ts-0.3-1.5-1-1.9C97.8,34.5,97.6,35,97.2,34.8z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M105.2,32.6c1.6,0,2.8,1.3,2.8,2.9s-1.2,2.9-2.9,2.9c-1.4,0-2.3-1-2.3-1.6c0-0.2,0.2-0.4,0.4-0.4\n\t\t\tc0.8,0,0.3,1.4,1.8,1.4c0.7,0,1.3-1,1.3-2.3s-0.6-2.2-1.3-2.2c-0.6,0-1,0.2-1.3,1.3H103l0.4-4.8h2.4c1.3,0,1.4-0.3,1.6-1.1h0.4\n\t\t\tl-0.3,2.6H104l-0.2,2C104,32.8,104.7,32.6,105.2,32.6z\"/>\n\t</g>\n\t<g>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M114.3,292.9c0,1.4,0.2,1.6,1.3,1.6v0.4h-3.3v-0.4c1.2,0,1.3-0.2,1.3-1.6v-6.6h0.4l5.8,6.9v-4.6\n\t\t\tc0-1.4-0.2-1.6-1.3-1.6v-0.4h3.3v0.4c-1.2,0-1.3,0.2-1.3,1.6v4.3c0,1.4,0.2,1.6,1.3,1.6v0.4H119l-4.7-5.6V292.9z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M108.9,286.3c1.6,0,2.8,1.2,2.8,2.6s-1.3,2.6-2.8,2.6s-2.8-1.1-2.8-2.6\n\t\t\tC106.1,287.5,107.4,286.3,108.9,286.3z M108.9,290.8c0.8,0,1.1-0.9,1.1-1.9s-0.4-1.9-1.1-1.9c-0.8,0-1.1,0.9-1.1,1.9\n\t\t\tS108.2,290.8,108.9,290.8z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M102.5,287.3c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9\n\t\t\tC102.9,288.2,102.5,287.8,102.5,287.3z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M90.6,289.6c0-1.8,1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3S90.6,291.4,90.6,289.6z\n\t\t\t M95.9,289.6c0-1.2-0.9-2.1-2-2.1s-2,0.9-2,2.1c0,1.1,0.9,2.1,2,2.1S95.9,290.7,95.9,289.6z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M89,286.5v0.4c-1.2,0-1.3,0.2-1.3,1.6v2c0,1.4,0.2,1.6,1.3,1.6v0.4h-4.3v-0.4\n\t\t\tc1.2,0,1.3-0.2,1.3-1.6v-2c0-1.4-0.2-1.6-1.3-1.6v-0.4H89z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M79,287.8L79,287.8c-1.3,0-1.5,0.3-1.7,1.1l-0.1,0.3h-0.4l0.1-2h2v-0.9c0-1.4-0.2-1.6-1.3-1.6v-0.4\n\t\t\tH82v0.4c-1.2,0-1.3,0.2-1.3,1.6v0.9h2.9v0.4l-4.1,5.9H79V287.8z M80.6,290.6l2-2.8h-2V290.6z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M73.5,287.6c0.3,0.2,0,0.5-0.3,0.8l-0.8,0.8c-0.5,0.5-0.7,1.2-0.7,1.6c0,0.9,0.4,1.4,1.1,1.4\n\t\t\tc0.8,0,1.5-0.9,0.9-2l0.7-0.4c1.7,1,0.8,3.1-1.6,3.1c-1.6,0-2.9-0.7-2.9-1.9c0-1,0.9-1.7,1.5-2.1l0.7-0.4\n\t\t\tc-1.4-0.2-2.4-1.2-2.4-2.3c0-1.5,1.4-2.3,3-2.3c2.3,0,3.2,1.8,2.2,2c-0.7,0.1-0.7-1.4-2.1-1.4c-0.8,0-1.2,0.8-1.2,1.7\n\t\t\tc0,0.9,0.3,1.5,1,1.9C72.9,287.9,73.1,287.3,73.5,287.6z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M65.5,289.8c-1.6,0-2.8-1.3-2.8-2.9s1.2-2.9,2.9-2.9c1.4,0,2.3,1,2.3,1.6c0,0.2-0.2,0.4-0.4,0.4\n\t\t\tc-0.8,0-0.3-1.4-1.8-1.4c-0.7,0-1.3,1-1.3,2.3s0.6,2.2,1.3,2.2c0.6,0,1-0.2,1.3-1.3h0.6l-0.4,4.8h-2.4c-1.3,0-1.4,0.3-1.6,1.1\n\t\t\th-0.4l0.3-2.6h3.6l0.2-2C66.7,289.5,66.1,289.8,65.5,289.8z\"/>\n\t</g>\n\t<g>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M119.4,262.1v-0.5c0,0,4.3,0,4.3-4.4c0-1.7-1.1-3-2.6-3c-1.1,0-2,1.1-2.9,2.8l-1.2,2.3\n\t\t\tc-0.7,1.4-2.1,2.7-4,2.7c-2,0-3.6-1.7-3.6-4c0-1.4,0.5-2.2,1-2.9c-0.2-0.3-0.6-0.6-1.1-0.7v-0.5h5.3v0.5c-1.9,0.2-4.2,0.9-4.2,3.7\n\t\t\tc0,1.3,0.9,2.3,2.1,2.3s1.9-0.8,3-2.9l1.2-2.3c0.9-1.8,2.3-2.5,3.6-2.5c2.6,0,4.3,2.1,4.3,4.6c0,1.8-1,3-1.1,3.7\n\t\t\tc0.2,0.3,0.6,0.6,1.1,0.7v0.5h-5.2L119.4,262.1L119.4,262.1z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M120.2,250.2c-2.5,0-4.4-2.2-4.4-4.4c0-2.1,1.7-3.8,3.8-3.3v5.8c2.3,0.3,4-0.6,4-3.1\n\t\t\tc0-0.8-0.5-1.9-1.1-2.6l0.5-0.4c0.9,0.8,1.6,2.3,1.6,3.7C124.7,248.4,122.7,250.2,120.2,250.2z M118.8,244.1\n\t\t\tc-0.8-0.3-1.9,0.1-1.9,1.7c0,1,0.8,1.9,1.9,2.3V244.1z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M129.7,240.7c0-1.6-0.4-1.9-2.8-1.9h-7.2c-2.4,0-2.8,0.3-2.8,1.9h-0.5l-0.6-3.2\n\t\t\tc0.2-0.1,1.1-0.3,1.5-0.4c-0.8-0.7-1.5-1.7-1.5-3c0-2.3,2-4.2,4.4-4.2s4.4,1.9,4.4,4.2c0,1.2-0.6,2.2-1.4,3h3.7\n\t\t\tc2.4,0,2.8-0.3,2.8-1.9h0.5v5.5L129.7,240.7L129.7,240.7z M120.2,232c-1.9,0-3.4,0.9-3.4,2.7c0,1.1,0.8,2,1.9,2.4h3.1\n\t\t\tc1.2-0.5,1.9-1.3,1.9-2.4C123.7,232.8,122.2,232,120.2,232z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M121.9,226.9h-4.8v1.2h-0.6c-0.3-1.4-1.3-2-2.9-2.1v-0.8h2.6v-2.1h0.8v2.1h4.8\n\t\t\tc1.1,0,1.7-0.3,1.7-1.1c0-0.4-0.3-1-0.8-1.6l0.4-0.4c0.8,0.7,1.4,1.7,1.4,2.5C124.6,226,123.7,226.9,121.9,226.9z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M120.2,220.6c-2.5,0-4.4-2.2-4.4-4.4c0-2.1,1.7-3.8,3.8-3.3v5.8c2.3,0.3,4-0.6,4-3.1\n\t\t\tc0-0.8-0.5-1.9-1.1-2.6l0.5-0.4c0.9,0.8,1.6,2.3,1.6,3.7C124.7,218.8,122.7,220.6,120.2,220.6z M118.8,214.6\n\t\t\tc-0.8-0.3-1.9,0.1-1.9,1.7c0,1,0.8,1.9,1.9,2.3V214.6z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M123.7,210.7c0-1.6-0.4-1.9-2.8-1.9h-1.2c-2.4,0-2.8,0.3-2.8,1.9h-0.5l-0.6-3.2\n\t\t\tc0.2-0.1,1.2-0.3,1.7-0.4c-0.8-0.6-1.7-1.7-1.7-3.1c0-1.5,0.7-2.2,1.8-2.6c-0.8-0.6-1.8-1.9-1.8-3.4c0-2.1,1.5-2.8,3.6-2.8h1.5\n\t\t\tc2.4,0,2.8-0.3,2.8-1.9h0.5v5.1h-0.5c0-1.3-0.3-1.5-2.8-1.5h-1.4c-1.6,0-2.6,0.5-2.6,1.7c0,0.8,0.9,2.5,2.4,2.5h1.6\n\t\t\tc2.5,0,2.8-0.2,2.8-1.5h0.5v4.7h-0.5c0-1.3-0.3-1.5-2.8-1.5h-1.4c-1.6,0-2.6,0.5-2.6,1.7c0,0.8,0.9,2.5,2.4,2.5h1.6\n\t\t\tc2.5,0,2.8-0.2,2.8-1.5h0.5v5.1L123.7,210.7L123.7,210.7z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M113.4,191c-2.4,0-2.8,0.3-2.8,1.9H110l-0.6-3.6h7.8c-0.9-0.7-1.4-1.7-1.4-2.9c0-2.3,2-4.2,4.4-4.2\n\t\t\ts4.4,1.9,4.4,4.2c0,1.3-0.6,2.4-1.6,3.1l1.6,1.1v0.5h-11.2C113.4,191.1,113.4,191,113.4,191z M120.2,184.1c-1.9,0-3.4,0.9-3.4,2.7\n\t\t\tc0,1.1,0.8,2,1.9,2.4h3.1c1.2-0.4,1.9-1.3,1.9-2.4C123.7,185,122.2,184.1,120.2,184.1z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M120.2,179.9c-2.5,0-4.4-2.2-4.4-4.4c0-2.1,1.7-3.8,3.8-3.3v5.8c2.3,0.3,4-0.6,4-3.1\n\t\t\tc0-0.8-0.5-1.9-1.1-2.6l0.5-0.4c0.9,0.8,1.6,2.3,1.6,3.7C124.7,178.1,122.7,179.9,120.2,179.9z M118.8,173.8\n\t\t\tc-0.8-0.3-1.9,0.1-1.9,1.7c0,1,0.8,1.9,1.9,2.3V173.8z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M123.7,170c0-1.6-0.4-1.9-2.8-1.9h-1.2c-2.4,0-2.8,0.3-2.8,1.9h-0.5l-0.6-3.2\n\t\t\tc0.2-0.1,1.2-0.3,1.7-0.4c-1-0.5-1.7-1.6-1.7-2.5c0-1.3,0.9-1.9,1.5-1.9c0.5,0,1.1,0.2,1.1,1c0,0.5-0.4,0.8-0.9,0.8\n\t\t\ts-0.8,0.3-0.8,0.8c0,0.6,0.9,1.8,2.8,1.8h1.3c2.4,0,2.8-0.3,2.8-1.9h0.5v5.5L123.7,170L123.7,170z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M124.2,149.2v4.9h-0.6l-3.3-4.2c-1.5-1.8-2.8-2.3-3.6-2.3c-1.4,0-2.2,1.1-2.2,2.6\n\t\t\tc0,1.7,1.6,3.3,3.6,2.1l0.7,0.7c-1.7,2.9-5.4,1.4-5.4-2.8c0-2.4,1.2-4.6,3.2-4.6c1.9,0,3.4,2.2,3.4,2.2l2.8,3.7v-6.2l3.3,0.6v0.5\n\t\t\tC124.6,146.4,124.2,146.8,124.2,149.2z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M127.8,139.4c0-2-0.4-2.3-2.8-2.3h-1.8v5.4h-0.5l-10.3-6.7v-0.4h9.9v-0.3c0-2.2-0.6-2.5-1.8-2.8\n\t\t\tl-0.5-0.1v-0.5l3.2,0.2v3.5h1.8c2.4,0,2.8-0.3,2.8-2.3h0.5v6.3L127.8,139.4L127.8,139.4z M122.4,137.1H116l6.4,4.2V137.1z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M121.9,128.5h-4.8v1.2h-0.6c-0.3-1.4-1.3-2-2.9-2.1v-0.8h2.6v-2.1h0.8v2.1h4.8\n\t\t\tc1.1,0,1.7-0.3,1.7-1.1c0-0.4-0.3-1-0.8-1.6l0.4-0.4c0.8,0.7,1.4,1.7,1.4,2.5C124.6,127.6,123.7,128.5,121.9,128.5z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M123.7,122.9c0-1.6-0.4-1.9-2.8-1.9h-7.6c-2.4,0-2.8,0.3-2.8,1.9H110l-0.6-3.6h8.1\n\t\t\tc-0.8-0.7-1.7-1.8-1.7-3.1c0-2.2,1.5-3,3.6-3h1.5c2.4,0,2.8-0.3,2.8-1.9h0.5v5.3h-0.5c0-1.5-0.3-1.7-2.8-1.7h-1.4\n\t\t\tc-1.6,0-2.6,0.6-2.6,1.8c0,1.2,1,2.6,2.4,2.6h1.6c2.5,0,2.8-0.2,2.8-1.5h0.5v5.1C124.2,122.9,123.7,122.9,123.7,122.9z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M124.2,98.5v4.9h-0.6l-3.3-4.2c-1.5-1.8-2.8-2.3-3.6-2.3c-1.4,0-2.2,1.1-2.2,2.6\n\t\t\tc0,1.7,1.6,3.3,3.6,2.1l0.7,0.7c-1.7,2.9-5.4,1.4-5.4-2.8c0-2.4,1.2-4.6,3.2-4.6c1.9,0,3.4,2.2,3.4,2.2l2.8,3.7v-6.2l3.3,0.6v0.5\n\t\t\tC124.6,95.7,124.2,96.1,124.2,98.5z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M119,91.3c-3.1,0-5.6-2.5-5.6-5.6s2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6S122.1,91.3,119,91.3z M119,81.6\n\t\t\tc-2.3,0-4.2,1.8-4.2,4.1c0,2.2,1.9,4.1,4.2,4.1c2.3,0,4.2-1.8,4.2-4.1C123.3,83.5,121.4,81.6,119,81.6z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M123.7,77.4c0-2-0.4-2.3-2.8-2.3h-3.8c-2.4,0-2.8,0.3-2.8,2.3h-0.5V71h0.5c0,2,0.4,2.3,2.8,2.3h3.8\n\t\t\tc2.4,0,2.8-0.3,2.8-2.3h0.5v6.3L123.7,77.4L123.7,77.4z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M127.2,66.8l-11.7-5.7V65c0,2.2,0.5,2.5,1.8,2.8l0.5,0.1v0.5l-5.9-1v-0.5c1.6,0,1.9-0.4,1.9-2.8\n\t\t\tv-4.3h0.7l13,5.3c0.8,0.3,1.3,0.6,1.1,1.3C128.6,66.7,128.1,67.2,127.2,66.8z\"/>\n\t</g>\n\t<g id=\"save-the-date\">\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M82.8,205.2v-0.4c0,0,3.2,0,3.2-3.3c0-1.3-0.8-2.2-2-2.2c-0.8,0-1.5,0.8-2.2,2.1l-0.9,1.7\n\t\t\tc-0.5,1-1.6,2-3,2c-1.5,0-2.7-1.2-2.7-3c0-1.1,0.3-1.7,0.7-2.2c-0.2-0.2-0.5-0.4-0.8-0.5V199h4v0.4c-1.4,0.1-3.2,0.7-3.2,2.8\n\t\t\tc0,1,0.7,1.7,1.6,1.7s1.4-0.6,2.2-2.2l0.9-1.7c0.7-1.4,1.7-1.9,2.7-1.9c2,0,3.2,1.6,3.2,3.4c0,1.4-0.7,2.2-0.8,2.8\n\t\t\tc0.2,0.2,0.5,0.4,0.8,0.5v0.4H82.8z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M85.2,196.2c-1.5,0-2.2-1.8-2.6-3.8c-1.4,0-1.9,0.2-1.9,1.2c0,0.4,0.3,1,0.9,1\n\t\t\tc0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6c-0.9,0-1.4-1.1-1.4-2.3c0-1.7,0.7-2.5,2.4-2.5h2.7c0.5,0,0.7-0.1,0.7-0.4\n\t\t\tc0-0.2-0.1-0.4-0.3-0.5l0.3-0.3c0.4,0.3,0.6,0.8,0.6,1.2c0,0.7-0.4,1.1-1,1.2c0.8,0.9,1.1,1.5,1.1,2.3\n\t\t\tC86.7,195.5,86.2,196.2,85.2,196.2z M85.1,192.4h-1.8c0.4,1.7,1,2.5,1.8,2.5c0.6,0,0.9-0.4,0.9-0.8\n\t\t\tC85.9,193.6,85.8,193.2,85.1,192.4z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M81.9,188.5c-0.8,0.3-1.1,0.6-1.1,1.2h-0.4v-3.2h0.4c0,0.8,0.2,0.9,1.1,0.6l3-1.3l-3-1.3\n\t\t\tc-0.8-0.3-1.1-0.3-1.1,0.5h-0.4v-2.5h0.4c0,0.6,0.3,0.9,1.1,1.3l4.9,2.2v0.4L81.9,188.5z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.5,181.7c-1.9,0-3.3-1.7-3.3-3.3s1.3-2.9,2.8-2.4v4.3c1.7,0.2,3-0.5,3-2.3c0-0.6-0.3-1.5-0.8-2\n\t\t\tl0.4-0.3c0.7,0.6,1.2,1.7,1.2,2.8C86.8,180.4,85.3,181.7,83.5,181.7z M82.4,177.2c-0.6-0.2-1.5,0.1-1.5,1.3c0,0.8,0.6,1.4,1.5,1.7\n\t\t\tV177.2z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M84.7,169.4h-3.6v0.9h-0.4c-0.2-1.1-1-1.5-2.2-1.6v-0.6h2v-1.6h0.6v1.6h3.6c0.8,0,1.3-0.2,1.3-0.8\n\t\t\tc0-0.3-0.2-0.8-0.6-1.2l0.3-0.3c0.6,0.5,1,1.3,1,1.9C86.8,168.7,86.1,169.4,84.7,169.4z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M86.1,165.2c0-1.2-0.3-1.4-2.1-1.4h-5.7c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h6.1\n\t\t\tc-0.6-0.5-1.3-1.3-1.3-2.4c0-1.7,1.2-2.2,2.7-2.2H84c1.8,0,2.1-0.2,2.1-1.4h0.4v4h-0.4c0-1.1-0.3-1.3-2.1-1.3h-1\n\t\t\tc-1.2,0-1.9,0.4-1.9,1.4c0,0.9,0.8,1.9,1.8,1.9H84c1.9,0,2.1-0.1,2.1-1.1h0.4v3.8H86.1z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.5,155.2c-1.9,0-3.3-1.7-3.3-3.3s1.3-2.9,2.8-2.4v4.3c1.7,0.2,3-0.5,3-2.3c0-0.6-0.3-1.5-0.8-2\n\t\t\tl0.4-0.3c0.7,0.6,1.2,1.7,1.2,2.8C86.8,153.9,85.3,155.2,83.5,155.2z M82.4,150.7c-0.6-0.2-1.5,0.1-1.5,1.3c0,0.8,0.6,1.4,1.5,1.7\n\t\t\tV150.7z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M86.1,143.6c0-1.5-0.3-1.7-2.1-1.7h-5.9c-1.8,0-2.1,0.2-2.1,1.7h-0.4v-4.9c0-4.2,2.4-6,5.4-6\n\t\t\ts5.4,1.8,5.4,6v4.9H86.1z M85.8,138.7c0-3.5-2.6-4.3-4.7-4.3s-4.7,0.8-4.7,4.3v1.7h7.4C85.5,140.5,85.8,140.3,85.8,138.7\n\t\t\tL85.8,138.7z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M85.2,131.2c-1.5,0-2.2-1.8-2.6-3.8c-1.4,0-1.9,0.2-1.9,1.2c0,0.4,0.3,1,0.9,1\n\t\t\tc0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6c-0.9,0-1.4-1.1-1.4-2.3c0-1.7,0.7-2.5,2.4-2.5h2.7c0.5,0,0.7-0.1,0.7-0.4\n\t\t\tc0-0.2-0.1-0.4-0.3-0.5l0.3-0.3c0.4,0.3,0.6,0.8,0.6,1.2c0,0.7-0.4,1.1-1,1.2c0.8,0.9,1.1,1.5,1.1,2.3\n\t\t\tC86.7,130.4,86.2,131.2,85.2,131.2z M85.1,127.3h-1.8c0.4,1.7,1,2.5,1.8,2.5c0.6,0,0.9-0.4,0.9-0.8\n\t\t\tC85.9,128.6,85.8,128.1,85.1,127.3z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M84.7,123.1h-3.6v0.9h-0.4c-0.2-1.1-1-1.5-2.2-1.6v-0.6h2v-1.6h0.6v1.6h3.6c0.8,0,1.3-0.2,1.3-0.8\n\t\t\tc0-0.3-0.2-0.8-0.6-1.2l0.3-0.3c0.6,0.5,1,1.3,1,1.9C86.8,122.5,86.1,123.1,84.7,123.1z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.5,118.4c-1.9,0-3.3-1.7-3.3-3.3c0-1.6,1.3-2.9,2.8-2.4v4.3c1.7,0.2,3-0.5,3-2.3\n\t\t\tc0-0.6-0.3-1.5-0.8-2l0.4-0.3c0.7,0.6,1.2,1.7,1.2,2.8C86.8,117.1,85.3,118.4,83.5,118.4z M82.4,113.9c-0.6-0.2-1.5,0.1-1.5,1.3\n\t\t\tc0,0.8,0.6,1.4,1.5,1.7V113.9z\"/>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M82,223.2v11.5c0,0.1-0.1,0.2-0.2,0.2s-0.2-0.1-0.2-0.2v-11.5c0-0.1,0.1-0.2,0.2-0.2\n\t\t\t\t\tC81.8,223,82,223.1,82,223.2z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.6,241.1C83.6,241.1,83.6,241.2,83.6,241.1l-1.7,6.1c0,0.1-0.1,0.2-0.2,0.2s-0.2-0.1-0.2-0.2\n\t\t\t\t\tl-1.7-6.1c0-0.1,0-0.1,0-0.2l1.7-2.5c0-0.1,0.1-0.1,0.2-0.1s0.2,0,0.2,0.1l1.7,2.5C83.6,241,83.6,241.1,83.6,241.1z M81.7,246.3\n\t\t\t\t\tl1.4-5.1l-1.4-2.1l-1.4,2.1L81.7,246.3z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.1,221.8c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3\n\t\t\t\t\tS83.1,221.1,83.1,221.8z M80.9,221.8c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9s-0.4-0.9-0.9-0.9C81.2,221,80.9,221.4,80.9,221.8z\"\n\t\t\t\t\t/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.3,219.2c0,0.9-0.7,1.6-1.6,1.6s-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6\n\t\t\t\t\tC82.6,217.6,83.3,218.3,83.3,219.2z M80.6,219.2c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1\n\t\t\t\t\tC81.1,218,80.6,218.5,80.6,219.2z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M81.4,235.3L81.4,235.3v2.1c0,0.1,0,0.1-0.1,0.2l-2.1,2.1c-0.1,0.1-0.2,0.1-0.3,0.1\n\t\t\t\t\tc-0.1,0-0.1-0.1-0.1-0.2v-2.1c0-0.1,0-0.1,0.1-0.2l2.1-2.1c0-0.1,0.1-0.1,0.2-0.1C81.3,235,81.4,235.1,81.4,235.3z M80.9,237.3\n\t\t\t\t\tv-1.4l-1.6,1.6v1.5L80.9,237.3z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M84.6,237.4v2.1c0,0.1-0.1,0.2-0.1,0.2c-0.1,0-0.2,0-0.3-0.1l-2.1-2.1c0,0-0.1-0.1-0.1-0.2v-2.1\n\t\t\t\t\tc0-0.1,0.1-0.2,0.1-0.2c0.1,0,0.2,0,0.3,0.1l2.1,2.1C84.6,237.3,84.6,237.4,84.6,237.4z M84.1,238.9v-1.4l-1.6-1.7v1.5\n\t\t\t\t\tL84.1,238.9z\"/>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M82,95.8V84.3c0-0.1-0.1-0.2-0.2-0.2s-0.2,0.1-0.2,0.2v11.5c0,0.1,0.1,0.2,0.2,0.2\n\t\t\t\t\tC81.8,96,82,95.9,82,95.8z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.6,78l-1.7,2.5c0,0.1-0.1,0.1-0.2,0.1s-0.2,0-0.2-0.1L79.9,78c0-0.1,0-0.1,0-0.2l1.7-6.1\n\t\t\t\t\tc0-0.1,0.1-0.2,0.2-0.2s0.2,0.1,0.2,0.2l1.7,6.1C83.7,77.8,83.7,77.8,83.6,78C83.6,77.9,83.6,78,83.6,78z M80.3,77.9l1.4,2.1\n\t\t\t\t\tl1.4-2.1l-1.4-5.1L80.3,77.9z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M81.7,98.5c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3\n\t\t\t\t\tC83.1,97.9,82.5,98.5,81.7,98.5z M81.7,98c0.5,0,0.9-0.4,0.9-0.9s-0.4-0.9-0.9-0.9s-0.9,0.4-0.9,0.9C80.9,97.6,81.2,98,81.7,98z\n\t\t\t\t\t\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M81.7,101.5c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6\n\t\t\t\t\tC83.3,100.7,82.6,101.5,81.7,101.5z M81.7,101c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1S81.1,101,81.7,101z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M81.2,84c-0.1,0-0.1,0-0.2-0.1l-2.1-2.1c0,0-0.1-0.1-0.1-0.2v-2.1c0-0.1,0.1-0.2,0.1-0.2\n\t\t\t\t\tc0.1,0,0.2,0,0.3,0.1l2.1,2.1c0,0,0.1,0.1,0.1,0.2v2.1l0,0C81.4,83.9,81.3,84,81.2,84z M79.3,80.1v1.5l1.6,1.6v-1.4L79.3,80.1z\"\n\t\t\t\t\t/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M84.6,81.7l-2.1,2.1c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.1-0.1-0.1-0.2v-2.1c0-0.1,0-0.1,0.1-0.2\n\t\t\t\t\tl2.1-2.1c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.1,0.1,0.1,0.2v2.1C84.6,81.6,84.6,81.7,84.6,81.7z M82.5,81.7v1.5l1.6-1.7v-1.4\n\t\t\t\t\tL82.5,81.7z\"/>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M533.3,85.8V74.3c0-0.1-0.1-0.2-0.2-0.2s-0.2,0.1-0.2,0.2v11.5c0,0.1,0.1,0.2,0.2,0.2\n\t\t\t\t\tS533.3,86,533.3,85.8z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M534.9,68.1l-1.7,2.5c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.2,0-0.2-0.1l-1.7-2.5c0-0.1,0-0.1,0-0.2\n\t\t\t\t\tl1.7-6.1c0-0.1,0.1-0.2,0.2-0.2s0.2,0.1,0.2,0.2l1.7,6.1C534.9,67.9,534.9,67.9,534.9,68.1C534.9,68,534.9,68,534.9,68.1z\n\t\t\t\t\t M531.6,67.9L533,70l1.4-2.1l-1.4-5.1L531.6,67.9z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M533,88.5c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3\n\t\t\t\t\tC534.4,87.9,533.8,88.5,533,88.5z M533,88.1c0.5,0,0.9-0.4,0.9-0.9s-0.4-0.9-0.9-0.9s-0.9,0.4-0.9,0.9\n\t\t\t\t\tC532.2,87.7,532.6,88.1,533,88.1z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M533,91.5c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6\n\t\t\t\t\tC534.7,90.8,533.9,91.5,533,91.5z M533,91c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1S532.4,91,533,91z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M532.5,74c-0.1,0-0.1,0-0.2-0.1l-2.1-2.1c0,0-0.1-0.1-0.1-0.2v-2.1c0-0.1,0.1-0.2,0.1-0.2\n\t\t\t\t\tc0.1,0,0.2,0,0.3,0.1l2.1,2.1c0,0,0.1,0.1,0.1,0.2v2.1l0,0C532.7,73.9,532.6,74,532.5,74z M530.6,70.1v1.5l1.6,1.6v-1.4\n\t\t\t\t\tL530.6,70.1z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M535.9,71.8l-2.1,2.1c-0.1,0.1-0.2,0.1-0.3,0.1s-0.1-0.1-0.1-0.2v-2.1c0-0.1,0-0.1,0.1-0.2\n\t\t\t\t\tl2.1-2.1c0.1-0.1,0.2-0.1,0.3-0.1s0.1,0.1,0.1,0.2v2.1C535.9,71.7,535.9,71.7,535.9,71.8z M533.9,71.7v1.5l1.6-1.7v-1.4\n\t\t\t\t\tL533.9,71.7z\"/>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<line style=\"fill:none;stroke:#FFFFFF;stroke-miterlimit:10;\" x1=\"97.1\" y1=\"262.8\" x2=\"97.1\" y2=\"56.2\"/>\n\t<g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.4,82.4c0,0.2-0.2,0.3-0.3,0.3h-1.3c-0.2,0-0.3-0.2-0.3-0.3c0-0.2,0.2-0.3,0.3-0.3h1.3\n\t\t\t\t\t\t\tC52.3,82.1,52.4,82.3,52.4,82.4z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M50.1,82.4c0,0.2-0.2,0.3-0.3,0.3H42c-0.2,0-0.3-0.2-0.3-0.3c0-0.2,0.2-0.3,0.3-0.3h7.7\n\t\t\t\t\t\t\tC50,82.1,50.1,82.3,50.1,82.4z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.6,80.9L52.6,80.9c0,0.3-0.2,0.4-0.4,0.3l-5.9-1.1c-0.2,0-0.3-0.2-0.3-0.4\n\t\t\t\t\t\t\tc0-0.2,0.2-0.3,0.4-0.3l5.9,1.1C52.5,80.5,52.6,80.7,52.6,80.9z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M45.6,79.5C45.6,79.5,45.6,79.6,45.6,79.5c0,0.3-0.2,0.4-0.4,0.3l-1-0.2\n\t\t\t\t\t\t\tc-0.2,0-0.3-0.2-0.3-0.4c0-0.2,0.2-0.3,0.4-0.3l1,0.2C45.5,79.2,45.6,79.3,45.6,79.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M53,79.3L53,79.3c-0.1,0.3-0.3,0.4-0.5,0.3L47,77.3c-0.2-0.1-0.3-0.3-0.2-0.5s0.3-0.3,0.5-0.2\n\t\t\t\t\t\t\tl5.5,2.3C52.9,79,53,79.2,53,79.3z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.8,85.6c0,0.1-0.1,0.3-0.2,0.3l-5.2,2.2c-0.2,0.1-0.4,0-0.5-0.2s0-0.4,0.2-0.5l5.2-2.2\n\t\t\t\t\t\t\tc0.2-0.1,0.4,0,0.5,0.2C52.8,85.5,52.8,85.6,52.8,85.6z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.5,84.1c0,0.2-0.1,0.3-0.3,0.3l-7.9,1.7c-0.2,0-0.4-0.1-0.4-0.3c0-0.2,0.1-0.4,0.3-0.4\n\t\t\t\t\t\t\tl7.9-1.7C52.2,83.7,52.4,83.8,52.5,84.1C52.5,84,52.5,84,52.5,84.1z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M55.6,75.6c0,0.1-0.1,0.2-0.1,0.3C55.3,76,55.1,76,55,75.8L53,73c-0.1-0.2-0.1-0.4,0.1-0.5\n\t\t\t\t\t\t\tc0.2-0.1,0.4-0.1,0.5,0.1l2,2.8C55.5,75.4,55.6,75.5,55.6,75.6z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.7,71.5c0,0.1-0.1,0.2-0.1,0.3c-0.2,0.1-0.4,0.1-0.5-0.1l-2.3-3.3c-0.1-0.2-0.1-0.4,0.1-0.5\n\t\t\t\t\t\t\tc0.2-0.1,0.4-0.1,0.5,0.1l2.3,3.3C52.7,71.4,52.7,71.5,52.7,71.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M53.6,77.9c0,0.1,0,0.1-0.1,0.2c-0.1,0.2-0.3,0.2-0.5,0.1l-4.8-3.3c-0.2-0.1-0.2-0.3-0.1-0.5\n\t\t\t\t\t\t\tc0.1-0.2,0.3-0.2,0.5-0.1l4.8,3.3C53.6,77.7,53.6,77.8,53.6,77.9z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M54.5,76.6c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.4,0.1-0.5,0L53,75.9c-0.1-0.1-0.1-0.4,0-0.5\n\t\t\t\t\t\t\ts0.4-0.1,0.5,0l0.9,0.9C54.5,76.4,54.5,76.5,54.5,76.6z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.8,75c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.4,0.1-0.5,0l-4.4-4.3c-0.1-0.1-0.1-0.4,0-0.5\n\t\t\t\t\t\t\ts0.4-0.1,0.5,0l4.4,4.3C52.8,74.8,52.8,74.9,52.8,75z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M55.4,89.9c0,0.1,0,0.1-0.1,0.2l-1.5,2.4c-0.1,0.2-0.3,0.2-0.5,0.1s-0.2-0.3-0.1-0.5l1.5-2.4\n\t\t\t\t\t\t\tc0.1-0.2,0.3-0.2,0.5-0.1C55.3,89.7,55.4,89.8,55.4,89.9z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.5,94.5c0,0.1,0,0.1-0.1,0.2l-3,4.8c-0.1,0.2-0.3,0.2-0.5,0.1s-0.2-0.3-0.1-0.5l3-4.8\n\t\t\t\t\t\t\tc0.1-0.2,0.3-0.2,0.5-0.1C52.5,94.2,52.5,94.4,52.5,94.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M54.4,88.8c0,0.1,0,0.2-0.1,0.2l-3.9,4.4c-0.1,0.1-0.3,0.2-0.5,0c-0.1-0.1-0.2-0.3,0-0.5\n\t\t\t\t\t\t\tl3.9-4.4c0.1-0.1,0.3-0.2,0.5,0C54.3,88.6,54.4,88.7,54.4,88.8z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M49.5,94.3c0,0.1,0,0.2-0.1,0.2l-0.9,1c-0.1,0.1-0.3,0.2-0.5,0c-0.1-0.1-0.2-0.3,0-0.5l0.9-1\n\t\t\t\t\t\t\tc0.1-0.1,0.3-0.2,0.5,0C49.5,94.1,49.5,94.2,49.5,94.3z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M53.6,87.5c0,0.1,0,0.2-0.1,0.3l-4.8,3.8c-0.2,0.1-0.4,0.1-0.5-0.1C48,91.3,48,91.1,48.1,91\n\t\t\t\t\t\t\tl4.8-3.8c0.2-0.1,0.4-0.1,0.5,0.1C53.5,87.3,53.6,87.4,53.6,87.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M56.9,95.1C56.9,95.1,56.9,95.2,56.9,95.1l-0.6,2.6c0,0.2-0.2,0.3-0.4,0.3s-0.3-0.2-0.3-0.4\n\t\t\t\t\t\t\tl0.6-2.5c0-0.2,0.2-0.3,0.4-0.3C56.8,94.8,56.9,94.9,56.9,95.1z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M56.6,90.8L56.6,90.8l-3.4,8.4c-0.1,0.2-0.3,0.3-0.5,0.2c-0.2-0.1-0.3-0.3-0.2-0.5l3.4-8.3\n\t\t\t\t\t\t\tc0.1-0.2,0.3-0.3,0.5-0.2C56.5,90.5,56.6,90.7,56.6,90.8z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M66.4,57.6v37.1c0,0.1-0.1,0.2-0.2,0.3c-1.1,0.7-2.6,2-4.6,4c-0.1,0.1-0.2,0.1-0.4,0.1\n\t\t\t\t\tc-1.2-0.4-2.2-1-2.9-1.8c-1.1-1.4-1.5-2.8-1.1-4c0.3-1.1,1.5-1.9,2.7-1.8c1.1,0.1,2.1,1.1,2.3,2.2c0.1,0.9-0.3,1.8-1,2.2\n\t\t\t\t\tc-0.8,0.5-1.9,0.2-2.4-0.5c-0.3-0.4-0.3-0.9-0.2-1.4s0.4-0.8,0.8-1c0.2-0.1,0.4,0,0.5,0.2s0,0.4-0.2,0.5s-0.4,0.3-0.4,0.5\n\t\t\t\t\tc-0.1,0.3,0,0.6,0.1,0.8c0.3,0.4,1,0.5,1.5,0.3c0.5-0.3,0.8-0.9,0.7-1.5c-0.1-0.8-0.8-1.5-1.6-1.6s-1.7,0.5-1.9,1.3\n\t\t\t\t\tc-0.3,1,0,2.1,1,3.3c0.5,0.6,1.4,1.2,2.4,1.5c1.9-1.9,3.3-3.1,4.4-3.8V60c-0.9,1.5-1.9,3-3.2,3.7l2.2,2.5c0.1,0.1,0.1,0.4,0,0.5\n\t\t\t\t\ts-0.4,0.1-0.5,0l-2.5-2.8c-0.1-0.1-0.1-0.2-0.1-0.3s0.1-0.2,0.2-0.2c2-0.8,3.4-3.8,3.6-5.7c0-0.2,0.2-0.3,0.4-0.3\n\t\t\t\t\tC66.2,57.3,66.4,57.4,66.4,57.6z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M64.2,78.4c0,0.1,0,0.1,0,0.2c-0.1,0.2-0.3,0.2-0.5,0.1c-2-1-3.4-2.9-4-5\n\t\t\t\t\t\tc-1.3,1.1-2.4,2.5-3.5,4.2c-1.1,1.9-1.7,3.5-1.9,5.1c-0.2,1.9,0.3,3.8,1.4,5c1.2,1.4,3.2,1.9,4.7,1.2c0.8-0.3,1.5-1.1,1.8-1.9\n\t\t\t\t\t\ts0.3-1.6,0-2.3c-0.4-0.7-1.2-1.3-2.1-1.4c-0.8-0.1-1.6,0.2-2,0.7C57.6,85,57.5,86,58,86.6c0.3,0.3,0.7,0.5,1.1,0.5\n\t\t\t\t\t\tc0.4,0,0.7-0.1,0.9-0.4c0.1-0.1,0.3-0.2,0.5,0c0.1,0.1,0.2,0.3,0,0.5c-0.3,0.4-0.9,0.6-1.5,0.6s-1.3-0.3-1.6-0.7\n\t\t\t\t\t\tc-0.7-0.9-0.7-2.2,0-3.2c0.6-0.7,1.6-1.1,2.6-1c1.2,0.1,2.2,0.8,2.6,1.7c0.4,0.8,0.4,1.8,0.1,2.8c-0.4,1.1-1.2,1.9-2.2,2.3\n\t\t\t\t\t\tc-1.8,0.7-4.1,0.2-5.5-1.4c-1.3-1.4-1.8-3.4-1.6-5.6c0.2-1.7,0.8-3.5,2-5.4s2.6-3.6,4-4.8c0.1-0.1,0.2-0.1,0.3-0.1\n\t\t\t\t\t\ts0.2,0.1,0.2,0.3c0.4,2.2,1.8,4.1,3.8,5.1C64.1,78.1,64.2,78.3,64.2,78.4z\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M64.8,70.2c0,1.1-0.7,2.1-1.6,2.5c-0.6,0.2-1.3,0.1-1.9-0.2c-0.5-0.3-0.9-0.8-1-1.4\n\t\t\t\t\t\ts0.2-1.3,0.8-1.7c0.5-0.4,1.2-0.5,1.7-0.2c0.2,0.1,0.3,0.3,0.2,0.5s-0.3,0.3-0.5,0.2c-0.3-0.1-0.7-0.1-1,0.2\n\t\t\t\t\t\tc-0.4,0.3-0.6,0.7-0.5,1.1c0,0.4,0.3,0.7,0.6,0.9c0.4,0.2,0.9,0.3,1.3,0.2c0.8-0.3,1.3-1.3,1.1-2.2c-0.2-0.8-0.9-1.6-1.8-1.9\n\t\t\t\t\t\tc-0.9-0.3-1.9-0.2-2.8,0.3c-1.7,0.8-2.9,2.4-3.2,4.2c-0.3,1.8,0.5,3.8,1.9,4.9c0.6,0.5,1.4,0.9,2.1,1.3c0.6,0.3,1.2,0.6,1.8,1\n\t\t\t\t\t\tc1.3,0.9,2.5,2.7,1.8,4.3c-0.1,0.2-0.3,0.3-0.5,0.2c-0.2-0.1-0.3-0.3-0.2-0.5c0.5-1.2-0.4-2.7-1.6-3.5c-0.5-0.4-1.1-0.7-1.7-1\n\t\t\t\t\t\tC59,79,58.2,78.6,57.5,78c-1.6-1.3-2.4-3.5-2.2-5.6c0.3-2.1,1.7-3.9,3.6-4.8c1.1-0.5,2.3-0.6,3.3-0.3c1.2,0.4,2.1,1.3,2.3,2.4\n\t\t\t\t\t\tC64.8,69.9,64.8,70,64.8,70.2z\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.4,238.6c0-0.2-0.2-0.3-0.3-0.3h-1.3c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.3,0.4h1.3\n\t\t\t\t\t\t\tC52.3,238.9,52.4,238.8,52.4,238.6z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M50.1,238.6c0-0.2-0.2-0.3-0.3-0.3H42c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.3,0.4h7.7\n\t\t\t\t\t\t\tC50,238.9,50.1,238.8,50.1,238.6z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.6,240.2C52.6,240.1,52.6,240.1,52.6,240.2c0-0.3-0.2-0.4-0.4-0.3l-5.9,1.1\n\t\t\t\t\t\t\tc-0.2,0-0.3,0.2-0.3,0.4s0.2,0.3,0.4,0.3l5.9-1.1C52.5,240.5,52.6,240.3,52.6,240.2z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M45.6,241.5L45.6,241.5c0-0.3-0.2-0.4-0.4-0.3l-1,0.2c-0.2,0-0.3,0.2-0.3,0.4s0.2,0.3,0.4,0.3\n\t\t\t\t\t\t\tl1-0.2C45.5,241.8,45.6,241.7,45.6,241.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M53,241.7v-0.1c-0.1-0.2-0.3-0.3-0.5-0.2l-5.5,2.3c-0.2,0.1-0.3,0.3-0.2,0.5s0.3,0.3,0.5,0.2\n\t\t\t\t\t\t\tl5.5-2.3C52.9,242,53,241.8,53,241.7z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.8,235.4c0-0.1-0.1-0.3-0.2-0.3l-5.2-2.2c-0.2-0.1-0.4,0-0.5,0.2s0,0.4,0.2,0.5l5.2,2.2\n\t\t\t\t\t\t\tc0.2,0.1,0.4,0,0.5-0.2C52.8,235.5,52.8,235.4,52.8,235.4z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.5,237c0-0.2-0.1-0.3-0.3-0.3l-7.9-1.7c-0.2,0-0.4,0.1-0.4,0.3s0.1,0.4,0.3,0.4l7.9,1.7\n\t\t\t\t\t\t\tC52.2,237.3,52.4,237.2,52.5,237L52.5,237z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M55.6,245.5c0-0.1-0.1-0.2-0.1-0.3c-0.2-0.1-0.4-0.1-0.5,0.1l-2,2.8c-0.1,0.2-0.1,0.4,0.1,0.5\n\t\t\t\t\t\t\tc0.2,0.1,0.4,0.1,0.5-0.1l2-2.8C55.5,245.6,55.6,245.5,55.6,245.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.7,249.5c0-0.1-0.1-0.2-0.1-0.3c-0.2-0.1-0.4-0.1-0.5,0.1l-2.3,3.3\n\t\t\t\t\t\t\tc-0.1,0.2-0.1,0.4,0.1,0.5c0.2,0.1,0.4,0.1,0.5-0.1l2.3-3.3C52.7,249.6,52.7,249.5,52.7,249.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M53.6,243.1c0-0.1,0-0.1-0.1-0.2c-0.1-0.2-0.3-0.2-0.5-0.1l-4.8,3.3c-0.2,0.1-0.2,0.3-0.1,0.5\n\t\t\t\t\t\t\tc0.1,0.2,0.3,0.2,0.5,0.1l4.8-3.3C53.6,243.4,53.6,243.2,53.6,243.1z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M54.5,244.4c0-0.1,0-0.2-0.1-0.2c-0.1-0.1-0.4-0.1-0.5,0l-0.9,0.9c-0.1,0.1-0.1,0.4,0,0.5\n\t\t\t\t\t\t\ts0.4,0.1,0.5,0l0.9-0.9C54.5,244.6,54.5,244.5,54.5,244.4z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.8,246.1c0-0.1,0-0.2-0.1-0.2c-0.1-0.1-0.4-0.1-0.5,0l-4.4,4.3c-0.1,0.1-0.1,0.4,0,0.5\n\t\t\t\t\t\t\ts0.4,0.1,0.5,0l4.4-4.3C52.8,246.2,52.8,246.1,52.8,246.1z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M55.4,231.1c0-0.1,0-0.1-0.1-0.2l-1.5-2.4c-0.1-0.2-0.3-0.2-0.5-0.1c-0.2,0.1-0.2,0.3-0.1,0.5\n\t\t\t\t\t\t\tl1.5,2.4c0.1,0.2,0.3,0.2,0.5,0.1C55.3,231.3,55.4,231.2,55.4,231.1z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.5,226.5c0-0.1,0-0.1-0.1-0.2l-3-4.8c-0.1-0.2-0.3-0.2-0.5-0.1c-0.2,0.1-0.2,0.3-0.1,0.5\n\t\t\t\t\t\t\tl3,4.8c0.1,0.2,0.3,0.2,0.5,0.1C52.5,226.8,52.5,226.6,52.5,226.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M54.4,232.2c0-0.1,0-0.2-0.1-0.2l-3.9-4.4c-0.1-0.1-0.3-0.2-0.5,0c-0.1,0.1-0.2,0.3,0,0.5\n\t\t\t\t\t\t\tl3.9,4.4c0.1,0.1,0.3,0.2,0.5,0C54.3,232.4,54.4,232.3,54.4,232.2z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M49.5,226.7c0-0.1,0-0.2-0.1-0.2l-0.9-1c-0.1-0.1-0.3-0.2-0.5,0c-0.1,0.1-0.2,0.3,0,0.5l0.9,1\n\t\t\t\t\t\t\tc0.1,0.1,0.3,0.2,0.5,0C49.5,226.9,49.5,226.8,49.5,226.7z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M53.6,233.5c0-0.1,0-0.2-0.1-0.3l-4.8-3.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.1,0.2-0.1,0.4,0.1,0.5\n\t\t\t\t\t\t\tl4.8,3.8c0.2,0.1,0.4,0.1,0.5-0.1C53.5,233.7,53.6,233.6,53.6,233.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M56.9,225.9C56.9,225.9,56.9,225.8,56.9,225.9l-0.6-2.6c0-0.2-0.2-0.3-0.4-0.3\n\t\t\t\t\t\t\ts-0.3,0.2-0.3,0.4l0.6,2.5c0,0.2,0.2,0.3,0.4,0.3C56.8,226.2,56.9,226.1,56.9,225.9z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M56.6,230.2v-0.1l-3.4-8.3c-0.1-0.2-0.3-0.3-0.5-0.2s-0.3,0.3-0.2,0.5l3.4,8.3\n\t\t\t\t\t\t\tc0.1,0.2,0.3,0.3,0.5,0.2C56.5,230.5,56.6,230.3,56.6,230.2z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M66.4,263.4v-37.1c0-0.1-0.1-0.2-0.2-0.3c-1.1-0.7-2.6-2-4.6-4c-0.1-0.1-0.2-0.1-0.4-0.1\n\t\t\t\t\tc-1.2,0.4-2.2,1-2.9,1.8c-1.1,1.4-1.5,2.8-1.1,4c0.3,1.1,1.5,1.9,2.7,1.8c1.1-0.1,2.1-1.1,2.3-2.2c0.1-0.9-0.3-1.8-1-2.2\n\t\t\t\t\tc-0.8-0.5-1.9-0.2-2.4,0.5c-0.3,0.4-0.3,0.9-0.2,1.4s0.4,0.8,0.8,1c0.2,0.1,0.4,0,0.5-0.2s0-0.4-0.2-0.5s-0.4-0.3-0.4-0.5\n\t\t\t\t\tc-0.1-0.3,0-0.6,0.1-0.8c0.3-0.4,1-0.5,1.5-0.3c0.5,0.3,0.8,0.9,0.7,1.5c-0.1,0.8-0.8,1.5-1.6,1.6s-1.7-0.5-1.9-1.3\n\t\t\t\t\tc-0.3-1,0-2.1,1-3.3c0.5-0.6,1.4-1.2,2.4-1.5c1.9,1.9,3.3,3.1,4.4,3.8V261c-0.6-1.5-1.6-2.9-2.9-3.6l2.2-2.5\n\t\t\t\t\tc0.1-0.1,0.1-0.4,0-0.5s-0.4-0.1-0.5,0l-2.5,2.8c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c2,0.8,3.4,3.8,3.6,5.7\n\t\t\t\t\tc0,0.2,0.2,0.3,0.4,0.3C66.2,263.7,66.4,263.6,66.4,263.4z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M64.2,242.6c0-0.1,0-0.1,0-0.2c-0.1-0.2-0.3-0.2-0.5-0.1c-2,1-3.4,2.9-4,5\n\t\t\t\t\t\tc-1.3-1.1-2.4-2.5-3.5-4.2c-1.1-1.9-1.7-3.5-1.9-5.1c-0.2-1.9,0.3-3.8,1.4-5c1.2-1.4,3.2-1.9,4.7-1.2c0.8,0.3,1.5,1.1,1.8,1.9\n\t\t\t\t\t\tc0.3,0.8,0.3,1.6,0,2.3c-0.4,0.7-1.2,1.3-2.1,1.4c-0.8,0.1-1.6-0.2-2-0.7c-0.5-0.7-0.6-1.7-0.1-2.3c0.3-0.3,0.7-0.5,1.1-0.5\n\t\t\t\t\t\tc0.4,0,0.7,0.1,0.9,0.4c0.1,0.1,0.3,0.2,0.5,0c0.1-0.1,0.2-0.3,0-0.5c-0.3-0.4-0.9-0.6-1.5-0.6s-1.3,0.3-1.6,0.7\n\t\t\t\t\t\tc-0.7,0.9-0.7,2.2,0,3.2c0.6,0.7,1.6,1.1,2.6,1c1.2-0.1,2.2-0.8,2.6-1.7c0.4-0.8,0.4-1.8,0.1-2.8c-0.4-1.1-1.2-1.9-2.2-2.3\n\t\t\t\t\t\tc-1.8-0.7-4.1-0.2-5.5,1.4c-1.3,1.4-1.8,3.4-1.6,5.6c0.2,1.7,0.8,3.5,2,5.4s2.6,3.6,4,4.8c0.1,0.1,0.2,0.1,0.3,0.1\n\t\t\t\t\t\ts0.2-0.1,0.2-0.3c0.4-2.2,1.8-4.1,3.8-5.1C64.1,242.9,64.2,242.7,64.2,242.6z\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M64.8,250.8c0-1.1-0.7-2.1-1.6-2.5c-0.6-0.2-1.3-0.1-1.9,0.2c-0.5,0.3-0.9,0.8-1,1.4\n\t\t\t\t\t\tc-0.1,0.6,0.2,1.3,0.8,1.7c0.5,0.4,1.2,0.5,1.7,0.2c0.2-0.1,0.3-0.3,0.2-0.5s-0.3-0.3-0.5-0.2c-0.3,0.1-0.7,0.1-1-0.2\n\t\t\t\t\t\tc-0.4-0.3-0.6-0.7-0.5-1.1c0-0.4,0.3-0.7,0.6-0.9c0.4-0.2,0.9-0.3,1.3-0.2c0.8,0.3,1.3,1.3,1.1,2.2c-0.2,0.8-0.9,1.6-1.8,1.9\n\t\t\t\t\t\tc-0.9,0.3-1.9,0.2-2.8-0.3c-1.7-0.8-2.9-2.4-3.2-4.2s0.5-3.8,1.9-4.9c0.6-0.5,1.4-0.9,2.1-1.3c0.6-0.3,1.2-0.6,1.8-1\n\t\t\t\t\t\tc1.3-0.9,2.5-2.7,1.8-4.3c-0.1-0.2-0.3-0.3-0.5-0.2s-0.3,0.3-0.2,0.5c0.5,1.2-0.4,2.7-1.6,3.5c-0.5,0.4-1.1,0.7-1.7,1\n\t\t\t\t\t\tc-0.8,0.4-1.6,0.8-2.3,1.4c-1.6,1.3-2.4,3.5-2.2,5.6c0.3,2.1,1.7,3.9,3.6,4.8c1.1,0.5,2.3,0.6,3.3,0.3c1.2-0.4,2.1-1.3,2.3-2.4\n\t\t\t\t\t\tC64.8,251.1,64.8,251,64.8,250.8z\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<line style=\"fill:none;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;\" x1=\"514\" y1=\"283.9\" x2=\"514\" y2=\"39.6\"/>\n\t<line style=\"fill:none;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;\" x1=\"551.7\" y1=\"282.7\" x2=\"551.7\" y2=\"38.4\"/>\n\t<g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M533,227.4v11.5c0,0.1-0.1,0.2-0.2,0.2c-0.1,0-0.2-0.1-0.2-0.2v-11.5c0-0.1,0.1-0.2,0.2-0.2\n\t\t\t\t\tC532.8,227.1,533,227.2,533,227.4z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M534.6,245.3L534.6,245.3l-1.7,6.1c0,0.1-0.1,0.2-0.2,0.2c-0.1,0-0.2-0.1-0.2-0.2l-1.7-6.1\n\t\t\t\t\tc0-0.1,0-0.1,0-0.2l1.7-2.5c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.2,0.1l1.7,2.5C534.6,245.2,534.6,245.2,534.6,245.3z\n\t\t\t\t\t M532.7,250.5l1.4-5.1l-1.4-2.1l-1.4,2.1L532.7,250.5z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M534.1,226c0,0.7-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3S534.1,225.3,534.1,226z\n\t\t\t\t\t M531.8,226c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9s-0.4-0.9-0.9-0.9S531.8,225.5,531.8,226z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M534.3,223.3c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6\n\t\t\t\t\tS534.3,222.4,534.3,223.3z M531.6,223.3c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1S531.6,222.7,531.6,223.3z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M532.4,239.4C532.4,239.5,532.4,239.5,532.4,239.4v2.1c0,0.1,0,0.1-0.1,0.2l-2.1,2.1\n\t\t\t\t\tc-0.1,0.1-0.2,0.1-0.3,0.1s-0.1-0.1-0.1-0.2v-2.1c0-0.1,0-0.1,0.1-0.2l2.1-2.1c0-0.1,0.1-0.1,0.2-0.1\n\t\t\t\t\tC532.3,239.2,532.4,239.3,532.4,239.4z M531.9,241.4V240l-1.6,1.6v1.5L531.9,241.4z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M535.6,241.6v2.1c0,0.1-0.1,0.2-0.1,0.2c-0.1,0-0.2,0-0.3-0.1l-2.1-2.1c0,0-0.1-0.1-0.1-0.2v-2.1\n\t\t\t\t\tc0-0.1,0.1-0.2,0.1-0.2c0.1,0,0.2,0,0.3,0.1l2.1,2.1C535.6,241.5,535.6,241.5,535.6,241.6z M535.1,243.1v-1.4l-1.6-1.7v1.5\n\t\t\t\t\tL535.1,243.1z\"/>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,232.8c0-1-0.2-1.2-1.5-1.2h-4.1c-1.2,0-1.4,0.2-1.4,1.2H287v-5.9l1.6-0.1v0.3l-0.2,0.1\n\t\t\t\tc-0.6,0.2-0.9,0.3-0.9,1.4v2.1h2.8V230c0-1.2-0.1-1.4-1.2-1.4v-0.3h2.9v0.3c-1,0-1.2,0.2-1.2,1.4v0.6h2c1.2,0,1.5-0.2,1.5-1.2\n\t\t\t\th0.3v3.4H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M292.5,226.9c-1.3,0-2.3-1.1-2.3-2.5s1-2.5,2.3-2.5s2.3,1.1,2.3,2.5\n\t\t\t\tC294.8,225.8,293.8,226.9,292.5,226.9z M292.5,222.9c-1,0-1.8,0.5-1.8,1.5s0.8,1.5,1.8,1.5s1.8-0.5,1.8-1.5\n\t\t\t\tS293.5,222.9,292.5,222.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,220.8c0-0.8-0.2-1-1.5-1h-0.6c-1.2,0-1.4,0.2-1.4,1h-0.3l-0.3-1.7c0.1-0.1,0.6-0.2,0.9-0.2\n\t\t\t\tc-0.5-0.2-0.9-0.8-0.9-1.3c0-0.7,0.5-1,0.8-1s0.6,0.1,0.6,0.5c0,0.2-0.2,0.4-0.4,0.4c-0.3,0-0.4,0.2-0.4,0.4c0,0.3,0.5,1,1.5,1\n\t\t\t\th0.7c1.2,0,1.5-0.1,1.5-1h0.3v2.9L294.3,220.8L294.3,220.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,215.9c0-0.8-0.2-1-1.5-1h-0.6c-1.2,0-1.4,0.2-1.4,1h-0.3l-0.3-1.7c0.1-0.1,0.6-0.2,0.9-0.2\n\t\t\t\tc-0.4-0.3-0.9-0.9-0.9-1.6c0-0.8,0.4-1.2,0.9-1.3c-0.4-0.3-0.9-1-0.9-1.7c0-1.1,0.8-1.4,1.9-1.4h0.8c1.2,0,1.5-0.2,1.5-1h0.3v2.6\n\t\t\t\th-0.3c0-0.7-0.1-0.8-1.5-0.8h-0.7c-0.8,0-1.3,0.2-1.3,0.9c0,0.4,0.5,1.3,1.2,1.3h0.8c1.3,0,1.5-0.1,1.5-0.8h0.3v2.5h-0.3\n\t\t\t\tc0-0.7-0.1-0.8-1.5-0.8h-0.7c-0.8,0-1.3,0.2-1.3,0.9c0,0.4,0.5,1.3,1.2,1.3h0.8c1.3,0,1.5-0.1,1.5-0.8h0.3v2.6H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M293.7,206.1c-1.1,0-1.5-1.2-1.8-2.7c-0.9,0-1.3,0.1-1.3,0.8c0,0.3,0.2,0.7,0.6,0.7\n\t\t\t\tc0.2,0,0.4,0.2,0.4,0.4s-0.2,0.4-0.4,0.4c-0.6,0-1-0.8-1-1.6c0-1.2,0.5-1.7,1.7-1.7h1.9c0.3,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.3l0.2-0.2c0.2,0.2,0.4,0.5,0.4,0.8c0,0.5-0.3,0.8-0.7,0.8c0.5,0.6,0.7,1.1,0.7,1.6\n\t\t\t\tC294.8,205.6,294.4,206.1,293.7,206.1z M293.6,203.4h-1.3c0.3,1.2,0.7,1.7,1.2,1.7c0.4,0,0.6-0.3,0.6-0.6\n\t\t\t\tC294.2,204.3,294.1,204,293.6,203.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,201.3c0-0.8-0.2-1-1.5-1h-3.9c-1.2,0-1.5,0.2-1.5,1h-0.3l-0.3-1.9h6c1.2,0,1.5-0.2,1.5-1\n\t\t\t\th0.3v2.9H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,194.8c0-1-0.2-1.2-1.5-1.2h-4.1c-1.2,0-1.4,0.1-1.4,1.2H287v-3.4h0.3c0,1,0.2,1.2,1.4,1.2\n\t\t\t\th4.1c1.2,0,1.5-0.1,1.5-1.2h0.3v3.4H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,190.5c0-0.8-0.2-1-1.5-1h-0.6c-1.2,0-1.4,0.2-1.4,1h-0.3l-0.3-1.7c0.1-0.1,0.6-0.2,0.9-0.2\n\t\t\t\tc-0.4-0.3-0.9-0.9-0.9-1.7c0-1.1,0.8-1.6,1.9-1.6h0.8c1.2,0,1.5-0.1,1.5-1h0.3v2.9h-0.3c0-0.8-0.2-1-1.5-1h-0.7\n\t\t\t\tc-0.8,0-1.3,0.3-1.3,1s0.6,1.4,1.2,1.4h0.8c1.3,0,1.5-0.1,1.5-0.9h0.3v2.7h-0.4V190.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M291.4,183.3c-0.5,0.2-0.7,0.4-0.7,0.8h-0.2v-2.2h0.2c0,0.6,0.1,0.6,0.7,0.4l2.1-0.9l-2.1-0.9\n\t\t\t\tc-0.5-0.2-0.7-0.2-0.7,0.4h-0.2v-1.7h0.2c0,0.4,0.2,0.6,0.7,0.9l3.4,1.5v0.2L291.4,183.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M288.5,177.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5s0.6,0.2,0.6,0.5\n\t\t\t\tC289,177.6,288.8,177.8,288.5,177.8z M294.3,178.7c0-0.8-0.2-1-1.5-1h-0.6c-1.2,0-1.4,0.2-1.4,1h-0.3l-0.3-1.9h2.6\n\t\t\t\tc1.2,0,1.5-0.1,1.5-1h0.3v2.9H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M293.4,174.6h-2.5v0.6h-0.3c-0.2-0.7-0.7-1-1.5-1.1v-0.4h1.4v-1.1h0.4v1.1h2.5\n\t\t\t\tc0.6,0,0.9-0.2,0.9-0.6c0-0.2-0.1-0.5-0.4-0.8l0.2-0.2c0.4,0.3,0.7,0.9,0.7,1.3C294.8,174.1,294.3,174.6,293.4,174.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M293.7,171.3c-1.1,0-1.5-1.2-1.8-2.7c-0.9,0-1.3,0.1-1.3,0.8c0,0.3,0.2,0.7,0.6,0.7\n\t\t\t\tc0.2,0,0.4,0.2,0.4,0.4s-0.2,0.4-0.4,0.4c-0.6,0-1-0.8-1-1.6c0-1.2,0.5-1.7,1.7-1.7h1.9c0.3,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.3l0.2-0.2c0.2,0.2,0.4,0.5,0.4,0.8c0,0.5-0.3,0.8-0.7,0.8c0.5,0.6,0.7,1.1,0.7,1.6\n\t\t\t\tC294.8,170.8,294.4,171.3,293.7,171.3z M293.6,168.7h-1.3c0.3,1.2,0.7,1.7,1.2,1.7c0.4,0,0.6-0.3,0.6-0.6\n\t\t\t\tC294.2,169.5,294.1,169.2,293.6,168.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M293.4,165.8h-2.5v0.6h-0.3c-0.2-0.7-0.7-1-1.5-1.1v-0.4h1.4v-1.1h0.4v1.1h2.5\n\t\t\t\tc0.6,0,0.9-0.2,0.9-0.6c0-0.2-0.1-0.5-0.4-0.8l0.2-0.2c0.4,0.3,0.7,0.9,0.7,1.3C294.8,165.3,294.3,165.8,293.4,165.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M288.5,161.7c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5s0.6,0.2,0.6,0.5\n\t\t\t\tC289,161.5,288.8,161.7,288.5,161.7z M294.3,162.6c0-0.8-0.2-1-1.5-1h-0.6c-1.2,0-1.4,0.2-1.4,1h-0.3l-0.3-1.9h2.6\n\t\t\t\tc1.2,0,1.5-0.1,1.5-1h0.3v2.9H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M292.5,158.9c-1.3,0-2.3-1.1-2.3-2.5s1-2.5,2.3-2.5s2.3,1.1,2.3,2.5\n\t\t\t\tC294.8,157.8,293.8,158.9,292.5,158.9z M292.5,154.9c-1,0-1.8,0.5-1.8,1.5s0.8,1.5,1.8,1.5s1.8-0.5,1.8-1.5\n\t\t\t\tS293.5,154.9,292.5,154.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,152.8c0-0.8-0.2-1-1.5-1h-0.6c-1.2,0-1.4,0.2-1.4,1h-0.3l-0.3-1.7c0.1-0.1,0.6-0.2,0.9-0.2\n\t\t\t\tc-0.4-0.3-0.9-0.9-0.9-1.7c0-1.1,0.8-1.6,1.9-1.6h0.8c1.2,0,1.5-0.1,1.5-1h0.3v2.9h-0.3c0-0.8-0.2-1-1.5-1h-0.7\n\t\t\t\tc-0.8,0-1.3,0.3-1.3,1s0.6,1.4,1.2,1.4h0.8c1.3,0,1.5-0.1,1.5-0.9h0.3v2.7h-0.4V152.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M293,145.8v-0.3c0.6,0,1.4-0.5,1.4-1.4c0-0.4-0.3-0.7-0.6-0.7c-0.3,0-0.5,0.3-0.8,0.7l-0.4,0.7\n\t\t\t\tc-0.3,0.6-0.8,0.8-1.2,0.8c-0.7,0-1.1-0.6-1.1-1.3c0-0.6,0.3-0.9,0.3-1.1c0,0-0.1-0.1-0.3-0.1V143h1.4v0.3c-0.5,0-1,0.4-1,1\n\t\t\t\tc0,0.4,0.2,0.6,0.5,0.6s0.5-0.2,0.8-0.8l0.3-0.6c0.3-0.5,0.7-0.9,1.2-0.9c0.8,0,1.4,0.7,1.4,1.5c0,0.6-0.4,1-0.4,1.2\n\t\t\t\tc0,0.1,0.1,0.2,0.4,0.2v0.3H293z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M293.4,138.2h-2.5v0.6h-0.3c-0.2-0.7-0.7-1-1.5-1.1v-0.4h1.4v-1.1h0.4v1.1h2.5\n\t\t\t\tc0.6,0,0.9-0.2,0.9-0.6c0-0.2-0.1-0.5-0.4-0.8l0.2-0.2c0.4,0.3,0.7,0.9,0.7,1.3C294.8,137.8,294.3,138.2,293.4,138.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M292.5,134.9c-1.3,0-2.3-1.1-2.3-2.5s1-2.5,2.3-2.5s2.3,1.1,2.3,2.5\n\t\t\t\tC294.8,133.8,293.8,134.9,292.5,134.9z M292.5,130.9c-1,0-1.8,0.5-1.8,1.5s0.8,1.5,1.8,1.5s1.8-0.5,1.8-1.5\n\t\t\t\tS293.5,130.9,292.5,130.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,125.9c0-0.8-0.2-1-1.5-1h-2v1h-0.4v-1h-1.2c-1.7,0-2.3-1-2.3-2c0-0.8,0.5-1.2,0.9-1.2\n\t\t\t\tc0.2,0,0.4,0.1,0.4,0.4c0,0.6-1,0.3-1,1.1c0,0.6,0.5,0.9,1.9,0.9h1.2v-1.2h0.4v1.2h2c1.2,0,1.5-0.1,1.5-1h0.3v2.9h-0.2V125.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M292.5,121.9c-1.3,0-2.3-1.1-2.3-2.5s1-2.5,2.3-2.5s2.3,1.1,2.3,2.5S293.8,121.9,292.5,121.9z\n\t\t\t\t M292.5,117.9c-1,0-1.8,0.5-1.8,1.5s0.8,1.5,1.8,1.5s1.8-0.5,1.8-1.5S293.5,117.9,292.5,117.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,116c0-0.8-0.2-1-1.5-1h-3.9c-1.2,0-1.5,0.2-1.5,1h-0.3l-0.3-1.9h6c1.2,0,1.5-0.2,1.5-1h0.3\n\t\t\t\tv2.9H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,112.7c0-0.8-0.2-1-1.5-1h-3.9c-1.2,0-1.5,0.2-1.5,1h-0.3l-0.3-1.9h6c1.2,0,1.5-0.2,1.5-1\n\t\t\t\th0.3v2.9H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M292.5,109c-1.3,0-2.3-1.1-2.3-2.5s1-2.5,2.3-2.5s2.3,1.1,2.3,2.5S293.8,109,292.5,109z\n\t\t\t\t M292.5,105c-1,0-1.8,0.5-1.8,1.5s0.8,1.5,1.8,1.5s1.8-0.5,1.8-1.5C294.3,105.4,293.5,105,292.5,105z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M291.4,102.6c-0.5,0.2-0.7,0.4-0.7,0.8h-0.2v-2.2h0.2c0,0.6,0.1,0.6,0.7,0.4l2.1-0.8l-3-1.3v-0.2\n\t\t\t\tl3-1.3l-2.1-0.9c-0.5-0.2-0.7-0.2-0.7,0.4h-0.2v-1.7h0.2c0,0.4,0.2,0.6,0.7,0.9l3.4,1.5v0.2l-3,1.3l3,1.3v0.2L291.4,102.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294,95.2c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7\n\t\t\t\tC294.7,94.9,294.4,95.2,294,95.2z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M189.9,212.3c0-1.2-0.2-1.3-1.6-1.3h-4.6c-1.4,0-1.6,0.2-1.6,1.3h-0.3v-3.7c0-1.9,1.1-3,2.4-3\n\t\t\t\ts2.4,1.1,2.4,3v1.2h1.8c1.4,0,1.6-0.2,1.6-1.3h0.3v3.8H189.9z M186,208.6c0-1.2-0.8-1.8-1.8-1.8s-1.8,0.6-1.8,1.8v1.2h3.7\n\t\t\t\tL186,208.6L186,208.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M189.9,204.8c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1H182l-0.4-2.1h6.7\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2L189.9,204.8L189.9,204.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M187.8,200.7c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C190.4,199.6,189.2,200.7,187.8,200.7z M187,197.1\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V197.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M189.2,194.8c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC190.4,194.2,189.9,194.8,189.2,194.8z M189,191.8h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC189.7,192.8,189.6,192.4,189,191.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M188.4,189v-0.3c0.6,0,1.6-0.5,1.6-1.5c0-0.5-0.3-0.8-0.7-0.8s-0.6,0.3-0.9,0.8L188,188\n\t\t\t\tc-0.4,0.7-1,0.9-1.4,0.9c-0.8,0-1.3-0.7-1.3-1.4s0.3-1,0.3-1.2c0-0.1-0.1-0.1-0.3-0.1v-0.3h1.6v0.3c-0.6,0-1.2,0.4-1.2,1.1\n\t\t\t\tc0,0.5,0.3,0.7,0.6,0.7s0.5-0.2,0.9-0.9l0.4-0.7c0.4-0.6,0.8-1,1.3-1c0.9,0,1.5,0.8,1.5,1.7c0,0.6-0.4,1.1-0.4,1.3\n\t\t\t\tc0,0.1,0.1,0.2,0.4,0.2v0.3L188.4,189L188.4,189z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M187.8,184.2c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C190.4,183.2,189.2,184.2,187.8,184.2z M187,180.7\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V180.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M188.4,175.1v-0.3c0.6,0,1.6-0.5,1.6-1.5c0-0.5-0.3-0.8-0.7-0.8s-0.6,0.3-0.9,0.8l-0.4,0.8\n\t\t\t\tc-0.4,0.7-1,0.9-1.4,0.9c-0.8,0-1.3-0.7-1.3-1.4s0.3-1,0.3-1.2c0-0.1-0.1-0.1-0.3-0.1V172h1.6v0.3c-0.6,0-1.2,0.4-1.2,1.1\n\t\t\t\tc0,0.5,0.3,0.7,0.6,0.7s0.5-0.2,0.9-0.9l0.4-0.7c0.4-0.6,0.8-1,1.3-1c0.9,0,1.5,0.8,1.5,1.7c0,0.6-0.4,1.1-0.4,1.3\n\t\t\t\tc0,0.1,0.1,0.2,0.4,0.2v0.3L188.4,175.1L188.4,175.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M189.2,170.3c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC190.4,169.7,189.9,170.3,189.2,170.3z M189,167.3h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC189.7,168.3,189.6,168,189,167.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M186.6,164.3c-0.6,0.3-0.8,0.5-0.8,1h-0.3v-2.5h0.3c0,0.6,0.2,0.7,0.8,0.4l2.3-1l-2.3-1\n\t\t\t\tc-0.6-0.3-0.8-0.2-0.8,0.4h-0.3v-2h0.3c0,0.5,0.2,0.7,0.8,1l3.8,1.7v0.3L186.6,164.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M187.8,159c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C190.4,158,189.2,159,187.8,159z M187,155.5c-0.4-0.2-1.1,0.1-1.1,1\n\t\t\t\tc0,0.6,0.4,1.1,1.1,1.3V155.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M188.8,149.4H186v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8c0.7,0,1-0.2,1-0.6\n\t\t\t\tc0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C190.4,148.9,189.9,149.4,188.8,149.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M189.9,146.1c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1H182l-0.4-2.1h4.7\n\t\t\t\tc-0.5-0.4-1-1-1-1.8c0-1.3,0.9-1.7,2.1-1.7h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.1h-0.3c0-0.9-0.2-1-1.6-1h-0.8\n\t\t\t\tc-0.9,0-1.5,0.3-1.5,1.1c0,0.7,0.6,1.5,1.4,1.5h0.9c1.5,0,1.6-0.1,1.6-0.9h0.3v3h-0.3V146.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M187.8,138.4c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C190.4,137.4,189.2,138.4,187.8,138.4z M187,134.9\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V134.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M187.8,129.2c-1.4,0-2.6-1.1-2.6-2.4c0-0.7,0.3-1.3,0.8-1.7h-2.3c-1.4,0-1.6,0.2-1.6,1.1h-0.3\n\t\t\t\tl-0.4-2.1h6.7c1.3,0,1.5-0.2,1.5-1h0.3l0.4,1.7c-0.1,0.1-0.6,0.2-0.8,0.2c0.5,0.4,0.9,1,0.9,1.7\n\t\t\t\tC190.4,128.1,189.2,129.2,187.8,129.2z M188.7,125.1h-1.8c-0.7,0.3-1.1,0.8-1.1,1.4c0,1.1,0.9,1.6,2,1.6s2-0.5,2-1.6\n\t\t\t\tC189.8,125.9,189.4,125.4,188.7,125.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M189.2,122.1c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC190.4,121.5,189.9,122.1,189.2,122.1z M189,119.1h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC189.7,120.1,189.6,119.7,189,119.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M188.8,115.8H186v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8c0.7,0,1-0.2,1-0.6\n\t\t\t\tc0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C190.4,115.3,189.9,115.8,188.8,115.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M187.8,112.2c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C190.4,111.1,189.2,112.2,187.8,112.2z M187,108.6\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V108.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,244.4c0-0.9-0.2-1.1-1.6-1.1h-2.2v1.1h-0.5v-1.1H201c-1.9,0-2.6-1.1-2.6-2.3\n\t\t\t\tc0-0.9,0.6-1.4,1-1.4c0.3,0,0.5,0.2,0.5,0.5c0,0.7-1.1,0.3-1.1,1.2c0,0.7,0.6,1.1,2.2,1.1h1.3V241h0.5v1.4h2.2\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2L206.7,244.4L206.7,244.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.6,239.9c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8\n\t\t\t\tS206,239.9,204.6,239.9z M204.6,235.3c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7C206.7,235.9,205.8,235.3,204.6,235.3z\n\t\t\t\t\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,233c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.6-0.3-1-0.9-1-1.5c0-0.8,0.5-1.1,0.9-1.1c0.3,0,0.7,0.1,0.7,0.6c0,0.3-0.2,0.5-0.5,0.5\n\t\t\t\ts-0.5,0.2-0.5,0.4c0,0.3,0.5,1.1,1.6,1.1h0.8c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H206.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M205.6,223.6h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8\n\t\t\t\tc0.7,0,1-0.2,1-0.6c0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C207.2,223.1,206.7,223.6,205.6,223.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,220.4c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h4.7\n\t\t\t\tc-0.5-0.4-1-1-1-1.8c0-1.3,0.9-1.7,2.1-1.7h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.1h-0.3c0-0.9-0.2-1-1.6-1h-0.8\n\t\t\t\tc-0.9,0-1.5,0.3-1.5,1.1c0,0.7,0.6,1.5,1.4,1.5h0.9c1.5,0,1.6-0.1,1.6-0.9h0.3v3h-0.3L206.7,220.4L206.7,220.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.6,212.7c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C207.2,211.6,206,212.7,204.6,212.7z M203.8,209.1\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V209.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,203.6c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.8c0-0.9,0.4-1.3,1.1-1.5c-0.5-0.3-1.1-1.1-1.1-2c0-1.2,0.9-1.6,2.1-1.6h0.9\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3h-0.3c0-0.8-0.2-0.9-1.6-0.9h-0.8c-0.9,0-1.5,0.3-1.5,1c0,0.5,0.5,1.5,1.4,1.5h0.9\n\t\t\t\tc1.5,0,1.6-0.1,1.6-0.9h0.3v2.8h-0.3c0-0.8-0.2-0.9-1.6-0.9h-0.8c-0.9,0-1.5,0.3-1.5,1c0,0.5,0.5,1.4,1.4,1.4h0.9\n\t\t\t\tc1.5,0,1.6-0.1,1.6-0.9h0.3v3L206.7,203.6L206.7,203.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206,192.6c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC207.2,192,206.7,192.6,206,192.6z M205.8,189.6h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC206.5,190.6,206.4,190.2,205.8,189.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,186.9c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.6-0.3-1-0.9-1-1.5c0-0.8,0.5-1.1,0.9-1.1c0.3,0,0.7,0.1,0.7,0.6c0,0.3-0.2,0.5-0.5,0.5\n\t\t\t\ts-0.5,0.2-0.5,0.4c0,0.3,0.5,1.1,1.6,1.1h0.8c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H206.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,181.4c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.6-0.3-1-0.9-1-1.5c0-0.8,0.5-1.1,0.9-1.1c0.3,0,0.7,0.1,0.7,0.6c0,0.3-0.2,0.5-0.5,0.5\n\t\t\t\ts-0.5,0.2-0.5,0.4c0,0.3,0.5,1.1,1.6,1.1h0.8c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H206.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,175.9c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h3\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2L206.7,175.9L206.7,175.9z M200.1,175c-0.3,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6\n\t\t\t\tc0.4,0,0.6,0.3,0.6,0.6C200.7,174.7,200.4,175,200.1,175z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206,171.8c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC207.2,171.2,206.7,171.8,206,171.8z M205.8,168.8h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC206.5,169.8,206.4,169.5,205.8,168.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M208.1,165.5l0.2-0.3c1.3,1.2,1.9-0.2,1.9-1.3c0-0.9-0.4-1.7-1.1-1.7c-0.7,0-0.9,0.7-1,1.9\n\t\t\t\tc-0.1,1.1-0.5,2-1.3,2c-0.5,0-0.9-0.4-1.1-1.2c-0.3,0.7-1,1.2-1.7,1.2c-1.1,0-1.9-0.9-1.9-2.1c0-0.6,0.2-1.1,0.5-1.4\n\t\t\t\tc-0.3-0.3-0.5-0.8-0.5-1c0-1,1.1-1,1.2-0.5c0,0.6-0.6,0.3-0.6,0.8c0,0.1,0.1,0.3,0.2,0.4c0.3-0.3,0.7-0.4,1.1-0.4\n\t\t\t\tc1,0,1.8,0.9,1.9,1.8c0.1,0.6,0.2,1.6,0.6,1.6c0.4,0,0.5-0.8,0.5-1.3c0.2-1.9,1-2.5,1.8-2.5c1.2,0,1.9,1.1,1.9,2.5\n\t\t\t\tC210.7,166.3,209,167.3,208.1,165.5z M204,163c-0.8,0-1.5,0.3-1.5,1s0.6,1,1.5,1c0.8,0,1.4-0.3,1.4-1S204.8,163,204,163z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.6,160.1c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C207.2,159,206,160.1,204.6,160.1z M203.8,156.6c-0.4-0.2-1.1,0.1-1.1,1\n\t\t\t\tc0,0.6,0.4,1.1,1.1,1.3V156.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.8,150.9c-1.7,0-2.7-1.4-2.7-2.5c0-1.2,0.5-1.7,1-1.7c0.2,0,0.6,0.1,0.6,0.6\n\t\t\t\tc0,0.3-0.3,0.5-0.6,0.5c-0.5,0-0.6,0.3-0.6,0.5c0,0.7,1,1.3,2.2,1.3c1.1,0,1.9-0.5,1.9-1.7c0-0.5-0.2-1-0.6-1.5l0.3-0.2\n\t\t\t\tc0.6,0.5,0.9,1.3,0.9,2.1C207.2,150,206.2,150.9,204.8,150.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.6,145.4c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C207.2,144.4,206,145.4,204.6,145.4z M203.8,141.9\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V141.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,139.9c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h6.7\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2L206.7,139.9L206.7,139.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.6,135.8c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C207.2,134.7,206,135.8,204.6,135.8z M203.8,132.2\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V132.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M200.6,129.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h4.6c-0.5-0.4-0.8-1-0.8-1.7\n\t\t\t\tc0-1.3,1.1-2.4,2.6-2.4c1.4,0,2.6,1.1,2.6,2.4c0,0.7-0.4,1.4-0.9,1.8l0.9,0.6v0.3L200.6,129.4L200.6,129.4z M204.6,125.4\n\t\t\t\tc-1.1,0-2,0.5-2,1.6c0,0.6,0.4,1.2,1.1,1.4h1.8c0.7-0.3,1.1-0.8,1.1-1.4C206.6,125.9,205.8,125.4,204.6,125.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,123c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.6-0.3-1-0.9-1-1.5c0-0.8,0.5-1.1,0.9-1.1c0.3,0,0.7,0.1,0.7,0.6c0,0.3-0.2,0.5-0.5,0.5\n\t\t\t\ts-0.5,0.2-0.5,0.4c0,0.3,0.5,1.1,1.6,1.1h0.8c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H206.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206,117.5c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC207.2,116.9,206.7,117.5,206,117.5z M205.8,114.5h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC206.5,115.5,206.4,115.1,205.8,114.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M205.6,111.2h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5V109h0.5v1.2h2.8c0.7,0,1-0.2,1-0.6\n\t\t\t\tc0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C207.2,110.7,206.7,111.2,205.6,111.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,107.7c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h3\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H206.7z M200.1,106.7c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6\n\t\t\t\tC200.7,106.4,200.4,106.7,200.1,106.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.6,103.5c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8\n\t\t\t\tS206,103.5,204.6,103.5z M204.6,99c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7C206.7,99.6,205.8,99,204.6,99z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,96.7c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.9c0-1.3,0.9-1.8,2.1-1.8h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3V93h-0.3c0-0.9-0.2-1.1-1.6-1.1\n\t\t\t\th-0.8c-0.9,0-1.5,0.3-1.5,1.2c0,0.8,0.6,1.6,1.4,1.6h0.9c1.4,0,1.6-0.1,1.6-1h0.3v3.1L206.7,96.7L206.7,96.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.6,85.5c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8S206,85.5,204.6,85.5z\n\t\t\t\t M204.6,81c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7C206.7,81.5,205.8,81,204.6,81z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,78.7c0-0.9-0.2-1.1-1.6-1.1h-2.2v1.1h-0.5v-1.1H201c-1.9,0-2.6-1.1-2.6-2.3\n\t\t\t\tc0-0.9,0.6-1.4,1-1.4c0.3,0,0.5,0.2,0.5,0.5c0,0.7-1.1,0.3-1.1,1.2c0,0.7,0.6,1,2.2,1h1.3v-1.4h0.5v1.4h2.2\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2C206.9,78.7,206.7,78.7,206.7,78.7z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M255.5,254.1c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8\n\t\t\t\tS256.9,254.1,255.5,254.1z M255.5,249.6c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7S256.6,249.6,255.5,249.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.5,247.3c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.9c0-1.3,0.9-1.8,2.1-1.8h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2h-0.3c0-0.9-0.2-1.1-1.6-1.1\n\t\t\t\th-0.8c-0.9,0-1.5,0.3-1.5,1.2c0,0.8,0.6,1.6,1.4,1.6h0.9c1.4,0,1.6-0.1,1.6-1h0.3v3.1h-0.3L257.5,247.3L257.5,247.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M256.5,235.6h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8\n\t\t\t\tc0.7,0,1-0.2,1-0.6c0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C258,235.1,257.5,235.6,256.5,235.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.5,232.4c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h4.7\n\t\t\t\tc-0.5-0.4-1-1-1-1.8c0-1.3,0.9-1.7,2.1-1.7h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.1h-0.3c0-0.9-0.2-1-1.6-1h-0.8\n\t\t\t\tc-0.9,0-1.5,0.3-1.5,1.1c0,0.7,0.6,1.5,1.4,1.5h0.9c1.5,0,1.6-0.1,1.6-0.9h0.3v3h-0.3L257.5,232.4L257.5,232.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M255.5,224.6c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C258.1,223.6,256.9,224.6,255.5,224.6z M254.6,221.1\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V221.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.8,212.2v2.9h-0.3l-1.9-2.5c-0.9-1.1-1.6-1.3-2.1-1.3c-0.8,0-1.3,0.6-1.3,1.5\n\t\t\t\tc0,1,1,1.9,2.1,1.2l0.4,0.4c-1,1.7-3.1,0.8-3.1-1.6c0-1.4,0.7-2.7,1.9-2.7c1.1,0,2,1.3,2,1.3l1.7,2.2V210l1.9,0.4v0.3\n\t\t\t\tC258,210.6,257.8,210.8,257.8,212.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M259.9,206.5c0-1.2-0.2-1.3-1.6-1.3h-1.1v3.2H257l-6-3.9v-0.3h5.8V204c0-1.3-0.3-1.4-1.1-1.6\n\t\t\t\tl-0.3-0.1V202l1.8,0.1v2h1.1c1.4,0,1.6-0.2,1.6-1.3h0.3v3.7H259.9L259.9,206.5z M256.7,205.2H253l3.7,2.4V205.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M256.5,200.2h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5V198h0.5v1.2h2.8c0.7,0,1-0.2,1-0.6\n\t\t\t\tc0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C258,199.7,257.5,200.2,256.5,200.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.5,196.9c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h4.7\n\t\t\t\tc-0.5-0.4-1-1-1-1.8c0-1.3,0.9-1.7,2.1-1.7h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.1h-0.3c0-0.9-0.2-1-1.6-1h-0.8\n\t\t\t\tc-0.9,0-1.5,0.3-1.5,1.1c0,0.7,0.6,1.5,1.4,1.5h0.9c1.5,0,1.6-0.1,1.6-0.9h0.3v3h-0.3L257.5,196.9L257.5,196.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M255.5,185.9c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8\n\t\t\t\tS256.9,185.9,255.5,185.9z M255.5,181.4c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7S256.6,181.4,255.5,181.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.5,179.1c0-0.9-0.2-1.1-1.6-1.1h-2.2v1.1h-0.5V178h-1.3c-1.9,0-2.6-1.1-2.6-2.3\n\t\t\t\tc0-0.9,0.6-1.4,1-1.4c0.3,0,0.5,0.2,0.5,0.5c0,0.7-1.1,0.3-1.1,1.2c0,0.7,0.6,1.1,2.2,1.1h1.3v-1.4h0.5v1.4h2.2\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2L257.5,179.1L257.5,179.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M255,171v-0.3c0,0,2.5,0,2.5-2.6c0-1-0.6-1.8-1.5-1.8c-0.6,0-1.2,0.6-1.7,1.6l-0.7,1.3\n\t\t\t\tc-0.4,0.8-1.2,1.6-2.3,1.6c-1.2,0-2.1-1-2.1-2.3c0-0.8,0.3-1.3,0.6-1.7c-0.1-0.2-0.4-0.3-0.6-0.4v-0.3h3.1v0.3\n\t\t\t\tc-1.1,0.1-2.5,0.5-2.5,2.1c0,0.8,0.5,1.4,1.2,1.4s1.1-0.5,1.7-1.7l0.7-1.3c0.5-1.1,1.4-1.5,2.1-1.5c1.5,0,2.5,1.2,2.5,2.7\n\t\t\t\tc0,1.1-0.6,1.7-0.7,2.2c0.1,0.2,0.4,0.3,0.7,0.4v0.3H255z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M255.5,164c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C258.1,163,256.9,164,255.5,164z M254.6,160.5c-0.4-0.2-1.1,0.1-1.1,1\n\t\t\t\tc0,0.6,0.4,1.1,1.1,1.3V160.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M261,158.5c0-0.9-0.2-1.1-1.6-1.1h-4.2c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.6-0.2,0.9-0.2c-0.5-0.4-0.9-1-0.9-1.7c0-1.3,1.1-2.4,2.6-2.4c1.4,0,2.6,1.1,2.6,2.4c0,0.7-0.3,1.3-0.8,1.7h2.2\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H261z M255.5,153.4c-1.1,0-2,0.5-2,1.6c0,0.6,0.4,1.2,1.1,1.4h1.8c0.7-0.3,1.1-0.8,1.1-1.4\n\t\t\t\tC257.5,153.9,256.6,153.4,255.5,153.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M256.5,150.5h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8\n\t\t\t\tc0.7,0,1-0.2,1-0.6c0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C258,150,257.5,150.5,256.5,150.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M255.5,146.8c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C258.1,145.8,256.9,146.8,255.5,146.8z M254.6,143.3\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V143.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.5,141c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.8c0-0.9,0.4-1.3,1.1-1.5c-0.5-0.3-1.1-1.1-1.1-2c0-1.2,0.9-1.6,2.1-1.6h0.9\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3h-0.3c0-0.8-0.2-0.9-1.6-0.9h-0.8c-0.9,0-1.5,0.3-1.5,1c0,0.5,0.5,1.5,1.4,1.5h0.9\n\t\t\t\tc1.5,0,1.6-0.1,1.6-0.9h0.3v2.8h-0.3c0-0.8-0.2-0.9-1.6-0.9h-0.8c-0.9,0-1.5,0.3-1.5,1c0,0.5,0.5,1.4,1.4,1.4h0.9\n\t\t\t\tc1.5,0,1.6-0.1,1.6-0.9h0.3v3L257.5,141L257.5,141z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M251.5,129.5c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h4.6c-0.5-0.4-0.8-1-0.8-1.7\n\t\t\t\tc0-1.3,1.1-2.4,2.6-2.4c1.4,0,2.6,1.1,2.6,2.4c0,0.7-0.4,1.4-0.9,1.8l0.9,0.6v0.3L251.5,129.5L251.5,129.5z M255.5,125.5\n\t\t\t\tc-1.1,0-2,0.5-2,1.6c0,0.6,0.4,1.2,1.1,1.4h1.8c0.7-0.3,1.1-0.8,1.1-1.4C257.5,126,256.6,125.5,255.5,125.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M255.5,123c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C258.1,122,256.9,123,255.5,123z M254.6,119.5c-0.4-0.2-1.1,0.1-1.1,1\n\t\t\t\tc0,0.6,0.4,1.1,1.1,1.3V119.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.5,117.3c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.6-0.3-1-0.9-1-1.5c0-0.8,0.5-1.1,0.9-1.1c0.3,0,0.7,0.1,0.7,0.6c0,0.3-0.2,0.5-0.5,0.5\n\t\t\t\ts-0.5,0.2-0.5,0.4c0,0.3,0.5,1.1,1.6,1.1h0.8c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H257.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M259.3,111.6c-0.5-0.5-0.9-0.7-1.5-0.8v0.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7\n\t\t\t\ts0.3-0.8,0.9-0.8s1.6,0.4,2.1,1.3L259.3,111.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.8,101.4v2.9h-0.3l-1.9-2.5c-0.9-1.1-1.6-1.3-2.1-1.3c-0.8,0-1.3,0.6-1.3,1.5\n\t\t\t\tc0,1,1,1.9,2.1,1.2l0.4,0.4c-1,1.7-3.1,0.8-3.1-1.6c0-1.4,0.7-2.7,1.9-2.7c1.1,0,2,1.3,2,1.3l1.7,2.2v-3.6l1.9,0.3v0.3\n\t\t\t\tC258,99.8,257.8,100,257.8,101.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M254.8,97.2c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3S256.6,97.2,254.8,97.2z\n\t\t\t\t M254.8,91.6c-1.3,0-2.5,1.1-2.5,2.4s1.1,2.4,2.5,2.4c1.4,0,2.5-1.1,2.5-2.4C257.3,92.6,256.2,91.6,254.8,91.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.5,89.1c0-1.2-0.2-1.3-1.6-1.3h-2.2c-1.4,0-1.6,0.2-1.6,1.3h-0.3v-3.7h0.3\n\t\t\t\tc0,1.2,0.2,1.3,1.6,1.3h2.2c1.4,0,1.6-0.2,1.6-1.3h0.3v3.7H257.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M259.6,82.9l-6.8-3.3v2.3c0,1.3,0.3,1.4,1.1,1.6l0.3,0.1v0.3l-3.4-0.6V83c0.9,0,1.1-0.2,1.1-1.6\n\t\t\t\tv-2.5h0.4l7.6,3.1c0.5,0.2,0.8,0.4,0.7,0.8C260.4,82.9,260.1,83.2,259.6,82.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M256.8,74.2c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC258,73.6,257.6,74.2,256.8,74.2z M256.7,71.2h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC257.4,72.2,257.3,71.8,256.7,71.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M256.5,67.9h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8c0.7,0,1-0.2,1-0.6\n\t\t\t\tc0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C258,67.4,257.5,67.9,256.5,67.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,267c0-1.2-0.2-1.3-1.6-1.3h-4.6c-1.4,0-1.6,0.2-1.6,1.3h-0.3v-3.8h0.3\n\t\t\t\tc0,1.2,0.2,1.3,1.6,1.3h4.3c1.4,0,1.6-0.2,1.6-1.3v-1.7c0-1.3-0.3-1.4-1.1-1.6l-0.3-0.1v-0.3l1.9,0.1v7.3h-0.2L274.3,267\n\t\t\t\tL274.3,267z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M273.6,258.8c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC274.8,258.2,274.4,258.8,273.6,258.8z M273.5,255.8h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC274.2,256.8,274.1,256.4,273.5,255.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,253.1c0-0.9-0.2-1.1-1.6-1.1H272c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.9c0-1.3,0.9-1.8,2.1-1.8h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2h-0.3c0-0.9-0.2-1.1-1.6-1.1\n\t\t\t\th-0.8c-0.9,0-1.5,0.3-1.5,1.2c0,0.8,0.6,1.6,1.4,1.6h0.9c1.4,0,1.6-0.1,1.6-1h0.3v3.1h-0.3L274.3,253.1L274.3,253.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M275.7,244.7l0.2-0.3c1.3,1.2,1.9-0.2,1.9-1.3c0-0.9-0.4-1.7-1.1-1.7s-0.9,0.7-1,1.9\n\t\t\t\tc-0.1,1.1-0.5,2-1.3,2c-0.5,0-0.9-0.4-1.1-1.2c-0.3,0.7-1,1.2-1.7,1.2c-1.1,0-1.9-0.9-1.9-2.1c0-0.6,0.2-1.1,0.5-1.4\n\t\t\t\tc-0.3-0.3-0.5-0.8-0.5-1.1c0-1,1.1-1,1.2-0.5c0,0.6-0.6,0.3-0.6,0.8c0,0.1,0.1,0.3,0.2,0.4c0.3-0.3,0.7-0.4,1.1-0.4\n\t\t\t\tc1,0,1.8,0.9,1.9,1.8c0.1,0.6,0.2,1.6,0.6,1.6s0.5-0.8,0.5-1.3c0.2-1.9,1-2.5,1.8-2.5c1.2,0,1.9,1.1,1.9,2.5\n\t\t\t\tC278.4,245.5,276.6,246.5,275.7,244.7z M271.6,242.2c-0.8,0-1.5,0.3-1.5,1s0.6,1,1.5,1c0.8,0,1.4-0.3,1.4-1\n\t\t\t\tC273.1,242.5,272.5,242.2,271.6,242.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M273.3,238.9h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8\n\t\t\t\tc0.7,0,1-0.2,1-0.6c0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C274.8,238.3,274.3,238.9,273.3,238.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.3,235.2c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8\n\t\t\t\tS273.7,235.2,272.3,235.2z M272.3,230.6c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7\n\t\t\t\tC274.3,231.2,273.4,230.6,272.3,230.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,228.3c0-0.9-0.2-1.1-1.6-1.1H272c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.9c0-1.3,0.9-1.8,2.1-1.8h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2h-0.3c0-0.9-0.2-1.1-1.6-1.1\n\t\t\t\th-0.8c-0.9,0-1.5,0.3-1.5,1.2c0,0.8,0.6,1.6,1.4,1.6h0.9c1.4,0,1.6-0.1,1.6-1h0.3v3.1h-0.3L274.3,228.3L274.3,228.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M266.7,221c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c0.4,0,1,0.4,2.5,0.6v0.2\n\t\t\t\tC267.6,220.5,267,221,266.7,221z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.8,218.4v-0.3c0.6,0,1.6-0.5,1.6-1.5c0-0.5-0.3-0.8-0.7-0.8c-0.4,0-0.6,0.3-0.9,0.8l-0.4,0.8\n\t\t\t\tc-0.4,0.7-1,0.9-1.4,0.9c-0.8,0-1.3-0.7-1.3-1.4s0.3-1,0.3-1.2c0-0.1-0.1-0.1-0.3-0.1v-0.3h1.6v0.3c-0.6,0-1.2,0.4-1.2,1.1\n\t\t\t\tc0,0.5,0.3,0.7,0.6,0.7c0.3,0,0.5-0.2,0.9-0.9l0.4-0.7c0.4-0.6,0.8-1,1.3-1c0.9,0,1.5,0.8,1.5,1.7c0,0.6-0.4,1.1-0.4,1.3\n\t\t\t\tc0,0.1,0.1,0.2,0.4,0.2v0.3L272.8,218.4L272.8,218.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,210.5c0-1.2-0.2-1.3-1.6-1.3h-4.6c-1.4,0-1.6,0.2-1.6,1.3h-0.3v-3.8h0.3\n\t\t\t\tc0,1.2,0.2,1.3,1.6,1.3h1.8v-4.7h-1.8c-1.4,0-1.6,0.2-1.6,1.3h-0.3v-3.8h0.3c0,1.2,0.2,1.3,1.6,1.3h4.6c1.4,0,1.6-0.2,1.6-1.3\n\t\t\t\th0.3v3.8h-0.3c0-1.2-0.2-1.3-1.6-1.3h-2.3v4.7h2.3c1.4,0,1.6-0.2,1.6-1.3h0.3v3.8H274.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.3,199.8c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8\n\t\t\t\tS273.7,199.8,272.3,199.8z M272.3,195.3c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7S273.4,195.3,272.3,195.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.8,192.2h-0.9c-1.4,0-1.6,0.2-1.6,1.1H270v-2.1h2.7c0.9,0,1.5-0.3,1.5-1.1\n\t\t\t\tc0-0.5-0.5-1.5-1.4-1.5h-0.9c-1.4,0-1.6,0.2-1.6,1.1H270v-2.1h2.7c1.3,0,1.5-0.2,1.5-1h0.3l0.4,1.7c-0.1,0.1-0.6,0.2-0.9,0.2\n\t\t\t\tc0.4,0.4,0.9,1,0.9,1.8C274.9,191.7,274,192.2,272.8,192.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.8,185.6v-0.3c0.6,0,1.6-0.5,1.6-1.5c0-0.5-0.3-0.8-0.7-0.8c-0.4,0-0.6,0.3-0.9,0.8l-0.4,0.8\n\t\t\t\tc-0.4,0.7-1,0.9-1.4,0.9c-0.8,0-1.3-0.7-1.3-1.4s0.3-1,0.3-1.2c0-0.1-0.1-0.1-0.3-0.1v-0.3h1.6v0.3c-0.6,0-1.2,0.4-1.2,1.1\n\t\t\t\tc0,0.5,0.3,0.7,0.6,0.7c0.3,0,0.5-0.2,0.9-0.9l0.4-0.7c0.4-0.6,0.8-1,1.3-1c0.9,0,1.5,0.8,1.5,1.7c0,0.6-0.4,1.1-0.4,1.3\n\t\t\t\tc0,0.1,0.1,0.2,0.4,0.2v0.3L272.8,185.6L272.8,185.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.3,180.8c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C274.9,179.7,273.7,180.8,272.3,180.8z M271.4,177.3\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V177.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,171.8c0-1.2-0.2-1.3-1.6-1.3h-4.6c-1.4,0-1.6,0.2-1.6,1.3h-0.3V168h0.3\n\t\t\t\tc0,1.2,0.2,1.3,1.6,1.3h1.8v-4.7h-1.8c-1.4,0-1.6,0.2-1.6,1.3h-0.3v-3.8h0.3c0,1.2,0.2,1.3,1.6,1.3h4.6c1.4,0,1.6-0.2,1.6-1.3\n\t\t\t\th0.3v3.8h-0.3c0-1.2-0.2-1.3-1.6-1.3h-2.3v4.7h2.3c1.4,0,1.6-0.2,1.6-1.3h0.3v3.8H274.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.3,161.1c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8\n\t\t\t\tS273.7,161.1,272.3,161.1z M272.3,156.5c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7\n\t\t\t\tC274.3,157.1,273.4,156.5,272.3,156.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M273.3,153.6h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8\n\t\t\t\tc0.7,0,1-0.2,1-0.6c0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C274.8,153.1,274.3,153.6,273.3,153.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.3,149.9c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C274.9,148.9,273.7,149.9,272.3,149.9z M271.4,146.4\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V146.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,144.4c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h6.7\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2L274.3,144.4L274.3,144.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M276.1,139.6c-0.5-0.5-0.9-0.7-1.5-0.8v0.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7\n\t\t\t\ts0.3-0.8,0.9-0.8s1.6,0.4,2.1,1.3L276.1,139.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,132.8c0-1.2-0.2-1.3-1.6-1.3h-4.6c-1.4,0-1.6,0.2-1.6,1.3h-0.3V129h0.3\n\t\t\t\tc0,1.2,0.2,1.3,1.6,1.3h2l-2.5-2.9c-0.8-0.9-1.1-0.9-1.1-0.1h-0.3v-3.2h0.3c0,1.1,0.3,1.6,1.1,2.6l2.1,2.5l3.8-4.3\n\t\t\t\tc0.4-0.5,0.8-1.4,0.8-1.8h0.3v3.9h-0.3c0-0.9-0.3-1.1-0.8-0.5l-3.1,3.5l0.3,0.4h1.9c1.4,0,1.6-0.2,1.6-1.3h0.3v3.8L274.3,132.8\n\t\t\t\tL274.3,132.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,122.5c0-0.9-0.2-1.1-1.6-1.1H272c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h3\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H274.3z M267.7,121.6c-0.3,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6\n\t\t\t\tS268.1,121.6,267.7,121.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,118.8c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h6.7\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H274.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,115.1c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3L266,113h6l-1-1.2\n\t\t\t\tc-0.4-0.5-0.7-0.3-0.7,0.4H270v-2.8h0.3c0,0,0.1,0.9,0.5,1.5l1,1.2l2.3-2.3c0.2-0.2,0.3-0.6,0.3-0.8h0.3v1.6l-2.3,2.3l0.1,0.2\n\t\t\t\th0.3c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2L274.3,115.1L274.3,115.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.3,108.5c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C274.9,107.4,273.7,108.5,272.3,108.5z M271.4,105\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V105z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,102.7c0-0.9-0.2-1.1-1.6-1.1H272c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.9c0-1.3,0.9-1.8,2.1-1.8h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3V99h-0.3c0-0.9-0.2-1.1-1.6-1.1\n\t\t\t\th-0.8c-0.9,0-1.5,0.3-1.5,1.2c0,0.8,0.6,1.6,1.4,1.6h0.9c1.4,0,1.6-0.1,1.6-1h0.3v3.1L274.3,102.7L274.3,102.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,94.9c0-0.9-0.2-1.1-1.6-1.1H272c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.9c0-1.3,0.9-1.8,2.1-1.8h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2h-0.3c0-0.9-0.2-1.1-1.6-1.1\n\t\t\t\th-0.8c-0.9,0-1.5,0.3-1.5,1.2c0,0.8,0.6,1.6,1.4,1.6h0.9c1.4,0,1.6-0.1,1.6-1h0.3V95L274.3,94.9L274.3,94.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M278,87c-0.5,0-0.5-0.6-1.6-1.1l-1.8-0.7l-3.5,1.6c-0.6,0.3-0.8,0.5-0.8,0.9H270v-2.5h0.3\n\t\t\t\tc0,0.6,0.1,0.8,0.8,0.4l2.2-1l-2.2-0.9c-0.6-0.3-0.8-0.2-0.8,0.4H270v-2h0.3c0,0.4,0.2,0.7,0.8,1l6.8,2.7\n\t\t\t\tc0.3,0.1,0.5,0.3,0.5,0.5C278.4,86.7,278.3,87,278,87z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M270.4,78.1c-2.4,0-4.4-1.9-4.4-4.3c0-1,0.4-1.9,1.2-2.6c-0.1-0.2-0.4-0.4-0.8-0.5v-0.3h3.1v0.3\n\t\t\t\tc-1.8,0.4-2.9,1.5-2.9,3c0,2.2,2.2,3.1,3.9,3.1c1.7,0,3.9-0.8,3.9-3.1c0-1.6-1.1-2.6-2.9-3v-0.3h3.1v0.3\n\t\t\t\tc-0.3,0.1-0.7,0.3-0.8,0.5c0.7,0.7,1.2,1.6,1.2,2.6C274.9,76.2,272.9,78.1,270.4,78.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,68.9c0-0.9-0.2-1.1-1.6-1.1H272c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h3\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H274.3z M267.7,67.9c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6\n\t\t\t\tC268.4,67.6,268.1,67.9,267.7,67.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M273.3,64.3h-2.8V65h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8c0.7,0,1-0.2,1-0.6\n\t\t\t\tc0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C274.8,63.7,274.3,64.3,273.3,64.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M278,60.5c-0.5,0-0.5-0.6-1.6-1.1l-1.8-0.7l-3.5,1.6c-0.6,0.3-0.8,0.5-0.8,0.9H270v-2.5h0.3\n\t\t\t\tc0,0.6,0.1,0.8,0.8,0.4l2.2-1l-2.2-0.9c-0.6-0.3-0.8-0.2-0.8,0.4H270v-2h0.3c0,0.4,0.2,0.7,0.8,1l6.8,2.7\n\t\t\t\tc0.3,0.1,0.5,0.3,0.5,0.5C278.4,60.2,278.3,60.5,278,60.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274,55.2c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8c0.4,0,0.8,0.3,0.8,0.8\n\t\t\t\tC274.7,54.8,274.4,55.2,274,55.2z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,282.8c0-1.5-0.3-1.7-2.1-1.7h-5.9c-1.8,0-2.1,0.2-2.1,1.7h-0.4V278c0-2.5,1.4-3.9,3-3.9\n\t\t\t\tc1.7,0,3,1.4,3,3.9v1.6h2.3c1.8,0,2.1-0.2,2.1-1.7h0.4v4.9H233.2z M228.1,278.1c0-1.6-1.1-2.3-2.4-2.3c-1.3,0-2.4,0.7-2.4,2.3\n\t\t\t\tv1.6h4.8L228.1,278.1L228.1,278.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M232.3,273.5c-1.5,0-2.2-1.8-2.6-3.8c-1.4,0-1.9,0.2-1.9,1.2c0,0.4,0.3,1,0.9,1\n\t\t\t\tc0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6c-0.9,0-1.4-1.1-1.4-2.3c0-1.7,0.7-2.5,2.4-2.5h2.7c0.5,0,0.7-0.1,0.7-0.4\n\t\t\t\tc0-0.2-0.1-0.4-0.3-0.5l0.3-0.3c0.4,0.3,0.6,0.8,0.6,1.2c0,0.7-0.4,1.1-1,1.2c0.8,0.9,1.1,1.5,1.1,2.3\n\t\t\t\tC233.8,272.8,233.2,273.5,232.3,273.5z M232.1,269.7h-1.8c0.4,1.7,1,2.5,1.8,2.5c0.6,0,0.9-0.4,0.9-0.8\n\t\t\t\tC233,271,232.8,270.5,232.1,269.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M231.8,265.5h-3.6v0.9h-0.4c-0.2-1.1-1-1.5-2.2-1.6v-0.6h2v-1.6h0.6v1.6h3.6\n\t\t\t\tc0.8,0,1.3-0.2,1.3-0.8c0-0.3-0.2-0.8-0.6-1.2l0.3-0.3c0.6,0.5,1,1.3,1,1.9C233.8,264.8,233.2,265.5,231.8,265.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,261c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.4\n\t\t\t\tc0.2-0.1,0.9-0.3,1.3-0.3c-0.7-0.4-1.3-1.2-1.3-1.9c0-1,0.7-1.4,1.1-1.4c0.4,0,0.8,0.2,0.8,0.7c0,0.3-0.3,0.6-0.6,0.6\n\t\t\t\tc-0.4,0-0.6,0.2-0.6,0.6s0.7,1.4,2.1,1.4h1c1.8,0,2.1-0.2,2.1-1.4h0.4v4.1L233.2,261L233.2,261z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,253.9c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h3.8\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1L233.2,253.9L233.2,253.9z M224.7,252.6c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8\n\t\t\t\tc0.5,0,0.8,0.4,0.8,0.8S225.1,252.6,224.7,252.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M230.7,248.6c-2.1,0-3.5-1.7-3.5-3.2s0.6-2.1,1.3-2.1c0.3,0,0.8,0.2,0.8,0.8\n\t\t\t\tc0,0.4-0.3,0.7-0.7,0.7c-0.6,0-0.8,0.3-0.8,0.6c0,1,1.2,1.7,2.9,1.7c1.4,0,2.4-0.7,2.4-2.2c0-0.6-0.3-1.3-0.8-1.9l0.4-0.3\n\t\t\t\tc0.7,0.7,1.2,1.7,1.2,2.7C233.8,247.4,232.5,248.6,230.7,248.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,242c0-1.2-0.3-1.4-2.1-1.4h-5.7c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h7.7l-1.2-1.5\n\t\t\t\tc-0.5-0.6-1-0.3-1,0.5h-0.4v-3.6h0.4c0,0,0.1,1.2,0.6,1.9l1.3,1.5l2.9-2.9c0.3-0.3,0.4-0.8,0.4-1.1h0.4v2l-3,2.9l0.2,0.2h0.3\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1h-0.3L233.2,242L233.2,242z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,229.6c0-1.5-0.3-1.7-2.1-1.7h-5.9c-1.8,0-2.1,0.2-2.1,1.7h-0.4v-4.9h0.4\n\t\t\t\tc0,1.5,0.3,1.7,2.1,1.7h2.5l-3.2-3.7c-1-1.1-1.5-1.2-1.5-0.1h-0.4v-4.2h0.4c0,1.4,0.4,2,1.5,3.3l2.7,3.2l4.8-5.6\n\t\t\t\tc0.6-0.7,1-1.8,1-2.3h0.4v5.1H233c0-1.2-0.4-1.4-1-0.7l-3.9,4.6l0.4,0.5h2.5c1.8,0,2.1-0.2,2.1-1.7h0.4v4.9h-0.3V229.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,216.4c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h3.8\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1L233.2,216.4L233.2,216.4z M224.7,215.2c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8\n\t\t\t\tc0.5,0,0.8,0.4,0.8,0.8S225.1,215.2,224.7,215.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,211.3c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.4\n\t\t\t\tc0.2-0.1,0.9-0.3,1.3-0.3c-0.7-0.4-1.3-1.2-1.3-1.9c0-1,0.7-1.4,1.1-1.4c0.4,0,0.8,0.2,0.8,0.7c0,0.3-0.3,0.6-0.6,0.6\n\t\t\t\tc-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.7,1.4,2.1,1.4h1c1.8,0,2.1-0.2,2.1-1.4h0.4v4.1L233.2,211.3L233.2,211.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M229,203.7c-0.8,0.3-1.1,0.6-1.1,1.2h-0.4v-3.2h0.4c0,0.8,0.2,0.9,1.1,0.6l3-1.2l-4.4-1.9v-0.4\n\t\t\t\tl4.4-1.8l-3-1.2c-0.8-0.3-1.1-0.3-1.1,0.5h-0.4v-2.5h0.4c0,0.6,0.3,0.9,1.1,1.3l4.9,2.1v0.4l-4.3,1.8l4.3,1.8v0.4L229,203.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M232.3,193.3c-1.5,0-2.2-1.8-2.6-3.8c-1.4,0-1.9,0.2-1.9,1.2c0,0.4,0.3,1,0.9,1\n\t\t\t\tc0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6c-0.9,0-1.4-1.1-1.4-2.3c0-1.7,0.7-2.5,2.4-2.5h2.7c0.5,0,0.7-0.1,0.7-0.4\n\t\t\t\tc0-0.2-0.1-0.4-0.3-0.5l0.3-0.3c0.4,0.3,0.6,0.8,0.6,1.2c0,0.7-0.4,1.1-1,1.2c0.8,0.9,1.1,1.5,1.1,2.3\n\t\t\t\tC233.8,192.5,233.2,193.3,232.3,193.3z M232.1,189.4h-1.8c0.4,1.7,1,2.5,1.8,2.5c0.6,0,0.9-0.4,0.9-0.8\n\t\t\t\tC233,190.7,232.8,190.3,232.1,189.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,186c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.4\n\t\t\t\tc0.2-0.1,0.9-0.3,1.3-0.3c-0.6-0.5-1.3-1.3-1.3-2.5c0-1.6,1.2-2.3,2.7-2.3h1.1c1.8,0,2.1-0.2,2.1-1.4h0.4v4.1h-0.4\n\t\t\t\tc0-1.2-0.3-1.4-2.1-1.4h-1c-1.2,0-1.9,0.4-1.9,1.5c0,1,0.8,2.1,1.8,2.1h1.2c1.9,0,2.1-0.1,2.1-1.3h0.4v4h-0.4L233.2,186\n\t\t\t\tL233.2,186z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M232.3,171.6c-1.5,0-2.2-1.8-2.6-3.8c-1.4,0-1.9,0.2-1.9,1.2c0,0.4,0.3,1,0.9,1\n\t\t\t\tc0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6c-0.9,0-1.4-1.1-1.4-2.3c0-1.7,0.7-2.5,2.4-2.5h2.7c0.5,0,0.7-0.1,0.7-0.4\n\t\t\t\tc0-0.2-0.1-0.4-0.3-0.5l0.3-0.3c0.4,0.3,0.6,0.8,0.6,1.2c0,0.7-0.4,1.1-1,1.2c0.8,0.9,1.1,1.5,1.1,2.3\n\t\t\t\tC233.8,170.9,233.2,171.6,232.3,171.6z M232.1,167.8h-1.8c0.4,1.7,1,2.5,1.8,2.5c0.6,0,0.9-0.4,0.9-0.8\n\t\t\t\tC233,169.1,232.8,168.6,232.1,167.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,164.4c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.4\n\t\t\t\tc0.2-0.1,0.9-0.3,1.3-0.3c-0.6-0.5-1.3-1.3-1.3-2.5c0-1.6,1.2-2.3,2.7-2.3h1.1c1.8,0,2.1-0.2,2.1-1.4h0.4v4.1h-0.4\n\t\t\t\tc0-1.2-0.3-1.4-2.1-1.4h-1c-1.2,0-1.9,0.4-1.9,1.5c0,1,0.8,2.1,1.8,2.1h1.2c1.9,0,2.1-0.1,2.1-1.3h0.4v4h-0.4L233.2,164.4\n\t\t\t\tL233.2,164.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M230.5,154.2c-1.8,0-3.3-1.4-3.3-3.1c0-0.9,0.4-1.7,1.1-2.2h-2.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4\n\t\t\t\tl-0.5-2.7h8.6c1.7,0,1.9-0.3,1.9-1.2h0.3l0.5,2.2c-0.2,0.1-0.8,0.2-1,0.3c0.6,0.5,1.1,1.2,1.1,2.2\n\t\t\t\tC233.8,152.8,232.3,154.2,230.5,154.2z M231.7,148.9h-2.3c-0.8,0.3-1.4,1-1.4,1.8c0,1.4,1.1,2.1,2.6,2.1s2.6-0.6,2.6-2.1\n\t\t\t\tC233.1,149.9,232.5,149.2,231.7,148.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M224.7,140.2c-1.3,0.4-1.6,0.6-1.6,2.1h-0.4v-5h0.4c0,1.5,0.4,1.7,1.4,1.4l6.2-2l-8-2.5V134\n\t\t\t\tl7.9-2.5l-6.2-2c-1-0.3-1.4,0-1.4,1.3h-0.4v-4.1h0.4c0,1.5,0.4,1.8,1.6,2.1l9.2,2.9v0.2l-8,2.5l8,2.5v0.2L224.7,140.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,127.2c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h3.8\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1H233.2z M224.7,125.9c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8c0.5,0,0.8,0.4,0.8,0.8\n\t\t\t\tC225.5,125.6,225.1,125.9,224.7,125.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,122.4c0-1.2-0.3-1.4-2.1-1.4h-5.7c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h8.6\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1H233.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,117.6c0-1.2-0.3-1.4-2.1-1.4h-5.7c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h8.6\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1H233.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,112.4c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h3.8\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1H233.2z M224.7,111.1c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8c0.5,0,0.8,0.4,0.8,0.8\n\t\t\t\tC225.5,110.8,225.1,111.1,224.7,111.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M232.3,107.1c-1.5,0-2.2-1.8-2.6-3.8c-1.4,0-1.9,0.2-1.9,1.2c0,0.4,0.3,1,0.9,1\n\t\t\t\tc0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6c-0.9,0-1.4-1.1-1.4-2.3c0-1.7,0.7-2.5,2.4-2.5h2.7c0.5,0,0.7-0.1,0.7-0.4\n\t\t\t\tc0-0.2-0.1-0.4-0.3-0.5l0.3-0.3c0.4,0.3,0.6,0.8,0.6,1.2c0,0.7-0.4,1.1-1,1.2c0.8,0.9,1.1,1.5,1.1,2.2\n\t\t\t\tC233.8,106.3,233.2,107.1,232.3,107.1z M232.1,103.2h-1.8c0.4,1.7,1,2.5,1.8,2.5c0.6,0,0.9-0.4,0.9-0.8\n\t\t\t\tC233,104.5,232.8,104.1,232.1,103.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,99.8c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.4\n\t\t\t\tc0.2-0.1,0.9-0.3,1.3-0.3c-0.6-0.5-1.3-1.3-1.3-2.3c0-1.1,0.5-1.7,1.4-1.9c-0.6-0.4-1.4-1.5-1.4-2.5c0-1.6,1.2-2.1,2.7-2.1h1.1\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v3.8h-0.4c0-1-0.2-1.1-2.1-1.1h-1c-1.2,0-1.9,0.3-1.9,1.3c0,0.6,0.7,1.9,1.8,1.9h1.2\n\t\t\t\tc1.9,0,2.1-0.1,2.1-1.1h0.4v3.5h-0.4c0-1-0.2-1.1-2.1-1.1h-1c-1.2,0-1.9,0.4-1.9,1.3c0,0.6,0.7,1.9,1.8,1.9h1.2\n\t\t\t\tc1.9,0,2.1-0.1,2.1-1.1h0.4v3.8h-0.5L233.2,99.8L233.2,99.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M228.1,81.3c-3.1,0-5.7-2.7-5.7-6s2.6-6,5.7-6s5.7,2.7,5.7,6C233.8,78.6,231.3,81.3,228.1,81.3z\n\t\t\t\t M228.1,71c-2.2,0-5,1.2-5,4.3c0,3.1,2.8,4.3,5,4.3s5-1.2,5-4.3S230.4,71,228.1,71z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,67.6c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.4\n\t\t\t\tc0.2-0.1,0.9-0.3,1.3-0.3c-0.7-0.4-1.3-1.2-1.3-1.9c0-1,0.7-1.4,1.1-1.4c0.4,0,0.8,0.2,0.8,0.7c0,0.3-0.3,0.6-0.6,0.6\n\t\t\t\tc-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.7,1.4,2.1,1.4h1c1.8,0,2.1-0.2,2.1-1.4h0.4v4.1L233.2,67.6L233.2,67.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M235,59.8l0.2-0.3c1.7,1.5,2.5-0.3,2.5-1.7c0-1.1-0.5-2.2-1.4-2.2c-0.8,0-1.1,0.9-1.3,2.4\n\t\t\t\tc-0.1,1.5-0.6,2.6-1.7,2.6c-0.6,0-1.2-0.6-1.4-1.5c-0.4,0.9-1.2,1.5-2.2,1.5c-1.3,0-2.4-1.2-2.4-2.7c0-0.7,0.3-1.4,0.7-1.9\n\t\t\t\tc-0.4-0.3-0.7-1-0.7-1.3c0-1.2,1.5-1.3,1.5-0.6c0.1,0.8-0.8,0.3-0.8,1.1c0,0.1,0.1,0.4,0.3,0.6c0.4-0.3,0.9-0.5,1.5-0.5\n\t\t\t\tc1.3,0,2.3,1.2,2.4,2.3c0.1,0.8,0.3,2,0.8,2s0.6-1,0.7-1.6c0.2-2.5,1.3-3.3,2.4-3.3c1.5,0,2.4,1.4,2.4,3.2\n\t\t\t\tC238.3,60.8,236.1,62,235,59.8z M229.7,56.5c-1.1,0-1.9,0.4-1.9,1.3c0,0.9,0.8,1.3,1.9,1.3c1,0,1.9-0.4,1.9-1.3\n\t\t\t\tC231.5,56.9,230.7,56.5,229.7,56.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M232.3,52.8c-1.5,0-2.2-1.8-2.6-3.8c-1.4,0-1.9,0.2-1.9,1.2c0,0.4,0.3,1,0.9,1\n\t\t\t\tc0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6c-0.9,0-1.4-1.1-1.4-2.3c0-1.7,0.7-2.5,2.4-2.5h2.7c0.5,0,0.7-0.1,0.7-0.4\n\t\t\t\tc0-0.2-0.1-0.4-0.3-0.5l0.3-0.3c0.4,0.3,0.6,0.8,0.6,1.2c0,0.7-0.4,1.1-1,1.2c0.8,0.9,1.1,1.5,1.1,2.3\n\t\t\t\tC233.8,52,233.2,52.8,232.3,52.8z M232.1,48.9h-1.8c0.4,1.7,1,2.5,1.8,2.5c0.6,0,0.9-0.4,0.9-0.8C233,50.2,232.8,49.8,232.1,48.9\n\t\t\t\tz\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,45.5c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.4\n\t\t\t\tc0.2-0.1,0.9-0.3,1.3-0.3c-0.6-0.5-1.3-1.3-1.3-2.5c0-1.6,1.2-2.3,2.7-2.3h1.1c1.8,0,2.1-0.2,2.1-1.4h0.4v4.1h-0.4\n\t\t\t\tc0-1.2-0.3-1.4-2.1-1.4h-1c-1.2,0-1.9,0.4-1.9,1.5c0,1,0.8,2.1,1.8,2.1h1.2c1.9,0,2.1-0.1,2.1-1.3h0.4v4L233.2,45.5L233.2,45.5z\"\n\t\t\t\t/>\n\t\t</g>\n\t</g>\n</g>";
    };
    return TicketShape;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
var TicketShapeNoText = (function (_super) {
    __extends(TicketShapeNoText, _super);
    function TicketShapeNoText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TicketShapeNoText.prototype.getShape = function () {
        return "<g transform=\"translate(-263, -110) scale(1, 1)\">\n\t<g>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M625.8,115.2V18.8c-10.9,0-18.6-7.7-18.6-17.7H179.1c0,10-8.1,18.1-18.1,18.1s-18.1-8.1-18.1-18.1\n\t\t\tH18c0,10-7.7,17.7-17.7,17.7v96.4c24.4,0,45.3,20.3,45.3,45.3s-20.8,45.3-45.3,45.3v95.5c10,0,17.7,7.7,17.7,18.6h125\n\t\t\tc0-0.9,0-0.8,0-1.1c0-10,7.9-18.1,17.9-18.1s18.3,8.2,18.3,18.2c0,0.3,0,0.2,0,1.1h427.5c0-10,8.2-18.2,18.2-18.2c0.3,0,1,0,1,0\n\t\t\tV206c-25.3,0-45.3-20.3-45.3-45.3S600.4,115.2,625.8,115.2z M567.1,160.5c0,22.5,17.9,58.8,40.7,58.8v68.2c0,0-0.6,0-0.9,0\n\t\t\tc-9,0-16.4,7.4-16.4,16.4H185.9c-0.7,0-1.9,0-1.9,0c-4.5-6.1-15.7-13.4-23.4-13.4s-17.3,7.4-21.1,13.4H33.6\n\t\t\tc0-9.8-6.9-16.7-15.9-16.7v-67.8c22,0,40.7-36.3,40.7-58.8s-18.7-58.8-40.7-58.8V33c9,0,15.9-6.9,15.9-15.9h105.7\n\t\t\tc4.1,7.6,13.8,11.7,21.2,11.7c7.3,0,18.9-4.2,23.4-11.7H591c0,9,6.9,15.9,16.7,15.9v68.7C585,101.7,567.1,138,567.1,160.5z\"/>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"258.4\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"260.4\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"269.8\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"279.1\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"230.3\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"232.3\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"241.7\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"251\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"202.1\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"204.2\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"213.6\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"222.9\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"174\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"176.1\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"185.5\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"194.8\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"145.9\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"148\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"157.3\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"166.7\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"117.8\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"119.9\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"129.2\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"138.6\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"89.7\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"91.8\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"101.1\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"110.4\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"61.6\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"63.6\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"73\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"82.3\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t<rect x=\"145.1\" y=\"33.4\" style=\"fill:none;\" width=\"30\" height=\"28.1\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"35.5\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"44.9\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t\t<rect x=\"159.1\" y=\"54.2\" style=\"fill:#FFFFFF;\" width=\"3\" height=\"5.2\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M56.4,29.4c0-1.4-0.2-1.6-1.3-1.6v-0.4h3.3v0.4c-1.2,0-1.3,0.2-1.3,1.6V36h-0.4l-5.8-6.9v4.6\n\t\t\tc0,1.4,0.2,1.6,1.3,1.6v0.4h-3.3v-0.4c1.2,0,1.3-0.2,1.3-1.6v-4.3c0-1.4-0.2-1.6-1.3-1.6v-0.4h2.8l4.7,5.6V29.4z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M61.8,36c-1.6,0-2.8-1.2-2.8-2.6c0-1.4,1.3-2.6,2.8-2.6s2.8,1.1,2.8,2.6S63.3,36,61.8,36z\n\t\t\t M61.8,31.6c-0.8,0-1.1,0.9-1.1,1.9c0,1.1,0.4,1.9,1.1,1.9c0.8,0,1.1-0.9,1.1-1.9C62.9,32.4,62.6,31.6,61.8,31.6z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M68.2,35c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9C67.9,34.1,68.2,34.5,68.2,35z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M80.1,32.8c0,1.8-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3S80.1,31,80.1,32.8z M74.8,32.8\n\t\t\tc0,1.2,0.9,2.1,2,2.1s2-0.9,2-2.1c0-1.1-0.9-2.1-2-2.1C75.8,30.7,74.8,31.6,74.8,32.8z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M81.7,35.8v-0.4c1.2,0,1.3-0.2,1.3-1.6v-2c0-1.4-0.2-1.6-1.3-1.6v-0.4H86v0.4\n\t\t\tc-1.2,0-1.3,0.2-1.3,1.6v2c0,1.4,0.2,1.6,1.3,1.6v0.4H81.7z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M91.7,34.6L91.7,34.6c1.3,0,1.5-0.3,1.7-1.1l0.1-0.3h0.4l-0.1,2h-2v0.9c0,1.4,0.2,1.6,1.3,1.6v0.4\n\t\t\th-4.3v-0.4c1.2,0,1.3-0.2,1.3-1.6v-0.9h-2.9v-0.4l4.1-5.9h0.4V34.6z M90.1,31.7l-2,2.8h2V31.7z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M97.2,34.8c-0.3-0.2,0-0.5,0.3-0.8l0.8-0.8c0.5-0.5,0.7-1.2,0.7-1.6c0-0.9-0.4-1.4-1.1-1.4\n\t\t\tc-0.8,0-1.5,0.9-0.9,2l-0.7,0.4c-1.7-1-0.8-3.1,1.6-3.1c1.6,0,2.9,0.7,2.9,1.9c0,1-0.9,1.7-1.5,2.1l-0.7,0.4\n\t\t\tc1.4,0.2,2.4,1.2,2.4,2.3c0,1.5-1.4,2.3-3,2.3c-2.3,0-3.2-1.8-2.2-2c0.7-0.1,0.7,1.4,2.1,1.4c0.8,0,1.2-0.8,1.2-1.7\n\t\t\ts-0.3-1.5-1-1.9C97.8,34.5,97.6,35,97.2,34.8z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M105.2,32.6c1.6,0,2.8,1.3,2.8,2.9s-1.2,2.9-2.9,2.9c-1.4,0-2.3-1-2.3-1.6c0-0.2,0.2-0.4,0.4-0.4\n\t\t\tc0.8,0,0.3,1.4,1.8,1.4c0.7,0,1.3-1,1.3-2.3s-0.6-2.2-1.3-2.2c-0.6,0-1,0.2-1.3,1.3H103l0.4-4.8h2.4c1.3,0,1.4-0.3,1.6-1.1h0.4\n\t\t\tl-0.3,2.6H104l-0.2,2C104,32.8,104.7,32.6,105.2,32.6z\"/>\n\t</g>\n\t<g>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M114.3,292.9c0,1.4,0.2,1.6,1.3,1.6v0.4h-3.3v-0.4c1.2,0,1.3-0.2,1.3-1.6v-6.6h0.4l5.8,6.9v-4.6\n\t\t\tc0-1.4-0.2-1.6-1.3-1.6v-0.4h3.3v0.4c-1.2,0-1.3,0.2-1.3,1.6v4.3c0,1.4,0.2,1.6,1.3,1.6v0.4H119l-4.7-5.6V292.9z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M108.9,286.3c1.6,0,2.8,1.2,2.8,2.6s-1.3,2.6-2.8,2.6s-2.8-1.1-2.8-2.6\n\t\t\tC106.1,287.5,107.4,286.3,108.9,286.3z M108.9,290.8c0.8,0,1.1-0.9,1.1-1.9s-0.4-1.9-1.1-1.9c-0.8,0-1.1,0.9-1.1,1.9\n\t\t\tS108.2,290.8,108.9,290.8z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M102.5,287.3c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9\n\t\t\tC102.9,288.2,102.5,287.8,102.5,287.3z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M90.6,289.6c0-1.8,1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3S90.6,291.4,90.6,289.6z\n\t\t\t M95.9,289.6c0-1.2-0.9-2.1-2-2.1s-2,0.9-2,2.1c0,1.1,0.9,2.1,2,2.1S95.9,290.7,95.9,289.6z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M89,286.5v0.4c-1.2,0-1.3,0.2-1.3,1.6v2c0,1.4,0.2,1.6,1.3,1.6v0.4h-4.3v-0.4\n\t\t\tc1.2,0,1.3-0.2,1.3-1.6v-2c0-1.4-0.2-1.6-1.3-1.6v-0.4H89z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M79,287.8L79,287.8c-1.3,0-1.5,0.3-1.7,1.1l-0.1,0.3h-0.4l0.1-2h2v-0.9c0-1.4-0.2-1.6-1.3-1.6v-0.4\n\t\t\tH82v0.4c-1.2,0-1.3,0.2-1.3,1.6v0.9h2.9v0.4l-4.1,5.9H79V287.8z M80.6,290.6l2-2.8h-2V290.6z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M73.5,287.6c0.3,0.2,0,0.5-0.3,0.8l-0.8,0.8c-0.5,0.5-0.7,1.2-0.7,1.6c0,0.9,0.4,1.4,1.1,1.4\n\t\t\tc0.8,0,1.5-0.9,0.9-2l0.7-0.4c1.7,1,0.8,3.1-1.6,3.1c-1.6,0-2.9-0.7-2.9-1.9c0-1,0.9-1.7,1.5-2.1l0.7-0.4\n\t\t\tc-1.4-0.2-2.4-1.2-2.4-2.3c0-1.5,1.4-2.3,3-2.3c2.3,0,3.2,1.8,2.2,2c-0.7,0.1-0.7-1.4-2.1-1.4c-0.8,0-1.2,0.8-1.2,1.7\n\t\t\tc0,0.9,0.3,1.5,1,1.9C72.9,287.9,73.1,287.3,73.5,287.6z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M65.5,289.8c-1.6,0-2.8-1.3-2.8-2.9s1.2-2.9,2.9-2.9c1.4,0,2.3,1,2.3,1.6c0,0.2-0.2,0.4-0.4,0.4\n\t\t\tc-0.8,0-0.3-1.4-1.8-1.4c-0.7,0-1.3,1-1.3,2.3s0.6,2.2,1.3,2.2c0.6,0,1-0.2,1.3-1.3h0.6l-0.4,4.8h-2.4c-1.3,0-1.4,0.3-1.6,1.1\n\t\t\th-0.4l0.3-2.6h3.6l0.2-2C66.7,289.5,66.1,289.8,65.5,289.8z\"/>\n\t</g>\n\t<g>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M119.4,262.1v-0.5c0,0,4.3,0,4.3-4.4c0-1.7-1.1-3-2.6-3c-1.1,0-2,1.1-2.9,2.8l-1.2,2.3\n\t\t\tc-0.7,1.4-2.1,2.7-4,2.7c-2,0-3.6-1.7-3.6-4c0-1.4,0.5-2.2,1-2.9c-0.2-0.3-0.6-0.6-1.1-0.7v-0.5h5.3v0.5c-1.9,0.2-4.2,0.9-4.2,3.7\n\t\t\tc0,1.3,0.9,2.3,2.1,2.3s1.9-0.8,3-2.9l1.2-2.3c0.9-1.8,2.3-2.5,3.6-2.5c2.6,0,4.3,2.1,4.3,4.6c0,1.8-1,3-1.1,3.7\n\t\t\tc0.2,0.3,0.6,0.6,1.1,0.7v0.5h-5.2L119.4,262.1L119.4,262.1z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M120.2,250.2c-2.5,0-4.4-2.2-4.4-4.4c0-2.1,1.7-3.8,3.8-3.3v5.8c2.3,0.3,4-0.6,4-3.1\n\t\t\tc0-0.8-0.5-1.9-1.1-2.6l0.5-0.4c0.9,0.8,1.6,2.3,1.6,3.7C124.7,248.4,122.7,250.2,120.2,250.2z M118.8,244.1\n\t\t\tc-0.8-0.3-1.9,0.1-1.9,1.7c0,1,0.8,1.9,1.9,2.3V244.1z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M129.7,240.7c0-1.6-0.4-1.9-2.8-1.9h-7.2c-2.4,0-2.8,0.3-2.8,1.9h-0.5l-0.6-3.2\n\t\t\tc0.2-0.1,1.1-0.3,1.5-0.4c-0.8-0.7-1.5-1.7-1.5-3c0-2.3,2-4.2,4.4-4.2s4.4,1.9,4.4,4.2c0,1.2-0.6,2.2-1.4,3h3.7\n\t\t\tc2.4,0,2.8-0.3,2.8-1.9h0.5v5.5L129.7,240.7L129.7,240.7z M120.2,232c-1.9,0-3.4,0.9-3.4,2.7c0,1.1,0.8,2,1.9,2.4h3.1\n\t\t\tc1.2-0.5,1.9-1.3,1.9-2.4C123.7,232.8,122.2,232,120.2,232z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M121.9,226.9h-4.8v1.2h-0.6c-0.3-1.4-1.3-2-2.9-2.1v-0.8h2.6v-2.1h0.8v2.1h4.8\n\t\t\tc1.1,0,1.7-0.3,1.7-1.1c0-0.4-0.3-1-0.8-1.6l0.4-0.4c0.8,0.7,1.4,1.7,1.4,2.5C124.6,226,123.7,226.9,121.9,226.9z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M120.2,220.6c-2.5,0-4.4-2.2-4.4-4.4c0-2.1,1.7-3.8,3.8-3.3v5.8c2.3,0.3,4-0.6,4-3.1\n\t\t\tc0-0.8-0.5-1.9-1.1-2.6l0.5-0.4c0.9,0.8,1.6,2.3,1.6,3.7C124.7,218.8,122.7,220.6,120.2,220.6z M118.8,214.6\n\t\t\tc-0.8-0.3-1.9,0.1-1.9,1.7c0,1,0.8,1.9,1.9,2.3V214.6z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M123.7,210.7c0-1.6-0.4-1.9-2.8-1.9h-1.2c-2.4,0-2.8,0.3-2.8,1.9h-0.5l-0.6-3.2\n\t\t\tc0.2-0.1,1.2-0.3,1.7-0.4c-0.8-0.6-1.7-1.7-1.7-3.1c0-1.5,0.7-2.2,1.8-2.6c-0.8-0.6-1.8-1.9-1.8-3.4c0-2.1,1.5-2.8,3.6-2.8h1.5\n\t\t\tc2.4,0,2.8-0.3,2.8-1.9h0.5v5.1h-0.5c0-1.3-0.3-1.5-2.8-1.5h-1.4c-1.6,0-2.6,0.5-2.6,1.7c0,0.8,0.9,2.5,2.4,2.5h1.6\n\t\t\tc2.5,0,2.8-0.2,2.8-1.5h0.5v4.7h-0.5c0-1.3-0.3-1.5-2.8-1.5h-1.4c-1.6,0-2.6,0.5-2.6,1.7c0,0.8,0.9,2.5,2.4,2.5h1.6\n\t\t\tc2.5,0,2.8-0.2,2.8-1.5h0.5v5.1L123.7,210.7L123.7,210.7z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M113.4,191c-2.4,0-2.8,0.3-2.8,1.9H110l-0.6-3.6h7.8c-0.9-0.7-1.4-1.7-1.4-2.9c0-2.3,2-4.2,4.4-4.2\n\t\t\ts4.4,1.9,4.4,4.2c0,1.3-0.6,2.4-1.6,3.1l1.6,1.1v0.5h-11.2C113.4,191.1,113.4,191,113.4,191z M120.2,184.1c-1.9,0-3.4,0.9-3.4,2.7\n\t\t\tc0,1.1,0.8,2,1.9,2.4h3.1c1.2-0.4,1.9-1.3,1.9-2.4C123.7,185,122.2,184.1,120.2,184.1z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M120.2,179.9c-2.5,0-4.4-2.2-4.4-4.4c0-2.1,1.7-3.8,3.8-3.3v5.8c2.3,0.3,4-0.6,4-3.1\n\t\t\tc0-0.8-0.5-1.9-1.1-2.6l0.5-0.4c0.9,0.8,1.6,2.3,1.6,3.7C124.7,178.1,122.7,179.9,120.2,179.9z M118.8,173.8\n\t\t\tc-0.8-0.3-1.9,0.1-1.9,1.7c0,1,0.8,1.9,1.9,2.3V173.8z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M123.7,170c0-1.6-0.4-1.9-2.8-1.9h-1.2c-2.4,0-2.8,0.3-2.8,1.9h-0.5l-0.6-3.2\n\t\t\tc0.2-0.1,1.2-0.3,1.7-0.4c-1-0.5-1.7-1.6-1.7-2.5c0-1.3,0.9-1.9,1.5-1.9c0.5,0,1.1,0.2,1.1,1c0,0.5-0.4,0.8-0.9,0.8\n\t\t\ts-0.8,0.3-0.8,0.8c0,0.6,0.9,1.8,2.8,1.8h1.3c2.4,0,2.8-0.3,2.8-1.9h0.5v5.5L123.7,170L123.7,170z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M124.2,149.2v4.9h-0.6l-3.3-4.2c-1.5-1.8-2.8-2.3-3.6-2.3c-1.4,0-2.2,1.1-2.2,2.6\n\t\t\tc0,1.7,1.6,3.3,3.6,2.1l0.7,0.7c-1.7,2.9-5.4,1.4-5.4-2.8c0-2.4,1.2-4.6,3.2-4.6c1.9,0,3.4,2.2,3.4,2.2l2.8,3.7v-6.2l3.3,0.6v0.5\n\t\t\tC124.6,146.4,124.2,146.8,124.2,149.2z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M127.8,139.4c0-2-0.4-2.3-2.8-2.3h-1.8v5.4h-0.5l-10.3-6.7v-0.4h9.9v-0.3c0-2.2-0.6-2.5-1.8-2.8\n\t\t\tl-0.5-0.1v-0.5l3.2,0.2v3.5h1.8c2.4,0,2.8-0.3,2.8-2.3h0.5v6.3L127.8,139.4L127.8,139.4z M122.4,137.1H116l6.4,4.2V137.1z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M121.9,128.5h-4.8v1.2h-0.6c-0.3-1.4-1.3-2-2.9-2.1v-0.8h2.6v-2.1h0.8v2.1h4.8\n\t\t\tc1.1,0,1.7-0.3,1.7-1.1c0-0.4-0.3-1-0.8-1.6l0.4-0.4c0.8,0.7,1.4,1.7,1.4,2.5C124.6,127.6,123.7,128.5,121.9,128.5z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M123.7,122.9c0-1.6-0.4-1.9-2.8-1.9h-7.6c-2.4,0-2.8,0.3-2.8,1.9H110l-0.6-3.6h8.1\n\t\t\tc-0.8-0.7-1.7-1.8-1.7-3.1c0-2.2,1.5-3,3.6-3h1.5c2.4,0,2.8-0.3,2.8-1.9h0.5v5.3h-0.5c0-1.5-0.3-1.7-2.8-1.7h-1.4\n\t\t\tc-1.6,0-2.6,0.6-2.6,1.8c0,1.2,1,2.6,2.4,2.6h1.6c2.5,0,2.8-0.2,2.8-1.5h0.5v5.1C124.2,122.9,123.7,122.9,123.7,122.9z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M124.2,98.5v4.9h-0.6l-3.3-4.2c-1.5-1.8-2.8-2.3-3.6-2.3c-1.4,0-2.2,1.1-2.2,2.6\n\t\t\tc0,1.7,1.6,3.3,3.6,2.1l0.7,0.7c-1.7,2.9-5.4,1.4-5.4-2.8c0-2.4,1.2-4.6,3.2-4.6c1.9,0,3.4,2.2,3.4,2.2l2.8,3.7v-6.2l3.3,0.6v0.5\n\t\t\tC124.6,95.7,124.2,96.1,124.2,98.5z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M119,91.3c-3.1,0-5.6-2.5-5.6-5.6s2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6S122.1,91.3,119,91.3z M119,81.6\n\t\t\tc-2.3,0-4.2,1.8-4.2,4.1c0,2.2,1.9,4.1,4.2,4.1c2.3,0,4.2-1.8,4.2-4.1C123.3,83.5,121.4,81.6,119,81.6z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M123.7,77.4c0-2-0.4-2.3-2.8-2.3h-3.8c-2.4,0-2.8,0.3-2.8,2.3h-0.5V71h0.5c0,2,0.4,2.3,2.8,2.3h3.8\n\t\t\tc2.4,0,2.8-0.3,2.8-2.3h0.5v6.3L123.7,77.4L123.7,77.4z\"/>\n\t\t<path style=\"fill:#FFFFFF;\" d=\"M127.2,66.8l-11.7-5.7V65c0,2.2,0.5,2.5,1.8,2.8l0.5,0.1v0.5l-5.9-1v-0.5c1.6,0,1.9-0.4,1.9-2.8\n\t\t\tv-4.3h0.7l13,5.3c0.8,0.3,1.3,0.6,1.1,1.3C128.6,66.7,128.1,67.2,127.2,66.8z\"/>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M82,223.2v11.5c0,0.1-0.1,0.2-0.2,0.2s-0.2-0.1-0.2-0.2v-11.5c0-0.1,0.1-0.2,0.2-0.2\n\t\t\t\t\tC81.8,223,82,223.1,82,223.2z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.6,241.1C83.6,241.1,83.6,241.2,83.6,241.1l-1.7,6.1c0,0.1-0.1,0.2-0.2,0.2s-0.2-0.1-0.2-0.2\n\t\t\t\t\tl-1.7-6.1c0-0.1,0-0.1,0-0.2l1.7-2.5c0-0.1,0.1-0.1,0.2-0.1s0.2,0,0.2,0.1l1.7,2.5C83.6,241,83.6,241.1,83.6,241.1z M81.7,246.3\n\t\t\t\t\tl1.4-5.1l-1.4-2.1l-1.4,2.1L81.7,246.3z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.1,221.8c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3\n\t\t\t\t\tS83.1,221.1,83.1,221.8z M80.9,221.8c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9s-0.4-0.9-0.9-0.9C81.2,221,80.9,221.4,80.9,221.8z\"\n\t\t\t\t\t/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.3,219.2c0,0.9-0.7,1.6-1.6,1.6s-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6\n\t\t\t\t\tC82.6,217.6,83.3,218.3,83.3,219.2z M80.6,219.2c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1\n\t\t\t\t\tC81.1,218,80.6,218.5,80.6,219.2z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M81.4,235.3L81.4,235.3v2.1c0,0.1,0,0.1-0.1,0.2l-2.1,2.1c-0.1,0.1-0.2,0.1-0.3,0.1\n\t\t\t\t\tc-0.1,0-0.1-0.1-0.1-0.2v-2.1c0-0.1,0-0.1,0.1-0.2l2.1-2.1c0-0.1,0.1-0.1,0.2-0.1C81.3,235,81.4,235.1,81.4,235.3z M80.9,237.3\n\t\t\t\t\tv-1.4l-1.6,1.6v1.5L80.9,237.3z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M84.6,237.4v2.1c0,0.1-0.1,0.2-0.1,0.2c-0.1,0-0.2,0-0.3-0.1l-2.1-2.1c0,0-0.1-0.1-0.1-0.2v-2.1\n\t\t\t\t\tc0-0.1,0.1-0.2,0.1-0.2c0.1,0,0.2,0,0.3,0.1l2.1,2.1C84.6,237.3,84.6,237.4,84.6,237.4z M84.1,238.9v-1.4l-1.6-1.7v1.5\n\t\t\t\t\tL84.1,238.9z\"/>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M82,95.8V84.3c0-0.1-0.1-0.2-0.2-0.2s-0.2,0.1-0.2,0.2v11.5c0,0.1,0.1,0.2,0.2,0.2\n\t\t\t\t\tC81.8,96,82,95.9,82,95.8z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M83.6,78l-1.7,2.5c0,0.1-0.1,0.1-0.2,0.1s-0.2,0-0.2-0.1L79.9,78c0-0.1,0-0.1,0-0.2l1.7-6.1\n\t\t\t\t\tc0-0.1,0.1-0.2,0.2-0.2s0.2,0.1,0.2,0.2l1.7,6.1C83.7,77.8,83.7,77.8,83.6,78C83.6,77.9,83.6,78,83.6,78z M80.3,77.9l1.4,2.1\n\t\t\t\t\tl1.4-2.1l-1.4-5.1L80.3,77.9z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M81.7,98.5c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3\n\t\t\t\t\tC83.1,97.9,82.5,98.5,81.7,98.5z M81.7,98c0.5,0,0.9-0.4,0.9-0.9s-0.4-0.9-0.9-0.9s-0.9,0.4-0.9,0.9C80.9,97.6,81.2,98,81.7,98z\n\t\t\t\t\t\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M81.7,101.5c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6\n\t\t\t\t\tC83.3,100.7,82.6,101.5,81.7,101.5z M81.7,101c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1S81.1,101,81.7,101z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M81.2,84c-0.1,0-0.1,0-0.2-0.1l-2.1-2.1c0,0-0.1-0.1-0.1-0.2v-2.1c0-0.1,0.1-0.2,0.1-0.2\n\t\t\t\t\tc0.1,0,0.2,0,0.3,0.1l2.1,2.1c0,0,0.1,0.1,0.1,0.2v2.1l0,0C81.4,83.9,81.3,84,81.2,84z M79.3,80.1v1.5l1.6,1.6v-1.4L79.3,80.1z\"\n\t\t\t\t\t/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M84.6,81.7l-2.1,2.1c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.1-0.1-0.1-0.2v-2.1c0-0.1,0-0.1,0.1-0.2\n\t\t\t\t\tl2.1-2.1c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.1,0.1,0.1,0.2v2.1C84.6,81.6,84.6,81.7,84.6,81.7z M82.5,81.7v1.5l1.6-1.7v-1.4\n\t\t\t\t\tL82.5,81.7z\"/>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M533.3,85.8V74.3c0-0.1-0.1-0.2-0.2-0.2s-0.2,0.1-0.2,0.2v11.5c0,0.1,0.1,0.2,0.2,0.2\n\t\t\t\t\tS533.3,86,533.3,85.8z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M534.9,68.1l-1.7,2.5c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.2,0-0.2-0.1l-1.7-2.5c0-0.1,0-0.1,0-0.2\n\t\t\t\t\tl1.7-6.1c0-0.1,0.1-0.2,0.2-0.2s0.2,0.1,0.2,0.2l1.7,6.1C534.9,67.9,534.9,67.9,534.9,68.1C534.9,68,534.9,68,534.9,68.1z\n\t\t\t\t\t M531.6,67.9L533,70l1.4-2.1l-1.4-5.1L531.6,67.9z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M533,88.5c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3\n\t\t\t\t\tC534.4,87.9,533.8,88.5,533,88.5z M533,88.1c0.5,0,0.9-0.4,0.9-0.9s-0.4-0.9-0.9-0.9s-0.9,0.4-0.9,0.9\n\t\t\t\t\tC532.2,87.7,532.6,88.1,533,88.1z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M533,91.5c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6\n\t\t\t\t\tC534.7,90.8,533.9,91.5,533,91.5z M533,91c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1S532.4,91,533,91z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M532.5,74c-0.1,0-0.1,0-0.2-0.1l-2.1-2.1c0,0-0.1-0.1-0.1-0.2v-2.1c0-0.1,0.1-0.2,0.1-0.2\n\t\t\t\t\tc0.1,0,0.2,0,0.3,0.1l2.1,2.1c0,0,0.1,0.1,0.1,0.2v2.1l0,0C532.7,73.9,532.6,74,532.5,74z M530.6,70.1v1.5l1.6,1.6v-1.4\n\t\t\t\t\tL530.6,70.1z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M535.9,71.8l-2.1,2.1c-0.1,0.1-0.2,0.1-0.3,0.1s-0.1-0.1-0.1-0.2v-2.1c0-0.1,0-0.1,0.1-0.2\n\t\t\t\t\tl2.1-2.1c0.1-0.1,0.2-0.1,0.3-0.1s0.1,0.1,0.1,0.2v2.1C535.9,71.7,535.9,71.7,535.9,71.8z M533.9,71.7v1.5l1.6-1.7v-1.4\n\t\t\t\t\tL533.9,71.7z\"/>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<line style=\"fill:none;stroke:#FFFFFF;stroke-miterlimit:10;\" x1=\"97.1\" y1=\"262.8\" x2=\"97.1\" y2=\"56.2\"/>\n\t<g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.4,82.4c0,0.2-0.2,0.3-0.3,0.3h-1.3c-0.2,0-0.3-0.2-0.3-0.3c0-0.2,0.2-0.3,0.3-0.3h1.3\n\t\t\t\t\t\t\tC52.3,82.1,52.4,82.3,52.4,82.4z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M50.1,82.4c0,0.2-0.2,0.3-0.3,0.3H42c-0.2,0-0.3-0.2-0.3-0.3c0-0.2,0.2-0.3,0.3-0.3h7.7\n\t\t\t\t\t\t\tC50,82.1,50.1,82.3,50.1,82.4z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.6,80.9L52.6,80.9c0,0.3-0.2,0.4-0.4,0.3l-5.9-1.1c-0.2,0-0.3-0.2-0.3-0.4\n\t\t\t\t\t\t\tc0-0.2,0.2-0.3,0.4-0.3l5.9,1.1C52.5,80.5,52.6,80.7,52.6,80.9z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M45.6,79.5C45.6,79.5,45.6,79.6,45.6,79.5c0,0.3-0.2,0.4-0.4,0.3l-1-0.2\n\t\t\t\t\t\t\tc-0.2,0-0.3-0.2-0.3-0.4c0-0.2,0.2-0.3,0.4-0.3l1,0.2C45.5,79.2,45.6,79.3,45.6,79.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M53,79.3L53,79.3c-0.1,0.3-0.3,0.4-0.5,0.3L47,77.3c-0.2-0.1-0.3-0.3-0.2-0.5s0.3-0.3,0.5-0.2\n\t\t\t\t\t\t\tl5.5,2.3C52.9,79,53,79.2,53,79.3z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.8,85.6c0,0.1-0.1,0.3-0.2,0.3l-5.2,2.2c-0.2,0.1-0.4,0-0.5-0.2s0-0.4,0.2-0.5l5.2-2.2\n\t\t\t\t\t\t\tc0.2-0.1,0.4,0,0.5,0.2C52.8,85.5,52.8,85.6,52.8,85.6z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.5,84.1c0,0.2-0.1,0.3-0.3,0.3l-7.9,1.7c-0.2,0-0.4-0.1-0.4-0.3c0-0.2,0.1-0.4,0.3-0.4\n\t\t\t\t\t\t\tl7.9-1.7C52.2,83.7,52.4,83.8,52.5,84.1C52.5,84,52.5,84,52.5,84.1z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M55.6,75.6c0,0.1-0.1,0.2-0.1,0.3C55.3,76,55.1,76,55,75.8L53,73c-0.1-0.2-0.1-0.4,0.1-0.5\n\t\t\t\t\t\t\tc0.2-0.1,0.4-0.1,0.5,0.1l2,2.8C55.5,75.4,55.6,75.5,55.6,75.6z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.7,71.5c0,0.1-0.1,0.2-0.1,0.3c-0.2,0.1-0.4,0.1-0.5-0.1l-2.3-3.3c-0.1-0.2-0.1-0.4,0.1-0.5\n\t\t\t\t\t\t\tc0.2-0.1,0.4-0.1,0.5,0.1l2.3,3.3C52.7,71.4,52.7,71.5,52.7,71.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M53.6,77.9c0,0.1,0,0.1-0.1,0.2c-0.1,0.2-0.3,0.2-0.5,0.1l-4.8-3.3c-0.2-0.1-0.2-0.3-0.1-0.5\n\t\t\t\t\t\t\tc0.1-0.2,0.3-0.2,0.5-0.1l4.8,3.3C53.6,77.7,53.6,77.8,53.6,77.9z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M54.5,76.6c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.4,0.1-0.5,0L53,75.9c-0.1-0.1-0.1-0.4,0-0.5\n\t\t\t\t\t\t\ts0.4-0.1,0.5,0l0.9,0.9C54.5,76.4,54.5,76.5,54.5,76.6z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.8,75c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.4,0.1-0.5,0l-4.4-4.3c-0.1-0.1-0.1-0.4,0-0.5\n\t\t\t\t\t\t\ts0.4-0.1,0.5,0l4.4,4.3C52.8,74.8,52.8,74.9,52.8,75z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M55.4,89.9c0,0.1,0,0.1-0.1,0.2l-1.5,2.4c-0.1,0.2-0.3,0.2-0.5,0.1s-0.2-0.3-0.1-0.5l1.5-2.4\n\t\t\t\t\t\t\tc0.1-0.2,0.3-0.2,0.5-0.1C55.3,89.7,55.4,89.8,55.4,89.9z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.5,94.5c0,0.1,0,0.1-0.1,0.2l-3,4.8c-0.1,0.2-0.3,0.2-0.5,0.1s-0.2-0.3-0.1-0.5l3-4.8\n\t\t\t\t\t\t\tc0.1-0.2,0.3-0.2,0.5-0.1C52.5,94.2,52.5,94.4,52.5,94.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M54.4,88.8c0,0.1,0,0.2-0.1,0.2l-3.9,4.4c-0.1,0.1-0.3,0.2-0.5,0c-0.1-0.1-0.2-0.3,0-0.5\n\t\t\t\t\t\t\tl3.9-4.4c0.1-0.1,0.3-0.2,0.5,0C54.3,88.6,54.4,88.7,54.4,88.8z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M49.5,94.3c0,0.1,0,0.2-0.1,0.2l-0.9,1c-0.1,0.1-0.3,0.2-0.5,0c-0.1-0.1-0.2-0.3,0-0.5l0.9-1\n\t\t\t\t\t\t\tc0.1-0.1,0.3-0.2,0.5,0C49.5,94.1,49.5,94.2,49.5,94.3z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M53.6,87.5c0,0.1,0,0.2-0.1,0.3l-4.8,3.8c-0.2,0.1-0.4,0.1-0.5-0.1C48,91.3,48,91.1,48.1,91\n\t\t\t\t\t\t\tl4.8-3.8c0.2-0.1,0.4-0.1,0.5,0.1C53.5,87.3,53.6,87.4,53.6,87.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M56.9,95.1C56.9,95.1,56.9,95.2,56.9,95.1l-0.6,2.6c0,0.2-0.2,0.3-0.4,0.3s-0.3-0.2-0.3-0.4\n\t\t\t\t\t\t\tl0.6-2.5c0-0.2,0.2-0.3,0.4-0.3C56.8,94.8,56.9,94.9,56.9,95.1z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M56.6,90.8L56.6,90.8l-3.4,8.4c-0.1,0.2-0.3,0.3-0.5,0.2c-0.2-0.1-0.3-0.3-0.2-0.5l3.4-8.3\n\t\t\t\t\t\t\tc0.1-0.2,0.3-0.3,0.5-0.2C56.5,90.5,56.6,90.7,56.6,90.8z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M66.4,57.6v37.1c0,0.1-0.1,0.2-0.2,0.3c-1.1,0.7-2.6,2-4.6,4c-0.1,0.1-0.2,0.1-0.4,0.1\n\t\t\t\t\tc-1.2-0.4-2.2-1-2.9-1.8c-1.1-1.4-1.5-2.8-1.1-4c0.3-1.1,1.5-1.9,2.7-1.8c1.1,0.1,2.1,1.1,2.3,2.2c0.1,0.9-0.3,1.8-1,2.2\n\t\t\t\t\tc-0.8,0.5-1.9,0.2-2.4-0.5c-0.3-0.4-0.3-0.9-0.2-1.4s0.4-0.8,0.8-1c0.2-0.1,0.4,0,0.5,0.2s0,0.4-0.2,0.5s-0.4,0.3-0.4,0.5\n\t\t\t\t\tc-0.1,0.3,0,0.6,0.1,0.8c0.3,0.4,1,0.5,1.5,0.3c0.5-0.3,0.8-0.9,0.7-1.5c-0.1-0.8-0.8-1.5-1.6-1.6s-1.7,0.5-1.9,1.3\n\t\t\t\t\tc-0.3,1,0,2.1,1,3.3c0.5,0.6,1.4,1.2,2.4,1.5c1.9-1.9,3.3-3.1,4.4-3.8V60c-0.9,1.5-1.9,3-3.2,3.7l2.2,2.5c0.1,0.1,0.1,0.4,0,0.5\n\t\t\t\t\ts-0.4,0.1-0.5,0l-2.5-2.8c-0.1-0.1-0.1-0.2-0.1-0.3s0.1-0.2,0.2-0.2c2-0.8,3.4-3.8,3.6-5.7c0-0.2,0.2-0.3,0.4-0.3\n\t\t\t\t\tC66.2,57.3,66.4,57.4,66.4,57.6z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M64.2,78.4c0,0.1,0,0.1,0,0.2c-0.1,0.2-0.3,0.2-0.5,0.1c-2-1-3.4-2.9-4-5\n\t\t\t\t\t\tc-1.3,1.1-2.4,2.5-3.5,4.2c-1.1,1.9-1.7,3.5-1.9,5.1c-0.2,1.9,0.3,3.8,1.4,5c1.2,1.4,3.2,1.9,4.7,1.2c0.8-0.3,1.5-1.1,1.8-1.9\n\t\t\t\t\t\ts0.3-1.6,0-2.3c-0.4-0.7-1.2-1.3-2.1-1.4c-0.8-0.1-1.6,0.2-2,0.7C57.6,85,57.5,86,58,86.6c0.3,0.3,0.7,0.5,1.1,0.5\n\t\t\t\t\t\tc0.4,0,0.7-0.1,0.9-0.4c0.1-0.1,0.3-0.2,0.5,0c0.1,0.1,0.2,0.3,0,0.5c-0.3,0.4-0.9,0.6-1.5,0.6s-1.3-0.3-1.6-0.7\n\t\t\t\t\t\tc-0.7-0.9-0.7-2.2,0-3.2c0.6-0.7,1.6-1.1,2.6-1c1.2,0.1,2.2,0.8,2.6,1.7c0.4,0.8,0.4,1.8,0.1,2.8c-0.4,1.1-1.2,1.9-2.2,2.3\n\t\t\t\t\t\tc-1.8,0.7-4.1,0.2-5.5-1.4c-1.3-1.4-1.8-3.4-1.6-5.6c0.2-1.7,0.8-3.5,2-5.4s2.6-3.6,4-4.8c0.1-0.1,0.2-0.1,0.3-0.1\n\t\t\t\t\t\ts0.2,0.1,0.2,0.3c0.4,2.2,1.8,4.1,3.8,5.1C64.1,78.1,64.2,78.3,64.2,78.4z\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M64.8,70.2c0,1.1-0.7,2.1-1.6,2.5c-0.6,0.2-1.3,0.1-1.9-0.2c-0.5-0.3-0.9-0.8-1-1.4\n\t\t\t\t\t\ts0.2-1.3,0.8-1.7c0.5-0.4,1.2-0.5,1.7-0.2c0.2,0.1,0.3,0.3,0.2,0.5s-0.3,0.3-0.5,0.2c-0.3-0.1-0.7-0.1-1,0.2\n\t\t\t\t\t\tc-0.4,0.3-0.6,0.7-0.5,1.1c0,0.4,0.3,0.7,0.6,0.9c0.4,0.2,0.9,0.3,1.3,0.2c0.8-0.3,1.3-1.3,1.1-2.2c-0.2-0.8-0.9-1.6-1.8-1.9\n\t\t\t\t\t\tc-0.9-0.3-1.9-0.2-2.8,0.3c-1.7,0.8-2.9,2.4-3.2,4.2c-0.3,1.8,0.5,3.8,1.9,4.9c0.6,0.5,1.4,0.9,2.1,1.3c0.6,0.3,1.2,0.6,1.8,1\n\t\t\t\t\t\tc1.3,0.9,2.5,2.7,1.8,4.3c-0.1,0.2-0.3,0.3-0.5,0.2c-0.2-0.1-0.3-0.3-0.2-0.5c0.5-1.2-0.4-2.7-1.6-3.5c-0.5-0.4-1.1-0.7-1.7-1\n\t\t\t\t\t\tC59,79,58.2,78.6,57.5,78c-1.6-1.3-2.4-3.5-2.2-5.6c0.3-2.1,1.7-3.9,3.6-4.8c1.1-0.5,2.3-0.6,3.3-0.3c1.2,0.4,2.1,1.3,2.3,2.4\n\t\t\t\t\t\tC64.8,69.9,64.8,70,64.8,70.2z\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.4,238.6c0-0.2-0.2-0.3-0.3-0.3h-1.3c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.3,0.4h1.3\n\t\t\t\t\t\t\tC52.3,238.9,52.4,238.8,52.4,238.6z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M50.1,238.6c0-0.2-0.2-0.3-0.3-0.3H42c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.4,0.3,0.4h7.7\n\t\t\t\t\t\t\tC50,238.9,50.1,238.8,50.1,238.6z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.6,240.2C52.6,240.1,52.6,240.1,52.6,240.2c0-0.3-0.2-0.4-0.4-0.3l-5.9,1.1\n\t\t\t\t\t\t\tc-0.2,0-0.3,0.2-0.3,0.4s0.2,0.3,0.4,0.3l5.9-1.1C52.5,240.5,52.6,240.3,52.6,240.2z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M45.6,241.5L45.6,241.5c0-0.3-0.2-0.4-0.4-0.3l-1,0.2c-0.2,0-0.3,0.2-0.3,0.4s0.2,0.3,0.4,0.3\n\t\t\t\t\t\t\tl1-0.2C45.5,241.8,45.6,241.7,45.6,241.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M53,241.7v-0.1c-0.1-0.2-0.3-0.3-0.5-0.2l-5.5,2.3c-0.2,0.1-0.3,0.3-0.2,0.5s0.3,0.3,0.5,0.2\n\t\t\t\t\t\t\tl5.5-2.3C52.9,242,53,241.8,53,241.7z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.8,235.4c0-0.1-0.1-0.3-0.2-0.3l-5.2-2.2c-0.2-0.1-0.4,0-0.5,0.2s0,0.4,0.2,0.5l5.2,2.2\n\t\t\t\t\t\t\tc0.2,0.1,0.4,0,0.5-0.2C52.8,235.5,52.8,235.4,52.8,235.4z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.5,237c0-0.2-0.1-0.3-0.3-0.3l-7.9-1.7c-0.2,0-0.4,0.1-0.4,0.3s0.1,0.4,0.3,0.4l7.9,1.7\n\t\t\t\t\t\t\tC52.2,237.3,52.4,237.2,52.5,237L52.5,237z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M55.6,245.5c0-0.1-0.1-0.2-0.1-0.3c-0.2-0.1-0.4-0.1-0.5,0.1l-2,2.8c-0.1,0.2-0.1,0.4,0.1,0.5\n\t\t\t\t\t\t\tc0.2,0.1,0.4,0.1,0.5-0.1l2-2.8C55.5,245.6,55.6,245.5,55.6,245.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.7,249.5c0-0.1-0.1-0.2-0.1-0.3c-0.2-0.1-0.4-0.1-0.5,0.1l-2.3,3.3\n\t\t\t\t\t\t\tc-0.1,0.2-0.1,0.4,0.1,0.5c0.2,0.1,0.4,0.1,0.5-0.1l2.3-3.3C52.7,249.6,52.7,249.5,52.7,249.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M53.6,243.1c0-0.1,0-0.1-0.1-0.2c-0.1-0.2-0.3-0.2-0.5-0.1l-4.8,3.3c-0.2,0.1-0.2,0.3-0.1,0.5\n\t\t\t\t\t\t\tc0.1,0.2,0.3,0.2,0.5,0.1l4.8-3.3C53.6,243.4,53.6,243.2,53.6,243.1z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M54.5,244.4c0-0.1,0-0.2-0.1-0.2c-0.1-0.1-0.4-0.1-0.5,0l-0.9,0.9c-0.1,0.1-0.1,0.4,0,0.5\n\t\t\t\t\t\t\ts0.4,0.1,0.5,0l0.9-0.9C54.5,244.6,54.5,244.5,54.5,244.4z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.8,246.1c0-0.1,0-0.2-0.1-0.2c-0.1-0.1-0.4-0.1-0.5,0l-4.4,4.3c-0.1,0.1-0.1,0.4,0,0.5\n\t\t\t\t\t\t\ts0.4,0.1,0.5,0l4.4-4.3C52.8,246.2,52.8,246.1,52.8,246.1z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M55.4,231.1c0-0.1,0-0.1-0.1-0.2l-1.5-2.4c-0.1-0.2-0.3-0.2-0.5-0.1c-0.2,0.1-0.2,0.3-0.1,0.5\n\t\t\t\t\t\t\tl1.5,2.4c0.1,0.2,0.3,0.2,0.5,0.1C55.3,231.3,55.4,231.2,55.4,231.1z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M52.5,226.5c0-0.1,0-0.1-0.1-0.2l-3-4.8c-0.1-0.2-0.3-0.2-0.5-0.1c-0.2,0.1-0.2,0.3-0.1,0.5\n\t\t\t\t\t\t\tl3,4.8c0.1,0.2,0.3,0.2,0.5,0.1C52.5,226.8,52.5,226.6,52.5,226.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M54.4,232.2c0-0.1,0-0.2-0.1-0.2l-3.9-4.4c-0.1-0.1-0.3-0.2-0.5,0c-0.1,0.1-0.2,0.3,0,0.5\n\t\t\t\t\t\t\tl3.9,4.4c0.1,0.1,0.3,0.2,0.5,0C54.3,232.4,54.4,232.3,54.4,232.2z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M49.5,226.7c0-0.1,0-0.2-0.1-0.2l-0.9-1c-0.1-0.1-0.3-0.2-0.5,0c-0.1,0.1-0.2,0.3,0,0.5l0.9,1\n\t\t\t\t\t\t\tc0.1,0.1,0.3,0.2,0.5,0C49.5,226.9,49.5,226.8,49.5,226.7z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M53.6,233.5c0-0.1,0-0.2-0.1-0.3l-4.8-3.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.1,0.2-0.1,0.4,0.1,0.5\n\t\t\t\t\t\t\tl4.8,3.8c0.2,0.1,0.4,0.1,0.5-0.1C53.5,233.7,53.6,233.6,53.6,233.5z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M56.9,225.9C56.9,225.9,56.9,225.8,56.9,225.9l-0.6-2.6c0-0.2-0.2-0.3-0.4-0.3\n\t\t\t\t\t\t\ts-0.3,0.2-0.3,0.4l0.6,2.5c0,0.2,0.2,0.3,0.4,0.3C56.8,226.2,56.9,226.1,56.9,225.9z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t<g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M56.6,230.2v-0.1l-3.4-8.3c-0.1-0.2-0.3-0.3-0.5-0.2s-0.3,0.3-0.2,0.5l3.4,8.3\n\t\t\t\t\t\t\tc0.1,0.2,0.3,0.3,0.5,0.2C56.5,230.5,56.6,230.3,56.6,230.2z\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M66.4,263.4v-37.1c0-0.1-0.1-0.2-0.2-0.3c-1.1-0.7-2.6-2-4.6-4c-0.1-0.1-0.2-0.1-0.4-0.1\n\t\t\t\t\tc-1.2,0.4-2.2,1-2.9,1.8c-1.1,1.4-1.5,2.8-1.1,4c0.3,1.1,1.5,1.9,2.7,1.8c1.1-0.1,2.1-1.1,2.3-2.2c0.1-0.9-0.3-1.8-1-2.2\n\t\t\t\t\tc-0.8-0.5-1.9-0.2-2.4,0.5c-0.3,0.4-0.3,0.9-0.2,1.4s0.4,0.8,0.8,1c0.2,0.1,0.4,0,0.5-0.2s0-0.4-0.2-0.5s-0.4-0.3-0.4-0.5\n\t\t\t\t\tc-0.1-0.3,0-0.6,0.1-0.8c0.3-0.4,1-0.5,1.5-0.3c0.5,0.3,0.8,0.9,0.7,1.5c-0.1,0.8-0.8,1.5-1.6,1.6s-1.7-0.5-1.9-1.3\n\t\t\t\t\tc-0.3-1,0-2.1,1-3.3c0.5-0.6,1.4-1.2,2.4-1.5c1.9,1.9,3.3,3.1,4.4,3.8V261c-0.6-1.5-1.6-2.9-2.9-3.6l2.2-2.5\n\t\t\t\t\tc0.1-0.1,0.1-0.4,0-0.5s-0.4-0.1-0.5,0l-2.5,2.8c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c2,0.8,3.4,3.8,3.6,5.7\n\t\t\t\t\tc0,0.2,0.2,0.3,0.4,0.3C66.2,263.7,66.4,263.6,66.4,263.4z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M64.2,242.6c0-0.1,0-0.1,0-0.2c-0.1-0.2-0.3-0.2-0.5-0.1c-2,1-3.4,2.9-4,5\n\t\t\t\t\t\tc-1.3-1.1-2.4-2.5-3.5-4.2c-1.1-1.9-1.7-3.5-1.9-5.1c-0.2-1.9,0.3-3.8,1.4-5c1.2-1.4,3.2-1.9,4.7-1.2c0.8,0.3,1.5,1.1,1.8,1.9\n\t\t\t\t\t\tc0.3,0.8,0.3,1.6,0,2.3c-0.4,0.7-1.2,1.3-2.1,1.4c-0.8,0.1-1.6-0.2-2-0.7c-0.5-0.7-0.6-1.7-0.1-2.3c0.3-0.3,0.7-0.5,1.1-0.5\n\t\t\t\t\t\tc0.4,0,0.7,0.1,0.9,0.4c0.1,0.1,0.3,0.2,0.5,0c0.1-0.1,0.2-0.3,0-0.5c-0.3-0.4-0.9-0.6-1.5-0.6s-1.3,0.3-1.6,0.7\n\t\t\t\t\t\tc-0.7,0.9-0.7,2.2,0,3.2c0.6,0.7,1.6,1.1,2.6,1c1.2-0.1,2.2-0.8,2.6-1.7c0.4-0.8,0.4-1.8,0.1-2.8c-0.4-1.1-1.2-1.9-2.2-2.3\n\t\t\t\t\t\tc-1.8-0.7-4.1-0.2-5.5,1.4c-1.3,1.4-1.8,3.4-1.6,5.6c0.2,1.7,0.8,3.5,2,5.4s2.6,3.6,4,4.8c0.1,0.1,0.2,0.1,0.3,0.1\n\t\t\t\t\t\ts0.2-0.1,0.2-0.3c0.4-2.2,1.8-4.1,3.8-5.1C64.1,242.9,64.2,242.7,64.2,242.6z\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M64.8,250.8c0-1.1-0.7-2.1-1.6-2.5c-0.6-0.2-1.3-0.1-1.9,0.2c-0.5,0.3-0.9,0.8-1,1.4\n\t\t\t\t\t\tc-0.1,0.6,0.2,1.3,0.8,1.7c0.5,0.4,1.2,0.5,1.7,0.2c0.2-0.1,0.3-0.3,0.2-0.5s-0.3-0.3-0.5-0.2c-0.3,0.1-0.7,0.1-1-0.2\n\t\t\t\t\t\tc-0.4-0.3-0.6-0.7-0.5-1.1c0-0.4,0.3-0.7,0.6-0.9c0.4-0.2,0.9-0.3,1.3-0.2c0.8,0.3,1.3,1.3,1.1,2.2c-0.2,0.8-0.9,1.6-1.8,1.9\n\t\t\t\t\t\tc-0.9,0.3-1.9,0.2-2.8-0.3c-1.7-0.8-2.9-2.4-3.2-4.2s0.5-3.8,1.9-4.9c0.6-0.5,1.4-0.9,2.1-1.3c0.6-0.3,1.2-0.6,1.8-1\n\t\t\t\t\t\tc1.3-0.9,2.5-2.7,1.8-4.3c-0.1-0.2-0.3-0.3-0.5-0.2s-0.3,0.3-0.2,0.5c0.5,1.2-0.4,2.7-1.6,3.5c-0.5,0.4-1.1,0.7-1.7,1\n\t\t\t\t\t\tc-0.8,0.4-1.6,0.8-2.3,1.4c-1.6,1.3-2.4,3.5-2.2,5.6c0.3,2.1,1.7,3.9,3.6,4.8c1.1,0.5,2.3,0.6,3.3,0.3c1.2-0.4,2.1-1.3,2.3-2.4\n\t\t\t\t\t\tC64.8,251.1,64.8,251,64.8,250.8z\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<line style=\"fill:none;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;\" x1=\"514\" y1=\"283.9\" x2=\"514\" y2=\"39.6\"/>\n\t<line style=\"fill:none;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;\" x1=\"551.7\" y1=\"282.7\" x2=\"551.7\" y2=\"38.4\"/>\n\t<g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M533,227.4v11.5c0,0.1-0.1,0.2-0.2,0.2c-0.1,0-0.2-0.1-0.2-0.2v-11.5c0-0.1,0.1-0.2,0.2-0.2\n\t\t\t\t\tC532.8,227.1,533,227.2,533,227.4z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M534.6,245.3L534.6,245.3l-1.7,6.1c0,0.1-0.1,0.2-0.2,0.2c-0.1,0-0.2-0.1-0.2-0.2l-1.7-6.1\n\t\t\t\t\tc0-0.1,0-0.1,0-0.2l1.7-2.5c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.2,0.1l1.7,2.5C534.6,245.2,534.6,245.2,534.6,245.3z\n\t\t\t\t\t M532.7,250.5l1.4-5.1l-1.4-2.1l-1.4,2.1L532.7,250.5z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M534.1,226c0,0.7-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3S534.1,225.3,534.1,226z\n\t\t\t\t\t M531.8,226c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9s-0.4-0.9-0.9-0.9S531.8,225.5,531.8,226z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M534.3,223.3c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6\n\t\t\t\t\tS534.3,222.4,534.3,223.3z M531.6,223.3c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1S531.6,222.7,531.6,223.3z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M532.4,239.4C532.4,239.5,532.4,239.5,532.4,239.4v2.1c0,0.1,0,0.1-0.1,0.2l-2.1,2.1\n\t\t\t\t\tc-0.1,0.1-0.2,0.1-0.3,0.1s-0.1-0.1-0.1-0.2v-2.1c0-0.1,0-0.1,0.1-0.2l2.1-2.1c0-0.1,0.1-0.1,0.2-0.1\n\t\t\t\t\tC532.3,239.2,532.4,239.3,532.4,239.4z M531.9,241.4V240l-1.6,1.6v1.5L531.9,241.4z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M535.6,241.6v2.1c0,0.1-0.1,0.2-0.1,0.2c-0.1,0-0.2,0-0.3-0.1l-2.1-2.1c0,0-0.1-0.1-0.1-0.2v-2.1\n\t\t\t\t\tc0-0.1,0.1-0.2,0.1-0.2c0.1,0,0.2,0,0.3,0.1l2.1,2.1C535.6,241.5,535.6,241.5,535.6,241.6z M535.1,243.1v-1.4l-1.6-1.7v1.5\n\t\t\t\t\tL535.1,243.1z\"/>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,232.8c0-1-0.2-1.2-1.5-1.2h-4.1c-1.2,0-1.4,0.2-1.4,1.2H287v-5.9l1.6-0.1v0.3l-0.2,0.1\n\t\t\t\tc-0.6,0.2-0.9,0.3-0.9,1.4v2.1h2.8V230c0-1.2-0.1-1.4-1.2-1.4v-0.3h2.9v0.3c-1,0-1.2,0.2-1.2,1.4v0.6h2c1.2,0,1.5-0.2,1.5-1.2\n\t\t\t\th0.3v3.4H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M292.5,226.9c-1.3,0-2.3-1.1-2.3-2.5s1-2.5,2.3-2.5s2.3,1.1,2.3,2.5\n\t\t\t\tC294.8,225.8,293.8,226.9,292.5,226.9z M292.5,222.9c-1,0-1.8,0.5-1.8,1.5s0.8,1.5,1.8,1.5s1.8-0.5,1.8-1.5\n\t\t\t\tS293.5,222.9,292.5,222.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,220.8c0-0.8-0.2-1-1.5-1h-0.6c-1.2,0-1.4,0.2-1.4,1h-0.3l-0.3-1.7c0.1-0.1,0.6-0.2,0.9-0.2\n\t\t\t\tc-0.5-0.2-0.9-0.8-0.9-1.3c0-0.7,0.5-1,0.8-1s0.6,0.1,0.6,0.5c0,0.2-0.2,0.4-0.4,0.4c-0.3,0-0.4,0.2-0.4,0.4c0,0.3,0.5,1,1.5,1\n\t\t\t\th0.7c1.2,0,1.5-0.1,1.5-1h0.3v2.9L294.3,220.8L294.3,220.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,215.9c0-0.8-0.2-1-1.5-1h-0.6c-1.2,0-1.4,0.2-1.4,1h-0.3l-0.3-1.7c0.1-0.1,0.6-0.2,0.9-0.2\n\t\t\t\tc-0.4-0.3-0.9-0.9-0.9-1.6c0-0.8,0.4-1.2,0.9-1.3c-0.4-0.3-0.9-1-0.9-1.7c0-1.1,0.8-1.4,1.9-1.4h0.8c1.2,0,1.5-0.2,1.5-1h0.3v2.6\n\t\t\t\th-0.3c0-0.7-0.1-0.8-1.5-0.8h-0.7c-0.8,0-1.3,0.2-1.3,0.9c0,0.4,0.5,1.3,1.2,1.3h0.8c1.3,0,1.5-0.1,1.5-0.8h0.3v2.5h-0.3\n\t\t\t\tc0-0.7-0.1-0.8-1.5-0.8h-0.7c-0.8,0-1.3,0.2-1.3,0.9c0,0.4,0.5,1.3,1.2,1.3h0.8c1.3,0,1.5-0.1,1.5-0.8h0.3v2.6H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M293.7,206.1c-1.1,0-1.5-1.2-1.8-2.7c-0.9,0-1.3,0.1-1.3,0.8c0,0.3,0.2,0.7,0.6,0.7\n\t\t\t\tc0.2,0,0.4,0.2,0.4,0.4s-0.2,0.4-0.4,0.4c-0.6,0-1-0.8-1-1.6c0-1.2,0.5-1.7,1.7-1.7h1.9c0.3,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.3l0.2-0.2c0.2,0.2,0.4,0.5,0.4,0.8c0,0.5-0.3,0.8-0.7,0.8c0.5,0.6,0.7,1.1,0.7,1.6\n\t\t\t\tC294.8,205.6,294.4,206.1,293.7,206.1z M293.6,203.4h-1.3c0.3,1.2,0.7,1.7,1.2,1.7c0.4,0,0.6-0.3,0.6-0.6\n\t\t\t\tC294.2,204.3,294.1,204,293.6,203.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,201.3c0-0.8-0.2-1-1.5-1h-3.9c-1.2,0-1.5,0.2-1.5,1h-0.3l-0.3-1.9h6c1.2,0,1.5-0.2,1.5-1\n\t\t\t\th0.3v2.9H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,194.8c0-1-0.2-1.2-1.5-1.2h-4.1c-1.2,0-1.4,0.1-1.4,1.2H287v-3.4h0.3c0,1,0.2,1.2,1.4,1.2\n\t\t\t\th4.1c1.2,0,1.5-0.1,1.5-1.2h0.3v3.4H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,190.5c0-0.8-0.2-1-1.5-1h-0.6c-1.2,0-1.4,0.2-1.4,1h-0.3l-0.3-1.7c0.1-0.1,0.6-0.2,0.9-0.2\n\t\t\t\tc-0.4-0.3-0.9-0.9-0.9-1.7c0-1.1,0.8-1.6,1.9-1.6h0.8c1.2,0,1.5-0.1,1.5-1h0.3v2.9h-0.3c0-0.8-0.2-1-1.5-1h-0.7\n\t\t\t\tc-0.8,0-1.3,0.3-1.3,1s0.6,1.4,1.2,1.4h0.8c1.3,0,1.5-0.1,1.5-0.9h0.3v2.7h-0.4V190.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M291.4,183.3c-0.5,0.2-0.7,0.4-0.7,0.8h-0.2v-2.2h0.2c0,0.6,0.1,0.6,0.7,0.4l2.1-0.9l-2.1-0.9\n\t\t\t\tc-0.5-0.2-0.7-0.2-0.7,0.4h-0.2v-1.7h0.2c0,0.4,0.2,0.6,0.7,0.9l3.4,1.5v0.2L291.4,183.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M288.5,177.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5s0.6,0.2,0.6,0.5\n\t\t\t\tC289,177.6,288.8,177.8,288.5,177.8z M294.3,178.7c0-0.8-0.2-1-1.5-1h-0.6c-1.2,0-1.4,0.2-1.4,1h-0.3l-0.3-1.9h2.6\n\t\t\t\tc1.2,0,1.5-0.1,1.5-1h0.3v2.9H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M293.4,174.6h-2.5v0.6h-0.3c-0.2-0.7-0.7-1-1.5-1.1v-0.4h1.4v-1.1h0.4v1.1h2.5\n\t\t\t\tc0.6,0,0.9-0.2,0.9-0.6c0-0.2-0.1-0.5-0.4-0.8l0.2-0.2c0.4,0.3,0.7,0.9,0.7,1.3C294.8,174.1,294.3,174.6,293.4,174.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M293.7,171.3c-1.1,0-1.5-1.2-1.8-2.7c-0.9,0-1.3,0.1-1.3,0.8c0,0.3,0.2,0.7,0.6,0.7\n\t\t\t\tc0.2,0,0.4,0.2,0.4,0.4s-0.2,0.4-0.4,0.4c-0.6,0-1-0.8-1-1.6c0-1.2,0.5-1.7,1.7-1.7h1.9c0.3,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.3l0.2-0.2c0.2,0.2,0.4,0.5,0.4,0.8c0,0.5-0.3,0.8-0.7,0.8c0.5,0.6,0.7,1.1,0.7,1.6\n\t\t\t\tC294.8,170.8,294.4,171.3,293.7,171.3z M293.6,168.7h-1.3c0.3,1.2,0.7,1.7,1.2,1.7c0.4,0,0.6-0.3,0.6-0.6\n\t\t\t\tC294.2,169.5,294.1,169.2,293.6,168.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M293.4,165.8h-2.5v0.6h-0.3c-0.2-0.7-0.7-1-1.5-1.1v-0.4h1.4v-1.1h0.4v1.1h2.5\n\t\t\t\tc0.6,0,0.9-0.2,0.9-0.6c0-0.2-0.1-0.5-0.4-0.8l0.2-0.2c0.4,0.3,0.7,0.9,0.7,1.3C294.8,165.3,294.3,165.8,293.4,165.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M288.5,161.7c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5s0.6,0.2,0.6,0.5\n\t\t\t\tC289,161.5,288.8,161.7,288.5,161.7z M294.3,162.6c0-0.8-0.2-1-1.5-1h-0.6c-1.2,0-1.4,0.2-1.4,1h-0.3l-0.3-1.9h2.6\n\t\t\t\tc1.2,0,1.5-0.1,1.5-1h0.3v2.9H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M292.5,158.9c-1.3,0-2.3-1.1-2.3-2.5s1-2.5,2.3-2.5s2.3,1.1,2.3,2.5\n\t\t\t\tC294.8,157.8,293.8,158.9,292.5,158.9z M292.5,154.9c-1,0-1.8,0.5-1.8,1.5s0.8,1.5,1.8,1.5s1.8-0.5,1.8-1.5\n\t\t\t\tS293.5,154.9,292.5,154.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,152.8c0-0.8-0.2-1-1.5-1h-0.6c-1.2,0-1.4,0.2-1.4,1h-0.3l-0.3-1.7c0.1-0.1,0.6-0.2,0.9-0.2\n\t\t\t\tc-0.4-0.3-0.9-0.9-0.9-1.7c0-1.1,0.8-1.6,1.9-1.6h0.8c1.2,0,1.5-0.1,1.5-1h0.3v2.9h-0.3c0-0.8-0.2-1-1.5-1h-0.7\n\t\t\t\tc-0.8,0-1.3,0.3-1.3,1s0.6,1.4,1.2,1.4h0.8c1.3,0,1.5-0.1,1.5-0.9h0.3v2.7h-0.4V152.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M293,145.8v-0.3c0.6,0,1.4-0.5,1.4-1.4c0-0.4-0.3-0.7-0.6-0.7c-0.3,0-0.5,0.3-0.8,0.7l-0.4,0.7\n\t\t\t\tc-0.3,0.6-0.8,0.8-1.2,0.8c-0.7,0-1.1-0.6-1.1-1.3c0-0.6,0.3-0.9,0.3-1.1c0,0-0.1-0.1-0.3-0.1V143h1.4v0.3c-0.5,0-1,0.4-1,1\n\t\t\t\tc0,0.4,0.2,0.6,0.5,0.6s0.5-0.2,0.8-0.8l0.3-0.6c0.3-0.5,0.7-0.9,1.2-0.9c0.8,0,1.4,0.7,1.4,1.5c0,0.6-0.4,1-0.4,1.2\n\t\t\t\tc0,0.1,0.1,0.2,0.4,0.2v0.3H293z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M293.4,138.2h-2.5v0.6h-0.3c-0.2-0.7-0.7-1-1.5-1.1v-0.4h1.4v-1.1h0.4v1.1h2.5\n\t\t\t\tc0.6,0,0.9-0.2,0.9-0.6c0-0.2-0.1-0.5-0.4-0.8l0.2-0.2c0.4,0.3,0.7,0.9,0.7,1.3C294.8,137.8,294.3,138.2,293.4,138.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M292.5,134.9c-1.3,0-2.3-1.1-2.3-2.5s1-2.5,2.3-2.5s2.3,1.1,2.3,2.5\n\t\t\t\tC294.8,133.8,293.8,134.9,292.5,134.9z M292.5,130.9c-1,0-1.8,0.5-1.8,1.5s0.8,1.5,1.8,1.5s1.8-0.5,1.8-1.5\n\t\t\t\tS293.5,130.9,292.5,130.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,125.9c0-0.8-0.2-1-1.5-1h-2v1h-0.4v-1h-1.2c-1.7,0-2.3-1-2.3-2c0-0.8,0.5-1.2,0.9-1.2\n\t\t\t\tc0.2,0,0.4,0.1,0.4,0.4c0,0.6-1,0.3-1,1.1c0,0.6,0.5,0.9,1.9,0.9h1.2v-1.2h0.4v1.2h2c1.2,0,1.5-0.1,1.5-1h0.3v2.9h-0.2V125.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M292.5,121.9c-1.3,0-2.3-1.1-2.3-2.5s1-2.5,2.3-2.5s2.3,1.1,2.3,2.5S293.8,121.9,292.5,121.9z\n\t\t\t\t M292.5,117.9c-1,0-1.8,0.5-1.8,1.5s0.8,1.5,1.8,1.5s1.8-0.5,1.8-1.5S293.5,117.9,292.5,117.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,116c0-0.8-0.2-1-1.5-1h-3.9c-1.2,0-1.5,0.2-1.5,1h-0.3l-0.3-1.9h6c1.2,0,1.5-0.2,1.5-1h0.3\n\t\t\t\tv2.9H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294.3,112.7c0-0.8-0.2-1-1.5-1h-3.9c-1.2,0-1.5,0.2-1.5,1h-0.3l-0.3-1.9h6c1.2,0,1.5-0.2,1.5-1\n\t\t\t\th0.3v2.9H294.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M292.5,109c-1.3,0-2.3-1.1-2.3-2.5s1-2.5,2.3-2.5s2.3,1.1,2.3,2.5S293.8,109,292.5,109z\n\t\t\t\t M292.5,105c-1,0-1.8,0.5-1.8,1.5s0.8,1.5,1.8,1.5s1.8-0.5,1.8-1.5C294.3,105.4,293.5,105,292.5,105z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M291.4,102.6c-0.5,0.2-0.7,0.4-0.7,0.8h-0.2v-2.2h0.2c0,0.6,0.1,0.6,0.7,0.4l2.1-0.8l-3-1.3v-0.2\n\t\t\t\tl3-1.3l-2.1-0.9c-0.5-0.2-0.7-0.2-0.7,0.4h-0.2v-1.7h0.2c0,0.4,0.2,0.6,0.7,0.9l3.4,1.5v0.2l-3,1.3l3,1.3v0.2L291.4,102.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M294,95.2c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7\n\t\t\t\tC294.7,94.9,294.4,95.2,294,95.2z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M189.9,212.3c0-1.2-0.2-1.3-1.6-1.3h-4.6c-1.4,0-1.6,0.2-1.6,1.3h-0.3v-3.7c0-1.9,1.1-3,2.4-3\n\t\t\t\ts2.4,1.1,2.4,3v1.2h1.8c1.4,0,1.6-0.2,1.6-1.3h0.3v3.8H189.9z M186,208.6c0-1.2-0.8-1.8-1.8-1.8s-1.8,0.6-1.8,1.8v1.2h3.7\n\t\t\t\tL186,208.6L186,208.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M189.9,204.8c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1H182l-0.4-2.1h6.7\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2L189.9,204.8L189.9,204.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M187.8,200.7c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C190.4,199.6,189.2,200.7,187.8,200.7z M187,197.1\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V197.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M189.2,194.8c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC190.4,194.2,189.9,194.8,189.2,194.8z M189,191.8h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC189.7,192.8,189.6,192.4,189,191.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M188.4,189v-0.3c0.6,0,1.6-0.5,1.6-1.5c0-0.5-0.3-0.8-0.7-0.8s-0.6,0.3-0.9,0.8L188,188\n\t\t\t\tc-0.4,0.7-1,0.9-1.4,0.9c-0.8,0-1.3-0.7-1.3-1.4s0.3-1,0.3-1.2c0-0.1-0.1-0.1-0.3-0.1v-0.3h1.6v0.3c-0.6,0-1.2,0.4-1.2,1.1\n\t\t\t\tc0,0.5,0.3,0.7,0.6,0.7s0.5-0.2,0.9-0.9l0.4-0.7c0.4-0.6,0.8-1,1.3-1c0.9,0,1.5,0.8,1.5,1.7c0,0.6-0.4,1.1-0.4,1.3\n\t\t\t\tc0,0.1,0.1,0.2,0.4,0.2v0.3L188.4,189L188.4,189z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M187.8,184.2c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C190.4,183.2,189.2,184.2,187.8,184.2z M187,180.7\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V180.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M188.4,175.1v-0.3c0.6,0,1.6-0.5,1.6-1.5c0-0.5-0.3-0.8-0.7-0.8s-0.6,0.3-0.9,0.8l-0.4,0.8\n\t\t\t\tc-0.4,0.7-1,0.9-1.4,0.9c-0.8,0-1.3-0.7-1.3-1.4s0.3-1,0.3-1.2c0-0.1-0.1-0.1-0.3-0.1V172h1.6v0.3c-0.6,0-1.2,0.4-1.2,1.1\n\t\t\t\tc0,0.5,0.3,0.7,0.6,0.7s0.5-0.2,0.9-0.9l0.4-0.7c0.4-0.6,0.8-1,1.3-1c0.9,0,1.5,0.8,1.5,1.7c0,0.6-0.4,1.1-0.4,1.3\n\t\t\t\tc0,0.1,0.1,0.2,0.4,0.2v0.3L188.4,175.1L188.4,175.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M189.2,170.3c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC190.4,169.7,189.9,170.3,189.2,170.3z M189,167.3h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC189.7,168.3,189.6,168,189,167.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M186.6,164.3c-0.6,0.3-0.8,0.5-0.8,1h-0.3v-2.5h0.3c0,0.6,0.2,0.7,0.8,0.4l2.3-1l-2.3-1\n\t\t\t\tc-0.6-0.3-0.8-0.2-0.8,0.4h-0.3v-2h0.3c0,0.5,0.2,0.7,0.8,1l3.8,1.7v0.3L186.6,164.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M187.8,159c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C190.4,158,189.2,159,187.8,159z M187,155.5c-0.4-0.2-1.1,0.1-1.1,1\n\t\t\t\tc0,0.6,0.4,1.1,1.1,1.3V155.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M188.8,149.4H186v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8c0.7,0,1-0.2,1-0.6\n\t\t\t\tc0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C190.4,148.9,189.9,149.4,188.8,149.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M189.9,146.1c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1H182l-0.4-2.1h4.7\n\t\t\t\tc-0.5-0.4-1-1-1-1.8c0-1.3,0.9-1.7,2.1-1.7h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.1h-0.3c0-0.9-0.2-1-1.6-1h-0.8\n\t\t\t\tc-0.9,0-1.5,0.3-1.5,1.1c0,0.7,0.6,1.5,1.4,1.5h0.9c1.5,0,1.6-0.1,1.6-0.9h0.3v3h-0.3V146.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M187.8,138.4c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C190.4,137.4,189.2,138.4,187.8,138.4z M187,134.9\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V134.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M187.8,129.2c-1.4,0-2.6-1.1-2.6-2.4c0-0.7,0.3-1.3,0.8-1.7h-2.3c-1.4,0-1.6,0.2-1.6,1.1h-0.3\n\t\t\t\tl-0.4-2.1h6.7c1.3,0,1.5-0.2,1.5-1h0.3l0.4,1.7c-0.1,0.1-0.6,0.2-0.8,0.2c0.5,0.4,0.9,1,0.9,1.7\n\t\t\t\tC190.4,128.1,189.2,129.2,187.8,129.2z M188.7,125.1h-1.8c-0.7,0.3-1.1,0.8-1.1,1.4c0,1.1,0.9,1.6,2,1.6s2-0.5,2-1.6\n\t\t\t\tC189.8,125.9,189.4,125.4,188.7,125.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M189.2,122.1c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC190.4,121.5,189.9,122.1,189.2,122.1z M189,119.1h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC189.7,120.1,189.6,119.7,189,119.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M188.8,115.8H186v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8c0.7,0,1-0.2,1-0.6\n\t\t\t\tc0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C190.4,115.3,189.9,115.8,188.8,115.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M187.8,112.2c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C190.4,111.1,189.2,112.2,187.8,112.2z M187,108.6\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V108.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,244.4c0-0.9-0.2-1.1-1.6-1.1h-2.2v1.1h-0.5v-1.1H201c-1.9,0-2.6-1.1-2.6-2.3\n\t\t\t\tc0-0.9,0.6-1.4,1-1.4c0.3,0,0.5,0.2,0.5,0.5c0,0.7-1.1,0.3-1.1,1.2c0,0.7,0.6,1.1,2.2,1.1h1.3V241h0.5v1.4h2.2\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2L206.7,244.4L206.7,244.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.6,239.9c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8\n\t\t\t\tS206,239.9,204.6,239.9z M204.6,235.3c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7C206.7,235.9,205.8,235.3,204.6,235.3z\n\t\t\t\t\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,233c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.6-0.3-1-0.9-1-1.5c0-0.8,0.5-1.1,0.9-1.1c0.3,0,0.7,0.1,0.7,0.6c0,0.3-0.2,0.5-0.5,0.5\n\t\t\t\ts-0.5,0.2-0.5,0.4c0,0.3,0.5,1.1,1.6,1.1h0.8c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H206.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M205.6,223.6h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8\n\t\t\t\tc0.7,0,1-0.2,1-0.6c0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C207.2,223.1,206.7,223.6,205.6,223.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,220.4c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h4.7\n\t\t\t\tc-0.5-0.4-1-1-1-1.8c0-1.3,0.9-1.7,2.1-1.7h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.1h-0.3c0-0.9-0.2-1-1.6-1h-0.8\n\t\t\t\tc-0.9,0-1.5,0.3-1.5,1.1c0,0.7,0.6,1.5,1.4,1.5h0.9c1.5,0,1.6-0.1,1.6-0.9h0.3v3h-0.3L206.7,220.4L206.7,220.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.6,212.7c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C207.2,211.6,206,212.7,204.6,212.7z M203.8,209.1\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V209.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,203.6c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.8c0-0.9,0.4-1.3,1.1-1.5c-0.5-0.3-1.1-1.1-1.1-2c0-1.2,0.9-1.6,2.1-1.6h0.9\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3h-0.3c0-0.8-0.2-0.9-1.6-0.9h-0.8c-0.9,0-1.5,0.3-1.5,1c0,0.5,0.5,1.5,1.4,1.5h0.9\n\t\t\t\tc1.5,0,1.6-0.1,1.6-0.9h0.3v2.8h-0.3c0-0.8-0.2-0.9-1.6-0.9h-0.8c-0.9,0-1.5,0.3-1.5,1c0,0.5,0.5,1.4,1.4,1.4h0.9\n\t\t\t\tc1.5,0,1.6-0.1,1.6-0.9h0.3v3L206.7,203.6L206.7,203.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206,192.6c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC207.2,192,206.7,192.6,206,192.6z M205.8,189.6h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC206.5,190.6,206.4,190.2,205.8,189.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,186.9c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.6-0.3-1-0.9-1-1.5c0-0.8,0.5-1.1,0.9-1.1c0.3,0,0.7,0.1,0.7,0.6c0,0.3-0.2,0.5-0.5,0.5\n\t\t\t\ts-0.5,0.2-0.5,0.4c0,0.3,0.5,1.1,1.6,1.1h0.8c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H206.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,181.4c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.6-0.3-1-0.9-1-1.5c0-0.8,0.5-1.1,0.9-1.1c0.3,0,0.7,0.1,0.7,0.6c0,0.3-0.2,0.5-0.5,0.5\n\t\t\t\ts-0.5,0.2-0.5,0.4c0,0.3,0.5,1.1,1.6,1.1h0.8c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H206.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,175.9c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h3\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2L206.7,175.9L206.7,175.9z M200.1,175c-0.3,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6\n\t\t\t\tc0.4,0,0.6,0.3,0.6,0.6C200.7,174.7,200.4,175,200.1,175z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206,171.8c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC207.2,171.2,206.7,171.8,206,171.8z M205.8,168.8h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC206.5,169.8,206.4,169.5,205.8,168.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M208.1,165.5l0.2-0.3c1.3,1.2,1.9-0.2,1.9-1.3c0-0.9-0.4-1.7-1.1-1.7c-0.7,0-0.9,0.7-1,1.9\n\t\t\t\tc-0.1,1.1-0.5,2-1.3,2c-0.5,0-0.9-0.4-1.1-1.2c-0.3,0.7-1,1.2-1.7,1.2c-1.1,0-1.9-0.9-1.9-2.1c0-0.6,0.2-1.1,0.5-1.4\n\t\t\t\tc-0.3-0.3-0.5-0.8-0.5-1c0-1,1.1-1,1.2-0.5c0,0.6-0.6,0.3-0.6,0.8c0,0.1,0.1,0.3,0.2,0.4c0.3-0.3,0.7-0.4,1.1-0.4\n\t\t\t\tc1,0,1.8,0.9,1.9,1.8c0.1,0.6,0.2,1.6,0.6,1.6c0.4,0,0.5-0.8,0.5-1.3c0.2-1.9,1-2.5,1.8-2.5c1.2,0,1.9,1.1,1.9,2.5\n\t\t\t\tC210.7,166.3,209,167.3,208.1,165.5z M204,163c-0.8,0-1.5,0.3-1.5,1s0.6,1,1.5,1c0.8,0,1.4-0.3,1.4-1S204.8,163,204,163z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.6,160.1c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C207.2,159,206,160.1,204.6,160.1z M203.8,156.6c-0.4-0.2-1.1,0.1-1.1,1\n\t\t\t\tc0,0.6,0.4,1.1,1.1,1.3V156.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.8,150.9c-1.7,0-2.7-1.4-2.7-2.5c0-1.2,0.5-1.7,1-1.7c0.2,0,0.6,0.1,0.6,0.6\n\t\t\t\tc0,0.3-0.3,0.5-0.6,0.5c-0.5,0-0.6,0.3-0.6,0.5c0,0.7,1,1.3,2.2,1.3c1.1,0,1.9-0.5,1.9-1.7c0-0.5-0.2-1-0.6-1.5l0.3-0.2\n\t\t\t\tc0.6,0.5,0.9,1.3,0.9,2.1C207.2,150,206.2,150.9,204.8,150.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.6,145.4c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C207.2,144.4,206,145.4,204.6,145.4z M203.8,141.9\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V141.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,139.9c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h6.7\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2L206.7,139.9L206.7,139.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.6,135.8c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C207.2,134.7,206,135.8,204.6,135.8z M203.8,132.2\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V132.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M200.6,129.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h4.6c-0.5-0.4-0.8-1-0.8-1.7\n\t\t\t\tc0-1.3,1.1-2.4,2.6-2.4c1.4,0,2.6,1.1,2.6,2.4c0,0.7-0.4,1.4-0.9,1.8l0.9,0.6v0.3L200.6,129.4L200.6,129.4z M204.6,125.4\n\t\t\t\tc-1.1,0-2,0.5-2,1.6c0,0.6,0.4,1.2,1.1,1.4h1.8c0.7-0.3,1.1-0.8,1.1-1.4C206.6,125.9,205.8,125.4,204.6,125.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,123c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.6-0.3-1-0.9-1-1.5c0-0.8,0.5-1.1,0.9-1.1c0.3,0,0.7,0.1,0.7,0.6c0,0.3-0.2,0.5-0.5,0.5\n\t\t\t\ts-0.5,0.2-0.5,0.4c0,0.3,0.5,1.1,1.6,1.1h0.8c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H206.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206,117.5c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC207.2,116.9,206.7,117.5,206,117.5z M205.8,114.5h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC206.5,115.5,206.4,115.1,205.8,114.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M205.6,111.2h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5V109h0.5v1.2h2.8c0.7,0,1-0.2,1-0.6\n\t\t\t\tc0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C207.2,110.7,206.7,111.2,205.6,111.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,107.7c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h3\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H206.7z M200.1,106.7c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6\n\t\t\t\tC200.7,106.4,200.4,106.7,200.1,106.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.6,103.5c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8\n\t\t\t\tS206,103.5,204.6,103.5z M204.6,99c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7C206.7,99.6,205.8,99,204.6,99z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,96.7c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.9c0-1.3,0.9-1.8,2.1-1.8h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3V93h-0.3c0-0.9-0.2-1.1-1.6-1.1\n\t\t\t\th-0.8c-0.9,0-1.5,0.3-1.5,1.2c0,0.8,0.6,1.6,1.4,1.6h0.9c1.4,0,1.6-0.1,1.6-1h0.3v3.1L206.7,96.7L206.7,96.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M204.6,85.5c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8S206,85.5,204.6,85.5z\n\t\t\t\t M204.6,81c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7C206.7,81.5,205.8,81,204.6,81z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M206.7,78.7c0-0.9-0.2-1.1-1.6-1.1h-2.2v1.1h-0.5v-1.1H201c-1.9,0-2.6-1.1-2.6-2.3\n\t\t\t\tc0-0.9,0.6-1.4,1-1.4c0.3,0,0.5,0.2,0.5,0.5c0,0.7-1.1,0.3-1.1,1.2c0,0.7,0.6,1,2.2,1h1.3v-1.4h0.5v1.4h2.2\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2C206.9,78.7,206.7,78.7,206.7,78.7z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M255.5,254.1c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8\n\t\t\t\tS256.9,254.1,255.5,254.1z M255.5,249.6c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7S256.6,249.6,255.5,249.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.5,247.3c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.9c0-1.3,0.9-1.8,2.1-1.8h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2h-0.3c0-0.9-0.2-1.1-1.6-1.1\n\t\t\t\th-0.8c-0.9,0-1.5,0.3-1.5,1.2c0,0.8,0.6,1.6,1.4,1.6h0.9c1.4,0,1.6-0.1,1.6-1h0.3v3.1h-0.3L257.5,247.3L257.5,247.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M256.5,235.6h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8\n\t\t\t\tc0.7,0,1-0.2,1-0.6c0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C258,235.1,257.5,235.6,256.5,235.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.5,232.4c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h4.7\n\t\t\t\tc-0.5-0.4-1-1-1-1.8c0-1.3,0.9-1.7,2.1-1.7h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.1h-0.3c0-0.9-0.2-1-1.6-1h-0.8\n\t\t\t\tc-0.9,0-1.5,0.3-1.5,1.1c0,0.7,0.6,1.5,1.4,1.5h0.9c1.5,0,1.6-0.1,1.6-0.9h0.3v3h-0.3L257.5,232.4L257.5,232.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M255.5,224.6c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C258.1,223.6,256.9,224.6,255.5,224.6z M254.6,221.1\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V221.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.8,212.2v2.9h-0.3l-1.9-2.5c-0.9-1.1-1.6-1.3-2.1-1.3c-0.8,0-1.3,0.6-1.3,1.5\n\t\t\t\tc0,1,1,1.9,2.1,1.2l0.4,0.4c-1,1.7-3.1,0.8-3.1-1.6c0-1.4,0.7-2.7,1.9-2.7c1.1,0,2,1.3,2,1.3l1.7,2.2V210l1.9,0.4v0.3\n\t\t\t\tC258,210.6,257.8,210.8,257.8,212.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M259.9,206.5c0-1.2-0.2-1.3-1.6-1.3h-1.1v3.2H257l-6-3.9v-0.3h5.8V204c0-1.3-0.3-1.4-1.1-1.6\n\t\t\t\tl-0.3-0.1V202l1.8,0.1v2h1.1c1.4,0,1.6-0.2,1.6-1.3h0.3v3.7H259.9L259.9,206.5z M256.7,205.2H253l3.7,2.4V205.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M256.5,200.2h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5V198h0.5v1.2h2.8c0.7,0,1-0.2,1-0.6\n\t\t\t\tc0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C258,199.7,257.5,200.2,256.5,200.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.5,196.9c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h4.7\n\t\t\t\tc-0.5-0.4-1-1-1-1.8c0-1.3,0.9-1.7,2.1-1.7h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.1h-0.3c0-0.9-0.2-1-1.6-1h-0.8\n\t\t\t\tc-0.9,0-1.5,0.3-1.5,1.1c0,0.7,0.6,1.5,1.4,1.5h0.9c1.5,0,1.6-0.1,1.6-0.9h0.3v3h-0.3L257.5,196.9L257.5,196.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M255.5,185.9c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8\n\t\t\t\tS256.9,185.9,255.5,185.9z M255.5,181.4c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7S256.6,181.4,255.5,181.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.5,179.1c0-0.9-0.2-1.1-1.6-1.1h-2.2v1.1h-0.5V178h-1.3c-1.9,0-2.6-1.1-2.6-2.3\n\t\t\t\tc0-0.9,0.6-1.4,1-1.4c0.3,0,0.5,0.2,0.5,0.5c0,0.7-1.1,0.3-1.1,1.2c0,0.7,0.6,1.1,2.2,1.1h1.3v-1.4h0.5v1.4h2.2\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2L257.5,179.1L257.5,179.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M255,171v-0.3c0,0,2.5,0,2.5-2.6c0-1-0.6-1.8-1.5-1.8c-0.6,0-1.2,0.6-1.7,1.6l-0.7,1.3\n\t\t\t\tc-0.4,0.8-1.2,1.6-2.3,1.6c-1.2,0-2.1-1-2.1-2.3c0-0.8,0.3-1.3,0.6-1.7c-0.1-0.2-0.4-0.3-0.6-0.4v-0.3h3.1v0.3\n\t\t\t\tc-1.1,0.1-2.5,0.5-2.5,2.1c0,0.8,0.5,1.4,1.2,1.4s1.1-0.5,1.7-1.7l0.7-1.3c0.5-1.1,1.4-1.5,2.1-1.5c1.5,0,2.5,1.2,2.5,2.7\n\t\t\t\tc0,1.1-0.6,1.7-0.7,2.2c0.1,0.2,0.4,0.3,0.7,0.4v0.3H255z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M255.5,164c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C258.1,163,256.9,164,255.5,164z M254.6,160.5c-0.4-0.2-1.1,0.1-1.1,1\n\t\t\t\tc0,0.6,0.4,1.1,1.1,1.3V160.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M261,158.5c0-0.9-0.2-1.1-1.6-1.1h-4.2c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.6-0.2,0.9-0.2c-0.5-0.4-0.9-1-0.9-1.7c0-1.3,1.1-2.4,2.6-2.4c1.4,0,2.6,1.1,2.6,2.4c0,0.7-0.3,1.3-0.8,1.7h2.2\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H261z M255.5,153.4c-1.1,0-2,0.5-2,1.6c0,0.6,0.4,1.2,1.1,1.4h1.8c0.7-0.3,1.1-0.8,1.1-1.4\n\t\t\t\tC257.5,153.9,256.6,153.4,255.5,153.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M256.5,150.5h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8\n\t\t\t\tc0.7,0,1-0.2,1-0.6c0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C258,150,257.5,150.5,256.5,150.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M255.5,146.8c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C258.1,145.8,256.9,146.8,255.5,146.8z M254.6,143.3\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V143.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.5,141c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.8c0-0.9,0.4-1.3,1.1-1.5c-0.5-0.3-1.1-1.1-1.1-2c0-1.2,0.9-1.6,2.1-1.6h0.9\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3h-0.3c0-0.8-0.2-0.9-1.6-0.9h-0.8c-0.9,0-1.5,0.3-1.5,1c0,0.5,0.5,1.5,1.4,1.5h0.9\n\t\t\t\tc1.5,0,1.6-0.1,1.6-0.9h0.3v2.8h-0.3c0-0.8-0.2-0.9-1.6-0.9h-0.8c-0.9,0-1.5,0.3-1.5,1c0,0.5,0.5,1.4,1.4,1.4h0.9\n\t\t\t\tc1.5,0,1.6-0.1,1.6-0.9h0.3v3L257.5,141L257.5,141z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M251.5,129.5c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h4.6c-0.5-0.4-0.8-1-0.8-1.7\n\t\t\t\tc0-1.3,1.1-2.4,2.6-2.4c1.4,0,2.6,1.1,2.6,2.4c0,0.7-0.4,1.4-0.9,1.8l0.9,0.6v0.3L251.5,129.5L251.5,129.5z M255.5,125.5\n\t\t\t\tc-1.1,0-2,0.5-2,1.6c0,0.6,0.4,1.2,1.1,1.4h1.8c0.7-0.3,1.1-0.8,1.1-1.4C257.5,126,256.6,125.5,255.5,125.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M255.5,123c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C258.1,122,256.9,123,255.5,123z M254.6,119.5c-0.4-0.2-1.1,0.1-1.1,1\n\t\t\t\tc0,0.6,0.4,1.1,1.1,1.3V119.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.5,117.3c0-0.9-0.2-1.1-1.6-1.1h-0.7c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.6-0.3-1-0.9-1-1.5c0-0.8,0.5-1.1,0.9-1.1c0.3,0,0.7,0.1,0.7,0.6c0,0.3-0.2,0.5-0.5,0.5\n\t\t\t\ts-0.5,0.2-0.5,0.4c0,0.3,0.5,1.1,1.6,1.1h0.8c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H257.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M259.3,111.6c-0.5-0.5-0.9-0.7-1.5-0.8v0.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7\n\t\t\t\ts0.3-0.8,0.9-0.8s1.6,0.4,2.1,1.3L259.3,111.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.8,101.4v2.9h-0.3l-1.9-2.5c-0.9-1.1-1.6-1.3-2.1-1.3c-0.8,0-1.3,0.6-1.3,1.5\n\t\t\t\tc0,1,1,1.9,2.1,1.2l0.4,0.4c-1,1.7-3.1,0.8-3.1-1.6c0-1.4,0.7-2.7,1.9-2.7c1.1,0,2,1.3,2,1.3l1.7,2.2v-3.6l1.9,0.3v0.3\n\t\t\t\tC258,99.8,257.8,100,257.8,101.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M254.8,97.2c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3S256.6,97.2,254.8,97.2z\n\t\t\t\t M254.8,91.6c-1.3,0-2.5,1.1-2.5,2.4s1.1,2.4,2.5,2.4c1.4,0,2.5-1.1,2.5-2.4C257.3,92.6,256.2,91.6,254.8,91.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M257.5,89.1c0-1.2-0.2-1.3-1.6-1.3h-2.2c-1.4,0-1.6,0.2-1.6,1.3h-0.3v-3.7h0.3\n\t\t\t\tc0,1.2,0.2,1.3,1.6,1.3h2.2c1.4,0,1.6-0.2,1.6-1.3h0.3v3.7H257.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M259.6,82.9l-6.8-3.3v2.3c0,1.3,0.3,1.4,1.1,1.6l0.3,0.1v0.3l-3.4-0.6V83c0.9,0,1.1-0.2,1.1-1.6\n\t\t\t\tv-2.5h0.4l7.6,3.1c0.5,0.2,0.8,0.4,0.7,0.8C260.4,82.9,260.1,83.2,259.6,82.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M256.8,74.2c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC258,73.6,257.6,74.2,256.8,74.2z M256.7,71.2h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC257.4,72.2,257.3,71.8,256.7,71.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M256.5,67.9h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8c0.7,0,1-0.2,1-0.6\n\t\t\t\tc0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C258,67.4,257.5,67.9,256.5,67.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,267c0-1.2-0.2-1.3-1.6-1.3h-4.6c-1.4,0-1.6,0.2-1.6,1.3h-0.3v-3.8h0.3\n\t\t\t\tc0,1.2,0.2,1.3,1.6,1.3h4.3c1.4,0,1.6-0.2,1.6-1.3v-1.7c0-1.3-0.3-1.4-1.1-1.6l-0.3-0.1v-0.3l1.9,0.1v7.3h-0.2L274.3,267\n\t\t\t\tL274.3,267z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M273.6,258.8c-1.2,0-1.7-1.4-2-3c-1.1,0-1.5,0.1-1.5,0.9c0,0.3,0.2,0.8,0.7,0.8\n\t\t\t\tc0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5c-0.7,0-1.1-0.9-1.1-1.8c0-1.4,0.6-1.9,1.9-1.9h2.1c0.4,0,0.5-0.1,0.5-0.3\n\t\t\t\tc0-0.1-0.1-0.3-0.2-0.4l0.3-0.2c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,0.9-0.8,1c0.6,0.7,0.8,1.2,0.8,1.8\n\t\t\t\tC274.8,258.2,274.4,258.8,273.6,258.8z M273.5,255.8h-1.4c0.3,1.3,0.8,1.9,1.4,1.9c0.4,0,0.7-0.3,0.7-0.7\n\t\t\t\tC274.2,256.8,274.1,256.4,273.5,255.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,253.1c0-0.9-0.2-1.1-1.6-1.1H272c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.9c0-1.3,0.9-1.8,2.1-1.8h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2h-0.3c0-0.9-0.2-1.1-1.6-1.1\n\t\t\t\th-0.8c-0.9,0-1.5,0.3-1.5,1.2c0,0.8,0.6,1.6,1.4,1.6h0.9c1.4,0,1.6-0.1,1.6-1h0.3v3.1h-0.3L274.3,253.1L274.3,253.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M275.7,244.7l0.2-0.3c1.3,1.2,1.9-0.2,1.9-1.3c0-0.9-0.4-1.7-1.1-1.7s-0.9,0.7-1,1.9\n\t\t\t\tc-0.1,1.1-0.5,2-1.3,2c-0.5,0-0.9-0.4-1.1-1.2c-0.3,0.7-1,1.2-1.7,1.2c-1.1,0-1.9-0.9-1.9-2.1c0-0.6,0.2-1.1,0.5-1.4\n\t\t\t\tc-0.3-0.3-0.5-0.8-0.5-1.1c0-1,1.1-1,1.2-0.5c0,0.6-0.6,0.3-0.6,0.8c0,0.1,0.1,0.3,0.2,0.4c0.3-0.3,0.7-0.4,1.1-0.4\n\t\t\t\tc1,0,1.8,0.9,1.9,1.8c0.1,0.6,0.2,1.6,0.6,1.6s0.5-0.8,0.5-1.3c0.2-1.9,1-2.5,1.8-2.5c1.2,0,1.9,1.1,1.9,2.5\n\t\t\t\tC278.4,245.5,276.6,246.5,275.7,244.7z M271.6,242.2c-0.8,0-1.5,0.3-1.5,1s0.6,1,1.5,1c0.8,0,1.4-0.3,1.4-1\n\t\t\t\tC273.1,242.5,272.5,242.2,271.6,242.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M273.3,238.9h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8\n\t\t\t\tc0.7,0,1-0.2,1-0.6c0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C274.8,238.3,274.3,238.9,273.3,238.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.3,235.2c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8\n\t\t\t\tS273.7,235.2,272.3,235.2z M272.3,230.6c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7\n\t\t\t\tC274.3,231.2,273.4,230.6,272.3,230.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,228.3c0-0.9-0.2-1.1-1.6-1.1H272c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.9c0-1.3,0.9-1.8,2.1-1.8h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2h-0.3c0-0.9-0.2-1.1-1.6-1.1\n\t\t\t\th-0.8c-0.9,0-1.5,0.3-1.5,1.2c0,0.8,0.6,1.6,1.4,1.6h0.9c1.4,0,1.6-0.1,1.6-1h0.3v3.1h-0.3L274.3,228.3L274.3,228.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M266.7,221c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c0.4,0,1,0.4,2.5,0.6v0.2\n\t\t\t\tC267.6,220.5,267,221,266.7,221z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.8,218.4v-0.3c0.6,0,1.6-0.5,1.6-1.5c0-0.5-0.3-0.8-0.7-0.8c-0.4,0-0.6,0.3-0.9,0.8l-0.4,0.8\n\t\t\t\tc-0.4,0.7-1,0.9-1.4,0.9c-0.8,0-1.3-0.7-1.3-1.4s0.3-1,0.3-1.2c0-0.1-0.1-0.1-0.3-0.1v-0.3h1.6v0.3c-0.6,0-1.2,0.4-1.2,1.1\n\t\t\t\tc0,0.5,0.3,0.7,0.6,0.7c0.3,0,0.5-0.2,0.9-0.9l0.4-0.7c0.4-0.6,0.8-1,1.3-1c0.9,0,1.5,0.8,1.5,1.7c0,0.6-0.4,1.1-0.4,1.3\n\t\t\t\tc0,0.1,0.1,0.2,0.4,0.2v0.3L272.8,218.4L272.8,218.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,210.5c0-1.2-0.2-1.3-1.6-1.3h-4.6c-1.4,0-1.6,0.2-1.6,1.3h-0.3v-3.8h0.3\n\t\t\t\tc0,1.2,0.2,1.3,1.6,1.3h1.8v-4.7h-1.8c-1.4,0-1.6,0.2-1.6,1.3h-0.3v-3.8h0.3c0,1.2,0.2,1.3,1.6,1.3h4.6c1.4,0,1.6-0.2,1.6-1.3\n\t\t\t\th0.3v3.8h-0.3c0-1.2-0.2-1.3-1.6-1.3h-2.3v4.7h2.3c1.4,0,1.6-0.2,1.6-1.3h0.3v3.8H274.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.3,199.8c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8\n\t\t\t\tS273.7,199.8,272.3,199.8z M272.3,195.3c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7S273.4,195.3,272.3,195.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.8,192.2h-0.9c-1.4,0-1.6,0.2-1.6,1.1H270v-2.1h2.7c0.9,0,1.5-0.3,1.5-1.1\n\t\t\t\tc0-0.5-0.5-1.5-1.4-1.5h-0.9c-1.4,0-1.6,0.2-1.6,1.1H270v-2.1h2.7c1.3,0,1.5-0.2,1.5-1h0.3l0.4,1.7c-0.1,0.1-0.6,0.2-0.9,0.2\n\t\t\t\tc0.4,0.4,0.9,1,0.9,1.8C274.9,191.7,274,192.2,272.8,192.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.8,185.6v-0.3c0.6,0,1.6-0.5,1.6-1.5c0-0.5-0.3-0.8-0.7-0.8c-0.4,0-0.6,0.3-0.9,0.8l-0.4,0.8\n\t\t\t\tc-0.4,0.7-1,0.9-1.4,0.9c-0.8,0-1.3-0.7-1.3-1.4s0.3-1,0.3-1.2c0-0.1-0.1-0.1-0.3-0.1v-0.3h1.6v0.3c-0.6,0-1.2,0.4-1.2,1.1\n\t\t\t\tc0,0.5,0.3,0.7,0.6,0.7c0.3,0,0.5-0.2,0.9-0.9l0.4-0.7c0.4-0.6,0.8-1,1.3-1c0.9,0,1.5,0.8,1.5,1.7c0,0.6-0.4,1.1-0.4,1.3\n\t\t\t\tc0,0.1,0.1,0.2,0.4,0.2v0.3L272.8,185.6L272.8,185.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.3,180.8c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C274.9,179.7,273.7,180.8,272.3,180.8z M271.4,177.3\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V177.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,171.8c0-1.2-0.2-1.3-1.6-1.3h-4.6c-1.4,0-1.6,0.2-1.6,1.3h-0.3V168h0.3\n\t\t\t\tc0,1.2,0.2,1.3,1.6,1.3h1.8v-4.7h-1.8c-1.4,0-1.6,0.2-1.6,1.3h-0.3v-3.8h0.3c0,1.2,0.2,1.3,1.6,1.3h4.6c1.4,0,1.6-0.2,1.6-1.3\n\t\t\t\th0.3v3.8h-0.3c0-1.2-0.2-1.3-1.6-1.3h-2.3v4.7h2.3c1.4,0,1.6-0.2,1.6-1.3h0.3v3.8H274.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.3,161.1c-1.4,0-2.6-1.3-2.6-2.8s1.1-2.8,2.6-2.8c1.4,0,2.6,1.3,2.6,2.8\n\t\t\t\tS273.7,161.1,272.3,161.1z M272.3,156.5c-1.1,0-2,0.5-2,1.7c0,1.1,0.9,1.7,2,1.7s2-0.5,2-1.7\n\t\t\t\tC274.3,157.1,273.4,156.5,272.3,156.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M273.3,153.6h-2.8v0.7h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8\n\t\t\t\tc0.7,0,1-0.2,1-0.6c0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C274.8,153.1,274.3,153.6,273.3,153.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.3,149.9c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C274.9,148.9,273.7,149.9,272.3,149.9z M271.4,146.4\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V146.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,144.4c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h6.7\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2L274.3,144.4L274.3,144.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M276.1,139.6c-0.5-0.5-0.9-0.7-1.5-0.8v0.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7\n\t\t\t\ts0.3-0.8,0.9-0.8s1.6,0.4,2.1,1.3L276.1,139.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,132.8c0-1.2-0.2-1.3-1.6-1.3h-4.6c-1.4,0-1.6,0.2-1.6,1.3h-0.3V129h0.3\n\t\t\t\tc0,1.2,0.2,1.3,1.6,1.3h2l-2.5-2.9c-0.8-0.9-1.1-0.9-1.1-0.1h-0.3v-3.2h0.3c0,1.1,0.3,1.6,1.1,2.6l2.1,2.5l3.8-4.3\n\t\t\t\tc0.4-0.5,0.8-1.4,0.8-1.8h0.3v3.9h-0.3c0-0.9-0.3-1.1-0.8-0.5l-3.1,3.5l0.3,0.4h1.9c1.4,0,1.6-0.2,1.6-1.3h0.3v3.8L274.3,132.8\n\t\t\t\tL274.3,132.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,122.5c0-0.9-0.2-1.1-1.6-1.1H272c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h3\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H274.3z M267.7,121.6c-0.3,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6\n\t\t\t\tS268.1,121.6,267.7,121.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,118.8c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h6.7\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H274.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,115.1c0-0.9-0.2-1.1-1.6-1.1h-4.4c-1.4,0-1.6,0.2-1.6,1.1h-0.3L266,113h6l-1-1.2\n\t\t\t\tc-0.4-0.5-0.7-0.3-0.7,0.4H270v-2.8h0.3c0,0,0.1,0.9,0.5,1.5l1,1.2l2.3-2.3c0.2-0.2,0.3-0.6,0.3-0.8h0.3v1.6l-2.3,2.3l0.1,0.2\n\t\t\t\th0.3c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2L274.3,115.1L274.3,115.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M272.3,108.5c-1.5,0-2.6-1.3-2.6-2.6c0-1.2,1-2.2,2.2-1.9v3.4c1.3,0.2,2.3-0.4,2.3-1.8\n\t\t\t\tc0-0.5-0.3-1.1-0.6-1.5l0.3-0.3c0.5,0.5,0.9,1.3,0.9,2.1C274.9,107.4,273.7,108.5,272.3,108.5z M271.4,105\n\t\t\t\tc-0.4-0.2-1.1,0.1-1.1,1c0,0.6,0.4,1.1,1.1,1.3V105z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,102.7c0-0.9-0.2-1.1-1.6-1.1H272c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.9c0-1.3,0.9-1.8,2.1-1.8h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3V99h-0.3c0-0.9-0.2-1.1-1.6-1.1\n\t\t\t\th-0.8c-0.9,0-1.5,0.3-1.5,1.2c0,0.8,0.6,1.6,1.4,1.6h0.9c1.4,0,1.6-0.1,1.6-1h0.3v3.1L274.3,102.7L274.3,102.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,94.9c0-0.9-0.2-1.1-1.6-1.1H272c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-1.9\n\t\t\t\tc0.1-0.1,0.7-0.2,1-0.2c-0.5-0.4-1-1-1-1.9c0-1.3,0.9-1.8,2.1-1.8h0.9c1.4,0,1.6-0.2,1.6-1.1h0.3v3.2h-0.3c0-0.9-0.2-1.1-1.6-1.1\n\t\t\t\th-0.8c-0.9,0-1.5,0.3-1.5,1.2c0,0.8,0.6,1.6,1.4,1.6h0.9c1.4,0,1.6-0.1,1.6-1h0.3V95L274.3,94.9L274.3,94.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M278,87c-0.5,0-0.5-0.6-1.6-1.1l-1.8-0.7l-3.5,1.6c-0.6,0.3-0.8,0.5-0.8,0.9H270v-2.5h0.3\n\t\t\t\tc0,0.6,0.1,0.8,0.8,0.4l2.2-1l-2.2-0.9c-0.6-0.3-0.8-0.2-0.8,0.4H270v-2h0.3c0,0.4,0.2,0.7,0.8,1l6.8,2.7\n\t\t\t\tc0.3,0.1,0.5,0.3,0.5,0.5C278.4,86.7,278.3,87,278,87z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M270.4,78.1c-2.4,0-4.4-1.9-4.4-4.3c0-1,0.4-1.9,1.2-2.6c-0.1-0.2-0.4-0.4-0.8-0.5v-0.3h3.1v0.3\n\t\t\t\tc-1.8,0.4-2.9,1.5-2.9,3c0,2.2,2.2,3.1,3.9,3.1c1.7,0,3.9-0.8,3.9-3.1c0-1.6-1.1-2.6-2.9-3v-0.3h3.1v0.3\n\t\t\t\tc-0.3,0.1-0.7,0.3-0.8,0.5c0.7,0.7,1.2,1.6,1.2,2.6C274.9,76.2,272.9,78.1,270.4,78.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274.3,68.9c0-0.9-0.2-1.1-1.6-1.1H272c-1.4,0-1.6,0.2-1.6,1.1h-0.3l-0.4-2.1h3\n\t\t\t\tc1.4,0,1.6-0.2,1.6-1.1h0.3v3.2H274.3z M267.7,67.9c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6\n\t\t\t\tC268.4,67.6,268.1,67.9,267.7,67.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M273.3,64.3h-2.8V65h-0.3c-0.2-0.8-0.8-1.1-1.7-1.2v-0.5h1.5v-1.2h0.5v1.2h2.8c0.7,0,1-0.2,1-0.6\n\t\t\t\tc0-0.3-0.2-0.6-0.5-0.9l0.2-0.2c0.5,0.4,0.8,1,0.8,1.5C274.8,63.7,274.3,64.3,273.3,64.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M278,60.5c-0.5,0-0.5-0.6-1.6-1.1l-1.8-0.7l-3.5,1.6c-0.6,0.3-0.8,0.5-0.8,0.9H270v-2.5h0.3\n\t\t\t\tc0,0.6,0.1,0.8,0.8,0.4l2.2-1l-2.2-0.9c-0.6-0.3-0.8-0.2-0.8,0.4H270v-2h0.3c0,0.4,0.2,0.7,0.8,1l6.8,2.7\n\t\t\t\tc0.3,0.1,0.5,0.3,0.5,0.5C278.4,60.2,278.3,60.5,278,60.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M274,55.2c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8c0.4,0,0.8,0.3,0.8,0.8\n\t\t\t\tC274.7,54.8,274.4,55.2,274,55.2z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,282.8c0-1.5-0.3-1.7-2.1-1.7h-5.9c-1.8,0-2.1,0.2-2.1,1.7h-0.4V278c0-2.5,1.4-3.9,3-3.9\n\t\t\t\tc1.7,0,3,1.4,3,3.9v1.6h2.3c1.8,0,2.1-0.2,2.1-1.7h0.4v4.9H233.2z M228.1,278.1c0-1.6-1.1-2.3-2.4-2.3c-1.3,0-2.4,0.7-2.4,2.3\n\t\t\t\tv1.6h4.8L228.1,278.1L228.1,278.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M232.3,273.5c-1.5,0-2.2-1.8-2.6-3.8c-1.4,0-1.9,0.2-1.9,1.2c0,0.4,0.3,1,0.9,1\n\t\t\t\tc0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6c-0.9,0-1.4-1.1-1.4-2.3c0-1.7,0.7-2.5,2.4-2.5h2.7c0.5,0,0.7-0.1,0.7-0.4\n\t\t\t\tc0-0.2-0.1-0.4-0.3-0.5l0.3-0.3c0.4,0.3,0.6,0.8,0.6,1.2c0,0.7-0.4,1.1-1,1.2c0.8,0.9,1.1,1.5,1.1,2.3\n\t\t\t\tC233.8,272.8,233.2,273.5,232.3,273.5z M232.1,269.7h-1.8c0.4,1.7,1,2.5,1.8,2.5c0.6,0,0.9-0.4,0.9-0.8\n\t\t\t\tC233,271,232.8,270.5,232.1,269.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M231.8,265.5h-3.6v0.9h-0.4c-0.2-1.1-1-1.5-2.2-1.6v-0.6h2v-1.6h0.6v1.6h3.6\n\t\t\t\tc0.8,0,1.3-0.2,1.3-0.8c0-0.3-0.2-0.8-0.6-1.2l0.3-0.3c0.6,0.5,1,1.3,1,1.9C233.8,264.8,233.2,265.5,231.8,265.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,261c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.4\n\t\t\t\tc0.2-0.1,0.9-0.3,1.3-0.3c-0.7-0.4-1.3-1.2-1.3-1.9c0-1,0.7-1.4,1.1-1.4c0.4,0,0.8,0.2,0.8,0.7c0,0.3-0.3,0.6-0.6,0.6\n\t\t\t\tc-0.4,0-0.6,0.2-0.6,0.6s0.7,1.4,2.1,1.4h1c1.8,0,2.1-0.2,2.1-1.4h0.4v4.1L233.2,261L233.2,261z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,253.9c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h3.8\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1L233.2,253.9L233.2,253.9z M224.7,252.6c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8\n\t\t\t\tc0.5,0,0.8,0.4,0.8,0.8S225.1,252.6,224.7,252.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M230.7,248.6c-2.1,0-3.5-1.7-3.5-3.2s0.6-2.1,1.3-2.1c0.3,0,0.8,0.2,0.8,0.8\n\t\t\t\tc0,0.4-0.3,0.7-0.7,0.7c-0.6,0-0.8,0.3-0.8,0.6c0,1,1.2,1.7,2.9,1.7c1.4,0,2.4-0.7,2.4-2.2c0-0.6-0.3-1.3-0.8-1.9l0.4-0.3\n\t\t\t\tc0.7,0.7,1.2,1.7,1.2,2.7C233.8,247.4,232.5,248.6,230.7,248.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,242c0-1.2-0.3-1.4-2.1-1.4h-5.7c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h7.7l-1.2-1.5\n\t\t\t\tc-0.5-0.6-1-0.3-1,0.5h-0.4v-3.6h0.4c0,0,0.1,1.2,0.6,1.9l1.3,1.5l2.9-2.9c0.3-0.3,0.4-0.8,0.4-1.1h0.4v2l-3,2.9l0.2,0.2h0.3\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1h-0.3L233.2,242L233.2,242z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,229.6c0-1.5-0.3-1.7-2.1-1.7h-5.9c-1.8,0-2.1,0.2-2.1,1.7h-0.4v-4.9h0.4\n\t\t\t\tc0,1.5,0.3,1.7,2.1,1.7h2.5l-3.2-3.7c-1-1.1-1.5-1.2-1.5-0.1h-0.4v-4.2h0.4c0,1.4,0.4,2,1.5,3.3l2.7,3.2l4.8-5.6\n\t\t\t\tc0.6-0.7,1-1.8,1-2.3h0.4v5.1H233c0-1.2-0.4-1.4-1-0.7l-3.9,4.6l0.4,0.5h2.5c1.8,0,2.1-0.2,2.1-1.7h0.4v4.9h-0.3V229.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,216.4c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h3.8\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1L233.2,216.4L233.2,216.4z M224.7,215.2c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8\n\t\t\t\tc0.5,0,0.8,0.4,0.8,0.8S225.1,215.2,224.7,215.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,211.3c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.4\n\t\t\t\tc0.2-0.1,0.9-0.3,1.3-0.3c-0.7-0.4-1.3-1.2-1.3-1.9c0-1,0.7-1.4,1.1-1.4c0.4,0,0.8,0.2,0.8,0.7c0,0.3-0.3,0.6-0.6,0.6\n\t\t\t\tc-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.7,1.4,2.1,1.4h1c1.8,0,2.1-0.2,2.1-1.4h0.4v4.1L233.2,211.3L233.2,211.3z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M229,203.7c-0.8,0.3-1.1,0.6-1.1,1.2h-0.4v-3.2h0.4c0,0.8,0.2,0.9,1.1,0.6l3-1.2l-4.4-1.9v-0.4\n\t\t\t\tl4.4-1.8l-3-1.2c-0.8-0.3-1.1-0.3-1.1,0.5h-0.4v-2.5h0.4c0,0.6,0.3,0.9,1.1,1.3l4.9,2.1v0.4l-4.3,1.8l4.3,1.8v0.4L229,203.7z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M232.3,193.3c-1.5,0-2.2-1.8-2.6-3.8c-1.4,0-1.9,0.2-1.9,1.2c0,0.4,0.3,1,0.9,1\n\t\t\t\tc0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6c-0.9,0-1.4-1.1-1.4-2.3c0-1.7,0.7-2.5,2.4-2.5h2.7c0.5,0,0.7-0.1,0.7-0.4\n\t\t\t\tc0-0.2-0.1-0.4-0.3-0.5l0.3-0.3c0.4,0.3,0.6,0.8,0.6,1.2c0,0.7-0.4,1.1-1,1.2c0.8,0.9,1.1,1.5,1.1,2.3\n\t\t\t\tC233.8,192.5,233.2,193.3,232.3,193.3z M232.1,189.4h-1.8c0.4,1.7,1,2.5,1.8,2.5c0.6,0,0.9-0.4,0.9-0.8\n\t\t\t\tC233,190.7,232.8,190.3,232.1,189.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,186c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.4\n\t\t\t\tc0.2-0.1,0.9-0.3,1.3-0.3c-0.6-0.5-1.3-1.3-1.3-2.5c0-1.6,1.2-2.3,2.7-2.3h1.1c1.8,0,2.1-0.2,2.1-1.4h0.4v4.1h-0.4\n\t\t\t\tc0-1.2-0.3-1.4-2.1-1.4h-1c-1.2,0-1.9,0.4-1.9,1.5c0,1,0.8,2.1,1.8,2.1h1.2c1.9,0,2.1-0.1,2.1-1.3h0.4v4h-0.4L233.2,186\n\t\t\t\tL233.2,186z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M232.3,171.6c-1.5,0-2.2-1.8-2.6-3.8c-1.4,0-1.9,0.2-1.9,1.2c0,0.4,0.3,1,0.9,1\n\t\t\t\tc0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6c-0.9,0-1.4-1.1-1.4-2.3c0-1.7,0.7-2.5,2.4-2.5h2.7c0.5,0,0.7-0.1,0.7-0.4\n\t\t\t\tc0-0.2-0.1-0.4-0.3-0.5l0.3-0.3c0.4,0.3,0.6,0.8,0.6,1.2c0,0.7-0.4,1.1-1,1.2c0.8,0.9,1.1,1.5,1.1,2.3\n\t\t\t\tC233.8,170.9,233.2,171.6,232.3,171.6z M232.1,167.8h-1.8c0.4,1.7,1,2.5,1.8,2.5c0.6,0,0.9-0.4,0.9-0.8\n\t\t\t\tC233,169.1,232.8,168.6,232.1,167.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,164.4c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.4\n\t\t\t\tc0.2-0.1,0.9-0.3,1.3-0.3c-0.6-0.5-1.3-1.3-1.3-2.5c0-1.6,1.2-2.3,2.7-2.3h1.1c1.8,0,2.1-0.2,2.1-1.4h0.4v4.1h-0.4\n\t\t\t\tc0-1.2-0.3-1.4-2.1-1.4h-1c-1.2,0-1.9,0.4-1.9,1.5c0,1,0.8,2.1,1.8,2.1h1.2c1.9,0,2.1-0.1,2.1-1.3h0.4v4h-0.4L233.2,164.4\n\t\t\t\tL233.2,164.4z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M230.5,154.2c-1.8,0-3.3-1.4-3.3-3.1c0-0.9,0.4-1.7,1.1-2.2h-2.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4\n\t\t\t\tl-0.5-2.7h8.6c1.7,0,1.9-0.3,1.9-1.2h0.3l0.5,2.2c-0.2,0.1-0.8,0.2-1,0.3c0.6,0.5,1.1,1.2,1.1,2.2\n\t\t\t\tC233.8,152.8,232.3,154.2,230.5,154.2z M231.7,148.9h-2.3c-0.8,0.3-1.4,1-1.4,1.8c0,1.4,1.1,2.1,2.6,2.1s2.6-0.6,2.6-2.1\n\t\t\t\tC233.1,149.9,232.5,149.2,231.7,148.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M224.7,140.2c-1.3,0.4-1.6,0.6-1.6,2.1h-0.4v-5h0.4c0,1.5,0.4,1.7,1.4,1.4l6.2-2l-8-2.5V134\n\t\t\t\tl7.9-2.5l-6.2-2c-1-0.3-1.4,0-1.4,1.3h-0.4v-4.1h0.4c0,1.5,0.4,1.8,1.6,2.1l9.2,2.9v0.2l-8,2.5l8,2.5v0.2L224.7,140.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,127.2c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h3.8\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1H233.2z M224.7,125.9c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8c0.5,0,0.8,0.4,0.8,0.8\n\t\t\t\tC225.5,125.6,225.1,125.9,224.7,125.9z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,122.4c0-1.2-0.3-1.4-2.1-1.4h-5.7c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h8.6\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1H233.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,117.6c0-1.2-0.3-1.4-2.1-1.4h-5.7c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h8.6\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1H233.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,112.4c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.7h3.8\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v4.1H233.2z M224.7,111.1c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8c0.5,0,0.8,0.4,0.8,0.8\n\t\t\t\tC225.5,110.8,225.1,111.1,224.7,111.1z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M232.3,107.1c-1.5,0-2.2-1.8-2.6-3.8c-1.4,0-1.9,0.2-1.9,1.2c0,0.4,0.3,1,0.9,1\n\t\t\t\tc0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6c-0.9,0-1.4-1.1-1.4-2.3c0-1.7,0.7-2.5,2.4-2.5h2.7c0.5,0,0.7-0.1,0.7-0.4\n\t\t\t\tc0-0.2-0.1-0.4-0.3-0.5l0.3-0.3c0.4,0.3,0.6,0.8,0.6,1.2c0,0.7-0.4,1.1-1,1.2c0.8,0.9,1.1,1.5,1.1,2.2\n\t\t\t\tC233.8,106.3,233.2,107.1,232.3,107.1z M232.1,103.2h-1.8c0.4,1.7,1,2.5,1.8,2.5c0.6,0,0.9-0.4,0.9-0.8\n\t\t\t\tC233,104.5,232.8,104.1,232.1,103.2z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,99.8c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.4\n\t\t\t\tc0.2-0.1,0.9-0.3,1.3-0.3c-0.6-0.5-1.3-1.3-1.3-2.3c0-1.1,0.5-1.7,1.4-1.9c-0.6-0.4-1.4-1.5-1.4-2.5c0-1.6,1.2-2.1,2.7-2.1h1.1\n\t\t\t\tc1.8,0,2.1-0.2,2.1-1.4h0.4v3.8h-0.4c0-1-0.2-1.1-2.1-1.1h-1c-1.2,0-1.9,0.3-1.9,1.3c0,0.6,0.7,1.9,1.8,1.9h1.2\n\t\t\t\tc1.9,0,2.1-0.1,2.1-1.1h0.4v3.5h-0.4c0-1-0.2-1.1-2.1-1.1h-1c-1.2,0-1.9,0.4-1.9,1.3c0,0.6,0.7,1.9,1.8,1.9h1.2\n\t\t\t\tc1.9,0,2.1-0.1,2.1-1.1h0.4v3.8h-0.5L233.2,99.8L233.2,99.8z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M228.1,81.3c-3.1,0-5.7-2.7-5.7-6s2.6-6,5.7-6s5.7,2.7,5.7,6C233.8,78.6,231.3,81.3,228.1,81.3z\n\t\t\t\t M228.1,71c-2.2,0-5,1.2-5,4.3c0,3.1,2.8,4.3,5,4.3s5-1.2,5-4.3S230.4,71,228.1,71z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,67.6c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.4\n\t\t\t\tc0.2-0.1,0.9-0.3,1.3-0.3c-0.7-0.4-1.3-1.2-1.3-1.9c0-1,0.7-1.4,1.1-1.4c0.4,0,0.8,0.2,0.8,0.7c0,0.3-0.3,0.6-0.6,0.6\n\t\t\t\tc-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.7,1.4,2.1,1.4h1c1.8,0,2.1-0.2,2.1-1.4h0.4v4.1L233.2,67.6L233.2,67.6z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M235,59.8l0.2-0.3c1.7,1.5,2.5-0.3,2.5-1.7c0-1.1-0.5-2.2-1.4-2.2c-0.8,0-1.1,0.9-1.3,2.4\n\t\t\t\tc-0.1,1.5-0.6,2.6-1.7,2.6c-0.6,0-1.2-0.6-1.4-1.5c-0.4,0.9-1.2,1.5-2.2,1.5c-1.3,0-2.4-1.2-2.4-2.7c0-0.7,0.3-1.4,0.7-1.9\n\t\t\t\tc-0.4-0.3-0.7-1-0.7-1.3c0-1.2,1.5-1.3,1.5-0.6c0.1,0.8-0.8,0.3-0.8,1.1c0,0.1,0.1,0.4,0.3,0.6c0.4-0.3,0.9-0.5,1.5-0.5\n\t\t\t\tc1.3,0,2.3,1.2,2.4,2.3c0.1,0.8,0.3,2,0.8,2s0.6-1,0.7-1.6c0.2-2.5,1.3-3.3,2.4-3.3c1.5,0,2.4,1.4,2.4,3.2\n\t\t\t\tC238.3,60.8,236.1,62,235,59.8z M229.7,56.5c-1.1,0-1.9,0.4-1.9,1.3c0,0.9,0.8,1.3,1.9,1.3c1,0,1.9-0.4,1.9-1.3\n\t\t\t\tC231.5,56.9,230.7,56.5,229.7,56.5z\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M232.3,52.8c-1.5,0-2.2-1.8-2.6-3.8c-1.4,0-1.9,0.2-1.9,1.2c0,0.4,0.3,1,0.9,1\n\t\t\t\tc0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6c-0.9,0-1.4-1.1-1.4-2.3c0-1.7,0.7-2.5,2.4-2.5h2.7c0.5,0,0.7-0.1,0.7-0.4\n\t\t\t\tc0-0.2-0.1-0.4-0.3-0.5l0.3-0.3c0.4,0.3,0.6,0.8,0.6,1.2c0,0.7-0.4,1.1-1,1.2c0.8,0.9,1.1,1.5,1.1,2.3\n\t\t\t\tC233.8,52,233.2,52.8,232.3,52.8z M232.1,48.9h-1.8c0.4,1.7,1,2.5,1.8,2.5c0.6,0,0.9-0.4,0.9-0.8C233,50.2,232.8,49.8,232.1,48.9\n\t\t\t\tz\"/>\n\t\t\t<path style=\"fill:#FFFFFF;\" d=\"M233.2,45.5c0-1.2-0.3-1.4-2.1-1.4h-0.9c-1.8,0-2.1,0.2-2.1,1.4h-0.4l-0.5-2.4\n\t\t\t\tc0.2-0.1,0.9-0.3,1.3-0.3c-0.6-0.5-1.3-1.3-1.3-2.5c0-1.6,1.2-2.3,2.7-2.3h1.1c1.8,0,2.1-0.2,2.1-1.4h0.4v4.1h-0.4\n\t\t\t\tc0-1.2-0.3-1.4-2.1-1.4h-1c-1.2,0-1.9,0.4-1.9,1.5c0,1,0.8,2.1,1.8,2.1h1.2c1.9,0,2.1-0.1,2.1-1.3h0.4v4L233.2,45.5L233.2,45.5z\"\n\t\t\t\t/>\n\t\t</g>\n\t</g>\n</g>";
    };
    return TicketShapeNoText;
}(__WEBPACK_IMPORTED_MODULE_0_mo_js__["CustomShape"]));
//# sourceMappingURL=ticket-shape.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map