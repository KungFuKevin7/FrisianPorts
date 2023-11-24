import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-transport-page',
  templateUrl: './transport-page.component.html',
  styleUrls: ['./transport-page.component.css']
})
export class TransportPageComponent implements OnInit{

  cargoTransportId : number = 0;

  constructor(private activeRoute : ActivatedRoute) {

  }

  //Get the id parameter from the current URL
  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      params => {
        this.cargoTransportId = params['id'];
      }
    );
  }

}
