import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-search-page-input',
  templateUrl: './search-page-input.component.html',
  styleUrls: ['./search-page-input.component.css']
})
export class SearchPageInputComponent {

  @Input() searchQuery : string = "";

  public handleSearchQuery()
  {
    if (this.searchQuery.length > 3) {
      console.log(this.searchQuery);
    }
  }
}
