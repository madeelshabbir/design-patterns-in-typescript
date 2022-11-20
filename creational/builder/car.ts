export class Car {
  private color: string;
  private model: string;
  private seatMaterial: string;
  private seatCount: number;
  private mileage: number;
  private engineType: string;
  private tireCount: number;
  private tireSize: number;
  private hasGps: boolean;

  setBody(color: string, model: string): void {
    this.color = color;
    this.model = model;
  }

  setSeats(material: string, count: number): void {
    this.seatMaterial = material;
    this.seatCount = count;
  };

  setEngine(mileage: number, type: string): void {
    this.mileage = mileage;
    this.engineType = type;
  }

  setTires(count: number, size: number): void {
    this.tireCount = count;
    this.tireSize = size;
  }

  setGps(): void {
    this.hasGps = true;
  }
};
