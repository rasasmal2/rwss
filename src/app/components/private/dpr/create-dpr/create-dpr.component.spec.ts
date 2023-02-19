import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDprComponent } from './create-dpr.component';

describe('CreateDprComponent', () => {
  let component: CreateDprComponent;
  let fixture: ComponentFixture<CreateDprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDprComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
