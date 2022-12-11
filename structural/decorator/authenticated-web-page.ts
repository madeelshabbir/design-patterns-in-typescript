import { WebPageDecorator } from './web-page-decorator';

export class AuthenticatedWebPage extends WebPageDecorator {
  display() {
    this.useAuthentication();
    super.display();
  }

  useAuthentication(): void {
    console.log('Authentication enabled!');
  }
};
