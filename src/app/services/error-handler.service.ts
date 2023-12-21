import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpStatusCode} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private router: Router) { }

  public handleError(error : HttpErrorResponse) : Observable<any>{

    if (error.status === 404){
      this.handleNotFound();
    }

    if (error.status === 400){
      this.handleBadRequest();
    }

    if (error.status === 500){
      this.handleInternalServerError();
    }
    else{
      this.errorMessage(error);
    }

    return throwError(error);
  }

  public handleNotFound(){
    this.router.navigate(['/not-found-page']);
  }

  public handleBadRequest(){
    //this.router.navigate(['/not-found-page']);
    alert("Er ging iets mis, alle velden moet ingevuld zijn.");
    //console.log("400 Bad Request, Something is wrong with the sent request.");
  }

  public handleInternalServerError(){
    this.router.navigate(['/server-error']);
  }

  public errorMessage(error : HttpErrorResponse){
    console.log(`${error.status}: ${error.message}`);
  }

  public userLoginError(error : HttpErrorResponse)
  {
    if (error.status === HttpStatusCode.NotFound){
      alert("Ingevoerde email en wachtwoord kloppen niet!")
    }
    else{
      alert("Er ging iets mis, excuses voor het ongemak!")
    }
    return throwError(error);
  }
}
