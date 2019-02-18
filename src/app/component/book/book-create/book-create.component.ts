import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../service/book/book.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {


  bookCategories: any;
  bookForm: FormGroup;

  constructor(private bookService: BookService, private router: Router, private formBuilder: FormBuilder) {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.bookForm.controls;
  }
  ngOnInit() {
    this.bookService.getBookCategories().subscribe(data => {
      this.bookCategories = data;
    });
    this.bookForm = this.formBuilder.group({
      title: ['De Ontdekking van de hemel', Validators.required],
      isbn: ['9789023466154', Validators.required],
      pages: ['936', Validators.required],
      publicationYear: ['1992', Validators.required],
      bookCategory: this.formBuilder.group({
        name: ['Fantasie', Validators.required],
      }),
      author: this.formBuilder.group({
        name: ['Harry', Validators.required],
        middleName: [''],
        lastName: ['Mulisch', Validators.required]
      })
    });
  }

  onSubmit() {
    if (this.bookForm.invalid) {
      return;
    }
    console.warn(this.bookForm.value);
    this.bookService.createBook(this.bookForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/home']);
        },
        error => {
        });
  }
}

