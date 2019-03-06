import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {LoginService} from 'src/app/service/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) {
  }

  onReset() {
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    const email = this.forgotPasswordForm.controls.email.value;
    this.loginService.requestPasswordReset(email).subscribe(
      data => {
        this.router.navigate(['login']);
      },
      error => {
        alert(JSON.stringify(error.error.message));
      }
    );
  }
  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      'email': ['', Validators.required]
    });
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

}
