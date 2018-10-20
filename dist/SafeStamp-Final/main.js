(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./howitworks/howitworks.component */ "./src/app/howitworks/howitworks.component.ts");
/* harmony import */ var _pharma_pharma_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pharma/pharma.component */ "./src/app/pharma/pharma.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'howitworks', component: _howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_3__["HowitworksComponent"] },
    { path: 'pharma', component: _pharma_pharma_component__WEBPACK_IMPORTED_MODULE_4__["PharmaComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav.navbar.is-transparent {\n  height: 4rem !important;\n  width: 100%;\n}\n#logoLabel {\n  font-size: x-large;\n}\n.navbar-item img {\n  max-height: 3.40rem;\n}\n@media (min-width: 1200px) {\n  #navLink {\n    background-image: url('silica.png');\n    background-repeat: no-repeat;\n    background-size: 70px;\n    background-color: rgba(255, 255, 255, 0.3);\n    background-blend-mode: lighten;\n    background-position: center;\n  }\n}\n/*Hide in Other Small Devices */\n/* Landscape tablets and medium desktops */\n@media (min-width: 992px) and (max-width: 1199px) {\n  #navLink {\n    background-image: none;\n  }\n}\n/* Portrait tablets and small desktops */\n@media (min-width: 768px) and (max-width: 991px) {\n  #navLink {\n    background-image: none;\n  }\n}\n/* Landscape phones and portrait tablets */\n@media (max-width: 767px) {\n  #navLink {\n    background-image: none;\n  }\n}\n/* Portrait phones and smaller */\n@media (max-width: 480px) {\n  #navLink {\n    background-image: none;\n  }\n}\n.linkText {\n  color: black;\n  font-size: x-large;\n  font-weight: 900;\n  text-shadow: 2px 2px white;\n}\nfooter.footer {\n  background-color: white;\n  padding: 0rem 1.5rem 1rem;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar is-transparent is-fixed-top\">\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\" routerLink=\"/\">\n      <img src=\"../assets/logoofficial.png\" alt=\"SafeStamp\" width=\"100\" height=\"25\">\n    </a>\n    <span id=\"logoLabel\" class=\"navbar-item\">SafeStamp™</span>\n    <div class=\"navbar-burger burger\" data-target=\"navbarMobileMenu\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n  </div>\n\n<div id=\"navbarMobileMenu\" class=\"navbar-menu\">\n    <div class=\"navbar-start\">\n    </div>\n    <div class=\"navbar-end\">\n            <a id=\"navLink\" class=\"navbar-item\" routerLink=\"/\">\n              <span class=\"linkText\">HOME</span>\n            </a>\n            <a id=\"navLink\" class=\"navbar-item\" routerLink=\"howitworks\">\n              <span class=\"linkText\">HOW IT WORKS</span>\n            </a>\n            <a id=\"navLink\" class=\"navbar-item\" routerLink=\"pharma\">\n              <span class=\"linkText\">PHARMA</span>\n            </a>\n      <div class=\"navbar-item\">\n            <a class=\"button is-medium is-primary\" routerLink=\"contact\">\n              <span class=\"icon\">\n                <i class=\"fas fa-dollar-sign\"></i>\n              </span>\n              <span>Get A Quote</span>\n            </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"content has-text-centered\">\n      <p>\n        COPYRIGHT © 2018 LAVOISIER LLC | ALL RIGHTS RESERVED\n      </p>\n      <a routerLink=\"https://bulma.io\">\n        <img src=\"https://bulma.io/images/made-with-bulma.png\" alt=\"Made with Bulma\" width=\"128\" height=\"24\">\n      </a>\n    </div>\n  </div>\n</footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var burger = document.querySelector('.navbar-burger');
        var menu = document.querySelector('.navbar-menu');
        burger.addEventListener('click', function () {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
        var link = document.querySelector('.navbar-start');
        var quoteButton = document.querySelector('.navbar-end');
        link.addEventListener('click', function () {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
        quoteButton.addEventListener('click', function () {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email.service */ "./src/app/email.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./howitworks/howitworks.component */ "./src/app/howitworks/howitworks.component.ts");
/* harmony import */ var _pharma_pharma_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pharma/pharma.component */ "./src/app/pharma/pharma.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_9__["HowitworksComponent"],
                _pharma_pharma_component__WEBPACK_IMPORTED_MODULE_10__["PharmaComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"]
            ],
            providers: [_email_service__WEBPACK_IMPORTED_MODULE_4__["EmailService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#topHero {\n  background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('howPageLab.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.investment {\n  margin-top: -11em;\n  background-color: white;\n  border-top: 10px solid #12a89d;\n}\nh1.title {\n  color: #12a89d;\n}\n.subText {\n  font-size: large;\n  font-weight: 400;\n}\n.founder {\n  font-size: x-large;\n}\n#contInst span {\n  font-size: xx-large;\n}\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=topHero class=\"hero is-large is-fluid\">\n  <div class=\"hero-body\">\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"container\">\n    <div class=\"investment has-text-centered\">\n      <br>\n      <br>\n      <h1 class=\"title\">\n        INVESTMENT OPPORTUNITIES\n      </h1>\n      <br>\n      <h3 class=\"subText\">\n        In order to finish development and facilitate rapid expansion, we are pivoting from self-financing to an angel-backed and\n        venture-backed model. Multiple tiers are available, and both debt and equity considerations are negotiable. Investors\n        should be informed that, in addition to the large size of projected revenues, high potential marginal profits make\n        SafeStamp® an appealing investment.\n      </h3>\n    </div>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"columns\">\n    <div class=\"column is-3 has-text-centered\">\n      <h1 class=\"title\" id=\"contact\">\n        Contact Us\n      </h1>\n      <h3 class=\"founder\">Founder and CEO</h3>\n      <h4>Matt McGuire</h4>\n      <h4>+ 1.865.518.2469</h4>\n      <h4>matt@safestamp.com</h4>\n    </div>\n    <div id=\"contInst\" class=\"column is-3 is-offset-1\">\n      <span>Enter your information,\n        <br> click the Submit button,\n        <br> and our CEO will be in touch shortly.</span>\n      <br>\n      <br>\n      <span>Thanks for reaching out!</span>\n    </div>\n    <div id=\"myForm\" class=\"column is-3 is-offset-1\">\n      <div class=\"field\">\n        <div class=\"control\">\n          <label class=\"label\">Affiliation</label>\n          <div class=\"select\">\n            <select name=\"drop\" #drop>\n              <option></option>\n              <option value=\"Individual\">Individual</option>\n              <option value=\"Institutional\">Institutional</option>\n              <option value=\"Other\">Other</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"control\">\n          <label class=\"label\">Information Requested</label>\n          <div class=\"select\">\n            <select name=\"drop2\" #drop2>\n              <option></option>\n              <option value=\"Quote\">Quote</option>\n              <option value=\"Proposal\">Proposal</option>\n              <option value=\"Investment\">Investment</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"field\">\n          <label class=\"label\">Name</label>\n          <div class=\"control\">\n            <input id=\"input\" class=\"input\" type=\"text\" name=\"name\" #name>\n            <div class=\"field\">\n              <label class=\"label\">Email</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"email\" name=\"email\" #email>\n              </div>\n              <div class=\"field\">\n                <label class=\"label\">Phone Number</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"tel\" name=\"phone\" #phone>\n                </div>\n                <div class=\"field\">\n                  <p class=\"control is-expanded\">\n                    <label class=\"label\">How Did You Hear About Us?</label>\n                    <div class=\"select\">\n                      <select name=\"drop3\" #drop3>\n                        <option></option>\n                        <option value=\"Professional Contact\">Professional Contact</option>\n                        <option value=\"Social Contact\">Social Contact</option>\n                        <option value=\"Social Media\">Social Media</option>\n                        <option value=\"Other\">Other</option>\n                      </select>\n                    </div>\n                </div>\n                <div class=\"field\">\n                  <div class=\"control\">\n                    <button class=\"button is-link\" type=\"button\" (click)=\"onSubmit(drop.value, drop2.value, name.value, email.value, phone.value, drop3.value)\">Submit</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../email.service */ "./src/app/email.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(emailService) {
        this.emailService = emailService;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function (drop, drop2, name, email, phone, drop3) {
        var emailBody = { drop: drop, drop2: drop2, name: name, email: email, phone: phone, drop3: drop3 };
        console.log(emailBody);
        this.emailService.sendEmail(emailBody).subscribe(function (success) {
            console.log(success);
            window.location.reload();
            alert('Email Sent!');
        });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/email.service.ts":
/*!**********************************!*\
  !*** ./src/app/email.service.ts ***!
  \**********************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
    }
    // @cmckni3 Your node.js server and ng application will be running at different
    // locations in development so a relative URL won't work here
    // This could be changed to http://localhost:3000
    // for now but that won't work in production and it's not configurable
    // @cmckni3 Removed httpOptions as well since HttpClient sets that as the default
    // Content-Type and sends JSON by default
    EmailService.prototype.sendEmail = function (emailBody) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].edgeUrl + "/api/email", emailBody);
    };
    EmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#topHero {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('QD.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position-y: 3px;\n}\nh1.title.has-text-white {\n    color: #34495E;\n    font-size: 2.9rem;\n}\nh2.subtitle.has-text-white {\n    font-size: 2.4rem;\n}\na.button.is-rounded {\n    background: #49a59d;\n}\nh1.about.has-text-weight-bold, \n  .why.has-text-weight-bold {\n    font-size: x-large;\n    }\n.tech.has-text-weight-bold,\n  .design.has-text-weight-bold,\n  .brand.has-text-weight-bold,\n  .honors.has-text-weight-bold {\n    font-size: large;\n    }\n#propHero {\n    background-color: #49a59d;\n\n}\n#propTitle, #propSub {\n    text-shadow: 1.5px 1.5px gray;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=topHero class=\"hero is-medium is-fluid\">\n  <div class=\"hero-body\">\n    <div class=\"container has-text-centered\">\n      <img class=\"is-hidden-mobile\" src=\"../../assets/logostroke.png\" alt=\"\">\n      <h1 class=\"title has-text-white\">\n        SafeStamp™\n      </h1>\n      <h2 class=\"subtitle has-text-white\">\n        Tiny Particles, Huge Impacts.!!\n      </h2>\n      <a class=\"button is-rounded has-text-white\" routerLink=\"contact\">\n        <span>INVESTMENT OPPORTUNITIES</span>\n      </a>\n    </div>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"container is-fluid has-text-centered\">\n    <h1 class=\"about has-text-weight-bold\">\n      About SafeStamp™\n    </h1>\n    <p class=\"para1\">SafeStamp™ seals medicine packaging with its nanotech authentication mark. The seal is built using advanced nanotechnology\n      that counterfeiters cannot replicate, allowing consumers to themselves ensure that their product came not from a criminal\n      but from a legitimate manufacturer. Our technology allows brand owners to engage with consumers to earn and grow brand\n      loyalty while protecting the brand from supply chain fraud, including counterfeiting and theft.</p>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"container is-fluid has-text-centered\">\n    <h1 class=\"why has-text-weight-bold\">\n      Why SafeStamp™?\n    </h1>\n    <p class=\"para2\">Around the globe, the market value of counterfeit goods sold is estimated at $1.4 trillion USD. This is especially\n      problematic in regard to medicine, as fakes cause sickness and death worldwide. The pharmaceutical industry is under\n      increasing pressure from regulatory agencies to ensure that adulterated product is not injected into the market. The\n      serialization approach requires a comprehensive system to track and trace the passage of medicine throughout the entire\n      supply chain, but does not prevent retailers from never ordering the authentic drug. Combining technology complex enough\n      to resist replication by counterfeiters with a user-interface simple enough to engage consumers and empower them to\n      force retailers to purchase authentic product, SafeStamp™ is a completely new approach to fighting counterfeiting,\n      unlike anything produced by security firms to date.</p>\n  </div>\n</section>\n<section class=\"container\">\n  <div class=\"columns has-text-centered\">\n    <div class=\"column is-4 is-info\">\n      <span class=\"fa-stack fa-3x\">\n        <i class=\"fas fa-circle fa-stack-2x\"></i>\n        <i class=\"fas fa-user-md fa-stack-1x fa-inverse\"></i>\n      </span>\n      <br>\n      <br>\n      <h1 class=\"tech has-text-weight-bold\">TECHNOLOGY</h1>\n      <p>Complex proprietary nanotechnology resists replication by counterfeiters.\n      </p>\n    </div>\n    <div class=\"column is-4 is-info\">\n      <span class=\"fa-stack fa-3x\">\n        <i class=\"fas fa-circle fa-stack-2x\"></i>\n        <i class=\"fas fa-hand-holding-heart fa-stack-1x fa-inverse\"></i>\n      </span>\n      <br>\n      <br>\n      <h1 class=\"design has-text-weight-bold\">DESIGN</h1>\n      <p>Simple, elegant, and fun UI, consisting of an engaging color-reward association, empowers consumers to verify for themselves\n        the authenticity of their products.</p>\n    </div>\n    <div class=\"column is-4 is-info\">\n      <span class=\"fa-stack fa-3x\">\n        <i class=\"fas fa-circle fa-stack-2x\"></i>\n        <i class=\"fas fa-medkit fa-stack-1x fa-inverse\"></i>\n      </span>\n      <br>\n      <br>\n      <h1 class=\"brand has-text-weight-bold\">BRANDING</h1>\n      <p>Not only allows firms to capture back market share stolen by counterfeiters, but to differentiate their brands against\n        competitors that lack verified authenticity.</p>\n    </div>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"container is-fluid has-text-centered\">\n    <h1 class=\"honors has-text-weight-bold\">\n      HONORS AND AWARDS\n    </h1>\n    <p></p>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <img src=\"../../assets/award1.png\" alt=\"\">\n    </div>\n    <div class=\"column is-3\">\n      <img src=\"../../assets/award2.png\" alt=\"\">\n    </div>\n    <div class=\"column is-3\">\n      <img src=\"../../assets/award3.png\" alt=\"\">\n    </div>\n    <div class=\"column is-3\">\n      <img src=\"../../assets/award4.png\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <img src=\"../../assets/award5.png\" alt=\"\">\n    </div>\n    <div class=\"column is-3\">\n      <img src=\"../../assets/award6.png\" alt=\"\">\n    </div>\n    <div class=\"column is-3\">\n      <img src=\"../../assets/award7.png\" alt=\"\">\n    </div>\n    <div class=\"column is-3\">\n      <img src=\"../../assets/award8.png\" alt=\"\">\n    </div>\n  </div>\n</section>\n<section id=propHero class=\"hero is-info is-medium\">\n  <div class=\"hero-body\">\n    <div id=\"propReq\" class=\"container has-text-centered\">\n      <div class=\"hero-head has-text-centered\">\n        <h1 class=\"title\" id=\"propTitle\">\n          REQUEST A PROPOSAL\n        </h1>\n        <h2 class=\"subtitle\" id=\"propSub\">\n          PROTECT YOUR CUSTOMERS, BOOST YOUR REVENUES.\n        </h2>\n<a routerLink=\"contact\" class=\"button is-large is-outlined is-light\">\n    Reach Out Now!</a>\n      </div>\n    </div>\n  </div>\n</section>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/howitworks/howitworks.component.css":
/*!*****************************************************!*\
  !*** ./src/app/howitworks/howitworks.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#topHero {\n  background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('howPageLab.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.interpol {\n  margin-top: -11em;\n  background-color: white;\n  border-top: 10px solid #12a89d;\n}\nh1.title {\n  color: #12a89d;\n}\nh1.how {\n  color: #12a89d;\n  font-size: xx-large;\n  font-weight: 900;\n}\nh1.breathe, h1.touch, h1.relax {\n  font-size: x-large;\n  font-weight: 800;\n  color: #12a89d;\n}\ndiv.column p {\n  font-size: large;\n}\n.titleWhy {\n  font-size: xx-large;\n  font-weight: 900;\n}\n.whyText {\n  font-size: x-large;\n}"

/***/ }),

/***/ "./src/app/howitworks/howitworks.component.html":
/*!******************************************************!*\
  !*** ./src/app/howitworks/howitworks.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=topHero class=\"hero is-large is-fluid\">\n  <div class=\"hero-body\">\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"container\">\n    <div class=\"interpol has-text-centered\">\n      <br>\n      <br>\n      <h1 class=\"title\">\n        Let SafeStamp™ Be Your Safeguard\n      </h1>\n      <br>\n      <h3 class=\"subtitle\">\n        According to Interpol, one million people die from counterfeit drugs per year. Don't be one of them.\n      </h3>\n      <br>\n      <img src=\"../../assets/logostrokeBlue.png\" alt=\"\">\n      <h1 class=\"how\">\n        HOW IT WORKS\n      </h1>\n    </div>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"columns has-text-centered\">\n    <div class=\"column is-4 is-info\">\n      <span class=\"breathe\">\n        <img src=\"../../assets/breathe.png\" alt=\"\">\n      </span>\n      <br>\n      <br>\n      <h1 class=\"breathe has-text-weight-bold\">BREATHE</h1>\n      <p>Breathe on the target, watch it glow orange</p>\n    </div>\n    <div class=\"column is-4 is-info\">\n      <span class=\"touch\">\n        <img src=\"../../assets/touch.png\" alt=\"\">\n      </span>\n      <br>\n      <br>\n      <h1 class=\"touch has-text-weight-bold\">TOUCH</h1>\n      <p>Touch the target, watch it turn blue</p>\n    </div>\n    <div class=\"column is-4 is-info\">\n      <span class=\"relax\">\n        <img src=\"../../assets/relax.png\" alt=\"\">\n      </span>\n      <br>\n      <br>\n      <h1 class=\"relax has-text-weight-bold\">RELAX</h1>\n      <p>Relax in knowing your medication is authentic</p>\n    </div>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"columns\">\n    <div class=\"column is-6 has-text-centered\">\n      <h1 class=\"titleWhy\">Why You Should Trust SafeStamp™</h1>\n      <br><br><br>\n      <span class=\"whyText\">\n SafeStamp™ is built from the most advanced technology in the world, and constructed by the some of the smartest\npeople on earth.\n<br>\n<br>\nIt's color change capability comes from particles a few nanometers long. A nanometer has the same relation to a\nmeter as the width of a hazelnut has to the width of the earth.\n<br>\n<br>\nWhen things are that small, they get weird. For example,\nthese particles can spin in two different directions at the same time.\n<br>\n<br>\nDon't understand? You don't need to. You only need\nto rest assured that the criminals who would sell you chalk as medicine don't understand it either.\n<br>\n<br>\nAt SafeStamp™, not only do we understand the nanotechnology necessary to make this work, we innovate. All you need to do is breathe, touch, and relax.\n      </span>\n    </div>\n    <div class=\"column is-6\">\n      <img src=\"../../assets/bubbles.png\" alt=\"\">\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/howitworks/howitworks.component.ts":
/*!****************************************************!*\
  !*** ./src/app/howitworks/howitworks.component.ts ***!
  \****************************************************/
/*! exports provided: HowitworksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowitworksComponent", function() { return HowitworksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowitworksComponent = /** @class */ (function () {
    function HowitworksComponent() {
    }
    HowitworksComponent.prototype.ngOnInit = function () {
    };
    HowitworksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-howitworks',
            template: __webpack_require__(/*! ./howitworks.component.html */ "./src/app/howitworks/howitworks.component.html"),
            styles: [__webpack_require__(/*! ./howitworks.component.css */ "./src/app/howitworks/howitworks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HowitworksComponent);
    return HowitworksComponent;
}());



/***/ }),

/***/ "./src/app/pharma/pharma.component.css":
/*!*********************************************!*\
  !*** ./src/app/pharma/pharma.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#topHero {\n  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('headerPharmaPic.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nh1.title.has-text-white {\n  font-size: xx-large;\n  font-weight: 900;\n}\n.image {\n  position: static;\n}\n.salesTitle, .wrongTitle, .numbersTitle {\n  font-weight: 900;\n  font-size: xx-large;\n}\n.salesText, .wrongText, .numbersText {\n  font-weight: 800;\n  font-size: x-large;\n}\narticle {\n  background-color: white;\n}\n.hero {\n  background-color: #12a89d;\n}\n.hero h2 {\n  font-weight: 400;\n  font-size: x-large;\n}\n@media (max-width:480px) {\n  #cdBox {\n    display: flex;\n    flex-flow: column;\n  }\n  #C {\n    order: 2;\n  }\n  #D {\n    order: 1;\n  }\n}\n"

/***/ }),

/***/ "./src/app/pharma/pharma.component.html":
/*!**********************************************!*\
  !*** ./src/app/pharma/pharma.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=topHero class=\"hero is-medium is-fluid\">\n  <div class=\"hero-body has-text-centered\">\n    <h1 class=\"title has-text-white\">\n      YOU'RE GETTING SHAKEN DOWN.\n    </h1>\n    <h1 class=\"title has-text-white\">\n      AND YOU KNOW IT.\n    </h1>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"tile is-ancestor\">\n    <div class=\"tile is-vertical is-12\">\n      <div class=\"tile\">\n        <div id=\"A\" class=\"tile is-parent\">\n          <article class=\"tile is-child notification\">\n            <figure class=\"image is-5by4\">\n              <img src=\"../../assets/topPharmaPic.jpg\">\n            </figure>\n          </article>\n        </div>\n        <div id=\"B\" class=\"tile is-parent\">\n          <article class=\"tile is-child notification has-text-centered\">\n            <span>\n              <h1 class=\"numbersTitle\">Billions lost.</h1>\n              <br>\n              <br>\n              <span class=\"numbersText\">People differ on the numbers. Some say $75 billion, others say $514 billion.\n                <br>\n                <br> You probably have your own estimates.\n                <br>\n                <br>Either way, pharma-counterfeiters are selling fakes labeled as if they are your product, reaping profits\n                that rightfully belong to you.</span>\n            </span>\n          </article>\n        </div>\n      </div>\n      <div id=\"cdBox\" class=\"tile\">\n        <div id=\"C\" class=\"tile is-parent\">\n          <article class=\"tile is-child notification has-text-centered\">\n            <span>\n              <h1 class=\"wrongTitle\">You're doing it wrong.</h1>\n              <br>\n              <br>\n              <span class=\"wrongText\">\n                You trace your medicine from the factory pharmacist, but that does not stop the pharmacist himself from going to counterfeiters,\n                and never buying the authentic drug in the first place.\n                <br>\n                <br> Your company still takes a loss.\n                <br>\n                <br> Some of you use mobile apps to allow patients to test for themselves, but programming is one of the world's\n                most ubiquitous skills, and these technologies have been counterfeited.\n                <br>\n                <br> So have holograms and other attempts. And you know it.\"\n              </span>\n            </span>\n          </article>\n        </div>\n        <div id=\"D\" class=\"tile is-parent\">\n          <article class=\"tile is-child notification\">\n            <figure class=\"image is-5by4\">\n              <img src=\"../../assets/middlePharmaPic.jpg\">\n            </figure>\n          </article>\n        </div>\n      </div>\n      <div class=\"tile\">\n        <div id=\"E\" class=\"tile is-parent\">\n          <article class=\"tile is-child notification\">\n            <figure class=\"image is-5by4\">\n              <img src=\"../../assets/bottomPharmaPic.jpg\">\n            </figure>\n          </article>\n        </div>\n        <div id=\"F\" class=\"tile is-parent\">\n          <article class=\"tile is-child notification has-text-centered\">\n            <h1 class=\"salesTitle\">Get your sales back; Get SafeStamp®.</h1>\n            <br>\n            <br>\n            <span class=\"salesText\">SafeStamp® is the only color-change based solution with an interface so user-friendly, patients will demand it.\n              <br>\n              <br> This cuts out the corrupt middle-men and ensures that retailers purchase medicine from you, not counterfeiters.\n              <br>\n              <br> Moreover, its advanced nanotechnology resists replication. The number of people on earth that can create a\n              glowing color-change solution is very limited, and many work on SafeStamp™.\n              <br>\n              <br> Not only will you capture back market share lost to fakes, you will differentiate your brand against substitutes\n              and generics, which themselves could be counterfeit.</span>\n          </article>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"hero\">\n  <div class=\"hero-body\">\n    <div class=\"container has-text-centered\">\n      <h1 class=\"title has-text-white\">\n        Let us prove it. Put us on a drug line, and watch your revenues increase.\n      </h1>\n      <a routerLink=\"/contact\" class=\"button is-large is-outlined is-light\">\n        Reach Out Now!</a>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pharma/pharma.component.ts":
/*!********************************************!*\
  !*** ./src/app/pharma/pharma.component.ts ***!
  \********************************************/
/*! exports provided: PharmaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmaComponent", function() { return PharmaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PharmaComponent = /** @class */ (function () {
    function PharmaComponent() {
    }
    PharmaComponent.prototype.ngOnInit = function () {
    };
    PharmaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pharma',
            template: __webpack_require__(/*! ./pharma.component.html */ "./src/app/pharma/pharma.component.html"),
            styles: [__webpack_require__(/*! ./pharma.component.css */ "./src/app/pharma/pharma.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PharmaComponent);
    return PharmaComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    edgeUrl: 'http://localhost:8080'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wtrent1/Desktop/SafeStamp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map