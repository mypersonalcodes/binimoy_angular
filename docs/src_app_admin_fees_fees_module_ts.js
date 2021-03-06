"use strict";
(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_admin_fees_fees_module_ts"],{

/***/ 77601:
/*!***********************************************************!*\
  !*** ./src/app/admin/fees/add-fees/add-fees.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFeesComponent": () => (/* binding */ AddFeesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);













function AddFeesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "app-breadcrumb", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const breadscrum_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", breadscrum_r12.title)("items", breadscrum_r12.items)("active_item", breadscrum_r12.active);
} }
function AddFeesComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please enter roll no ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AddFeesComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please enter student name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AddFeesComponent_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Select Any Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AddFeesComponent_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Select Fees Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AddFeesComponent_mat_error_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Select Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AddFeesComponent_mat_error_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please select date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AddFeesComponent_mat_error_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Select Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AddFeesComponent_mat_error_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Enter Invoice Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AddFeesComponent_mat_error_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Select Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AddFeesComponent_mat_error_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Enter amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
class AddFeesComponent {
    constructor(fb) {
        this.fb = fb;
        this.breadscrums = [
            {
                title: 'Add Fees',
                items: ['Fees'],
                active: 'Add Fees',
            },
        ];
        this.feesForm = this.fb.group({
            rollNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            sName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            fType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            department: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            invoiceNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            pType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            details: [''],
        });
    }
    onSubmit() {
        console.log('Form Value', this.feesForm.value);
    }
}
AddFeesComponent.??fac = function AddFeesComponent_Factory(t) { return new (t || AddFeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
AddFeesComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AddFeesComponent, selectors: [["app-add-fees"]], decls: 143, vars: 33, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-3"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "rollNo", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "sName", "required", ""], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["formControlName", "department", "required", ""], [3, "value"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "fType", "required", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "m-b-20"], [1, "msr-3"], ["aria-label", "Select duration", "formControlName", "duration", "required", ""], ["value", "monthly"], ["value", "yearly"], ["value", "session"], ["matInput", "", "formControlName", "date", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["formControlName", "pType", "required", ""], ["matInput", "", "formControlName", "invoiceNo", "required", ""], ["formControlName", "status", "required", ""], ["matInput", "", "formControlName", "amount", "required", ""], ["matInput", "", "formControlName", "details"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1"], [1, "block-header"], [3, "title", "items", "active_item"]], template: function AddFeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, AddFeesComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Add Fees Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function AddFeesComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Roll No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, AddFeesComponent_mat_error_19_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Student Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](27, AddFeesComponent_mat_error_27_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Select Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, " Mechanical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, " Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, " Mathematics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, " Computer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](42, AddFeesComponent_mat_error_42_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "Fees Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, " Annual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, " Tution ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, " Transport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, " Exam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, " Library ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59, " Other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](60, AddFeesComponent_mat_error_60_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "mat-label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "Duration:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "mat-radio-group", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "mat-radio-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "mat-radio-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "Yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "mat-radio-button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "Session");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](73, AddFeesComponent_mat_error_73_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "Collection Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](79, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](80, "mat-datepicker-toggle", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](81, "mat-datepicker", null, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](83, AddFeesComponent_mat_error_83_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](87, "Payment Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "mat-select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, " Cash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, " Cheque ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, " Online Transfer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, " Draft ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, " Other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](99, AddFeesComponent_mat_error_99_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "Invoice Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](105, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "receipt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](108, AddFeesComponent_mat_error_108_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "mat-select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, " Paid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, " Unpaid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, " Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](120, AddFeesComponent_mat_error_120_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](126, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, "monetization_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](129, AddFeesComponent_mat_error_129_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](135, "textarea", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](140, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](142, "Cancel");
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
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.feesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("rollNo").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("sName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "mechanical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "science");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("department").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "annual");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "tution");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "library");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("fType").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("duration").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matDatepicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("date").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "cheque");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "online transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "credit card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("pType").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("invoiceNo").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "unpaid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("status").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("amount").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx.feesForm.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZmVlcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 5667:
/*!***********************************************************!*\
  !*** ./src/app/admin/fees/all-fees/all-fees.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllFeesComponent": () => (/* binding */ AllFeesComponent),
