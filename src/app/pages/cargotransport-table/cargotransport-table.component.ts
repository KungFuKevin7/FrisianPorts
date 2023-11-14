import {Component, Input, OnInit} from '@angular/core';
import {PortDashboardService} from "../../services/port-dashboard.service";
import {GoodsFlowDto} from "../../models/DTO/GoodsFlowDto";

@Component({
  selector: 'app-cargotransport-table',
  templateUrl: './cargotransport-table.component.html',
  styleUrls: ['./cargotransport-table.component.css'],
  providers: [PortDashboardService]
})
export class CargotransportTableComponent implements OnInit{
  @Input() MaxResults : number = 4;
  @Input() portId! : number;

  public goodsFlow : GoodsFlowDto[]= [];

  constructor(private dashboardService : PortDashboardService) { }

  ngOnInit() {
    this.getGoodsFlow();
  }

  public getGoodsFlow(){
    this.dashboardService.getGoodsFlows(this.portId)
      .subscribe( response => {
        this.goodsFlow = response;
      })
  }
}
