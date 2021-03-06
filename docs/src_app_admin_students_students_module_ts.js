"use strict";
(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_admin_students_students_module_ts"],{

/***/ 79411:
/*!*************************************************************************!*\
  !*** ./src/app/admin/students/about-student/about-student.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutStudentComponent": () => (/* binding */ AboutStudentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);









function AboutStudentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "app-breadcrumb", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const breadscrum_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", breadscrum_r3.title)("items", breadscrum_r3.items)("active_item", breadscrum_r3.active);
} }
function AboutStudentComponent_ng_template_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, " About Me ");
} }
function AboutStudentComponent_ng_template_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, " Settings ");
} }
class AboutStudentComponent {
    constructor() {
        this.breadscrums = [
            {
                title: 'Profile',
                items: ['Student'],
                active: 'Profile',
            },
        ];
    }
    ngOnInit() { }
}
AboutStudentComponent.??fac = function AboutStudentComponent_Factory(t) { return new (t || AboutStudentComponent)(); };
AboutStudentComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AboutStudentComponent, selectors: [["app-about-student"]], decls: 232, vars: 1, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row", "clearfix"], [1, "col-lg-4", "col-md-12"], [1, "card"], [1, "m-b-20"], [1, "contact-grid"], [1, "profile-header", "bg-dark"], [1, "user-name"], [1, "name-center"], ["src", "assets/images/user/usrbig4.jpg", "alt", "", 1, "user-img"], [1, "phone"], [1, "material-icons"], [1, "row"], [1, "col-4"], ["mat-align-tabs", "start"], ["label", "About"], [1, "p-4"], [1, "text-default"], [1, "list-group", "list-group-unbordered"], [1, "list-group-item"], [1, "profile-desc-item", "float-end"], ["label", "Skills"], [1, "list-unstyled", "p-4"], [1, "progress", "skill-progress", "m-b-20"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-45"], ["role", "progressbar", "aria-valuenow", "38", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-38"], ["role", "progressbar", "aria-valuenow", "39", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-39"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-70"], [1, "col-lg-8", "col-md-12"], ["mat-tab-label", ""], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "project_widget"], [1, "header"], [1, "body"], [1, "col-md-3", "col-6", "b-r"], [1, "text-muted"], [1, "col-md-3", "col-6"], [1, "m-t-30"], [1, "example-container"], ["appearance", "fill", 1, "example-full-width"], ["matInput", ""], ["matInput", "", "type", "password"], ["mat-raised-button", "", "color", "primary"], [1, "col-lg-6", "col-md-12"], [1, "form-group"], [1, "col-md-12"], [1, "example-margin"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "example-tab-icon", "msr-2"]], template: function AboutStudentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, AboutStudentComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Computer Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, " 456, Estern evenue, Courtage area, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "New York ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "564");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "18k");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "565");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "mat-tab-group", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "mat-tab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "Hello I am Sarah Smith a student in Sanjivni College Surat. I love to study with all my class friends and professors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Gender ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Lectures Taken ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "11k+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Department ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "Computer Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "mat-tab", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "Study");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "Cricket");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](77, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, "Yoga");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](87, AboutStudentComponent_ng_template_87_Template, 3, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](101, "Emily Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "(123) 456 7890");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](113, "johndeo@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](121, "Open after rule place He earth earth good called days unto which wherein day doesn't said day image signs fish days forth for evening whose his make his bearing years gathering good brought without.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, "Years living creepeth. Form them yielding behold greater divided void was fowl earth in. Spirit Bring grass they're you have shall years so morning. Grass gathering won't heaven set greater darkness forth abundantly he.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, "Isn't hath, forth. Brought sea subdue, from divided replenish creature after creeping abundantly fly is cattle fill were years years may darkness blessed which land creepeth good moving good. Life living you're.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](132, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "Schooling at sarvoday vidhyalay, Mumbai");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](138, "Betchler In Arts in Bhagvati College Hariyana");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, "Certificates");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](148, "1st Prise in Music competition");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](150, "1st Prise in Acting & Drama");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, "Gold Medal in Betchler in Arts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](154, AboutStudentComponent_ng_template_154_Template, 3, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](158, "Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "mat-form-field", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](164, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](165, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "mat-form-field", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](168, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](169, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "mat-form-field", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](172, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](173, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](175, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](180, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "mat-form-field", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](187, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](188, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](190, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "mat-form-field", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](193, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](194, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "mat-form-field", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](199, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](200, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "mat-form-field", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](205, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](206, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "mat-form-field", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](211, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](212, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "mat-form-field", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](217, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](218, "textarea", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "mat-checkbox", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](222, "Profile Visibility For Everyone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "mat-checkbox", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](225, "New task notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](226, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "mat-checkbox", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](228, "New friend request notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](231, "Save Changes");
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC1zdHVkZW50LmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 63829:
/*!*********************************************************************!*\
  !*** ./src/app/admin/students/add-student/add-student.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStudentComponent": () => (/* binding */ AddStudentComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-material-file-input */ 37410);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);













function AddStudentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "app-breadcrumb", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const breadscrum_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", breadscrum_r10.title)("items", breadscrum_r10.items)("active_item", breadscrum_r10.active);
} }
function AddStudentComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " First name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AddStudentComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Gender is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AddStudentComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AddStudentComponent_mat_error_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please select date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AddStudentComponent_mat_error_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Select Any Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AddStudentComponent_mat_error_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Parents name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AddStudentComponent_mat_error_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please select date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
class AddStudentComponent {
    constructor(fb) {
        this.fb = fb;
        this.breadscrums = [
            {
                title: 'Add Student',
                items: ['Student'],
                active: 'Add Student',
            },
        ];
        this.stdForm = this.fb.group({
            first: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('[a-zA-Z]+')]],
            last: [''],
            rollNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(5)],
            ],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            rDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            department: [''],
            parentName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            parentNo: [''],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            bGroup: [''],
            address: [''],
            uploadImg: [''],
        });
    }
    onSubmit() {
        console.log('Form Value', this.stdForm.value);
    }
}
AddStudentComponent.??fac = function AddStudentComponent_Factory(t) { return new (t || AddStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
AddStudentComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AddStudentComponent, selectors: [["app-add-student"]], decls: 126, vars: 22, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], [1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "first", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "last"], ["matInput", "", "formControlName", "rollNo"], ["formControlName", "gender", "required", ""], [3, "value"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "mobile", "type", "number", "required", ""], ["matInput", "", "formControlName", "rDate", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["rpicker", ""], ["formControlName", "department", "required", ""], ["matInput", "", "formControlName", "parentName", "required", ""], ["matInput", "", "formControlName", "parentNo", "type", "number"], ["matInput", "", "formControlName", "dob", "required", "", 3, "matDatepicker"], ["picker", ""], ["matInput", "", "formControlName", "bGroup"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "address"], ["formControlName", "uploadImg"], ["matSuffix", ""], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["type", "button", "mat-button", ""], [1, "block-header"], [3, "title", "items", "active_item"]], template: function AddStudentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, AddStudentComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Add Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function AddStudentComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, AddStudentComponent_mat_error_17_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Roll No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, " Female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, " Other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](40, AddStudentComponent_mat_error_40_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](46, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](47, AddStudentComponent_mat_error_47_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](52, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, "Registration Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](58, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](59, "mat-datepicker-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](60, "mat-datepicker", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](62, AddStudentComponent_mat_error_62_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "Select Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "mat-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, " Mechanical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, " Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, " Mathematics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, " Computer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, " Civil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](78, AddStudentComponent_mat_error_78_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, "Parents name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](84, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](85, AddStudentComponent_mat_error_85_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, "Parents Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](90, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95, "Date Of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](96, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](97, "mat-datepicker-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](98, "mat-datepicker", null, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](100, AddStudentComponent_mat_error_100_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "Blood Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](105, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](111, "textarea", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, "Upload Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](117, "ngx-mat-file-input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "mat-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, "Cancel");
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
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](61);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.stdForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.stdForm.get("first").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "male");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "female");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.stdForm.get("gender").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.stdForm.get("email").hasError("email") && ctx.stdForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.stdForm.get("rDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "mechanical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "science");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "civil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.stdForm.get("department").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.stdForm.get("parentName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matDatepicker", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("for", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.stdForm.get("dob").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx.stdForm.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepicker, ngx_material_file_input__WEBPACK_IMPORTED_MODULE_9__.FileInputComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3R1ZGVudC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 90420:
/*!***********************************************************************!*\
  !*** ./src/app/admin/students/all-students/all-students.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllStudentsComponent": () => (/* binding */ AllStudentsComponent),
/* harmony export */   "ExampleDataSource": () => (/* binding */ ExampleDataSource)
/* harmony export */ });
/* harmony import */ var _students_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./students.service */ 64752);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs/form-dialog/form-dialog.component */ 90789);
/* harmony import */ var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/delete/delete.component */ 22580);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);



























