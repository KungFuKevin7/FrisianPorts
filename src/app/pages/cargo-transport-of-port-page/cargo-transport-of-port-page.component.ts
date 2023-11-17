import {Component, OnInit} from '@angular/core';
import {GoodsflowService} from "../../services/dashboard-services/goodsflow.service";
import {ActivatedRoute} from "@angular/router";
import {PortService} from "../../services/port.service";
import {Port} from "../../models/Port";

@Component({
  selector: 'app-cargo-transport-of-port-page',
  templateUrl: './cargo-transport-of-port-page.component.html',
  styleUrls: ['./cargo-transport-of-port-page.component.css'],
  providers: [GoodsflowService]
})
export class CargoTransportOfPortPageComponent implements OnInit{

  portId : number = 0;
  port! : Port;
  numberOfResults : number = 0;

  constructor(private activeRoute : ActivatedRoute,
              private portService : PortService) {
  }

  ngOnInit() {
    this.activeRoute.queryParams
      .subscribe( parameter => {
          this.portId = parameter['id'];
        }
      )
    this.getRequestedPort()
  }

  public getRequestedPort()
  {
    this.portService.getById(this.portId)
      .subscribe( port => {
        this.port = port;
      })
  }

  public showResultCount(receivedCount : number){
    this.numberOfResults = receivedCount;
  }

}
