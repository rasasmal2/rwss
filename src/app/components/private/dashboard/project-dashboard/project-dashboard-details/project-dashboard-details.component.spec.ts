import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDashboardDetailsComponent } from './project-dashboard-details.component';

describe('ProjectDashboardDetailsComponent', () => {
  let component: ProjectDashboardDetailsComponent;
  let fixture: ComponentFixture<ProjectDashboardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDashboardDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDashboardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
