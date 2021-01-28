import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../user/service/user.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private userService : UserService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{

      if(this.userService.loggedIn() == null || this.userService.loggedIn() == undefined || this.userService.loggedIn() == "" )
      {
        return false;
        console.log("not there");
      }
      else
      {
        console.log("there");
        return true;
      }
  }
  
}
