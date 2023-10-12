import { Component } from '@angular/core';

@Component({
  selector: 'app-search-in-nav-bar',
  templateUrl: './search-in-nav-bar.component.html',
  styleUrls: ['./search-in-nav-bar.component.css']
})
export class SearchInNavBarComponent {

  public searchQuery : string = "";

  public handleSearchQuery()
  {
    if(this.searchQuery.length < 3)
    {
      alert("do nothing!");
    }
    else{
      alert("OK, searching for: " +  this.searchQuery);
    }
  }
}
