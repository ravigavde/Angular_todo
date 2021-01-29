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
  profileImage: any;
  sub : boolean = false;
  
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


  getImage(event : any)
  {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.profileImage = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
      }
  }



  submit()
  {
    if( this.profileForm.value.picture == "" || this.profileForm.value.picture == undefined  )
    { 
        this.userDetails.name = this.profileForm.value.userName;
        this.userDetails.gender = this.profileForm.value.gender;
        this.userDetails.address = this.profileForm.value.address;
        this.userDetails.profile = this.userProfilePic;
    }
    else
    {
      this.userDetails.name = this.profileForm.value.userName;
      this.userDetails.gender = this.profileForm.value.gender;
      this.userDetails.address = this.profileForm.value.address;
      this.userDetails.profile = this.profileImage;
    }
    this.sub = true;
    this.userService.updateProfile(this.userDetails)
  }

}
