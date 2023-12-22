import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PortService} from "../../../services/port.service";
import {Port} from "../../../models/Port";
import {ActivatedRoute} from "@angular/router";
import {ErrorHandlerService} from "../../../services/error-handler.service";

@Component({
  selector: 'app-port-dashboard-page',
  templateUrl: './port-dashboard-page.component.html',
  styleUrls: ['./port-dashboard-page.component.css'],
  providers: [PortService]
})
export class PortDashboardPageComponent implements OnInit{

  @Input() selectedYear : number = 0;
  @Input() selectedMonth : number = 0;
  selectedPort : Port = {
    portId : 0,
    portName : "",
    portLocation : "",
    latitude: "",
    longitude: "",
    provinceId: 0,
  };
  portId! : number;

  constructor(private portService : PortService,
              private activeRoute : ActivatedRoute)
  {

  }

  ngOnInit() : void
  {
    this.activeRoute.queryParams.subscribe(
      params => {
        if (params['id'] != null) {
          this.portId = params['id']; //get query parameter for page display
        }
      }
    );

    this.getPortInfo(this.portId);
  }

  //Gets called onInit, to get the selected port
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

  //Gets the year selected in the dashboard-filter component
  public getYear(receivedYear : any)
  {
    this.selectedYear = receivedYear;
  }

  //Gets the selected month from dashboard-filter
  public getMonth(receivedMonth : any)
  {
    this.selectedMonth = receivedMonth;
  }

}
