import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

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
