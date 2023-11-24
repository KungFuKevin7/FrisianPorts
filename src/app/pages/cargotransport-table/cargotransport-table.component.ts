import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GoodsFlowDto} from "../../models/DTO/GoodsFlowDto";
import {GoodsflowService} from "../../services/dashboard-services/goodsflow.service";

@Component({
  selector: 'app-cargotransport-table',
  templateUrl: './cargotransport-table.component.html',
  styleUrls: ['./cargotransport-table.component.css'],
  providers: [GoodsflowService]
})
export class CargotransportTableComponent implements OnInit{
  @Input() MaxResults : number = 4;
  @Input() portId! : number;

  @Output() totalResults = new EventEmitter<number>;

  public goodsFlow : GoodsFlowDto[]= [];

  constructor(private goodsFlowService : GoodsflowService) { }

  ngOnInit() {
    this.getGoodsFlow();
  }

  //Get flow of goods to fill the table
  public getGoodsFlow(){
    this.goodsFlowService.getGoodsFlows(this.portId)
      .subscribe( response => {
        this.goodsFlow = response;
        this.shareResultsAmount(this.goodsFlow.length);
      })
  }

  //Share the amount of results with parent
  public shareResultsAmount(resultAmount : number)
  {
    this.totalResults.emit(resultAmount);
  }
}
