import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Constants} from "../../../../.constants/constants";
import {DestinationCargoService} from "../../../../services/dashboard-services/destination-cargo.service";
import {NumberFormat} from "../../../../.constants/NumberFormat";
import _default from "chart.js/dist/plugins/plugin.tooltip";
import numbers = _default.defaults.animations.numbers;

@Component({
  selector: 'app-destinations-pie-chart',
  templateUrl: './destinations-pie-chart.component.html',
  styleUrls: ['./destinations-pie-chart.component.css'],
  providers: [DestinationCargoService]
})
export class DestinationsPieChartComponent implements OnInit, OnChanges {

  constructor(private destinationService : DestinationCargoService) {
  }
  @Input() selectedYear : number = 0;
  @Input() selectedMonth : number = 0;
  @Input() portId! : number;

  Import : any;
  Export : any;
  colorScheme = Constants.colourScheme;

  ngOnInit(): void {
    this.getImportDestinations();
    this.getExportDestinations();
  }

  //Call the same methods as OnInit, but now with added period filter, if given
  ngOnChanges(changes:SimpleChanges): void {
    this.getImportDestinations();
    this.getExportDestinations();
  }

  public getImportDestinations()
  {
    this.destinationService.getImportDestinations(this.portId,this.selectedYear,this.selectedMonth)
      .subscribe(
        response => {
          this.Import = response.map(item => (
            {
              name: item.location,
              value: item.shipAmount
            })
          );
        }
      )
  }

  public getExportDestinations()
  {
    this.destinationService.getExportDestinations(this.portId,this.selectedYear,this.selectedMonth)
      .subscribe(
        response => {
          this.Export = response.map(item => (
            {
              name: item.location,
              value: item.shipAmount
            })
          );
        }
      )
  }
}
