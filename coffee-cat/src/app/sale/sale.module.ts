import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale/sale.component';
import { SharedModule } from '../shared/shared.module';
import { SaleRoutingModule } from './sale-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SaleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SaleRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class SaleModule { }
