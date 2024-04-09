import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleComponent } from './sale/sale.component';
const routes: Routes = [
  {
    path: '',
    component: SaleComponent
  },
  // {
  //   path: ':id',
  //   component: ProductDetailsComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
