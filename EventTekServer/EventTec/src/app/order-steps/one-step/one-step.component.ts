import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-one-step',
  templateUrl: './one-step.component.html',
  styleUrls: ['./one-step.component.scss']
})
export class OneStepComponent implements OnInit {

  constructor(private route:Router) { 
  }
  funcStep2(){
   this.route.navigate(['step2']);
  }
  ngOnInit() {
  }

}
