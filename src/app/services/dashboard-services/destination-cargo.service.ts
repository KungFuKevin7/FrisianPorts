import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../../.constants/constants";
import {CargoDestinationDTO} from "../../models/DTO/CargoDestinationDTO";

@Injectable({
  providedIn: 'root'
})
export class DestinationCargoService {

  constructor(private http : HttpClient) { }

  private readonly apiUri = `${Constants.apiUrl}/cargo-destination`

  public getImportDestinations(portId : number, selectedYear : number, selectedMonth : number)
  {
    return this.http.get<CargoDestinationDTO[]>
    (`${this.apiUri}/import`,
      {params : new HttpParams()
          .set("portId", portId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }

  public getExportDestinations(portId : number, selectedYear : number, selectedMonth : number)
  {
    return this.http.get<CargoDestinationDTO[]>
    (`${this.apiUri}/export`,
      {params : new HttpParams()
          .set("portId", portId)
          .set("year", selectedYear)
          .set("month", selectedMonth)
      });
  }
}