const _c0 = ["filter"];
function AllStudentsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "app-breadcrumb", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const breadscrum_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("title", breadscrum_r35.title)("items", breadscrum_r35.items)("active_item", breadscrum_r35.active);
} }
function AllStudentsComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "list_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, " List View ");
} }
function AllStudentsComponent_mat_header_cell_47_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "mat-checkbox", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AllStudentsComponent_mat_header_cell_47_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return $event ? ctx_r36.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("checked", ctx_r4.selection.hasValue() && ctx_r4.isAllSelected())("indeterminate", ctx_r4.selection.hasValue() && !ctx_r4.isAllSelected())("ngClass", "tbl-checkbox");
} }
function AllStudentsComponent_mat_cell_48_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "mat-checkbox", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllStudentsComponent_mat_cell_48_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function AllStudentsComponent_mat_cell_48_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r41); const row_r38 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return $event ? ctx_r40.selection.toggle(row_r38) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r38 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("checked", ctx_r5.selection.isSelected(row_r38))("ngClass", "tbl-checkbox");
} }
function AllStudentsComponent_mat_header_cell_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllStudentsComponent_mat_cell_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](row_r42.id);
} }
function AllStudentsComponent_mat_header_cell_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngClass", "tbl-col-width-per-6");
} }
function AllStudentsComponent_mat_cell_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("src", row_r43.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["????sanitizeUrl"]);
} }
function AllStudentsComponent_mat_header_cell_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Roll No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllStudentsComponent_mat_cell_57_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllStudentsComponent_mat_cell_57_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r46); const row_r44 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r45.onContextMenu($event, row_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r44.rollNo, " ");
} }
function AllStudentsComponent_mat_header_cell_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllStudentsComponent_mat_cell_60_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllStudentsComponent_mat_cell_60_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r49); const row_r47 = restoredCtx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r48.onContextMenu($event, row_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r47.name, " ");
} }
function AllStudentsComponent_mat_header_cell_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllStudentsComponent_mat_cell_63_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllStudentsComponent_mat_cell_63_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r52); const row_r50 = restoredCtx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r51.onContextMenu($event, row_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r50.department, "");
} }
function AllStudentsComponent_mat_header_cell_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllStudentsComponent_mat_cell_66_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllStudentsComponent_mat_cell_66_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r55); const row_r53 = restoredCtx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r54.onContextMenu($event, row_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r53.gender, " ");
} }
function AllStudentsComponent_mat_header_cell_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllStudentsComponent_mat_cell_69_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllStudentsComponent_mat_cell_69_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r58); const row_r56 = restoredCtx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r57.onContextMenu($event, row_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r56.mobile, " ");
} }
function AllStudentsComponent_mat_header_cell_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllStudentsComponent_mat_cell_72_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllStudentsComponent_mat_cell_72_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r61); const row_r59 = restoredCtx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r60.onContextMenu($event, row_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r59.email, " ");
} }
function AllStudentsComponent_mat_header_cell_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Admission Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllStudentsComponent_mat_cell_75_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllStudentsComponent_mat_cell_75_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r64); const row_r62 = restoredCtx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r63.onContextMenu($event, row_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind2"](2, 1, row_r62.date, "MM/dd/yyyy"), "");
} }
function AllStudentsComponent_mat_header_cell_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllStudentsComponent_mat_cell_78_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllStudentsComponent_mat_cell_78_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllStudentsComponent_mat_cell_78_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r69); const row_r65 = restoredCtx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r68.editCall(row_r65); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "mat-icon", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllStudentsComponent_mat_cell_78_Template_button_click_4_listener($event) { return $event.stopPropagation(); })("click", function AllStudentsComponent_mat_cell_78_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r69); const row_r65 = restoredCtx.$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r71.deleteItem(row_r65); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "mat-icon", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllStudentsComponent_mat_header_row_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "mat-header-row");
} }
function AllStudentsComponent_mat_row_80_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-row", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllStudentsComponent_mat_row_80_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r74); const row_r72 = restoredCtx.$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r73.editCall(row_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????styleProp"]("cursor", "pointer");
} }
function AllStudentsComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "mat-progress-spinner", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("diameter", 40);
} }
function AllStudentsComponent_ng_template_85_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllStudentsComponent_ng_template_85_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r76.addNew(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "add_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, "Add Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllStudentsComponent_ng_template_85_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r77); const item_r75 = restoredCtx.item; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r78.editCall(item_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](7, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9, "Edit Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllStudentsComponent_ng_template_85_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r77); const item_r75 = restoredCtx.item; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r79.deleteItem(item_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](14, "Delete Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllStudentsComponent_ng_template_85_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r77); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r80.refresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](19, "Refresh Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](22, "no_encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](24, "Disable");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](27, "list_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](29, " Nested Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matMenuTriggerFor", _r31);
} }
function AllStudentsComponent_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " No results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????styleProp"]("display", ctx_r32.dataSource.renderedData.length == 0 ? "" : "none");
} }
function AllStudentsComponent_ng_template_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "grid_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, " Grid View ");
} }
const _c1 = function () { return [5, 10, 25, 100]; };
class AllStudentsComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeOnDestroyAdapter {
    constructor(httpClient, dialog, studentsService, snackBar) {
        super();
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.studentsService = studentsService;
        this.snackBar = snackBar;
        this.displayedColumns = [
            'select',
            'img',
            'rollNo',
            'name',
            'department',
            'gender',
            'mobile',
            'email',
            'date',
            'actions',
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__.SelectionModel(true, []);
        this.breadscrums = [
            {
                title: 'All Student',
                items: ['Student'],
                active: 'All Student',
            },
        ];
        this.contextMenuPosition = { x: '0px', y: '0px' };
    }
    ngOnInit() {
        this.loadData();
    }
    refresh() {
        this.loadData();
    }
    addNew() {
        let tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        const dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogComponent, {
            data: {
                students: this.students,
                action: 'add',
            },
            direction: tempDirection,
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataServicex
                this.exampleDatabase.dataChange.value.unshift(this.studentsService.getDialogData());
                this.refreshTable();
                this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
            }
        });
    }
    editCall(row) {
        this.id = row.id;
        let tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        const dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogComponent, {
            data: {
                students: row,
                action: 'edit',
            },
            direction: tempDirection,
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex((x) => x.id === this.id);
                // Then you update that record using data from dialogData (values you enetered)
                this.exampleDatabase.dataChange.value[foundIndex] =
                    this.studentsService.getDialogData();
                // And lastly refresh table
                this.refreshTable();
                this.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');
            }
        });
    }
    deleteItem(row) {
        this.id = row.id;
        let tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        const dialogRef = this.dialog.open(_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
            data: row,
            direction: tempDirection,
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex((x) => x.id === this.id);
                // for delete we use splice in order to remove single object from DataService
                this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
                this.refreshTable();
                this.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
            }
        });
    }
    refreshTable() {
        this.paginator._changePageSize(this.paginator.pageSize);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.renderedData.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.renderedData.forEach((row) => this.selection.select(row));
    }
    removeSelectedRows() {
        const totalSelect = this.selection.selected.length;
        this.selection.selected.forEach((item) => {
            const index = this.dataSource.renderedData.findIndex((d) => d === item);
            // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
            this.exampleDatabase.dataChange.value.splice(index, 1);
            this.refreshTable();
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__.SelectionModel(true, []);
        });
        this.showNotification('snackbar-danger', totalSelect + ' Record Delete Successfully...!!!', 'bottom', 'center');
    }
    loadData() {
        this.exampleDatabase = new _students_service__WEBPACK_IMPORTED_MODULE_0__.StudentsService(this.httpClient);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        this.subs.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(this.filter.nativeElement, 'keyup').subscribe(() => {
            if (!this.dataSource) {
                return;
            }
            this.dataSource.filter = this.filter.nativeElement.value;
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this.snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName,
        });
    }
    // context menu
    onContextMenu(event, item) {
        event.preventDefault();
        this.contextMenuPosition.x = event.clientX + 'px';
        this.contextMenuPosition.y = event.clientY + 'px';
        this.contextMenu.menuData = { item: item };
        this.contextMenu.menu.focusFirstItem('mouse');
        this.contextMenu.openMenu();
    }
}
AllStudentsComponent.??fac = function AllStudentsComponent_Factory(t) { return new (t || AllStudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_students_service__WEBPACK_IMPORTED_MODULE_0__.StudentsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar)); };
AllStudentsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: AllStudentsComponent, selectors: [["app-all-students"]], viewQuery: function AllStudentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.filter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.contextMenu = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["????InheritDefinitionFeature"]], decls: 373, vars: 17, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-12"], ["mat-tab-label", ""], [1, "mt-5"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], [1, "icon-button-demo", "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "img"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-img tbl-col-width-per-6", 4, "matCellDef"], ["matColumnDef", "rollNo"], [3, "contextmenu", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "department"], ["matColumnDef", "gender"], ["matColumnDef", "mobile"], ["matColumnDef", "email"], ["matColumnDef", "date"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["contextMenu", "matMenu"], ["matMenuContent", ""], ["nestedmenu", "matMenu"], ["mat-menu-item", ""], ["class", "no-results", 3, "display", 4, "ngIf"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [1, "row", "mt-5", "ml-0", "mr-0"], [1, "col-md-4"], [1, "card", "border-apply"], [1, "m-b-20"], [1, "contact-grid"], [1, "profile-header", "l-bg-purple-dark"], [1, "user-name"], [1, "name-center"], ["src", "assets/images/user/usrbig1.jpg", "alt", "", 1, "user-img"], [1, "phone"], [1, "material-icons"], [1, "profile-userbuttons"], ["mat-flat-button", "", "color", "primary"], [1, "profile-header", "bg-cyan"], ["src", "assets/images/user/usrbig2.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-dark"], ["src", "assets/images/user/usrbig3.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "l-bg-orange"], ["src", "assets/images/user/usrbig4.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-green"], ["src", "assets/images/user/usrbig5.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "l-bg-red"], ["src", "assets/images/user/usrbig6.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-indigo"], ["src", "assets/images/user/usrbig7.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-brown"], ["src", "assets/images/user/usrbig8.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-amber"], ["src", "assets/images/user/usrbig9.jpg", "alt", "", 1, "user-img"], ["src", "assets/images/user/usrbig10.jpg", "alt", "", 1, "user-img"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "material-icons-two-tone", "psr-3"], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", "", 1, "table-img", "tbl-col-width-per-6"], [3, "src"], [3, "contextmenu"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "click"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"], ["matRipple", "", 3, "click"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "disabled", ""], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "no-results"]], template: function AllStudentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](2, AllStudentsComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](7, AllStudentsComponent_ng_template_7_Template, 3, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](20, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](24, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](25, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllStudentsComponent_Template_button_click_29_listener() { return ctx.removeSelectedRows(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](31, "delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](33, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](36, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllStudentsComponent_Template_button_click_36_listener() { return ctx.addNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](37, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](38, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](41, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllStudentsComponent_Template_button_click_41_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](42, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](43, "refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](44, "mat-table", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](46, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](47, AllStudentsComponent_mat_header_cell_47_Template, 2, 4, "mat-header-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](48, AllStudentsComponent_mat_cell_48_Template, 2, 3, "mat-cell", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](49, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](50, AllStudentsComponent_mat_header_cell_50_Template, 2, 0, "mat-header-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](51, AllStudentsComponent_mat_cell_51_Template, 2, 1, "mat-cell", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](52, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](53, AllStudentsComponent_mat_header_cell_53_Template, 2, 1, "mat-header-cell", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](54, AllStudentsComponent_mat_cell_54_Template, 2, 1, "mat-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](55, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](56, AllStudentsComponent_mat_header_cell_56_Template, 2, 0, "mat-header-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](57, AllStudentsComponent_mat_cell_57_Template, 2, 1, "mat-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](58, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](59, AllStudentsComponent_mat_header_cell_59_Template, 2, 0, "mat-header-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](60, AllStudentsComponent_mat_cell_60_Template, 2, 1, "mat-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](61, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](62, AllStudentsComponent_mat_header_cell_62_Template, 2, 0, "mat-header-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](63, AllStudentsComponent_mat_cell_63_Template, 2, 1, "mat-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](64, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](65, AllStudentsComponent_mat_header_cell_65_Template, 2, 0, "mat-header-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](66, AllStudentsComponent_mat_cell_66_Template, 2, 1, "mat-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](67, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](68, AllStudentsComponent_mat_header_cell_68_Template, 2, 0, "mat-header-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](69, AllStudentsComponent_mat_cell_69_Template, 2, 1, "mat-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](70, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](71, AllStudentsComponent_mat_header_cell_71_Template, 2, 0, "mat-header-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](72, AllStudentsComponent_mat_cell_72_Template, 2, 1, "mat-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](73, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](74, AllStudentsComponent_mat_header_cell_74_Template, 2, 0, "mat-header-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](75, AllStudentsComponent_mat_cell_75_Template, 3, 4, "mat-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](76, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](77, AllStudentsComponent_mat_header_cell_77_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](78, AllStudentsComponent_mat_cell_78_Template, 7, 0, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](79, AllStudentsComponent_mat_header_row_79_Template, 1, 0, "mat-header-row", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](80, AllStudentsComponent_mat_row_80_Template, 1, 2, "mat-row", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](81, AllStudentsComponent_div_81_Template, 2, 1, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](82, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](83, "mat-menu", null, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](85, AllStudentsComponent_ng_template_85_Template, 30, 1, "ng-template", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](86, "mat-menu", null, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](88, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](89, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](90, "mail_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](92, "Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](93, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](94, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](95, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](97, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](98, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](99, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](100, "chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](102, "Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](103, AllStudentsComponent_div_103_Template, 2, 2, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](104, "mat-paginator", 58, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](106, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](107, AllStudentsComponent_ng_template_107_Template, 3, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](108, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](109, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](110, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](111, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](112, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](113, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](114, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](115, "Pooja Patel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](116, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](117, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](118, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](120, " A-103, shyam gokul flats, Mahatma Road ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](122, "Mumbai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](123, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](124, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](125, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](126, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](127, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](128, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](129, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](130, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](131, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](132, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](133, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](134, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](135, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](136, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](137, "Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](138, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](139, "Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](140, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](142, " 45, Krishna Tower, Near Bus Stop, Satellite, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](144, "Ahmedabad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](145, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](146, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](147, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](148, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](149, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](150, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](151, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](152, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](153, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](154, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](155, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](156, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](157, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](158, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](159, "Megha Trivedi");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](160, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](161, "Computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](162, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](164, " 456, Estern evenue, Courtage area, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](165, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](166, "New York ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](167, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](168, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](169, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](170, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](171, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](172, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](173, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](174, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](175, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](176, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](177, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](178, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](179, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](180, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](181, "Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](182, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](183, "Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](184, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](186, " A-103, shyam gokul flats, Mahatma Road ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](187, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](188, "Mumbai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](189, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](190, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](191, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](192, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](193, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](194, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](195, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](196, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](197, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](198, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](199, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](200, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](201, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](202, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](203, "Smita Patil");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](204, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](205, "Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](206, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](207, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](208, " 45, Krishna Tower, Near Bus Stop, Satellite, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](209, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](210, "Ahmedabad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](211, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](212, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](213, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](214, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](215, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](216, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](217, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](218, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](219, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](220, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](221, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](222, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](223, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](224, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](225, "Airi Satou");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](226, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](227, "Commerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](228, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](229, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](230, " 456, Estern evenue, Courtage area, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](231, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](232, "New York ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](233, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](234, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](235, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](236, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](237, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](238, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](239, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](240, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](241, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](242, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](243, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](244, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](245, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](246, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](247, "Jayesh Patel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](248, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](249, "Mechanical");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](250, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](251, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](252, " A-103, shyam gokul flats, Mahatma Road ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](253, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](254, "Mumbai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](255, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](256, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](257, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](258, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](259, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](260, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](261, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](262, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](263, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](264, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](265, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](266, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](267, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](268, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](269, "Angelica Ramos");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](270, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](271, "Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](272, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](273, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](274, " 45, Krishna Tower, Near Bus Stop, Satellite, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](275, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](276, "Ahmedabad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](277, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](278, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](279, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](280, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](281, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](282, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](283, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](284, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](285, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](286, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](287, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](288, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](289, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](290, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](291, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](292, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](293, "Computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](294, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](295, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](296, " 456, Estern evenue, Courtage area, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](297, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](298, "New York ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](299, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](300, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](301, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](302, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](303, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](304, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](305, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](306, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](307, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](308, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](309, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](310, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](311, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](312, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](313, "Suraj Patel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](314, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](315, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](316, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](317, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](318, " A-103, shyam gokul flats, Mahatma Road ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](319, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](320, "Mumbai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](321, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](322, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](323, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](324, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](325, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](326, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](327, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](328, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](329, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](330, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](331, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](332, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](333, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](334, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](335, "Ashton Cox");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](336, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](337, "Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](338, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](339, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](340, " 45, Krishna Tower, Near Bus Stop, Satellite, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](341, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](342, "Ahmedabad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](343, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](344, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](345, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](346, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](347, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](348, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](349, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](350, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](351, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](352, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](353, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](354, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](355, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](356, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](357, "Jacob Ryan");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](358, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](359, "Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](360, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](361, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](362, " 456, Estern evenue, Courtage area, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](363, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](364, "New York ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](365, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](366, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](367, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](368, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](369, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](370, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](371, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](372, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("hidden", !ctx.selection.hasValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.exampleDatabase.isTblLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????styleProp"]("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matMenuTriggerFor", _r29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx.exampleDatabase.isTblLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("length", ctx.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](16, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinner, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuItem, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtc3R1ZGVudHMuY29tcG9uZW50LnNhc3MifQ== */"] });
class ExampleDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__.DataSource {
    constructor(exampleDatabase, paginator, _sort) {
        super();
        this.exampleDatabase = exampleDatabase;
        this.paginator = paginator;
        this._sort = _sort;
        this.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_21__.BehaviorSubject('');
        this.filteredData = [];
        this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
    }
    get filter() {
        return this.filterChange.value;
    }
    set filter(filter) {
        this.filterChange.next(filter);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        // Listen for any changes in the base data, sorting, filtering, or pagination
        const displayDataChanges = [
            this.exampleDatabase.dataChange,
            this._sort.sortChange,
            this.filterChange,
            this.paginator.page,
        ];
        this.exampleDatabase.getAllStudentss();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.merge)(...displayDataChanges).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(() => {
            // Filter data
            this.filteredData = this.exampleDatabase.data
                .slice()
                .filter((students) => {
                const searchStr = (students.id +
                    students.name +
                    students.email +
                    students.mobile).toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
            });
            // Sort filtered data
            const sortedData = this.sortData(this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            this.renderedData = sortedData.splice(startIndex, this.paginator.pageSize);
            return this.renderedData;
        }));
    }
    disconnect() { }
    /** Returns a sorted copy of the database data. */
    sortData(data) {
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            let propertyA = '';
            let propertyB = '';
            switch (this._sort.active) {
                case 'id':
                    [propertyA, propertyB] = [a.id, b.id];
                    break;
                case 'name':
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
                case 'email':
                    [propertyA, propertyB] = [a.email, b.email];
                    break;
                case 'date':
                    [propertyA, propertyB] = [a.date, b.date];
                    break;
                case 'time':
                    [propertyA, propertyB] = [a.department, b.department];
                    break;
                case 'mobile':
                    [propertyA, propertyB] = [a.mobile, b.mobile];
                    break;
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1));
        });
    }
}


