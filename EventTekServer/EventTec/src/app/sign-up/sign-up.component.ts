import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  detalidNewcustomer:FormGroup;
  constructor(private customerService:CustomerService) {
    this.detalidNewcustomer=this.getFormGroup();
   }
  ngOnInit() {
  }
  getFormGroup(): FormGroup {
    return new FormGroup({
     
      CustomerId:new FormControl("",[Validators.required]),
      FirstName:new FormControl("",[Validators.required]),
      LastName:new FormControl("",[Validators.required]),
      City:new FormControl("",[Validators.required]),
      Street:new FormControl("",[Validators.required]),
      NumHouse:new FormControl("",[Validators.required]),
      Email:new FormControl("",[Validators.required]),
      Password:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
      Phone:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),

    });
  }
  onSubmit():void
  {
    this.customerService.addCustomer(this.detalidNewcustomer.value);
  }

}
