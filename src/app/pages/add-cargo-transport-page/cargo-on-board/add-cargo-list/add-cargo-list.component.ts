import {Component, OnChanges, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Cargo} from "../../../../models/Cargo";
import {AddCargoItemRowComponent} from "./add-cargo-item-row/add-cargo-item-row.component";
import {CargoService} from "../../../../services/cargo.service";

@Component({
  selector: 'app-add-cargo-list',
  templateUrl: './add-cargo-list.component.html',
  styleUrls: ['./add-cargo-list.component.css']
})
export class AddCargoListComponent implements OnInit{

  //@ViewChild('container', {read : ViewContainerRef})
  //container! : ViewContainerRef
  cargoList : Cargo[] = [];
  sendRequest : boolean = false;

  constructor(private cargoService : CargoService) {
  }

  ngOnInit() {
  }

  addCargo(cargoItem : any) {
    console.log(cargoItem)
    //this.container.createComponent(AddCargoItemRowComponent);
    this.cargoService.add(cargoItem).subscribe(
      result =>
      {
        console.log(result);
      });
    this.sendRequest = false;

  }

  removeCargo()
  {
    //this.container.remove(4);
  }

  emitData()
  {
    this.sendRequest = true;
  }
}
