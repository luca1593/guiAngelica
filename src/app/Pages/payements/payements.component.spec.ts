import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementsComponent } from './payements.component';

describe('PayementsComponent', () => {
  let component: PayementsComponent;
  let fixture: ComponentFixture<PayementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayementsComponent]
    });
    fixture = TestBed.createComponent(PayementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
