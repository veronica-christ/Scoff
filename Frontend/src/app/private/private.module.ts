import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AuthModule} from 'src/app/auth/auth.module'
import {  ReactiveFormsModule } from '@angular/forms';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { MarshallComponent } from './marshall/marshall.component';
import { AddTaxiComponent } from './add-taxi/add-taxi.component';
import { ViewScoffsComponent } from './view-scoffs/view-scoffs.component';
import { PrivateComponent } from './private.component';
import { ViewProfitComponent } from './view-profit/view-profit.component';
import { TaxidetailsComponent } from './taxidetails/taxidetails.component';
import { ScoffComponent } from './scoff/scoff.component';
import { RegnoComponent } from './regno/regno.component';


const routes:Routes=[
  {path: 'private', component: PrivateComponent,children:[
  
{path: 'marshall', component:MarshallComponent },
{path: 'owner', component:OwnerComponent },
{path: 'addtaxi', component:AddTaxiComponent },
{path: 'viewscoffs', component:ViewScoffsComponent }
]}
]
@NgModule({
  declarations: [
    PrivateComponent,
    MarshallComponent,
    OwnerComponent,
    AddTaxiComponent,
    ViewScoffsComponent,
    ViewProfitComponent,
    TaxidetailsComponent,
    ScoffComponent,
    RegnoComponent,


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ]
})
export class PrivateModule { }
