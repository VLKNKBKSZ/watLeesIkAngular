import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';
import {Book} from '../../model/Book';
import {ProfileBook} from '../../model/ProfileBook';


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

  public addBookToMyBookList(book: Book): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'book/booklist', book);
  }

  public deleteBook(book: Book): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'book/delete', book);
  }

  public deleteBookByIsbn(isbn: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + `book/delete/` + isbn);
  }

  public getBookList(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'book/mybooklist');
  }

  public searchParam(search) {
    const encodedURI = encodeURI(this.googleApi + search + '&maxResults=40');
    return this.http.get(encodedURI);
  }
public deleteBookListItem(profileBookItem) {
    return this.http.post(this.baseUrl + 'book/delete/booklistitem', profileBookItem);
}
  public searchByIsbn(isbn) {
    const encodedURI = encodeURI('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + '&maxResults=1');
    return this.http.get(encodedURI);
  }

  public getBookCategories(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'book/categories');
  }
}
