export abstract class Shape {
  constructor(protected color: string) {
    this.color = color;
  }

  abstract clone(): Shape;
};
