export class Customer {

    CustomerId:number;
    FirstName: string;
    LastName:string;
    City:string;
    Street:string;
    NumHouse:number;
    Email:string;
    Password:string;
    Phone:string;

    constructor( customerId:number, firstName: string, lastName:string, city:string, street:string,
                 numHouse:number, email:string, password:string, phone:string)
    {
        this.CustomerId=customerId;
      this.FirstName=firstName;
      this.LastName=lastName;
      this.City=city;
      this.Street=street;
      this.NumHouse=numHouse;
      this.Email=email;
      this.Password=password;
      this.Phone=phone;
    }
  
}
