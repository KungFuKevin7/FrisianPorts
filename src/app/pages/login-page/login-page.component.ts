import { Component } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {SessionHandlerService} from "../../services/session-handler.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private userService : UsersService,
              private router : Router,
              private sessionService : SessionHandlerService) {

  }

  login(email : string, password : string){
    this.userService.validateUser(email, password)
      .subscribe(
        success => {

          if(success){
            console.log(success)
            this.sessionService.setLoggedInUser(success.userId.toString())
            this.router.navigate(['/admin']);
          }
        }
      )
  }

}
