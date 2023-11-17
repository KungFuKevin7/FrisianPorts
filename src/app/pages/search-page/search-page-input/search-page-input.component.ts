import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

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

  public searchData()
  {
    if (this.queryInput.length > 3) {
      this.queryToSend.emit(this.queryInput);
    }
  }

}
