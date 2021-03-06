"use strict";
(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication/page404/page404.component */ 1991);
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ 17050);
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ 9899);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guard/auth.guard */ 19390);
/* harmony import */ var _core_models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/models/role */ 38252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: '',
        component: _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__.MainLayoutComponent,
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        children: [
            { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
            {
                path: 'admin',
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Admin,
                },
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 77095)).then((m) => m.AdminModule),
            },
            {
                path: 'teacher',
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Teacher,
                },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js-node_modules_ng-apexchart-31d6d1"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_mjs"), __webpack_require__.e("default-src_app_teacher_dashboard_dashboard_component_ts"), __webpack_require__.e("src_app_teacher_teacher_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./teacher/teacher.module */ 33042)).then((m) => m.TeacherModule),
            },
            {
                path: 'student',
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Student,
                },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js-node_modules_ng-apexchart-31d6d1"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-bar_mjs"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_mjs"), __webpack_require__.e("default-src_app_student_dashboard_dashboard_component_ts"), __webpack_require__.e("src_app_student_student_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./student/student.module */ 47859)).then((m) => m.StudentModule),
            },
            // Extra components
            {
                path: 'cal',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("src_app_calendar_calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./calendar/calendar.module */ 979)).then((m) => m.CalendarsModule),
            },
            {
                path: 'task',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_toolbar_mjs-node_modules_ngx-material-file-inp-d32dbc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sidenav_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2015_drag-drop_mjs"), __webpack_require__.e("src_app_task_task_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./task/task.module */ 23917)).then((m) => m.TaskModule),
            },
            {
                path: 'contacts',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_toolbar_mjs-node_modules_ngx-material-file-inp-d32dbc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("src_app_contacts_contacts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contacts/contacts.module */ 6808)).then((m) => m.ContactsModule),
            },
            {
                path: 'email',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-fbbc65"), __webpack_require__.e("src_app_email_email_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./email/email.module */ 57727)).then((m) => m.EmailModule),
            },
            {
                path: 'apps',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_toolbar_mjs-node_modules_ngx-material-file-inp-d32dbc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sidenav_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2015_drag-drop_mjs"), __webpack_require__.e("src_app_apps_apps_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./apps/apps.module */ 99269)).then((m) => m.AppsModule),
            },
            {
                path: 'widget',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js-node_modules_ng-apexchart-31d6d1"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-bar_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2015_drag-drop_mjs"), __webpack_require__.e("src_app_widget_widget_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./widget/widget.module */ 88503)).then((m) => m.WidgetModule),
            },
            {
                path: 'ui',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sidenav_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-bar_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_autocomplete_mjs-node_modules_angular_material-3a28dd"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_expansion_mjs"), __webpack_require__.e("src_app_ui_ui_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/ui.module */ 28086)).then((m) => m.UiModule),
            },
            {
                path: 'forms',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_toolbar_mjs-node_modules_ngx-material-file-inp-d32dbc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sidenav_mjs"), __webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-fbbc65"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_autocomplete_mjs-node_modules_angular_material-3a28dd"), __webpack_require__.e("src_app_forms_forms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./forms/forms.module */ 71366)).then((m) => m.FormModule),
            },
            {
                path: 'tables',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./tables/tables.module */ 81439)).then((m) => m.TablesModule),
            },
            {
                path: 'media',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_media_media_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./media/media.module */ 51173)).then((m) => m.MediaModule),
            },
            {
                path: 'charts',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js-node_modules_ng-apexchart-31d6d1"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_mjs"), __webpack_require__.e("src_app_charts_charts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charts/charts.module */ 55108)).then((m) => m.ChartsModule),
            },
            {
                path: 'timeline',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_timeline_timeline_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./timeline/timeline.module */ 6159)).then((m) => m.TimelineModule),
            },
            {
                path: 'icons',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_icons_icons_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icons/icons.module */ 74115)).then((m) => m.IconsModule),
            },
            {
                path: 'extra-pages',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_expansion_mjs"), __webpack_require__.e("src_app_extra-pages_extra-pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./extra-pages/extra-pages.module */ 95859)).then((m) => m.ExtraPagesModule),
            },
            {
                path: 'maps',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_maps_maps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./maps/maps.module */ 83842)).then((m) => m.MapsModule),
            },
            {
                path: 'multilevel',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_multilevel_multilevel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./multilevel/multilevel.module */ 96895)).then((m) => m.MultilevelModule),
            },
        ],
    },
    {
        path: 'authentication',
        component: _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__.AuthLayoutComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 41082)).then((m) => m.AuthenticationModule),
    },
    { path: '**', component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component },
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ 66105);






class AppComponent {
    constructor(_router, location, spinner) {
        this._router = _router;
        this.spinner = spinner;
        this._router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                this.spinner.show();
                this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                this.spinner.hide();
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService)); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-page-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "router-outlet");
    } }, directives: [_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__.PageLoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/header/header.component */ 17876);
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ 66105);
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ 20129);
/* harmony import */ var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/right-sidebar/right-sidebar.component */ 72325);
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ 17050);
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ 9899);
/* harmony import */ var _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/interceptor/fake-backend */ 43867);
/* harmony import */ var _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/interceptor/error.interceptor */ 56300);
/* harmony import */ var _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/interceptor/jwt.interceptor */ 72624);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ 75347);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-click-outside */ 53530);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _tables_tables_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tables/tables.module */ 81439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false,
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_17__.HashLocationStrategy },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HTTP_INTERCEPTORS, useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__.JwtInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HTTP_INTERCEPTORS, useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_11__.ErrorInterceptor, multi: true },
        _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_10__.fakeBackendProvider,
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _tables_tables_module__WEBPACK_IMPORTED_MODULE_14__.TablesModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule,
            ng_click_outside__WEBPACK_IMPORTED_MODULE_13__.ClickOutsideModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient],
                },
            }),
            // core & shared
            _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__.PageLoaderComponent,
        _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent,
        _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.RightSidebarComponent,
        _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__.AuthLayoutComponent,
        _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__.MainLayoutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _tables_tables_module__WEBPACK_IMPORTED_MODULE_14__.TablesModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_13__.ClickOutsideModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule, 
        // core & shared
        _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 1991:
/*!*************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404Component": () => (/* binding */ Page404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);




class Page404Component {
    constructor() { }
    ngOnInit() { }
}
Page404Component.??fac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 21, vars: 0, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-04.png)"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "error-header", "p-b-45"], [1, "error-subheader", "p-b-5"], [1, "error-subheader2", "p-b-5"], [1, "container-auth-form-btn", "mt-5"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["routerLink", "/authentication/signin", 1, "txt1"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " 404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Looks Like You're Lost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " The Page You Are Looking For Not Available! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Go To Home Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Need Help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8696:
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ConfigService {
    constructor() {
        this.setConfigData();
    }
    setConfigData() {
        this.configData = {
            layout: {
                rtl: false,
                variant: 'light',
                theme_color: 'white',
                logo_bg_color: 'white',
                sidebar: {
                    collapsed: false,
                    backgroundColor: 'light', // options:  light & dark
                },
            },
        };
    }
}
ConfigService.??fac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ConfigService, factory: ConfigService.??fac, providedIn: 'root' });


/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/rightsidebar.service */ 74930);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/auth.guard */ 19390);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth.service */ 41782);
/* harmony import */ var _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/dynamic-script-loader.service */ 77431);
/* harmony import */ var _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guard/module-import.guard */ 6785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class CoreModule {
    constructor(parentModule) {
        (0,_guard_module_import_guard__WEBPACK_IMPORTED_MODULE_4__.throwIfAlreadyLoaded)(parentModule, 'CoreModule');
    }
}
CoreModule.??fac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????inject"](CoreModule, 12)); };
CoreModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: CoreModule });
CoreModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ providers: [
        _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__.RightSidebarService,
        _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard,
        _service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__.DynamicScriptLoaderService,
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule] }); })();


/***/ }),

/***/ 19390:
/*!******************************************!*\
  !*** ./src/app/core/guard/auth.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 41782);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.currentUserValue) {
            const userRole = this.authService.currentUserValue.role;
            if (route.data.role && route.data.role.indexOf(userRole) === -1) {
                this.router.navigate(['/authentication/signin']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/authentication/signin']);
        return false;
    }
}
AuthGuard.??fac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: AuthGuard, factory: AuthGuard.??fac, providedIn: 'root' });


/***/ }),

