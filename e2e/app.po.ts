import { browser, by, element } from 'protractor';

export class Pk2AngularCliFreePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root2 h1')).getText();
  }
}
