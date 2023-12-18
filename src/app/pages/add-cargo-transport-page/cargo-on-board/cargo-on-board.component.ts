import {Component, Input, OnInit} from '@angular/core';
import {CargoTypeService} from "../../../services/cargo-type.service";
import {CargoType} from "../../../models/CargoType";
import {GoodsflowService} from "../../../services/dashboard-services/goodsflow.service";
import {GoodsFlowDto} from "../../../models/DTO/GoodsFlowDto";
import {Cargo} from "../../../models/Cargo";

@Component({
  selector: 'app-cargo-on-board',
  templateUrl: './cargo-on-board.component.html',
  styleUrls: ['./cargo-on-board.component.css']
})
export class CargoOnBoardComponent implements OnInit {

  cargoArray : number[] = [];
  availableRoutes! : GoodsFlowDto[];
  cargoItems : Cargo[] = [];
  cargoTypes : CargoType[] = [];
  sumTonnage : number = 0;


  constructor(private cargoTypeService : CargoTypeService,
              private goodsFlowService : GoodsflowService) {
  }

  ngOnInit() : void
  {
    this.cargoTypeService.get().subscribe(
      result => {
        this.cargoTypes = result;
        this.cargoArray.push(this.cargoArray.length);
      }
    );
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

  public calculateTotal(val : number)
  {
    this.sumTonnage += val;
  }

  public addCargoItemsToDatabase(){
    alert("Test");
  }

}
