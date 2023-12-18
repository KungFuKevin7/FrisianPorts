import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../.constants/constants";
import {Observable} from "rxjs";
import {CargoTransportRouteDTO} from "../models/DTO/CargoTransportRouteDTO";

@Injectable({
  providedIn: 'root'
})
export class CargoTransportRouteService {

  constructor(private http : HttpClient) { }

  private readonly apiUri : string = `${Constants.apiUrl}/cargo-transport-route`;

  add(cargoTransportRoute: CargoTransportRouteDTO): Observable<CargoTransportRouteDTO> {
    return this.http.post<CargoTransportRouteDTO>(this.apiUri,
      cargoTransportRoute);
  }
}
