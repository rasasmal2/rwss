import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatModalComponent } from './mat-modal.component';

describe('MatModalComponent', () => {
  let component: MatModalComponent;
  let fixture: ComponentFixture<MatModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
