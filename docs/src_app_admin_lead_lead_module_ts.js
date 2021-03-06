"use strict";
(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_admin_lead_lead_module_ts"],{

/***/ 97131:
/*!*************************************************************!*\
  !*** ./src/app/admin/lead/all-leads/all-leads.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllLeadsComponent": () => (/* binding */ AllLeadsComponent),
/* harmony export */   "ExampleDataSource": () => (/* binding */ ExampleDataSource)
/* harmony export */ });
/* harmony import */ var _leads_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leads.service */ 8693);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs/form-dialog/form-dialog.component */ 93460);
/* harmony import */ var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/delete/delete.component */ 96214);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _dialogs_dialogs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialogs/dialogs.component */ 65331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 65590);

























const _c0 = ["filter"];
function AllLeadsComponent_mat_header_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllLeadsComponent_mat_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](row_r28.name);
} }
function AllLeadsComponent_mat_header_cell_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngClass", "tbl-col-width-per-6");
} }
function AllLeadsComponent_mat_cell_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r29.title, " ");
} }
function AllLeadsComponent_mat_header_cell_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "cmp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllLeadsComponent_mat_cell_40_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllLeadsComponent_mat_cell_40_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r32); const row_r30 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r31.onContextMenu($event, row_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r30.company, " ");
} }
function AllLeadsComponent_mat_header_cell_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllLeadsComponent_mat_cell_43_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllLeadsComponent_mat_cell_43_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r35); const row_r33 = restoredCtx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r34.onContextMenu($event, row_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r33.phone, " ");
} }
function AllLeadsComponent_mat_header_cell_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllLeadsComponent_mat_cell_46_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllLeadsComponent_mat_cell_46_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r38); const row_r36 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r37.onContextMenu($event, row_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r36.mobile, "");
} }
function AllLeadsComponent_mat_header_cell_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllLeadsComponent_mat_cell_49_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllLeadsComponent_mat_cell_49_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r41); const row_r39 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r40.onContextMenu($event, row_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r39.email, " ");
} }
function AllLeadsComponent_mat_header_cell_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "leadstatus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllLeadsComponent_mat_cell_52_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllLeadsComponent_mat_cell_52_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r44); const row_r42 = restoredCtx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r43.onContextMenu($event, row_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r42.leadstatus, " ");
} }
function AllLeadsComponent_mat_header_cell_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "owner ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllLeadsComponent_mat_cell_55_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("contextmenu", function AllLeadsComponent_mat_cell_55_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r47); const row_r45 = restoredCtx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r46.onContextMenu($event, row_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const row_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", row_r45.owner, " ");
} }
function AllLeadsComponent_mat_header_cell_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-header-cell", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllLeadsComponent_mat_cell_58_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-cell", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllLeadsComponent_mat_cell_58_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllLeadsComponent_mat_cell_58_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r52); const row_r48 = restoredCtx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r51.editCall(row_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllLeadsComponent_mat_cell_58_Template_button_click_4_listener($event) { return $event.stopPropagation(); })("click", function AllLeadsComponent_mat_cell_58_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r52); const row_r48 = restoredCtx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r54.deleteItem(row_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AllLeadsComponent_mat_header_row_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "mat-header-row");
} }
function AllLeadsComponent_mat_row_60_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-row", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllLeadsComponent_mat_row_60_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r57); const row_r55 = restoredCtx.$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r56.editCall(row_r55); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????styleProp"]("cursor", "pointer");
} }
function AllLeadsComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "mat-progress-spinner", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("diameter", 40);
} }
function AllLeadsComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllLeadsComponent_ng_template_65_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r59.addNew(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "add_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, "Add Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllLeadsComponent_ng_template_65_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r60); const item_r58 = restoredCtx.item; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r61.editCall(item_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](7, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9, "Edit Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllLeadsComponent_ng_template_65_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r60); const item_r58 = restoredCtx.item; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r62.deleteItem(item_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](14, "Delete Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllLeadsComponent_ng_template_65_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r60); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r63.refresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](19, "Refresh Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](22, "no_encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](24, "Disable");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](27, "list_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](29, " Nested Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matMenuTriggerFor", _r25);
} }
function AllLeadsComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " No results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????styleProp"]("display", ctx_r26.dataSource.renderedData.length == 0 ? "" : "none");
} }
const _c1 = function () { return [5, 10, 25, 100]; };
class AllLeadsComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeOnDestroyAdapter {
    constructor(httpClient, dialog, studentsService, snackBar, router) {
        super();
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.studentsService = studentsService;
        this.snackBar = snackBar;
        this.router = router;
        this.displayedColumns = [
            "name",
            "title",
            "company",
            "phone",
            "mobile",
            "email",
            "leadstatus",
            "owner",
            "actions"
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__.SelectionModel(true, []);
        this.breadscrums = [
            {
                title: "All leads",
                items: ["Leads"],
                active: "All leads",
            },
        ];
        this.contextMenuPosition = { x: "0px", y: "0px" };
    }
    ngOnInit() {
        this.loadData();
    }
    refresh() {
        this.loadData();
    }
    addNew() {
        let tempDirection;
        if (localStorage.getItem("isRtl") === "true") {
            tempDirection = "rtl";
        }
        else {
            tempDirection = "ltr";
        }
        const dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogComponent, {
            data: {
                students: this.students,
                action: "add",
            },
            direction: tempDirection,
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataServicex
                this.exampleDatabase.dataChange.value.unshift(this.studentsService.getDialogData());
                this.refreshTable();
                this.showNotification("snackbar-success", "Add Record Successfully...!!!", "bottom", "center");
            }
        });
    }
    editCall(row) {
        this.id = row.name;
        let tempDirection;
        if (localStorage.getItem("isRtl") === "true") {
            tempDirection = "rtl";
        }
        else {
            tempDirection = "ltr";
        }
        this.router.navigate(['extra-pages/profile']);
        // const dialogRef = this.dialog.open(FormDialogComponent, {
        //   data: {
        //     students: row,
        //     action: "edit",
        //   },
        //   direction: tempDirection,
        // });
        // this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
        //   if (result === 1) {
        //     // When using an edit things are little different, firstly we find record inside DataService by id
        //     const foundIndex = this.exampleDatabase.dataChange.value.findIndex(
        //       (x) => x.name === this.id
        //     );
        //     // Then you update that record using data from dialogData (values you enetered)
        //     this.exampleDatabase.dataChange.value[foundIndex] =
        //       this.studentsService.getDialogData();
        //     // And lastly refresh table
        //     this.refreshTable();
        //     this.showNotification(
        //       "black",
        //       "Edit Record Successfully...!!!",
        //       "bottom",
        //       "center"
        //     );
        //   }
        // });
    }
    deleteItem(row) {
        this.id = row.id;
        let tempDirection;
        if (localStorage.getItem("isRtl") === "true") {
            tempDirection = "rtl";
        }
        else {
            tempDirection = "ltr";
        }
        const dialogRef = this.dialog.open(_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
            data: row,
            direction: tempDirection,
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex((x) => x.name === this.id);
                // for delete we use splice in order to remove single object from DataService
                this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
                this.refreshTable();
                this.showNotification("snackbar-danger", "Delete Record Successfully...!!!", "bottom", "center");
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
        this.showNotification("snackbar-danger", totalSelect + " Record Delete Successfully...!!!", "bottom", "center");
    }
    loadData() {
        this.exampleDatabase = new _leads_service__WEBPACK_IMPORTED_MODULE_0__.LeadsService(this.httpClient);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        this.subs.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(this.filter.nativeElement, "keyup").subscribe(() => {
            if (!this.dataSource) {
                return;
            }
            this.dataSource.filter = this.filter.nativeElement.value;
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this.snackBar.open(text, "", {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName,
        });
    }
    // context menu
    onContextMenu(event, item) {
        event.preventDefault();
        this.contextMenuPosition.x = event.clientX + "px";
        this.contextMenuPosition.y = event.clientY + "px";
        this.contextMenu.menuData = { item: item };
        this.contextMenu.menu.focusFirstItem("mouse");
        this.contextMenu.openMenu();
    }
    addNewEvent() {
        let dialogRef = this.dialog.open(_dialogs_dialogs_component__WEBPACK_IMPORTED_MODULE_4__.DialogsComponent);
        return dialogRef;
        // dialogRef.afterClosed().subscribe(res=>{
        //   console.log(`dialog result:${res}`)
        // })
    }
}
AllLeadsComponent.??fac = function AllLeadsComponent_Factory(t) { return new (t || AllLeadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_leads_service__WEBPACK_IMPORTED_MODULE_0__.LeadsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router)); };
AllLeadsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: AllLeadsComponent, selectors: [["app-all-leads"]], viewQuery: function AllLeadsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.filter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.contextMenu = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["????InheritDefinitionFeature"]], decls: 86, vars: 15, consts: [[1, "content"], [1, "content-block"], [1, "row"], [1, "col-md-12", "col-sm-12"], [1, "card"], [1, "card-body"], [1, "panel-body"], [1, "m-b-25"], [1, "col-sm-6"], [1, "col-sm-4"], [1, "materialTableHeader", "bg-transparent"], [1, "header-buttons-left", "ml-0"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], [1, "col-sm-2"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "name"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "title"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "company"], [3, "contextmenu", 4, "matCellDef"], ["matColumnDef", "phone"], ["matColumnDef", "mobile"], ["matColumnDef", "email"], ["matColumnDef", "leadstatus"], ["matColumnDef", "owner"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["contextMenu", "matMenu"], ["matMenuContent", ""], ["nestedmenu", "matMenu"], ["mat-menu-item", ""], ["class", "no-results", 3, "display", 4, "ngIf"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-sort-header", ""], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", ""], [3, "contextmenu"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "click"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"], ["matRipple", "", 3, "click"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "disabled", ""], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "no-results"]], template: function AllLeadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](14, "My Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](21, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](22, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AllLeadsComponent_Template_button_click_26_listener() { return ctx.addNewEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](27, " Add Leads ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "mat-table", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](32, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](33, AllLeadsComponent_mat_header_cell_33_Template, 2, 0, "mat-header-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](34, AllLeadsComponent_mat_cell_34_Template, 2, 1, "mat-cell", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](35, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](36, AllLeadsComponent_mat_header_cell_36_Template, 2, 1, "mat-header-cell", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](37, AllLeadsComponent_mat_cell_37_Template, 2, 1, "mat-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](38, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](39, AllLeadsComponent_mat_header_cell_39_Template, 2, 0, "mat-header-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](40, AllLeadsComponent_mat_cell_40_Template, 2, 1, "mat-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](41, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](42, AllLeadsComponent_mat_header_cell_42_Template, 2, 0, "mat-header-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](43, AllLeadsComponent_mat_cell_43_Template, 2, 1, "mat-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](44, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](45, AllLeadsComponent_mat_header_cell_45_Template, 2, 0, "mat-header-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](46, AllLeadsComponent_mat_cell_46_Template, 2, 1, "mat-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](47, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](48, AllLeadsComponent_mat_header_cell_48_Template, 2, 0, "mat-header-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](49, AllLeadsComponent_mat_cell_49_Template, 2, 1, "mat-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](50, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](51, AllLeadsComponent_mat_header_cell_51_Template, 2, 0, "mat-header-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](52, AllLeadsComponent_mat_cell_52_Template, 2, 1, "mat-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](53, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](54, AllLeadsComponent_mat_header_cell_54_Template, 2, 0, "mat-header-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](55, AllLeadsComponent_mat_cell_55_Template, 2, 1, "mat-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](56, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](57, AllLeadsComponent_mat_header_cell_57_Template, 2, 0, "mat-header-cell", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](58, AllLeadsComponent_mat_cell_58_Template, 7, 0, "mat-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](59, AllLeadsComponent_mat_header_row_59_Template, 1, 0, "mat-header-row", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](60, AllLeadsComponent_mat_row_60_Template, 1, 2, "mat-row", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](61, AllLeadsComponent_div_61_Template, 2, 1, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](62, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](63, "mat-menu", null, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](65, AllLeadsComponent_ng_template_65_Template, 30, 1, "ng-template", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](66, "mat-menu", null, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](68, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](69, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](70, "mail_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](72, "Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](73, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](74, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](75, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](77, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](78, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](79, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](80, "chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](82, "Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](83, AllLeadsComponent_div_83_Template, 2, 2, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](84, "mat-paginator", 47, 48);
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
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.exampleDatabase.isTblLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????styleProp"]("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matMenuTriggerFor", _r23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx.exampleDatabase.isTblLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("length", ctx.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](14, _c1));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtbGVhZHMuY29tcG9uZW50LnNhc3MifQ== */"] });
class ExampleDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__.DataSource {
    constructor(exampleDatabase, paginator, _sort) {
        super();
        this.exampleDatabase = exampleDatabase;
        this.paginator = paginator;
        this._sort = _sort;
        this.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject("");
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.merge)(...displayDataChanges).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(() => {
            // Filter data
            this.filteredData = this.exampleDatabase.data
                .slice()
                .filter((students) => {
                const searchStr = (students.name +
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
        if (!this._sort.active || this._sort.direction === "") {
            return data;
        }
        return data.sort((a, b) => {
            let propertyA = "";
            let propertyB = "";
            switch (this._sort.active) {
                case "name":
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
                case "title":
                    [propertyA, propertyB] = [a.title, b.title];
                    break;
                case "company":
                    [propertyA, propertyB] = [a.company, b.company];
                    break;
                case "mobile":
                    [propertyA, propertyB] = [a.mobile, b.mobile];
                    break;
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (this._sort.direction === "asc" ? 1 : -1));
        });
    }
}


/***/ }),

/***/ 96214:
/*!*************************************************************************!*\
  !*** ./src/app/admin/lead/all-leads/dialogs/delete/delete.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteDialogComponent": () => (/* binding */ DeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _leads_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../leads.service */ 8693);
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
DeleteDialogComponent.??fac = function DeleteDialogComponent_Factory(t) { return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_leads_service__WEBPACK_IMPORTED_MODULE_0__.LeadsService)); };
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

