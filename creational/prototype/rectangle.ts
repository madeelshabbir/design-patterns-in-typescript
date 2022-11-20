import { Shape } from './shape';

export class Rectangle extends Shape {
  constructor(color: string, private width: number, private height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }

  clone(): Shape {
    return new Rectangle(this.color, this.width, this.height);
  }
};
