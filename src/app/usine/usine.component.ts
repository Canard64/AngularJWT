import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from 'src/app/login-service.service';

@Component({
  selector: 'app-usine',
  templateUrl: './usine.component.html',
  styleUrls: ['./usine.component.css']
})
export class UsineComponent implements OnInit {

  constructor(public loginService : LoginServiceService) { }

  ngOnInit()
   {
    console.log('USINE');
    this.loginService.getData();
  }

}
