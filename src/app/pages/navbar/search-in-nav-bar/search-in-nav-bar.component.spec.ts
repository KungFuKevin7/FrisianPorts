import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInNavBarComponent } from './search-in-nav-bar.component';

describe('SearchInNavBarComponent', () => {
  let component: SearchInNavBarComponent;
  let fixture: ComponentFixture<SearchInNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
