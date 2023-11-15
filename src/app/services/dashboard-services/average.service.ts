import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../../.constants/constants";

@Injectable({
  providedIn: 'root'
})
export class AverageService {

  constructor(private http : HttpClient) { }

  private readonly apiUri = `${Constants.apiUrl}/average`

  public getAverageImport(portId : number)
  {
    return this.http.get<number>(`${this.apiUri}/import-tonnage`,
      {
        params : new HttpParams()
          .set("portId", portId)
      });
  }

  public getAverageExport(portId : number)
  {
    return this.http.get<number>(`${this.apiUri}/export-tonnage`,
      {
        params : new HttpParams()
          .set("portId", portId)
      });
  }
}
