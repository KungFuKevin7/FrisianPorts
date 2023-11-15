import {Component, Input, OnInit} from '@angular/core';
import {AverageService} from "../../../../../services/dashboard-services/average.service";

@Component({
  selector: 'app-small-single-data-collection',
  templateUrl: './small-single-data-collection.component.html',
  styleUrls: ['./small-single-data-collection.component.css'],
  providers: [AverageService]
})
export class SmallSingleDataCollectionComponent implements OnInit{

  @Input() portId! : number;
  avgImport : number = 0;
  avgExport : number = 0;

  constructor(private avgService : AverageService) {
  }

  ngOnInit(): void {
    this.getAvgExport();
    this.getAvgImport();
  }

  public getAvgImport()
  {
    this.avgService.getAverageImport(this.portId).subscribe(
      response => {
        this.avgImport = response;
      }
    )
  }

  public getAvgExport()
  {
    this.avgService.getAverageExport(this.portId).subscribe(
      response => {
        this.avgExport =  response;
      }
    )
  }
}
