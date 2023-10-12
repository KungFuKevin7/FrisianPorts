import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortsOnMapComponent } from './ports-on-map.component';

describe('PortsOnMapComponent', () => {
  let component: PortsOnMapComponent;
  let fixture: ComponentFixture<PortsOnMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortsOnMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortsOnMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
