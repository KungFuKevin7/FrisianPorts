import {Component, Input} from '@angular/core';
import {LegendPosition} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {



  legendPosition : LegendPosition = LegendPosition.Below;

  testResult = [
    {
      "name": "Plants",
      "value": 9122
    },
    {
      "name": "Chemicals",
      "value": 12415
    }]

}
