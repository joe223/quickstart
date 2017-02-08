import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';

import HeroDetailsComponent from "./hero-detail.component";
import HeroesComponent from "./heroes.component";
import DashboardComponent from "./dashboard.component";

import HeroService from './hero.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroesComponent,
    DashboardComponent,
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})



export class AppModule {

}
