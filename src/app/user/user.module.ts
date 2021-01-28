import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [RegistrationComponent, LoginComponent, DashboardComponent, ProfileComponent, TodoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [ 
    RegistrationComponent,
    LoginComponent,
    DashboardComponent
  ]
})
export class UserModule { }
