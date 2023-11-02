import { Component } from '@angular/core';

@Component({
  selector: 'app-added-items-table',
  templateUrl: './added-items-table.component.html',
  styleUrls: ['./added-items-table.component.css']
})
export class AddedItemsTableComponent {

  public removeItem()
  {
    alert("Verwijderd");
  }
}
