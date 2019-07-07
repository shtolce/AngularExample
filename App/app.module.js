"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const platform_browser_1 = require("@angular/platform-browser");
const component_1 = require('./component');
const forms_1 = require("@angular/forms");
const attr_directive_1 = require("./attr.directive");
const twoway_directive_1 = require("./twoway.directive");
const paif_directive_1 = require("./paif.directive");
const iterator_directive_1 = require("./iterator.directive");
const cellColor_directive_1 = require("./cellColor.directive");
const cellColorSwitcher_directive_1 = require("./cellColorSwitcher.directive");
const productTable_component_1 = require("./productTable.component");
const productForm_component_1 = require("./productForm.component");
const toggleView_component_1 = require("./toggleView.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [component_1.ProductComponent, attr_directive_1.PaAttrDirective, twoway_directive_1.PaModel, paif_directive_1.PaStructureDirective, iterator_directive_1.PaIteratorDirective,
            cellColor_directive_1.PaCellColor, cellColorSwitcher_directive_1.PaCellColorSwitcher, productTable_component_1.ProductTablecomponent, productForm_component_1.ProductFormcomponent, toggleView_component_1.PaToggleView],
        bootstrap: [component_1.ProductComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
