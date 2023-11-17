import { Injectable } from '@angular/core';
import {IServiceTemplate} from "./IServiceTemplate";
import {Transport} from "../models/Transport";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constants} from "../.constants/constants";

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private http : HttpClient)
  { }

  private readonly apiUri = `${Constants.apiUrl}/transport`;

  add(transportToAdd: Transport): Observable<Transport> {
    return this.http.post<Transport>(this.apiUri, transportToAdd);
  }

  delete(idOfItem: number): Observable<number> {
    const parameter = {params : new HttpParams().set("Id", idOfItem)}

    return this.http.delete<number>(this.apiUri, parameter);
  }

  get(): Observable<Transport[]> {
    return this.http.get<Transport[]>(this.apiUri);
  }

  getById(Id: number): Observable<Transport> {
    return this.http.get<Transport>(`${this.apiUri}/${Id}`)
  }

  update(updatedObject: Transport): Observable<number> {
    return this.http.put<number>(this.apiUri, updatedObject);
  }

  getCountInCargoTransport(cargoTransportId: number): Observable<number>{
    const getParameter = { params : new HttpParams().set("Id", cargoTransportId)}

    return this.http.get<number>(`${this.apiUri}/cargo-transport-count`,
      getParameter)
  }
}
