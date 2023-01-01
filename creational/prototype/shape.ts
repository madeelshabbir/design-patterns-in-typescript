export abstract class Shape {
  constructor(protected color: string) {}

  abstract clone(): Shape;
};
