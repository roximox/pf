import { Component } from '@angular/core';
import {LoginService} from "../../controler/service/login.service";
import {User} from "../../controler/model/User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = new User();


  constructor(private loginService: LoginService) {}

  save() {
    this.loginService.signup(this.user)
      .subscribe({
        next: value => {
          console.log(value)
        }
      })
  }
}
