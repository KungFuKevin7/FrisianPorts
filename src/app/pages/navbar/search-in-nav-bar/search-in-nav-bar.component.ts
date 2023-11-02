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

  public handleSearchQuery()
  {
    if (this.searchQuery.length > 3) {
      console.log(this.searchQuery);
    }
  }

  public emptyField(){
    this.searchQuery = "";
  }





}
