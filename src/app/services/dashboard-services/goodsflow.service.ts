import { Injectable } from '@angular/core';
import {GoodsFlowDto} from "../../models/DTO/GoodsFlowDto";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../../.constants/constants";

@Injectable({
  providedIn: 'root'
})
export class GoodsflowService {

  private apiUri : string = `${Constants.apiUrl}/flow-of-goods`
  constructor(private http : HttpClient) { }

  public getGoodsFlows(portId : number)
  {
    return this.http.get<GoodsFlowDto[]>
    (`${this.apiUri}`,
      {params : new HttpParams().set("portId", portId)});
  }
}
