import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {CargoTransport} from "../models/CargoTransport";
import {Constants} from "../.constants/constants";
import {TransportedCargoDTO} from "../models/DTO/TransportedCargoDTO";
import {YearlyTransportDTO} from "../models/DTO/YearlyTransportDTO";
import {GoodsFlowDto} from "../models/DTO/GoodsFlowDto";

@Injectable({
  providedIn: 'root'
})
export class PortDashboardService{

  private readonly apiUri : string = `${Constants.apiUrl}`;

  constructor(private http : HttpClient)
  {

  }

  public getImportShips(portId : number): Observable<CargoTransport[]>
  {
    return this.http.get<CargoTransport[]>(`${this.apiUri}/dashboard/import-ships`,
      {
        params : new HttpParams()
          .set("portId", portId)
      });
  }

  public getExportShips(portId : number): Observable<CargoTransport[]>
  {
    return this.http.get<CargoTransport[]>(`${this.apiUri}/dashboard/export-ships`,
      {
        params : new HttpParams()
          .set("portId", portId)
      });
  }

  public getImportWeight(portId : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/dashboard/total-import-tonnage`,
      {
        params : new HttpParams()
          .set("portId", portId)
      });
  }

  public getExportWeight(portId : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/dashboard/total-export-tonnage`,
      {
        params : new HttpParams()
          .set("portId", portId)
      });
  }

  public getAverageImport(portId : number)
  {
    return this.http.get<number>(`${this.apiUri}/dashboard/average-import-tonnage`,
      {
        params : new HttpParams()
          .set("portId", portId)
      });
  }

  public getAverageExport(portId : number)
  {
    return this.http.get<number>(`${this.apiUri}/dashboard/average-export-tonnage`,
      {
      params : new HttpParams()
        .set("portId", portId)
    });
  }

  public getYearlyImport(portId : number)
  {
    return this.http.get<YearlyTransportDTO[]>(`${this.apiUri}/dashboard/yearly-import`,
      {
        params : new HttpParams()
          .set("portId", portId)
      });
  }

  public getYearlyExport(portId : number)
  {
    return this.http.get<YearlyTransportDTO[]>(`${this.apiUri}/dashboard/yearly-export`,
      {
        params : new HttpParams()
          .set("portId", portId)
      });
  }

  public getImportDistribution(portId : number)
  {
    return this.http.get<TransportedCargoDTO[]>
    (`${this.apiUri}/dashboard/import-distribution`,
      {params : new HttpParams().set("portId", portId)});
  }

  public getExportDistribution(portId : number)
  {
    return this.http.get<TransportedCargoDTO[]>
    (`${this.apiUri}/dashboard/export-distribution`,
      {params : new HttpParams().set("portId", portId)});
  }

  public getGoodsFlows(portId : number)
  {
    return this.http.get<GoodsFlowDto[]>
    (`${this.apiUri}/dashboard/flow-of-goods`,
      {params : new HttpParams().set("portId", portId)});
  }
}
