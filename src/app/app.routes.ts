import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SwitchComponent } from './switch/switch.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  
    {path:'',component:SignupComponent},
    {path:'switch',component:SwitchComponent},
    {path:'login', component:LoginComponent},
    {path:'user/:id/:name/:age/:email', component:UserComponent},
    {path:'**', component:Page404Component}

];
