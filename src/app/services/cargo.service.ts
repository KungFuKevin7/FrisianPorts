import { Injectable } from '@angular/core';
import {IServiceTemplate} from "./IServiceTemplate";
import {Cargo} from "../models/Cargo";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../.constants/constants";

@Injectable({
  providedIn: 'root'
})
export class CargoService implements IServiceTemplate<Cargo>{

  constructor(private http : HttpClient) { }

  private readonly apiUri = `${Constants.apiUrl}/cargo`

  add(objectToAdd: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(this.apiUri, objectToAdd);
  }

  delete(idOfItem: number): Observable<number> {
    const parameter = { params : new HttpParams().set("Id", idOfItem)}

    return this.http.delete<number>(this.apiUri, parameter);
  }

  get(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.apiUri);
  }

  getById(Id: number): Observable<Cargo> {
    return this.http.get<Cargo>(`${this.apiUri}/${Id}`);
  }

  update(updatedObject: Cargo): Observable<number> {
    return this.http.put<number>(this.apiUri,updatedObject);
  }
}
