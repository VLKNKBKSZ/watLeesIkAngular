import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) { }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    }
    this.loginService.login(loginPayload).subscribe(
      data => {
        if (window.localStorage.getItem("firstLogin") === 'true') {
          window.localStorage.removeItem("firstLogin");
          this.router.navigate(['profile/profile-update']);
        } else {
          this.router.navigate(['home'])
        }
      }, error => {
        alert(error.message)
      }
    );
  }

  ngOnInit() {
    window.localStorage.removeItem('currentAccount') // Remove currentAccount when going to login page
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.required]
    })
  }

}
