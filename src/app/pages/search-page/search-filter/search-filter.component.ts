import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProvinceService} from "../../../services/province.service";
import {Province} from "../../../models/Province";

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
  providers: [ProvinceService]
})
export class SearchFilterComponent implements OnInit{

  Provinces! : Province[];
  @Output() ProvinceFilterToEmitter = new EventEmitter<string[]>;
  SelectedProvinces : string[] = [];

  constructor(private provinceService : ProvinceService) {
  }

  ngOnInit(): void {
    this.provinceService.get().subscribe(
      response => {
        this.Provinces = response;
      }
    )
  }

  public provinceSelected(selectedValue : any)
  {
    if (this.SelectedProvinces.includes(selectedValue)) {
      this.SelectedProvinces = this.SelectedProvinces.filter(
        (province) =>
          province != selectedValue
      );
    } else {
      this.SelectedProvinces.push(selectedValue);
    }
  }

  public emitFilters()
  {
    this.ProvinceFilterToEmitter.emit(this.SelectedProvinces);
  }

}
