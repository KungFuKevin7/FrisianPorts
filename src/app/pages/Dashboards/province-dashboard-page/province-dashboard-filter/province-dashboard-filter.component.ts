import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PeriodService} from "../../../../services/dashboard-services/period.service";

@Component({
  selector: 'app-province-dashboard-filter',
  templateUrl: './province-dashboard-filter.component.html',
  styleUrls: ['./province-dashboard-filter.component.css']
})
export class ProvinceDashboardFilterComponent {

  @Input() provinceId : number = 0;
  @Output() YearEmitter = new EventEmitter<number>;
  yearsOptions! : number[];

  constructor(private periodService : PeriodService) {
  }

  ngOnInit()
  {
    this.getAvailableYears();
  }

  //Fired once another value has been selected in the dropdown filter.
  public periodSelected(selectedValue : any){
    if (selectedValue === 'Alles'){
      this.YearEmitter.emit(0);
    }
    else{
      this.YearEmitter.emit(Number(selectedValue));
    }

    console.log("New Selected Year: " + Number(selectedValue));
  }

  //Request all years of the selected port, that contains any data
  public getAvailableYears(){
    this.periodService.getAvailableYearsOfProvince(this.provinceId)
      .subscribe( years => {
        this.yearsOptions = years
      });
  }

}
