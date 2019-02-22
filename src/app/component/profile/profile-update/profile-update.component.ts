import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/model/Profile';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/service/profile/profile.service';
import { Book } from 'src/app/model/Book';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DateformatService } from 'src/app/service/dateformat/dateformat.service';

export interface DatePickerProfile {  
  id: number;  
  name: string;
  middleName: string;
  lastName: string;
  dayOfBirth: NgbDateStruct;
  bookList: Book[];
  updatedOn: string;    
}

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
    private profileService: ProfileService,
    private dateformatService: DateformatService) { }

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
        let tmpProfile: DatePickerProfile = data.result;
        tmpProfile.dayOfBirth = this.dateformatService.parse(data.result.dayOfBirth);
        this.updateForm.setValue(data.result);
      });
  }

  onSubmit() {
    let tmpProfile: DatePickerProfile = this.updateForm.value;
    let date: string = this.dateformatService.format(tmpProfile.dayOfBirth)
    let profile: Profile = this.updateForm.value;
    profile.dayOfBirth = date;

    this.profileService.updateProfile(profile)
      .subscribe( data => {
        this.router.navigate(['home']);
      })
  }

}
