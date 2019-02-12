import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Author} from '../../model/Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  baseUrl = environment.restApiUrl;

  constructor(private http: HttpClient) {
  }

  public createAuthor(author: Author) {

    return this.http.post(this.baseUrl + 'author', author);
  }

}
