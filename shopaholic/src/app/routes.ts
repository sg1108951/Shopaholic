import { Routes } from '@angular/router';
import{ HomepageComponent } from'./homepage/homepage.component';
import{ RegisterComponent } from './homepage/register/register.component';


export const allAppRoutes: Routes = [
    { path: '', component: HomepageComponent },
    {path: 'NewRegister', component: RegisterComponent}
  ];