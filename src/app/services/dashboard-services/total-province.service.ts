import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../../.constants/constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TotalProvinceService {
  constructor(private http : HttpClient) { }

  private readonly apiUri = `${Constants.apiUrl}/province/total`


  public getImport(provinceId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/import-ship-movement`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }

  public getExport(provinceId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/export-ship-movement`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }

  public getImportTonnage(provinceId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/import-tonnage`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }

  public getExportTonnage(provinceId : number, selectedYear : number) : Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/export-tonnage`,
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

  public getTransportsWithinProvince(provinceId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/transports-within-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }

  public getTransportsToOutsideProvince(provinceId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/transports-to-outside-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }

  public getTransportsFromOutsideProvince(provinceId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/transports-from-outside-province`,
      {
        params : new HttpParams()
          .set("provinceId", provinceId)
          .set("period", selectedYear)
      });
  }
}
