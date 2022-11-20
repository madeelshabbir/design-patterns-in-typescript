import { CarDirector } from './car-director';

let carDirector = new CarDirector();
console.log(carDirector.createDefaultCar('red'));
console.log(carDirector.createCarWIthGPS('black', 'rk-2134'));
console.log(carDirector.createHighestMileageCar('gray'));
