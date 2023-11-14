import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-transport-overview',
  templateUrl: './transport-overview.component.html',
  styleUrls: ['./transport-overview.component.css']
})
export class TransportOverviewComponent {
  @Input() cargoTransportId : number = 0;
}
