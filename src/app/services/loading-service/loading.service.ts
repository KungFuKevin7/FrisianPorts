import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService{

  private appIsLoading : boolean = false;

  constructor() { }


  setLoadStatus(isLoading : boolean)
  {
    this.appIsLoading = isLoading;
    //console.log("Loading = " + this.appIsLoading);
  }

  getLoadStatus()
  {
    return this.appIsLoading;
  }

}
