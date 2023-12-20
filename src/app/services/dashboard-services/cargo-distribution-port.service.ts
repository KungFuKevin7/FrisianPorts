import { Injectable } from '@angular/core';
import {TransportedCargoDTO} from "../../models/DTO/TransportedCargoDTO";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../../.constants/constants";

@Injectable({
  providedIn: 'root'
})
export class CargoDistributionPortService {

  constructor(private http : HttpClient) { }

  private readonly apiUri = `${Constants.apiUrl}/cargo-distribution/port`

  public getImportDistributionPort(portId : number, selectedYear : number, selectedMonth : number)
  {
    return this.http.get<TransportedCargoDTO[]>
    (`${this.apiUri}/import`,
      {params : new HttpParams()
          .set("portId", portId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }

  public getExportDistributionPort(portId : number, selectedYear : number, selectedMonth : number)
  {
    return this.http.get<TransportedCargoDTO[]>
    (`${this.apiUri}/export`,
      {params : new HttpParams()
          .set("portId", portId)
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
