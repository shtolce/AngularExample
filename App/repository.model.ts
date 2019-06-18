import { Product } from './product.model';
import { SimpleDataSource } from './datasource.mode';
export class Model{
    private dataSource:SimpleDataSource;
    private products:Product[];
    private locator=(p:Product,id:number)=>p.id==id;
    constructor(){
        this.dataSource=new SimpleDataSource();
        this.products=new Array<Product>();
        this.dataSource.getData().forEach(p=>this.products.push(p));
    }
    getProducts():Product[]{
        return this.products;
    }
    getProduct(id :number):Product{
        this.products.
        return this.products.find(p=>this.locator(p,id));
    }



}