import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule } from '@angular/router';
import { allAppRoutes } from './routes';


import { AppComponent } from './app.component';
import{ TitlebarComponent } from './homepage/title-bar/title-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import{ RegisterComponent } from './homepage/register/register.component';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';









@NgModule({
  declarations: [
    AppComponent,TitlebarComponent,HomepageComponent,RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
