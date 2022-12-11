import { AuthenticatedWebPage } from './authenticated-web-page';
import { AuthorizedWebPage } from './authorized-web-page';
import { BasicWebPage } from './basic-web-page';

const basicPage = new BasicWebPage();
const authenticatedPage = new AuthenticatedWebPage(basicPage);
const page = new AuthorizedWebPage(authenticatedPage);
page.display();
