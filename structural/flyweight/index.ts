import { Game } from './game';
import { MoveableObject } from './moveable-object';
import { Point } from './point';
import { Size } from './size';
import { StaticObject } from './static-object';

const STATIC_OBJECTS = [new StaticObject('blue', new Size(100, 100))];
const MOVEABLE_OBJECTS = [
  new MoveableObject(new StaticObject('green', new Size(20, 30)), new Point(1, 1)),
  new MoveableObject(new StaticObject('red', new Size(20, 20)), new Point(10, 1))
];

(new Game(STATIC_OBJECTS, MOVEABLE_OBJECTS)).play();
