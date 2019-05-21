import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-two-step',
  templateUrl: './two-step.component.html',
  styleUrls: ['./two-step.component.scss']
})
export class TwoStepComponent implements OnInit {
  constructor( private route:Router) { }
  funcStep3(){
    this.route.navigate(['step3']);
   }
  ngOnInit() {
  }
}