import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowCreateComponent } from './row-create.component';

describe('RowCreateComponent', () => {
  let component: RowCreateComponent;
  let fixture: ComponentFixture<RowCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
