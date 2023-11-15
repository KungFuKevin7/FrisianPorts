import { Injectable } from '@angular/core';
import {TransportedCargoDTO} from "../../models/DTO/TransportedCargoDTO";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../../.constants/constants";

@Injectable({
  providedIn: 'root'
})
export class CargoDistributionService {

  constructor(private http : HttpClient) { }

  private readonly apiUri = `${Constants.apiUrl}/cargo-distribution`

  public getImportDistributionPort(portId : number)
  {
    return this.http.get<TransportedCargoDTO[]>
    (`${this.apiUri}/import`,
      {params : new HttpParams().set("portId", portId)});
  }

  public getExportDistributionPort(portId : number)
  {
    return this.http.get<TransportedCargoDTO[]>
    (`${this.apiUri}/export`,
      {params : new HttpParams().set("portId", portId)});
  }
}
