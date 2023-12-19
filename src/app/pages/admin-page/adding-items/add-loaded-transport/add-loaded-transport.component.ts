import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CargoTypeService} from "../../../../services/cargo-type.service";
import {CargoType} from "../../../../models/CargoType";
import {GoodsflowService} from "../../../../services/dashboard-services/goodsflow.service";
import {GoodsFlowDto} from "../../../../models/DTO/GoodsFlowDto";
import {Cargo} from "../../../../models/Cargo";
import {Transport} from "../../../../models/Transport";

@Component({
  selector: 'app-add-loaded-transport',
  templateUrl: './add-loaded-transport.component.html',
  styleUrls: ['./add-loaded-transport.component.css']
})
export class AddLoadedTransportComponent implements OnInit {

  cargoArray : number[] = [];
  availableRoutes! : GoodsFlowDto[];
  cargoTypes : CargoType[] = [];

  selectedDate! : Date;
  selectedCargoTransportId! : number;

  constructor(private cargoTypeService : CargoTypeService,
              private goodsFlowService : GoodsflowService) {
  }

  ngOnInit() : void
  {
    //Cargotypes
    this.cargoTypeService.get().subscribe(
      result => {
        this.cargoTypes = result;
        this.cargoArray.push(this.cargoArray.length);
      }
    );
    //FlowOfGoods Routes
    this.goodsFlowService.getAllGoodsFlows().subscribe(
      result => {
        this.availableRoutes = result;
      }
    );
  }

  public addCargo()
  {
    this.cargoArray.push(this.cargoArray.length);
  }

  public removeCargo()
  {
    if (this.cargoArray.length > 1){
      this.cargoArray.pop();
    }
    else{
      alert("Kan velden niet verwijderen, er moet minimaal één rij ingevuld zijn.");
    }
  }

  public setCargoTransport(val : any)
  {
    this.selectedCargoTransportId = val;
  }

  public setDate(val : any)
  {
    this.selectedDate = val;
  }

}
