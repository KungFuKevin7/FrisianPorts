import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PortDashboardService} from "../../../../services/port-dashboard.service";
import {concat, map} from "rxjs";
import {json} from "d3";
import {YearlyTransportDTO} from "../../../../models/DTO/YearlyTransportDTO";

@Component({
  selector: 'app-graph-bar',
  templateUrl: './graph-bar.component.html',
  styleUrls: ['./graph-bar.component.css'],
  providers: [PortDashboardService]
})
export class GraphBarComponent implements OnInit {


  @Input() portId! : number;
  Import: any;
  Export: any;

  constructor(private dashboardService: PortDashboardService) {
  }

  ngOnInit(): void {
    this.getYearlyImport();
    this.getYearlyExport();
  }

  public getYearlyImport()
  {
    this.dashboardService.getYearlyImport(this.portId).subscribe(
      (response : YearlyTransportDTO[]) =>
      {
        this.Import = response.map(item => ({
          name: item.year.toString(),
          series: [
            {
              "name": item.transported.cargo_Type_Name,
              "value": item.transported.transported_Weight
            }
          ]
        }))

      }
    );
  }

  public getYearlyExport()
  {
    this.dashboardService.getYearlyExport(this.portId).subscribe(
      (response : YearlyTransportDTO[]) =>
        {
          this.Export = response.map(item => ({
          name: item.year.toString(),
          series: [
            {
            "name": item.transported.cargo_Type_Name,
            "value": item.transported.transported_Weight
            }
          ]
        }))
        }
    );
  }
/*
  displayData =[{"name": "2022",
    "series": [
      {
        "name": "Import",
        "value": 7300000
      },
      {
        "name": "Export",
        "value": 8940000
      }
    ]
  },{
    "name": "2023",
    "series": [
      {
        "name": "Import",
        "value": 2555554
      },
      {
        "name": "Export",
        "value": 2191817
      }
    ]
  }];*/


}
