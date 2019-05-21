import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private  route:Router) { }

  funcStep1( ){
    this.route.navigate(['step1']);
   }
  ngOnInit() {
  }

}
