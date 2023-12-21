import {Component, OnInit} from '@angular/core';
import {ProvinceService} from "../../../../services/province.service";
import {Province} from "../../../../models/Province";
import {PortService} from "../../../../services/port.service";
import {Port} from "../../../../models/Port";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-port-page',
  templateUrl: './add-port-page.component.html',
  styleUrls: ['./add-port-page.component.css']
})
export class AddPortPageComponent implements OnInit{

  availableProvinces! : Province[];

  constructor(private provinceService : ProvinceService,
              private portService : PortService,
              private router : Router) {
  }

  ngOnInit() {
    this.provinceService.get().subscribe(
      result => {
        this.availableProvinces = result
      }
    )
  }

  addPort(portName : string,
          portLocation :string,
          latitude : string,
          longitude : string,
          provinceId : any){

    let port : Port = {
      portId : 0,
      portName : portName,
      portLocation : portLocation,
      latitude : latitude,
      longitude : longitude,
      provinceId : provinceId
    }

    console.log(port)

    this.portService.add(port)
      .subscribe( result => {
        if (result){
          alert("Haven is toegevoegd");
          this.router.navigate(['/admin']);
        }
      });
  }
}
