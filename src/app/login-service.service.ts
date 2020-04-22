import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

import {User} from './models/user'


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private currentUserSubject: BehaviorSubject<User>;
  public isAuthenticated  = new BehaviorSubject<boolean>(false);
  public currentUser: Observable<User>;
  public isLogIn: Observable<boolean>;



  constructor(private router : Router, private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.isLogIn = this.isAuthenticated.asObservable();

   }

   public get currentUserValue(): User {
    return this.currentUserSubject.value;
}



   login (UserName : string, Password : string)
  {
    return this.http.post<any>("https://localhost:44311/api/login/PostLogin", {UserName,
    Password
    })
    .pipe(map(user => {
               localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.isAuthenticated.next(true);
        return user;
    }));

    /*return this.http.get<User>("https://localhost:44311/api/login", {params: {
      username: userName,
      pwd: password
    }})
    .pipe(map(user => {
               localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.isAuthenticated.next(true);
        return user;
    }));*/

  }

  getData ()
  {
    var response = this.http.get<User>("https://localhost:44311/api/Login/GetAll");
    response.subscribe((x)=> console.log(x));
  }

   logout(redirect : string)
  {
    try{
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      this.isAuthenticated.next(false);
      this.router.navigate([redirect]);
    } catch(err)
    {
      console.error(err);
    }
  }

}
