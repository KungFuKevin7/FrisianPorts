export interface CargoTransportRouteDTO{
  Route_Id : number;
  Cargo_Transport_Id : number;
  Departure_Port_Id : number;
  Arrival_Port_Id : number;
  Frequency : string;
  Date_Started : Date;
  Added_By_Id : number;
}
