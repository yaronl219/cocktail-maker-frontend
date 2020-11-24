import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkMinifiedComponent } from './drink-minified.component';

describe('DrinkMinifiedComponent', () => {
  let component: DrinkMinifiedComponent;
  let fixture: ComponentFixture<DrinkMinifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkMinifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkMinifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
