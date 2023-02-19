import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwrdDashboardComponent } from './pwrd-dashboard.component';

describe('PwrdDashboardComponent', () => {
  let component: PwrdDashboardComponent;
  let fixture: ComponentFixture<PwrdDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwrdDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PwrdDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