/***/ 93460:
/*!***********************************************************************************!*\
  !*** ./src/app/admin/lead/all-leads/dialogs/form-dialog/form-dialog.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDialogComponent": () => (/* binding */ FormDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _leads_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../leads.model */ 67001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _leads_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../leads.service */ 8693);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);














function FormDialogComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Select Any company ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " phone is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Mobile is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Please select leadstatus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormDialogComponent_mat_error_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Please enter a valid owner ");
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
            this.students = new _leads_model__WEBPACK_IMPORTED_MODULE_0__.Leads({});
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
            name: [this.students.name],
            title: [this.students.title],
            company: [this.students.company],
            phone: [this.students.phone],
            leadstatus: [this.students.leadstatus],
            owner: [this.students.owner],
            email: [
                this.students.email,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]
            ],
            mobile: [this.students.mobile],
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
FormDialogComponent.??fac = function FormDialogComponent_Factory(t) { return new (t || FormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_leads_service__WEBPACK_IMPORTED_MODULE_1__.LeadsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
FormDialogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: FormDialogComponent, selectors: [["app-form-dialog"]], decls: 100, vars: 23, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "name", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["formControlName", "company", "required", ""], [3, "value"], ["formControlName", "gender", "required", ""], ["matInput", "", "formControlName", "mobile", "type", "number"], ["matInput", "", "formControlName", "leadstatus", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "owner", "required", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "mat-dialog-close", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]], template: function FormDialogComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "school");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](20, FormDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](27, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](28, FormDialogComponent_mat_error_28_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](33, "Select company");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36, " Mechanical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](38, " Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, " Mathematics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, " Computer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](44, " Civil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](45, FormDialogComponent_mat_error_45_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](49, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](52, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](53, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](54, " Female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](56, " Other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](57, FormDialogComponent_mat_error_57_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](62, "mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](63, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](65, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](66, FormDialogComponent_mat_error_66_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](70, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](71, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](72, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](73, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](74, FormDialogComponent_mat_error_74_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](75, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](76, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](77, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](79, "Joining date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](80, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](81, "mat-datepicker-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](82, "mat-datepicker", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](84, FormDialogComponent_mat_error_84_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](85, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](86, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](87, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](88, "owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](89, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](90, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](91, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](92, FormDialogComponent_mat_error_92_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](93, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](94, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](95, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](96, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormDialogComponent_Template_button_click_96_listener() { return ctx.confirmAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](97, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](98, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormDialogComponent_Template_button_click_98_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](99, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.dialogTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.stdForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.stdForm.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.stdForm.get("email").hasError("required"));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.stdForm.get("company").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "male");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "female");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", "other");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.stdForm.get("phone").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.stdForm.get("mobile").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.stdForm.get("email").hasError("required") || ctx.stdForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matDatepicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.stdForm.get("leadstatus").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.stdForm.get("owner").hasError("required") || ctx.stdForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("type", ctx.submit)("disabled", !ctx.stdForm.valid)("mat-dialog-close", 1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepicker, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 67001:
/*!*****************************************************!*\
  !*** ./src/app/admin/lead/all-leads/leads.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Leads": () => (/* binding */ Leads)
