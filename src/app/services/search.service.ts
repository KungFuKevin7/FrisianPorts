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
    return this.http.get(`${this.apiUri}/port/name`,
      {params : new HttpParams().set("query",searchQuery)
      });
  }

  public SearchPortsFiltered(searchQuery : string, provinceFilter : string[]) : Observable<any>{
    let searchParams = new HttpParams();

    provinceFilter.forEach( province => {
      searchParams = searchParams.append('provinces', province);
    });

    return this.http.get(`${this.apiUri}/port/name/filtered`,
      {params : searchParams.set('query', searchQuery)});
  }

  public SearchFlowOfGoods(searchQuery : string) : Observable<any>{
    return this.http.get(`${this.apiUri}/flow-of-goods/search`,
      {params : new HttpParams().set("query",searchQuery)
      });
  }

  public SearchFlowOfGoodsFiltered(searchQuery : string, provinceFilter : string[]) : Observable<any>{
    let searchParams = new HttpParams();

    provinceFilter.forEach( province => {
      searchParams = searchParams.append('provinces', province);
    });


    return this.http.get(`${this.apiUri}/flow-of-goods/search/filtered`,
      {params : searchParams.set("query",searchQuery)
      });
  }
}
