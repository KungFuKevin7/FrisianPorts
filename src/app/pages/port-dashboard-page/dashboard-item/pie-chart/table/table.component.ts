import {Component, Input, OnInit} from '@angular/core';
import {PortDashboardService} from "../../../../../services/port-dashboard.service";
import {TransportedCargoDTO} from "../../../../../models/DTO/TransportedCargoDTO";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [PortDashboardService]
})

export class TableComponent implements OnInit{
  @Input() Title : string = "";

  transported : any;

  constructor(private dashboardService : PortDashboardService) {
  }

  ngOnInit() {
    this.getImportTransport();
  }

  public getImportTransport()
  {
    this.dashboardService.getImportDistribution().subscribe(
      response => {
        this.transported = response;
        console.log(response);
      }
    )
  }


}
