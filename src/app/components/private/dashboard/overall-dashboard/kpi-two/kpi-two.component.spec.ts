import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiTwoComponent } from './kpi-two.component';

describe('KpiTwoComponent', () => {
  let component: KpiTwoComponent;
  let fixture: ComponentFixture<KpiTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpiTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
