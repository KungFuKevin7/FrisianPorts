import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Port} from "../models/Port";
import {HttpClient} from "@angular/common/http";
import {Constants} from "./../.constants/constants";
import {IServiceTemplate} from "./IServiceTemplate";

@Injectable({
  providedIn: 'root'
})

export class PortService implements IServiceTemplate<Port>{

  constructor(private http : HttpClient) { }

  get() : Observable<Port[]>
  {
    return this.http.get<Port[]>(`${Constants.apiUrl}/port`);
  }

  getById(portId : number) : Observable<Port>
  {
    return this.http.get<Port>(`${Constants.apiUrl}/port/${portId}`)
  }

  add(objectToAdd: Port): Port {
    return objectToAdd;
  }

  delete(idOfItem: number): number {
    return 0;
  }

  update(updatedObject: Port): number {
    return 0;
  }

}
