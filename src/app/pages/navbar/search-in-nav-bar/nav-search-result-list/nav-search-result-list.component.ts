import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Port} from "../../../../models/Port";
import {SearchService} from "../../../../services/search.service";
import {GoodsFlowDto} from "../../../../models/DTO/GoodsFlowDto";

@Component({
  selector: 'app-nav-search-result-list',
  templateUrl: './nav-search-result-list.component.html',
  styleUrls: ['./nav-search-result-list.component.css'],
  providers: [SearchService]
})
export class NavSearchResultListComponent implements OnChanges{

  @Input() ReceivedSearchQuery : string = "";

  portsResults!: Port[];
  cargoTransportResults! : GoodsFlowDto[];

  constructor(private searchService : SearchService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getSearchResults()
  }

  //Request the ports and flow-of-goods based on the received search query
  public getSearchResults()
  {
    this.searchService.SearchPorts(this.ReceivedSearchQuery)
      .subscribe(
        results => {
          this.portsResults = results;
        }
      )

    this.searchService.SearchFlowOfGoods(this.ReceivedSearchQuery)
      .subscribe(
        results => {
          this.cargoTransportResults = results;
        }
      )
  }

}
