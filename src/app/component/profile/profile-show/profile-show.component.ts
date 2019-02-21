import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/model/Profile';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-profile-show',
  templateUrl: './profile-show.component.html',
  styleUrls: ['./profile-show.component.css']
})
export class ProfileShowComponent implements OnInit {

  profile: Profile;

  constructor(
    private router: Router,
    private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfile()
      .subscribe(data => {
        this.profile = data.result;
      });
  }

}
