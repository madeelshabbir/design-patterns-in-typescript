export abstract class Middleware {
  constructor(private nextMiddleware?: Middleware) {}

  next() {
    this.nextMiddleware && this.nextMiddleware.execute();
  }

  abstract execute(): void;
}
