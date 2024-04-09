import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReviewManagementComponent } from './dashboard-review-management.component';

describe('DashboardReviewManagementComponent', () => {
  let component: DashboardReviewManagementComponent;
  let fixture: ComponentFixture<DashboardReviewManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardReviewManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardReviewManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
