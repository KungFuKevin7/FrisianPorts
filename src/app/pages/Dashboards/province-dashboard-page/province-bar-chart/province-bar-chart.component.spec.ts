import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceBarChartComponent } from './province-bar-chart.component';

describe('ProvinceBarChartComponent', () => {
  let component: ProvinceBarChartComponent;
  let fixture: ComponentFixture<ProvinceBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinceBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinceBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
