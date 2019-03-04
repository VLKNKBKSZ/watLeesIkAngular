import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      'password': ['', Validators.required],
      'passwordConfirm': ['', Validators.required]
    })   
  }

  onReset() {
    if (this.password.value !== this.passwordConfirm.value) {
      alert("Wachtwoorden zijn niet gelijk!")
      return;
    }
    const resetPayload = {
      token: this.route.snapshot.params.token,
      password: this.password.value
    }
    this.loginService.resetPassword(resetPayload).subscribe(
      data => {
        this.router.navigate(['login']);
      }
    )
    alert("Reset uitgevoerd")
  }

  get password() {return this.resetPasswordForm.get('password');}
  get passwordConfirm() {return this.resetPasswordForm.get('passwordConfirm');}

}
