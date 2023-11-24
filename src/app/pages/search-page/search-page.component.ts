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

  @Input() queryReceivedFromInput : string = "";

  constructor(private activeRoute :ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      response => {
        this.queryReceivedFromInput = response['query'];
      }
    );
  }

  //Receive the amount of results and display the value
  public notify(count : number) : void
  {
    this.searchResultsCount = count;
    console.log("Number updated to:" + count);
  }

  //Share search query with child
  public handleSearchQuery(searchQuery : any)
  {
    this.queryReceivedFromInput = searchQuery;
  }


}
