import {Cargo} from "../Cargo";

export interface PortGoodsFlowDto {
  PortId : number;
  CargoImport : Array<Cargo>;
  CargoExport : Array<Cargo>;

  //getTotal() : any;
}
