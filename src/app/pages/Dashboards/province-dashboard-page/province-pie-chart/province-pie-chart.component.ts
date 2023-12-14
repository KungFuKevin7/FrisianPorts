import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {
  CargoDistributionProvinceService
} from "../../../../services/dashboard-services/cargo-distribution-province.service";
import {Constants} from "../../../../.constants/constants";

@Component({
  selector: 'app-province-pie-chart',
  templateUrl: './province-pie-chart.component.html',
  styleUrls: ['./province-pie-chart.component.css'],
  providers: [CargoDistributionProvinceService]
})
export class ProvincePieChartComponent implements OnInit, OnChanges{

  @Input() selectedYear : number = 0;
  @Input() provinceId! : number;
  Import : any;
  Export : any;

  colorScheme = Constants.colourScheme;

  constructor(private cargoDistributionService : CargoDistributionProvinceService) {
  }

  ngOnInit(): void {
    this.getImportDistribution();
    this.getExportDistribution();
  }

  ngOnChanges(changes:SimpleChanges): void {
    this.getImportDistribution();
    this.getExportDistribution();
  }

  public getImportDistribution()
  {
    this.cargoDistributionService.getImportDistributionPort(this.provinceId, this.selectedYear)
      .subscribe(
        response => {
          this.Import = response.map(item => (
            {
              name: item.cargo_Type_Name,
              value: item.transported_Weight
            })
          );
        })
  }

  public getExportDistribution()
  {
    this.cargoDistributionService.getExportDistributionPort(this.provinceId, this.selectedYear)
      .subscribe(
        response => {
          this.Export = response.map(item => (
            {
              name: item.cargo_Type_Name,
              value: item.transported_Weight
            })
          );
        })
  }
}