/* harmony export */   "ExampleDataSource": () => (/* binding */ ExampleDataSource)
/* harmony export */ });
/* harmony import */ var _fees_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fees.service */ 63556);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs/form-dialog/form-dialog.component */ 35131);
/* harmony import */ var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/delete/delete.component */ 87235);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);


























const _c0 = ["filter"];
function AllFeesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "app-breadcrumb", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const breadscrum_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("title", breadscrum_r33.title)("items", breadscrum_r33.items)("active_item", breadscrum_r33.active);
} }
function AllFeesComponent_mat_header_cell_42_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "mat-checkbox", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AllFeesComponent_mat_header_cell_42_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return $event ? ctx_r34.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("checked", ctx_r3.selection.hasValue() && ctx_r3.isAllSelected())("indeterminate", ctx_r3.selection.hasValue() && !ctx_r3.isAllSelected())("ngClass", "tbl-checkbox");
} }
function AllFeesComponent_mat_cell_43_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "mat-checkbox", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllFeesComponent_mat_cell_43_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function AllFeesComponent_mat_cell_43_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r39); const row_r36 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return $event ? ctx_r38.selection.toggle(row_r36) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r36 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("checked", ctx_r4.selection.isSelected(row_r36))("ngClass", "tbl-checkbox");
} }
function AllFeesComponent_mat_header_cell_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllFeesComponent_mat_cell_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](row_r40.id);
} }
function AllFeesComponent_mat_header_cell_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Roll No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllFeesComponent_mat_cell_49_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllFeesComponent_mat_cell_49_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r43); const row_r41 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r42.onContextMenu($event, row_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r41.rollNo, "");
} }
function AllFeesComponent_mat_header_cell_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Student Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllFeesComponent_mat_cell_52_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllFeesComponent_mat_cell_52_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r46); const row_r44 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r45.onContextMenu($event, row_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r44.sName, "");
} }
function AllFeesComponent_mat_header_cell_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Fees Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllFeesComponent_mat_cell_55_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllFeesComponent_mat_cell_55_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r49); const row_r47 = restoredCtx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r48.onContextMenu($event, row_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r47.fType, "");
} }
function AllFeesComponent_mat_header_cell_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllFeesComponent_mat_cell_58_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllFeesComponent_mat_cell_58_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r52); const row_r50 = restoredCtx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r51.onContextMenu($event, row_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind2"](2, 1, row_r50.date, "MM/dd/yyyy"), " ");
} }
function AllFeesComponent_mat_header_cell_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Invoice No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllFeesComponent_mat_cell_61_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllFeesComponent_mat_cell_61_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r55); const row_r53 = restoredCtx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r54.onContextMenu($event, row_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r53.invoiceNo, "");
} }
function AllFeesComponent_mat_header_cell_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Payment Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllFeesComponent_mat_cell_64_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllFeesComponent_mat_cell_64_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r58); const row_r56 = restoredCtx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r57.onContextMenu($event, row_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r56.pType, "");
} }
function AllFeesComponent_mat_header_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllFeesComponent_mat_cell_67_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllFeesComponent_mat_cell_67_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r61); const row_r59 = restoredCtx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r60.onContextMenu($event, row_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r59.status, "");
} }
function AllFeesComponent_mat_header_cell_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllFeesComponent_mat_cell_70_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllFeesComponent_mat_cell_70_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r64); const row_r62 = restoredCtx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r63.onContextMenu($event, row_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r62.amount, "");
} }
function AllFeesComponent_mat_header_cell_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllFeesComponent_mat_cell_73_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllFeesComponent_mat_cell_73_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllFeesComponent_mat_cell_73_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r69); const row_r65 = restoredCtx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r68.editCall(row_r65); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "mat-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllFeesComponent_mat_cell_73_Template_button_click_4_listener($event) { return $event.stopPropagation(); })("click", function AllFeesComponent_mat_cell_73_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r69); const row_r65 = restoredCtx.$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r71.deleteItem(row_r65); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllFeesComponent_mat_header_row_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "mat-header-row");
} }
function AllFeesComponent_mat_row_75_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-row", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllFeesComponent_mat_row_75_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r74); const row_r72 = restoredCtx.$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r73.editCall(row_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????styleProp"]("cursor", "pointer");
} }
function AllFeesComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "mat-progress-spinner", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("diameter", 40);
} }
function AllFeesComponent_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllFeesComponent_ng_template_80_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r76.addNew(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "add_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, "Add Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllFeesComponent_ng_template_80_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r77); const item_r75 = restoredCtx.item; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r78.editCall(item_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](7, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9, "Edit Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllFeesComponent_ng_template_80_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r77); const item_r75 = restoredCtx.item; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r79.deleteItem(item_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](14, "Delete Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllFeesComponent_ng_template_80_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r77); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r80.refresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](19, "Refresh Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](22, "no_encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](24, "Disable");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](27, "list_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](29, " Nested Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matMenuTriggerFor", _r30);
} }
function AllFeesComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " No results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????styleProp"]("display", ctx_r31.dataSource.renderedData.length == 0 ? "" : "none");
} }
const _c1 = function () { return [5, 10, 25, 100]; };
class AllFeesComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeOnDestroyAdapter {
    constructor(httpClient, dialog, feesService, snackBar) {
        super();
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.feesService = feesService;
        this.snackBar = snackBar;
        this.displayedColumns = [
            'select',
            'rollNo',
            'sName',
            'fType',
            'date',
            'invoiceNo',
            'pType',
            'status',
            'amount',
            'actions',
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__.SelectionModel(true, []);
        this.breadscrums = [
            {
                title: 'All Fees',
                items: ['Fees'],
                active: 'All Fees',
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
                fees: this.fees,
                action: 'add',
            },
            direction: tempDirection,
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                this.exampleDatabase.dataChange.value.unshift(this.feesService.getDialogData());
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
                fees: row,
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
                    this.feesService.getDialogData();
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
        this.exampleDatabase = new _fees_service__WEBPACK_IMPORTED_MODULE_0__.FeesService(this.httpClient);
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
AllFeesComponent.??fac = function AllFeesComponent_Factory(t) { return new (t || AllFeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_fees_service__WEBPACK_IMPORTED_MODULE_0__.FeesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar)); };
AllFeesComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: AllFeesComponent, selectors: [["app-all-fees"]], viewQuery: function AllFeesComponent_Query(rf, ctx) { if (rf & 1) {
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
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["????InheritDefinitionFeature"]], decls: 101, vars: 17, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], [1, "icon-button-demo", "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "rollNo"], [3, "contextmenu", 4, "matCellDef"], ["matColumnDef", "sName"], ["matColumnDef", "fType"], ["matColumnDef", "date"], ["matColumnDef", "invoiceNo"], ["matColumnDef", "pType"], ["matColumnDef", "status"], ["matColumnDef", "amount"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["contextMenu", "matMenu"], ["matMenuContent", ""], ["nestedmenu", "matMenu"], ["mat-menu-item", ""], ["class", "no-results", 3, "display", 4, "ngIf"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [1, "block-header"], [3, "title", "items", "active_item"], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], [3, "contextmenu"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "click"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"], ["matRipple", "", 3, "click"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "disabled", ""], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "no-results"]], template: function AllFeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](2, AllFeesComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](15, "Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](19, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](20, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllFeesComponent_Template_button_click_24_listener() { return ctx.removeSelectedRows(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](26, "delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](31, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllFeesComponent_Template_button_click_31_listener() { return ctx.addNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](33, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](36, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllFeesComponent_Template_button_click_36_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](37, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](38, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](39, "mat-table", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](41, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](42, AllFeesComponent_mat_header_cell_42_Template, 2, 4, "mat-header-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](43, AllFeesComponent_mat_cell_43_Template, 2, 3, "mat-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](44, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](45, AllFeesComponent_mat_header_cell_45_Template, 2, 0, "mat-header-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](46, AllFeesComponent_mat_cell_46_Template, 2, 1, "mat-cell", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](47, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](48, AllFeesComponent_mat_header_cell_48_Template, 2, 0, "mat-header-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](49, AllFeesComponent_mat_cell_49_Template, 2, 1, "mat-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](50, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](51, AllFeesComponent_mat_header_cell_51_Template, 2, 0, "mat-header-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](52, AllFeesComponent_mat_cell_52_Template, 2, 1, "mat-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](53, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](54, AllFeesComponent_mat_header_cell_54_Template, 2, 0, "mat-header-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](55, AllFeesComponent_mat_cell_55_Template, 2, 1, "mat-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](56, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](57, AllFeesComponent_mat_header_cell_57_Template, 2, 0, "mat-header-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](58, AllFeesComponent_mat_cell_58_Template, 3, 4, "mat-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](59, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](60, AllFeesComponent_mat_header_cell_60_Template, 2, 0, "mat-header-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](61, AllFeesComponent_mat_cell_61_Template, 2, 1, "mat-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](62, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](63, AllFeesComponent_mat_header_cell_63_Template, 2, 0, "mat-header-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](64, AllFeesComponent_mat_cell_64_Template, 2, 1, "mat-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](65, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](66, AllFeesComponent_mat_header_cell_66_Template, 2, 0, "mat-header-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](67, AllFeesComponent_mat_cell_67_Template, 2, 1, "mat-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](68, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](69, AllFeesComponent_mat_header_cell_69_Template, 2, 0, "mat-header-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](70, AllFeesComponent_mat_cell_70_Template, 2, 1, "mat-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](71, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](72, AllFeesComponent_mat_header_cell_72_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](73, AllFeesComponent_mat_cell_73_Template, 7, 0, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](74, AllFeesComponent_mat_header_row_74_Template, 1, 0, "mat-header-row", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](75, AllFeesComponent_mat_row_75_Template, 1, 2, "mat-row", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](76, AllFeesComponent_div_76_Template, 2, 1, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](77, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](78, "mat-menu", null, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](80, AllFeesComponent_ng_template_80_Template, 30, 1, "ng-template", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](81, "mat-menu", null, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](83, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](84, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](85, "mail_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](87, "Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](88, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](89, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](90, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](92, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](93, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](94, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](95, "chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](97, "Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](98, AllFeesComponent_div_98_Template, 2, 2, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](99, "mat-paginator", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](21);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matMenuTriggerFor", _r28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx.exampleDatabase.isTblLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("length", ctx.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](16, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinner, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuItem, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtZmVlcy5jb21wb25lbnQuc2FzcyJ9 */"] });
class ExampleDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__.DataSource {
    constructor(exampleDatabase, paginator, _sort) {
        super();
        this.exampleDatabase = exampleDatabase;
        this.paginator = paginator;
        this._sort = _sort;
        this.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject('');
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
        this.exampleDatabase.getAllFeess();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.merge)(...displayDataChanges).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(() => {
            // Filter data
            this.filteredData = this.exampleDatabase.data
                .slice()
                .filter((fees) => {
                const searchStr = (fees.rollNo +
                    fees.sName +
                    fees.fType +
                    fees.date +
                    fees.invoiceNo +
                    fees.pType +
                    fees.status).toLowerCase();
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
                case 'rollNo':
                    [propertyA, propertyB] = [a.rollNo, b.rollNo];
                    break;
                case 'sName':
                    [propertyA, propertyB] = [a.sName, b.sName];
                    break;
                // case 'date': [propertyA, propertyB] = [a.date, b.date]; break;
                case 'fType':
                    [propertyA, propertyB] = [a.fType, b.fType];
                    break;
                case 'invoiceNo':
                    [propertyA, propertyB] = [a.invoiceNo, b.invoiceNo];
                    break;
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1));
        });
    }
}


/***/ }),

