import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userdata : any;
  constructor(private router : Router) { }
  registerUser(userData)
  {
    let data ;
    if( window.localStorage.getItem('user') != null || window.localStorage.getItem('user') != undefined    )
    {
      data = JSON.parse(window.localStorage.getItem('user'));
      data.push(userData);
      window.localStorage.setItem('user',JSON.stringify(data));
    }
    else
    {
      data = [];
      data.push(userData);
      window.localStorage.setItem('user',JSON.stringify(data));
    }
  }
  duplicate(email : string)
  {
    let duplicate : boolean;
    let data = JSON.parse( window.localStorage.getItem('user'));
    if( data != null || data != undefined)
    {
      data.forEach(element => { 
        if(element.email == email)
        {
          duplicate = true; 
        }
        else
        {
          duplicate = false; 
        }
      });
    }
    else
    {
      duplicate = false;  
    }
    return duplicate;
  }
  login(details)
  {
    let data = JSON.parse( window.localStorage.getItem('user'));
    let found : boolean = false;


    data.forEach(element => {
      if(element.email == details.email && element.password == details.password)
      {
        found = true;   
        window.localStorage.setItem("loggedIn",details.email);
        this.userdata = element;
      }
    });
      return found;
  }
  loggedIn()
  { 
    return( window.localStorage.getItem("loggedIn"))
  }
  logout()
  {
    this.router.navigate(['/login']);
    window.localStorage.removeItem("loggedIn");
  }
  getUserData(){
    return(this.userdata);
  }
  
}
