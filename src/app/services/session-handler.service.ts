import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionHandlerService {

  constructor() { }

  public setLoggedInUser(userId : string)
  {
    if (!this.getLoggedInUser()){
      sessionStorage.setItem("user", userId);
    }
  }

  public getLoggedInUser()
  {
    return sessionStorage.getItem("user");
  }

  public removeLoggedInUser()
  {
    return sessionStorage.removeItem("user");
  }
}
