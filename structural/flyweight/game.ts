import { MoveableObject } from './moveable-object';
import { StaticObject } from './static-object';

export class Game {
  constructor(private staticObjects: Array<StaticObject>, private movableObjects: Array<MoveableObject>) {}

  play(): void {
    this.staticObjects.forEach((object) => console.log(object));
    this.movableObjects.forEach((object) => {
      console.log(object);
      object.move();
      object.jump();
      console.log(object);
    });
  }
};