/***/ }),

/***/ 22580:
/*!********************************************************************************!*\
  !*** ./src/app/admin/students/all-students/dialogs/delete/delete.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteDialogComponent": () => (/* binding */ DeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _students_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../students.service */ 64752);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 87317);





class DeleteDialogComponent {
    constructor(dialogRef, data, studentsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.studentsService = studentsService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.studentsService.deleteStudents(this.data.id);
    }
}
DeleteDialogComponent.??fac = function DeleteDialogComponent_Factory(t) { return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_students_service__WEBPACK_IMPORTED_MODULE_0__.StudentsService)); };
DeleteDialogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: DeleteDialogComponent, selectors: [["app-delete"]], decls: 25, vars: 4, consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "clearfix"], [1, "font-weight-bold"], ["mat-dialog-actions", "", 1, "mb-1"], ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close", "click"], ["mat-flat-button", "", "tabindex", "-1", 3, "click"]], template: function DeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Are you sure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, " Department: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Mobile: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DeleteDialogComponent_Template_button_click_21_listener() { return ctx.confirmDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DeleteDialogComponent_Template_button_click_23_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.department);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", ctx.data.mobile, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("mat-dialog-close", 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 90789:
/*!******************************************************************************************!*\
  !*** ./src/app/admin/students/all-students/dialogs/form-dialog/form-dialog.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDialogComponent": () => (/* binding */ FormDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _students_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../students.model */ 52913);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _students_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../students.service */ 64752);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
















function FormDialogComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Department is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Select Any Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Gender is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Mobile is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Please select date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
class FormDialogComponent {
    constructor(dialogRef, data, studentsService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.studentsService = studentsService;
        this.fb = fb;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.students.name;
            this.students = data.students;
        }
        else {
            this.dialogTitle = 'New Students';
            this.students = new _students_model__WEBPACK_IMPORTED_MODULE_0__.Students({});
        }
        this.stdForm = this.createContactForm();
    }
    getErrorMessage() {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('email')
                ? 'Not a valid email'
                : '';
    }
    createContactForm() {
        return this.fb.group({
            id: [this.students.id],
            img: [this.students.img],
            name: [this.students.name],
            email: [
                this.students.email,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]
            ],
            date: [
                (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.students.date, 'yyyy-MM-dd', 'en'),
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            ],
            gender: [this.students.gender],
            mobile: [this.students.mobile],
            department: [this.students.department],
            rollNo: [this.students.rollNo]
        });
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.studentsService.addStudents(this.stdForm.getRawValue());
    }
}
FormDialogComponent.??fac = function FormDialogComponent_Factory(t) { return new (t || FormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_students_service__WEBPACK_IMPORTED_MODULE_1__.StudentsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
FormDialogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: FormDialogComponent, selectors: [["app-form-dialog"]], decls: 93, vars: 23, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["alt", "avatar", 3, "src"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "rollNo", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "name", "required", ""], ["formControlName", "department", "required", ""], [3, "value"], ["formControlName", "gender", "required", ""], ["matInput", "", "formControlName", "mobile", "type", "number"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "mat-dialog-close", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]], template: function FormDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormDialogComponent_Template_button_click_8_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function FormDialogComponent_Template_form_ngSubmit_12_listener() { return ctx.submit; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "Roll No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "school");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](21, FormDialogComponent_mat_error_21_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](29, FormDialogComponent_mat_error_29_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "Select Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, " Mechanical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](39, " Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](41, " Mathematics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](43, " Computer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](45, " Civil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](46, FormDialogComponent_mat_error_46_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](50, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](53, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](55, " Female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](57, " Other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](58, FormDialogComponent_mat_error_58_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](63, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](64, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](66, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](67, FormDialogComponent_mat_error_67_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](71, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](72, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](74, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](75, FormDialogComponent_mat_error_75_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](76, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](77, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](80, "Joining date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](81, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](82, "mat-datepicker-toggle", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](83, "mat-datepicker", null, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](85, FormDialogComponent_mat_error_85_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](86, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](87, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](89, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormDialogComponent_Template_button_click_89_listener() { return ctx.confirmAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](90, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](91, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormDialogComponent_Template_button_click_91_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](92, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("src", ctx.students.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.dialogTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.stdForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.stdForm.get("rollNo").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.stdForm.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "mechanical");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "science");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "civil");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.stdForm.get("department").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "male");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "female");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "other");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.stdForm.get("gender").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.stdForm.get("mobile").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.stdForm.get("email").hasError("required") || ctx.stdForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matDatepicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.stdForm.get("date").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("type", ctx.submit)("disabled", !ctx.stdForm.valid)("mat-dialog-close", 1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 52913:
/*!***************************************************************!*\
  !*** ./src/app/admin/students/all-students/students.model.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Students": () => (/* binding */ Students)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 36362);

