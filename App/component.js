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
const repository_model_1 = require('./repository.model');
const core_1 = require("@angular/core");
let ProductComponent = class ProductComponent {
    constructor(ref) {
        this.model = new repository_model_1.Model();
        this.targetName = "Kayak";
        window.appRef = ref;
        window.model = this.model;
    }
    getProductByPosition(position) {
        return this.model.getProducts()[position];
    }
    getClasses() {
        return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
    }
    getProduct(key) {
        return this.model.getProduct(key);
    }
    getProducts() {
        return this.model.getProducts();
    }
    getProductCount() {
        return this.getProducts().length;
    }
};
ProductComponent = __decorate([
    core_1.Component({
        selector: "app",
        templateUrl: "app/template.html"
    }), 
    __metadata('design:paramtypes', [core_1.ApplicationRef])
], ProductComponent);
exports.ProductComponent = ProductComponent;
