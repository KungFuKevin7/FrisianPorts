import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageInputComponent } from './search-page-input.component';

describe('SearchPageInputComponent', () => {
  let component: SearchPageInputComponent;
  let fixture: ComponentFixture<SearchPageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPageInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