class Students {
    constructor(students) {
        {
            this.id = students.id || this.getRandomID();
            this.img = students.avatar || 'assets/images/user/user1.jpg';
            this.name = students.name || '';
            this.email = students.email || '';
            this.date = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.gender = students.gender || '';
            this.mobile = students.mobile || '';
            this.department = students.department || '';
            this.rollNo = students.rollNo || '';
        }
    }
    getRandomID() {
        const S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4();
    }
}


/***/ }),

/***/ 64752:
/*!*****************************************************************!*\
  !*** ./src/app/admin/students/all-students/students.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsService": () => (/* binding */ StudentsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);




class StudentsService extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(httpClient) {
        super();
        this.httpClient = httpClient;
        this.API_URL = 'assets/data/students.json';
        this.isTblLoading = true;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    /** CRUD METHODS */
    getAllStudentss() {
        this.subs.sink = this.httpClient.get(this.API_URL).subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + ' ' + error.message);
        });
    }
    addStudents(students) {
        this.dialogData = students;
        /*  this.httpClient.post(this.API_URL, students).subscribe(data => {
          this.dialogData = students;
          },
          (err: HttpErrorResponse) => {
         // error code here
        });*/
    }
    updateStudents(students) {
        this.dialogData = students;
        /* this.httpClient.put(this.API_URL + students.id, students).subscribe(data => {
          this.dialogData = students;
        },
        (err: HttpErrorResponse) => {
          // error code here
        }
      );*/
    }
    deleteStudents(id) {
        console.log(id);
        /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
          console.log(id);
          },
          (err: HttpErrorResponse) => {
             // error code here
          }
        );*/
    }
}
StudentsService.??fac = function StudentsService_Factory(t) { return new (t || StudentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
StudentsService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: StudentsService, factory: StudentsService.??fac });


