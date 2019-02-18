import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book/book.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books;

  constructor(private bookService: BookService, private router: Router, private formBuilder: FormBuilder) {
  }

  OnSearch(s) {
    this.bookService.searchParam(s)
      .subscribe((data: any) => {
        this.books = data.items;
      });
  }

  ngOnInit(): void {
  }
}
