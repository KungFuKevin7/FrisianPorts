import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cargotransport-table',
  templateUrl: './cargotransport-table.component.html',
  styleUrls: ['./cargotransport-table.component.css']
})
export class CargotransportTableComponent {
 @Input() MaxResults : number = 4;
}
