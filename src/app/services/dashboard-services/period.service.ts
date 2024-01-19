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


  public getPortYearlyReport(portId : number){
    return this.http.get<YearlyTransportDTO[]>(`${this.apiUri}/yearly-report-of-port`,
      {
        params : new HttpParams()
          .set("portId", portId)
      })
  }

  public getAvailableYearsOfPort(portId : number){
    return this.http.get<number[]>(`${this.apiUri}/available-years-of-port`,
      {
        params : new HttpParams().set("portId", portId)
      })
  }

  public getAvailableYearsOfProvince(provinceId : number){
    return this.http.get<number[]>(`${this.apiUri}/available-years-of-province`,
      {
        params : new HttpParams().set("provinceId", provinceId)
      })
  }
}
