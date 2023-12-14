import {Component, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {CargoTransportService} from "../../../../services/cargo-transport.service";

import {TotalPortService} from "../../../../services/dashboard-services/total-port.service";


@Component({
  selector: 'app-single-data-collection',
  templateUrl: './single-data-collection.component.html',
  styleUrls: ['./single-data-collection.component.css'],
  providers: [CargoTransportService, TotalPortService]
})
export class SingleDataCollectionComponent {

  @Input() portId! : number;
  @Input() selectedYear : number = 0;
  importAmount : number = 0;
  exportAmount : number = 0;
  importWeight : number = 0;
  exportWeight : number = 0;

  constructor(private totalService : TotalPortService) {

  }

  ngOnInit(): void {
    this.getShipments();
    this.getTonnage();
  }

  //Call the same methods as OnInit but this time with the period filter
  ngOnChanges(changes: SimpleChanges): void {
    this.getShipments();
    this.getTonnage();
  }


  //Gets amount of ships for import and export respectively
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

  //Gets total tonnage for both import and export
  public getTonnage()
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
