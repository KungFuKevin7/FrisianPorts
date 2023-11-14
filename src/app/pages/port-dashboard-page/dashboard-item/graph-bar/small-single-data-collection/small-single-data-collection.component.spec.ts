import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSingleDataCollectionComponent } from './small-single-data-collection.component';

describe('SmallSingleDataCollectionComponent', () => {
  let component: SmallSingleDataCollectionComponent;
  let fixture: ComponentFixture<SmallSingleDataCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallSingleDataCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallSingleDataCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
