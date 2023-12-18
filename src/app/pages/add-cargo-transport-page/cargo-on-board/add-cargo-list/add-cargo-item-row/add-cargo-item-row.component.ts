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
import {CargoTypeService} from "../../../../../services/cargo-type.service";
import {GoodsflowService} from "../../../../../services/dashboard-services/goodsflow.service";
import {CargoType} from "../../../../../models/CargoType";
import {CargoOnBoardComponent} from "../../cargo-on-board.component";
import {Cargo} from "../../../../../models/Cargo";

@Component({
  selector: 'app-add-cargo-item-row',
  templateUrl: './add-cargo-item-row.component.html',
  styleUrls: ['./add-cargo-item-row.component.css']
})
export class AddCargoItemRowComponent implements OnInit, OnChanges
{

  @Input() emitData! : boolean;
  @Output() dataToAdd = new EventEmitter<Cargo>();
  cargoTypes! : CargoType[];
  cargoItem! : Cargo;
  chosenCargoType! : number;
  cargoDescription! : string;
  WeightInTonnes! : number;

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
          WeightInTonnes: this.WeightInTonnes,
          TransportId: 11
        };
      this.dataToAdd.emit(cargo);
    }
  }

  constructor(private cargoTypeService : CargoTypeService,
              private goodsFlowService : GoodsflowService) {
  }

  public removeCargo()
  {
    console.log(this.WeightInTonnes)
    alert("Anybody?");
  }

}
