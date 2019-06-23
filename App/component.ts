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
    newProduct:Product = new Product;
    get jsonProduct(){
        console.log(this.newProduct);
        return JSON.stringify(this.newProduct);
    }
    addProduct(p:Product){
        console.log("New product: "+this.jsonProduct);
    }
}