/* harmony export */ });
class Leads {
    constructor(leads) {
        {
            this.name = leads.name || '';
            this.title = leads.title || '';
            this.company = leads.company || '';
            this.phone = leads.department || '';
            this.mobile = leads.mobile || '';
            this.email = leads.email || '';
            this.leadstatus = leads.leadstatus || '';
            this.owner = leads.gender || '';
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

/***/ 8693:
/*!*******************************************************!*\
  !*** ./src/app/admin/lead/all-leads/leads.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadsService": () => (/* binding */ LeadsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);




class LeadsService extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(httpClient) {
        super();
        this.httpClient = httpClient;
        this.API_URL = 'assets/data/leads.json';
        this.isTblLoading = true;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    getAllStudentss() {
        this.subs.sink = this.httpClient.get(this.API_URL).subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + ' ' + error.message);
        });
    }
    addStudents(leads) {
        this.dialogData = leads;
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
LeadsService.??fac = function LeadsService_Factory(t) { return new (t || LeadsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
LeadsService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: LeadsService, factory: LeadsService.??fac, providedIn: 'root' });


/***/ }),

/***/ 65331:
/*!*********************************************************!*\
  !*** ./src/app/admin/lead/dialogs/dialogs.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogsComponent": () => (/* binding */ DialogsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 43365);








class DialogsComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
    }
    confirmAdd() {
    }
}
DialogsComponent.??fac = function DialogsComponent_Factory(t) { return new (t || DialogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
DialogsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DialogsComponent, selectors: [["app-dialogs"]], decls: 63, vars: 1, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "required", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]], template: function DialogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Create new lead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DialogsComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function DialogsComponent_Template_form_ngSubmit_11_listener() { return ctx.submit; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Lead status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DialogsComponent_Template_button_click_59_listener() { return ctx.confirmAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DialogsComponent_Template_button_click_61_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.stdForm);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2dzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 37210:
/*!***************************************************!*\
  !*** ./src/app/admin/lead/lead-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadRoutingModule": () => (/* binding */ LeadRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _lead_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lead.component */ 25406);
/* harmony import */ var _opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opportunity/opportunity.component */ 93380);
/* harmony import */ var _all_leads_all_leads_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-leads/all-leads.component */ 97131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const route = [
    {
        path: 'lead',
        component: _lead_component__WEBPACK_IMPORTED_MODULE_0__.LeadComponent
    },
    {
        path: 'all-leads',
        component: _all_leads_all_leads_component__WEBPACK_IMPORTED_MODULE_2__.AllLeadsComponent
    },
    {
        path: 'opportunity',
        component: _opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_1__.OpportunityComponent
    },
];
class LeadRoutingModule {
}
LeadRoutingModule.??fac = function LeadRoutingModule_Factory(t) { return new (t || LeadRoutingModule)(); };
LeadRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: LeadRoutingModule });
LeadRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(route)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](LeadRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 25406:
/*!**********************************************!*\
  !*** ./src/app/admin/lead/lead.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadComponent": () => (/* binding */ LeadComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _dialogs_dialogs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogs/dialogs.component */ 65331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _tables_ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tables/ngx-datatable/ngx-datatable.component */ 99961);








