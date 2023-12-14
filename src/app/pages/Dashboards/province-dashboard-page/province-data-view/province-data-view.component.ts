import {Component, Input, OnInit} from '@angular/core';
import {TotalProvinceService} from "../../../../services/dashboard-services/total-province.service";

@Component({
  selector: 'app-province-data-view',
  templateUrl: './province-data-view.component.html',
  styleUrls: ['./province-data-view.component.css']
})
export class ProvinceDataViewComponent implements OnInit{

  @Input() ProvinceId : number = 0;
  ImportMovements! : number;
  ExportMovements! : number;
  ImportTonnage! : number;
  ExportTonnage! : number;

  constructor(private totalProvinceService : TotalProvinceService) {
  }

  ngOnInit(): void {
    this.getShipMovements();
    this.getTonnages()
  }

  public getShipMovements()
  {
    this.totalProvinceService.getImport(this.ProvinceId,0).subscribe(
      result => {
        console.log(result);
        this.ImportMovements = result;
      });

    this.totalProvinceService.getExport(this.ProvinceId,0).subscribe(
      result => {
        console.log(result)
        this.ExportMovements = result;
      });
  }

  public getTonnages()
  {
    this.totalProvinceService.getImportTonnage(this.ProvinceId,0).subscribe(
      result => {
        console.log(result);
        this.ImportTonnage = result;
      }
    );
    this.totalProvinceService.getExportTonnage(this.ProvinceId,0).subscribe(
      result => {
        console.log(result);
        this.ExportTonnage = result;
      }
    );
  }
}


