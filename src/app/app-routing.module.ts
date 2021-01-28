import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginGuard } from './guard/login.guard';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { TodoComponent } from './user/todo/todo.component';


const routes: Routes = [
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'profile',
    component : ProfileComponent,
    canActivate:[LoginGuard]
  },
  {
    path:'todo',
    component : TodoComponent,
    canActivate:[LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
