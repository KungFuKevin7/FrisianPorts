import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cargo-on-board',
  templateUrl: './cargo-on-board.component.html',
  styleUrls: ['./cargo-on-board.component.css']
})
export class CargoOnBoardComponent {

  amountOfFields : number = 5;

  public test()
  {
    console.log("works");
  }

  public removeGood()
  {
    alert("removed");
  }
}
