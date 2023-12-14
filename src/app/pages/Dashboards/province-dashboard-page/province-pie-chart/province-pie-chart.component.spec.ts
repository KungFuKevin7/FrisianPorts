import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincePieChartComponent } from './province-pie-chart.component';

describe('ProvincePieChartComponent', () => {
  let component: ProvincePieChartComponent;
  let fixture: ComponentFixture<ProvincePieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvincePieChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvincePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
