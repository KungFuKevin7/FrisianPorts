import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../.constants/constants";
import {IServiceTemplate} from "./IServiceTemplate";
import {Users} from "../models/Users";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService implements IServiceTemplate<Users>{

  constructor(private http : HttpClient)
  { }

  private readonly apiUri= `${Constants.apiUrl}/users`

  add(objectToAdd: Users): Observable<Users> {
    return this.http.post<Users>(this.apiUri, objectToAdd);
  }

  delete(idOfItem: number): Observable<number> {
    const parameter = { params : new HttpParams().set("Id", idOfItem)};
    return this.http.delete<number>(this.apiUri, parameter);
  }

  get(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUri);
  }

  getById(Id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUri}/${Id}`)
  }

  update(updatedObject: Users): Observable<number> {
    return this.http.put<number>(this.apiUri,updatedObject);
  }


}
