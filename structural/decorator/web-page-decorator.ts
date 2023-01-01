import { IWebPage } from './i-web-page';

export class WebPageDecorator implements IWebPage {
  constructor(private page: IWebPage) {}

  display(): void {
    this.page.display();
  }
};
