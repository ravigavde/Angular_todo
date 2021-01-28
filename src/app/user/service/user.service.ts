import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userdata : any;
  constructor() { }
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
    window.localStorage.removeItem("loggedIn")
  }
  getUserData(){
    return(this.userdata);
  }
  
}
