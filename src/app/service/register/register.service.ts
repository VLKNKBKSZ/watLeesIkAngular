import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  baseUrl: string = environment.restApiUrl;

  register(registrationPayload): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'account/register', registrationPayload);
  }
}
