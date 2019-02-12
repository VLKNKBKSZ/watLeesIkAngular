import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/';

  createBook(bookForm: FormGroup): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }

  getBookTypesArray(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
}
