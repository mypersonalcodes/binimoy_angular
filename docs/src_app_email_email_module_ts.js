"use strict";
(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_email_email_module_ts"],{

/***/ 31104:
/*!****************************************************!*\
  !*** ./src/app/email/compose/compose.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComposeComponent": () => (/* binding */ ComposeComponent)
/* harmony export */ });
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ 79949);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 36844);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);








function ComposeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "app-breadcrumb", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const breadscrum_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", breadscrum_r1.title)("items", breadscrum_r1.items)("active_item", breadscrum_r1.active);
} }
class ComposeComponent {
    constructor() {
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__;
        this.breadscrums = [
            {
                title: 'Compose',
                items: ['Email'],
                active: 'Compose',
            },
        ];
    }
}
ComposeComponent.??fac = function ComposeComponent_Factory(t) { return new (t || ComposeComponent)(); };
ComposeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ComposeComponent, selectors: [["app-compose"]], decls: 120, vars: 2, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"], [1, "card"], [1, "body"], ["id", "mail-nav"], ["type", "button", 1, "btn", "btn-success", "waves-effect", "m-b-15"], ["id", "mail-folders", 1, ""], [1, "active"], ["href", "inbox.html", "title", "Inbox"], [1, "badge", "bg-orange"], ["href", "javascript:;", "title", "Sent"], ["href", "javascript:;", "title", "Draft"], ["href", "javascript:;", "title", "Bin"], ["href", "javascript:;", "title", "Important"], ["href", "javascript:;", "title", "Starred"], [1, "b-b", "p-10", "text-strong"], ["id", "mail-labels", 1, ""], ["href", "javascript:;"], [1, "material-icons", "col-red"], [1, "material-icons", "col-blue"], [1, "material-icons", "col-orange"], [1, "material-icons", "col-cyan"], [1, "material-icons", "col-blue-grey"], ["id", "online-offline", 1, "online-user"], ["title", "Online", 1, "material-icons", "col-green"], ["title", "Off Line", 1, "material-icons", "col-indigo"], ["title", "Away", 1, "material-icons", "col-orange"], [1, "col-xs-12", "col-sm-12", "col-md-9", "col-lg-9"], [1, "boxs", "mail_listing"], [1, "inbox-center", "table-responsive"], [1, "table", "table-hover"], ["colspan", "1"], [1, "inbox-header"], [1, "col-lg-12"], [1, "composeForm"], [1, "form-line"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "id", "email_address"], ["matInput", "", "id", "subject"], ["data", "<p>Hello, world!</p>", 3, "editor"], [1, "compose-editor", "m-t-20"], ["id", "summernote"], ["type", "file", "multiple", "", 1, "default"], [1, "m-l-25", "m-b-20"], ["mat-flat-button", "", "color", "primary", 1, "msr-2"], ["mat-flat-button", "", "color", "warn"], [1, "block-header"], [3, "title", "items", "active_item"]], template: function ComposeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, ComposeComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "COMPOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21, "Draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "Bin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](27, "Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](30, "Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](38, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](43, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](47, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](48, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](52, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](53, "Themeforest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](57, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](58, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](60, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](65, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](66, "Sachin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](70, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](71, "John Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](74, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](75, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](76, "Askay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](79, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](80, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](81, "Dhavan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](83, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](84, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](85, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](86, "Lee");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](87, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](89, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](90, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](91, "table", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](92, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](93, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](94, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](95, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](96, " Compose New Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](97, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](98, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](99, "form", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](100, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](101, "mat-form-field", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](102, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](103, "TO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](104, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](105, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](106, "mat-form-field", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](107, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](108, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](109, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](110, "ckeditor", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](111, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](112, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](113, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](114, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](115, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](116, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](117, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](118, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](119, "Discard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("editor", ctx.Editor);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__.CKEditorComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], styles: ["[_nghost-%COMP%]     .ck-editor__editable_inline {\n  min-height: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6ImNvbXBvc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcclxuICBtaW4taGVpZ2h0OiAzNTBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4639:
/*!***********************************************!*\
  !*** ./src/app/email/email-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailRoutingModule": () => (/* binding */ EmailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox/inbox.component */ 89194);
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose/compose.component */ 31104);
/* harmony import */ var _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read-mail/read-mail.component */ 63925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: 'inbox',
        component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_0__.InboxComponent
    },
    {
        path: 'compose',
        component: _compose_compose_component__WEBPACK_IMPORTED_MODULE_1__.ComposeComponent
    },
    {
        path: 'read-mail',
        component: _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_2__.ReadMailComponent
    }
];
class EmailRoutingModule {
}
EmailRoutingModule.??fac = function EmailRoutingModule_Factory(t) { return new (t || EmailRoutingModule)(); };
EmailRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: EmailRoutingModule });
EmailRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](EmailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 57727:
/*!***************************************!*\
  !*** ./src/app/email/email.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailModule": () => (/* binding */ EmailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-routing.module */ 4639);
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose/compose.component */ 31104);
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox/inbox.component */ 89194);
/* harmony import */ var _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./read-mail/read-mail.component */ 63925);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 36844);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/components.module */ 15626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);













