import {Component, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {CargoTransportService} from "../../../../services/cargo-transport.service";
import {ShipMovementService} from "../../../../services/dashboard-services/ship-movement.service";
import {TonnageService} from "../../../../services/dashboard-services/tonnage.service";

@Component({
  selector: 'app-single-data-collection',
  templateUrl: './single-data-collection.component.html',
  styleUrls: ['./single-data-collection.component.css'],
  providers: [ShipMovementService, TonnageService]
})
export class SingleDataCollectionComponent {

  @Input() portId! : number;
  @Input() selectedYear : number = 0;
  @Input() selectedMonth : number = 0;

  importAmount : number = 0;
  exportAmount : number = 0;
  importWeight : number = 0;
  exportWeight : number = 0;

  constructor(private shipMovementService : ShipMovementService,
              private tonnageService : TonnageService) {

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
    this.shipMovementService.getPortImport(this.portId,
      this.selectedYear,
      this.selectedMonth).subscribe(
      response => {
        this.importAmount = response;
      }
    );

    this.shipMovementService.getPortExport(this.portId,
      this.selectedYear,
      this.selectedMonth).subscribe(
      response => {
        this.exportAmount = response;
      }
    );
  }

  //Gets total tonnage for both import and export
  public getTonnage()
  {
    this.tonnageService.getPortImportTonnage(this.portId,
      this.selectedYear,
      this.selectedMonth).subscribe(
      response => {
        this.importWeight = response;
      }
    );

    this.tonnageService.getPortExportTonnage(this.portId,
      this.selectedYear,
      this.selectedMonth).subscribe(
    response => {
      this.exportWeight = response;
    }
  );
  }


}
