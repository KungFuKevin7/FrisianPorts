import { Injectable } from '@angular/core';
import {catchError, Observable} from "rxjs";
import {Port} from "../models/Port";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../.constants/constants";
import {ErrorHandlerService} from "./error-handler.service";

@Injectable({
  providedIn: 'root'
})

export class PortService{

  constructor(private http : HttpClient,
              private errorService : ErrorHandlerService)
  { }

  public readonly apiUri : string = `${Constants.apiUrl}/port`;

  get() : Observable<Port[]>
  {
    return this.http.get<Port[]>(this.apiUri).pipe(
      catchError( err => {
          let error = this.errorService.handleError(err);
          return error;
        }
      )
    );
  }

  getById(Id : number) : Observable<Port>
  {
    return this.http.get<Port>(`${this.apiUri}/${Id}`).pipe(
      catchError( err => {
        let error = this.errorService.handleError(err);
        return error;
      })
    );
  }

  add(portToBeAdded: Port) : Observable<Port>
  {
    return this.http.post<Port>(this.apiUri, portToBeAdded);
  }

  delete(idOfPort : number){
    const parameters =
      { params : new HttpParams().set("Id", idOfPort)}

    return this.http.delete(this.apiUri, parameters);
  }
}
