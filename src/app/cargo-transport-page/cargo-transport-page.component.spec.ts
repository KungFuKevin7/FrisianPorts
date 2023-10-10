import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoTransportPageComponent } from './cargo-transport-page.component';

describe('CargoTransportPageComponent', () => {
  let component: CargoTransportPageComponent;
  let fixture: ComponentFixture<CargoTransportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoTransportPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoTransportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