/***/ 6785:
/*!***************************************************!*\
  !*** ./src/app/core/guard/module-import.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwIfAlreadyLoaded": () => (/* binding */ throwIfAlreadyLoaded)
/* harmony export */ });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`);
    }
}


/***/ }),

/***/ 56300:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptor/error.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 41782);




class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload();
            }
            const error = err.error.message || err.statusText;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
}
ErrorInterceptor.??fac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ErrorInterceptor.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.??fac });


/***/ }),

/***/ 43867:
/*!**************************************************!*\
  !*** ./src/app/core/interceptor/fake-backend.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FakeBackendInterceptor": () => (/* binding */ FakeBackendInterceptor),
/* harmony export */   "fakeBackendProvider": () => (/* binding */ fakeBackendProvider)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/role */ 38252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);





const users = [
    {
        id: 1,
        img: 'assets/images/user/admin.jpg',
        username: 'admin@school.org',
        password: 'admin@123',
        firstName: 'Sarah',
        lastName: 'Smith',
        role: _models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Admin,
        token: 'admin-token',
    },
    {
        id: 2,
        img: 'assets/images/user/teacher.jpg',
        username: 'teacher@school.org',
        password: 'teacher@123',
        firstName: 'Ashton',
        lastName: 'Cox',
        role: _models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Teacher,
        token: 'teacher-token',
    },
    {
        id: 3,
        img: 'assets/images/user/student.jpg',
        username: 'student@school.org',
        password: 'student@123',
        firstName: 'Ashton',
        lastName: 'Cox',
        role: _models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Student,
        token: 'student-token',
    },
];
class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(handleRoute));
        function handleRoute() {
            switch (true) {
                case url.endsWith('/authenticate') && method === 'POST':
                    return authenticate();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find((x) => x.username === username && x.password === password);
            if (!user) {
                return error('Username or password is incorrect');
            }
            return ok({
                id: user.id,
                img: user.img,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                token: user.token,
            });
        }
        // helper functions
        function ok(body) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({ status: 200, body }));
        }
        function error(message) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({ error: { message } });
        }
        function unauthorized() {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
}
FakeBackendInterceptor.??fac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.??fac });
let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true,
};


/***/ }),

/***/ 72624:
/*!*****************************************************!*\
  !*** ./src/app/core/interceptor/jwt.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 41782);


class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                },
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.??fac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
JwtInterceptor.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.??fac });


/***/ }),

/***/ 38252:
/*!*************************************!*\
  !*** ./src/app/core/models/role.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": () => (/* binding */ Role)
/* harmony export */ });
var Role;
(function (Role) {
    Role["All"] = "All";
    Role["Admin"] = "Admin";
    Role["Teacher"] = "Teacher";
    Role["Student"] = "Student";
})(Role || (Role = {}));


/***/ }),

/***/ 41782:
/*!**********************************************!*\
  !*** ./src/app/core/service/auth.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);





class AuthService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/authenticate`, {
            username,
            password,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({ success: false });
    }
}
AuthService.??fac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
AuthService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: AuthService, factory: AuthService.??fac, providedIn: 'root' });


/***/ }),

/***/ 77431:
/*!***************************************************************!*\
  !*** ./src/app/core/service/dynamic-script-loader.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptStore": () => (/* binding */ ScriptStore),
/* harmony export */   "DynamicScriptLoaderService": () => (/* binding */ DynamicScriptLoaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const ScriptStore = [];
class DynamicScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        });
    }
    load(...scripts) {
        const promises = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            if (!this.scripts[name].loaded) {
                // load script
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    // IE
                    script.onreadystatechange = () => {
                        if (script.readyState === 'loaded' ||
                            script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    // Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error) => resolve({ script: name, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        });
    }
}
DynamicScriptLoaderService.??fac = function DynamicScriptLoaderService_Factory(t) { return new (t || DynamicScriptLoaderService)(); };
DynamicScriptLoaderService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: DynamicScriptLoaderService, factory: DynamicScriptLoaderService.??fac });


/***/ }),

/***/ 9964:
/*!**************************************************!*\
  !*** ./src/app/core/service/language.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 87514);


class LanguageService {
    constructor(translate) {
        this.translate = translate;
        this.languages = ['en', 'es', 'de'];
        let browserLang;
        translate.addLangs(this.languages);
        if (localStorage.getItem('lang')) {
            browserLang = localStorage.getItem('lang');
        }
        else {
            browserLang = translate.getBrowserLang();
        }
        translate.use(browserLang.match(/en|es|de/) ? browserLang : 'en');
    }
    setLanguage(lang) {
        this.translate.use(lang);
        localStorage.setItem('lang', lang);
    }
}
LanguageService.??fac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
LanguageService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: LanguageService, factory: LanguageService.??fac, providedIn: 'root' });


/***/ }),

/***/ 74930:
/*!******************************************************!*\
  !*** ./src/app/core/service/rightsidebar.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightSidebarService": () => (/* binding */ RightSidebarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class RightSidebarService {
    constructor() {
        this.sidebarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidebarState = this.sidebarSubject.asObservable();
        this.setRightSidebar = (value) => {
            this.sidebarSubject.next(value);
        };
    }
}
RightSidebarService.??fac = function RightSidebarService_Factory(t) { return new (t || RightSidebarService)(); };
RightSidebarService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: RightSidebarService, factory: RightSidebarService.??fac });


/***/ }),

/***/ 17050:
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/auth-layout/auth-layout.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": () => (/* binding */ AuthLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class AuthLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
AuthLayoutComponent.??fac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 9899:
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/main-layout/main-layout.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayoutComponent": () => (/* binding */ MainLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../header/header.component */ 17876);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ 20129);
/* harmony import */ var _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../right-sidebar/right-sidebar.component */ 72325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);





class MainLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
MainLayoutComponent.??fac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 4, vars: 0, template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "app-right-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.RightSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 17876:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/role */ 38252);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ 74930);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config.service */ 8696);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/auth.service */ 41782);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/language.service */ 9964);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/feather-icons/feather-icons.component */ 61676);














