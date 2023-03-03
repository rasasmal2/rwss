import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStatusTrackingComponent } from './project-status-tracking.component';

describe('ProjectStatusTrackingComponent', () => {
  let component: ProjectStatusTrackingComponent;
  let fixture: ComponentFixture<ProjectStatusTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectStatusTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectStatusTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
