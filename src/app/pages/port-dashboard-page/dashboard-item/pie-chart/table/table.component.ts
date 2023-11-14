import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PortDashboardService} from "../../../../../services/port-dashboard.service";
import {TransportedCargoDTO} from "../../../../../models/DTO/TransportedCargoDTO";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [PortDashboardService]
})

export class TableComponent implements OnChanges {
  @Input() Title: string = "";
  @Input() DataDisplay: any = [];
  public total : number = 0;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.total = this.getTotal(this.DataDisplay);
  }

  public getTotal(collection : any)
  {
    let sum : number = 0;
    for(let i = 0; i < collection.length; i++)
    {
      sum += collection[i].value;
    }

    return sum;
  }

}