/***/ }),

/***/ 91366:
/*!***********************************************************************!*\
  !*** ./src/app/admin/students/edit-student/edit-student.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditStudentComponent": () => (/* binding */ EditStudentComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-material-file-input */ 37410);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);













function EditStudentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "app-breadcrumb", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const breadscrum_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", breadscrum_r10.title)("items", breadscrum_r10.items)("active_item", breadscrum_r10.active);
} }
function EditStudentComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " First name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function EditStudentComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Gender is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function EditStudentComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function EditStudentComponent_mat_error_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please select date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function EditStudentComponent_mat_error_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Select Any Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function EditStudentComponent_mat_error_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Parents name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function EditStudentComponent_mat_error_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please select date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
class EditStudentComponent {
    constructor(fb) {
        this.fb = fb;
        this.formdata = {
            first: 'Pooja',
            last: 'Sarma',
            rollNo: '12',
            gender: 'male',
            email: 'test@example.com',
            mobile: '123456789',
            rDate: '2020-02-05T14:22:18Z',
            department: 'mathematics',
            bGroup: 'O+',
            dob: '1987-02-17T14:22:18Z',
            parentName: 'Sanjay Shukla',
            parentNo: '1234567890',
            address: '101, Elanxa, New Yourk',
            uploadImg: '',
        };
        this.breadscrums = [
            {
                title: 'Edit Student',
                items: ['Student'],
                active: 'Edit Student',
            },
        ];
        this.stdForm = this.createContactForm();
    }
    onSubmit() {
        console.log('Form Value', this.stdForm.value);
    }
    createContactForm() {
        return this.fb.group({
            first: [
                this.formdata.first,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('[a-zA-Z]+')],
            ],
            last: [this.formdata.last],
            rollNo: [this.formdata.rollNo],
            gender: [this.formdata.gender, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            mobile: [this.formdata.mobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            rDate: [this.formdata.rDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            email: [
                this.formdata.email,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(5)],
            ],
            department: [this.formdata.department],
            parentName: [this.formdata.parentName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            parentNo: [this.formdata.parentNo],
            dob: [this.formdata.dob, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            bGroup: [this.formdata.bGroup],
            address: [this.formdata.address],
            uploadImg: [this.formdata.uploadImg],
        });
    }
}
EditStudentComponent.??fac = function EditStudentComponent_Factory(t) { return new (t || EditStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
EditStudentComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: EditStudentComponent, selectors: [["app-edit-student"]], decls: 126, vars: 22, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], [1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "first", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "last"], ["matInput", "", "formControlName", "rollNo"], ["formControlName", "gender", "required", ""], [3, "value"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "mobile", "type", "number", "required", ""], ["matInput", "", "formControlName", "rDate", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["rpicker", ""], ["formControlName", "department", "required", ""], ["matInput", "", "formControlName", "parentName", "required", ""], ["matInput", "", "formControlName", "parentNo", "type", "number"], ["matInput", "", "formControlName", "dob", "required", "", 3, "matDatepicker"], ["picker", ""], ["matInput", "", "formControlName", "bGroup"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "address"], ["formControlName", "uploadImg"], ["matSuffix", ""], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["type", "button", "mat-button", ""], [1, "block-header"], [3, "title", "items", "active_item"]], template: function EditStudentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, EditStudentComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Edit Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function EditStudentComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, EditStudentComponent_mat_error_17_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Roll No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, " Female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, " Other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](40, EditStudentComponent_mat_error_40_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](46, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](47, EditStudentComponent_mat_error_47_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](52, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, "Registration Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](58, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](59, "mat-datepicker-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](60, "mat-datepicker", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](62, EditStudentComponent_mat_error_62_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "Select Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "mat-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, " Mechanical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, " Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, " Mathematics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, " Computer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, " Civil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](78, EditStudentComponent_mat_error_78_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, "Parents name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](84, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](85, EditStudentComponent_mat_error_85_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, "Parents Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](90, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95, "Date Of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](96, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](97, "mat-datepicker-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](98, "mat-datepicker", null, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](100, EditStudentComponent_mat_error_100_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "Blood Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](105, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](111, "textarea", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, "Upload Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](117, "ngx-mat-file-input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "mat-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, "Cancel");
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
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](61);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.stdForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.stdForm.get("first").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "male");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "female");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.stdForm.get("gender").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.stdForm.get("email").hasError("email") && ctx.stdForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.stdForm.get("rDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "mechanical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "science");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "civil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.stdForm.get("department").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.stdForm.get("parentName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matDatepicker", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("for", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.stdForm.get("dob").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx.stdForm.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepicker, ngx_material_file_input__WEBPACK_IMPORTED_MODULE_9__.FileInputComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXN0dWRlbnQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 47707:
/*!***********************************************************!*\
  !*** ./src/app/admin/students/students-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsRoutingModule": () => (/* binding */ StudentsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _all_students_all_students_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-students/all-students.component */ 90420);
