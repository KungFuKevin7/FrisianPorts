import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constants} from "../.constants/constants";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http : HttpClient) { }

  private readonly apiUri = `${Constants.apiUrl}`

  public SearchPorts(searchQuery : string) : Observable<any>{
    return this.http.get(`${this.apiUri}/ports/name`,
      {params : new HttpParams().set("query",searchQuery)
      });
  }

  public SearchFlowOfGoods(searchQuery : string) : Observable<any>{
    return this.http.get(`${this.apiUri}/flow-of-goods/name`,
      {params : new HttpParams().set("query",searchQuery)
      });
  }
}