const _c0 = function (a0) { return [a0]; };
function HeaderComponent_a_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](9, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](12, "app-feather-icons", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const notification_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](8, _c0, notification_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](10, _c0, notification_r2.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](notification_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](notification_r2.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", notification_r2.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????classMap"]("user-menu-icons");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("icon", "x");
} }
const document = window.document;
class HeaderComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__.UnsubscribeOnDestroyAdapter {
    constructor(document, renderer, elementRef, rightSidebarService, configService, authService, router, languageService) {
        super();
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.rightSidebarService = rightSidebarService;
        this.configService = configService;
        this.authService = authService;
        this.router = router;
        this.languageService = languageService;
        this.config = {};
        this.isNavbarCollapsed = true;
        this.listLang = [
            { text: 'English', flag: 'assets/images/flags/us.svg', lang: 'en' },
            { text: 'Spanish', flag: 'assets/images/flags/spain.svg', lang: 'es' },
            { text: 'German', flag: 'assets/images/flags/germany.svg', lang: 'de' },
        ];
        this.notifications = [
            {
                message: 'Please check your mail',
                time: '14 mins ago',
                icon: 'mail',
                color: 'nfc-green',
                status: 'msg-unread',
            },
            {
                message: 'New Patient Added..',
                time: '22 mins ago',
                icon: 'person_add',
                color: 'nfc-blue',
                status: 'msg-read',
            },
            {
                message: 'Your leave is approved!! ',
                time: '3 hours ago',
                icon: 'event_available',
                color: 'nfc-orange',
                status: 'msg-read',
            },
            {
                message: 'Lets break for lunch...',
                time: '5 hours ago',
                icon: 'lunch_dining',
                color: 'nfc-blue',
                status: 'msg-read',
            },
            {
                message: 'Patient report generated',
                time: '14 mins ago',
                icon: 'description',
                color: 'nfc-green',
                status: 'msg-read',
            },
            {
                message: 'Please check your mail',
                time: '22 mins ago',
                icon: 'mail',
                color: 'nfc-red',
                status: 'msg-read',
            },
            {
                message: 'Salary credited...',
                time: '3 hours ago',
                icon: 'paid',
                color: 'nfc-purple',
                status: 'msg-read',
            },
        ];
    }
    ngOnInit() {
        this.config = this.configService.configData;
        const userRole = this.authService.currentUserValue.role;
        this.userImg = this.authService.currentUserValue.img;
        if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Admin) {
            this.homePage = 'admin/dashboard/dashboard2';
        }
        else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Teacher) {
            this.homePage = 'teacher/dashboard';
        }
        else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Student) {
            this.homePage = 'student/dashboard';
        }
        else {
            this.homePage = 'admin/dashboard/main';
        }
        this.langStoreValue = localStorage.getItem('lang');
        const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
        this.countryName = val.map((element) => element.text);
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.defaultFlag = 'assets/images/flags/us.svg';
            }
        }
        else {
            this.flagvalue = val.map((element) => element.flag);
        }
    }
    ngAfterViewInit() {
        // set theme on startup
        if (localStorage.getItem('theme')) {
            this.renderer.removeClass(this.document.body, this.config.layout.variant);
            this.renderer.addClass(this.document.body, localStorage.getItem('theme'));
        }
        else {
            this.renderer.addClass(this.document.body, this.config.layout.variant);
        }
        if (localStorage.getItem('menuOption')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('menuOption'));
        }
        else {
            this.renderer.addClass(this.document.body, 'menu_' + this.config.layout.sidebar.backgroundColor);
        }
        if (localStorage.getItem('choose_logoheader')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('choose_logoheader'));
        }
        else {
            this.renderer.addClass(this.document.body, 'logo-' + this.config.layout.logo_bg_color);
        }
        if (localStorage.getItem('sidebar_status')) {
            if (localStorage.getItem('sidebar_status') === 'close') {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
            }
            else {
                this.renderer.removeClass(this.document.body, 'side-closed');
                this.renderer.removeClass(this.document.body, 'submenu-closed');
            }
        }
        else {
            if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
            }
        }
    }
    callFullscreen() {
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    setLanguage(text, lang, flag) {
        this.countryName = text;
        this.flagvalue = flag;
        this.langStoreValue = lang;
        this.languageService.setLanguage(lang);
    }
    mobileMenuSidebarOpen(event, className) {
        const hasClass = event.target.classList.contains(className);
        if (hasClass) {
            this.renderer.removeClass(this.document.body, className);
        }
        else {
            this.renderer.addClass(this.document.body, className);
        }
    }
    callSidemenuCollapse() {
        const hasClass = this.document.body.classList.contains('side-closed');
        if (hasClass) {
            this.renderer.removeClass(this.document.body, 'side-closed');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
        }
        else {
            this.renderer.addClass(this.document.body, 'side-closed');
            this.renderer.addClass(this.document.body, 'submenu-closed');
        }
    }
    logout() {
        this.subs.sink = this.authService.logout().subscribe((res) => {
            if (!res.success) {
                this.router.navigate(['/authentication/signin']);
            }
        });
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService)); };
HeaderComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["????InheritDefinitionFeature"]], decls: 58, vars: 15, consts: [[1, "navbar", "active"], ["navbar", ""], [1, "container-fluid"], [1, "navbar-header"], ["href", "#", "onClick", "return false;", "aria-expanded", "false", 1, "navbar-toggle", "collapsed", 3, "click"], ["href", "#", "onClick", "return false;", 1, "bars", 3, "click"], [1, "navbar-brand", 3, "routerLink"], [1, "logo-name"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "float-start", "collapse-menu-icon"], ["mat-icon-button", "", 1, "sidemenu-collapse", 3, "click"], [1, "material-icons-outlined", "icon-color"], [1, "nav", "navbar-nav", "navbar-right"], [1, "fullscreen"], ["mat-icon-button", "", 1, "nav-notification-icons", 3, "click"], ["ngbDropdown", "", 1, "nav-item"], ["mat-icon-button", "", "ngbDropdownToggle", "", 1, "nav-notification-icons"], ["ngbDropdownMenu", "", 1, "notification-dropdown", "pullDown"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "350px", 3, "perfectScrollbar"], [1, "menu"], [1, "nfc-header"], [1, "mb-0"], ["href", "#", "onClick", "return false;", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "nfc-read-more"], ["ngbDropdown", "", 1, "nav-item", "user_profile"], ["ngbDropdownToggle", "", 1, "nav-notification-icons", "pt-0"], ["src", "assets/img/binimoy.png", "width", "32", "height", "32", "alt", "User", 1, "user_img"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "300px", 3, "perfectScrollbar"], [1, "body"], [1, "user_dw_menu"], ["href", "#", "onClick", "return false;"], [3, "icon"], ["href", "javascript:void(0);", 3, "click"], ["href", "#", "onClick", "return false;", 3, "ngClass"], [1, "table-img", "msg-user"], [1, "material-icons-two-tone", "nfc-type-icon", 3, "ngClass"], [1, "menu-info"], [1, "menu-title"], [1, "menu-desc", "mt-2"], [1, "material-icons"], [1, "nfc-close"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.isNavbarCollapsed = !ctx.isNavbarCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function HeaderComponent_Template_a_click_5_listener($event) { return ctx.mobileMenuSidebarOpen($event, "overlay-open"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](8, "Binimoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function HeaderComponent_Template_button_click_12_listener() { return ctx.callSidemenuCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](14, " menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](15, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function HeaderComponent_Template_button_click_17_listener() { return ctx.callFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](19, " fullscreen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](20, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](22, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](23, " notifications_active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](26, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](27, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](28, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](29, "Notitications");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](31, HeaderComponent_a_31_Template, 13, 12, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](33, "Read All Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](34, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](36, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](39, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](40, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](41, "ul", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](43, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](44, "app-feather-icons", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](45, "Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](47, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](48, "app-feather-icons", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](49, "Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](51, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](52, "app-feather-icons", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](53, "Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](55, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function HeaderComponent_Template_a_click_55_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](56, "app-feather-icons", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](57, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????propertyInterpolate"]("routerLink", ctx.homePage);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngbCollapse", ctx.isNavbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????classMap"]("user-menu-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("icon", "user");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????classMap"]("user-menu-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("icon", "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????classMap"]("user-menu-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("icon", "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????classMap"]("user-menu-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("icon", "log-out");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbCollapse, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__.FeatherIconsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 66105:
/*!*************************************************************!*\
  !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLoaderComponent": () => (/* binding */ PageLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 42777);


class PageLoaderComponent {
    constructor() { }
    ngOnInit() { }
}
PageLoaderComponent.??fac = function PageLoaderComponent_Factory(t) { return new (t || PageLoaderComponent)(); };
PageLoaderComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PageLoaderComponent, selectors: [["app-page-loader"]], decls: 2, vars: 1, consts: [["bdColor", "rgb(63,69,95)", "size", "medium", "color", "#0af0d5", "type", "ball-scale-pulse", 3, "fullScreen"], [2, "color", "white"]], template: function PageLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("fullScreen", true);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 72325:
/*!*****************************************************************!*\
  !*** ./src/app/layout/right-sidebar/right-sidebar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightSidebarComponent": () => (/* binding */ RightSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ 74930);
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/config.service */ 8696);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);










const _c0 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
const _c1 = function (a0) { return { "active": a0 }; };
class RightSidebarComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(document, renderer, elementRef, rightSidebarService, configService) {
        super();
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.rightSidebarService = rightSidebarService;
        this.configService = configService;
        this.selectedBgColor = 'white';
        this.showpanel = false;
        this.isDarkSidebar = false;
        this.isDarTheme = false;
        this.isRtl = false;
        this.config = {};
    }
    ngOnInit() {
        this.config = this.configService.configData;
        this.subs.sink = this.rightSidebarService.sidebarState.subscribe((isRunning) => {
            this.isOpenSidebar = isRunning;
        });
        this.setRightSidebarWindowHeight();
    }
    ngAfterViewInit() {
        // set header color on startup
        if (localStorage.getItem('choose_skin')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('choose_skin'));
            this.selectedBgColor = localStorage.getItem('choose_skin_active');
        }
        else {
            this.renderer.addClass(this.document.body, 'theme-' + this.config.layout.theme_color);
            this.selectedBgColor = this.config.layout.theme_color;
        }
        if (localStorage.getItem('menuOption')) {
            if (localStorage.getItem('menuOption') === 'menu_dark') {
                this.isDarkSidebar = true;
            }
            else if (localStorage.getItem('menuOption') === 'menu_light') {
                this.isDarkSidebar = false;
            }
            else {
                this.isDarkSidebar =
                    this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
            }
        }
        else {
            this.isDarkSidebar =
                this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
        }
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'dark') {
                this.isDarTheme = true;
            }
            else if (localStorage.getItem('theme') === 'light') {
                this.isDarTheme = false;
            }
            else {
                this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
            }
        }
        else {
            this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
        }
        if (localStorage.getItem('isRtl')) {
            if (localStorage.getItem('isRtl') === 'true') {
                this.setRTLSettings();
            }
            else if (localStorage.getItem('isRtl') === 'false') {
                this.setLTRSettings();
            }
        }
        else {
            if (this.config.layout.rtl == true) {
                this.setRTLSettings();
            }
            else {
                this.setLTRSettings();
            }
        }
    }
    selectTheme(e) {
        this.selectedBgColor = e;
        const prevTheme = this.elementRef.nativeElement
            .querySelector('.settingSidebar .choose-theme li.active')
            .getAttribute('data-theme');
        this.renderer.removeClass(this.document.body, 'theme-' + prevTheme);
        this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
        localStorage.setItem('choose_skin', 'theme-' + this.selectedBgColor);
        localStorage.setItem('choose_skin_active', this.selectedBgColor);
    }
    lightSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, 'menu_dark');
        this.renderer.removeClass(this.document.body, 'logo-black');
        this.renderer.addClass(this.document.body, 'menu_light');
        this.renderer.addClass(this.document.body, 'logo-white');
        const menuOption = 'menu_light';
        localStorage.setItem('choose_logoheader', 'logo-white');
        localStorage.setItem('menuOption', menuOption);
    }
    darkSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, 'menu_light');
        this.renderer.removeClass(this.document.body, 'logo-white');
        this.renderer.addClass(this.document.body, 'menu_dark');
        this.renderer.addClass(this.document.body, 'logo-black');
        const menuOption = 'menu_dark';
        localStorage.setItem('choose_logoheader', 'logo-black');
        localStorage.setItem('menuOption', menuOption);
    }
    lightThemeBtnClick() {
        this.renderer.removeClass(this.document.body, 'dark');
        this.renderer.removeClass(this.document.body, 'submenu-closed');
        this.renderer.removeClass(this.document.body, 'menu_dark');
        this.renderer.removeClass(this.document.body, 'logo-black');
        if (localStorage.getItem('choose_skin')) {
            this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
        }
        else {
            this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
        }
        this.renderer.addClass(this.document.body, 'light');
        this.renderer.addClass(this.document.body, 'submenu-closed');
        this.renderer.addClass(this.document.body, 'menu_light');
        this.renderer.addClass(this.document.body, 'logo-white');
        this.renderer.addClass(this.document.body, 'theme-white');
        const theme = 'light';
        const menuOption = 'menu_light';
        this.selectedBgColor = 'white';
        this.isDarkSidebar = false;
        localStorage.setItem('choose_logoheader', 'logo-white');
        localStorage.setItem('choose_skin', 'theme-white');
        localStorage.setItem('theme', theme);
        localStorage.setItem('menuOption', menuOption);
    }
    darkThemeBtnClick() {
        this.renderer.removeClass(this.document.body, 'light');
        this.renderer.removeClass(this.document.body, 'submenu-closed');
        this.renderer.removeClass(this.document.body, 'menu_light');
        this.renderer.removeClass(this.document.body, 'logo-white');
        if (localStorage.getItem('choose_skin')) {
            this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
        }
        else {
            this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
        }
        this.renderer.addClass(this.document.body, 'dark');
        this.renderer.addClass(this.document.body, 'submenu-closed');
        this.renderer.addClass(this.document.body, 'menu_dark');
        this.renderer.addClass(this.document.body, 'logo-black');
        this.renderer.addClass(this.document.body, 'theme-black');
        const theme = 'dark';
        const menuOption = 'menu_dark';
        this.selectedBgColor = 'black';
        this.isDarkSidebar = true;
        localStorage.setItem('choose_logoheader', 'logo-black');
        localStorage.setItem('choose_skin', 'theme-black');
        localStorage.setItem('theme', theme);
        localStorage.setItem('menuOption', menuOption);
    }
    setRightSidebarWindowHeight() {
        const height = window.innerHeight - 137;
        this.maxHeight = height + '';
        this.maxWidth = '500px';
    }
    onClickedOutside(event) {
        const button = event.target;
        if (button.id !== 'settingBtn') {
            if (this.isOpenSidebar === true) {
                this.toggleRightSidebar();
            }
        }
    }
    toggleRightSidebar() {
        this.rightSidebarService.setRightSidebar((this.isOpenSidebar = !this.isOpenSidebar));
    }
    switchDirection(event) {
        var isrtl = String(event.checked);
        if (isrtl === 'false' &&
            document.getElementsByTagName('html')[0].hasAttribute('dir')) {
            document.getElementsByTagName('html')[0].removeAttribute('dir');
            this.renderer.removeClass(this.document.body, 'rtl');
        }
        else if (isrtl === 'true' &&
            !document.getElementsByTagName('html')[0].hasAttribute('dir')) {
            document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
            this.renderer.addClass(this.document.body, 'rtl');
        }
        localStorage.setItem('isRtl', isrtl);
        this.isRtl = event.checked;
    }
    setRTLSettings() {
        document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
        this.renderer.addClass(this.document.body, 'rtl');
        this.isRtl = true;
        localStorage.setItem('isRtl', 'true');
    }
    setLTRSettings() {
        document.getElementsByTagName('html')[0].removeAttribute('dir');
        this.renderer.removeClass(this.document.body, 'rtl');
        this.isRtl = false;
        localStorage.setItem('isRtl', 'false');
    }
}
RightSidebarComponent.??fac = function RightSidebarComponent_Factory(t) { return new (t || RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService)); };
RightSidebarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: RightSidebarComponent, selectors: [["app-right-sidebar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["????InheritDefinitionFeature"]], decls: 54, vars: 33, consts: [[1, "settingSidebar", 3, "ngClass"], ["href", "javascript:void(0)", 1, "settingPanelToggle", 3, "click"], [3, "icon"], [1, "settingSidebar-body", "ps-container", "ps-theme-default", 3, "ngStyle", "perfectScrollbar"], [1, "fade", "show", "active"], [1, "setting-panel-header"], [1, "p-15", "border-bottom"], [1, "font-medium", "m-b-10"], [1, "flex", "flex-wrap", "hiddenradio"], [1, "flex", "flex-col"], ["type", "radio", "name", "value", "value", "light", 3, "checked", "click"], ["src", "assets/images/light.png"], [1, "mt-1", "text-md", "text-center"], [1, "flex", "flex-col", "mt-3"], ["type", "radio", "name", "value", "value", "dark", 3, "checked", "click"], ["src", "assets/images/dark.png"], [1, "rightSetting"], [1, "mt-2", 3, "value"], ["value", "light", 3, "click"], ["value", "dark", 3, "click"], [1, "theme-setting-options"], [1, "choose-theme", "list-unstyled", "mb-0"], ["data-theme", "white", 3, "ngClass", "click"], [1, "white"], ["data-theme", "black", 3, "ngClass", "click"], [1, "black"], ["data-theme", "purple", 3, "ngClass", "click"], [1, "purple"], ["data-theme", "orange", 3, "ngClass", "click"], [1, "orange"], ["data-theme", "cyan", 3, "ngClass", "click"], [1, "cyan"], ["data-theme", "green", 3, "ngClass", "click"], [1, "green"], ["data-theme", "blue", 3, "ngClass", "click"], [1, "blue"], [1, "mt-2", 3, "checked", "change"]], template: function RightSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_a_click_1_listener() { return ctx.toggleRightSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](2, "app-feather-icons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](6, "Setting Panel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](9, "Select Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_input_click_13_listener() { return ctx.lightThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](16, " Light ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_input_click_19_listener() { return ctx.darkThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](20, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](22, " Dark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](25, "Sidebar Menu Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "mat-button-toggle-group", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "mat-button-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_27_listener() { return ctx.lightSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](28, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](29, "mat-button-toggle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_29_listener() { return ctx.darkSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](30, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](32, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](33, "Color Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](35, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](36, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_36_listener() { return ctx.selectTheme("white"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](38, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_38_listener() { return ctx.selectTheme("black"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](40, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_40_listener() { return ctx.selectTheme("purple"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](42, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_42_listener() { return ctx.selectTheme("orange"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](44, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_44_listener() { return ctx.selectTheme("cyan"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](46, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_46_listener() { return ctx.selectTheme("green"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](47, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](48, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_48_listener() { return ctx.selectTheme("blue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](49, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](51, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](52, "RTL Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](53, "mat-slide-toggle", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("change", function RightSidebarComponent_Template_mat_slide_toggle_change_53_listener($event) { return ctx.switchDirection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", ctx.isOpenSidebar ? "showSettingPanel" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????classMap"]("setting-sidebar-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("icon", "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction2"](16, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("checked", ctx.isDarTheme == false ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("checked", ctx.isDarTheme == true ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", ctx.isDarkSidebar ? "dark" : "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](19, _c1, ctx.selectedBgColor === "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](21, _c1, ctx.selectedBgColor === "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](23, _c1, ctx.selectedBgColor === "purple"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](25, _c1, ctx.selectedBgColor === "orange"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](27, _c1, ctx.selectedBgColor === "cyan"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](29, _c1, ctx.selectedBgColor === "green"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](31, _c1, ctx.selectedBgColor === "blue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("checked", ctx.isRtl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggle, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1zaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 39617:
/*!*************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar-items.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = [
    {
        path: '',
        title: 'MENUITEMS.MAIN.TEXT',
        moduleName: '',
        iconType: '',
        icon: '',
        class: '',
        groupTitle: true,
        badge: '',
        badgeClass: '',
        role: ['All'],
        submenu: [],
    },
    //configutarion
    {
        path: '',
        title: 'MENUITEMS.CONFIG.TEXT',
        moduleName: 'configuration',
        iconType: 'material-icons-two-tone',
        icon: 'app_registration',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: 'admin/config/configuration',
                title: 'MENUITEMS.CONFIG.LIST.config',
                moduleName: 'configuration',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
];


/***/ }),

/***/ 20129:
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _sidebar_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-items */ 39617);
/* harmony import */ var src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/role */ 38252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/auth.service */ 41782);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);










function SidebarComponent_li_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "div", 13);
} }
const _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_9_a_2_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](2, _c0, sidebarItem_r1.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](sidebarItem_r1.badge);
} }
function SidebarComponent_li_9_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SidebarComponent_li_9_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r9); const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r7.callLevel1Toggle($event, sidebarItem_r1.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, SidebarComponent_li_9_a_2_span_6_Template, 2, 4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", sidebarItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](8, _c0, sidebarItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](10, _c0, sidebarItem_r1.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](12, _c0, sidebarItem_r1.iconType));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](sidebarItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](5, 6, sidebarItem_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", sidebarItem_r1.badge != "");
} }
function SidebarComponent_li_9_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SidebarComponent_li_9_ul_3_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r14); const sidebarSubItem_r12 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](3); return ctx_r13.callLevel2Toggle($event, sidebarSubItem_r12.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const sidebarSubItem_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", ctx_r11.level2Menu === sidebarSubItem_r12.moduleName ? "activeSub" : "")("routerLinkActive", sidebarSubItem_r12.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", sidebarSubItem_r12.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](7, _c0, sidebarSubItem_r12.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](9, _c0, sidebarSubItem_r12.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](3, 5, sidebarSubItem_r12.title), " ");
} }
function SidebarComponent_li_9_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_li_9_ul_3_li_1_Template, 4, 11, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", sidebarItem_r1.submenu);
} }
function SidebarComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_li_9_div_1_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, SidebarComponent_li_9_a_2_Template, 7, 14, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, SidebarComponent_li_9_ul_3_Template, 2, 1, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("active", ctx_r0.level1Menu === sidebarItem_r1.moduleName && sidebarItem_r1.submenu.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLinkActive", sidebarItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", sidebarItem_r1.groupTitle === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !sidebarItem_r1.groupTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", sidebarItem_r1.submenu.length > 0);
} }
const _c1 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
class SidebarComponent {
    constructor(document, renderer, elementRef, authService, router) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.authService = authService;
        this.router = router;
        this.level1Menu = '';
        this.level2Menu = '';
        this.level3Menu = '';
        this.headerHeight = 60;
        this.routerObj = null;
        const body = this.elementRef.nativeElement.closest('body');
        this.routerObj = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                // logic for select active menu in dropdown
                const role = ['admin', 'teacher', 'student'];
                const currenturl = event.url.split('?')[0];
                const firstString = currenturl.split('/').slice(1)[0];
                if (role.indexOf(firstString) !== -1) {
                    this.level1Menu = currenturl.split('/')[2];
                    this.level2Menu = currenturl.split('/')[3];
                }
                else {
                    this.level1Menu = currenturl.split('/')[1];
                    this.level2Menu = currenturl.split('/')[2];
                }
                // close sidebar on mobile screen after menu select
                this.renderer.removeClass(this.document.body, 'overlay-open');
            }
        });
    }
    windowResizecall(event) {
        this.setMenuHeight();
        this.checkStatuForResize(false);
    }
    onGlobalClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.renderer.removeClass(this.document.body, 'overlay-open');
        }
    }
    callLevel1Toggle(event, element) {
        if (element === this.level1Menu) {
            this.level1Menu = '0';
        }
        else {
            this.level1Menu = element;
        }
        const hasClass = event.target.classList.contains('toggled');
        if (hasClass) {
            this.renderer.removeClass(event.target, 'toggled');
        }
        else {
            this.renderer.addClass(event.target, 'toggled');
        }
    }
    callLevel2Toggle(event, element) {
        if (element === this.level2Menu) {
            this.level2Menu = '0';
        }
        else {
            this.level2Menu = element;
        }
    }
    callLevel3Toggle(event, element) {
        if (element === this.level3Menu) {
            this.level3Menu = '0';
        }
        else {
            this.level3Menu = element;
        }
    }
    ngOnInit() {
        if (this.authService.currentUserValue) {
            const userRole = this.authService.currentUserValue.role;
            this.userFullName =
                this.authService.currentUserValue.firstName +
                    ' ' +
                    this.authService.currentUserValue.lastName;
            this.userImg = this.authService.currentUserValue.img;
            this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.ROUTES.filter((x) => x.role.indexOf(userRole) !== -1 || x.role.indexOf('All') !== -1);
            if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Admin) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Admin;
            }
            else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Teacher) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Teacher;
            }
            else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Student) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Student;
            }
            else {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Admin;
            }
        }
        this.initLeftSidebar();
        this.bodyTag = this.document.body;
    }
    ngOnDestroy() {
        this.routerObj.unsubscribe();
    }
    initLeftSidebar() {
        const _this = this;
        // Set menu height
        _this.setMenuHeight();
        _this.checkStatuForResize(true);
    }
    setMenuHeight() {
        this.innerHeight = window.innerHeight;
        const height = this.innerHeight - this.headerHeight;
        this.listMaxHeight = height + '';
        this.listMaxWidth = '500px';
    }
    isOpen() {
        return this.bodyTag.classList.contains('overlay-open');
    }
    checkStatuForResize(firstTime) {
        if (window.innerWidth < 1170) {
            this.renderer.addClass(this.document.body, 'ls-closed');
        }
        else {
            this.renderer.removeClass(this.document.body, 'ls-closed');
        }
    }
    mouseHover(e) {
        const body = this.elementRef.nativeElement.closest('body');
        if (body.classList.contains('submenu-closed')) {
            this.renderer.addClass(this.document.body, 'side-closed-hover');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
        }
    }
    mouseOut(e) {
        const body = this.elementRef.nativeElement.closest('body');
        if (body.classList.contains('side-closed-hover')) {
            this.renderer.removeClass(this.document.body, 'side-closed-hover');
            this.renderer.addClass(this.document.body, 'submenu-closed');
        }
    }
    logout() {
        this.authService.logout().subscribe((res) => {
            if (!res.success) {
                this.router.navigate(['/authentication/signin']);
            }
        });
    }
}
SidebarComponent.??fac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
SidebarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) { return ctx.windowResizecall($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resolveWindow"])("mousedown", function SidebarComponent_mousedown_HostBindingHandler($event) { return ctx.onGlobalClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resolveDocument"]);
    } }, decls: 10, vars: 5, consts: [["id", "leftsidebar", 1, "sidebar", 3, "mouseenter", "mouseleave"], [1, "menu"], [1, "list", 3, "ngStyle", "perfectScrollbar"], [1, "sidebar-user-panel"], [1, "user-panel"], [1, "image"], ["src", "assets/img/binimoy.png", "alt", "User Image", 1, "img-circle", "user-img-circle"], [1, "profile-usertitle"], [3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "routerLinkActive"], ["class", "header", 4, "ngIf"], ["class", "menu-top", 3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "ml-menu", 4, "ngIf"], [1, "header"], [1, "menu-top", 3, "routerLink", "ngClass", "click"], [3, "ngClass"], [1, "hide-menu"], [3, "ngClass", 4, "ngIf"], [1, "ml-menu"], [3, "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive"], [3, "routerLink", "ngClass", "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("mouseenter", function SidebarComponent_Template_aside_mouseenter_1_listener($event) { return ctx.mouseHover($event); })("mouseleave", function SidebarComponent_Template_aside_mouseleave_1_listener($event) { return ctx.mouseOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](9, SidebarComponent_li_9_Template, 4, 6, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](2, _c1, ctx.listMaxHeight + "px", ctx.listMaxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.sidebarItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 7868:
/*!*******************************************************!*\
  !*** ./src/app/shared/UnsubscribeOnDestroyAdapter.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscribeOnDestroyAdapter": () => (/* binding */ UnsubscribeOnDestroyAdapter)
/* harmony export */ });
/* harmony import */ var _sub_sink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-sink */ 12822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


