import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleveDeCompteComponent } from './releve-de-compte.component';

describe('ReleveDeCompteComponent', () => {
  let component: ReleveDeCompteComponent;
  let fixture: ComponentFixture<ReleveDeCompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReleveDeCompteComponent]
    });
    fixture = TestBed.createComponent(ReleveDeCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
