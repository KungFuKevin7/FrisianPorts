import {Component, Inject, OnInit} from '@angular/core';
import {PortService} from "../../services/port.service";
import {Port} from "../../models/Port";
import {ActivatedRoute} from "@angular/router";
import {PortDashboardService} from "../../services/port-dashboard.service";
import {DashboardItemComponent} from "./dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-port-dashboard-page',
  templateUrl: './port-dashboard-page.component.html',
  styleUrls: ['./port-dashboard-page.component.css'],
  providers: [PortService]
})
export class PortDashboardPageComponent implements OnInit{

  selectedPort! : Port;
  portId! : number;

  constructor(private portService : PortService,
              private dashboardService : PortDashboardService,
              private activeRoute : ActivatedRoute)
  {

  }

  ngOnInit() : void
  {
    this.activeRoute.queryParams.subscribe(
      params => {
        this.portId = params['id']; //get query parameter for page display
      }
    );

    this.getPortInfo(this.portId);
  }

  public getPortInfo(id : number)
  {
    this.portService.getById(id).subscribe(
      response => {
        if (response) {
          this.selectedPort = response;
        }
      }
    );

  }

}
