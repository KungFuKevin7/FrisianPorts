import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {PortService} from "../../../services/port.service";
import {Port} from "../../../models/Port";
import {Province} from "../../../models/Province";
import {ProvinceService} from "../../../services/province.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ PortService ]
})
export class MapComponent implements OnInit {

  portLocations! : Port[];
  provinceLocations! : Province[];

  private map: any;
  private mapUrl: string = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  constructor(private portService : PortService,
              private provinceService : ProvinceService)
  {

  }

  ngOnInit(): void {
    this.getLocationsOnMap();     //First get Locations
    this.initMap();               //After receiving Locations, then initialize map.
  }

  //Initialize Leaflet map, set the standard view on Friesland
  private initMap(): void {
    this.map = L.map('map').setView([53.1651, 5.7808], 9);
    L.tileLayer(this.mapUrl).addTo(this.map);
  }

  //Add a marker to the initialized map
  public addPortMarker(port : Port): void {

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
      window.location.href = `http://localhost:4200/port-dashboard?id=${port.portId}`;
    })
      .on('mouseover', function (){
      marker.bindPopup(`<h3>${port.portLocation}</h3>
                                <p>Haven Code: ${port.portName}</p>`).openPopup();
    })
      .on('mouseout',function (){
      marker.closePopup();
    })

    marker.addTo(this.map);
  }

  public addProvinceMarker(province : Province) : void{
    const customMarker = L.icon({
      iconUrl: '../assets/icons/provinceMarker.png',
      shadowUrl: '../assets/icons/marker-shadow.png',
      iconSize: [50, 75],
      shadowSize: [50,75],
      shadowAnchor: [10,67],
      iconAnchor: [25, 75],
      popupAnchor: [0,-60]
    });

    let marker = L.marker(
      [Number(province.latitude), Number(province.longitude)],
      { icon: customMarker }
    );

    marker.on('click',function()
    {
      window.location.href = `http://localhost:4200/province-dashboard?id=${province.provinceId}`;
    })
      .on('mouseover', function (){
        marker.bindPopup(`<h3>${province.provinceName}</h3>`)
          .openPopup();
      })
      .on('mouseout',function (){
        marker.closePopup();
      })

    marker.addTo(this.map);
  }

  //Request all available port and provinces to display on the map
  public getLocationsOnMap()
  {
    this.portService.get()
      .subscribe(result => {
        this.portLocations = result
        this.addPortsFromList(this.portLocations);
      });

    //Get Provinces
    this.provinceService.get()
      .subscribe( result => {
        this.provinceLocations = result;
        this.addProvincesFromList(this.provinceLocations);
      })
  }

  //Mark all the received ports on the map.
  public addPortsFromList(ports : Port[])
  {
    ports.forEach(port =>
    {
      this.addPortMarker(port)
    });
  }

  public addProvincesFromList(provinces : Province[])
  {
    provinces.forEach(province =>
    {
      this.addProvinceMarker(province);
    });
  }


}