const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
class LeadComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.numbers = [];
        // ngAfterViewInit(): void {
        //   this.dataSources.sort=this.sort;
        //   this.dataSources.paginator=this.paginator
        // }
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSources = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(ELEMENT_DATA);
        for (let i = 0; i <= 1000; i++) {
            this.numbers.push(i);
        }
    }
    ngOnInit() {
        throw new Error('Method not implemented.');
    }
    //dialogs
    addNewEvent() {
        let dialogRef = this.dialog.open(_dialogs_dialogs_component__WEBPACK_IMPORTED_MODULE_0__.DialogsComponent);
        return dialogRef;
        // dialogRef.afterClosed().subscribe(res=>{
        //   console.log(`dialog result:${res}`)
        // })
    }
    applyFilteronTable(event) {
        this.dataSources.filter = event.trim().toLowerCase();
    }
}
LeadComponent.??fac = function LeadComponent_Factory(t) { return new (t || LeadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
LeadComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: LeadComponent, selectors: [["app-lead"]], viewQuery: function LeadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 19, vars: 0, consts: [[1, "content"], [1, "content-block"], [1, "row"], [1, "col-md-12", "col-sm-12"], [1, "card"], [1, "card-body"], [1, "panel-body"], [1, "m-b-25"], [1, "col-sm-10"], [1, "col-sm-2"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function LeadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, " My Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LeadComponent_Template_button_click_16_listener() { return ctx.addNewEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "Add Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](18, "app-ngx-datatable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _tables_ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_1__.NgxDatatableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 71855:
/*!*******************************************!*\
  !*** ./src/app/admin/lead/lead.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadModule": () => (/* binding */ LeadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _lead_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lead-routing.module */ 37210);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _lead_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lead.component */ 25406);
/* harmony import */ var src_app_tables_tables_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tables/tables.module */ 81439);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/scrolling */ 95752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _dialogs_dialogs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/dialogs.component */ 65331);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./opportunity/opportunity.component */ 93380);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _all_leads_all_leads_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-leads/all-leads.component */ 97131);
/* harmony import */ var _all_leads_leads_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-leads/leads.service */ 8693);
/* harmony import */ var _all_leads_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-leads/dialogs/form-dialog/form-dialog.component */ 93460);
/* harmony import */ var _all_leads_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all-leads/dialogs/delete/delete.component */ 96214);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);

























