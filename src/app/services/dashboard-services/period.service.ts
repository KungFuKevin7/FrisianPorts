import {Injectable, Input} from '@angular/core';
import {YearlyTransportDTO} from "../../models/DTO/YearlyTransportDTO";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../../.constants/constants";

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  constructor(private http : HttpClient) { }

  private readonly apiUri = `${Constants.apiUrl}/period`

  public getYearlyImport(portId : number)
  {
    return this.http.get<YearlyTransportDTO[]>(`${this.apiUri}/yearly-import`,
      {
        params : new HttpParams()
          .set("portId", portId)
      });
  }

  public getYearlyExport(portId : number)
  {
    return this.http.get<YearlyTransportDTO[]>(`${this.apiUri}/yearly-export`,
      {
        params : new HttpParams()
          .set("portId", portId)
      });
  }

  public getYearlyReport(portId : number){
    return this.http.get<YearlyTransportDTO[]>(`${this.apiUri}/yearly-report`,
      {
        params : new HttpParams()
          .set("portId", portId)
      })
  }
}
