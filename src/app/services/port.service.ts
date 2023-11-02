import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Port} from "../models/Port";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../.constants/constants";
import {IServiceTemplate} from "./IServiceTemplate";

@Injectable({
  providedIn: 'root'
})

export class PortService implements IServiceTemplate<Port>{

  constructor(private http : HttpClient)
  { }

  public readonly apiUri : string = `${Constants.apiUrl}/port`;

  get() : Observable<Port[]>
  {
    return this.http.get<Port[]>(this.apiUri);
  }

  getById(Id : number) : Observable<Port>
  {
    return this.http.get<Port>(`${this.apiUri}/${Id}`);
  }

  add(objectToAdd: Port): Observable<Port> {
    let placeholderData: Port = {
      port_Id : 1,
      port_Name : "s",
      port_Location : "a",
      latitude : "a",
      longitude : "x"
    }

    return of(placeholderData);
  }

  delete(idOfItem: number): Observable<number> {
    const parameter = { params : new HttpParams().set("Id", idOfItem) };

    return this.http.delete<number>(this.apiUri, parameter);
  }

  update(updatedObject: Port): Observable<number> {
    return this.http.put<number>(this.apiUri, updatedObject);
  }

}