class LeadModule {
}
LeadModule.??fac = function LeadModule_Factory(t) { return new (t || LeadModule)(); };
LeadModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineNgModule"]({ type: LeadModule });
LeadModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineInjector"]({ providers: [_all_leads_leads_service__WEBPACK_IMPORTED_MODULE_6__.LeadsService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _lead_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeadRoutingModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            src_app_tables_tables_module__WEBPACK_IMPORTED_MODULE_2__.TablesModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOptionModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ScrollingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["????setNgModuleScope"](LeadModule, { declarations: [_lead_component__WEBPACK_IMPORTED_MODULE_1__.LeadComponent,
        _dialogs_dialogs_component__WEBPACK_IMPORTED_MODULE_3__.DialogsComponent,
        _opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_4__.OpportunityComponent,
        _all_leads_all_leads_component__WEBPACK_IMPORTED_MODULE_5__.AllLeadsComponent,
        _all_leads_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_7__.FormDialogComponent,
        _all_leads_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_8__.DeleteDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _lead_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeadRoutingModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        src_app_tables_tables_module__WEBPACK_IMPORTED_MODULE_2__.TablesModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOptionModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ScrollingModule] }); })();


/***/ }),

/***/ 93380:
/*!*****************************************************************!*\
  !*** ./src/app/admin/lead/opportunity/opportunity.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpportunityComponent": () => (/* binding */ OpportunityComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class OpportunityComponent {
    constructor() { }
    ngOnInit() {
    }
}
OpportunityComponent.??fac = function OpportunityComponent_Factory(t) { return new (t || OpportunityComponent)(); };
OpportunityComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OpportunityComponent, selectors: [["app-opportunity"]], decls: 4, vars: 0, consts: [[1, "content"], [1, "content-block"]], template: function OpportunityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "opportunity works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcHBvcnR1bml0eS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_lead_lead_module_ts.js.map