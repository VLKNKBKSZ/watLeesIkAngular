import {Component, OnInit} from '@angular/core';
import {BookServiceService} from '../../../service/book-service/book-service.service';
import {Router} from '@angular/router';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {BookType} from '../../../model/BookType';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {


  bookTypes: any;
  bookForm: FormGroup;
  bookTypeArray: string;
  submitted = false;

  constructor(private bookService: BookServiceService, private router: Router, private formBuilder: FormBuilder) {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.bookForm.controls;
  }
  ngOnInit() {
    this.bookService.getBookTypesArray().subscribe(data => {
      this.bookTypes = data;
    });
    this.bookForm = this.formBuilder.group({
      title: ['De Ontdekking van de hemel', Validators.required],
      isbn: ['9789023466154', Validators.required],
      pages: ['936', Validators.required],
      publicationYear: ['1992', Validators.required],
      bookType: this.formBuilder.group({
        name: ['Fantasie', Validators.required]
      }),
      author: this.formBuilder.group({
        name: ['Harry', Validators.required],
        middleName: [''],
        lastName: ['Mulisch', Validators.required]
      })
    });
  }

  onSubmit() {
    this.submitted = true;
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

