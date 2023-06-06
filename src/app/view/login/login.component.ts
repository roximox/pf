import { Component } from '@angular/core';

import { LoginService } from '../../controler/service/login.service';
import { User } from '../../controler/model/User';
import { JwtRequest } from '../../controler/model/JwtRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-create',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  jwtRequest = new JwtRequest();

  constructor(private loginService: LoginService, private router: Router) {}

  save() {
    this.loginService.signin(this.jwtRequest).subscribe({
      next: (value) => {
        localStorage.setItem('autenticated', JSON.stringify(true));
        localStorage.setItem('token', value.jwtToken);
        this.router.navigate(['link-web']);
      },
    });
  }
}
