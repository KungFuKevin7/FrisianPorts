import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Port} from "../models/Port";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../.constants/constants";
import {IServiceTemplate} from "./IServiceTemplate";
import {TransportedCargoDTO} from "../models/DTO/TransportedCargoDTO";

@Injectable({
  providedIn: 'root'
})

export class PortService{

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

}
