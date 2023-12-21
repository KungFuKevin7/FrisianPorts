import {Component, OnInit} from '@angular/core';
import {TransportService} from "../../../services/transport.service";
import {Transport} from "../../../models/Transport";
import {GoodsflowService} from "../../../services/dashboard-services/goodsflow.service";
import {GoodsFlowDto} from "../../../models/DTO/GoodsFlowDto";
import {CargoTransportService} from "../../../services/cargo-transport.service";
import {PortService} from "../../../services/port.service";
import {Port} from "../../../models/Port";

@Component({
  selector: 'app-overview-database-items',
  templateUrl: './overview-database-items.component.html',
  styleUrls: ['./overview-database-items.component.css']
})
export class OverviewDatabaseItemsComponent implements OnInit{

  flowOfGoods! : GoodsFlowDto[];

  ports! : Port[];

  constructor(private goodsFlowService : GoodsflowService,
              private cargoTransportService : CargoTransportService,
              private portService :PortService) {

  }

  ngOnInit(): void {
    this.goodsFlowService.getAllGoodsFlows().subscribe(
      result => {
        this.flowOfGoods = result;
      }
    )

    this.portService.get().subscribe(
      results => {
        this.ports = results
      }
    )
  }

  removeCargoTransport(idOfItemToRemove : number) {
    let warning = confirm("Weet u het zeker?\nNa deze actie zal alle data die betrekking heeft tot deze goederenstroom verloren gaan.")

    if (warning){
      this.cargoTransportService.delete(idOfItemToRemove).subscribe(
      response => {
        console.log(response);
        window.location.reload();
      }
      );
    }else{
      //alert("Niets is verwijdert.")
    }
  }

  removePort(idOfPort : number){
    let warning = confirm("Weet u het zeker?\nDeze actie kan niet ongedaan worden.")

    if (warning){
      this.portService.delete(idOfPort).subscribe(
        response => {
          console.log(response);
          window.location.reload();
        }
      );
    }else{
      //alert("Niets is verwijdert.")
    }
  }
}
