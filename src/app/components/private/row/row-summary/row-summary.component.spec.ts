import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSummaryComponent } from './row-summary.component';

describe('RowSummaryComponent', () => {
  let component: RowSummaryComponent;
  let fixture: ComponentFixture<RowSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
