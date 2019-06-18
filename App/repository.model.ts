import { Product } from './product.model';
import { SimpleDataSource } from './datasource.mode';
export class Model{
    private dataSource:SimpleDataSource;
    private products:Product[];
    private locator=(p:Product,id:number)=>p.id==id;
    constructor(){
        


    }


}