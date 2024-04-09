import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardOrderComponent } from './dashboard-order/dashboard-order.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardSavedItemComponent } from './dashboard-saved-item/dashboard-saved-item.component';
import { DashboardProductManagementComponent } from './dashboard-product-management/dashboard-product-management.component';
import { DashboardUserManagementComponent } from './dashboard-user-management/dashboard-user-management.component';
import { DashboardPromotionManagementComponent } from './dashboard-promotion-management/dashboard-promotion-management.component';

const DashboardChildrenRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardIndexComponent
  },
  {
    path: 'saved-items',
    component: DashboardSavedItemComponent
  },
  {
    path: 'profile',
    component: DashboardProfileComponent
  },
  {
    path: 'orders',
    component: DashboardOrderComponent
  },
  {
    path: 'products',
    component: DashboardProductManagementComponent
  },
  {
    path: 'users',
    component: DashboardUserManagementComponent
  },
  {
    path: 'promotions',
    component: DashboardPromotionManagementComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: DashboardChildrenRoute
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
