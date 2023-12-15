import {Component, Input, OnInit} from '@angular/core';
import {ProvinceService} from "../../../../services/province.service";
import {Port} from "../../../../models/Port";

@Component({
  selector: 'app-ports-in-province-table',
  templateUrl: './ports-in-province-table.component.html',
  styleUrls: ['./ports-in-province-table.component.css'],
  providers: [ProvinceService]
})
export class PortsInProvinceTableComponent implements OnInit{
  @Input() ProvinceId : number = 0;
  @Input() NameOfProvince : string ="";

  ListOfPorts! : Port[];

  constructor(private provinceService : ProvinceService) {
  }

  ngOnInit(): void {
    this.getPortsInProvince(this.ProvinceId);
  }

  getPortsInProvince(provinceId : number){
    this.provinceService.getPortsInProvince(provinceId).subscribe(
      result => {
        this.ListOfPorts = result;
      }
    )
  }
}
