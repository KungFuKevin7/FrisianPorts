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

  public getPortImportTonnage(portId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/import-of-port`,
      {
        params : new HttpParams()
          .set("portId", portId)
          .set("period", selectedYear)
      });
  }

  public getPortExportTonnage(portId : number, selectedYear : number) : Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/export-of-port`,
      {
        params : new HttpParams()
          .set("portId", portId)
          .set("period", selectedYear)
      });
  }


  public getProvinceImportTonnage(provinceId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/import-of-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }

  public getProvinceExportTonnage(provinceId : number, selectedYear : number) : Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/export-of-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }

  public getTonnageWithinProvince(provinceId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/tonnage-within-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }

  public getImportFromProvince(provinceId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/import-from-outside-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }

  public getExportToOutsideProvince(provinceId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/export-to-outside-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }
}
