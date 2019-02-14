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
        if (data !== null && data.tokenType === 'Bearer') {
          window.localStorage.setItem('token', data.accessToken);
          if (window.localStorage.getItem("firstLogin") === 'true') {
            window.localStorage.removeItem("firstLogin");
            this.router.navigate(['profile/profile-update']);
          } else {
            this.router.navigate(['home']);
          }
        } else {
          this.invalidLogin = true;
        }
      }
    );
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.required]
    })
  }

}
