import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserManagementComponent } from './dashboard-user-management.component';

describe('DashboardUserManagementComponent', () => {
  let component: DashboardUserManagementComponent;
  let fixture: ComponentFixture<DashboardUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUserManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
