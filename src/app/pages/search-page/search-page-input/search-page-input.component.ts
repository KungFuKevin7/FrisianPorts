import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-page-input',
  templateUrl: './search-page-input.component.html',
  styleUrls: ['./search-page-input.component.css']
})
export class SearchPageInputComponent implements OnInit{

  @Output() queryToSend = new EventEmitter<any>();

  queryInput : string = "";

  constructor(private currentRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

  }

  public handleSearchQuery()
  {
    if (this.queryInput.length > 3) {
      console.log(this.queryInput);
    }
  }

  public searchData()
  {
    if (this.queryInput.length > 3) {
      this.queryToSend.emit(this.queryInput);
    }
  }
}
