import { Injectable } from '@angular/core';
import {IServiceTemplate} from "./IServiceTemplate";
import {Route} from "./../models/Route"
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../.constants/constants";

@Injectable({
  providedIn: 'root'
})
export class RouteService implements IServiceTemplate<Route>{

  constructor(private http : HttpClient) { }

  private readonly apiUri = `${Constants.apiUrl}/route`;

  add(objectToAdd: Route): Observable<Route> {
    return this.http.post<Route>(this.apiUri, objectToAdd);
  }

  delete(idOfItem: number): Observable<number> {
    const parameter = { params : new HttpParams().set("Id", idOfItem)};

    return this.http.delete<number>(this.apiUri, parameter);
  }

  get(): Observable<Route[]> {
    return this.http.get<Route[]>(this.apiUri);
  }

  getById(Id: number): Observable<Route> {
    return this.http.get<Route>(`${this.apiUri}/${Id}`)
  }

  update(updatedRoute: Route): Observable<number> {
    return this.http.put<number>(this.apiUri, updatedRoute)
  }
}
