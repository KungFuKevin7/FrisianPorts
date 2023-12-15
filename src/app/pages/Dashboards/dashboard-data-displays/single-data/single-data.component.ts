import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-single-data',
  templateUrl: './single-data.component.html',
  styleUrls: ['./single-data.component.css']
})
export class SingleDataComponent{
  @Input() Title: string = "";
  @Input() Value: number = 0;
  @Input() DataColour : string = "";
  @Input() IconPath : string = "";
  @Input() Unit : string = "";

}
