import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSubmitComponent } from './project-submit.component';

describe('ProjectSubmitComponent', () => {
  let component: ProjectSubmitComponent;
  let fixture: ComponentFixture<ProjectSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
