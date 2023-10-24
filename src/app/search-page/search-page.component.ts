import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  @Input() searchResultsCount : number = 0;

  public notify(count : number) : void
  {
    this.searchResultsCount =count;
    alert("Number updated to:" + count);
  }
}
