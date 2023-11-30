import {Component, Input, ViewEncapsulation} from '@angular/core';
import {LoadingService} from "../../services/loading-service/loading.service";

@Component({
  selector: 'app-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoadingAnimationComponent{

  constructor(public loadService : LoadingService)
  {}

  public getStatus(){
    return this.loadService.getLoadStatus();
  }

}
