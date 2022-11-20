import { BigCommerce } from './big-commerce';
import { Salesforce } from './salesforce';
import { Shopify } from './shopify';

let shopify = new Shopify();
let salesforce = new Salesforce();
let bigCommerce = new BigCommerce();
console.log(shopify.createProduct('appliance', 'Refrigerator', 100));
console.log(shopify.createCharge('usage-charge', 100));
console.log(salesforce.createCharge('recurring-charge', 10));
console.log(salesforce.createProduct('appliance', 'AC', 200));
console.log(bigCommerce.createCharge('usage-charge', 200));
console.log(bigCommerce.createProduct('gadget', 'Mobile', 150));
