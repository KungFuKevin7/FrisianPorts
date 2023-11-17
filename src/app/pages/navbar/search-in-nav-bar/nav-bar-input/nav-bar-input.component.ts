import {Component, EventEmitter, Input, Output} from '@angular/core';

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

  public handleSearchQuery()
  {
    if (this.searchQuery.length > 3) {
      this.searchWithQuery(this.searchQuery);
    }
  }

  public emptyField(){
    this.searchQuery = "";
  }

  public searchWithQuery(query : string)
  {
    this.queryToShare.emit(query);
  }


}
