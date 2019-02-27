import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account/account.service';
import { Account } from 'src/app/model/Account';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  createForm: FormGroup;
  account: Account;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private accountService: AccountService) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    this.account = this.createForm.value;
    this.accountService.createAccount(this.account)
      .subscribe(data => {
        this.router.navigate(['account/account-list']);
      })
  }

  get email() {return this.createForm.get('email');}
  get password() {return this.createForm.get('password');}
  get role() {return this.createForm.get('role');}
}
