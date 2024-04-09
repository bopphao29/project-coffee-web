import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatMenuModule } from '@angular/material/menu';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardSavedItemComponent } from './dashboard-saved-item/dashboard-saved-item.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardOrderComponent } from './dashboard-order/dashboard-order.component';
import { DashboardUserManagementComponent } from './dashboard-user-management/dashboard-user-management.component';
import { DashboardPromotionManagementComponent } from './dashboard-promotion-management/dashboard-promotion-management.component';
import { DashboardProductManagementComponent } from './dashboard-product-management/dashboard-product-management.component';
import { DashboardEmployeeManagementComponent } from './dashboard-employee-management/dashboard-employee-management.component';
import { DashboardReviewManagementComponent } from './dashboard-review-management/dashboard-review-management.component';
import { DashboardSalaryManagementComponent } from './dashboard-salary-management/dashboard-salary-management.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardIndexComponent,
    DashboardSavedItemComponent,
    DashboardProfileComponent,
    DashboardOrderComponent,
    DashboardUserManagementComponent,
    DashboardPromotionManagementComponent,
    DashboardProductManagementComponent,
    DashboardEmployeeManagementComponent,
    DashboardReviewManagementComponent,
    DashboardSalaryManagementComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, MatMenuModule, NgxPaginationModule]
})
export class DashboardModule {}
