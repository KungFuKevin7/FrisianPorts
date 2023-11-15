import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: []
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
