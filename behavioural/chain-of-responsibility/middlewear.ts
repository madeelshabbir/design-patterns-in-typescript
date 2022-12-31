export abstract class Middleware {
  constructor(private nextMiddleware?: Middleware) {
    this.nextMiddleware = nextMiddleware;
  }

  next() {
    this.nextMiddleware && this.nextMiddleware.execute();
  }

  abstract execute(): void;
}
