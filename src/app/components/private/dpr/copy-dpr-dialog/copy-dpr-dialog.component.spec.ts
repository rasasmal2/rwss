import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyDprDialogComponent } from './copy-dpr-dialog.component';

describe('CopyDprDialogComponent', () => {
  let component: CopyDprDialogComponent;
  let fixture: ComponentFixture<CopyDprDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyDprDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyDprDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
