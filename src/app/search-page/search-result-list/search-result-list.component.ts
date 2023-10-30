import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PortService} from "../../services/port.service";

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css'],
  providers: [ PortService ]
})
export class SearchResultListComponent implements OnInit{
  @Output() searchResultsCount = new EventEmitter<number>();

  MyItems : number[] = [1,99,22]

  constructor(private portService : PortService) {
  }

  ngOnInit() {
    this.getResults();
    this.searchResultsCount.emit(42);  //Debug action
  }

  getResults() {
    this.portService.getPorts()
      .subscribe( results => this.printResults(results));
  }

  printResults(result : any){
    console.log(result)
  }
}
