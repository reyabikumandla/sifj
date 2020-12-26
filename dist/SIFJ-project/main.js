(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 26, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["rel", "preconnect", "href", "https://fonts.gstatic.com"], ["href", "https://fonts.googleapis.com/css2?family=Langar&display=swap", "rel", "stylesheet"], ["id", "banner"], [1, "banner-text"], [1, "icons"], ["href", "https://www.facebook.com/ScottishIndiansForJustice/"], ["src", "../../assets/facebook_icon.png", "alt", "", 1, "fb_icon"], ["href", "https://twitter.com/ScotInd4Justice/media"], ["src", "../../assets/twitter_icon.png", "alt", "", 1, "twitter_icon"], ["href", "https://www.instagram.com/scottish_indians_justice/?hl=en"], ["src", "../../assets/instagram_icon.png", "alt", "", 1, "insta_icon"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "sifj website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SIFJ - STAND FOR JUSTICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Scottish Indians for Justice is a non- profit, non-government organisation established in January 2020.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " The organisation is based in Scotland and its members have a deep connection with India. We stand against injustice and believe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " that awareness and advocacy works in helping the oppressed and the suffering.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgb(240, 132, 128)), url('justice.jpeg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  height: 98vh;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n  position: absolute;\r\n  top: 3%;\r\n  left: 5%;\r\n}\r\n\r\n.banner-text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  \r\n  padding-top: 180px;\r\n}\r\n\r\n.banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 70px;\r\n  font-family: 'Langar', cursive;\r\n  color: #0065BF;\r\n  letter-spacing: 5px;\r\n}\r\n\r\n.banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  font-style: italic;\r\n  font-weight: 200;\r\n  color: #000000;\r\n}\r\n\r\n@media only screen and (max-width: 397px) {\r\n  .banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n  }\r\n\r\n  .banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 320px) {\r\n  .banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 280px) {\r\n  .banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 45px;\r\n  }\r\n}\r\n\r\n.fb_icon[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  margin-left: 650px;\r\n}\r\n\r\n.fb_icon[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.5);\r\n  transition: .4s;\r\n}\r\n\r\n.twitter_icon[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  margin-left: 100px;\r\n}\r\n\r\n.twitter_icon[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.5);\r\n  transition: .4s;\r\n}\r\n\r\n.insta_icon[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  margin-left: 100px;\r\n}\r\n\r\n.insta_icon[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.5);\r\n  transition: .4s;\r\n}\r\n\r\n.icons[_ngcontent-%COMP%] {\r\n  margin-top: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsMEdBQTRIO0VBQzVILHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiNiYW5uZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjQ1LCAyNDYsIDI1MiwgMC41MiksIHJnYigyNDAsIDEzMiwgMTI4KSksIHVybCguLi8uLi9hc3NldHMvSW1hZ2VzL2p1c3RpY2UuanBlZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA5OHZoO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzJTtcclxuICBsZWZ0OiA1JTtcclxufVxyXG5cclxuLmJhbm5lci10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogY29sb3I6ICM1NjU2NTY7ICovXHJcbiAgcGFkZGluZy10b3A6IDE4MHB4O1xyXG59XHJcblxyXG4uYmFubmVyLXRleHQgaDEge1xyXG4gIGZvbnQtc2l6ZTogNzBweDtcclxuICBmb250LWZhbWlseTogJ0xhbmdhcicsIGN1cnNpdmU7XHJcbiAgY29sb3I6ICMwMDY1QkY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxufVxyXG5cclxuLmJhbm5lci10ZXh0IHAge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTdweCkge1xyXG4gIC5iYW5uZXItdGV4dCBoMSB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuYmFubmVyLXRleHQgcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgLmJhbm5lci10ZXh0IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjgwcHgpIHtcclxuICAuYmFubmVyLXRleHQgaDEge1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZiX2ljb24ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2NTBweDtcclxufVxyXG5cclxuLmZiX2ljb246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbi50d2l0dGVyX2ljb24ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG5cclxuLnR3aXR0ZXJfaWNvbjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLmluc3RhX2ljb24ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG5cclxuLmluc3RhX2ljb246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbi5pY29ucyB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 35, vars: 0, consts: [["name", "viewport", "content", "width=device-width"], ["http-equiv", "Content-Type", "content", "text/html; charset=utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=0.5, user-scalable=no"], ["rel", "preconnect", "href", "https://fonts.gstatic.com"], ["href", "https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap", "rel", "stylesheet"], ["href", "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap", "rel", "stylesheet"], [1, "header", "header-fixed"], [1, "navbar", "container"], [1, "logo"], ["src", "assets/Images/darker_logo.png", "alt", "", 1, "logo"], ["type", "checkbox", "id", "navbar-toggle"], ["for", "navbar-toggle"], [1, "menu"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "ContactUs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.header-fixed[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 1;\r\n  width: 100%;\r\n  background-color: #565656;\r\n  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  color: #fff;\r\n  line-height: 60px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover {\r\n  color: #777777;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\r\n  flex: 8;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  cursor: pointer;\r\n  padding: 28px 20px;\r\n  position: relative;\r\n  z-index: 3;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  height: 2px;\r\n  position: relative;\r\n  transition: background .2s ease-out;\r\n  width: 18px;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before, .navbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  height: 100%;\r\n  position: absolute;\r\n  transition: all .2s ease-out;\r\n  width: 100%;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before, .navbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n  background: #eee;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before {\r\n  top: 5px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:after {\r\n  top: -5px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   #navbar-toggle[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   #navbar-toggle[_ngcontent-%COMP%]:checked ~ .menu[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n  opacity: 0.99;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   #navbar-toggle[_ngcontent-%COMP%]:checked ~ label[_ngcontent-%COMP%] {\r\n  background: #212121;\r\n  border-radius: 50%;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   #navbar-toggle[_ngcontent-%COMP%]:checked ~ label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   #navbar-toggle[_ngcontent-%COMP%]:checked ~ label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   #navbar-toggle[_ngcontent-%COMP%]:checked ~ label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:after {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   #navbar-toggle[_ngcontent-%COMP%]:checked ~ label[_ngcontent-%COMP%]:not(.steps)   i[_ngcontent-%COMP%]:before, .header[_ngcontent-%COMP%]   #navbar-toggle[_ngcontent-%COMP%]:checked ~ label[_ngcontent-%COMP%]:not(.steps)   i[_ngcontent-%COMP%]:after {\r\n  top: 0;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   header-fixed[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   container[_ngcontent-%COMP%], .logo[_ngcontent-%COMP%], .sifj_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 90px;\r\n  height: 82px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    z-index: 2;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: all 0.3s ease-out;\r\n    display: table;\r\n    background: #ddd;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 20px 0;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 20px 0;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    min-height: 50px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-out;\r\n    font-family: 'Roboto', sans-serif;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    background: #525151;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    transition: all 0.3s ease-out;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #212121;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    text-align: center;\r\n    list-style: none;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: 0 8px;\r\n    font-size: 25px;\r\n    line-height: 60px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n    background: #555;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #9e9e9e;\r\n    transition: .2 ease;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n  flex: 3;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .sifj[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  margin-left: 180px;\r\n  margin-top: 10px;\r\n}\r\n\r\n@media only screen and (min-device-width: 618px) {\r\n\r\n  nav[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1229px) {\r\n  .navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1014px) {\r\n  .navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 928px) {\r\n  .navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 842px) {\r\n  .navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsTUFBTTtBQUNSOztBQUVBOzs7O0VBSUUsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsT0FBTztFQUNUOztFQUVBO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRTs7Ozs7SUFLRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmhlYWRlci1maXhlZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NjU2NTY7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxufVxyXG5cclxuLm5hdmJhciAubG9nbyB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIC5sb2dvOmhvdmVyIHtcclxuICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG5cclxuLm5hdmJhciBuYXYge1xyXG4gIGZsZXg6IDg7XHJcbn1cclxuXHJcbi5uYXZiYXIgbGFiZWwge1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAyOHB4IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5uYXZiYXIgbGFiZWwgaSB7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzIGVhc2Utb3V0O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4ubmF2YmFyIGxhYmVsIGk6YmVmb3JlLFxyXG4ubmF2YmFyIGxhYmVsIGk6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hdmJhciBsYWJlbCBpLFxyXG4ubmF2YmFyIGxhYmVsIGk6YmVmb3JlLFxyXG4ubmF2YmFyIGxhYmVsIGk6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuXHJcbi5uYXZiYXIgbGFiZWwgaTpiZWZvcmUge1xyXG4gIHRvcDogNXB4O1xyXG59XHJcblxyXG4ubmF2YmFyIGxhYmVsIGk6YWZ0ZXIge1xyXG4gIHRvcDogLTVweDtcclxufVxyXG5cclxuLm5hdmJhciAjbmF2YmFyLXRvZ2dsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlciAjbmF2YmFyLXRvZ2dsZTpjaGVja2Vkfi5tZW51IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDAuOTk7XHJcbn1cclxuXHJcbi5oZWFkZXIgI25hdmJhci10b2dnbGU6Y2hlY2tlZH5sYWJlbCB7XHJcbiAgYmFja2dyb3VuZDogIzIxMjEyMTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5oZWFkZXIgI25hdmJhci10b2dnbGU6Y2hlY2tlZH5sYWJlbCBpIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlciAjbmF2YmFyLXRvZ2dsZTpjaGVja2VkfmxhYmVsIGk6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4uaGVhZGVyICNuYXZiYXItdG9nZ2xlOmNoZWNrZWR+bGFiZWwgaTphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4uaGVhZGVyICNuYXZiYXItdG9nZ2xlOmNoZWNrZWR+bGFiZWw6bm90KC5zdGVwcykgaTpiZWZvcmUsXHJcbi5oZWFkZXIgI25hdmJhci10b2dnbGU6Y2hlY2tlZH5sYWJlbDpub3QoLnN0ZXBzKSBpOmFmdGVyIHtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5oZWFkZXIgaGVhZGVyLWZpeGVkLFxyXG4ubmF2YmFyIGNvbnRhaW5lcixcclxuLmxvZ28sXHJcbi5zaWZqX2xvZ28gaW1nIHtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDgycHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXZiYXIgbmF2IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciBuYXYgdWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIG5hdiBsaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciBuYXYgbGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzUyNTE1MTtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIgbmF2IGxpOmhvdmVyIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIgbmF2IGxpIGEge1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAubmF2YmFyIG5hdiB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIgbmF2IGxpIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIG5hdiBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciBuYXYgbGkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgfVxyXG5cclxuICAubWVudSB1bCBsaSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgdHJhbnNpdGlvbjogLjIgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIgbGFiZWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXIgLmxvZ28ge1xyXG4gIGZsZXg6IDM7XHJcbn1cclxuXHJcbi5uYXZiYXIgLnNpZmogYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogMTgwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjE4cHgpIHtcclxuXHJcbiAgbmF2LFxyXG4gIC5tZW51LFxyXG4gIHVsLFxyXG4gIGxpLFxyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjI5cHgpIHtcclxuICAubmF2YmFyIG5hdiBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxNHB4KSB7XHJcbiAgLm5hdmJhciBuYXYgbGkgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyOHB4KSB7XHJcbiAgLm5hdmJhciBuYXYgbGkgYSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0MnB4KSB7XHJcbiAgLm5hdmJhciBuYXYgbGkgYSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\SIFJ\SIFJ-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map