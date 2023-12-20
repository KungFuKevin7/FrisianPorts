import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ShipMovementService} from "../../../../../services/dashboard-services/ship-movement.service";
import {TonnageService} from "../../../../../services/dashboard-services/tonnage.service";

@Component({
  selector: 'app-province-import-inside',
  templateUrl: './province-import-inside.component.html',
  styleUrls: ['./province-import-inside.component.css'],
  providers: [ShipMovementService, TonnageService]
})
export class ProvinceImportInsideComponent implements OnInit, OnChanges {

  @Input() ProvinceId: number = 0;
  @Input() selectedYear: number = 0;
  @Input() selectedMonth : number = 0;

  TonnageWithinProvince!: number;
  TonnageToOutsideProvince! : number;
  TonnageFromOutsideProvince! : number;

  TransportWithinProvince!: number;
  TransportToOutsideProvince! : number;
  TransportFromOutsideProvince! : number;


  constructor(private shipMovementService : ShipMovementService,
              private tonnageService : TonnageService) {
  }

  ngOnInit(){
    this.fetchTonnageData();
    this.fetchTransportsData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchTonnageData();
    this.fetchTransportsData();
  }

  public fetchTonnageData()
  {
    this.tonnageService.getTonnageWithinProvince(this.ProvinceId,
      this.selectedYear,
      this.selectedMonth)
      .subscribe( result => {
        this.TonnageWithinProvince = result;
      });

    this.tonnageService.getExportToOutsideProvince(this.ProvinceId,
      this.selectedYear,
      this.selectedMonth)
      .subscribe(result => {
        this.TonnageToOutsideProvince = result;
      });

    this.tonnageService.getImportFromProvince(this.ProvinceId,
      this.selectedYear,
      this.selectedMonth)
      .subscribe(result => {
        this.TonnageFromOutsideProvince = result;
      });
  }

  public fetchTransportsData()
  {
    this.shipMovementService.getTransportsWithinProvince(this.ProvinceId,
      this.selectedYear,
      this.selectedMonth)
      .subscribe( result => {
        this.TransportWithinProvince = result;
      });

    this.shipMovementService.getTransportsToOutsideProvince(this.ProvinceId,
      this.selectedYear,
      this.selectedMonth)
      .subscribe(result => {
        this.TransportToOutsideProvince = result;
      });

    this.shipMovementService.getTransportsFromOutsideProvince(this.ProvinceId,
      this.selectedYear,
      this.selectedMonth)
      .subscribe(result => {
        this.TransportFromOutsideProvince = result;
      });
  }
}
