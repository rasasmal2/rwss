import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAndDSubmitComponent } from './d-and-d-submit.component';

describe('DAndDSubmitComponent', () => {
  let component: DAndDSubmitComponent;
  let fixture: ComponentFixture<DAndDSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAndDSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAndDSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
