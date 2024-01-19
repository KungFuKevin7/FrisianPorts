import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultPortComponent } from './search-result-port.component';

describe('SearchResultPortComponent', () => {
  let component: SearchResultPortComponent;
  let fixture: ComponentFixture<SearchResultPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultPortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultPortComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
