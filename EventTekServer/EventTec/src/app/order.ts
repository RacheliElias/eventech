export class Order {

    CustomerId:number;
    OrderDate:Date;
    EventDate:Date;
    StatusPayment:boolean;
    MorningOrEvening:number;
    QuantityInvited:number;
    NumBridalChair:number;
    OrderSum:number;
    AdvancePaymentSum:number;
    EventKind:string;
    constructor(customerId:number, orderDate:Date, eventDate:Date, statusPayment:boolean, morningOrEvening:number,
                quantityInvited:number, numBridalChair:number, orderSum:number, advancePaymentSum:number,
                eventKind:string)
                {
                  this.CustomerId=customerId;
                  this.OrderDate=orderDate;
                  this.EventDate=eventDate;
                  this.StatusPayment=statusPayment;
                  this.MorningOrEvening=morningOrEvening;
                  this.QuantityInvited=quantityInvited;
                  this.NumBridalChair=numBridalChair;
                  this.OrderSum=orderSum;
                  this.AdvancePaymentSum=advancePaymentSum;
                  this.EventKind=eventKind;

                }
}
