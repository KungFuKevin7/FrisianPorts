import { TestBed } from '@angular/core/testing';
import {TonnageService} from "./tonnage.service"
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TransportedCargoDTO} from "../../models/DTO/TransportedCargoDTO";

describe('CargoDistributionPortService', () => {
  let service: TonnageService;
  let testingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [TonnageService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    service = TestBed.inject(TonnageService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should mock an API Call',  () => {
    service.getPortImportTonnage(2,1,1).subscribe(
      (results : any) => {
        let expectValue = 1000000;
        expect(results).toBeTruthy();
        expect(results[0]).toBe(expectValue);

      });
    const mockResults = testingController.expectOne('https://localhost:7071/api/tonnage/import-of-port?portId=2&year=1&month=1');
    mockResults.flush(Object.values([1000000]));
  });
});
