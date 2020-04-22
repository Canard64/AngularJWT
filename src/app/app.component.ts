import { Component } from '@angular/core';
import { LoginServiceService} from './login-service.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Usine Digitale';
  isAuthenticated: boolean;
  currentUser  : User;

  constructor(public loginService : LoginServiceService)
  {
    this.loginService.currentUser.subscribe(x =>{
         this.currentUser = x;

    });

  this.loginService.isAuthenticated.subscribe(
    (x ) =>{
    this.isAuthenticated = x;
      ;
    }
  );

  }

logout() {
 this.loginService.logout('/');
}

}
