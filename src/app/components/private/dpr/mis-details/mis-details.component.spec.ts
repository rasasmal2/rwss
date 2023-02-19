import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDetailsComponent } from './mis-details.component';

describe('MisDetailsComponent', () => {
  let component: MisDetailsComponent;
  let fixture: ComponentFixture<MisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
