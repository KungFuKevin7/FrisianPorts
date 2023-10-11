import { Component } from '@angular/core';
import {LegendPosition} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-cargo-piechart',
  templateUrl: './cargo-piechart.component.html',
  styleUrls: ['./cargo-piechart.component.css']
})
export class CargoPiechartComponent {
  pos = LegendPosition.Below;
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
