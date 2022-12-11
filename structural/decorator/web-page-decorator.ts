import { IWebPage } from './i-web-page';

export class WebPageDecorator implements IWebPage {
  private page: IWebPage;

  constructor(page: IWebPage) {
    this.page = page;
  }

  display(): void {
    this.page.display();
  }
};
