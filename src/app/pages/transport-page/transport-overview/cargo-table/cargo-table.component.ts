import {Component, Input, OnInit} from '@angular/core';
import {CargoDistributionPortService} from "../../../../services/dashboard-services/cargo-distribution-port.service";
import {TransportedCargoDTO} from "../../../../models/DTO/TransportedCargoDTO";

@Component({
  selector: 'app-cargo-table',
  templateUrl: './cargo-table.component.html',
  styleUrls: ['./cargo-table.component.css'],
  providers: [CargoDistributionPortService]
})
export class CargoTableComponent implements OnInit
{
  @Input() CargoTransportId : number = 0;

  cargoToDisplay! : TransportedCargoDTO[];
  totalWeight : number = 0;

  constructor(private cargoDistributionService :CargoDistributionPortService) {
  }

  //OnInit: get the cargo distribution, cargo type and weights.
  ngOnInit(): void {
    this.cargoDistributionService.getDistributionByCargoTransport(this.CargoTransportId)
      .subscribe( response => {
        this.cargoToDisplay = response;

        this.totalWeight = this.getTotalWeight(this.cargoToDisplay);
      })
  }

  //Compute all tonnage received from OnInit request.
  public getTotalWeight(weights : TransportedCargoDTO[]) {
    let totalSum = 0;

    for (let i =0; i < weights.length; i++){
      totalSum += weights[i].transported_Weight;
    }
    return totalSum
  }
}
