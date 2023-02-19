import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkActegoryComponent } from './work-actegory.component';

describe('WorkActegoryComponent', () => {
  let component: WorkActegoryComponent;
  let fixture: ComponentFixture<WorkActegoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkActegoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkActegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
