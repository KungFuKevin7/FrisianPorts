import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsPieChartComponent } from './destinations-pie-chart.component';

describe('DestinationsPieChartComponent', () => {
  let component: DestinationsPieChartComponent;
  let fixture: ComponentFixture<DestinationsPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationsPieChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationsPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
