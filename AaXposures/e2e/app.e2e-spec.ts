import { AaXposuresPage } from './app.po';

describe('aa-xposures App', () => {
  let page: AaXposuresPage;

  beforeEach(() => {
    page = new AaXposuresPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
