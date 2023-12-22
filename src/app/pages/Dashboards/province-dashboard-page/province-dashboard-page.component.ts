import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Province} from "../../../models/Province";
import {ProvinceService} from "../../../services/province.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-province-dashboard-page',
  templateUrl: './province-dashboard-page.component.html',
  styleUrls: ['./province-dashboard-page.component.css'],
  providers: [ProvinceService]
})
export class ProvinceDashboardPageComponent implements OnInit{

  @Input() EmitProvinceId = new EventEmitter<number>;
  selectedProvince : Province = {
    provinceId : 0,
    latitude: '',
    longitude: '',
    provinceName: ''
  };

  selectedYear! : number;
  selectedMonth! : number;
  provinceId! : number;

  constructor(private provinceService : ProvinceService,
              private activeRoute : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      params => {
        if (params['id'] != null) {
          this.provinceId = params['id']; //get query parameter for page display
        }
      }
    );

    this.getInfo()
  }

  public getInfo() : void
  {
    this.provinceService.getById(this.provinceId)
      .subscribe(result => {
        this.selectedProvince = result;
      }
    );
  }

  //Gets the year selected in the filter
  public getYear(receivedYear : any)
  {
    this.selectedYear = receivedYear;
  }

  public getMonth(receivedMonth : any)
  {
    this.selectedMonth = receivedMonth;
  }
}
