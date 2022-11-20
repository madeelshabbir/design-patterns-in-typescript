import { Car } from './car';
import { CarBuilder } from './car-builder';
import { ManualCarBuilder } from './manual-car-builder';

export class CarDirector {
  private carBuilder: CarBuilder;

  constructor() {
    this.carBuilder = new ManualCarBuilder();
  }

  createDefaultCar(color: string): Car {
    this.carBuilder.buildPrototype();
    this.carBuilder.buildBody(color, 'default');
    this.carBuilder.buildSeats('leather', 4);
    this.carBuilder.buildEngine(10, 'normal');
    this.carBuilder.buildTires(4, 3.5);
    return this.carBuilder.getCar();
  }

  createCarWIthGPS(color: string, model: string): Car {
    this.carBuilder.buildPrototype();
    this.carBuilder.buildBody(color, 'default');
    this.carBuilder.buildSeats('leather', 4);
    this.carBuilder.buildEngine(10, 'normal');
    this.carBuilder.buildTires(4, 3.5);
    this.carBuilder.addGps();
    return this.carBuilder.getCar();
  }

  createHighestMileageCar(color: string): Car {
    this.carBuilder.buildPrototype();
    this.carBuilder.buildBody(color, 'premium');
    this.carBuilder.buildSeats('leather', 4);
    this.carBuilder.buildEngine(30, 'high');
    this.carBuilder.buildTires(4, 3.5);
    return this.carBuilder.getCar();
  }
};
