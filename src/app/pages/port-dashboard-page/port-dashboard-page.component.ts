import {Component, OnInit} from '@angular/core';
import {PortService} from "../../services/port.service";
import {Port} from "../../models/Port";
import {ActivatedRoute} from "@angular/router";
import {CargoTransportService} from "../../services/cargo-transport.service";

@Component({
  selector: 'app-port-dashboard-page',
  templateUrl: './port-dashboard-page.component.html',
  styleUrls: ['./port-dashboard-page.component.css'],
  providers: [PortService, CargoTransportService]
})
export class PortDashboardPageComponent implements OnInit{

  selectedPort! : Port;
  portId : number = 1;

  constructor(private portService : PortService,
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
