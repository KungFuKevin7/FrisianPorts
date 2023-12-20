import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../../.constants/constants";

@Injectable({
  providedIn: 'root'
})
export class ShipMovementService {

  constructor(private http : HttpClient) { }

  private readonly apiUri = `${Constants.apiUrl}/ship-movements`

  public getPortImport(portId : number, selectedYear : number, selectedMonth : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/import-of-port`,
      {
        params : new HttpParams()
          .set("portId", portId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }

  public getPortExport(portId : number, selectedYear : number, selectedMonth : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/export-of-port`,
      {
        params : new HttpParams()
          .set("portId", portId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }

  public getProvinceImport(provinceId : number, selectedYear : number, selectedMonth : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/import-of-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }

  public getProvinceExport(provinceId : number, selectedYear : number, selectedMonth : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/export-of-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }
  public getTransportsWithinProvince(provinceId : number, selectedYear : number, selectedMonth : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/within-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }

  public getTransportsToOutsideProvince(provinceId : number, selectedYear : number, selectedMonth : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/to-outside-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }

  public getTransportsFromOutsideProvince(provinceId : number, selectedYear : number, selectedMonth : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/from-outside-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }
}
