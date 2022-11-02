import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';

const routes:Routes=[
  {path: 'public', component: PublicComponent,children:[
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo:'home', pathMatch:'full'},
  ]},
 

]

@NgModule({
  declarations: [
  
    HomeComponent,
       PublicComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ],
  providers: [],
  bootstrap: [PublicComponent]
})
export class PublicModule { }
