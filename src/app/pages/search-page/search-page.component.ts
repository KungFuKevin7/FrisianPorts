import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  providers: [ SearchService ]
})
export class SearchPageComponent implements OnInit{
  @Input() searchResultsCount : number = 0;

  @Input() queryRecievedFromInput : string = "";

  constructor(private searchService : SearchService) {

  }


  ngOnInit(): void {
  }

  public notify(count : number) : void
  {
    this.searchResultsCount =count;
    console.log("Number updated to:" + count);
  }

  public handleSearchQuery(searchQuery : any)
  {
    this.queryRecievedFromInput = searchQuery;
  }


}
