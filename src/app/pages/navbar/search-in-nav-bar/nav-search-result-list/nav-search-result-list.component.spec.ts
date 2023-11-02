import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSearchResultListComponent } from './nav-search-result-list.component';

describe('NavSearchResultListComponent', () => {
  let component: NavSearchResultListComponent;
  let fixture: ComponentFixture<NavSearchResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSearchResultListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSearchResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
