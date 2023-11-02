import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoTransportOfPortPageComponent } from './cargo-transport-of-port-page.component';

describe('CargoTransportOfPortPageComponent', () => {
  let component: CargoTransportOfPortPageComponent;
  let fixture: ComponentFixture<CargoTransportOfPortPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoTransportOfPortPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoTransportOfPortPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
