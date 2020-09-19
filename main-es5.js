function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/content/content.component */
    "./src/app/components/content/content.component.ts");
    /* harmony import */


    var _components_galaxias_galaxias_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/galaxias/galaxias.component */
    "./src/app/components/galaxias/galaxias.component.ts");
    /* harmony import */


    var _components_elipticas_elipticas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/elipticas/elipticas.component */
    "./src/app/components/elipticas/elipticas.component.ts");
    /* harmony import */


    var _components_irregulares_irregulares_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/irregulares/irregulares.component */
    "./src/app/components/irregulares/irregulares.component.ts");
    /* harmony import */


    var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/contacto/contacto.component */
    "./src/app/components/contacto/contacto.component.ts");

    var Routes = [{
      path: '',
      component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"]
    }, {
      path: 'galaxias',
      component: _components_galaxias_galaxias_component__WEBPACK_IMPORTED_MODULE_3__["GalaxiasComponent"]
    }, {
      path: 'elipticas',
      component: _components_elipticas_elipticas_component__WEBPACK_IMPORTED_MODULE_4__["ElipticasComponent"]
    }, {
      path: 'irregulares',
      component: _components_irregulares_irregulares_component__WEBPACK_IMPORTED_MODULE_5__["IrregularesComponent"]
    }, {
      path: 'contacto',
      component: _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_6__["ContactoComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(Routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(Routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'taller-angular';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/content/content.component */
    "./src/app/components/content/content.component.ts");
    /* harmony import */


    var _components_galaxias_galaxias_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/galaxias/galaxias.component */
    "./src/app/components/galaxias/galaxias.component.ts");
    /* harmony import */


    var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/contacto/contacto.component */
    "./src/app/components/contacto/contacto.component.ts");
    /* harmony import */


    var _components_irregulares_irregulares_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/irregulares/irregulares.component */
    "./src/app/components/irregulares/irregulares.component.ts");
    /* harmony import */


    var _components_elipticas_elipticas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/elipticas/elipticas.component */
    "./src/app/components/elipticas/elipticas.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"], _components_galaxias_galaxias_component__WEBPACK_IMPORTED_MODULE_7__["GalaxiasComponent"], _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_8__["ContactoComponent"], _components_irregulares_irregulares_component__WEBPACK_IMPORTED_MODULE_9__["IrregularesComponent"], _components_elipticas_elipticas_component__WEBPACK_IMPORTED_MODULE_10__["ElipticasComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"], _components_galaxias_galaxias_component__WEBPACK_IMPORTED_MODULE_7__["GalaxiasComponent"], _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_8__["ContactoComponent"], _components_irregulares_irregulares_component__WEBPACK_IMPORTED_MODULE_9__["IrregularesComponent"], _components_elipticas_elipticas_component__WEBPACK_IMPORTED_MODULE_10__["ElipticasComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/contacto/contacto.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/contacto/contacto.component.ts ***!
    \***********************************************************/

  /*! exports provided: ContactoComponent */

  /***/
  function srcAppComponentsContactoContactoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactoComponent", function () {
      return ContactoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactoComponent =
    /*#__PURE__*/
    function () {
      function ContactoComponent() {
        _classCallCheck(this, ContactoComponent);
      }

      _createClass(ContactoComponent, [{
        key: "mostrar5",
        value: function mostrar5(e) {
          prompt('Escribe tu numero de registro galactico');
          prompt('Escribe tu mensaje');
          alert('Tu mensaje ha sido registrado con el número : 9984094');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactoComponent;
    }();

    ContactoComponent.ɵfac = function ContactoComponent_Factory(t) {
      return new (t || ContactoComponent)();
    };

    ContactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactoComponent,
      selectors: [["app-contacto"]],
      decls: 41,
      vars: 0,
      consts: [[1, "main_content"], [1, "section3"], [1, "wrap"], [1, "section-title"], [1, "compra"], [3, "click"], [1, "contenedor-formulario"], ["action", "", 1, "formulario"], [1, "input-group"], ["type", "text", "id", "name", "name", "name", 1, "form-item"], ["for", "name"], ["type", "text", "id", "lastName", "name", "lastName", 1, "form-item"], ["for", "lastName"], ["type", "email", "id", "email", "name", "email", 1, "form-item"], ["for", "email"], ["type", "text", "id", "telephone", "name", "telephone", 1, "form-item"], ["for", "telephone"], [1, "input-group", "radio"], ["type", "radio", "name", "sexo", "id", "hombre", "value", "Hombre"], ["for", "hombre"], ["type", "radio", "name", "sexo", "id", "mujer", "value", "Mujer"], ["for", "mujer"], ["name", "message", "placeholder", "OTRO? Escribe aqui", "cols", "50", "rows", "2", 1, "text-area"], ["type", "submit", "id", "btn-submit", "value", "Enviar"]],
      template: function ContactoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CONTACTANOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CONSULTA FLASH ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_button_click_7_listener($event) {
            return ctx.mostrar5($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mensaje Rapido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CONSULTA PROCESOS DE REGISTRO Y ACTUALIZACI\xD3N: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Escribe tu nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Escribe tu apellido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Escribe tu correo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Escribe tu numero de identificaci\xF3n galactica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Deseo consultar sobre : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Actualizaci\xF3n informaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Subasta anual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "textarea", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Raleway:400,400i,700\");\r\n\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  height:50px;\r\n  border-radius: 10px;\r\n  color: #769cb5;\r\n  margin: 10px;\r\n}\r\n\r\n\r\n.main_content[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  margin-top: -8px;\r\n  background: linear-gradient(90deg, #769cb5 10%, #161d27 90%); \r\n  border-radius: 2px;\r\n}\r\n\r\n\r\n.section3[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    font: 1rem Raleway, sans-serif;\r\n    padding: 0; \r\n    margin-bottom: 20px;\r\n    margin-left: 20px;\r\n\r\n  }\r\n\r\n\r\n.compra[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    margin: 10px;\r\n  }\r\n\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    margin-top: 20px; \r\n    text-align: right;\r\n    padding: 10px;\r\n    color: #004581;\r\n    border-bottom: 1px solid #018ABD; }\r\n\r\n\r\n.wrap[_ngcontent-%COMP%] {\r\n      width: 90%;\r\n      max-width: 500px;\r\n      padding: 40px;\r\n      margin: auto;\r\n      background: #fff;\r\n      box-shadow: 0px 0px 3px #DDE8F0; }\r\n\r\n\r\n\r\n\r\n\r\n.contenedor-formulario[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n        padding: 10px; }\r\n\r\n\r\n.contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%] {\r\n          width: 100%;\r\n          margin: auto; }\r\n\r\n\r\n.contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n            position: relative;\r\n            margin-bottom: 32px; }\r\n\r\n\r\n.contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], .contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n              font-family: Raleway, sans-serif;;\r\n              font-size: 16px;\r\n              color: #004581;\r\n              width: 100%;\r\n              outline: none;\r\n              padding: 5px;\r\n              background: none;\r\n              border: none;\r\n              border-bottom: 2px solid #018ABD; }\r\n\r\n\r\n.contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, .contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:active, .contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]:focus, .contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]:active, .contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus, .contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:active {\r\n                outline: none;\r\n                border-bottom: 2px solid  #004581; }\r\n\r\n\r\n.contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group.radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n                  display: inline-block;\r\n                  cursor: pointer;\r\n                  position: relative;\r\n                  padding: 5px 15px 5px 51px;\r\n                  font-size: 1em;\r\n                  border-radius: 3px;\r\n                  transition: all 0.3s ease; }\r\n\r\n\r\n\r\n\r\n\r\n.contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=\"text\"].error[_ngcontent-%COMP%], .contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=\"email\"].error[_ngcontent-%COMP%], .contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=\"password\"].error[_ngcontent-%COMP%] {\r\n          border-bottom: 2px solid #004581; }\r\n\r\n\r\n.contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=\"text\"].error[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], .contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=\"email\"].error[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], .contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[type=\"password\"].error[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n            color: #004581; }\r\n\r\n\r\n.contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n        color: #004581; }\r\n\r\n\r\n.contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   label.label[_ngcontent-%COMP%] {\r\n          transition: all 0.3s ease;\r\n          margin-left: 15px;\r\n          font-size: 16px;\r\n          line-height: 16px;\r\n          position: absolute;\r\n          top: 16px;\r\n          left: 0; }\r\n\r\n\r\n.contenedor-formulario[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   label.label.active[_ngcontent-%COMP%] {\r\n            top: -12px;\r\n            font-size: 12px;\r\n            line-height: 12px;\r\n            color: #DDE8F0; }\r\n\r\n\r\n\r\n\r\n\r\n.input-group.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]  {\r\n          display: inline-block;\r\n          cursor: pointer;\r\n          position: relative;\r\n          padding: 5px 15px 5px 51px;\r\n          font-size: 1em;\r\n          border-radius: 3px;\r\n  }\r\n\r\n\r\n.input-group.radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\r\n  display: none; }\r\n\r\n\r\n.input-group.radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n    display: none; }\r\n\r\n\r\n.input-group.radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\r\n    padding: 5px 15px;\r\n    background: #004581;\r\n    border-radius: 2px;\r\n    color: #f2f2f2; \r\n  margin: 15px;}\r\n\r\n\r\n\r\n\r\n\r\n.text-area[_ngcontent-%COMP%]{\r\n          font-size: 1em;\r\n          border-radius: 3px;\r\n          margin: 20px;\r\n          width: 83%;\r\n          border: 2px solid #f2f2f2;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n#btn-submit[type=\"submit\"][_ngcontent-%COMP%] {\r\n  background: #161d27;\r\n  border-radius: 1px;\r\n  border: 2px solid #f2f2f2;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: Raleway, sans-serif;\r\n  font-size: 16px;\r\n  padding: 15px;\r\n  width: 88%;\r\n  transition: all 0.3s ease; }\r\n\r\n\r\n#btn-submit[_ngcontent-%COMP%]   [type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    background: #004581; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0by9jb250YWN0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJFQUEyRTs7O0FBRzNFO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtBQUNkOzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0REFBNEQ7RUFDNUQsa0JBQWtCO0FBQ3BCOzs7QUFFQTtJQUdJLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7O0VBRW5COzs7QUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7OztBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsY0FBYztJQUNkLGdDQUFnQyxFQUFFOzs7QUFFbEM7TUFDRSxVQUFVO01BQ1YsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLCtCQUErQixFQUFFOzs7QUFDckMsaUNBQWlDOzs7QUFDN0I7UUFDRSxVQUFVO1FBQ1YsYUFBYSxFQUFFOzs7QUFFZjtVQUNFLFdBQVc7VUFDWCxZQUFZLEVBQUU7OztBQUVkO1lBQ0Usa0JBQWtCO1lBQ2xCLG1CQUFtQixFQUFFOzs7QUFFckI7OztjQUdFLGdDQUFnQztjQUNoQyxlQUFlO2NBQ2YsY0FBYztjQUNkLFdBQVc7Y0FDWCxhQUFhO2NBQ2IsWUFBWTtjQUNaLGdCQUFnQjtjQUNoQixZQUFZO2NBQ1osZ0NBQWdDLEVBQUU7OztBQUVsQzs7Ozs7Z0JBS0UsYUFBYTtnQkFDYixpQ0FBaUMsRUFBRTs7O0FBRW5DO2tCQUNFLHFCQUFxQjtrQkFDckIsZUFBZTtrQkFDZixrQkFBa0I7a0JBQ2xCLDBCQUEwQjtrQkFDMUIsY0FBYztrQkFDZCxrQkFBa0I7a0JBR2xCLHlCQUF5QixFQUFFOzs7QUFFOUIsYUFBYTs7O0FBRXBCOzs7VUFHRSxnQ0FBZ0MsRUFBRTs7O0FBQ2xDOzs7WUFHRSxjQUFjLEVBQUU7OztBQUN0QjtRQUNFLGNBQWMsRUFBRTs7O0FBQ2hCO1VBR0UseUJBQXlCO1VBQ3pCLGlCQUFpQjtVQUNqQixlQUFlO1VBQ2YsaUJBQWlCO1VBQ2pCLGtCQUFrQjtVQUNsQixTQUFTO1VBQ1QsT0FBTyxFQUFFOzs7QUFDVDtZQUNFLFVBQVU7WUFDVixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWMsRUFBRTs7O0FBRzFCLGNBQWM7OztBQUNkO1VBQ1EscUJBQXFCO1VBQ3JCLGVBQWU7VUFDZixrQkFBa0I7VUFDbEIsMEJBQTBCO1VBQzFCLGNBQWM7VUFDZCxrQkFBa0I7RUFDMUI7OztBQUNBO0VBQ0EsYUFBYSxFQUFFOzs7QUFDZjtJQUNFLGFBQWEsRUFBRTs7O0FBQ2pCO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztFQUNoQixZQUFZLENBQUM7OztBQUViLGdCQUFnQjs7O0FBSWhCO1VBQ1EsY0FBYztVQUNkLGtCQUFrQjtVQUNsQixZQUFZO1VBQ1osVUFBVTtVQUNWLHlCQUF5QjtFQUNqQzs7O0FBQ0EsV0FBVzs7O0FBRVg7RUFDQSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGFBQWE7RUFDYixVQUFVO0VBR1YseUJBQXlCLEVBQUU7OztBQUMzQjtJQUNFLG1CQUFtQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0by9jb250YWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTo0MDAsNDAwaSw3MDBcIik7XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICBoZWlnaHQ6NTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGNvbG9yOiAjNzY5Y2I1O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4ubWFpbl9jb250ZW50e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogLThweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3NjljYjUgMTAlLCAjMTYxZDI3IDkwJSk7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLnNlY3Rpb24zIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250OiAxcmVtIFJhbGV3YXksIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAwOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuXHJcbiAgfVxyXG4gIC5jb21wcmEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDsgXHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwNDU4MTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDE4QUJEOyB9XHJcbiAgXHJcbiAgICAud3JhcCB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggI0RERThGMDsgfVxyXG4gIC8qIEVzdGlsb3MgZGVsIGZvcm11bGFyaW8gaW5wdXQgKi9cclxuICAgICAgLmNvbnRlbmVkb3ItZm9ybXVsYXJpbyB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4OyB9XHJcbiAgXHJcbiAgICAgICAgLmNvbnRlbmVkb3ItZm9ybXVsYXJpbyAuZm9ybXVsYXJpbyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bzsgfVxyXG4gIFxyXG4gICAgICAgICAgLmNvbnRlbmVkb3ItZm9ybXVsYXJpbyAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7IH1cclxuICBcclxuICAgICAgICAgICAgLmNvbnRlbmVkb3ItZm9ybXVsYXJpbyAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICAgICAgICAgIC5jb250ZW5lZG9yLWZvcm11bGFyaW8gLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuICAgICAgICAgICAgLmNvbnRlbmVkb3ItZm9ybXVsYXJpbyAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjs7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDA0NTgxO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDE4QUJEOyB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgLmNvbnRlbmVkb3ItZm9ybXVsYXJpbyAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsIC5jb250ZW5lZG9yLWZvcm11bGFyaW8gLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmFjdGl2ZSxcclxuICAgICAgICAgICAgICAuY29udGVuZWRvci1mb3JtdWxhcmlvIC5mb3JtdWxhcmlvIC5pbnB1dC1ncm91cCBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcbiAgICAgICAgICAgICAgLmNvbnRlbmVkb3ItZm9ybXVsYXJpbyAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmFjdGl2ZSxcclxuICAgICAgICAgICAgICAuY29udGVuZWRvci1mb3JtdWxhcmlvIC5mb3JtdWxhcmlvIC5pbnB1dC1ncm91cCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMsXHJcbiAgICAgICAgICAgICAgLmNvbnRlbmVkb3ItZm9ybXVsYXJpbyAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICAjMDA0NTgxOyB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAuY29udGVuZWRvci1mb3JtdWxhcmlvIC5mb3JtdWxhcmlvIC5pbnB1dC1ncm91cC5jaGVja2JveCBsYWJlbCwgLmNvbnRlbmVkb3ItZm9ybXVsYXJpbyAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAucmFkaW8gbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggNTFweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgIC8qIFRpdHVsb3MgICovXHJcbiAgXHJcbiAgICAgICAgLmNvbnRlbmVkb3ItZm9ybXVsYXJpbyAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cInRleHRcIl0uZXJyb3IsXHJcbiAgICAgICAgLmNvbnRlbmVkb3ItZm9ybXVsYXJpbyAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLmVycm9yLFxyXG4gICAgICAgIC5jb250ZW5lZG9yLWZvcm11bGFyaW8gLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXS5lcnJvciB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNDU4MTsgfVxyXG4gICAgICAgICAgLmNvbnRlbmVkb3ItZm9ybXVsYXJpbyAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cInRleHRcIl0uZXJyb3IgKyBsYWJlbCxcclxuICAgICAgICAgIC5jb250ZW5lZG9yLWZvcm11bGFyaW8gLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwIGlucHV0W3R5cGU9XCJlbWFpbFwiXS5lcnJvciArIGxhYmVsLFxyXG4gICAgICAgICAgLmNvbnRlbmVkb3ItZm9ybXVsYXJpbyAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLmVycm9yICsgbGFiZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwNDU4MTsgfVxyXG4gICAgICAuY29udGVuZWRvci1mb3JtdWxhcmlvIC5mb3JtdWxhcmlvIC5pbnB1dC1ncm91cCBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICMwMDQ1ODE7IH1cclxuICAgICAgICAuY29udGVuZWRvci1mb3JtdWxhcmlvIC5mb3JtdWxhcmlvIC5pbnB1dC1ncm91cCBsYWJlbC5sYWJlbCB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDE2cHg7XHJcbiAgICAgICAgICBsZWZ0OiAwOyB9XHJcbiAgICAgICAgICAuY29udGVuZWRvci1mb3JtdWxhcmlvIC5mb3JtdWxhcmlvIC5pbnB1dC1ncm91cCBsYWJlbC5sYWJlbC5hY3RpdmUge1xyXG4gICAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI0RERThGMDsgfVxyXG4gICAgXHJcbiAgXHJcbiAgLyogQ2hlY2tib2sgICovXHJcbiAgLmlucHV0LWdyb3VwLnJhZGlvIGlucHV0ICB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggNTFweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuICAuaW5wdXQtZ3JvdXAucmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICBkaXNwbGF5OiBub25lOyB9XHJcbiAgLmlucHV0LWdyb3VwLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IH1cclxuICAuaW5wdXQtZ3JvdXAucmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDQ1ODE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjb2xvcjogI2YyZjJmMjsgXHJcbiAgbWFyZ2luOiAxNXB4O31cclxuICBcclxuICAvKiBDYWphIHRleHRvICAqL1xyXG4gICAgXHJcbiAgXHJcbiAgXHJcbiAgLnRleHQtYXJlYXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDgzJTtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMmYyZjI7XHJcbiAgfVxyXG4gIC8qIEVudmlhciAqL1xyXG4gIFxyXG4gICNidG4tc3VibWl0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIGJhY2tncm91bmQ6ICMxNjFkMjc7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMmYyZjI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB3aWR0aDogODglO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH1cclxuICAjYnRuLXN1Ym1pdCBbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA0NTgxOyB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contacto',
          templateUrl: './contacto.component.html',
          styleUrls: ['./contacto.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/content/content.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/content/content.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppComponentsContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ContentComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ContentComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ContentComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ContentComponent = function ContentComponent() {
      _classCallCheck(this, ContentComponent);

      this.imagenoti1 = ['assets/img/moe.jpg'];
      this.imagenoti2 = ['assets/img/cnn.jpg'];
      this.imagenoti3 = ['assets/img/n_astronomia.jpg'];
    };

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)();
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["app-content"]],
      decls: 59,
      vars: 3,
      consts: [[1, "marque"], ["BGCOLOR", "#b8dcfc", "DIRECTION", "LEFT", "SCROLLDELAY", "100", "HEIGHT", "20"], ["id", "titulo-bienvenida", 1, "titulo-bienvenida"], [1, "noticias"], [1, "main_content"], [1, "cards-s"], ["id", "grafica", 1, "s-categories"], [1, "s-titulo"], [1, "s-container"], [1, "full-card"], [1, "card", "transition"], [1, "card_circle", "transition"], [4, "ngFor", "ngForOf"], [1, "transition"], [1, "cta-container", "transition"], ["href", "#", 1, "cta"], [1, "ayuda"], ["type", "text", "name", "search", "placeholder", "Busca aqui"], [1, "vertical-menu"], ["href", "#", 1, "active"], ["routerLink", "/galaxias"], ["href", "#"], [1, "logo", 3, "src"]],
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "MARQUEE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "MARQUEE", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Cada persona es un universo, unet\xE9 a nuestras galaxias.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BIENVENIDO LA ORGANIZACI\xD3N DE LAS GALAXIAS UNIDAS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "article", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Noticias Recientes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContentComponent_div_17_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " COMETA EN SPRINFIELD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "El Asteroide visitar\xEDa la taberna de residente galaxia Espiral. El profesor Flik presenta su plan en reunion local.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Leer m\xE1s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ContentComponent_div_28_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ASTEROIDE DISCRIMINADO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Asteroide que venia a de turismo presenta cargos por discriminaci\xF3n a periodista.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Leer m\xE1s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ContentComponent_div_39_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "VIDEO DE OTRO MUNDO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "El gran exito de Astronomia esta orbitando a otros mundos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Leer m\xE1s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Necesitas Ayuda? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "TR\xC1MITES Y SERVICIOS M\xC1S CONSULTADOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Registro \xFAnico de identidad galactica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Actualizaci\xF3n de Galaxia de residencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Subasta Anual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagenoti1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagenoti2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagenoti3);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Raleway:400,400i,700\");\r\n.marque[_ngcontent-%COMP%]{\r\n    font-family: Raleway, sans-serif;\r\n    margin-top:-19px;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    width: 130px;\r\n    box-sizing: border-box;\r\n    border: 2px solid #ccc;\r\n    border-radius: 4px;\r\n    font-size: 16px;\r\n    background-color: white;\r\n    background-position: 10px 10px; \r\n    background-repeat: no-repeat;\r\n    transition: width 0.4s ease-in-out;\r\n    font-family: Raleway, sans-serif;\r\n  }\r\ninput[type=text][_ngcontent-%COMP%]:focus {\r\n    width: 20%;\r\n}\r\n.vertical-menu[_ngcontent-%COMP%] {\r\n    width: 370px;\r\n  }\r\n.vertical-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background-color: #eee;\r\n    color: black;\r\n    display: block;\r\n    padding: 12px;\r\n    text-decoration: none;\r\n    font-family: Raleway, sans-serif;\r\n  }\r\n.vertical-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #ccc;\r\n  }\r\n.vertical-menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: #769cb5;\r\n    color: snow;\r\n  }\r\n.ayuda[_ngcontent-%COMP%]{\r\n    color: #769cb5;\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n    float: left;\r\n\r\n\r\n  }\r\n\r\n.transition[_ngcontent-%COMP%] { transition: .3s cubic-bezier(.3, 0, 0, 1.3) }\r\n.s-titulo[_ngcontent-%COMP%]{\r\n  font: 700 3rem Raleway, sans-serif;\r\n  margin-top: 40px 40px;\r\n  color: snow;\r\n  text-shadow: -3px -3px 5px  grey ;\r\n  font-size: 30px;\r\n}\r\n.cards-s[_ngcontent-%COMP%]{\r\n    margin:auto;\r\n    text-align: center;\r\n}\r\n.main_content[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    margin-top: -8px;\r\n    background: linear-gradient(90deg, #769cb5 10%, #161d27 90%); \r\n    border-radius: 2px;\r\n}\r\n.s-categories[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-top: 5px;\r\n\r\n}\r\n.s-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n\r\n}\r\n\r\n.s-container[_ngcontent-%COMP%]   .full-card[_ngcontent-%COMP%]{\r\n   \r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\r\n    overflow: hidden;\r\n    text-align: center;\r\n    transition: all 0.25s;\r\n    background-color: snow;\r\n    margin:22px;\r\n \r\n}\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    bottom: 0;\r\n    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.3);\r\n    height: 300px;\r\n    left: 0;\r\n    margin: 10px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    right: 0;\r\n    top: 0;\r\n    width: 350px;\r\n    height: 500px;\r\n}\r\n.card[_ngcontent-%COMP%]:hover {\r\n    height: 510px;\r\n   \r\n}\r\n.card[_ngcontent-%COMP%]:hover   .cta-container[_ngcontent-%COMP%] {\r\n    display: inline;\r\n   \r\n}\r\n.card[_ngcontent-%COMP%]:hover   .card_circle[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n    border-radius: 0;\r\n   \r\n}\r\n.card[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\r\n    background: #769cb5;\r\n    color: #fff;\r\n    padding: 5px;\r\n}\r\n.card[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { color: #fff }\r\n.card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {height:260px}\r\n.card_circle[_ngcontent-%COMP%] {\r\n    background: no-repeat center bottom;\r\n    background-color: #769cb5;\r\n    background-size: cover;\r\n    border-radius: 50%;\r\n    height: 316px;\r\n    position: relative;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n    height: 260px;\r\n    width: 249px;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n    color:#4a7385;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 24px;\r\n    font-weight: 200;\r\n    text-align: center;\r\n    width: 100%;\r\n    z-index: 9999;\r\n}\r\np[_ngcontent-%COMP%] {\r\n    color: rgba(0,0,0,.6);\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 100%;\r\n    font-weight: normal;\r\n  \r\n    position: relative;\r\n    text-align: center;\r\n    z-index: 9999;\r\n}\r\n.cta-container[_ngcontent-%COMP%] {\r\n    display: none;\r\n\r\n    position: relative;\r\n    text-align: center;\r\n    width: 100%;\r\n    z-index: 9999;\r\n}\r\n.cta[_ngcontent-%COMP%] {\r\n    -moz-border-radius: 2px;\r\n    -moz-transition: 0.2s ease-out;\r\n    -ms-transition: 0.2s ease-out;\r\n    -o-transition: 0.2s ease-out;\r\n    -webkit-border-radius: 2px;\r\n    -webkit-transition: 0.2s ease-out;\r\n    background-clip: padding-box;\r\n    border: 2px solid #4a7385;\r\n    border-radius: 2px;\r\n    color: #4a7385;\r\n    display: inline-block;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 17px;\r\n    font-weight: 400;\r\n    height: 36px;\r\n    letter-spacing: 0.5px;\r\n    line-height: 36px;\r\n\r\n    padding: 0 2rem;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    transition: 0.2s ease-out;\r\n}\r\n.cta[_ngcontent-%COMP%]:hover {\r\n    background-color:#4a7385;\r\n    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    color: #fff;\r\n    -moz-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7QUFDM0U7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFFNUIsa0NBQWtDO0lBQ2xDLGdDQUFnQztFQUNsQztBQUVBO0lBQ0UsVUFBVTtBQUNkO0FBRUE7SUFDSSxZQUFZO0VBQ2Q7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZ0NBQWdDO0VBQ2xDO0FBRUE7SUFDRSxzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7QUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7OztFQUdiO0FBQ0EsYUFBYTtBQUVmLGNBQWMsNENBQTRDO0FBRTFEO0VBQ0Usa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0REFBNEQ7SUFDNUQsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTs7QUFFbkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7O0FBRW5CO0FBQ0EseURBQXlEO0FBQ3pEOztJQUVJLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFdBQVc7O0FBRWY7QUFFQSxtQkFBbUI7QUFDbkIsY0FBYztBQUVkO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCw0Q0FBNEM7SUFDNUMsYUFBYTtJQUNiLE9BQU87SUFDUCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxhQUFhOztBQUVqQjtBQUNBO0lBQ0ksZUFBZTs7QUFFbkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQSx1QkFBdUIsWUFBWTtBQUVuQyxpQkFBaUIsWUFBWTtBQUM3QjtJQUNJLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUlBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsbUJBQW1COztJQUVuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7O0lBRWIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixpQ0FBaUM7SUFDakMsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjs7SUFFakIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsNkVBQTZFO0lBQzdFLFdBQVc7SUFDWCxrRkFBa0Y7SUFDbEYscUZBQXFGO0FBQ3pGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6NDAwLDQwMGksNzAwXCIpO1xyXG4ubWFycXVle1xyXG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXksIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOi0xOXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4IDEwcHg7IFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4udmVydGljYWwtbWVudSB7XHJcbiAgICB3aWR0aDogMzcwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC52ZXJ0aWNhbC1tZW51IGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAudmVydGljYWwtbWVudSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIC52ZXJ0aWNhbC1tZW51IGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NjljYjU7XHJcbiAgICBjb2xvcjogc25vdztcclxuICB9XHJcblxyXG4gIC5heXVkYXtcclxuICAgIGNvbG9yOiAjNzY5Y2I1O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuXHJcbiAgfVxyXG4gIC8qIG5vdGljaWFzICovXHJcblxyXG4udHJhbnNpdGlvbiB7IHRyYW5zaXRpb246IC4zcyBjdWJpYy1iZXppZXIoLjMsIDAsIDAsIDEuMykgfVxyXG5cclxuLnMtdGl0dWxve1xyXG4gIGZvbnQ6IDcwMCAzcmVtIFJhbGV3YXksIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLXRvcDogNDBweCA0MHB4O1xyXG4gIGNvbG9yOiBzbm93O1xyXG4gIHRleHQtc2hhZG93OiAtM3B4IC0zcHggNXB4ICBncmV5IDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn0gIFxyXG4uY2FyZHMtc3tcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWFpbl9jb250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzY5Y2I1IDEwJSwgIzE2MWQyNyA5MCUpOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLnMtY2F0ZWdvcmllc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxufVxyXG5cclxuLnMtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG59XHJcbi8qIC5sbGFtYXIgbGEgY2xhc2UsICBkZWphciBlc3BhY2lvLCBhZ3JlZ2FyIHN1YmNsYXNlcyAgKi9cclxuLnMtY29udGFpbmVyIC5mdWxsLWNhcmR7XHJcbiAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbm93O1xyXG4gICAgbWFyZ2luOjIycHg7XHJcbiBcclxufVxyXG5cclxuLyogRW5kIENhdGVnb3JpZXMgKi9cclxuLyogbmV3IENhcmRzICovXHJcblxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIGhlaWdodDogNTEwcHg7XHJcbiAgIFxyXG59XHJcbi5jYXJkOmhvdmVyIC5jdGEtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgXHJcbn1cclxuLmNhcmQ6aG92ZXIgLmNhcmRfY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICBcclxufVxyXG4uY2FyZDpob3ZlciBoMiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzY5Y2I1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmNhcmQ6aG92ZXIgaDIgc21hbGwgeyBjb2xvcjogI2ZmZiB9XHJcblxyXG4uY2FyZDpob3ZlciBpbWcge2hlaWdodDoyNjBweH1cclxuLmNhcmRfY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc2OWNiNTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMxNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5sb2dve1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxuICAgIHdpZHRoOiAyNDlweDtcclxufVxyXG5cclxuXHJcblxyXG5oMiB7XHJcbiAgICBjb2xvcjojNGE3Mzg1O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxucCB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuLmN0YS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuLmN0YSB7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0YTczODU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjb2xvcjogIzRhNzM4NTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcblxyXG4gICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuLmN0YTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0YTczODU7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDhweCAxN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggMTdweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-content',
          templateUrl: './content.component.html',
          styleUrls: ['./content.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/elipticas/elipticas.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/elipticas/elipticas.component.ts ***!
    \*************************************************************/

  /*! exports provided: ElipticasComponent */

  /***/
  function srcAppComponentsElipticasElipticasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElipticasComponent", function () {
      return ElipticasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ElipticasComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\"I am Groot\" ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r28 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ElipticasComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Leeloo ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ElipticasComponent_li_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Profesor Nerdelbaum Frink, Jr. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ElipticasComponent_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Goku ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ElipticasComponent_li_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Green Lantern Corps ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ElipticasComponent_li_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The Watchers ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ElipticasComponent_li_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The Galactic Federation ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ElipticasComponent_li_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Silverhawks ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ElipticasComponent =
    /*#__PURE__*/
    function () {
      function ElipticasComponent() {
        _classCallCheck(this, ElipticasComponent);

        this.imagen1 = ['assets/img/em_1.jpg'];
        this.imagen2 = ['assets/img/em_2.jpg'];
        this.imagen3 = ['assets/img/em_3.jpg'];
        this.imagen4 = ['assets/img/em_4.jpg'];
        this.imagen5 = ['assets/img/as1.jpg'];
        this.imagen6 = ['assets/img/as2.jpg'];
        this.imagen7 = ['assets/img/as3.jpg'];
        this.imagen8 = ['assets/img/as4.jpg'];
        this.imagenoti1 = ['assets/img/moe.jpg'];
      }

      _createClass(ElipticasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ElipticasComponent;
    }();

    ElipticasComponent.ɵfac = function ElipticasComponent_Factory(t) {
      return new (t || ElipticasComponent)();
    };

    ElipticasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ElipticasComponent,
      selectors: [["app-elipticas"]],
      decls: 23,
      vars: 8,
      consts: [[1, "main_content"], [1, "sliderdivtext"], [1, "textoslider"], [1, "tituloslider2"], [1, "tituloslider1"], [1, "slider"], [4, "ngFor", "ngForOf"], [1, "imagenslider", 3, "src"]],
      template: function ElipticasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " NUESTROS EMBAJADORES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Agradecimiento a los embajadores y sus aportes a la paz de las galaxias. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ElipticasComponent_li_10_Template, 4, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ElipticasComponent_li_11_Template, 4, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ElipticasComponent_li_12_Template, 4, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ElipticasComponent_li_13_Template, 4, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " ASOCIADOS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ElipticasComponent_li_19_Template, 4, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ElipticasComponent_li_20_Template, 4, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ElipticasComponent_li_21_Template, 4, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ElipticasComponent_li_22_Template, 4, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen8);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".main_content[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    margin-top: -8px;\r\n    background: linear-gradient(90deg, #137CA3 10%, #274c55 90%);\r\n    border-radius: 2px;\r\n}\r\n\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    height:50px;\r\n    border-radius: 10px;\r\n    color: #769cb5;\r\n}\r\n\r\n\r\n.sliderdivitext[_ngcontent-%COMP%]{\r\n    display: inline-flex;\r\n    box-sizing: content-box;\r\n    width: 100%;\r\n    margin: 50px;\r\n}\r\n\r\n\r\n.textoslider[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    letter-spacing: 1px;\r\n    color: #4a7385;\r\n    width: 50%;\r\n    padding: 2px;\r\n    margin-left: 5px;\r\n }\r\n\r\n\r\n.tituloslider1[_ngcontent-%COMP%]{\r\n    color: #DDE8F0;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    font-family: Raleway, sans-serif;\r\n    letter-spacing: 3px;\r\n}\r\n\r\n\r\n.tituloslider2[_ngcontent-%COMP%]{\r\n    color: #DDE8F0;\r\n    font-size: 35px;\r\n    text-shadow: -3px -3px 5px  #4a7385;\r\n    font-family:Raleway, sans-serif;\r\n    letter-spacing: 4px;\r\n    text-align: center;\r\n}\r\n\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: Raleway, sans-serif;\r\n    font-size: 22px;\r\n    color: #DDE8F0;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n\r\n.slider[_ngcontent-%COMP%] {\r\n\twidth: 39%;\r\n\tmargin: auto;\r\n    overflow: hidden;\r\n    box-sizing: content-box;\r\n    height: 400px;\r\n}\r\n\r\n\r\n.slider[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tpadding: 0;\r\n    width: 400%;\r\n\t-webkit-animation: cambio 20s infinite alternate linear;\r\n\t        animation: cambio 20s infinite alternate linear;\r\n}\r\n\r\n\r\n.slider[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    list-style: none;\r\n    font-family: Raleway, sans-serif;\r\n    font-size: 22px;\r\n    color: #DDE8F0;\r\n    letter-spacing: 1px;\r\n  \r\n \r\n}\r\n\r\n\r\n.slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 87%;\r\n    height: 31%;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n@-webkit-keyframes cambio {\r\n\t0% {margin-left: 0;}\r\n\t20% {margin-left: 0;}\r\n\t\r\n\t25% {margin-left: -100%;}\r\n\t45% {margin-left: -100%;}\r\n\t\r\n\t50% {margin-left: -200%;}\r\n\t70% {margin-left: -200%;}\r\n\t\r\n\t75% {margin-left: -300%;}\r\n\t100% {margin-left: -300%;}\r\n}\r\n\r\n\r\n@keyframes cambio {\r\n\t0% {margin-left: 0;}\r\n\t20% {margin-left: 0;}\r\n\t\r\n\t25% {margin-left: -100%;}\r\n\t45% {margin-left: -100%;}\r\n\t\r\n\t50% {margin-left: -200%;}\r\n\t70% {margin-left: -200%;}\r\n\t\r\n\t75% {margin-left: -300%;}\r\n\t100% {margin-left: -300%;}\r\n}\r\n\r\n\r\n@media (max-width:600px){\r\n    .sliderdivitext[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: 400px;\r\n    }\r\n}\r\n\r\n\r\n@media (min-width:600px){\r\n    .sliderdivitext[_ngcontent-%COMP%]{\r\n     width: 100%;\r\n     height: 400px;\r\n }   \r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media(min-width:768px){\r\n    .sliderdivitext[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\nheight: 420px;\r\n    }\r\n}\r\n\r\n\r\n@media (min-width:992px){\r\n    .sliderdivitext[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: 400px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (min-width:1200px){\r\n    .sliderdivitext[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: 600px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbGlwdGljYXMvZWxpcHRpY2FzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDREQUE0RDtJQUM1RCxrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOzs7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7Q0FDbkI7OztBQUVEO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7OztBQUVBO0NBQ0MsVUFBVTtDQUNWLFlBQVk7SUFDVCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7OztBQUVBO0NBQ0MsYUFBYTtDQUNiLFVBQVU7SUFDUCxXQUFXO0NBQ2QsdURBQStDO1NBQS9DLCtDQUErQztBQUNoRDs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjs7O0FBR3ZCOzs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtDQUNDLElBQUksY0FBYyxDQUFDO0NBQ25CLEtBQUssY0FBYyxDQUFDOztDQUVwQixLQUFLLGtCQUFrQixDQUFDO0NBQ3hCLEtBQUssa0JBQWtCLENBQUM7O0NBRXhCLEtBQUssa0JBQWtCLENBQUM7Q0FDeEIsS0FBSyxrQkFBa0IsQ0FBQzs7Q0FFeEIsS0FBSyxrQkFBa0IsQ0FBQztDQUN4QixNQUFNLGtCQUFrQixDQUFDO0FBQzFCOzs7QUFaQTtDQUNDLElBQUksY0FBYyxDQUFDO0NBQ25CLEtBQUssY0FBYyxDQUFDOztDQUVwQixLQUFLLGtCQUFrQixDQUFDO0NBQ3hCLEtBQUssa0JBQWtCLENBQUM7O0NBRXhCLEtBQUssa0JBQWtCLENBQUM7Q0FDeEIsS0FBSyxrQkFBa0IsQ0FBQzs7Q0FFeEIsS0FBSyxrQkFBa0IsQ0FBQztDQUN4QixNQUFNLGtCQUFrQixDQUFDO0FBQzFCOzs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGFBQWE7SUFDakI7QUFDSjs7O0FBQ0E7SUFDSTtLQUNDLFdBQVc7S0FDWCxhQUFhO0NBQ2pCO0FBQ0Q7OztBQUNBLCtCQUErQjs7O0FBQy9CO0lBQ0k7QUFDSixXQUFXO0FBQ1gsYUFBYTtJQUNUO0FBQ0o7OztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsYUFBYTtJQUNqQjtBQUNKOzs7QUFDQSw2QkFBNkI7OztBQUM3QjtJQUNJO1FBQ0ksV0FBVztRQUNYLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWxpcHRpY2FzL2VsaXB0aWNhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYWluX2NvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxMzdDQTMgMTAlLCAjMjc0YzU1IDkwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiAjNzY5Y2I1O1xyXG59XHJcbi5zbGlkZXJkaXZpdGV4dHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogNTBweDtcclxufVxyXG5cclxuLnRleHRvc2xpZGVye1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiAjNGE3Mzg1O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiB9XHJcblxyXG4udGl0dWxvc2xpZGVyMXtcclxuICAgIGNvbG9yOiAjRERFOEYwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXksIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG59XHJcblxyXG4udGl0dWxvc2xpZGVyMntcclxuICAgIGNvbG9yOiAjRERFOEYwO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IC0zcHggLTNweCA1cHggICM0YTczODU7XHJcbiAgICBmb250LWZhbWlseTpSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjRERFOEYwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcblx0d2lkdGg6IDM5JTtcclxuXHRtYXJnaW46IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uc2xpZGVyIHVsIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogNDAwJTtcclxuXHRhbmltYXRpb246IGNhbWJpbyAyMHMgaW5maW5pdGUgYWx0ZXJuYXRlIGxpbmVhcjtcclxufVxyXG5cclxuLnNsaWRlciBsaSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjRERFOEYwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBcclxuIFxyXG59XHJcblxyXG4uc2xpZGVyIGltZyB7XHJcbiAgICB3aWR0aDogODclO1xyXG4gICAgaGVpZ2h0OiAzMSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhbWJpbyB7XHJcblx0MCUge21hcmdpbi1sZWZ0OiAwO31cclxuXHQyMCUge21hcmdpbi1sZWZ0OiAwO31cclxuXHRcclxuXHQyNSUge21hcmdpbi1sZWZ0OiAtMTAwJTt9XHJcblx0NDUlIHttYXJnaW4tbGVmdDogLTEwMCU7fVxyXG5cdFxyXG5cdDUwJSB7bWFyZ2luLWxlZnQ6IC0yMDAlO31cclxuXHQ3MCUge21hcmdpbi1sZWZ0OiAtMjAwJTt9XHJcblx0XHJcblx0NzUlIHttYXJnaW4tbGVmdDogLTMwMCU7fVxyXG5cdDEwMCUge21hcmdpbi1sZWZ0OiAtMzAwJTt9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAgIC5zbGlkZXJkaXZpdGV4dHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjYwMHB4KXtcclxuICAgIC5zbGlkZXJkaXZpdGV4dHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gfSAgIFxyXG59XHJcbi8qIFBhcmEgZGlzcG9zaXRpdm9zIG1lZGlhbm9zICovXHJcbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLnNsaWRlcmRpdml0ZXh0IHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogNDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXtcclxuICAgIC5zbGlkZXJkaXZpdGV4dHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG59XHJcbi8qIERpc3Bvc2l0aXZvcyBtdXkgZ3JhbmRlcyAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpe1xyXG4gICAgLnNsaWRlcmRpdml0ZXh0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElipticasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-elipticas',
          templateUrl: './elipticas.component.html',
          styleUrls: ['./elipticas.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FooterComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r55 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r55, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var FooterComponent = function FooterComponent() {
      _classCallCheck(this, FooterComponent);

      this.imagenbogota = ['assets/img/logo_alcaldia.png'];
    };

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 9,
      vars: 1,
      consts: [[1, "textofooter"], [4, "ngFor", "ngForOf"], [1, "logo", 3, "src"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \xA9COPYRIGHT 2020. Hecho por Diana Chitiva. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Para Bictia Bootcamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Todos los derechos reservados. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FooterComponent_span_8_Template, 2, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagenbogota);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Raleway:400,400i,700\");\r\n\r\n.textofooter[_ngcontent-%COMP%]{\r\n    padding-top: 8px;\r\n    width: 100%;\r\n    font-family:  Raleway, sans-serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    background-color: #161d27;\r\n    color: #b8dcfc;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    list-style: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFOztBQUUzRTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjQwMCw0MDBpLDcwMFwiKTtcclxuXHJcbi50ZXh0b2Zvb3RlcntcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAgUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjFkMjc7XHJcbiAgICBjb2xvcjogI2I4ZGNmYztcclxufVxyXG5cclxuLmxvZ297XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-footer",
          templateUrl: "./footer.component.html",
          styleUrls: ["./footer.component.css"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/galaxias/galaxias.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/galaxias/galaxias.component.ts ***!
    \***********************************************************/

  /*! exports provided: GalaxiasComponent */

  /***/
  function srcAppComponentsGalaxiasGalaxiasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalaxiasComponent", function () {
      return GalaxiasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GalaxiasComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function GalaxiasComponent_li_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function GalaxiasComponent_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function GalaxiasComponent_li_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function GalaxiasComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function GalaxiasComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function GalaxiasComponent_div_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var GalaxiasComponent =
    /*#__PURE__*/
    function () {
      function GalaxiasComponent() {
        _classCallCheck(this, GalaxiasComponent);

        this.imagen1 = ['assets/img/comun1.jpg'];
        this.imagen2 = ['assets/img/comun2.jpg'];
        this.imagen3 = ['assets/img/comun3.jpg'];
        this.imagen4 = ['assets/img/comun4.jpg'];
        this.imagen5 = ['assets/img/nos1.jpg'];
        this.imagen6 = ['assets/img/nos2.jpg'];
        this.imagen7 = ['assets/img/nos3.jpg'];
      }

      _createClass(GalaxiasComponent, [{
        key: "mostrar1",
        value: function mostrar1(e) {
          prompt('Escribe tu numero de registro galactico');
          prompt('Escribe tu consulta');
          alert('Tu consulta ha sido registrada con el número : 8958768545');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GalaxiasComponent;
    }();

    GalaxiasComponent.ɵfac = function GalaxiasComponent_Factory(t) {
      return new (t || GalaxiasComponent)();
    };

    GalaxiasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalaxiasComponent,
      selectors: [["app-galaxias"]],
      decls: 55,
      vars: 7,
      consts: [[1, "sliderdivtext"], [1, "textoslider"], [1, "tituloslider2"], [1, "tituloslider1"], [3, "click"], [1, "slider"], [4, "ngFor", "ngForOf"], [1, "noticias"], [1, "main_content"], [1, "cards-s"], ["id", "grafica", 1, "s-categories"], [1, "s-titulo"], [1, "s-container"], [1, "full-card"], [1, "card", "transition"], [1, "card_circle", "transition"], [1, "transition"], [1, "cta-container", "transition"], ["href", "#", 1, "cta"], [1, "imagenslider", 3, "src"], [1, "logo", 3, "src"]],
      template: function GalaxiasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " NUESTRAS COMUNIDADES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " En esta secci\xF3n encontrar\xE1s tr\xE1mites y servicios relacionados con el tipo de poblaci\xF3n de tu inter\xE9s. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalaxiasComponent_Template_button_click_7_listener($event) {
            return ctx.mostrar1($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Consulta R\xE1pida ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GalaxiasComponent_li_11_Template, 2, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GalaxiasComponent_li_12_Template, 2, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GalaxiasComponent_li_13_Template, 2, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GalaxiasComponent_li_14_Template, 2, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "article", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tr\xE1mites y Servicios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, GalaxiasComponent_div_25_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Registro Unico de Identificaci\xF3n Galactica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Haz parte de una communidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Click Aqui");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, GalaxiasComponent_div_36_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Actualizaci\xF3n galaxia de Residencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Actualiza tu direcci\xF3n de correspondencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Click Aqui");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, GalaxiasComponent_div_47_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Trabaja con nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Apoya una galaxia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Click Aqui");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen6);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["button[_ngcontent-%COMP%] {\r\n    height:50px;\r\n    border-radius: 10px;\r\n    color: #769cb5;\r\n    margin: 10px;\r\n}\r\n.sliderdivitext[_ngcontent-%COMP%]{\r\n    display: inline-flex;\r\n    background-color: #DDE8F0;\r\n    box-sizing: content-box;\r\n    width: 100%;\r\n    margin: 50px;\r\n    \r\n}\r\n.textoslider[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    letter-spacing: 1px;\r\n    color: #004581;\r\n    width: 50%;\r\n    padding: 2px;\r\n    margin-left: 5px;\r\n    float: right;\r\n }\r\n.tituloslider[_ngcontent-%COMP%]{\r\n    color: #004581 ;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    padding: 35px 0 15px 0;\r\n    font-family: Raleway, sans-serif;\r\n    letter-spacing: 3px;\r\n}\r\n.tituloslider2[_ngcontent-%COMP%]{\r\n    color: #DDE8F0;\r\n    font-size: 35px;\r\n    padding: 35px 0 15px 0;\r\n    text-shadow: -3px -3px 5px  #004581;\r\n    font-family:Raleway, sans-serif;\r\n    letter-spacing: 4px;\r\n}\r\np[_ngcontent-%COMP%] {\r\n    font-family: Raleway, sans-serif;\r\n    font-size: 22px;\r\n    color:  #004581;\r\n    letter-spacing: 1px;\r\n}\r\n.slider[_ngcontent-%COMP%] {\r\n\twidth: 39%;\r\n\tmargin: auto;\r\n    overflow: hidden;\r\n    box-sizing: content-box;\r\n}\r\n.slider[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tpadding: 0;\r\n    width: 400%;\r\n\t-webkit-animation: cambio 20s infinite alternate linear;\r\n\t        animation: cambio 20s infinite alternate linear;\r\n}\r\n.slider[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    list-style: none;\r\n \r\n}\r\n.slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n}\r\n@-webkit-keyframes cambio {\r\n\t0% {margin-left: 0;}\r\n\t20% {margin-left: 0;}\r\n\t\r\n\t25% {margin-left: -100%;}\r\n\t45% {margin-left: -100%;}\r\n\t\r\n\t50% {margin-left: -200%;}\r\n\t70% {margin-left: -200%;}\r\n\t\r\n\t75% {margin-left: -300%;}\r\n\t100% {margin-left: -300%;}\r\n}\r\n@keyframes cambio {\r\n\t0% {margin-left: 0;}\r\n\t20% {margin-left: 0;}\r\n\t\r\n\t25% {margin-left: -100%;}\r\n\t45% {margin-left: -100%;}\r\n\t\r\n\t50% {margin-left: -200%;}\r\n\t70% {margin-left: -200%;}\r\n\t\r\n\t75% {margin-left: -300%;}\r\n\t100% {margin-left: -300%;}\r\n}\r\n@media (max-width:600px){\r\n    .sliderdivitext[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: 400px;\r\n    }\r\n}\r\n@media (min-width:600px){\r\n    .sliderdivitext[_ngcontent-%COMP%]{\r\n     width: 100%;\r\n     height: 400px;\r\n }   \r\n}\r\n\r\n@media(min-width:768px){\r\n    .sliderdivitext[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\nheight: 420px;\r\n    }\r\n}\r\n@media (min-width:992px){\r\n    .sliderdivitext[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: 400px;\r\n    }\r\n}\r\n\r\n@media (min-width:1200px){\r\n    .sliderdivitext[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: 600px;\r\n    }\r\n}\r\n\r\n.transition[_ngcontent-%COMP%] { transition: .3s cubic-bezier(.3, 0, 0, 1.3) }\r\n.s-titulo[_ngcontent-%COMP%]{\r\n  font: 700 3rem Raleway, sans-serif;\r\n  margin-top: 40px 40px;\r\n  color: snow;\r\n  text-shadow: -3px -3px 5px  grey ;\r\n  font-size: 30px;\r\n}\r\n.cards-s[_ngcontent-%COMP%]{\r\n    margin:auto;\r\n    text-align: center;\r\n}\r\n.main_content[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    background: linear-gradient(90deg, #769cb5 10%, #161d27 90%); \r\n    border-radius: 2px;\r\n}\r\n.s-categories[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-top: 5px;\r\n\r\n}\r\n.s-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n\r\n}\r\n\r\n.s-container[_ngcontent-%COMP%]   .full-card[_ngcontent-%COMP%]{\r\n   \r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\r\n    overflow: hidden;\r\n    text-align: center;\r\n    transition: all 0.25s;\r\n    background-color: snow;\r\n    margin:22px;\r\n \r\n}\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    bottom: 0;\r\n    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.3);\r\n    height: 300px;\r\n    left: 0;\r\n    margin: 10px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    right: 0;\r\n    top: 0;\r\n    width: 350px;\r\n    height: 500px;\r\n}\r\n.card[_ngcontent-%COMP%]:hover {\r\n    height: 510px;\r\n   \r\n}\r\n.card[_ngcontent-%COMP%]:hover   .cta-container[_ngcontent-%COMP%] {\r\n    display: inline;\r\n   \r\n}\r\n.card[_ngcontent-%COMP%]:hover   .card_circle[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n    border-radius: 0;\r\n   \r\n}\r\n.card[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\r\n    background: #769cb5;\r\n    color: #fff;\r\n    padding: 5px;\r\n}\r\n.card[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { color: #fff }\r\n.card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {height:260px}\r\n.card_circle[_ngcontent-%COMP%] {\r\n    background: no-repeat center bottom;\r\n    background-color: #769cb5;\r\n    background-size: cover;\r\n    border-radius: 50%;\r\n    height: 316px;\r\n    position: relative;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n    height: 260px;\r\n    width: 249px;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n    color:#4a7385;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 24px;\r\n    font-weight: 200;\r\n    text-align: center;\r\n    width: 100%;\r\n    z-index: 9999;\r\n}\r\np[_ngcontent-%COMP%] {\r\n    color: rgba(0,0,0,.6);\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 100%;\r\n    font-weight: normal;\r\n  \r\n    position: relative;\r\n    text-align: center;\r\n    z-index: 9999;\r\n}\r\n.cta-container[_ngcontent-%COMP%] {\r\n    display: none;\r\n\r\n    position: relative;\r\n    text-align: center;\r\n    width: 100%;\r\n    z-index: 9999;\r\n}\r\n.cta[_ngcontent-%COMP%] {\r\n    -moz-border-radius: 2px;\r\n    -moz-transition: 0.2s ease-out;\r\n    -ms-transition: 0.2s ease-out;\r\n    -o-transition: 0.2s ease-out;\r\n    -webkit-border-radius: 2px;\r\n    -webkit-transition: 0.2s ease-out;\r\n    background-clip: padding-box;\r\n    border: 2px solid #4a7385;\r\n    border-radius: 2px;\r\n    color: #4a7385;\r\n    display: inline-block;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 17px;\r\n    font-weight: 400;\r\n    height: 36px;\r\n    letter-spacing: 0.5px;\r\n    line-height: 36px;\r\n\r\n    padding: 0 2rem;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    transition: 0.2s ease-out;\r\n}\r\n.cta[_ngcontent-%COMP%]:hover {\r\n    background-color:#4a7385;\r\n    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    color: #fff;\r\n    -moz-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYWxheGlhcy9nYWxheGlhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2Y7QUFFRDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBRUE7Q0FDQyxVQUFVO0NBQ1YsWUFBWTtJQUNULGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7QUFFQTtDQUNDLGFBQWE7Q0FDYixVQUFVO0lBQ1AsV0FBVztDQUNkLHVEQUErQztTQUEvQywrQ0FBK0M7QUFDaEQ7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUVBO0NBQ0MsSUFBSSxjQUFjLENBQUM7Q0FDbkIsS0FBSyxjQUFjLENBQUM7O0NBRXBCLEtBQUssa0JBQWtCLENBQUM7Q0FDeEIsS0FBSyxrQkFBa0IsQ0FBQzs7Q0FFeEIsS0FBSyxrQkFBa0IsQ0FBQztDQUN4QixLQUFLLGtCQUFrQixDQUFDOztDQUV4QixLQUFLLGtCQUFrQixDQUFDO0NBQ3hCLE1BQU0sa0JBQWtCLENBQUM7QUFDMUI7QUFaQTtDQUNDLElBQUksY0FBYyxDQUFDO0NBQ25CLEtBQUssY0FBYyxDQUFDOztDQUVwQixLQUFLLGtCQUFrQixDQUFDO0NBQ3hCLEtBQUssa0JBQWtCLENBQUM7O0NBRXhCLEtBQUssa0JBQWtCLENBQUM7Q0FDeEIsS0FBSyxrQkFBa0IsQ0FBQzs7Q0FFeEIsS0FBSyxrQkFBa0IsQ0FBQztDQUN4QixNQUFNLGtCQUFrQixDQUFDO0FBQzFCO0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCO0FBQ0o7QUFDQTtJQUNJO0tBQ0MsV0FBVztLQUNYLGFBQWE7Q0FDakI7QUFDRDtBQUNBLCtCQUErQjtBQUMvQjtJQUNJO0FBQ0osV0FBVztBQUNYLGFBQWE7SUFDVDtBQUNKO0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCO0FBQ0o7QUFDQSw2QkFBNkI7QUFDN0I7SUFDSTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCO0FBQ0o7QUFDQSxXQUFXO0FBQ1gsY0FBYyw0Q0FBNEM7QUFFMUQ7RUFDRSxrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNERBQTREO0lBQzVELGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7O0FBRW5CO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlOztBQUVuQjtBQUNBLHlEQUF5RDtBQUN6RDs7SUFFSSxrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixXQUFXOztBQUVmO0FBRUEsbUJBQW1CO0FBQ25CLGNBQWM7QUFFZDtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsNENBQTRDO0lBQzVDLGFBQWE7SUFDYixPQUFPO0lBQ1AsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUVBO0lBQ0ksYUFBYTs7QUFFakI7QUFDQTtJQUNJLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0EsdUJBQXVCLFlBQVk7QUFFbkMsaUJBQWlCLFlBQVk7QUFDN0I7SUFDSSxtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFJQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLG1CQUFtQjs7SUFFbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhOztJQUViLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7O0lBRWpCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLDZFQUE2RTtJQUM3RSxXQUFXO0lBQ1gsa0ZBQWtGO0lBQ2xGLHFGQUFxRjtBQUN6RiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsYXhpYXMvZ2FsYXhpYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogIzc2OWNiNTtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4uc2xpZGVyZGl2aXRleHR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREU4RjA7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi50ZXh0b3NsaWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogIzAwNDU4MTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gfVxyXG5cclxuLnRpdHVsb3NsaWRlcntcclxuICAgIGNvbG9yOiAjMDA0NTgxIDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDM1cHggMCAxNXB4IDA7XHJcbiAgICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbn1cclxuXHJcbi50aXR1bG9zbGlkZXIye1xyXG4gICAgY29sb3I6ICNEREU4RjA7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiAzNXB4IDAgMTVweCAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IC0zcHggLTNweCA1cHggICMwMDQ1ODE7XHJcbiAgICBmb250LWZhbWlseTpSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAgIzAwNDU4MTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG5cdHdpZHRoOiAzOSU7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG4uc2xpZGVyIHVsIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogNDAwJTtcclxuXHRhbmltYXRpb246IGNhbWJpbyAyMHMgaW5maW5pdGUgYWx0ZXJuYXRlIGxpbmVhcjtcclxufVxyXG5cclxuLnNsaWRlciBsaSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiBcclxufVxyXG5cclxuLnNsaWRlciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhbWJpbyB7XHJcblx0MCUge21hcmdpbi1sZWZ0OiAwO31cclxuXHQyMCUge21hcmdpbi1sZWZ0OiAwO31cclxuXHRcclxuXHQyNSUge21hcmdpbi1sZWZ0OiAtMTAwJTt9XHJcblx0NDUlIHttYXJnaW4tbGVmdDogLTEwMCU7fVxyXG5cdFxyXG5cdDUwJSB7bWFyZ2luLWxlZnQ6IC0yMDAlO31cclxuXHQ3MCUge21hcmdpbi1sZWZ0OiAtMjAwJTt9XHJcblx0XHJcblx0NzUlIHttYXJnaW4tbGVmdDogLTMwMCU7fVxyXG5cdDEwMCUge21hcmdpbi1sZWZ0OiAtMzAwJTt9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAgIC5zbGlkZXJkaXZpdGV4dHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjYwMHB4KXtcclxuICAgIC5zbGlkZXJkaXZpdGV4dHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gfSAgIFxyXG59XHJcbi8qIFBhcmEgZGlzcG9zaXRpdm9zIG1lZGlhbm9zICovXHJcbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLnNsaWRlcmRpdml0ZXh0IHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogNDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXtcclxuICAgIC5zbGlkZXJkaXZpdGV4dHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG59XHJcbi8qIERpc3Bvc2l0aXZvcyBtdXkgZ3JhbmRlcyAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpe1xyXG4gICAgLnNsaWRlcmRpdml0ZXh0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB9XHJcbn1cclxuLyogQ2FydGFzICovXHJcbi50cmFuc2l0aW9uIHsgdHJhbnNpdGlvbjogLjNzIGN1YmljLWJlemllciguMywgMCwgMCwgMS4zKSB9XHJcblxyXG4ucy10aXR1bG97XHJcbiAgZm9udDogNzAwIDNyZW0gUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tdG9wOiA0MHB4IDQwcHg7XHJcbiAgY29sb3I6IHNub3c7XHJcbiAgdGV4dC1zaGFkb3c6IC0zcHggLTNweCA1cHggIGdyZXkgO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufSAgXHJcbi5jYXJkcy1ze1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluX2NvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc2OWNiNSAxMCUsICMxNjFkMjcgOTAlKTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5zLWNhdGVnb3JpZXN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbn1cclxuXHJcbi5zLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG4vKiAubGxhbWFyIGxhIGNsYXNlLCAgZGVqYXIgZXNwYWNpbywgYWdyZWdhciBzdWJjbGFzZXMgICovXHJcbi5zLWNvbnRhaW5lciAuZnVsbC1jYXJke1xyXG4gICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc25vdztcclxuICAgIG1hcmdpbjoyMnB4O1xyXG4gXHJcbn1cclxuXHJcbi8qIEVuZCBDYXRlZ29yaWVzICovXHJcbi8qIG5ldyBDYXJkcyAqL1xyXG5cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgICBoZWlnaHQ6IDUxMHB4O1xyXG4gICBcclxufVxyXG4uY2FyZDpob3ZlciAuY3RhLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgIFxyXG59XHJcbi5jYXJkOmhvdmVyIC5jYXJkX2NpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgXHJcbn1cclxuLmNhcmQ6aG92ZXIgaDIge1xyXG4gICAgYmFja2dyb3VuZDogIzc2OWNiNTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5jYXJkOmhvdmVyIGgyIHNtYWxsIHsgY29sb3I6ICNmZmYgfVxyXG5cclxuLmNhcmQ6aG92ZXIgaW1nIHtoZWlnaHQ6MjYwcHh9XHJcbi5jYXJkX2NpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NjljYjU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAzMTZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubG9nb3tcclxuICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICB3aWR0aDogMjQ5cHg7XHJcbn1cclxuXHJcblxyXG5cclxuaDIge1xyXG4gICAgY29sb3I6IzRhNzM4NTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcbnAge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcbi5jdGEtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcbi5jdGEge1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNGE3Mzg1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6ICM0YTczODU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG5cclxuICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xyXG59XHJcbi5jdGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNGE3Mzg1O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTdweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA4cHggMTdweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDE3cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalaxiasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-galaxias',
          templateUrl: './galaxias.component.html',
          styleUrls: ['./galaxias.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HeaderComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r53 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r53, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.imagen = ['assets/img/logo.png'];
      }

      _createClass(HeaderComponent, [{
        key: "ingreso",
        value: function ingreso(e) {
          var login = document.getElementById("login");
          var logout = document.getElementById("logout");
          var loginUser = document.getElementById("titulo-bienvenida");

          if (localStorage.getItem('name')) {
            loginUser.innerHTML = "Super Bienvenida para " + localStorage.getItem('name') + " de parte de la organización de galaxias unidas (OGU)";
          }

          function login1() {
            var user = prompt("Escribe tu nombre");

            if (user == null || user == "") {
              alert("Ups! Olvidaste ingresar la info solicitada");
            } else {
              localStorage.setItem('name', user);
              loginUser.innerHTML = "Bienvenido " + localStorage.getItem('name ') + "de parte de la organización de galaxias unidas (OGU)";
            }
          }

          function logout1() {
            loginUser.innerHTML = "Bienvenido";
            localStorage.clear();
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 24,
      vars: 1,
      consts: [[1, "main_header"], ["type", "checkbox", "id", "boton_menu"], ["for", "boton_menu", 1, "icono_menu"], [4, "ngFor", "ngForOf"], [1, "menu"], ["routerLink", "/"], ["routerLink", "/contacto"], [1, "dropdown"], [1, "dropbtn"], ["routerLink", "/galaxias"], [1, "dropdown-content"], ["routerLink", "/irregulares"], ["routerLink", "/elipticas"], [1, "logo", 3, "src"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_li_3_Template, 2, 1, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contacto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Galaxias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Subasta Anual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Embajadores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Raleway:400,400i,700\");\r\n\r\nul[_ngcontent-%COMP%] { \r\n  list-style-type: none;\r\n  display: inline-flex;\r\n  align-items: start;\r\n  list-style: none;\r\n}\r\n.li[_ngcontent-%COMP%] {\r\n    padding: 6px 0;\r\n}\r\na[_ngcontent-%COMP%] {\r\n      --fill-color: snow;\r\n      position: relative;\r\n      display: block;\r\n      padding: 4px 0;\r\n      font: 700 3rem Raleway, sans-serif;\r\n      text-decoration: none;\r\n      text-transform: uppercase;\r\n      -webkit-text-stroke: 2px var(--fill-color);\r\n      background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;\r\n      color: transparent;\r\n      -webkit-background-clip: text;\r\n              background-clip: text;\r\n      transition: 0.5s linear;\r\n      font-size: 30px;\r\n      margin-left: 30px;\r\n}\r\na[_ngcontent-%COMP%]:hover {\r\n        background-size: 100%;\r\n      }\r\n\r\n\r\n.dropbtn[_ngcontent-%COMP%] {\r\n    background-color:transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n.dropdown[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #3f5f6e;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n    border-radius: 1px;\r\n  }\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color: #5e7792}\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n.iconobitart[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-top: 15px;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n    width: 103px;\r\n    list-style: none;\r\n    margin-left: -62px;\r\n}\r\n.main_header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    list-style: none;\r\n  justify-content: center;\r\n  background-color: #161d27;\r\n    \r\n}\r\n\r\n#boton_menu[_ngcontent-%COMP%]{\r\ndisplay: none;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\ndisplay: none;\r\n    width: 100px;\r\n    padding: 10px;\r\n    background-color: #161d27;\r\n}\r\nheader[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover{\r\ncursor: pointer;\r\n}\r\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    display: inline-flex;\r\n}\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    padding: 20px 50px 0px 50px;\r\n \r\n\r\n}\r\n\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    padding: 15px;\r\n}\r\n\r\n\r\n@media (max-width:920px){\r\n\r\n    header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n        display: block;\r\n        height: 70px;\r\n    }\r\n        .menu[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        background: #5e7792;\r\n        width: 95%;\r\n        margin-left: -100%;\r\n        transition: all 0.9s;\r\n        z-index: 100;\r\n    }\r\n   \r\n    .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        \r\n        display: block;\r\n    }\r\n    #boton_menu[_ngcontent-%COMP%]:checked    ~ .menu[_ngcontent-%COMP%]{\r\n        margin: 0px;\r\n    }\r\n    .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\nlist-style: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLDJFQUEyRTtBQUQzRSxVQUFVO0FBR1Y7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtNQUNNLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsY0FBYztNQUNkLGNBQWM7TUFDZCxrQ0FBa0M7TUFDbEMscUJBQXFCO01BQ3JCLHlCQUF5QjtNQUN6QiwwQ0FBMEM7TUFDMUMsd0VBQXdFO01BQ3hFLGtCQUFrQjtNQUNsQiw2QkFBcUI7Y0FBckIscUJBQXFCO01BQ3JCLHVCQUF1QjtNQUN2QixlQUFlO01BQ2YsaUJBQWlCO0FBQ3ZCO0FBQ0M7UUFDTyxxQkFBcUI7TUFDdkI7QUFFTixjQUFjO0FBQ2QsY0FBYztBQUVkO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztFQUNoQjtBQUVBLDJCQUEyQix5QkFBeUI7QUFFcEQ7SUFDRSxjQUFjO0VBQ2hCO0FBRUQsZUFBZTtBQUNmO0lBQ0csa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHlCQUF5Qjs7QUFFM0I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSxhQUFhO0FBQ2I7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxhQUFhO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSwyQkFBMkI7Q0FDOUIsK0NBQStDOztBQUVoRDtBQUNBO3FCQUNxQjtBQUdyQixrREFBa0Q7QUFDbEQ7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjtBQUNBLDJDQUEyQztBQUMzQyxvQ0FBb0M7QUFDcEM7O0lBRUk7UUFDSSxjQUFjO1FBQ2QsWUFBWTtJQUNoQjtRQUNJO1FBQ0Esa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO0FBQ0osZ0JBQWdCO0lBQ1o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIENPTE9SICovXHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6NDAwLDQwMGksNzAwXCIpO1xyXG5cclxudWwgeyBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLmxpIHtcclxuICAgIHBhZGRpbmc6IDZweCAwO1xyXG59XHJcbmEge1xyXG4gICAgICAtLWZpbGwtY29sb3I6IHNub3c7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgICBmb250OiA3MDAgM3JlbSBSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCB2YXIoLS1maWxsLWNvbG9yKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWZpbGwtY29sb3IpIDAgMTAwJSkgbGVmdCAvIDAgbm8tcmVwZWF0O1xyXG4gICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cyBsaW5lYXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuIGE6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgfVxyXG4gICAgXHJcbi8qIEVORCBDT0xPUiAqL1xyXG4vKiBEUk9QRE9XTiAgKi9cclxuXHJcbi5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1ZjZlO1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogIzVlNzc5Mn1cclxuICBcclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gLyogUkVTUE9OU0lWRSAqL1xyXG4gLmljb25vYml0YXJ0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuLmxvZ297XHJcbiAgICB3aWR0aDogMTAzcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02MnB4O1xyXG59XHJcbi5tYWluX2hlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MWQyNztcclxuICAgIFxyXG59XHJcbi8qIFBhcmEgb2N1bHRhciBlbCBib3RvbiBkZWwgbWVudSBjbGlja2VhYmxlKi9cclxuI2JvdG9uX21lbnV7XHJcbmRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLyogU2V1ZG9jbGFzZSBkZXNlbmNlbmRpZW50ZSAqL1xyXG5oZWFkZXIgbGFiZWx7XHJcbmRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MWQyNztcclxufVxyXG5cclxuaGVhZGVyIGxhYmVsOmhvdmVye1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1lbnUgdWx7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbi5tZW51IGxpe1xyXG4gICAgcGFkZGluZzogMjBweCA1MHB4IDBweCA1MHB4O1xyXG4gLyogIGRlc2RlIGFycmliYSBjb21vIGxhcyBtYW5lY2lsbGFzIGRlbCByZWxvaiovXHJcblxyXG59XHJcbi8qICBwYWRkaW5nLXRvcDogMTVweDtcclxucGFkZGluZy1yaWdodDogMjBweDsqL1xyXG5cclxuXHJcbi8qIFBhcmEgcXVpdGFyIGRlY29yYWNpb25lcyBkZWwgdGV4dG8gZW4gZWwgbWVudSAqL1xyXG4ubWVudSBsaSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLyogQ2FtYmlhIHNlZ3VuIGVsIHRhbWHDsW8gZGVsIGRpc3Bvc2l0aXZvICovXHJcbi8qIGNvbmRpY2lvbmVzIGVuICgpIHkgcmVnbGEgZW4geyB9Ki9cclxuQG1lZGlhIChtYXgtd2lkdGg6OTIwcHgpe1xyXG5cclxuICAgIGhlYWRlciBsYWJlbHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB9XHJcbiAgICAgICAgLm1lbnUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNWU3NzkyO1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjlzO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgIH1cclxuICAgXHJcbiAgICAubWVudSB1bCB7XHJcbiAgICAgICAgLyogU2VsZWN0b3IgYXZhbnphZG8gKi9cclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgICNib3Rvbl9tZW51OmNoZWNrZWQgfiAubWVudXtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIC5tZW51IGxpOmhvdmVye1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/irregulares/irregulares.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/irregulares/irregulares.component.ts ***!
    \*****************************************************************/

  /*! exports provided: IrregularesComponent */

  /***/
  function srcAppComponentsIrregularesIrregularesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IrregularesComponent", function () {
      return IrregularesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function IrregularesComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r44 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function IrregularesComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r45 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function IrregularesComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r46 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function IrregularesComponent_div_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r47 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r47, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function IrregularesComponent_div_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r48 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r48, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function IrregularesComponent_div_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r49 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function IrregularesComponent_div_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r50 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r50, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function IrregularesComponent_div_95_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r51 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r51, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var IrregularesComponent =
    /*#__PURE__*/
    function () {
      function IrregularesComponent() {
        _classCallCheck(this, IrregularesComponent);

        this.imagen1 = ['assets/img/sub0.png'];
        this.imagen2 = ['assets/img/sub1.jpg'];
        this.imagen3 = ['assets/img/sub2.jpg'];
        this.imagen4 = ['assets/img/sub3.jpg'];
        this.imagen5 = ['assets/img/sub4.jpg'];
        this.imagen6 = ['assets/img/sub5.jpg'];
        this.imagen7 = ['assets/img/sub6.jpg'];
        this.imagen8 = ['assets/img/sub7.jpg'];
      }

      _createClass(IrregularesComponent, [{
        key: "mostrar6",
        value: function mostrar6(e) {
          alert('Próxima: 26 de Mayo 2222');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IrregularesComponent;
    }();

    IrregularesComponent.ɵfac = function IrregularesComponent_Factory(t) {
      return new (t || IrregularesComponent)();
    };

    IrregularesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IrregularesComponent,
      selectors: [["app-irregulares"]],
      decls: 106,
      vars: 8,
      consts: [[1, "marque"], ["BGCOLOR", "#b8dcfc", "DIRECTION", "LEFT", "SCROLLDELAY", "100", "HEIGHT", "20"], [1, "noticias"], [1, "main_content"], [1, "cards-s"], ["id", "grafica", 1, "s-categories"], [1, "s-titulo"], [3, "click"], [1, "s-container"], [1, "full-card"], [1, "card", "transition"], [1, "card_circle", "transition"], [4, "ngFor", "ngForOf"], [1, "transition"], [1, "cta-container", "transition"], ["href", "#", 1, "cta"], [1, "ayuda"], ["type", "text", "name", "search", "placeholder", "Busca aqui"], [1, "logo", 3, "src"]],
      template: function IrregularesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "MARQUEE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "MARQUEE", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " GOD BLESS THIS MESS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BIENVENIDO A NUESTRA SUBASTA ANUAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "article", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Articulos Recientes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IrregularesComponent_Template_button_click_12_listener($event) {
            return ctx.mostrar6($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fecha de pr\xF3xima Subasta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, IrregularesComponent_div_18_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " NUBE VOLADORA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Donaci\xF3n: Goku");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Leer m\xE1s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, IrregularesComponent_div_29_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "CASCO ESPACIAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Donaci\xF3n: StarLord");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Leer m\xE1s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, IrregularesComponent_div_40_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "TELETRASPORTADOR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Incautado:Rick Sanchez");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Leer m\xE1s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, IrregularesComponent_div_51_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "KID CAPSULE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Donaci\xF3n: Bulma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Leer m\xE1s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, IrregularesComponent_div_62_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " TRAJE CELEBRACI\xD3N ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Donado: Fhloston Paradise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Leer m\xE1s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, IrregularesComponent_div_73_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "TRAJE INFINITO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Donado: Buzz Lightyear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Leer m\xE1s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, IrregularesComponent_div_84_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "NAVE CAPSULE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Donaci\xF3n: Capsule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Leer m\xE1s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, IrregularesComponent_div_95_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "TRAJE STAR TREK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Donaci\xF3n:Spock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Leer m\xE1s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Buscas algo en especial ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagen8);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Raleway:400,400i,700\");\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    height:50px;\r\n    border-radius: 10px;\r\n    color: #769cb5;\r\n    margin: 10px;\r\n}\r\n\r\n.marque[_ngcontent-%COMP%]{\r\n    font-family: Raleway, sans-serif;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    margin-top: -35px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    width: 130px;\r\n    box-sizing: border-box;\r\n    border: 2px solid #ccc;\r\n    border-radius: 4px;\r\n    font-size: 16px;\r\n    background-color: white;\r\n    background-position: 10px 10px; \r\n    background-repeat: no-repeat;\r\n    transition: width 0.4s ease-in-out;\r\n    font-family: Raleway, sans-serif;\r\n  }\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus {\r\n    width: 20%;\r\n}\r\n\r\n.vertical-menu[_ngcontent-%COMP%] {\r\n    width: 370px;\r\n  }\r\n\r\n.vertical-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background-color: #eee;\r\n    color: black;\r\n    display: block;\r\n    padding: 12px;\r\n    text-decoration: none;\r\n    font-family: Raleway, sans-serif;\r\n  }\r\n\r\n.vertical-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #ccc;\r\n  }\r\n\r\n.vertical-menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color:#137CA3 ;\r\n    color: snow;\r\n  }\r\n\r\n.ayuda[_ngcontent-%COMP%]{\r\n    color: #769cb5;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n \r\n\r\n\r\n  }\r\n\r\n\r\n\r\n.transition[_ngcontent-%COMP%] { transition: .3s cubic-bezier(.3, 0, 0, 1.3) }\r\n\r\n.s-titulo[_ngcontent-%COMP%]{\r\n  font: 700 3rem Raleway, sans-serif;\r\n  margin-top: 40px 40px;\r\n  color: snow;\r\n  text-shadow: -3px -3px 5px  grey ;\r\n  font-size: 30px;\r\n}\r\n\r\n.cards-s[_ngcontent-%COMP%]{\r\n    margin:auto;\r\n    text-align: center;\r\n}\r\n\r\n.main_content[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    margin-top: -8px;\r\n    background: linear-gradient(90deg, #137CA3 10%, #274c55 90%);\r\n    border-radius: 2px;\r\n}\r\n\r\n.s-categories[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-top: 5px;\r\n\r\n}\r\n\r\n.s-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n\r\n}\r\n\r\n\r\n\r\n.s-container[_ngcontent-%COMP%]   .full-card[_ngcontent-%COMP%]{\r\n   \r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\r\n    overflow: hidden;\r\n    text-align: center;\r\n    transition: all 0.25s;\r\n    background-color: snow;\r\n    margin:22px;\r\n \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    bottom: 0;\r\n    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.3);\r\n    height: 300px;\r\n    left: 0;\r\n    margin: 10px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    right: 0;\r\n    top: 0;\r\n    width: 255px;\r\n    height: 513px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n    height: 510px;\r\n   \r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover   .cta-container[_ngcontent-%COMP%] {\r\n    display: inline;\r\n   \r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover   .card_circle[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n    border-radius: 0;\r\n   \r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\r\n    background: #137CA3 ;\r\n    color: #fff;\r\n    padding: 5px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { color: #fff }\r\n\r\n.card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {height:260px}\r\n\r\n.card_circle[_ngcontent-%COMP%] {\r\n    background: no-repeat center bottom;\r\n    background-color: #137CA3 ;\r\n    background-size: cover;\r\n    border-radius: 50%;\r\n    height: 316px;\r\n    position: relative;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n    height: 260px;\r\n    width: 249px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    color:#4a7385;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 24px;\r\n    font-weight: 200;\r\n    text-align: center;\r\n    width: 100%;\r\n    z-index: 9999;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    color: rgba(0,0,0,.6);\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 100%;\r\n    font-weight: normal;\r\n  \r\n    position: relative;\r\n    text-align: center;\r\n    z-index: 9999;\r\n}\r\n\r\n.cta-container[_ngcontent-%COMP%] {\r\n    display: none;\r\n\r\n    position: relative;\r\n    text-align: center;\r\n    width: 100%;\r\n    z-index: 9999;\r\n}\r\n\r\n.cta[_ngcontent-%COMP%] {\r\n    -moz-border-radius: 2px;\r\n    -moz-transition: 0.2s ease-out;\r\n    -ms-transition: 0.2s ease-out;\r\n    -o-transition: 0.2s ease-out;\r\n    -webkit-border-radius: 2px;\r\n    -webkit-transition: 0.2s ease-out;\r\n    background-clip: padding-box;\r\n    border: 2px solid #4a7385;\r\n    border-radius: 2px;\r\n    color: #4a7385;\r\n    display: inline-block;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 17px;\r\n    font-weight: 400;\r\n    height: 36px;\r\n    letter-spacing: 0.5px;\r\n    line-height: 36px;\r\n\r\n    padding: 0 2rem;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    transition: 0.2s ease-out;\r\n}\r\n\r\n.cta[_ngcontent-%COMP%]:hover {\r\n    background-color:#4a7385;\r\n    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    color: #fff;\r\n    -moz-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pcnJlZ3VsYXJlcy9pcnJlZ3VsYXJlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJFQUEyRTs7QUFFM0U7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUU1QixrQ0FBa0M7SUFDbEMsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtFQUNkOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiOztBQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7Ozs7RUFJbEI7O0FBQ0EsYUFBYTs7QUFFZixjQUFjLDRDQUE0Qzs7QUFFMUQ7RUFDRSxrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNERBQTREO0lBQzVELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7O0FBRW5COztBQUNBLHlEQUF5RDs7QUFDekQ7O0lBRUksa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsV0FBVzs7QUFFZjs7QUFFQSxtQkFBbUI7O0FBQ25CLGNBQWM7O0FBRWQ7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULDRDQUE0QztJQUM1QyxhQUFhO0lBQ2IsT0FBTztJQUNQLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhOztBQUVqQjs7QUFDQTtJQUNJLGVBQWU7O0FBRW5COztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjs7QUFFcEI7O0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0EsdUJBQXVCLFlBQVk7O0FBRW5DLGlCQUFpQixZQUFZOztBQUM3QjtJQUNJLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBSUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsbUJBQW1COztJQUVuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxhQUFhOztJQUViLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsaUJBQWlCOztJQUVqQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsNkVBQTZFO0lBQzdFLFdBQVc7SUFDWCxrRkFBa0Y7SUFDbEYscUZBQXFGO0FBQ3pGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pcnJlZ3VsYXJlcy9pcnJlZ3VsYXJlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTo0MDAsNDAwaSw3MDBcIik7XHJcblxyXG5idXR0b24ge1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6ICM3NjljYjU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLm1hcnF1ZXtcclxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggMTBweDsgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcclxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1tZW51IHtcclxuICAgIHdpZHRoOiAzNzBweDtcclxuICB9XHJcbiAgXHJcbiAgLnZlcnRpY2FsLW1lbnUgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXksIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC52ZXJ0aWNhbC1tZW51IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICB9XHJcbiAgXHJcbiAgLnZlcnRpY2FsLW1lbnUgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTM3Q0EzIDtcclxuICAgIGNvbG9yOiBzbm93O1xyXG4gIH1cclxuXHJcbiAgLmF5dWRhe1xyXG4gICAgY29sb3I6ICM3NjljYjU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gXHJcblxyXG5cclxuICB9XHJcbiAgLyogbm90aWNpYXMgKi9cclxuXHJcbi50cmFuc2l0aW9uIHsgdHJhbnNpdGlvbjogLjNzIGN1YmljLWJlemllciguMywgMCwgMCwgMS4zKSB9XHJcblxyXG4ucy10aXR1bG97XHJcbiAgZm9udDogNzAwIDNyZW0gUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tdG9wOiA0MHB4IDQwcHg7XHJcbiAgY29sb3I6IHNub3c7XHJcbiAgdGV4dC1zaGFkb3c6IC0zcHggLTNweCA1cHggIGdyZXkgO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufSAgXHJcbi5jYXJkcy1ze1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluX2NvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxMzdDQTMgMTAlLCAjMjc0YzU1IDkwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5zLWNhdGVnb3JpZXN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbn1cclxuXHJcbi5zLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG4vKiAubGxhbWFyIGxhIGNsYXNlLCAgZGVqYXIgZXNwYWNpbywgYWdyZWdhciBzdWJjbGFzZXMgICovXHJcbi5zLWNvbnRhaW5lciAuZnVsbC1jYXJke1xyXG4gICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc25vdztcclxuICAgIG1hcmdpbjoyMnB4O1xyXG4gXHJcbn1cclxuXHJcbi8qIEVuZCBDYXRlZ29yaWVzICovXHJcbi8qIG5ldyBDYXJkcyAqL1xyXG5cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMjU1cHg7XHJcbiAgICBoZWlnaHQ6IDUxM3B4O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgICBoZWlnaHQ6IDUxMHB4O1xyXG4gICBcclxufVxyXG4uY2FyZDpob3ZlciAuY3RhLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgIFxyXG59XHJcbi5jYXJkOmhvdmVyIC5jYXJkX2NpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgXHJcbn1cclxuLmNhcmQ6aG92ZXIgaDIge1xyXG4gICAgYmFja2dyb3VuZDogIzEzN0NBMyA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uY2FyZDpob3ZlciBoMiBzbWFsbCB7IGNvbG9yOiAjZmZmIH1cclxuXHJcbi5jYXJkOmhvdmVyIGltZyB7aGVpZ2h0OjI2MHB4fVxyXG4uY2FyZF9jaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM3Q0EzIDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMxNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5sb2dve1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxuICAgIHdpZHRoOiAyNDlweDtcclxufVxyXG5cclxuXHJcblxyXG5oMiB7XHJcbiAgICBjb2xvcjojNGE3Mzg1O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxucCB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuLmN0YS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuLmN0YSB7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0YTczODU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjb2xvcjogIzRhNzM4NTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcblxyXG4gICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuLmN0YTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0YTczODU7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDhweCAxN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggMTdweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IrregularesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-irregulares',
          templateUrl: './irregulares.component.html',
          styleUrls: ['./irregulares.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\FullStack\Organizacion-Galaxias-Unidas\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map