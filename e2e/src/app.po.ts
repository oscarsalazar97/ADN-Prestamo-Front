import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText (): Promise<string> {
    return element(by.css('app-root app-header h1')).getText() as Promise<string>;
  }
}
