import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCargoItemRowComponent } from './add-cargo-item-row.component';

describe('AddCargoItemRowComponent', () => {
  let component: AddCargoItemRowComponent;
  let fixture: ComponentFixture<AddCargoItemRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCargoItemRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCargoItemRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
