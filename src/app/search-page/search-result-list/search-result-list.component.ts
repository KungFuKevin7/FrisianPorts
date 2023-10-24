import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css']
})
export class SearchResultListComponent implements OnInit{
  @Output() searchResultsCount = new EventEmitter<number>();

  MyItems : number[] = [1,99,22]

  ngOnInit() {
    this.searchResultsCount.emit(42);  //Debug action
  }
}
