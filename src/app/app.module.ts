import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    AboutComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