class EmailModule {
}
EmailModule.??fac = function EmailModule_Factory(t) { return new (t || EmailModule)(); };
EmailModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: EmailModule });
EmailModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _email_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailRoutingModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__.CKEditorModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](EmailModule, { declarations: [_compose_compose_component__WEBPACK_IMPORTED_MODULE_1__.ComposeComponent, _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_2__.InboxComponent, _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_3__.ReadMailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _email_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailRoutingModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__.CKEditorModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule] }); })();


/***/ }),

/***/ 89194:
/*!************************************************!*\
  !*** ./src/app/email/inbox/inbox.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxComponent": () => (/* binding */ InboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);







function InboxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "app-breadcrumb", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const breadscrum_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", breadscrum_r1.title)("items", breadscrum_r1.items)("active_item", breadscrum_r1.active);
} }
class InboxComponent {
    constructor() {
        this.breadscrums = [
            {
                title: 'Inbox',
                items: ['Email'],
                active: 'Inbox',
            },
        ];
    }
    ngOnInit() { }
}
InboxComponent.??fac = function InboxComponent_Factory(t) { return new (t || InboxComponent)(); };
InboxComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: InboxComponent, selectors: [["app-inbox"]], decls: 403, vars: 1, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"], [1, "card"], [1, "body"], ["id", "mail-nav"], ["type", "button", 1, "btn", "btn-success", "waves-effect", "m-b-15"], ["id", "mail-folders", 1, ""], [1, "active"], ["title", "Inbox"], [1, "badge", "bg-orange"], ["href", "javascript:;", "title", "Sent"], ["href", "javascript:;", "title", "Draft"], ["href", "javascript:;", "title", "Bin"], ["href", "javascript:;", "title", "Important"], ["href", "javascript:;", "title", "Starred"], [1, "b-b", "p-10", "text-strong"], ["id", "mail-labels", 1, ""], ["href", "javascript:;"], [1, "material-icons", "col-red"], [1, "material-icons", "col-blue"], [1, "material-icons", "col-orange"], [1, "material-icons", "col-cyan"], [1, "material-icons", "col-blue-grey"], ["id", "online-offline", 1, "online-user"], ["title", "Online", 1, "material-icons", "col-green"], ["title", "Off Line", 1, "material-icons", "col-indigo"], ["title", "Away", 1, "material-icons", "col-orange"], [1, "col-xs-12", "col-sm-12", "col-md-9", "col-lg-9"], [1, "boxs", "mail_listing"], [1, "inbox-center", "table-responsive"], [1, "table", "table-hover"], [1, "text-center"], [1, "example-margin"], ["colspan", "3"], [1, "inbox-header"], [1, "mail-option", "no-pad-left"], [1, "email-btn-group", "m-l-15"], ["mat-icon-button", "", "aria-label", "Example icon-button with a heart icon"], ["colspan", "2", 1, "hidden-xs"], [1, "float-end"], [1, "unread"], [1, "tbl-checkbox"], [1, "hidden-xs"], [1, "material-icons"], [1, "max-texts"], ["routerLink", "/email/read-mail"], [1, "badge", "col-blue", "shadow-style", "m-r-10"], [1, "text-end"], [1, "material-icons", "text-warning"], [1, "badge", "col-red", "shadow-style", "m-r-10"], [1, "badge", "col-cyan", "shadow-style", "m-r-10"], [1, "badge", "col-orange", "shadow-style", "m-r-10"], [1, "badge", "col-purple", "shadow-style", "m-r-10"], [1, "badge", "col-green", "shadow-style", "m-r-10"], [1, "col-sm-7"], [1, "p-15"], [1, "col-sm-5", "text-end"], [1, "block-header"], [3, "title", "items", "active_item"]], template: function InboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, InboxComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "COMPOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Bin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Themeforest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "Sachin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "John Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76, "Askay");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "Dhavan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Lee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "table", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](95, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "keyboard_return");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](105, "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](111, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](114, "folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, "navigate_before");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](126, "navigate_next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "tr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](130, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](133, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](135, "Nelson Lane");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](139, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](140, " Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](143, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](145, " 12:30 PM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "tr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](148, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](151, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, "Kerry Mann");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](156, "Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](161, " May 13 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "tr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](164, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](167, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](169, "Adam Peters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, "Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, " Lorem ipsum perspiciatis unde omnis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](177, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, " May 12 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](182, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](185, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](187, "Lula Reese");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](190, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](191, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](192, " Lorem ipsum perspiciatis unde omnis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](195, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](197, " May 12 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](200, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](203, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](205, "Nelson Lane");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](209, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](210, " Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](213, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](215, " May 12 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](218, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](221, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](223, "Kerry Mann");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](226, "Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](229, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](231, " May 11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](234, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](236, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](237, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](239, "Adam Peters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](241, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](243, "Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](244, " Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](246, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](247, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](249, " May 11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](252, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](254, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](255, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](257, "Lula Reese");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](258, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](261, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](262, " Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](264, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](265, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](266, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](267, " May 11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](268, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](270, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](272, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](273, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](274, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](275, "Nelson Lane");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](276, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](278, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](279, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](280, " Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](282, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](283, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](284, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](285, " May 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](286, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](288, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](289, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](290, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](291, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](292, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](293, "Kerry Mann");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](294, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](295, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](296, "Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](297, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](298, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](299, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](300, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](301, " May 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](302, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](304, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](306, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](307, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](309, "Adam Peters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](310, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](311, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](312, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](313, "Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](314, " Lorem ipsum perspiciatis unde omnis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](315, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](316, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](317, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](318, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](319, " May 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](320, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](321, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](322, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](323, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](324, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](325, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](326, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](327, "Lula Reese");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](328, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](329, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](330, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](331, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](332, " Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](333, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](334, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](335, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](336, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](337, " May 09 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](338, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](339, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](340, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](341, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](342, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](343, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](344, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](345, "Nelson Lane");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](346, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](347, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](348, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](349, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](350, " Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](351, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](352, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](353, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](354, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](355, " May 09 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](356, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](357, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](358, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](359, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](360, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](361, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](362, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](363, "Kerry Mann");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](364, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](365, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](366, "Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](367, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](368, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](369, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](370, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](371, " May 09 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](372, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](373, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](374, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](375, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](376, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](377, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](378, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](379, "Adam Peters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](380, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](381, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](382, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](383, "Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](384, " Lorem ipsum perspiciatis unde omnis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](385, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](386, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](387, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](388, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](389, " May 09 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](390, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](391, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](392, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](393, "Showing 1 - 15 of 200");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](394, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](395, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](396, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](397, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](398, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](399, "navigate_before");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](400, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](401, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](402, "navigate_next");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.breadscrums);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmJveC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 63925:
/*!********************************************************!*\
  !*** ./src/app/email/read-mail/read-mail.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadMailComponent": () => (/* binding */ ReadMailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);



function ReadMailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "app-breadcrumb", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const breadscrum_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", breadscrum_r1.title)("items", breadscrum_r1.items)("active_item", breadscrum_r1.active);
} }
class ReadMailComponent {
    constructor() {
        this.breadscrums = [
            {
                title: 'Read',
                items: ['Email'],
                active: 'Read',
            },
        ];
    }
    ngOnInit() { }
}
ReadMailComponent.??fac = function ReadMailComponent_Factory(t) { return new (t || ReadMailComponent)(); };
ReadMailComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ReadMailComponent, selectors: [["app-read-mail"]], decls: 161, vars: 1, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"], [1, "card"], [1, "body"], ["id", "mail-nav"], ["type", "button", 1, "btn", "btn-success", "waves-effect", "m-b-15"], ["id", "mail-folders", 1, ""], [1, "active"], ["href", "inbox.html", "title", "Inbox"], [1, "badge", "bg-orange"], ["href", "javascript:;", "title", "Sent"], ["href", "javascript:;", "title", "Draft"], ["href", "javascript:;", "title", "Bin"], ["href", "javascript:;", "title", "Important"], ["href", "javascript:;", "title", "Starred"], [1, "b-b", "p-10", "text-strong"], ["id", "mail-labels", 1, ""], ["href", "javascript:;"], [1, "material-icons", "col-red"], [1, "material-icons", "col-blue"], [1, "material-icons", "col-orange"], [1, "material-icons", "col-cyan"], [1, "material-icons", "col-blue-grey"], ["id", "online-offline", 1, "online-user"], ["title", "Online", 1, "material-icons", "col-green"], ["title", "Off Line", 1, "material-icons", "col-indigo"], ["title", "Away", 1, "material-icons", "col-orange"], [1, "col-xs-12", "col-sm-12", "col-md-9", "col-lg-9"], [1, "boxs", "mail_listing"], [1, "inbox-body", "no-pad"], [1, "mail-list"], [1, "mail-sender"], [1, "mail-heading"], [1, "vew-mail-header"], [1, "d-flex", "mb-4"], ["href", "#", 1, "table-img", "m-r-15"], ["alt", "", "src", "assets/images/user/user2.jpg"], [1, "flex-grow-1"], [1, "date", "float-end"], [1, "text-primary"], [1, "text-muted"], [1, "view-mail"], ["href", "#"], [1, "attachment-mail"], [1, "fa", "fa-paperclip"], [1, "col-md-2"], ["alt", "attachment", "src", "assets/images/user/usrbig2.jpg", 1, "img-thumbnail", "img-responsive"], ["href", "#", 1, "name"], ["alt", "attachment", "src", "assets/images/user/usrbig1.jpg", 1, "img-thumbnail", "img-responsive"], ["alt", "attachment", "src", "assets/images/user/usrbig3.jpg", 1, "img-thumbnail", "img-responsive"], [1, "replyBox", "m-t-20"], [1, "p-b-20"], [1, "block-header"], [3, "title", "items", "active_item"]], template: function ReadMailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, ReadMailComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "COMPOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Bin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Themeforest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "Sachin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "John Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76, "Askay");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "Dhavan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Lee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "Hi Dear, How are you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](97, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](100, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](103, "4:15AM 04 April 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "h4", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](105, "Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "small", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "From: sarah@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, " Porttitor eu consequat risus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](114, "Mauris sed congue orci. Donec ultrices faucibus rutrum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, ". Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, " Sodales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "vulputate urna, vel accumsan augue egestas ac");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](120, ". Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](124, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, " 3 attachments \u2014 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](127, "Download all attachments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](130, "View all images");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](134, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, " IMG_001.jpg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](138, "20KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](141, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](143, " IMG_002.jpg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](145, "22KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](148, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](150, " IMG_003.jpg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, "28KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](155, "click here to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](158, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](160, "Forward");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.breadscrums);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFkLW1haWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_email_email_module_ts.js.map