import {Component, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {CargoTransportService} from "../../../../services/cargo-transport.service";

import {TotalService} from "../../../../services/dashboard-services/total.service";


@Component({
  selector: 'app-single-data-collection',
  templateUrl: './single-data-collection.component.html',
  styleUrls: ['./single-data-collection.component.css'],
  providers: [CargoTransportService, TotalService]
})
export class SingleDataCollectionComponent {

  @Input() portId! : number;
  @Input() selectedYear : number = 0;
  importAmount : number = 0;
  exportAmount : number = 0;
  importWeight : number = 0;
  exportWeight : number = 0;

  constructor(private totalService : TotalService) {

  }

  ngOnInit(): void {
    this.getShipments();
    this.getWeights();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getShipments();
    this.getWeights();
  }


  //gets import and export amount of ships
  public getShipments() : any{
    this.totalService.getImport(this.portId, this.selectedYear).subscribe(
      response => {
        this.importAmount = response;
      }
    );

    this.totalService.getExport(this.portId, this.selectedYear).subscribe(
      response => {
        this.exportAmount = response;
      }
    );
  }

  //gets total weight of import and export
  public getWeights()
  {
    this.totalService.getImportTonnage(this.portId, this.selectedYear).subscribe(
      response => {
        this.importWeight = response;
      }
    );

    this.totalService.getExportTonnage(this.portId, this.selectedYear).subscribe(
    response => {
      this.exportWeight = response;
    }
  );
  }


}
