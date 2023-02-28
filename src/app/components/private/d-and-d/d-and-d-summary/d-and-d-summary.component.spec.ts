import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAndDSummaryComponent } from './d-and-d-summary.component';

describe('DAndDSummaryComponent', () => {
  let component: DAndDSummaryComponent;
  let fixture: ComponentFixture<DAndDSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAndDSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAndDSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
