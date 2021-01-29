import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
  
})
export class ProfileComponent implements OnInit {
  
  profileForm : FormGroup;
  edit : boolean = true;
  userDetails : any;
  userProfilePic: any;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetch();
    this.profileForm = new FormGroup({
      'picture' : new FormControl(null),
      'userName' : new FormControl(this.userDetails.name,Validators.required),
      'gender' : new FormControl(this.userDetails.gender,Validators.required),
      'address' : new FormControl(this.userDetails.address,Validators.required)
    })
  }
  fetch()
  {
    this.userDetails = this.userService.getUserData();
    this.userProfilePic = this.userDetails.profile ;
  }
  allow()
  {
    this.edit = false;
  }
  submit()
  {
    if( this.profileForm.value.picture == "" )
    {

    }
    else
    {

    }

  }

}
