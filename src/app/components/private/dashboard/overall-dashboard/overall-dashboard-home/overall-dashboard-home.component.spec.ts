import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallDashboardHomeComponent } from './overall-dashboard-home.component';

describe('OverallDashboardHomeComponent', () => {
  let component: OverallDashboardHomeComponent;
  let fixture: ComponentFixture<OverallDashboardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallDashboardHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
