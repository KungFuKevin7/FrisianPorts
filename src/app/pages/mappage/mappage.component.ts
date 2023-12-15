import { Component } from '@angular/core';

@Component({
  selector: 'app-mappage',
  templateUrl: './mappage.component.html',
  styleUrls: ['./mappage.component.css']
})
export class MappageComponent {
  displayLegend : boolean = false;

  activateLegend()
  {
    if (this.displayLegend)
    {
      this.displayLegend = false;
    }
    else{
      this.displayLegend = true;
    }
  }
}
