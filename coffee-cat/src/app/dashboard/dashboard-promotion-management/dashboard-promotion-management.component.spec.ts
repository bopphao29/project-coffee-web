import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPromotionManagementComponent } from './dashboard-promotion-management.component';

describe('DashboardPromotionManagementComponent', () => {
  let component: DashboardPromotionManagementComponent;
  let fixture: ComponentFixture<DashboardPromotionManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPromotionManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPromotionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
