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
  public currentUser: Observable<User>;

  public isAuthenticated  = new BehaviorSubject<boolean>(false);

  constructor(private router : Router, private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

   }

   public get currentUserValue(): User {
    return this.currentUserSubject.value;
}



   login (username : string, password : string)
  {
    return this.http.get<User>("https://localhost:44311/api/login", {params: {
      username: 'toto',
      pwd: password
    }})
    .pipe(map(user => {
        console.log(JSON.stringify(user));
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.isAuthenticated.next(true);
        return user;
    }));

  }

   logout(redirect : string)
  {
    try{
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      this.router.navigate([redirect]);
    } catch(err)
    {
      console.error(err);
    }
  }

}
