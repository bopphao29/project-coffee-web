import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProductManagementComponent } from './dashboard-product-management.component';

describe('DashboardProductManagementComponent', () => {
  let component: DashboardProductManagementComponent;
  let fixture: ComponentFixture<DashboardProductManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardProductManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProductManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
