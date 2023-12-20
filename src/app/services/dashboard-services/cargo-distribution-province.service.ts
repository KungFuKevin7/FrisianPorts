import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../../.constants/constants";
import {TransportedCargoDTO} from "../../models/DTO/TransportedCargoDTO";

@Injectable({
  providedIn: 'root'
})
export class CargoDistributionProvinceService {

  constructor(private http : HttpClient) { }

  private readonly apiUri = `${Constants.apiUrl}/cargo-distribution/province`

  public getImportDistributionPort(provinceId : number, selectedYear : number, selectedMonth : number)
  {
    return this.http.get<TransportedCargoDTO[]>
    (`${this.apiUri}/import`,
      {params : new HttpParams()
          .set("Id", provinceId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }

  public getExportDistributionPort(provinceId : number, selectedYear : number, selectedMonth : number)
  {
    return this.http.get<TransportedCargoDTO[]>
    (`${this.apiUri}/export`,
      {params : new HttpParams()
          .set("Id", provinceId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }

  public getDistributionByCargoTransport(Id : number){
    return this.http.get<TransportedCargoDTO[]>(
      `${this.apiUri}/cargo-transport`,
      {params : new HttpParams().set("Id",Id)}
    );
  }

  public getTotalDistribution(Id : number){
    return this.http.get<TransportedCargoDTO[]>(
      `${this.apiUri}/total`,
      {params : new HttpParams().set("cargoTransportId",Id)}
    );
  }
}
