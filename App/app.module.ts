import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import {ProductComponent} from './component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {PaAttrDirective} from "./attr.directive";
import { PaModel} from "./twoway.directive";
import { PaStructureDirective } from "./paif.directive";
import { PaIteratorDirective } from "./iterator.directive";
import { PaCellColor } from "./cellColor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";
import { ProductTablecomponent} from "./productTable.component";
import {ProductFormcomponent} from "./productForm.component";
import { PaToggleView } from "./toggleView.component";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { LOCALE_ID } from "@angular/core";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { DiscountService } from "./discount.service";
import { PaDiscountPipe } from "./discount.pipe";
import { PaDiscountAmountDirective } from "./discountAmount.directive";
import { SimpleDataSource } from "./datasource.model";
import { Model } from "./repository.model";
import { LogService, LOG_SERVICE, SpecialLogService, LogLevel } from "./log.service";
let logger = new LogService();
logger.minimumLevel = LogLevel.DEBUG;
@NgModule({
    imports: [ BrowserModule,FormsModule,ReactiveFormsModule ],
    declarations: [ProductComponent, PaAttrDirective, PaModel,PaStructureDirective, PaIteratorDirective,
                   PaCellColor, PaCellColorSwitcher,ProductTablecomponent,ProductFormcomponent, PaToggleView,
                   PaAddTaxPipe,PaCategoryFilterPipe,PaDiscountDisplayComponent, PaDiscountEditorComponent,
                   PaDiscountPipe,PaDiscountAmountDirective],
    providers: [{ provide: LOCALE_ID, useValue: "ru-RU" },DiscountService,SimpleDataSource, Model,
                { provide: LogService, useValue: logger } ],
    bootstrap: [ProductComponent]
})
export class AppModule {}