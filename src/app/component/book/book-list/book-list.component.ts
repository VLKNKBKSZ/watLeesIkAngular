import { Component, OnInit } from '@angular/core';
import {ProfileBook} from '../../../model/ProfileBook';
import {Router} from '@angular/router';
import {AccountService} from '../../../service/account/account.service';
import {BookService} from '../../../service/book/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  profileBook: ProfileBook[];

  constructor( private router: Router,
               private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBookList()
      .subscribe(profileBook => {
        this.profileBook = profileBook;
      });
  }

  deleteProfileBookItem(profileBookItem: ProfileBook) {
    console.log(profileBookItem);
    this.bookService.deleteBookListItem(profileBookItem).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      },
      error => {
        console.log(error);
      });
  }
}
