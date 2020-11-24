import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksFilterTopComponent } from './drinks-filter-top.component';

describe('DrinksFilterTopComponent', () => {
  let component: DrinksFilterTopComponent;
  let fixture: ComponentFixture<DrinksFilterTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksFilterTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksFilterTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
