import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { AuthComponent } from './auth.component';

const routes:Routes=[ {path: 'auth',component: AuthComponent,children:[
  {path: 'login', component: LoginComponent},
    {path: 'register', component: RegistrationComponent},]}]
@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule ,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
