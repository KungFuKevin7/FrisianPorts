import {Component, Input, OnInit} from '@angular/core';
import {LegendPosition} from "@swimlane/ngx-charts";
import {CargoDistributionService} from "../../../../services/dashboard-services/cargo-distribution.service";
import {TransportedCargoDTO} from "../../../../models/DTO/TransportedCargoDTO";

@Component({
  selector: 'app-cargo-piechart',
  templateUrl: './cargo-piechart.component.html',
  styleUrls: ['./cargo-piechart.component.css'],
  providers: [CargoDistributionService]
})
export class CargoPiechartComponent implements OnInit{

  @Input() CargoTransportId : number = 0;

  piechartData : any;

  constructor(private cargoDistributionService : CargoDistributionService) {
  }

  //Get the total Distribution of cargo, and map into the correct json format
  ngOnInit()
  {
    this.cargoDistributionService.getTotalDistribution(this.CargoTransportId)
      .subscribe(
        response => {
          this.piechartData = response.map(cargoSlice =>
            ({
              name: cargoSlice.cargo_Type_Name,
              value: cargoSlice.transported_Weight
          })
          );
          //console.log(response);
        }
        )
  }
}
