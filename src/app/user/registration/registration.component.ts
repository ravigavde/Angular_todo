import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { UserService } from  '../service/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signUpform : FormGroup;
  profileImage: any ;
  duplicate : boolean;

  constructor(private userService : UserService ) {
   }


  ngOnInit(): void {
    this.signUpform = new FormGroup({
      'userName' : new FormControl(null,Validators.required),
      "UserEmail" : new FormControl(null, [Validators.required, Validators.email]),
      "password" : new FormControl(null,[Validators.required, Validators.minLength(4)]),
      "repeatPassword" : new FormControl(null,Validators.required), 
      "gender" :  new FormControl("Male",Validators.required),
      "address" : new FormControl(null,Validators.required),
      "profile" : new FormControl(null,Validators.required),
    });
  }
  submit(){
    // console.log(this.signUpform.value.userName);
    let userData = {
      name : this.signUpform.value.userName,
      email : this.signUpform.value.UserEmail,
      password : this.signUpform.value.password,
      gender : this.signUpform.value.gender,
      address : this.signUpform.value.address,
      profile : this.profileImage,
      todo : []
    };

    if( !this.userService.duplicate(this.signUpform.value.UserEmail) )
    {
      this.userService.registerUser(userData);
      this.duplicate = false;
    }
    else
    {
      this.duplicate = true; 
    }
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

}
