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

  getProfileById(id: number): Observable<Profile> {
   return this.http.get<Profile>(this.baseUrl + 'profile/profile-update/' + id);
  }

  updateProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(this.baseUrl + 'profile/profile-update', profile);
  }

}
