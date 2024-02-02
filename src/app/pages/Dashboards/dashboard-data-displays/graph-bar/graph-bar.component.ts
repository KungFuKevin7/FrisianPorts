import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {concat, map} from "rxjs";
import {json} from "d3";
import {YearlyTransportDTO} from "../../../../models/DTO/YearlyTransportDTO";
import {PeriodService} from "../../../../services/dashboard-services/period.service";
import {Constants} from "../../../../.constants/constants";
import {TransportedCargoDTO} from "../../../../models/DTO/TransportedCargoDTO";

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
    this.periodService.getPortYearlyReport(this.portId).subscribe(
      (response : YearlyTransportDTO[]) => {
        this.YearlyData = response.map(item => ({
            name: item.year.toString(),
            series : [
              {
                "name": 'Export',
                "value": this.sumTonnage(item.transported, 'Export')
              },
              {
                "name": 'Import',
                "value": this.sumTonnage(item.transported, 'Import')
              }
            ]
        } ));
        //console.log(response)
      }
    )
  }

  public sumTonnage(listOfCargo : TransportedCargoDTO[], value : string)
  {
    let totalTonnage = 0;
      listOfCargo.forEach( cargoItem => {
        if (cargoItem.cargo_Type_Name.toLowerCase()
          == value.toLowerCase()){
            totalTonnage += cargoItem.transported_Weight;
        }
      }
    );
    return totalTonnage;
  }
/* Example data format
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
