import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksFilterSidebarComponent } from './drinks-filter-sidebar.component';

describe('DrinksFilterSidebarComponent', () => {
  let component: DrinksFilterSidebarComponent;
  let fixture: ComponentFixture<DrinksFilterSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksFilterSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksFilterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
