import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Port} from "../models/Port";
import {HttpClient} from "@angular/common/http";
import {Constants} from "./../.constants/constants";

@Injectable({
  providedIn: 'root'
})
export class PortService {

  constructor(private http : HttpClient) { }

  getPorts() : Observable<Port[]>
  {
    return this.http.get<Port[]>(`${Constants.apiUrl}/port`);
  }

  getPort(portId : number) : Observable<Port>
  {
    return this.http.get<Port>(`${Constants.apiUrl}/port/${portId}`)
  }

}
