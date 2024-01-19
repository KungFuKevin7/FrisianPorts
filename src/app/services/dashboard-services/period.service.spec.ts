import { TestBed } from '@angular/core/testing';
import {PeriodService} from "./period.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TransportedCargoDTO} from "../../models/DTO/TransportedCargoDTO";
import {YearlyTransportDTO} from "../../models/DTO/YearlyTransportDTO";

let testData : YearlyTransportDTO[] = [
  {
    year: 2002,
    transported: [
      {
        cargo_Type_Name : "Import",
        transported_Weight : 1024
      },
      {
        cargo_Type_Name : "Export",
        transported_Weight : 1204
      }
    ]
  }, {
    year: 1994,
    transported: [
      {
        cargo_Type_Name : "Import",
        transported_Weight : 720
      },
      {
        cargo_Type_Name : "Export",
        transported_Weight : 1080
      }
    ]
  }
];


describe('PeriodService', () => {
  let service: PeriodService;
  let testingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ PeriodService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    service = TestBed.inject(PeriodService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should mock an API Call',  () => {
    service.getPortYearlyReport(2).subscribe(
      (results : any) => {
        expect(results).toBeTruthy()
        expect(results.length).toBe(2);

        //Use predefined data, to mock received data
        const firstItem = results.find((item : YearlyTransportDTO) => item.year === 2002);
        expect(firstItem.transported[0].transported_Weight).toBe(1024);
      });
    const mockResults = testingController.expectOne('https://localhost:7071/api/period/yearly-report-of-port?portId=2');
    mockResults.flush(Object.values(testData));
  });
});
