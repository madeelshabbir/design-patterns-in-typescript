export abstract class Product {
  constructor(protected title: string, protected price: number, protected platform: string) {
    this.title = title;
    this.price = price;
    this.platform = platform;
  }
};
