import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {environment} from '../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: string = environment.restApiUrl;

  constructor(private http: HttpClient) {
  }


  public createBook(bookForm: FormGroup): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  public deleteBook () {

  }

  public updateBook () {

  }

  getBookTypesArray(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
