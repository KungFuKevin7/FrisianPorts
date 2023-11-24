import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
}
