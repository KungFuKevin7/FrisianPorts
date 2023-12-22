import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef} from '@angular/core';
import {Cargo} from "../../../../../models/Cargo";
import {CargoService} from "../../../../../services/cargo.service";
import {AddCargoTransportService} from "../../../../../services/add-cargo-transport.service";
import {CargoTransportDTO} from "../../../../../models/DTO/CargoTransportDTO";
import {Transport} from "../../../../../models/Transport";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-cargo-list',
  templateUrl: './add-cargo-list.component.html',
  styleUrls: ['./add-cargo-list.component.css']
})
export class AddCargoListComponent implements OnInit, OnChanges {

  //@ViewChild('container', {read : ViewContainerRef})
  //container! : ViewContainerRef
  sumTonnage: number = 0;
  cargoList: Cargo[] = [];
  @Input() selectedDate! : Date;
  @Input() selectedCargoTransportId! : number;

  constructor(private cargoService: CargoService,
              private addCargoTransportService: AddCargoTransportService,
              private router : Router) {
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.sumTonnage = this.calculateTotalWeight();
  }

  ngOnInit() {
  }

  addCargoList(cargoItems : Cargo[])
  {
    let cargoTransportItems : CargoTransportDTO[] = []

    cargoItems.forEach( cargoItem => {
      let cargoTransportItem: CargoTransportDTO = {
        CargoId: cargoItem.CargoId,
        CargoDescription: cargoItem.CargoDescription,
        WeightInTonnes: cargoItem.WeightInTonnes,
        CargoTypeId: cargoItem.CargoTypeId,
        TransportId: 0,
        CargoTransportId: this.selectedCargoTransportId,
        DepartureDate: this.selectedDate
      }
      cargoTransportItems.push(cargoTransportItem)
    });

    this.addCargoTransportService.addCargoList
    (cargoTransportItems).subscribe(
      result =>
      {
        if (result){
          alert("Vracht is toegevoegd!")
          this.router.navigate(['/admin']);
        }
      });

  }

  addCargoInputField()
  {
    let cargo : Cargo =
      {
        CargoId : 0,
        CargoDescription : "",
        WeightInTonnes: 0,
        CargoTypeId: 1,
        TransportId: 0
      }
    this.cargoList.push(cargo);
  }

  removeCargo()
  {
    this.cargoList.pop();
  }


  calculateTotalWeight(){
    let total = 0;
    this.cargoList.forEach( cargoItem => {
      total += cargoItem.WeightInTonnes;
    })

    return total;
  }

}
