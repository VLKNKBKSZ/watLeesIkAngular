import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/model/Profile';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  profile: Profile;
  updateForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private profileService: ProfileService) { }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      id: [''],
      dayOfBirth: ['', Validators.required],
      name: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      updatedOn: ['', Validators.required],
      addressList: ['', Validators.required],
      bookList: ['', Validators.required]
    });
    this.profileService.getProfile()
      .subscribe(data => {
        this.updateForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.profileService.updateProfile(this.updateForm.value)
      .subscribe( data => {
        this.router.navigate(['home']);
      })
  }

}