/* harmony import */ var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-student/add-student.component */ 63829);
/* harmony import */ var _edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-student/edit-student.component */ 91366);
/* harmony import */ var _about_student_about_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-student/about-student.component */ 79411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: 'all-students',
        component: _all_students_all_students_component__WEBPACK_IMPORTED_MODULE_0__.AllStudentsComponent
    },
    {
        path: 'add-student',
        component: _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_1__.AddStudentComponent
    },
    {
        path: 'edit-student',
        component: _edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_2__.EditStudentComponent
    },
    {
        path: 'about-student',
        component: _about_student_about_student_component__WEBPACK_IMPORTED_MODULE_3__.AboutStudentComponent
    }
];
class StudentsRoutingModule {
}
StudentsRoutingModule.??fac = function StudentsRoutingModule_Factory(t) { return new (t || StudentsRoutingModule)(); };
StudentsRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: StudentsRoutingModule });
StudentsRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](StudentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 46250:
/*!***************************************************!*\
  !*** ./src/app/admin/students/students.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsModule": () => (/* binding */ StudentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-material-file-input */ 37410);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _students_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./students-routing.module */ 47707);
/* harmony import */ var _about_student_about_student_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-student/about-student.component */ 79411);
/* harmony import */ var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-student/add-student.component */ 63829);
/* harmony import */ var _edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-student/edit-student.component */ 91366);
/* harmony import */ var _all_students_all_students_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-students/all-students.component */ 90420);
/* harmony import */ var _all_students_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-students/dialogs/delete/delete.component */ 22580);
/* harmony import */ var _all_students_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-students/dialogs/form-dialog/form-dialog.component */ 90789);
/* harmony import */ var _all_students_students_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-students/students.service */ 64752);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);





























class StudentsModule {
}
StudentsModule.??fac = function StudentsModule_Factory(t) { return new (t || StudentsModule)(); };
StudentsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineNgModule"]({ type: StudentsModule });
StudentsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineInjector"]({ providers: [_all_students_students_service__WEBPACK_IMPORTED_MODULE_7__.StudentsService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckboxModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__.MatTabsModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__.MatMenuModule,
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_27__.MaterialFileInputModule,
            _students_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentsRoutingModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_8__.ComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["????setNgModuleScope"](StudentsModule, { declarations: [_about_student_about_student_component__WEBPACK_IMPORTED_MODULE_1__.AboutStudentComponent,
        _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_2__.AddStudentComponent,
        _edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_3__.EditStudentComponent,
        _all_students_all_students_component__WEBPACK_IMPORTED_MODULE_4__.AllStudentsComponent,
        _all_students_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__.DeleteDialogComponent,
        _all_students_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_6__.FormDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckboxModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__.MatTabsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__.MatMenuModule,
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_27__.MaterialFileInputModule,
        _students_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentsRoutingModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_8__.ComponentsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_students_students_module_ts.js.map