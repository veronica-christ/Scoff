import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AuthModule} from 'src/app/auth/auth.module'
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PublicModule } from './public/public.module';

import { AppRoutingModule } from './app-routing.module';
import { PrivateModule } from './private/private.module';

import { AppComponent } from './app.component';
import { AddTaxiComponent } from './private/add-taxi/add-taxi.component';
import { HomeComponent } from './public/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent

    
    
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PublicModule,
    PrivateModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
