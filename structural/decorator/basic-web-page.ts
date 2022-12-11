import { IWebPage } from './i-web-page';

export class BasicWebPage implements IWebPage {
  protected html: string;
  protected styleSheet: string;
  protected script: string;

  constructor() {
    this.html = '<h1>Hello World!</h1>';
    this.styleSheet = 'background-color: red';
    this.script = 'console.log("Basic Page")';
  }

  display(): void {
    console.log(this.html);
    console.log(this.styleSheet);
    console.log(this.script);
  }
};
