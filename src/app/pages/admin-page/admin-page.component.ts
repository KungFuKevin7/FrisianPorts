import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {SessionHandlerService} from "../../services/session-handler.service";
import {Users} from "../../models/Users";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit{

  constructor(private userService : UsersService,
              private sessionService : SessionHandlerService,
              private router : Router) {
  }

  user! : Users;

  ngOnInit(): void {
    let userId = this.sessionService.getLoggedInUser();

    if (Number(userId) != 0 || userId != null){
      this.userService.getById(Number(userId))
        .subscribe(user =>
        {
          this.user = user;
        })
    }
    else {
      this.router.navigate(['/forbidden-error'])
    }
  }

  LogOut()
  {
    let confirmation = confirm("Weet u zeker dat u uit wilt loggen?")
    if (confirmation){
      this.sessionService.removeLoggedInUser();
      this.router.navigate(['/']);
    }
  }


}
