import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../.constants/constants";
import {Cargo} from "../models/Cargo";
import {catchError, Observable} from "rxjs";
import {CargoTransportDTO} from "../models/DTO/CargoTransportDTO";
import {ErrorHandlerService} from "./error-handler.service";

@Injectable({
  providedIn: 'root'
})
export class AddCargoTransportService {

  constructor(private http : HttpClient, private errorService : ErrorHandlerService) { }

  private readonly apiUri = `${Constants.apiUrl}/cargo-transport`

  add(objectToAdd: CargoTransportDTO): Observable<CargoTransportDTO> {
    return this.http.post<CargoTransportDTO>(`${this.apiUri}/transport-with-cargo`, objectToAdd)
      .pipe(
        catchError(
          err =>{
            let error = this.errorService.handleError(err);
            return error;
          }));
  }

  addCargoList(cargoItems: CargoTransportDTO[]): Observable<CargoTransportDTO> {
    return this.http.post<CargoTransportDTO>(`${this.apiUri}/transport-with-cargo/list`, cargoItems)
      .pipe(
        catchError(
          err =>{
            let error = this.errorService.handleError(err);
            return error;
          }));
  }
}
