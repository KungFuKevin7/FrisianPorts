import { Component } from '@angular/core';

@Component({
  selector: 'app-graph-bar',
  templateUrl: './graph-bar.component.html',
  styleUrls: ['./graph-bar.component.css']
})
export class GraphBarComponent {
  displayData =[{"name": "2",
    "series": [
      {
        "name": "Import",
        "value": 7300000
      },
      {
        "name": "Export",
        "value": 8940000
      }
    ]
  },{
    "name": "4",
    "series": [
      {
        "name": "Import",
        "value": 2555554
      },
      {
        "name": "Export",
        "value": 2191817
      }
    ]
  }];


}
