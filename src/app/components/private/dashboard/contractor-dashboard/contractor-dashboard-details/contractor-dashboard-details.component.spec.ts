import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorDashboardDetailsComponent } from './contractor-dashboard-details.component';

describe('ContractorDashboardDetailsComponent', () => {
  let component: ContractorDashboardDetailsComponent;
  let fixture: ComponentFixture<ContractorDashboardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorDashboardDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractorDashboardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
