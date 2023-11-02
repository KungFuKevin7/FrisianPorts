import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDataCollectionComponent } from './single-data-collection.component';

describe('SingleDataCollectionComponent', () => {
  let component: SingleDataCollectionComponent;
  let fixture: ComponentFixture<SingleDataCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDataCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDataCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
