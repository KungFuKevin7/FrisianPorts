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

  public getPortImport(portId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/import-of-port`,
      {
        params : new HttpParams()
          .set("portId", portId)
          .set("period", selectedYear)
      });
  }

  public getPortExport(portId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/export-of-port`,
      {
        params : new HttpParams()
          .set("portId", portId)
          .set("period", selectedYear)
      });
  }

  public getProvinceImport(provinceId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/import-of-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }

  public getProvinceExport(provinceId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/export-of-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }
  public getTransportsWithinProvince(provinceId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/within-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }

  public getTransportsToOutsideProvince(provinceId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/to-outside-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }

  public getTransportsFromOutsideProvince(provinceId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/from-outside-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }
}
