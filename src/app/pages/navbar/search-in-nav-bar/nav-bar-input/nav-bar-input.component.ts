import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Constants} from "../../../../.constants/constants";

@Component({
  selector: 'app-nav-bar-input',
  templateUrl: './nav-bar-input.component.html',
  styleUrls: ['./nav-bar-input.component.css']
})
export class NavBarInputComponent{

  @Input() searchQuery : string = "";

  @Output() queryToShare = new EventEmitter<string>();

  constructor() {
  }

  //Check if search query is long enough
  //If yes, transfer the query to the parent (search-in-nav-bar)
  public handleSearchQuery()
  {
    if (this.searchQuery.length > Constants.minimumQueryLength) {
      this.queryToShare.emit(this.searchQuery);
    }
  }

  //Upon pressing the 'X'-button, empty the search query
  public emptyField(){
    this.searchQuery = "";
  }
}
