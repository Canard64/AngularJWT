import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { UsineComponent} from './usine/usine.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AccountComponent} from './account/account.component';
import { LoginGuardService } from './login-guard.service';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'game',
    component: UsineComponent,
   // canActivate :  [LoginGuardService]
  }
  ,
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'account',
    component: AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
