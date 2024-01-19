import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartComponent } from './pie-chart.component';
import {CargoDistributionPortService} from "../../../../services/dashboard-services/cargo-distribution-port.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TransportedCargoDTO} from "../../../../models/DTO/TransportedCargoDTO";
import {NgxChartsModule, PieChartModule} from "@swimlane/ngx-charts";

let testData : TransportedCargoDTO[] = [
  {
    cargo_Type_Name : 'string',
    transported_Weight : 79
  },
  {
    cargo_Type_Name : 'string',
    transported_Weight : 79
  },
  {
    cargo_Type_Name : 'string',
    transported_Weight : 79
  }
]

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let service :CargoDistributionPortService;
  let testingHttp : HttpTestingController;
  let fixture: ComponentFixture<PieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartComponent],
      providers: [CargoDistributionPortService, NgxChartsModule,PieChartModule],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartComponent);
    service = TestBed.inject(CargoDistributionPortService);
    testingHttp = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should sing', () => {
    service.getDistributionByCargoTransport(2).subscribe(
      (results : any) => {
        expect(results).toBeTruthy();
        expect(results.length).toBe(3);
      });
    const mockReq = testingHttp.expectOne('api/cargo-distribution/port/cargo-transport');
    mockReq.flush((Object.values(testData)))
  });
});

