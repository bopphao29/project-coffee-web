import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxSkeletonLoaderModule,
    CartRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class CartModule { }
