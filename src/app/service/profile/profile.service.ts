import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/app/model/Profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl = environment.restApiUrl;

  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
   return this.http.get<any>(this.baseUrl + 'profile');
  }

  updateProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(this.baseUrl + 'profile/update', profile);
  }

}
