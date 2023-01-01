import { Point } from './point';
import { StaticObject } from './static-object';

export class MoveableObject {
  constructor(public staticObject: StaticObject, public position : Point) {}

  move(): void {
    this.position.x += 1;
  }

  async jump(): Promise<void> {
    this.position.y += 5;
    console.log(this);
    this.position.y -= 5;
  }
};
