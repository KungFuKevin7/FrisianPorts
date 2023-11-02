import { Component } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  public isFolded : boolean = true;

  public foldSearchResult()
  {
    if (this.isFolded)
    {
      this.isFolded = false;
    }
    else{
      this.isFolded =true;
    }
  }
}