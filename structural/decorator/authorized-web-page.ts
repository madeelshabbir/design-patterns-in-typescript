import { WebPageDecorator } from './web-page-decorator';

export class AuthorizedWebPage extends WebPageDecorator  {
  display() {
    this.useAuthorization();
    super.display();
  }

  useAuthorization(): void {
    console.log('Authorization enabled!');
  }
};
