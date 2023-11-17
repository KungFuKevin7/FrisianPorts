import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PortService} from "../../../services/port.service";
import {SearchService} from "../../../services/search.service";
import {Port} from "../../../models/Port";
import {GoodsFlowDto} from "../../../models/DTO/GoodsFlowDto";

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css'],
  providers: [ PortService, SearchService ]
})
export class SearchResultListComponent implements OnChanges {
  @Output() searchResultsCount = new EventEmitter<number>();

  @Input() queryReceived: string = "";

  portResults: Port[] = [];

  flowOfGoodsResults : GoodsFlowDto[] = [];

  constructor(private portService: PortService,
              private searchService: SearchService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.queryReceived.length >= 3) {
      this.getData();
    }
  }

  public getData()
  {
      this.searchService.SearchPorts(this.queryReceived)   //Get results from API Call
        .subscribe(response => {
          this.portResults = response;
          this.shareResultCount(this.portResults.length);
        });

      this.searchService.SearchFlowOfGoods(this.queryReceived)   //Get results from API Call
        .subscribe(response => {
          this.flowOfGoodsResults = response;
          this.shareResultCount(this.flowOfGoodsResults.length);
        });

  }

  public shareResultCount(nr : number)
  {
    this.searchResultsCount.emit(nr);
  }

}
