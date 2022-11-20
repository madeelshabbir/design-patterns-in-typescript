import { Circle } from './circle';
import { Rectangle } from './rectangle';

let rectangle = new Rectangle('orange', 10, 5);
let newRectangle = rectangle.clone();
console.log(rectangle);
console.log(newRectangle.clone());
console.log(rectangle === newRectangle);

let circle = new Circle('orange', 10);
let newCircle = circle.clone();
console.log(circle);
console.log(newCircle.clone());
console.log(circle === newCircle);
