import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentAccountSubject: BehaviorSubject<Account>;
  public currentAccount: Observable<Account>;

  constructor(private http: HttpClient) { 
    this.currentAccountSubject = new BehaviorSubject<Account>(JSON.parse(window.localStorage.getItem('currentAccount')));
    this.currentAccount = this.currentAccountSubject.asObservable();
  }

  baseUrl: string = environment.restApiUrl;

  login(loginPayload): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login', loginPayload)
      .pipe(map(data => {
        if (data && data.tokenType === 'Bearer') {
          window.localStorage.setItem('currentAccount', JSON.stringify(data));
          this.currentAccountSubject.next(data);
        }
        return data;
      }))
  }

  logout() {
    window.localStorage.removeItem('currentAccount');
    this.currentAccountSubject.next(null);
  }

  requestPasswordReset(email) {
    return this.http.post<string>(this.baseUrl + 'account/forgot', email);
  }

  resetPassword(resetPayload) {
    return this.http.post<any>(this.baseUrl + 'account/reset', resetPayload)
  }
}
