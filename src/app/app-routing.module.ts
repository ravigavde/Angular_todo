import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginGuard } from './guard/login.guard';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { EditTodoComponent } from './user/edit-todo/edit-todo.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { TodoComponent } from './user/todo/todo.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
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
  },
  {
    path:'editTodo',
    component:EditTodoComponent,
    canActivate:[LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
