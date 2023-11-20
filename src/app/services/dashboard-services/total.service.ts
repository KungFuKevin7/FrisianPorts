import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../../.constants/constants";
import {Observable} from "rxjs";
import {CargoTransport} from "../../models/CargoTransport";

@Injectable({
  providedIn: 'root'
})
export class TotalService {
  constructor(private http : HttpClient) { }

  private readonly apiUri = `${Constants.apiUrl}/total`


  public getImport(portId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/import`,
      {
        params : new HttpParams()
          .set("portId", portId)
          .set("period", selectedYear)
      });
  }

  public getExport(portId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/export`,
      {
        params : new HttpParams()
          .set("portId", portId)
          .set("period", selectedYear)
      });
  }
  public getImportTonnage(portId : number, selectedYear : number): Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/import-tonnage`,
      {
        params : new HttpParams()
          .set("portId", portId)
          .set("period", selectedYear)
      });
  }

  public getExportTonnage(portId : number, selectedYear : number) : Observable<number>
  {
    return this.http.get<number>(`${this.apiUri}/export-tonnage`,
      {
        params : new HttpParams()
          .set("portId", portId)
          .set("period", selectedYear)
      });
  }
}
