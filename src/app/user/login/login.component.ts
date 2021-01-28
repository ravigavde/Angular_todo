import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { UserService } from  '../service/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform : FormGroup;
  found:boolean;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      "userName" : new FormControl(null,[Validators.required, Validators.email] ),
      "password" : new FormControl(null,Validators.required ),
    });

  }
  submit(){
    const email = this.loginform.value.userName;
    const password = this.loginform.value.password;
    
    if( this.userService.login({email : email , password : password})  )
    {
      this.found = true;
      this.userService.login(email);
      this.router.navigate(['dashboard']);
    }
    else
    {
      this.found = false;
    }
    
  }

}