/**
 * A class that automatically unsubscribes all observables when the object gets destroyed
 */
class UnsubscribeOnDestroyAdapter {
    constructor() {
        /**
         * The subscription sink object that stores all subscriptions
         */
        this.subs = new _sub_sink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
    }
    /**
     * The lifecycle hook that unsubscribes all subscriptions when the component / object gets destroyed
     */
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
UnsubscribeOnDestroyAdapter.??fac = function UnsubscribeOnDestroyAdapter_Factory(t) { return new (t || UnsubscribeOnDestroyAdapter)(); };
UnsubscribeOnDestroyAdapter.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: UnsubscribeOnDestroyAdapter, factory: UnsubscribeOnDestroyAdapter.??fac });


/***/ }),

/***/ 41299:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 55810);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function BreadcrumbComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1);
} }
class BreadcrumbComponent {
    constructor() { }
    ngOnInit() { }
}
BreadcrumbComponent.??fac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { title: "title", items: "items", active_item: "active_item" }, decls: 12, vars: 4, consts: [[1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], [3, "routerLink"], ["name", "home", 1, "breadcrumb-icon"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item", "active"], [1, "breadcrumb-item"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i-feather", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, BreadcrumbComponent_li_9_Template, 2, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/admin/dashboard/main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.active_item);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 15626:
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload/file-upload.component */ 67082);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




