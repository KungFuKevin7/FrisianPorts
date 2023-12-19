import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {CargoTypeService} from "../../../../../../services/cargo-type.service";
import {GoodsflowService} from "../../../../../../services/dashboard-services/goodsflow.service";
import {CargoType} from "../../../../../../models/CargoType";
import {AddLoadedTransportComponent} from "../../add-loaded-transport.component";
import {Cargo} from "../../../../../../models/Cargo";
import {Transport} from "../../../../../../models/Transport";

@Component({
  selector: 'app-add-cargo-item-row',
  templateUrl: './add-cargo-item-row.component.html',
  styleUrls: ['./add-cargo-item-row.component.css'],
  providers: [CargoTypeService]
})
export class AddCargoItemRowComponent implements OnInit, OnChanges
{
  @Input() emitData! : boolean;
  @Input() transportToAdd! : Transport;
  @Output() dataToAdd = new EventEmitter<Cargo>();

  cargoTypes! : CargoType[];
  chosenCargoType! : number;
  cargoDescription! : string;
  weightInTonnes! : number;

  constructor(private cargoTypeService : CargoTypeService) {
  }

  ngOnInit(): void {
    this.cargoTypeService.get().subscribe(
      result => {
        this.cargoTypes = result;
      }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.emitData == true){
      let cargo : Cargo =
        {
          CargoId : 0,
          CargoDescription: this.cargoDescription,
          CargoTypeId: this.chosenCargoType,
          WeightInTonnes: this.weightInTonnes,
          TransportId: 0
        };
      this.dataToAdd.emit(cargo);   // Send/Emit created object to parent
    }
  }


  public removeCargo()
  {
    alert("Remove row. Functionality not added yet.");
  }

}
