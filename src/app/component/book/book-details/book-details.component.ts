import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookService} from '../../../service/book/book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../../model/Book';
import {Author} from '../../../model/Author';
import {BookCategory} from '../../../model/BookCategory';
import {first} from 'rxjs/operators';
import {AlertService} from '../../../service/alert/alert.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  book;
  isbn: number;
  private sub: any;
  role: string;

  constructor(private bookService: BookService, private route: ActivatedRoute, private alertService: AlertService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.isbn = params['isbn'];
      this.bookService.searchByIsbn(this.isbn).subscribe((data: any) => {
        this.book = data.items[0];
      });
    });
    this.role = window.localStorage.getItem('role');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public deleteBookByIsbn() {
    this.bookService.deleteBookByIsbn(this.isbn).subscribe(
      data => {
        this.alertService.success(data, false);
      },
      error => {
        this.alertService.error(error, false);
      });
  }

  public addBookToMyBookList(book) {
    const bookNew = this.createBook(book);
    console.log(bookNew);
    this.bookService.addBookToMyBookList(bookNew)
      .subscribe(
        data => {
          this.alertService.success(JSON.parse(data), false);
        },
        error => {
          this.alertService.error(JSON.parse(error), false);
        });
  }

  public createBook(book): Book {
    const bookNew: Book = new Book();
    const bookCategory: BookCategory = new BookCategory();
    bookNew.title = book.volumeInfo.title;

    if (book.volumeInfo.categories === 'undefined' || book.volumeInfo.categories === null) {
      bookCategory.name = 'null';
    } else {
      bookCategory.name = book.volumeInfo.categories.toString();
    }
    bookNew.bookCategory = bookCategory;
    bookNew.author = this.parseAuthorNames(book.volumeInfo.authors);
    bookNew.publicationYear = this.parsePublishedDate(book.volumeInfo.publishedDate);
    bookNew.isbn = book.volumeInfo.industryIdentifiers[0].identifier;
    return bookNew;
  }

  public saveBook(book) {
    const bookNew = this.createBook(book);
    console.log(bookNew);
    this.bookService.createBook(bookNew).pipe(first())
      .subscribe(
        data => {
          this.alertService.success(data, false);
        },
        error => {
          this.alertService.error(error, false);
        });
  }

  public parseAuthorNames(authorNames): Author {
    const author = new Author();
    const words: string [] = authorNames.toString().split(' ');
    if (words.length === 3) {
      author.name = words[0];
      author.middleName = words[1];
      author.lastName = words[2];

    } else {
      author.name = words[0];
      author.lastName = words[1];
    }
    return author;
  }

  public parsePublishedDate(publishedDate): any {

    const words: string[] = publishedDate.toString().split('-');
    return words[0];
  }
}
