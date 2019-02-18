import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookService} from '../../../service/book/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  book;
  isbn: number;
  private sub: any;

  constructor(private bookService: BookService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.isbn = +params['isbn'];
      this.bookService.searchByIsbn(this.isbn).subscribe((data: any) => {
        this.book = data.items[0];
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
