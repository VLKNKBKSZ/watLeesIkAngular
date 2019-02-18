import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  baseUrl: string = environment.restApiUrl;

  login(loginPayload): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login', loginPayload);
  }
}
