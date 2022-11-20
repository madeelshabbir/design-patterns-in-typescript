import { Car } from './car';

export interface CarBuilder {
  buildPrototype(): void;
  buildBody(color: string, style: string): void;
  buildSeats(material: string, count: number): void;
  buildEngine(mileage: number, type: string): void;
  buildTires(count: number, size: number): void;
  addGps(): void;
  getCar(): Car;
};
