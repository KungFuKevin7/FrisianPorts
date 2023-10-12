import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoTransportTableComponent } from './cargo-transport-table.component';

describe('CargoTransportTableComponent', () => {
  let component: CargoTransportTableComponent;
  let fixture: ComponentFixture<CargoTransportTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoTransportTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoTransportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
