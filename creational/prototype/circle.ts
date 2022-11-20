import { Shape } from './shape';

export class Circle extends Shape {
  constructor(color: string, private radius: number) {
    super(color);
    this.radius = radius;
  }

  clone(): Shape {
    return new Circle(this.color, this.radius);
  }
};
