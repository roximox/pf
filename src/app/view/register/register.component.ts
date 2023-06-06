import { Component } from '@angular/core';
import {LoginService} from "../../controler/service/login.service";
import {User} from "../../controler/model/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = new User();


  constructor(private loginService: LoginService, private  router : Router) {}

  save() {
    this.loginService.signup(this.user)
      .subscribe({
        next: value => {
          console.log(value)
          this.router.navigate(["login"])
        }
      })
  }
}
