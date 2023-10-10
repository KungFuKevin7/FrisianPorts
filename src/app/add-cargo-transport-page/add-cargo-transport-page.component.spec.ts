import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCargoTransportPageComponent } from './add-cargo-transport-page.component';

describe('AddCargoTransportPageComponent', () => {
  let component: AddCargoTransportPageComponent;
  let fixture: ComponentFixture<AddCargoTransportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCargoTransportPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCargoTransportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
