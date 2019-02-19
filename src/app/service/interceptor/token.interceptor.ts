import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token, currentAccount = JSON.parse(window.localStorage.getItem('currentAccount'));
    if (currentAccount) token = currentAccount.accessToken;
    if (request.url.includes('googleapis')) {
      return next.handle(request);
    }
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      })
    }
    return next.handle(request);
  }
}