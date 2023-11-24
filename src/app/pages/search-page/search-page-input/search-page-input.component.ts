import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Constants} from "../../../.constants/constants";

@Component({
  selector: 'app-search-page-input',
  templateUrl: './search-page-input.component.html',
  styleUrls: ['./search-page-input.component.css']
})
export class SearchPageInputComponent{

  @Output() queryToSend = new EventEmitter<any>();

  queryInput : string = "";

  constructor() {

  }

  //Send the inputted query case the length of the query is large enough
  public searchData()
  {
    if (this.queryInput.length > Constants.minimumQueryLength) {
      this.queryToSend.emit(this.queryInput);
    }
  }

}