class ComponentsModule {
}
ComponentsModule.??fac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: ComponentsModule });
ComponentsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](ComponentsModule, { declarations: [_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__.FileUploadComponent, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent], imports: [_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule], exports: [_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__.FileUploadComponent, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent] }); })();


/***/ }),

/***/ 61676:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/feather-icons/feather-icons.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatherIconsComponent": () => (/* binding */ FeatherIconsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-feather */ 55810);


class FeatherIconsComponent {
    constructor() { }
    ngOnInit() { }
}
FeatherIconsComponent.??fac = function FeatherIconsComponent_Factory(t) { return new (t || FeatherIconsComponent)(); };
FeatherIconsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FeatherIconsComponent, selectors: [["app-feather-icons"]], inputs: { icon: "icon", class: "class" }, decls: 1, vars: 3, consts: [[3, "name"]], template: function FeatherIconsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i-feather", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("name", ctx.icon);
    } }, directives: [angular_feather__WEBPACK_IMPORTED_MODULE_1__.FeatherComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0aGVyLWljb25zLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 27545:
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/feather-icons/feather-icons.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatherIconsModule": () => (/* binding */ FeatherIconsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feather-icons.component */ 61676);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 55810);
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather/icons */ 73903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);






class FeatherIconsModule {
}
FeatherIconsModule.??fac = function FeatherIconsModule_Factory(t) { return new (t || FeatherIconsModule)(); };
FeatherIconsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: FeatherIconsModule });
FeatherIconsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule.pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_4__.allIcons)], angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](FeatherIconsModule, { declarations: [_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule], exports: [_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule] }); })();


