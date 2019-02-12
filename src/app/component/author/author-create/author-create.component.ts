import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthorService} from '../../../service/author/author.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {

  authorForm: FormGroup;

  constructor(private authorService: AuthorService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.authorForm = this.formBuilder.group({
      name: ['Harry', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      middleName: [''],
      lastName: ['Mulisch', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
    });
  }

  // Getter for easy access to form fields
  get formControls() {
    return this.authorForm.controls;
  }

  onSubmit() {
    if (this.authorForm.invalid) {
      return;
    }

    console.log(this.authorForm.value);
    this.authorService.createAuthor(this.authorForm.value).pipe().subscribe(data => {
      this.router.navigate(['/home']);
    }, error => {
      console.log(error);
    });
  }


}
