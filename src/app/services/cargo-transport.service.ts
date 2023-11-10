import { Injectable } from '@angular/core';
import {IServiceTemplate} from "./IServiceTemplate";
import {CargoTransport} from "../models/CargoTransport";
import {Observable, of} from "rxjs";
import {Constants} from "../.constants/constants";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CargoTransportService implements IServiceTemplate<CargoTransport>{

  constructor(private http : HttpClient)
  { }

  private readonly apiUri : string = `${Constants.apiUrl}/cargo-transport`;

  add(objectToAdd: CargoTransport): Observable<CargoTransport> {
    return this.http.post<CargoTransport>(this.apiUri,
      objectToAdd);
  }

  delete(idOfItem: number): Observable<number> {
    const parameter = {
      params : new HttpParams().set("Id", idOfItem)
    };

    return this.http.delete<number>(this.apiUri, parameter);
  }

  get(): Observable<CargoTransport[]> {
    return this.http.get<CargoTransport[]>(this.apiUri);
  }

  getById(Id: number): Observable<CargoTransport> {
    return this.http.get<CargoTransport>(`${this.apiUri}/${Id}`);
  }

  update(updatedObject: CargoTransport): Observable<number> {
    return this.http.put<number>
    (this.apiUri, updatedObject);
  }

  getImport(portId: number): Observable<CargoTransport[]> {
    const parameter = {
      params : new HttpParams().set("portId", portId)
    };

    return this.http.get<CargoTransport[]>(`${this.apiUri}/get-import`,
      parameter);
  }

  getExport(portId: number): Observable<CargoTransport[]> {
    const parameter = {
      params : new HttpParams().set("portId", portId)
    };

    return this.http.get<CargoTransport[]>(`${this.apiUri}/get-export`,
      parameter);
  }
}
