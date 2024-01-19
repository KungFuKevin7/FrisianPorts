import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CargoDistributionPortService} from "./cargo-distribution-port.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TransportedCargoDTO} from "../../models/DTO/TransportedCargoDTO";

let testData : TransportedCargoDTO[] = [
  {
    cargo_Type_Name : 'The Wall',
    transported_Weight : 80
  },
  {
    cargo_Type_Name : 'string',
    transported_Weight : 79
  },
  {
    cargo_Type_Name : 'string',
    transported_Weight : 79
  }
];

let testData2 : TransportedCargoDTO[] = [];

describe('CargoDistributionPortService', () => {
  let service: CargoDistributionPortService;
  let testingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ CargoDistributionPortService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    service = TestBed.inject(CargoDistributionPortService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should mock an API Call',  () => {
    service.getDistributionByCargoTransport(2).subscribe(
      (results : any) => {
        expect(results).toBeTruthy()
        expect(results.length).toBe(3);

        //Use predefined data, to mock received data
        const firstItem = results.find((item : any) => item.cargo_Type_Name === 'The Wall')
        expect(firstItem.transported_Weight).toBe(80)
      });
    const mockResults = testingController.expectOne('https://localhost:7071/api/cargo-distribution/port/cargo-transport?Id=2');
    mockResults.flush(Object.values(testData));
  });

  it('should mock an API Call, but with an empty array',  () => {
    service.getDistributionByCargoTransport(10).subscribe(
      (results : any) => {
        expect(results).toBeTruthy()
        expect(results.length).toBe(0);

      });

    const mockResults = testingController.expectOne('https://localhost:7071/api/cargo-distribution/port/cargo-transport?Id=10');
    mockResults.flush(Object.values(testData2));
  });
});
