import {Component, Input, OnInit} from '@angular/core';
import {CargoDistributionService} from "../../../../services/dashboard-services/cargo-distribution.service";
import {TransportedCargoDTO} from "../../../../models/DTO/TransportedCargoDTO";

@Component({
  selector: 'app-cargo-table',
  templateUrl: './cargo-table.component.html',
  styleUrls: ['./cargo-table.component.css'],
  providers: [CargoDistributionService]
})
export class CargoTableComponent implements OnInit
{
  @Input() CargoTransportId : number = 0;

  cargoToDisplay! : TransportedCargoDTO[];
  totalWeight : number = 0;

  constructor(private cargoDistributionService :CargoDistributionService) {
  }

  ngOnInit(): void {
    this.cargoDistributionService.getDistributionByCargoTransport(this.CargoTransportId)
      .subscribe( response => {
        this.cargoToDisplay = response;

        this.totalWeight = this.getTotalWeight(this.cargoToDisplay);
      })


  }

  getTotalWeight(weights : TransportedCargoDTO[]) {
    let totalSum = 0;

    for (let i =0; i < weights.length; i++){
      totalSum += weights[i].transported_Weight;
    }
    return totalSum
  }
}