/***/ }),

/***/ 67082:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/file-upload/file-upload.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadComponent": () => (/* binding */ FileUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function FileUploadComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]("or drag and drop file here");
} }
function FileUploadComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const file_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](file_r2.name);
} }
class FileUploadComponent {
    constructor(host) {
        this.host = host;
        this.myFiles = [];
    }
    writeValue(value) {
        this.host.nativeElement.value = "";
        this.myFiles = [];
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) { }
    getFileDetails(e) {
        this.myFiles = [];
        for (var i = 0; i < e.target.files.length; i++) {
            this.myFiles.push(e.target.files[i]);
        }
    }
}
FileUploadComponent.??fac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
FileUploadComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FileUploadComponent, selectors: [["app-file-upload"]], inputs: { progress: "progress" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: FileUploadComponent,
                multi: true,
            },
        ])], decls: 6, vars: 2, consts: [[1, "file-drop-area"], ["mat-raised-button", "", "color", "primary"], ["class", "ms-2", 4, "ngIf"], ["class", "file-msg", 4, "ngFor", "ngForOf"], ["type", "file", "multiple", "", 1, "file-input", 3, "change"], [1, "ms-2"], [1, "file-msg"], [1, "me-2"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Choose file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, FileUploadComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, FileUploadComponent_span_4_Template, 3, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function FileUploadComponent_Template_input_change_5_listener($event) { return ctx.getFileDetails($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.myFiles.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.myFiles);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".file-drop-area[_ngcontent-%COMP%] {\n  border: 1px dashed #7c7db3;\n  border-radius: 3px;\n  position: relative;\n  max-width: 100%;\n  margin-top: 5px;\n  padding: 26px 20px 30px;\n  transition: 0.2s;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.file-msg[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 5px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #5b5bff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFRiIsImZpbGUiOiJmaWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLWRyb3AtYXJlYSB7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM3YzdkYjM7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHBhZGRpbmc6IDI2cHggMjBweCAzMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcbi5maWxlLWlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi5maWxlLW1zZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM1YjViZmY7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 94872:
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);













const materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
    _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
    ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule.forRoot(),
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
];
class MaterialModule {
}
MaterialModule.??fac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineNgModule"]({ type: MaterialModule });
MaterialModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineInjector"]({ imports: [[materialModules], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["????setNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule] }); })();


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 94872);
/* harmony import */ var _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/feather-icons/feather-icons.module */ 27545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);








class SharedModule {
}
SharedModule.??fac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: SharedModule });
SharedModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule,
            _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsModule,
        ], _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule,
        _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsModule] }); })();


/***/ }),

/***/ 12822:
/*!************************************!*\
  !*** ./src/app/shared/sub-sink.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubSink": () => (/* binding */ SubSink)
/* harmony export */ });
/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
class SubSink {
    /**
     * Subscription sink that holds Observable subscriptions
     * until you call unsubscribe on it in ngOnDestroy.
     *
     * @example
     * In Angular:
     * ```
     *   private subs = new SubSink();
     *   ...
     *   this.subs.sink = observable$.subscribe(
     *   this.subs.add(observable$.subscribe(...));
     *   ...
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     * ```
     */
    constructor() {
        this._subs = [];
    }
    /**
     * Add subscriptions to the tracked subscriptions
     * @example
     *  this.subs.add(observable$.subscribe(...));
     */
    add(...subscriptions) {
        this._subs = this._subs.concat(subscriptions);
    }
    /**
     * Assign subscription to this sink to add it to the tracked subscriptions
     * @example
     *  this.subs.sink = observable$.subscribe(...);
     */
    set sink(subscription) {
        this._subs.push(subscription);
    }
    /**
     * Unsubscribe to all subscriptions in ngOnDestroy()
     * @example
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     */
    unsubscribe() {
        this._subs.forEach((sub) => sub && sub.unsubscribe());
        this._subs = [];
    }
}


/***/ }),

/***/ 16157:
/*!*************************************************************!*\
  !*** ./src/app/tables/basic-table/basic-table.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicTableComponent": () => (/* binding */ BasicTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);



function BasicTableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "app-breadcrumb", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const breadscrum_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", breadscrum_r1.title)("items", breadscrum_r1.items)("active_item", breadscrum_r1.active);
} }
class BasicTableComponent {
    constructor() {
        this.breadscrums = [
            {
                title: 'Basic',
                items: ['Tables'],
                active: 'Basic',
            },
        ];
    }
    ngOnInit() { }
}
BasicTableComponent.??fac = function BasicTableComponent_Factory(t) { return new (t || BasicTableComponent)(); };
BasicTableComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: BasicTableComponent, selectors: [["app-basic-table"]], decls: 387, vars: 1, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body", "table-responsive"], [1, "table"], ["scope", "row"], [1, "table", "table-striped"], [1, "table", "table-bordered"], [1, "table", "table-hover"], [1, "table", "table-condensed"], [1, "bg-light-blue"], [1, "l-bg-green"], [1, "l-bg-orange"], [1, "l-bg-cyan"], [1, "l-bg-purple"], [1, "block-header"], [3, "title", "items", "active_item"]], template: function BasicTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, BasicTableComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Basic Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "FIRST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "LAST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "USERNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "Jellybean");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, "@lajelly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "Kikat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "@lakitkat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "Striped Rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, "FIRST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](82, "LAST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "USERNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](99, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](101, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](103, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](106, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "Jellybean");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](121, "@lajelly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](126, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, "Kikat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](130, "@lakitkat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "Bordered Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](142, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, "FIRST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](146, "LAST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](148, "USERNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](154, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](156, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](158, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](161, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](163, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](165, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](167, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](170, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](172, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, "the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](181, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](183, "Jellybean");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](185, "@lajelly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](188, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](192, "Kikat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](194, "@lakitkat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](200, "Hover Rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](206, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](208, "FIRST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](210, "LAST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](212, "USERNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](216, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](218, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](220, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](222, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](225, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](227, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](229, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](231, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](234, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](238, "the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](240, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](241, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](243, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](245, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](246, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](247, "Jellybean");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](249, "@lajelly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](252, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](254, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](256, "Kikat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](258, "@lakitkat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](261, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](264, "Condensed Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](266, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](267, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](268, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](270, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](272, "FIRST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](274, "LAST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](276, "USERNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](278, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](280, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](282, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](284, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](286, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](288, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](289, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](290, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](291, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](292, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](293, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](295, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](296, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](297, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](298, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](300, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](301, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](302, "the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](304, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](306, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](307, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](309, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](311, "Jellybean");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](312, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](313, "@lajelly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](314, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](315, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](316, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](318, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](320, "Kikat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](321, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](322, "@lakitkat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](323, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](324, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](325, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](326, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](327, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](328, "Colorful Rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](329, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](330, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](331, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](332, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](333, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](334, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](335, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](336, "FIRST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](337, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](338, "LAST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](339, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](340, "USERNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](341, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](342, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](343, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](344, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](346, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](347, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](348, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](350, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](351, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](352, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](353, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](354, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](355, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](356, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](357, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](358, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](359, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](360, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](361, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](362, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](364, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](366, "the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](367, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](368, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](369, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](370, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](371, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](372, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](373, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](374, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](375, "Jellybean");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](376, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](377, "@lajelly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](378, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](379, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](380, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](381, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](382, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](383, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](384, "Kikat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](386, "@lakitkat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.breadscrums);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 51229:
/*!*******************************************************************!*\
  !*** ./src/app/tables/material-table/material-table.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialTableComponent": () => (/* binding */ MaterialTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 43365);









function MaterialTableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "app-breadcrumb", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const breadscrum_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", breadscrum_r49.title)("items", breadscrum_r49.items)("active_item", breadscrum_r49.active);
} }
function MaterialTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r50.no, " ");
} }
function MaterialTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r51.name, " ");
} }
function MaterialTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r52.gender, " ");
} }
function MaterialTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r53.email, " ");
} }
function MaterialTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r54.address, " ");
} }
function MaterialTableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r55.mobile, " ");
} }
function MaterialTableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Salary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r56.salary, " ");
} }
function MaterialTableComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "tr", 27);
} }
function MaterialTableComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "tr", 28);
} }
function MaterialTableComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r58.no, " ");
} }
function MaterialTableComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r59.name, " ");
} }
function MaterialTableComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r60.gender, " ");
} }
function MaterialTableComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r61.email, " ");
} }
function MaterialTableComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r62.address, " ");
} }
function MaterialTableComponent_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r63.mobile, " ");
} }
function MaterialTableComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Salary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r64.salary, " ");
} }
function MaterialTableComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "tr", 27);
} }
function MaterialTableComponent_tr_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "tr", 28);
} }
function MaterialTableComponent_th_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r66.no, " ");
} }
function MaterialTableComponent_th_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r67.name, " ");
} }
function MaterialTableComponent_th_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r68.gender, " ");
} }
function MaterialTableComponent_th_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r69.email, " ");
} }
function MaterialTableComponent_th_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r70.address, " ");
} }
function MaterialTableComponent_th_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r71.mobile, " ");
} }
function MaterialTableComponent_th_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Salary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function MaterialTableComponent_td_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r72.salary, " ");
} }
function MaterialTableComponent_tr_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "tr", 27);
} }
function MaterialTableComponent_tr_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "tr", 28);
} }
const _c0 = function () { return [5, 10, 20]; };
const ELEMENT_DATA = [
    {
        no: 1,
        name: 'John Doe',
        gender: 'male',
        email: 'test@example.com',
        address: '729 S. Paris Hill St',
        mobile: 1234567890,
        salary: 120000,
    },
    {
        no: 2,
        name: 'Sarah Smith',
        gender: 'female',
        email: 'test@example.com',
        address: '9003 Lake Street Hinesville',
        mobile: 1234567890,
        salary: 170000,
    },
    {
        no: 3,
        name: 'Airi Satou',
        gender: 'male',
        email: 'test@example.com',
        address: '848 Old Durham Street Piedmont',
        mobile: 1234567890,
        salary: 150000,
    },
    {
        no: 4,
        name: 'Angelica Ramos',
        gender: 'male',
        email: 'test@example.com',
        address: '8008 Anderson Drive Titusville',
        mobile: 1234567890,
        salary: 190000,
    },
    {
        no: 5,
        name: 'Ashton Cox',
        gender: 'female',
        email: 'test@example.com',
        address: '620 East Ave. Dundalk',
        mobile: 1234567890,
        salary: 140000,
    },
    {
        no: 6,
        name: 'Cara Stevens',
        gender: 'male',
        email: 'test@example.com',
        address: '9641 Delaware Street Camp Hill',
        mobile: 1234567890,
        salary: 220000,
    },
    {
        no: 7,
        name: 'Jens Brincker',
        gender: 'male',
        email: 'test@example.com',
        address: '83 Pennsylvania Road',
        mobile: 1234567890,
        salary: 170000,
    },
    {
        no: 8,
        name: 'Mark Hay',
        gender: 'female',
        email: 'test@example.com',
        address: '786 Lake Forest Rd. Biloxi',
        mobile: 1234567890,
        salary: 320000,
    },
    {
        no: 9,
        name: 'Anthony Davie',
        gender: 'male',
        email: 'test@example.com',
        address: '226 Heritage Dr. Durham',
        mobile: 1234567890,
        salary: 620000,
    },
    {
        no: 10,
        name: 'Sue Woodger',
        gender: 'male',
        email: 'test@example.com',
        address: '7 SE. Pumpkin Hill Lane',
        mobile: 1234567890,
        salary: 110000,
    },
];
class MaterialTableComponent {
    constructor() {
        this.displayedColumns = [
            'no',
            'name',
            'gender',
            'email',
            'address',
            'mobile',
            'salary',
        ];
        this.dataSource = ELEMENT_DATA;
        this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(ELEMENT_DATA);
        this.dataSource3 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(ELEMENT_DATA);
        this.breadscrums = [
            {
                title: 'Material',
                items: ['Tables'],
                active: 'Material',
            },
        ];
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource3.filter = filterValue.trim().toLowerCase();
    }
    ngOnInit() {
        this.dataSource2.paginator = this.paginator;
    }
}
MaterialTableComponent.??fac = function MaterialTableComponent_Factory(t) { return new (t || MaterialTableComponent)(); };
MaterialTableComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: MaterialTableComponent, selectors: [["app-material-table"]], viewQuery: function MaterialTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 101, vars: 12, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body", "table-responsive"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "no"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "gender"], ["matColumnDef", "email"], ["matColumnDef", "address"], ["matColumnDef", "mobile"], ["matColumnDef", "salary"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], [1, "block-header"], [3, "title", "items", "active_item"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function MaterialTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, MaterialTableComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Basic Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, MaterialTableComponent_th_12_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, MaterialTableComponent_td_13_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](14, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, MaterialTableComponent_th_15_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, MaterialTableComponent_td_16_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](17, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, MaterialTableComponent_th_18_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, MaterialTableComponent_td_19_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](20, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, MaterialTableComponent_th_21_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, MaterialTableComponent_td_22_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](23, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, MaterialTableComponent_th_24_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](25, MaterialTableComponent_td_25_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](26, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](27, MaterialTableComponent_th_27_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](28, MaterialTableComponent_td_28_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](29, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](30, MaterialTableComponent_th_30_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](31, MaterialTableComponent_td_31_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, MaterialTableComponent_tr_32_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, MaterialTableComponent_tr_33_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, " Pagination Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](42, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](43, MaterialTableComponent_th_43_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](44, MaterialTableComponent_td_44_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](45, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](46, MaterialTableComponent_th_46_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](47, MaterialTableComponent_td_47_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](48, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](49, MaterialTableComponent_th_49_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](50, MaterialTableComponent_td_50_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](51, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](52, MaterialTableComponent_th_52_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](53, MaterialTableComponent_td_53_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](54, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](55, MaterialTableComponent_th_55_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](56, MaterialTableComponent_td_56_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](57, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](58, MaterialTableComponent_th_58_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](59, MaterialTableComponent_td_59_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](60, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](61, MaterialTableComponent_th_61_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](62, MaterialTableComponent_td_62_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](63, MaterialTableComponent_tr_63_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](64, MaterialTableComponent_tr_64_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](65, "mat-paginator", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, " Filter Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("keyup", function MaterialTableComponent_Template_input_keyup_76_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](78, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](79, MaterialTableComponent_th_79_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](80, MaterialTableComponent_td_80_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](81, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](82, MaterialTableComponent_th_82_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](83, MaterialTableComponent_td_83_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](84, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](85, MaterialTableComponent_th_85_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](86, MaterialTableComponent_td_86_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](87, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](88, MaterialTableComponent_th_88_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](89, MaterialTableComponent_td_89_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](90, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](91, MaterialTableComponent_th_91_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](92, MaterialTableComponent_td_92_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](93, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](94, MaterialTableComponent_th_94_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](95, MaterialTableComponent_td_95_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](96, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](97, MaterialTableComponent_th_97_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](98, MaterialTableComponent_td_98_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](99, MaterialTableComponent_tr_99_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](100, MaterialTableComponent_tr_100_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("dataSource", ctx.dataSource2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("dataSource", ctx.dataSource3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXRlcmlhbC10YWJsZS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 99961:
/*!*****************************************************************!*\
  !*** ./src/app/tables/ngx-datatable/ngx-datatable.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxDatatableComponent": () => (/* binding */ NgxDatatableComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 43365);








