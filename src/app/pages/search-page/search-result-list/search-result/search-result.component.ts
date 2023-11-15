import {Component, Input} from '@angular/core';
import {GoodsFlowDto} from "../../../../models/DTO/GoodsFlowDto";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  @Input() result! : GoodsFlowDto;

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
