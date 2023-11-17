import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
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
    console.log("400 Bad Request, Your fault not mine.");
  }

  public handleInternalServerError(){
    this.router.navigate(['/server-error']);
  }

  public errorMessage(error : HttpErrorResponse){
    console.log(`${error.status}: ${error.message}`);
  }
}