const _c0 = ["roleTemplate"];
class NgxDatatableComponent {
    constructor(fb, _snackBar, modalService) {
        this.fb = fb;
        this._snackBar = _snackBar;
        this.modalService = modalService;
        this.rows = [];
        this.newUserImg = 'assets/images/user/user1.jpg';
        this.data = [];
        this.filteredData = [];
        this.columns = [
            { name: 'First Name' },
            { name: 'Last Name' },
            { name: 'Gender' },
            { name: 'Phone' },
            { name: 'Email' },
            { name: 'Address' },
        ];
        this.genders = [
            { id: '1', value: 'Male' },
            { id: '2', value: 'Female' },
        ];
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
        // Table 2
        this.tb2columns = [
            { name: 'Name' },
            { name: 'Title' },
            { name: 'Company' },
            { name: 'Phone' },
            { name: 'Mobile' },
            { name: 'Email' },
            { name: 'Leadstatus' },
            { name: 'Owner' },
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.breadscrums = [
            {
                title: 'ngx-datatable',
                items: ['Tables'],
                active: 'ngx-datatable',
            },
        ];
        this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(),
        });
    }
    ngOnInit() {
        this.fetch((data) => {
            this.data = data;
            this.filteredData = data;
        });
        // Table 2
        this.tb2fetch((data) => {
            this.tb2data = data;
            this.tb2filteredData = data;
        });
        this.register = this.fb.group({
            id: [''],
            img: [''],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('[a-zA-Z]+')]],
            lastName: [''],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(5)],
            ],
            address: [''],
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'assets/data/adv-tbl-data.json');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
    // Table 2
    tb2fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'assets/data/ngx-data.json');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
    // Table 2
    tb2filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.tb2columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.tb2filteredData[0]);
        // assign filtered matches to the active datatable
        this.tb2data = this.tb2filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table2.offset = 0;
    }
    editRow(row, rowIndex, content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        this.editForm.setValue({
            id: row.id,
            firstName: row.firstName,
            lastName: row.lastName,
            phone: row.phone,
            email: row.email,
            address: row.address,
            img: row.img,
        });
        this.selectedRowData = row;
    }
    addRow(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        this.register.patchValue({
            id: this.getId(10, 100),
            img: this.newUserImg,
        });
    }
    deleteRow(row) {
        this.data = this.arrayRemove(this.data, row.id);
        this.showNotification('bg-red', 'Delete Record Successfully', 'bottom', 'right');
    }
    arrayRemove(array, id) {
        return array.filter(function (element) {
            return element.id != id;
        });
    }
    onEditSave(form) {
        this.data = this.data.filter((value, key) => {
            if (value.id == form.value.id) {
                value.firstName = form.value.firstName;
                value.lastName = form.value.lastName;
                value.phone = form.value.phone;
                value.gender = form.value.gender;
                value.email = form.value.email;
                value.address = form.value.address;
            }
            this.modalService.dismissAll();
            return true;
        });
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    onAddRowSave(form) {
        this.data.push(form.value);
        this.data = [...this.data];
        // console.log(this.data);
        form.reset();
        this.modalService.dismissAll();
        this.showNotification('bg-green', 'Add Record Successfully', 'bottom', 'right');
    }
    filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.filteredData[0]);
        // assign filtered matches to the active datatable
        this.data = this.filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    getId(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    openSnackBar(message) {
        this._snackBar.open(message, '', {
            duration: 2000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: ['bg-red'],
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this._snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName,
        });
    }
}
NgxDatatableComponent.??fac = function NgxDatatableComponent_Factory(t) { return new (t || NgxDatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
NgxDatatableComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: NgxDatatableComponent, selectors: [["app-ngx-datatable"]], viewQuery: function NgxDatatableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.roleTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table2 = _t.first);
    } }, decls: 24, vars: 8, consts: [[1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "materialTableHeader", "bg-transparent"], [1, "row"], [1, "col-12"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "matInput", "", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "body"], [1, "col-sm-12"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table2", ""]], template: function NgxDatatableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Uygoman");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, " Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("keyup", function NgxDatatableComponent_Template_input_keyup_18_listener($event) { return ctx.tb2filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "ngx-datatable", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("rows", ctx.tb2data)("columns", ctx.tb2columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 2);
    } }, directives: [_angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ3gtZGF0YXRhYmxlLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 59177:
/*!*************************************************!*\
  !*** ./src/app/tables/tables-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesRoutingModule": () => (/* binding */ TablesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-table/basic-table.component */ 16157);
/* harmony import */ var _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-datatable/ngx-datatable.component */ 99961);
/* harmony import */ var _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-table/material-table.component */ 51229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: '',
        redirectTo: 'basic-tables',
        pathMatch: 'full'
    },
    {
        path: 'basic-tables',
        component: _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent
    },
    {
        path: 'material-tables',
        component: _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableComponent
    },
    {
        path: 'ngx-datatable',
        component: _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_1__.NgxDatatableComponent
    }
];
class TablesRoutingModule {
}
TablesRoutingModule.??fac = function TablesRoutingModule_Factory(t) { return new (t || TablesRoutingModule)(); };
TablesRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: TablesRoutingModule });
TablesRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](TablesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 81439:
/*!*****************************************!*\
  !*** ./src/app/tables/tables.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesModule": () => (/* binding */ TablesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables-routing.module */ 59177);
/* harmony import */ var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-table/basic-table.component */ 16157);
/* harmony import */ var _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-datatable/ngx-datatable.component */ 99961);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-table/material-table.component */ 51229);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/components.module */ 15626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);

















class TablesModule {
}
TablesModule.??fac = function TablesModule_Factory(t) { return new (t || TablesModule)(); };
TablesModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: TablesModule });
TablesModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablesRoutingModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.NgxDatatableModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](TablesModule, { declarations: [_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_1__.BasicTableComponent,
        _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_2__.NgxDatatableComponent,
        _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablesRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.NgxDatatableModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule], exports: [_ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_2__.NgxDatatableComponent] }); })();


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:4200',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map