/***/ 87235:
/*!************************************************************************!*\
  !*** ./src/app/admin/fees/all-fees/dialogs/delete/delete.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteDialogComponent": () => (/* binding */ DeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fees_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../fees.service */ 63556);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);






class DeleteDialogComponent {
    constructor(dialogRef, data, feesService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.feesService = feesService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.feesService.deleteFees(this.data.id);
    }
}
DeleteDialogComponent.??fac = function DeleteDialogComponent_Factory(t) { return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_fees_service__WEBPACK_IMPORTED_MODULE_0__.FeesService)); };
DeleteDialogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: DeleteDialogComponent, selectors: [["app-delete"]], decls: 31, vars: 8, consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "clearfix"], [1, "font-weight-bold"], ["mat-dialog-actions", "", 1, "mb-1"], ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close", "click"], ["mat-flat-button", "", "tabindex", "-1", 3, "click"]], template: function DeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Are you sure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, " Roll No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](20, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Invoice No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DeleteDialogComponent_Template_button_click_27_listener() { return ctx.confirmDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DeleteDialogComponent_Template_button_click_29_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.rollNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.sName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](20, 5, ctx.data.date, "MM/dd/yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", ctx.data.invoiceNo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("mat-dialog-close", 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 35131:
/*!**********************************************************************************!*\
  !*** ./src/app/admin/fees/all-fees/dialogs/form-dialog/form-dialog.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDialogComponent": () => (/* binding */ FormDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _fees_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../fees.model */ 64662);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fees_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fees.service */ 63556);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);

















function FormDialogComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Please enter roll no ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Please enter student name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Select Fees Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Please select date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Enter Invoice Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Select Payment Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Select Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Enter amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
class FormDialogComponent {
    constructor(dialogRef, data, feesService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.feesService = feesService;
        this.fb = fb;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            console.log(data.fees.date);
            this.dialogTitle = data.fees.sName;
            this.fees = data.fees;
        }
        else {
            this.dialogTitle = 'New Fees';
            this.fees = new _fees_model__WEBPACK_IMPORTED_MODULE_0__.Fees({});
        }
        this.feesForm = this.createContactForm();
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
            id: [this.fees.id],
            rollNo: [this.fees.rollNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            sName: [this.fees.sName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            fType: [this.fees.fType, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            date: [
                (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.fees.date, 'yyyy-MM-dd', 'en'),
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            ],
            invoiceNo: [this.fees.invoiceNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            pType: [this.fees.pType, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            status: [this.fees.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            amount: [this.fees.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.feesService.addFees(this.feesForm.getRawValue());
    }
}
FormDialogComponent.??fac = function FormDialogComponent_Factory(t) { return new (t || FormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_fees_service__WEBPACK_IMPORTED_MODULE_1__.FeesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
FormDialogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: FormDialogComponent, selectors: [["app-form-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????ProvidersFeature"]([{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATE_LOCALE, useValue: 'en-GB' }])], decls: 110, vars: 29, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "rollNo", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "sName", "required", ""], ["formControlName", "fType", "required", ""], [3, "value"], ["matInput", "", "formControlName", "date", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "formControlName", "invoiceNo", "required", ""], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["formControlName", "pType", "required", ""], ["formControlName", "status", "required", ""], ["matInput", "", "formControlName", "amount", "required", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "mat-dialog-close", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]], template: function FormDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormDialogComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function FormDialogComponent_Template_form_ngSubmit_11_listener() { return ctx.submit; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "Roll No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](20, FormDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "Student Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](27, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](28, FormDialogComponent_mat_error_28_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](33, "Fees Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36, " Annual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](38, " Tution ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, " Transport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, " Exam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](44, " Library ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](46, " Other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](47, FormDialogComponent_mat_error_47_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](51, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](52, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](53, "mat-datepicker-toggle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](54, "mat-datepicker", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](56, FormDialogComponent_mat_error_56_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](61, "Invoice Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](62, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](64, "receipt");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](65, FormDialogComponent_mat_error_65_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](69, "Payment Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](70, "mat-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](72, " Cash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](74, " Cheque ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](75, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](76, " Online Transfer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](77, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](78, " Draft ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](79, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](80, " Other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](81, FormDialogComponent_mat_error_81_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](82, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](83, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](84, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](85, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](86, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](87, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](89, " Paid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](90, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](91, " Unpaid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](92, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](93, " Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](94, FormDialogComponent_mat_error_94_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](95, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](96, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](97, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](98, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](99, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](100, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](101, "monetization_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](102, FormDialogComponent_mat_error_102_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](103, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](104, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](105, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](106, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormDialogComponent_Template_button_click_106_listener() { return ctx.confirmAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](107, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](108, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormDialogComponent_Template_button_click_108_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](109, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.dialogTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.feesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.feesForm.get("rollNo").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.feesForm.get("sName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "annual");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "tution");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "library");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "other");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.feesForm.get("fType").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.feesForm.get("date").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.feesForm.get("invoiceNo").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "cheque");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "online transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "credit card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "other");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.feesForm.get("pType").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "unpaid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.feesForm.get("status").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.feesForm.get("amount").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("type", ctx.submit)("disabled", !ctx.feesForm.valid)("mat-dialog-close", 1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 64662:
/*!***************************************************!*\
  !*** ./src/app/admin/fees/all-fees/fees.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fees": () => (/* binding */ Fees)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 36362);

class Fees {
    constructor(fees) {
        {
            this.id = fees.id || this.getRandomID();
            this.rollNo = fees.rollNo || '';
            this.sName = fees.sName || '';
            this.fType = fees.fType || '';
            this.date = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.invoiceNo = fees.invoiceNo || '';
            this.pType = fees.pType || '';
            this.status = fees.status || '';
            this.amount = fees.amount || '';
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

/***/ 63556:
/*!*****************************************************!*\
  !*** ./src/app/admin/fees/all-fees/fees.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeesService": () => (/* binding */ FeesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);




class FeesService extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(httpClient) {
        super();
        this.httpClient = httpClient;
        this.API_URL = 'assets/data/fees.json';
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
    getAllFeess() {
        this.subs.sink = this.httpClient.get(this.API_URL).subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + ' ' + error.message);
        });
    }
    addFees(fees) {
        this.dialogData = fees;
        /*  this.httpClient.post(this.API_URL, fees).subscribe(data => {
          this.dialogData = fees;
          },
          (err: HttpErrorResponse) => {
         // error code here
        });*/
    }
    updateFees(fees) {
        this.dialogData = fees;
        /* this.httpClient.put(this.API_URL + fees.id, fees).subscribe(data => {
          this.dialogData = fees;
        },
        (err: HttpErrorResponse) => {
          // error code here
        }
      );*/
    }
    deleteFees(id) {
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
FeesService.??fac = function FeesService_Factory(t) { return new (t || FeesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
FeesService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: FeesService, factory: FeesService.??fac });


/***/ }),

/***/ 72906:
/*!*************************************************************!*\
  !*** ./src/app/admin/fees/edit-fees/edit-fees.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditFeesComponent": () => (/* binding */ EditFeesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);













function EditFeesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "app-breadcrumb", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const breadscrum_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", breadscrum_r12.title)("items", breadscrum_r12.items)("active_item", breadscrum_r12.active);
} }
function EditFeesComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please enter roll no ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function EditFeesComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please enter student name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function EditFeesComponent_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Select Any Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function EditFeesComponent_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Select Fees Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function EditFeesComponent_mat_error_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Select Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function EditFeesComponent_mat_error_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please select date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function EditFeesComponent_mat_error_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Select Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function EditFeesComponent_mat_error_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Enter Invoice Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function EditFeesComponent_mat_error_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Select Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function EditFeesComponent_mat_error_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Enter amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
class EditFeesComponent {
    constructor(fb) {
        this.fb = fb;
        this.formdata = {
            rollNo: '99',
            sName: 'Jenish Shah	',
            fType: 'annual',
            department: 'mathematics',
            date: '2020-01-04T14:22:18Z',
            invoiceNo: 'IN-434454',
            pType: 'cheque',
            status: 'paid',
            amount: '320$',
            duration: 'yearly',
            details: 'Annual Tution Fees',
        };
        this.breadscrums = [
            {
                title: 'Edit Fees',
                items: ['Fees'],
                active: 'Edit Fees',
            },
        ];
        this.feesForm = this.createContactForm();
    }
    onSubmit() {
        console.log('Form Value', this.feesForm.value);
    }
    createContactForm() {
        return this.fb.group({
            rollNo: [this.formdata.rollNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            sName: [this.formdata.sName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            fType: [this.formdata.fType, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            department: [this.formdata.department, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            date: [this.formdata.date, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            invoiceNo: [this.formdata.invoiceNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            pType: [this.formdata.pType, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            status: [this.formdata.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            amount: [this.formdata.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            duration: [this.formdata.duration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            details: [this.formdata.details],
        });
    }
}
EditFeesComponent.??fac = function EditFeesComponent_Factory(t) { return new (t || EditFeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
EditFeesComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: EditFeesComponent, selectors: [["app-edit-fees"]], decls: 143, vars: 33, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-3"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "rollNo", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "sName", "required", ""], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["formControlName", "department", "required", ""], [3, "value"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "fType", "required", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "m-b-20"], [1, "msr-3"], ["aria-label", "Select duration", "formControlName", "duration", "required", ""], ["value", "monthly"], ["value", "yearly"], ["value", "session"], ["matInput", "", "formControlName", "date", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["formControlName", "pType", "required", ""], ["matInput", "", "formControlName", "invoiceNo", "required", ""], ["formControlName", "status", "required", ""], ["matInput", "", "formControlName", "amount", "required", ""], ["matInput", "", "formControlName", "details"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1"], [1, "block-header"], [3, "title", "items", "active_item"]], template: function EditFeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, EditFeesComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Edit Fees Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function EditFeesComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Roll No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, EditFeesComponent_mat_error_19_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Student Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](27, EditFeesComponent_mat_error_27_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Select Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, " Mechanical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, " Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, " Mathematics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, " Computer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](42, EditFeesComponent_mat_error_42_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "Fees Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, " Annual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, " Tution ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, " Transport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, " Exam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, " Library ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59, " Other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](60, EditFeesComponent_mat_error_60_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "mat-label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "Duration:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "mat-radio-group", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "mat-radio-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "mat-radio-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "Yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "mat-radio-button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "Session");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](73, EditFeesComponent_mat_error_73_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "Collection Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](79, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](80, "mat-datepicker-toggle", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](81, "mat-datepicker", null, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](83, EditFeesComponent_mat_error_83_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](87, "Payment Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "mat-select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, " Cash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, " Cheque ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, " Online Transfer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, " Draft ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, " Other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](99, EditFeesComponent_mat_error_99_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "Invoice Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](105, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "receipt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](108, EditFeesComponent_mat_error_108_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "mat-select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, " Paid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, " Unpaid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, " Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](120, EditFeesComponent_mat_error_120_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](126, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, "monetization_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](129, EditFeesComponent_mat_error_129_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](135, "textarea", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](140, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](142, "Cancel");
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
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.feesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("rollNo").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("sName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "mechanical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "science");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("department").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "annual");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "tution");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "library");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("fType").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("duration").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matDatepicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("date").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "cheque");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "online transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "credit card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("pType").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("invoiceNo").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "unpaid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("status").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.feesForm.get("amount").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx.feesForm.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWZlZXMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 4282:
/*!*****************************************************************!*\
  !*** ./src/app/admin/fees/fee-receipt/fee-receipt.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeeReceiptComponent": () => (/* binding */ FeeReceiptComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 87317);




function FeeReceiptComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "app-breadcrumb", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const breadscrum_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", breadscrum_r1.title)("items", breadscrum_r1.items)("active_item", breadscrum_r1.active);
} }
class FeeReceiptComponent {
    constructor() {
        this.breadscrums = [
            {
                title: 'Receipt',
                items: ['Fees'],
                active: 'Receipt',
            },
        ];
    }
    ngOnInit() { }
}
FeeReceiptComponent.??fac = function FeeReceiptComponent_Factory(t) { return new (t || FeeReceiptComponent)(); };
FeeReceiptComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: FeeReceiptComponent, selectors: [["app-fee-receipt"]], decls: 121, vars: 1, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-md-12"], [1, "white-box"], [1, "float-end"], [1, "float-start"], [1, "font-bold"], ["src", "assets/images/invoice_logo.png", "alt", "logo", 1, "logo-default"], [1, "text-muted", "m-l-5"], [1, "float-end", "text-end"], [1, "addr-font-h3", "font-bold"], [1, "font-bold", "addr-font-h4"], [1, "text-muted", "m-l-30"], [1, "m-t-30"], [1, "ml-2", "fa", "fa-calendar"], [1, "label", "col-green", "font-weight-bold"], [1, "table-responsive", "m-t-40"], [1, "table", "table-hover"], [1, "text-center"], [1, "text-end"], [1, "float-end", "m-t-30", "text-end"], [1, "clearfix"], ["mat-raised-button", "", "color", "primary"], ["onclick", "javascript:window.print();", "type", "button", 1, "btn", "btn-default", "btn-outline"], [1, "fa", "fa-print"], [1, "block-header"], [3, "title", "items", "active_item"]], template: function FeeReceiptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FeeReceiptComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "RECEIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "#345766");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "BILL FROM :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, " Aditya University, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, " Opp. Town Hall, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, " Sardar Patel Road, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, " Ahmedabad - 380015 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "BILL TO :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "Jayesh Patel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, " 207, Prem Sagar Appt., ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, " Near Income Tax Office, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, " Ashram Road, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, " Ahmedabad - 380057 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Invoice Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](48, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, " 14th July 2019 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Status :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, "Fees Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "Frequency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "Invoice number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "Annual Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, "Yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "2016-11-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, "#IN-345609865");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, "Tuition Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "2016-11-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "#IN-345604565");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, "$50");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "Sub - Total amount: $150");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "Discount : $10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](106, "Tax (10%) : $14 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](107, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "Total :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](111, " $164");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](112, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](113, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, " Proceed to payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](119, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](120, " Print");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.breadscrums);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWUtcmVjZWlwdC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 22502:
/*!***************************************************!*\
  !*** ./src/app/admin/fees/fees-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeesRoutingModule": () => (/* binding */ FeesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _all_fees_all_fees_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-fees/all-fees.component */ 5667);
