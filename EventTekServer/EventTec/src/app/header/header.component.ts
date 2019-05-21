import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
s:string;
constructor(private http:HttpClient) { }


  ngOnInit() {
  
    this.http.get(`http://localhost:52075/api/Customer`).subscribe(a=>alert(a));
  }

}
