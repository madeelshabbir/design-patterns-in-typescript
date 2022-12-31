import { AuthenticateUser } from './authenticate-user';
import { AuthenticateAdmin } from './authorize-admin';

new AuthenticateUser(
  new AuthenticateAdmin()
).execute()
