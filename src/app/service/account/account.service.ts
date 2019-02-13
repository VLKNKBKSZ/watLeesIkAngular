import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import { Account } from 'src/app/model/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.restApiUrl;

  constructor(private http: HttpClient) { }

  getAccountList() {
    return this.http.get<Account[]>(this.baseUrl + 'account/account-list');
  }
}
