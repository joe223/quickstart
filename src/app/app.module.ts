import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';


import HeroService from './hero.service';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "detail/:id",
        component: HeroDetailsComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
    ])
  ],
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroesComponent,
    DashboardComponent,
  ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})



export class AppModule {
  
}
