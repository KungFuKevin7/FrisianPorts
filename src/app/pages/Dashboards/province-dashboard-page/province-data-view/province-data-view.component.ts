import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TonnageService} from "../../../../services/dashboard-services/tonnage.service";
import {ShipMovementService} from "../../../../services/dashboard-services/ship-movement.service";

@Component({
  selector: 'app-province-data-view',
  templateUrl: './province-data-view.component.html',
  styleUrls: ['./province-data-view.component.css'],
  providers: [TonnageService, ShipMovementService]
})
export class ProvinceDataViewComponent implements OnInit, OnChanges {

  @Input() ProvinceId: number = 0;
  @Input() selectedYear: number = 0;
  ImportMovements!: number;
  ExportMovements!: number;
  ImportTonnage!: number;
  ExportTonnage!: number;

  constructor(private shipMovementService: ShipMovementService,
              private tonnageService: TonnageService) {
  }

  ngOnInit(): void {
    this.getShipMovements();
    this.getTonnages()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getShipMovements();
    this.getTonnages()
  }


  public getShipMovements()
  {
    this.shipMovementService.getProvinceImport(this.ProvinceId,this.selectedYear).subscribe(
      result => {
        //console.log(result);
        this.ImportMovements = result;
      });

    this.shipMovementService.getProvinceExport(this.ProvinceId,this.selectedYear).subscribe(
      result => {
        //console.log(result)
        this.ExportMovements = result;
      });
  }

  public getTonnages()
  {
    this.tonnageService.getProvinceImportTonnage(this.ProvinceId,this.selectedYear).subscribe(
      result => {
        //console.log(result);
        this.ImportTonnage = result;
      }
    );
    this.tonnageService.getProvinceExportTonnage(this.ProvinceId,this.selectedYear).subscribe(
      result => {
        //console.log(result);
        this.ExportTonnage = result;
      }
    );
  }
}


