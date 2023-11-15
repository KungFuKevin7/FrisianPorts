import {Component, Input} from '@angular/core';
import {Port} from "../../../../models/Port";

@Component({
  selector: 'app-search-result-port',
  templateUrl: './search-result-port.component.html',
  styleUrls: ['./search-result-port.component.css']
})
export class SearchResultPortComponent {

  @Input() port! : Port;

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
