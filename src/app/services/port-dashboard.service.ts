import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {CargoTransport} from "../models/CargoTransport";
import {Constants} from "../.constants/constants";
import {Cargo} from "../models/Cargo";
import {TransportedCargoDTO} from "../models/DTO/TransportedCargoDTO";

@Injectable({
  providedIn: 'root'
})
export class PortDashboardService {

  constructor(private http : HttpClient) { }

  private readonly apiUri : string = `${Constants.apiUrl}`;

  private parameters = {
    params : new HttpParams()
      .set("portId", 2)
      .set("period", "all")
  };

  public getImportShips(): Observable<CargoTransport[]>
  {
    return this.http.get<CargoTransport[]>(`${this.apiUri}/cargo-transport/get-import`,
      this.parameters);
  }

  public getExportShips(): Observable<CargoTransport[]>
  {
    return this.http.get<CargoTransport[]>(`${this.apiUri}/cargo-transport/get-export`,
      this.parameters);
  }

  public getImportWeight(): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/dashboard/get-import-weight`,
      this.parameters);
  }

  public getExportWeight(): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/dashboard/get-export-weight`,
      this.parameters);
  }

  public getAverageImport()
  {
    return this.http.get<number>(`${this.apiUri}/dashboard/get-average-import-weight`,
      this.parameters);
  }

  public getAverageExport()
  {
    return this.http.get<number>(`${this.apiUri}/dashboard/get-average-export-weight`,
      this.parameters);
  }
/*
  public getTotalImportPerYear()
  {

  }

  public getTotalExportPerYear()
  {

  }*/

  public getImportDistribution()
  {
    return this.http.get<TransportedCargoDTO[]>
    (`${this.apiUri}/dashboard/get-import-distribution`, this.parameters);
  }

  public getExportDistribution()
  {
    return this.http.get<TransportedCargoDTO[]>
    (`${this.apiUri}/dashboard/get-export-distribution`, this.parameters);
  }
}
