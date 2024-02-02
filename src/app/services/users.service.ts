import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpStatusCode} from "@angular/common/http";
import {Constants} from "../.constants/constants";
import {IServiceTemplate} from "./IServiceTemplate";
import {Users} from "../models/Users";
import {catchError, Observable, throwError} from "rxjs";
import {ErrorHandlerService} from "./error-handler.service";

@Injectable({
  providedIn: 'root'
})

export class UsersService implements IServiceTemplate<Users>{

  constructor(private http : HttpClient,
              private errorService : ErrorHandlerService)
  { }

  private readonly apiUri= `${Constants.apiUrl}/users`

  add(objectToAdd: Users): Observable<Users> {
    return this.http.post<Users>(this.apiUri, objectToAdd)
      .pipe(
        catchError( err => {
            alert("Invoer klopt niet of emailadres is al in gebruik.");
            return throwError(err);
        }
      )
    );
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
    return this.http.put<number>(this.apiUri, updatedObject);
  }

  validateUser(email : string, passwordInput : string): Observable<Users> {
    const parameter = { params : new HttpParams()
        .set("email", email)
        .set("passwordInput", passwordInput)};

    return this.http.get<Users>(`${this.apiUri}/exist`, parameter)
      .pipe(
        catchError( err => {
            return this.errorService.userLoginError(err);
          }
        )
      );
  }

}
