import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService{

  private appIsLoading : boolean = false;

  constructor() { }


  setStatus(isLoading : boolean)
  {
    this.appIsLoading = isLoading;
    //console.log("Loading = " + this.appIsLoading);
  }

  getStatus()
  {
    return this.appIsLoading;
  }

}
