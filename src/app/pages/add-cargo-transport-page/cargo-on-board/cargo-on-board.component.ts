import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cargo-on-board',
  templateUrl: './cargo-on-board.component.html',
  styleUrls: ['./cargo-on-board.component.css']
})
export class CargoOnBoardComponent {

  cargoArray : number[] = [];


  public addCargo()
  {
    this.cargoArray.push(this.cargoArray.length);
  }

  public removeCargo()
  {
    this.cargoArray.pop();
  }


}
