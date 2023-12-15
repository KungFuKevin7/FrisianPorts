import { Injectable } from '@angular/core';
import {IServiceTemplate} from "./IServiceTemplate";
import {Province} from "../models/Province";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../.constants/constants";
import {Cargo} from "../models/Cargo";
import {Port} from "../models/Port";

@Injectable({
  providedIn: 'root'
})
export class ProvinceService implements IServiceTemplate<Province>{

  constructor(private http : HttpClient) { }

  private readonly apiUri = `${Constants.apiUrl}/province`

  add(objectToAdd: Province): Observable<Province> {
    return this.http.post<Province>(this.apiUri, objectToAdd);
  }

  delete(idOfItem: number): Observable<number> {
    const parameter = { params : new HttpParams().set("Id", idOfItem)}

    return this.http.delete<number>(this.apiUri, parameter);
  }

  get(): Observable<Province[]> {
    return this.http.get<Province[]>(this.apiUri);
  }

  getById(Id: number): Observable<Province> {
    return this.http.get<Province>(`${this.apiUri}/${Id}`);
  }

  update(updatedObject: Province): Observable<number> {
    return this.http.put<number>(this.apiUri, updatedObject);
  }

  getPortsInProvince(provinceId : number) : Observable<Port[]>
  {
    const parameter = { params : new HttpParams().set("provinceId", provinceId)}

    return this.http.get<Port[]>(`${this.apiUri}/ports`,parameter);
  }
}
