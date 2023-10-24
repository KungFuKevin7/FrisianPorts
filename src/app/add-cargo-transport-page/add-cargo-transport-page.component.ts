import { Component } from '@angular/core';

@Component({
  selector: 'app-add-cargo-transport-page',
  templateUrl: './add-cargo-transport-page.component.html',
  styleUrls: ['./add-cargo-transport-page.component.css']
})
export class AddCargoTransportPageComponent {
  date : any;

  public setDateToday(){
    this.date = new Date(2002,12,4);
  }

  public print(){
    alert(this.date);
  }
}
