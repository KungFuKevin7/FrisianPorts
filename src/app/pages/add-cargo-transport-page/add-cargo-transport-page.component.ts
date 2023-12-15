import {Component, OnInit} from '@angular/core';
import {Port} from "../../models/Port";
import {PortService} from "../../services/port.service";
import {CargoTransportService} from "../../services/cargo-transport.service";
import {RouteService} from "../../services/route.service";
import {Route} from "@angular/router";
import {CargoTransport} from "../../models/CargoTransport";
import {concatMap} from "rxjs";

@Component({
  selector: 'app-add-cargo-transport-page',
  templateUrl: './add-cargo-transport-page.component.html',
  styleUrls: ['./add-cargo-transport-page.component.css'],
  providers: [PortService, CargoTransportService, RouteService]
})
export class AddCargoTransportPageComponent implements OnInit {

  date : any;
  Frequency! : string;
  portsToChoose! : Port[];

  departurePortId! : number;
  arrivalPortId! : number;


  constructor(private portService : PortService,
              private cargoTransportService : CargoTransportService,
              private routeService : RouteService) {
  }

  ngOnInit(): void {
    this.portService.get().subscribe(
      listOfPorts => {
        this.portsToChoose = listOfPorts;
      }
    )
  }

  public setDateToday(){
    this.date = new Date(2002,12,4);
  }

  public setDeparture(input : any)
  {
    console.log("Departure set to: " + input)
    this.departurePortId = input;
    //this.addToDatabase()
  }

  public setArrival(portId : any)
  {
    console.log("Arrival set to: " +  portId)
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
        Date_Started : this.date,
        Added_By_Id : 1
      }
    }
  }

}
