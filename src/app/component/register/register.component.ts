import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../../service/register/register.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService ) { }

  onRegister() {
    if (this.registrationForm.invalid) {
      return;
    }
    const registrationPayload = {
      email: this.registrationForm.controls.email.value,
      password: this.registrationForm.controls.password.value
    }
    this.registerService.register(registrationPayload).subscribe(
      data => {
        if (data !== null) {
          window.localStorage.setItem("firstLogin", 'true');
          this.router.navigate(['login']);
        }
      }, 
      error => {
        alert(JSON.stringify(error.error.message));
      }
    )
  }
  
  ngOnInit() {
    window.localStorage.removeItem('token');
    this.registrationForm = this.formBuilder.group({
      'email': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.required]
    });
  }

}