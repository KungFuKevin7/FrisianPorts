import {Component, OnInit} from '@angular/core';
import {TransportService} from "../../../services/transport.service";
import {Transport} from "../../../models/Transport";
import {GoodsflowService} from "../../../services/dashboard-services/goodsflow.service";
import {GoodsFlowDto} from "../../../models/DTO/GoodsFlowDto";
import {CargoTransportService} from "../../../services/cargo-transport.service";

@Component({
  selector: 'app-overview-database-items',
  templateUrl: './overview-database-items.component.html',
  styleUrls: ['./overview-database-items.component.css']
})
export class OverviewDatabaseItemsComponent implements OnInit{

  flowOfGoods! : GoodsFlowDto[];

  constructor(private goodsFlowService : GoodsflowService,
              private cargoTransportService : CargoTransportService) {

  }

  ngOnInit(): void {
    this.goodsFlowService.getAllGoodsFlows().subscribe(
      result => {
        this.flowOfGoods = result;
      }
    )
  }

  removeItem(idOfItemToRemove : number) {
    this.cargoTransportService.delete(idOfItemToRemove);
  }
}
