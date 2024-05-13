import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardEmployeeComponent } from './dasboard-employee.component';

describe('DasboardEmployeeComponent', () => {
  let component: DasboardEmployeeComponent;
  let fixture: ComponentFixture<DasboardEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
