import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarshallComponent } from './private/marshall/marshall.component';
import { OwnerComponent } from './private/owner/owner.component';
import { ScoffComponent } from './private/scoff/scoff.component';
import { HomeComponent } from './public/home/home.component';


const routes: Routes = [

  {path: '', redirectTo:'public', pathMatch:'full'},
 
{path:'home',component: HomeComponent},
  {path:'owner',component: OwnerComponent},
 {path:'scoff',component: MarshallComponent},
 {path:'scoff/id',component: ScoffComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
