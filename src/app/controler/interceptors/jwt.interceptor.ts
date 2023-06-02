import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.includes("authenticate")) return next.handle(request)
    if (request.url.includes("register")) return next.handle(request)

    let token = localStorage.getItem("token");

    console.log(token)
    if (token != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `${token}`
        }
      });
    }

    return next.handle(request);
  }
}
