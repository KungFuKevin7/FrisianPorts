import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCargoListComponent } from './add-cargo-list.component';

describe('AddCargoListComponent', () => {
  let component: AddCargoListComponent;
  let fixture: ComponentFixture<AddCargoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCargoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCargoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
