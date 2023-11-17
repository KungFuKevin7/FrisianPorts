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

  public handleSearchQuery(val : string)
  {
    if (val.length > 3) {
      this.searchQuery = val;
    }
  }

  public emptyField(){
    this.searchQuery = "";
  }





}
