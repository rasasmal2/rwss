import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDashboartTableComponent } from './project-dashboart-table.component';

describe('ProjectDashboartTableComponent', () => {
  let component: ProjectDashboartTableComponent;
  let fixture: ComponentFixture<ProjectDashboartTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDashboartTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDashboartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
