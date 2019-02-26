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
  // bookList: Book[];
  updatedOn: string;    
}

var today = new Date();
var yyyy = today.getFullYear();

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {  
  minDate: NgbDateStruct = { year: yyyy-120, month: 1, day: 1 };
  maxDate: NgbDateStruct = { year: yyyy+1, month: 1, day: 1 };
  
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
      dayOfBirth: ['', Validators.required,],
      name: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      updatedOn: [''],
      address: this.formBuilder.group({
        id: [''],
        streetName: [''],
        number: [''],
        numberAddition: [''],
        postalCode: [''],
        city: ['']
      }),
      bookList: ['']
    });
    this.profileService.getProfile()
      .subscribe(data => {
        let tmpProfile: DatePickerProfile = data.result;
        tmpProfile.dayOfBirth = this.dateformatService.parse(data.result.dayOfBirth);
        this.updateForm.patchValue(tmpProfile);
      });
  }

  onSubmit() {
    let tmpProfile: DatePickerProfile = this.updateForm.value;
    let date: string = this.dateformatService.format(tmpProfile.dayOfBirth)
    let profile: Profile = this.updateForm.value;
    profile.dayOfBirth = date;

    alert(this.updateForm.status)
    this.profileService.updateProfile(profile)
      .subscribe( data => {
        this.router.navigate(['home']);
      })
  }

  get name() {return this.updateForm.get('name');}
  get lastName() {return this.updateForm.get('lastName');}
  get dayOfBirth() {return this.updateForm.get('dayOfBirth');}

}
