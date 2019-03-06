import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileBook} from '../../../../model/ProfileBook';
import {BookService} from '../../../../service/book/book.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-list-item-edit',
  templateUrl: './book-list-item-edit.component.html',
  styleUrls: ['./book-list-item-edit.component.css']
})
export class BookListItemEditComponent implements OnInit {

  profileBook: ProfileBook;
  private sub: any;
  role: string;

  ratingForm: FormGroup;

  constructor(private bookService: BookService, private formBuilder: FormBuilder,
              private router: Router) {
  }

  get formControls() {
    return this.ratingForm.controls;
  }

  ngOnInit() {
    this.profileBook = new ProfileBook(this.bookService.getProfileBook());
    this.role = window.localStorage.getItem('role');
    this.ratingForm = this.formBuilder.group({
      rating: ['', [Validators.required, Validators.pattern('^(?:[1-9]|0[1-9]|10)$')]],
    });
  }

  onSubmit() {
    if (this.ratingForm.invalid) {
      return;
    }
    this.profileBook.rating = this.ratingForm.value;
    this.bookService.addRatingToProfileBookItem(this.profileBook).subscribe(data => {
      console.log(this.profileBook);
      this.router.navigate(['/profile/book-list']);
    }, error => {
      console.log(error);
    });
  }

}
