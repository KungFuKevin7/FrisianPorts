import { Component } from '@angular/core';

@Component({
  selector: 'app-search-result-port',
  templateUrl: './search-result-port.component.html',
  styleUrls: ['./search-result-port.component.css']
})
export class SearchResultPortComponent {
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
