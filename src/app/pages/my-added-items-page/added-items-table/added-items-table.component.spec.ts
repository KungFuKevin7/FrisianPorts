import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedItemsTableComponent } from './added-items-table.component';

describe('AddedItemsTableComponent', () => {
  let component: AddedItemsTableComponent;
  let fixture: ComponentFixture<AddedItemsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedItemsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedItemsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
