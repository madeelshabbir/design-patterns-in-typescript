import { Middleware } from './middlewear';

export class AuthenticateUser extends Middleware {
  execute() {
    console.log('Authenticate User');
    this.next();
  }
}
