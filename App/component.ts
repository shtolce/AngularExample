import { Model } from './repository.model';
import { Product } from "./product.model";
import { ApplicationRef, Component } from "@angular/core";
@Component({
    selector: "app",
    templateUrl: "app/template.html"
})
export class ProductComponent {
    model: Model = new Model();

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }
    getProducts(): Product[] {
        return this.model.getProducts();
    }
    selectedProduct:string;
    getSelected(product:Product):boolean{
        console.log(this.selectedProduct);
        return product.name == this.selectedProduct;
    }


}