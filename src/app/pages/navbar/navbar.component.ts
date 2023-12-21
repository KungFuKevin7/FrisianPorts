import {Component, Input} from '@angular/core';
import {SessionHandlerService} from "../../services/session-handler.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private sessionService : SessionHandlerService) {
  }

  hamburgerMenu : boolean = false;

  //Quite simple open and close navigation system
  public closeAndOpenNav()
  {
    if (this.hamburgerMenu){
      this.hamburgerMenu = false;
    }
    else{
      this.hamburgerMenu = true;
    }
  }

  public CheckUserLoggedIn()
  {
    let currentUser = this.sessionService.getLoggedInUser()
    if (currentUser){
      return true;
    }
    else {
      return false;
    }
  }
}
