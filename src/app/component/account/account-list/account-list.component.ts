import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/model/Account';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[];
  currentAccount: Account;

  constructor(
    private router: Router,
    private accountService: AccountService) { }

  ngOnInit() {
    this.currentAccount = JSON.parse(window.localStorage.getItem('currentAccount'));
    if (!window.localStorage.getItem('currentAccount')) {
      this.router.navigate(['login']);
      return;
    }
    this.accountService.getAccountList()
      .subscribe(accounts => {
        this.accounts = accounts;
      });
  }

  deleteAccount(account) {
    this.accountService.deleteAccount(account)
      .subscribe(data => {
        this.accountService.getAccountList()
          .subscribe(accounts => {
            this.accounts = accounts;
          });
      })
  }
}
