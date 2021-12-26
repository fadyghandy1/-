import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentNewsdetailsComponent } from './department-newsdetails.component';

describe('DepartmentNewsdetailsComponent', () => {
  let component: DepartmentNewsdetailsComponent;
  let fixture: ComponentFixture<DepartmentNewsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentNewsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentNewsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
