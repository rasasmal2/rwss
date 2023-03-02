import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallDashboardMapComponent } from './overall-dashboard-map.component';

describe('OverallDashboardMapComponent', () => {
  let component: OverallDashboardMapComponent;
  let fixture: ComponentFixture<OverallDashboardMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallDashboardMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallDashboardMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
