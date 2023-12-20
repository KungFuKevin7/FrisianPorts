import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../../.constants/constants";

@Injectable({
  providedIn: 'root'
})
export class TonnageService {

  constructor(private http : HttpClient) { }

  private readonly apiUri = `${Constants.apiUrl}/tonnage`

  public getPortImportTonnage(portId : number, selectedYear : number, selectedMonth : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/import-of-port`,
      {
        params : new HttpParams()
          .set("portId", portId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }

  public getPortExportTonnage(portId : number, selectedYear : number, selectedMonth : number) : Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/export-of-port`,
      {
        params : new HttpParams()
          .set("portId", portId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }


  public getProvinceImportTonnage(provinceId : number, selectedYear : number, selectedMonth : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/import-of-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }

  public getProvinceExportTonnage(provinceId : number, selectedYear : number, selectedMonth : number) : Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/export-of-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }

  public getTonnageWithinProvince(provinceId : number, selectedYear : number, selectedMonth : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/tonnage-within-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }

  public getImportFromProvince(provinceId : number, selectedYear : number, selectedMonth : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/import-from-outside-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }

  public getExportToOutsideProvince(provinceId : number, selectedYear : number, selectedMonth : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/export-to-outside-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }
}
