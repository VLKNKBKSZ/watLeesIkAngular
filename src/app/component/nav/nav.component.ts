import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  currentAccount: Account;
  currentAccountSubscription: Subscription;

  constructor(private loginService: LoginService) {
    this.currentAccountSubscription = this.loginService.currentAccount.subscribe(account => {
      this.currentAccount = account;
    })
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.currentAccountSubscription.unsubscribe();
  }

}
