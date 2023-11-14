import {Component, Input, OnInit} from '@angular/core';
import {PortDashboardService} from "../../../../../services/port-dashboard.service";

@Component({
  selector: 'app-small-single-data-collection',
  templateUrl: './small-single-data-collection.component.html',
  styleUrls: ['./small-single-data-collection.component.css'],
  providers: [PortDashboardService]
})
export class SmallSingleDataCollectionComponent implements OnInit{

  @Input() portId! : number;
  avgImport : number = 0;
  avgExport : number = 0;

  constructor(private dashboardService : PortDashboardService) {
  }

  ngOnInit(): void {
    this.getAvgExport();
    this.getAvgImport();
  }

  public getAvgImport()
  {
    this.dashboardService.getAverageImport(this.portId).subscribe(
      response => {
        this.avgImport = response;
      }
    )
  }

  public getAvgExport()
  {
    this.dashboardService.getAverageExport(this.portId).subscribe(
      response => {
        this.avgExport =  response;
      }
    )
  }
}
