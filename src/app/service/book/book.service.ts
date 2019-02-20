import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {environment} from '../../../environments/environment.prod';
import {map} from 'rxjs/operators';
import {Book} from '../../model/Book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: string = environment.restApiUrl;
  googleApi = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) {
  }


  public createBook(book: Book): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'book', book);
  }
  public searchParam(search) {
    const encodedURI = encodeURI(this.googleApi + search + '&maxResults=40');
    return this.http.get(encodedURI);
  }

  public searchByIsbn(isbn) {
    const encodedURI = encodeURI('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + '&maxResults=1');
    return this.http.get(encodedURI);
  }

  public getBookCategories(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'book/categories');
  }
}
