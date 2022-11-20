import { Car } from './car';
import { CarBuilder } from './car-builder';

export class ManualCarBuilder implements CarBuilder {
  private car: Car;

  buildPrototype(): void {
    this.car = new Car();
  }

  buildBody(color: string, style: string): void {
    this.car.setBody(color, style);
  }

  buildSeats(material: string, count: number): void {
    this.car.setSeats(material, count);
  }

  buildEngine(mileage: number, type: string): void {
    this.car.setEngine(mileage, type);
  }

  buildTires(count: number, size: number): void {
    this.car.setTires(count, size);
  }

  addGps() {
    this.car.setGps();
  }

  getCar(): Car {
    return this.car;
  }
};
