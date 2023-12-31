import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CargoDistributionPortService} from "../../../../services/dashboard-services/cargo-distribution-port.service";
import {Constants} from "../../../../.constants/constants";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  providers: [CargoDistributionPortService]
})

export class PieChartComponent implements OnInit, OnChanges{

  constructor(private cargoDistributionService : CargoDistributionPortService) {
  }

  @Input() selectedYear : number = 0;
  @Input() selectedMonth : number = 0;
  @Input() portId! : number;
  Import : any;
  Export : any;

  colorScheme = Constants.colourScheme;

  ngOnInit(): void {
    this.getImport();
    this.getExport();
  }

  //Call the same methods as OnInit, but now with added period filter, if given
  ngOnChanges(changes:SimpleChanges): void {
    this.getImport();
    this.getExport();
  }

  //Get distribution of cargo for the import
  public getImport()
  {
    this.cargoDistributionService.getImportDistributionPort(this.portId, this.selectedYear, this.selectedMonth)
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

  //Get the distribution of cargo for the export
  public getExport() {
    this.cargoDistributionService.getExportDistributionPort(this.portId, this.selectedYear, this.selectedMonth)
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
