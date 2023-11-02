import { Injectable } from '@angular/core';
import {IServiceTemplate} from "./IServiceTemplate";
import {CargoType} from "../models/CargoType";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../.constants/constants";

@Injectable({
  providedIn: 'root'
})
export class CargoTypeService implements IServiceTemplate<CargoType> {

  constructor(private http : HttpClient) { }

  private readonly apiUri = `${Constants.apiUrl}/cargo-type`

  add(objectToAdd: CargoType): Observable<CargoType> {
    return this.http.post<CargoType>(this.apiUri, objectToAdd);
  }

  delete(idOfItem: number): Observable<number> {
    const parameters = { params : new HttpParams().set("Id", idOfItem)}
    return this.http.delete<number>(this.apiUri, parameters);
  }

  get(): Observable<CargoType[]> {
    return this.http.get<CargoType[]>(this.apiUri);
  }

  getById(Id: number): Observable<CargoType> {
    return this.http.get<CargoType>(`${this.apiUri}/${Id}`);
  }

  update(updatedObject: CargoType): Observable<number> {
    return this.http.put<number>(this.apiUri, updatedObject);
  }

}
