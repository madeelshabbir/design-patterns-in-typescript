import { DigitalPayment } from './digital-payment';

let digitalPayment = new DigitalPayment();
console.log(digitalPayment.initiate('credit-card').pay());
console.log(digitalPayment.initiate('paypal').pay());
console.log(digitalPayment.initiate('web-money').pay());
