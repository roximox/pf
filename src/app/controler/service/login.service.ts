import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtRequest } from '../model/JwtRequest';
import { User } from '../model/User';
import { JwtResponse } from '../model/jwt-response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public authenticated =
    <boolean>JSON.parse(localStorage.getItem('autenticated')) || false;
  constructor(private http: HttpClient) {}

  public signup(user: User): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(
      'http://localhost:8036/registerNewUser',
      user
    );
  }

  public signin(jwtRequest: JwtRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(
      'http://localhost:8036/authenticate',
      jwtRequest
    );
  }

  public logout() {
    localStorage.setItem('autenticated', JSON.stringify(false));
    localStorage.removeItem('token');
  }
}
/*
  private _login!:Login;
  private  _logins!: Array<Login>;
  private url = environment.BaseUrl + 'login/';

  public deleteById(id: number):Observable<number>{
    console.log('urll ==>' + this.url + 'id/' + id)
    return this.http.delete<number>(this.url + 'id/' + id);
  }
  public save():Observable<Login>{
    return this.http.post<Login>(this.url,this.login);
  }
  public findAll():Observable<Array<Login>>{
    return this.http.get<Array<Login>>(this.url);
  }
  public loadLoginByName(name: string):Observable<Login>{
    return this.http.get<Login>(
      'http://localhost:8030/api/v1/login/name/${name}'
    );
  }

  constructor(private http:HttpClient) { }

  get login(): Login {
    if (this._login == null){
      this._login = new Login();
    }
    return this._login;
  }

  set login(value: Login) {
    this._login = value;
  }

  get logins(): Array<Login> {
    if (this._logins == null){
      this._logins = new Array<Login>();
    }
    return this._logins;
  }

  set logins(value: Array<Login>) {
    this._logins = value;
  }

}
}
   */
