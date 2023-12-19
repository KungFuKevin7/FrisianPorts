import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef} from '@angular/core';
import {Cargo} from "../../../../../models/Cargo";
import {CargoService} from "../../../../../services/cargo.service";
import {AddCargoTransportService} from "../../../../../services/add-cargo-transport.service";
import {CargoTransportDTO} from "../../../../../models/DTO/CargoTransportDTO";
import {Transport} from "../../../../../models/Transport";

@Component({
  selector: 'app-add-cargo-list',
  templateUrl: './add-cargo-list.component.html',
  styleUrls: ['./add-cargo-list.component.css']
})
export class AddCargoListComponent implements OnInit {

  //@ViewChild('container', {read : ViewContainerRef})
  //container! : ViewContainerRef
  sumTonnage: number = 0;
  cargoList: Cargo[] = [];
  sendRequest: boolean = false;

  @Input() selectedDate! : Date;
  @Input() selectedCargoTransportId! : number;


  constructor(private cargoService: CargoService,
              private addCargoTransportService: AddCargoTransportService) {
  }

  ngOnInit() {
  }

  addCargo(cargoItem : Cargo) {
    let cargoTransportItem : CargoTransportDTO = {
      CargoId : cargoItem.CargoId,
      CargoDescription : cargoItem.CargoDescription,
      WeightInTonnes : cargoItem.WeightInTonnes,
      CargoTypeId : cargoItem.CargoTypeId,
      TransportId : 0,
      CargoTransportId : this.selectedCargoTransportId,
      DepartureDate : this.selectedDate
    }

    console.log(cargoTransportItem);
    //this.container.createComponent(AddCargoItemRowComponent);
    this.addCargoTransportService.add(cargoTransportItem).subscribe(
      result =>
      {
        console.log(result);
      });

    //Data successfully received and added to the database
    this.sendRequest = false;
  }

  removeCargo()
  {
    //this.container.remove(4);
  }

  calculateTonnageTotal()
  {
    //Todo: calculateTonnageTotal
   this.sumTonnage = 19 + 20;
  }

  emitData()
  {
    //Request Children to hand over the data
    this.sendRequest = true;
  }


}
