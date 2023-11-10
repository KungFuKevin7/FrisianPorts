import {Component, Input, OnInit} from '@angular/core';
import {PortDashboardService} from "../../../../services/port-dashboard.service";
import {TransportedCargoDTO} from "../../../../models/DTO/TransportedCargoDTO";
import {map} from "rxjs";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  providers: [PortDashboardService]
})

export class PieChartComponent implements OnInit{

  constructor(private dashboardService : PortDashboardService) {
  }

  Import : any;
  Export : any;

  ngOnInit(): void {
    this.Import = this.getImport();
    this.getExport();
  }

  public getImport()
  {
    this.dashboardService.getImportDistribution()
      .pipe(
        map((data: any[]) =>{
            return data.map(item => ({
              name: item.Cargo_Type_Name,
              value : item.Transported_Weight
            })
          )
        })
      );

  }

  public getExport()
  {
    this.dashboardService.getExportDistribution()
      .subscribe(response => {
         this.Export = response;
      }
      );
  }

  testResult = [
    {
      "name": "Plants",
      "value": 91
    },
    {
      "name": "Chemicals",
      "value": 40
    }]


}
