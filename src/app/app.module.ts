import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddphotosComponent } from './addphotos/addphotos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewallphotosComponent } from './viewallphotos/viewallphotos.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const myroutes=[

  {path:"",component:AddphotosComponent},
  {path:"view",component:ViewallphotosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddphotosComponent,
    NavbarComponent,
    ViewallphotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
