import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map: any;
  private mapUrl: string = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([53.1651, 5.7808], 9);

    L.tileLayer(this.mapUrl).addTo(this.map);

    this.addMarker();
    // Add markers for Frisian ports
  }

  private addMarker(): void {
    let marker = new L.Marker([53.18779821656037, 5.762890144888037]);
    marker.addTo(this.map).bindPopup("MCS Terminal - Leeuwarden").on('click',function(e) {
      alert("Naar Haven op locatie: " + e.latlng);
      window.location.href = 'http://localhost:4200/port-dashboard';
    });
  }

}
