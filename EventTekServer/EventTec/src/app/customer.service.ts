
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpclint:HttpClient) { }
  addCustomer(customer:Customer)
  {
    alert("הלקוח נוסף בהצלחה");
    // this.httpclint.post(`http://localhost:52075/api/Customer`,customer);
  }

}









