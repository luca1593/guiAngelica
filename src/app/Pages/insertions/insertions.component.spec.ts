import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertionsComponent } from './insertions.component';

describe('InsertionsComponent', () => {
  let component: InsertionsComponent;
  let fixture: ComponentFixture<InsertionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertionsComponent]
    });
    fixture = TestBed.createComponent(InsertionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
