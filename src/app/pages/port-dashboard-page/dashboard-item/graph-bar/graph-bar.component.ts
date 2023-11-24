import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {concat, map} from "rxjs";
import {json} from "d3";
import {YearlyTransportDTO} from "../../../../models/DTO/YearlyTransportDTO";
import {PeriodService} from "../../../../services/dashboard-services/period.service";
import {Constants} from "../../../../.constants/constants";

@Component({
  selector: 'app-graph-bar',
  templateUrl: './graph-bar.component.html',
  styleUrls: ['./graph-bar.component.css'],
  providers: [PeriodService]
})
export class GraphBarComponent implements OnInit {

  @Input() portId! : number;
  Import: any;
  Export: any;
  YearlyData : any;

  colourScheme = Constants.secondColourScheme;

  constructor(private periodService : PeriodService) {
  }

  ngOnInit(): void {
    this.getYearlyData();
  }

  //Get necessary data and reformat the data,
  //so the graph-library can visualize
  public getYearlyData()
  {
    this.periodService.getYearlyReport(this.portId).subscribe(
      (response : YearlyTransportDTO[]) => {
        this.YearlyData = response.map(item => ({
            name: item.year.toString(),
            series : [
              {
                "name": item.transported[0].cargo_Type_Name,
                "value": item.transported[0].transported_Weight
              },
              {
                "name": item.transported[1].cargo_Type_Name,
                "value": item.transported[1].transported_Weight
              }
            ]
        }));
      }
    )

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
