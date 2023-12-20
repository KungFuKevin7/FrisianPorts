import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PeriodService} from "../../../../services/dashboard-services/period.service";
import {Months} from "../../../../.constants/Months";

@Component({
  selector: 'app-province-dashboard-filter',
  templateUrl: './province-dashboard-filter.component.html',
  styleUrls: ['./province-dashboard-filter.component.css']
})
export class ProvinceDashboardFilterComponent {

  @Input() provinceId : number = 0;
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
 }

  public monthSelected(selectedValue : any){
    this.monthEmitter.emit(Number(selectedValue));
  }

  //Request all years of the selected port, that contains any data
  public getAvailableYears(){
    this.periodService.getAvailableYearsOfProvince(this.provinceId)
      .subscribe( years => {
        this.yearsOptions = years
      });
  }

}
