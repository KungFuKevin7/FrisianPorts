import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PeriodService} from "../../../../services/dashboard-services/period.service";
import {Months} from "../../../../.constants/Months"

@Component({
  selector: 'app-dashboard-filter',
  templateUrl: './dashboard-filter.component.html',
  styleUrls: ['./dashboard-filter.component.css'],
  providers: [PeriodService]
})
export class DashboardFilterComponent implements OnInit {

  @Input() portId : number = 0;
  @Output() yearEmitter = new EventEmitter<number>;
  @Output() monthEmitter = new EventEmitter<number>;
  yearsOptions! : number[];

  monthOptions = Object.keys(Months)
    .filter((value) => isNaN(Number(value)));

  constructor(private periodService : PeriodService) {
  }

  ngOnInit()
  {
    this.getAvailableYears();
  }

  //Fired once another value has been selected in the dropdown filter.
  public yearSelected(selectedValue : any){
    this.yearEmitter.emit(Number(selectedValue));

    console.log("New Selected Year: " + Number(selectedValue));
  }

  public monthSelected(selectedMonth : any){
    this.monthEmitter.emit(Number(selectedMonth));

    console.log("New Selected Month: " + Number(selectedMonth));
  }

  //Request all years of the selected port, that contains any data
  public getAvailableYears(){
    this.periodService.getAvailableYearsOfPort(this.portId)
      .subscribe( years => {
        this.yearsOptions = years
      });
  }
}
