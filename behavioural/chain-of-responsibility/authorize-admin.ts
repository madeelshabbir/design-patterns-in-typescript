import { Middleware } from './middlewear';

export class AuthenticateAdmin extends Middleware {
  execute() {
    console.log('Authenticate Admin');
    this.next();
  }
}
