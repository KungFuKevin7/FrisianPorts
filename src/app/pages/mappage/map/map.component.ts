import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {PortService} from "../../../services/port.service";
import {Port} from "../../../models/Port";

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

    const customMarker = L.icon({
      iconUrl: '../assets/icons/marker.png',
      shadowUrl: '../assets/icons/marker-shadow.png',
      iconSize: [50, 75],
      shadowSize: [50,75],
      shadowAnchor: [10,67],
      iconAnchor: [25, 75],
      popupAnchor: [0,-60]
    });

    let marker = L.marker(
      [Number(port.latitude), Number(port.longitude)],
      { icon: customMarker }
    );

    marker.on('click',function()
    {
      window.location.href = `http://localhost:4200/port-dashboard?id=${port.port_Id}`;
    })
      .on('mouseover', function (){
      marker.bindPopup(`<h3>${port.port_Location}</h3>
                                <p>Haven Code: ${port.port_Name}</p>`).openPopup();
    })
      .on('mouseout',function (){
      marker.closePopup();
    })

    marker.addTo(this.map);
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
    this.portService.get()
      .subscribe(result => {
        this.portLocations = result
        this.addPortsFromList(this.portLocations);
      });
  }

}
