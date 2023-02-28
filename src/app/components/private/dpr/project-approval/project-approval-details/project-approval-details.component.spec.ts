import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectApprovalDetailsComponent } from './project-approval-details.component';

describe('ProjectApprovalDetailsComponent', () => {
  let component: ProjectApprovalDetailsComponent;
  let fixture: ComponentFixture<ProjectApprovalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectApprovalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectApprovalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
