import {Component,Input,ViewChildren, QueryList} from "@angular/core";
import {Product} from "./product.model";
import {Model} from "./repository.model";
import { PaCellColor } from "./cellColor.directive";
import { DiscountService } from "./discount.service";
@Component({
    selector:"paProductTable",
    templateUrl: "app/productTable.component.html"

})

export class ProductTablecomponent{
//    discounter: DiscountService = new DiscountService();
    @Input("model")
    dataModel:Model;
    getProduct(key:number):Product{
        return this.dataModel.getProduct(key);
    }
    getProducts():Product[]{
        return this.dataModel.getProducts();
    }
    deleteProduct(key:number){
        return this.dataModel.deleteProduct(key);
    }
    dateObject: Date = new Date(2020, 1, 20);
    dateString: string = "2020-02-20T00:00:00.000Z";
    dateNumber: number = 1582156800000;
    showTable: boolean = true;
    @ViewChildren(PaCellColor)
    viewChildren: QueryList<PaCellColor>;
    ngAfterViewInit() {
        this.viewChildren.changes.subscribe(() => {
            this.updateViewChildren();
        });
        this.updateViewChildren();
    }
    private updateViewChildren() {
        setTimeout(() => {
            this.viewChildren.forEach((child, index) => {
                child.setColor(index % 2 ? true : false);
            })
        }, 0);
    }
}