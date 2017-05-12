import { MyCV0Page } from './app.po';

describe('my-c-v0 App', () => {
  let page: MyCV0Page;

  beforeEach(() => {
    page = new MyCV0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
