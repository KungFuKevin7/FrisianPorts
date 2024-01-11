import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PortService} from "../../../services/port.service";
import {SearchService} from "../../../services/search.service";
import {Port} from "../../../models/Port";
import {GoodsFlowDto} from "../../../models/DTO/GoodsFlowDto";
import {Constants} from "../../../.constants/constants";

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css'],
  providers: [ PortService, SearchService ]
})
export class SearchResultListComponent implements OnChanges {
  @Output() searchResultsCount = new EventEmitter<number>();

  @Input() additionalFilter : string[] = [];

  @Input() queryReceived: string = "";

  portResults: Port[] = [];

  flowOfGoodsResults : GoodsFlowDto[] = [];

  constructor(private portService: PortService,
              private searchService: SearchService) {
  }

  //When the Text Input or Filter changes value -> perform search request
  ngOnChanges(changes: SimpleChanges) {
    if (this.additionalFilter.length > 0 &&
      this.queryReceived.length > Constants.minimumQueryLength)
    {
      //Fetch Data using filters
      this.getDataWithFilter();
    }
    else if (this.queryReceived.length > Constants.minimumQueryLength)
    {
      //Fetch Data without filters
      this.getDataNormal();
    }
  }

  //Get ports and flow of goods with matching search query
  public getDataNormal()
  {
      this.searchService.SearchPorts(this.queryReceived)
        .subscribe(response => {
          this.portResults = response;
          this.shareResultCount();
        });

      this.searchService.SearchFlowOfGoods(this.queryReceived)
        .subscribe(response => {
          this.flowOfGoodsResults = response;
          this.shareResultCount();
        });
  }

  public getDataWithFilter()
  {
    //console.log(this.queryReceived);
      this.searchService.SearchPortsFiltered(this.queryReceived,
        this.additionalFilter).subscribe( response => {
          this.portResults = response;
          this.shareResultCount();
      })

    this.searchService.SearchFlowOfGoodsFiltered(this.queryReceived,
      this.additionalFilter)
      .subscribe(response => {
        this.flowOfGoodsResults = response;
        this.shareResultCount();
      });
  }

  //Share amount of results with parent for display purposes
  public shareResultCount()
  {
    let resultCount = this.portResults.length + this.flowOfGoodsResults.length;
    this.searchResultsCount.emit(resultCount);
  }

}
