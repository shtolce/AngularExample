import { Model } from './repository.model';
import { Product } from "./product.model";
import { ApplicationRef, Component } from "@angular/core";
@Component({
    selector: "app",
    templateUrl: "app/template.html"
})
export class ProductComponent {
    model: Model = new Model();

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }
    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getClasses():string {
        return this.model.getProducts().length ==5 ? "bg-success":"bg-warning";
    }
    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }
    getProducts(): Product[] {
        return this.model.getProducts();
    }
    getProductCount(): number {
        return this.getProducts().length;
    }
    targetName: string = "Kayak";



}