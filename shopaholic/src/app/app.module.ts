import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule } from '@angular/router';
import { allAppRoutes } from './routes';


import { AppComponent } from './app.component';
import{ TitlebarComponent } from './homepage/title-bar/title-bar.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,TitlebarComponent,HomepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
