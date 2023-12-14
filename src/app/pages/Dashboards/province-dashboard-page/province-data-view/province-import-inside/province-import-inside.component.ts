import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TotalProvinceService} from "../../../../../services/dashboard-services/total-province.service";

@Component({
  selector: 'app-province-import-inside',
  templateUrl: './province-import-inside.component.html',
  styleUrls: ['./province-import-inside.component.css']
})
export class ProvinceImportInsideComponent implements OnInit, OnChanges {

  @Input() ProvinceId: number = 0;
  @Input() SelectedYear: number = 0;

  TonnageWithinProvince!: number;
  TonnageToOutsideProvince! : number;
  TonnageFromOutsideProvince! : number;

  TransportWithinProvince!: number;
  TransportToOutsideProvince! : number;
  TransportFromOutsideProvince! : number;


  constructor(private totalProvinceService: TotalProvinceService) {
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
    this.totalProvinceService.getTonnageWithinProvince(this.ProvinceId, this.SelectedYear)
      .subscribe( result => {
        this.TonnageWithinProvince = result;
      });

    this.totalProvinceService.getExportToOutsideProvince(this.ProvinceId, this.SelectedYear)
      .subscribe(result => {
        this.TonnageToOutsideProvince = result;
      });

    this.totalProvinceService.getImportFromProvince(this.ProvinceId, this.SelectedYear)
      .subscribe(result => {
        this.TonnageFromOutsideProvince = result;
      });
  }

  public fetchTransportsData()
  {
    this.totalProvinceService.getTransportsWithinProvince(this.ProvinceId, this.SelectedYear)
      .subscribe( result => {
        this.TransportWithinProvince = result;
      });

    this.totalProvinceService.getTransportsToOutsideProvince(this.ProvinceId, this.SelectedYear)
      .subscribe(result => {
        this.TransportToOutsideProvince = result;
      });

    this.totalProvinceService.getTransportsFromOutsideProvince(this.ProvinceId, this.SelectedYear)
      .subscribe(result => {
        this.TransportFromOutsideProvince = result;
      });
  }
}
