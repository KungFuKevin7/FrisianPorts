import { Component } from '@angular/core';
import {UsersService} from "../../../../services/users.service";
import {Port} from "../../../../models/Port";
import {Users} from "../../../../models/Users";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  passwordCorrect : boolean = true;
  constructor(private userService :UsersService,
              private router : Router)
  {

  }

  comparePassword(valueI : string, valueII : string)
  {
    return valueI === valueII;
  }

  addUser(email : string,
    password :string,
    passwordConfirm: string,
    firstname : string,
    surname : string){

    this.passwordCorrect = this.comparePassword(password, passwordConfirm);

    if (this.passwordCorrect){
      let user : Users = {
        userId : 0,
        email : email,
        Password : password,
        firstName : firstname,
        surName : surname,
        Permission_Add_Cargo : true
      }

      this.userService.add(user)
        .subscribe( result => {
          if (result){
            alert("Gebruiker is toegevoegd");
            this.router.navigate(['/admin']);
          }else{
            alert("Invoer klopt niet of emailadres is al in gebruik.")
          }
        });
    }
  }
}
