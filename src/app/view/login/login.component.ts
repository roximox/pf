import { Component } from '@angular/core';

import {LoginService} from "../../controler/service/login.service";
import {User} from "../../controler/model/User";
import {JwtRequest} from "../../controler/model/JwtRequest";

@Component({
  selector: 'app-patient-create',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  jwtRequest = new JwtRequest();


  constructor(private loginService: LoginService) {}

  save() {
    this.loginService.signin(this.jwtRequest)
      .subscribe({
        next: value => {
          localStorage.setItem("token", value.jwtToken)
        }
      })
  }
}
