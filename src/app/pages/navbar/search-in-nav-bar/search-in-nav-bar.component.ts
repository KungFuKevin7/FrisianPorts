import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-search-in-nav-bar',
  templateUrl: './search-in-nav-bar.component.html',
  styleUrls: ['./search-in-nav-bar.component.css']
})

export class SearchInNavBarComponent{

  @Input() searchQuery : string = "";

  constructor() {
  }

  //Receive the search query and transfer to the other child
  //(nav-search-result-list)
  public handleSearchQuery(val : string)
  {
      this.searchQuery = val;
  }

  //In case the area outside the component (+ children) gets clicked:
  //Empty field and close the list window
  public emptyField(){
    this.searchQuery = "";
  }
}