/* harmony import */ var _add_fees_add_fees_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-fees/add-fees.component */ 77601);
/* harmony import */ var _edit_fees_edit_fees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-fees/edit-fees.component */ 72906);
/* harmony import */ var _fee_receipt_fee_receipt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fee-receipt/fee-receipt.component */ 4282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: 'all-fees',
        component: _all_fees_all_fees_component__WEBPACK_IMPORTED_MODULE_0__.AllFeesComponent
    },
    {
        path: 'add-fees',
        component: _add_fees_add_fees_component__WEBPACK_IMPORTED_MODULE_1__.AddFeesComponent
    },
    {
        path: 'edit-fees',
        component: _edit_fees_edit_fees_component__WEBPACK_IMPORTED_MODULE_2__.EditFeesComponent
    },
    {
        path: 'fee-receipt',
        component: _fee_receipt_fee_receipt_component__WEBPACK_IMPORTED_MODULE_3__.FeeReceiptComponent
    }
];
class FeesRoutingModule {
}
FeesRoutingModule.??fac = function FeesRoutingModule_Factory(t) { return new (t || FeesRoutingModule)(); };
FeesRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: FeesRoutingModule });
FeesRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](FeesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 45124:
/*!*******************************************!*\
  !*** ./src/app/admin/fees/fees.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeesModule": () => (/* binding */ FeesModule)
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
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-material-file-input */ 37410);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _fees_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fees-routing.module */ 22502);
/* harmony import */ var _all_fees_all_fees_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-fees/all-fees.component */ 5667);
/* harmony import */ var _add_fees_add_fees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-fees/add-fees.component */ 77601);
/* harmony import */ var _edit_fees_edit_fees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-fees/edit-fees.component */ 72906);
/* harmony import */ var _fee_receipt_fee_receipt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fee-receipt/fee-receipt.component */ 4282);
/* harmony import */ var _all_fees_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-fees/dialogs/delete/delete.component */ 87235);
/* harmony import */ var _all_fees_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-fees/dialogs/form-dialog/form-dialog.component */ 35131);
/* harmony import */ var _all_fees_fees_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-fees/fees.service */ 63556);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../shared/components/components.module */ 15626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);






























class FeesModule {
}
FeesModule.??fac = function FeesModule_Factory(t) { return new (t || FeesModule)(); };
FeesModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineNgModule"]({ type: FeesModule });
FeesModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineInjector"]({ providers: [_all_fees_fees_service__WEBPACK_IMPORTED_MODULE_7__.FeesService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _fees_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeesRoutingModule,
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
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_25__.MaterialFileInputModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__.MatRadioModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinnerModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_8__.ComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["????setNgModuleScope"](FeesModule, { declarations: [_all_fees_all_fees_component__WEBPACK_IMPORTED_MODULE_1__.AllFeesComponent,
        _add_fees_add_fees_component__WEBPACK_IMPORTED_MODULE_2__.AddFeesComponent,
        _edit_fees_edit_fees_component__WEBPACK_IMPORTED_MODULE_3__.EditFeesComponent,
        _fee_receipt_fee_receipt_component__WEBPACK_IMPORTED_MODULE_4__.FeeReceiptComponent,
        _all_fees_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__.DeleteDialogComponent,
        _all_fees_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_6__.FormDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _fees_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeesRoutingModule,
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
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_25__.MaterialFileInputModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__.MatRadioModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinnerModule,
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_8__.ComponentsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_fees_fees_module_ts.js.map