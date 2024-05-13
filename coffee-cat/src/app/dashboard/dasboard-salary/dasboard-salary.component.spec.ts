import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardSalaryComponent } from './dasboard-salary.component';

describe('DasboardSalaryComponent', () => {
  let component: DasboardSalaryComponent;
  let fixture: ComponentFixture<DasboardSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardSalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
