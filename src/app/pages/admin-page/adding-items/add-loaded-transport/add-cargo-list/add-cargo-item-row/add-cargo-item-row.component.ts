import {
  Component,
  Input,
  OnInit,
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
export class AddCargoItemRowComponent implements OnInit
{
  @Input() cargoItem : Cargo =
    {
      CargoId : 0,
      CargoDescription: "",
      CargoTypeId: 0,
      WeightInTonnes: 0,
      TransportId: 0,
      Source: ""
    };

  cargoTypes! : CargoType[];

  constructor(private cargoTypeService : CargoTypeService) {
  }

  ngOnInit(): void {
    this.cargoTypeService.get().subscribe(
      result => {
        this.cargoTypes = result;
      }
    )
  }

}
