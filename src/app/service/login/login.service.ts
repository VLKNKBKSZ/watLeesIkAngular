import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  // baseUrl moeten we ergens generiek configureren, waarschijnlijk een config service?
  baseUrl: string = 'http://localhost:8080/';

  login(loginPayload): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login', loginPayload);
  }
}
