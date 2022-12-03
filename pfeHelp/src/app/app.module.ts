import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationsComponent } from './publications/publications.component';
import { publicationsService } from 'src/services/publication.services';

import { EditPubComponent } from './edit-pub/edit-pub.component';

import { ConsultPubComponent } from './consult-pub/consult-pub.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { DemosComponent } from './demos/demos.component';
import { AddDemoComponent } from './add-demo/add-demo.component';
import { EditDemoComponent } from './edit-demo/edit-demo.component';
import { ConsultDemoComponent } from './consult-demo/consult-demo.component';



const approutes : Routes=[
{path:'about', component:AboutComponent},
{path:'publications', component:PublicationsComponent},
{path:'editpub/:id', component:EditPubComponent},
{path:'consultpub/:id', component:ConsultPubComponent},
{path:'Demos', component:DemosComponent},
{path:'login', component:LoginUserComponent},
{path:'addDemo', component:AddDemoComponent},
{path:'consultdemo/:idD', component:ConsultDemoComponent},
{path:'editdemo/:idD', component:EditDemoComponent},
{path:'', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
    AboutComponent,
    EditPubComponent,

    ConsultPubComponent,
     LoginUserComponent,
     DemosComponent,
     AddDemoComponent,
     EditDemoComponent,
     ConsultDemoComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [publicationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
