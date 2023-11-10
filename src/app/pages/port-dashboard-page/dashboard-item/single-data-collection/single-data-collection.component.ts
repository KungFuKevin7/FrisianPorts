import {Component, Input, OnInit, Output} from '@angular/core';
import {CargoTransportService} from "../../../../services/cargo-transport.service";
import {CargoService} from "../../../../services/cargo.service";
import {Cargo} from "../../../../models/Cargo";
import {PortDashboardService} from "../../../../services/port-dashboard.service";


@Component({
  selector: 'app-single-data-collection',
  templateUrl: './single-data-collection.component.html',
  styleUrls: ['./single-data-collection.component.css'],
  providers: [CargoTransportService,PortDashboardService]
})
export class SingleDataCollectionComponent {

  portId : number = 2;
  importAmount : number = 0;
  exportAmount : number = 0;
  importWeight : number = 0;
  exportWeight : number = 0;

  constructor(private portDashboardService : PortDashboardService) {

  }

  ngOnInit(): void {
    this.getShipments();
    this.getWeights();
  }

  //gets import and export amount of ships
  public getShipments() : any{
    this.portDashboardService.getImportShips().subscribe(
      response => {
        //console.log("Import :" + response);
        this.importAmount = response.length;
      }
    );

    this.portDashboardService.getExportShips().subscribe(
      response => {
        //console.log("Export: " + response);
        this.exportAmount = response.length;
      }
    );
  }

  //gets total weight of import and export
  public getWeights()
  {
    this.portDashboardService.getImportWeight().subscribe(
      response => {
        this.importWeight = response;
      }
    );

    this.portDashboardService.getExportWeight().subscribe(
    response => {
      this.exportWeight = response;
    }
  );
  }


}
