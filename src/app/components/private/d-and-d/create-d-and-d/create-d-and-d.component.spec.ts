import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDAndDComponent } from './create-d-and-d.component';

describe('CreateDAndDComponent', () => {
  let component: CreateDAndDComponent;
  let fixture: ComponentFixture<CreateDAndDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDAndDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDAndDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
