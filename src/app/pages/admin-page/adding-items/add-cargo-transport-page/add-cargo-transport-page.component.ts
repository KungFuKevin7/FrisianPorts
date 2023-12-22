import {Component, OnInit} from '@angular/core';
import {Port} from "../../../../models/Port";
import {PortService} from "../../../../services/port.service";
import {CargoTransportService} from "../../../../services/cargo-transport.service";
import {RouteService} from "../../../../services/route.service";
import {Route, Router} from "@angular/router";
import {CargoTransport} from "../../../../models/CargoTransport";
import {concatMap} from "rxjs";
import {CargoTransportRouteDTO} from "../../../../models/DTO/CargoTransportRouteDTO";
import {CargoTransportRouteService} from "../../../../services/cargo-transport-route.service";
import {SessionHandlerService} from "../../../../services/session-handler.service";

@Component({
  selector: 'app-add-cargo-transport-page',
  templateUrl: './add-cargo-transport-page.component.html',
  styleUrls: ['./add-cargo-transport-page.component.css'],
  providers: [PortService, CargoTransportService, RouteService]
})
export class AddCargoTransportPageComponent implements OnInit {

  Date : any;
  Frequency! : string;
  portsToChoose! : Port[];

  departurePortId! : number;
  arrivalPortId! : number;


  constructor(private portService : PortService,
              private cargoTransportRouteService : CargoTransportRouteService,
              private sessionService : SessionHandlerService,
              private router : Router){
  }

  ngOnInit(): void {
    let userId = this.sessionService.getLoggedInUser();

    if (Number(userId) != 0 || userId != null){
      this.portService.get().subscribe(
        listOfPorts => {
          this.portsToChoose = listOfPorts;
        }
      )
    } else {
      this.router.navigate(['forbidden-error'])
    }
  }

  public setDeparture(input : any)
  {
    this.departurePortId = input;
  }

  public setArrival(portId : any)
  {
    this.arrivalPortId = portId;
  }

  public addToDatabase()
  {
    if (this.departurePortId == this.arrivalPortId){
      alert("Kan niet met dezelfde haven verbonden zijn!");
    }

    else {
      let newAddedRoute = {
        Route_Id : 0,
        Departure_Port_Id : this.departurePortId,
        Arrival_Port_Id : this.arrivalPortId,
        Cargo_Transport_Id : 0,
        Frequency : this.Frequency,
        Date_Started : this.Date,
        Added_By_Id : 1
      }
      this.cargoTransportRouteService.add(newAddedRoute).subscribe(
        result => {
          console.log(result);
        }
      );
    }
  }

}
