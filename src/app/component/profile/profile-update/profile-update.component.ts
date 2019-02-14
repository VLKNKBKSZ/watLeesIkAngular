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
    let profileId = window.localStorage.getItem("updateProfileId");
    if (!profileId) {
      alert("Invalid action."); // TODO: foutafhandeling..., nu even terug naar home
      this.router.navigate(['home']);
      return;
    }
    this.updateForm = this.formBuilder.group({
      id: [''],
      dayOfBirth: ['', Validators.required],
      name: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      updatedOn: ['', Validators.required],
      account: ['']
      // bookList: ['', Validators.required]
    });
    this.profileService.getProfileById(+profileId)
      .subscribe(data => {
        this.updateForm.setValue(data);
      });
  }

  onSubmit() {
    this.profileService.updateProfile(this.updateForm.value)
      .subscribe( data => {
        alert(data)
      })
  }

}
