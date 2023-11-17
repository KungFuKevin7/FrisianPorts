import { Injectable } from '@angular/core';
import {GoodsFlowDto} from "../../models/DTO/GoodsFlowDto";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../../.constants/constants";
import {ErrorHandlerService} from "../error-handler.service";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GoodsflowService {

  private apiUri : string = `${Constants.apiUrl}/flow-of-goods`

  constructor(private http : HttpClient,
              private errorService : ErrorHandlerService)
  { }

  public getGoodsFlows(portId : number)
  {
    return this.http.get<GoodsFlowDto[]>
    (`${this.apiUri}`,
      {params : new HttpParams().set("portId", portId)});
  }

  public getGoodsFlowById(cargoTransportId : number)
  {
    return this.http.get<GoodsFlowDto>
    (`${this.apiUri}/by-id`,
      {params : new HttpParams().set("cargoTransportId", cargoTransportId)}).pipe(
        catchError(
        err =>{
          let error = this.errorService.handleError(err);
          return error;
        })
    );
  }
}
