import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksFilterSubComponent } from './drinks-filter-sub.component';

describe('DrinksFilterSubComponent', () => {
  let component: DrinksFilterSubComponent;
  let fixture: ComponentFixture<DrinksFilterSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksFilterSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksFilterSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
