import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {PortService} from "../../services/port.service";
import {Port} from "../../models/Port";
import {Router} from "@angular/router";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ PortService ]
})
export class MapComponent implements OnInit {

  portLocations! : Port[];

  private map: any;
  private mapUrl: string = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  constructor(private portService : PortService)
  {

  }

  ngOnInit(): void {
    this.getLocationsOnMap();     //First get Locations
    this.initMap();               //After receiving Locations, then initialize map.
  }

  private initMap(): void {
    this.map = L.map('map').setView([53.1651, 5.7808], 9);
    L.tileLayer(this.mapUrl).addTo(this.map);
  }

  public addMarker(port : Port): void {
    let marker = new L.Marker([Number(port.latitude), Number(port.longitude)]);
    marker.addTo(this.map).bindPopup(`${port.port_Name} - ${port.port_Location}`)
      .on('click',function(e) {
        window.location.href = `http://localhost:4200/port-dashboard?id=${port.port_Id}`;
    });
  }

  public addPortsFromList(ports : Port[])
  {
    ports.forEach(port =>
    {
      this.addMarker(port)
    });
  }

  public getLocationsOnMap()
  {
    this.portService.getPorts()
      .subscribe(result => {
        this.portLocations = result
        this.addPortsFromList(this.portLocations);
      });
  }

}
