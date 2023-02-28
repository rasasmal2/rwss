import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAndDApprovalComponent } from './d-and-d-approval.component';

describe('DAndDApprovalComponent', () => {
  let component: DAndDApprovalComponent;
  let fixture: ComponentFixture<DAndDApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAndDApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAndDApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
