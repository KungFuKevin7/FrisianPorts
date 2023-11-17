import {Component, Input, OnInit} from '@angular/core';
import {CargoDistributionService} from "../../../../services/dashboard-services/cargo-distribution.service";
import {Constants} from "../../../../.constants/constants";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  providers: [CargoDistributionService]
})

export class PieChartComponent implements OnInit{

  constructor(private cargoDistributionService : CargoDistributionService) {
  }

  @Input() portId! : number;
  Import : any;
  Export : any;

  colorScheme = Constants.colourScheme;

  ngOnInit(): void {
    this.getImport();
    this.getExport();
  }

  public getImport()
  {
    this.cargoDistributionService.getImportDistributionPort(this.portId)
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

  public getExport() {
    this.cargoDistributionService.getExportDistributionPort(this.portId)
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
