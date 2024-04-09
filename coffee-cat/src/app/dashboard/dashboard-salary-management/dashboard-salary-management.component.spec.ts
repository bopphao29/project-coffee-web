import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSalaryManagementComponent } from './dashboard-salary-management.component';

describe('DashboardSalaryManagementComponent', () => {
  let component: DashboardSalaryManagementComponent;
  let fixture: ComponentFixture<DashboardSalaryManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSalaryManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSalaryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
