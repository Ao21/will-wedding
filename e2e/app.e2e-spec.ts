import { WillPage } from './app.po';

describe('will App', function() {
  let page: WillPage;

  beforeEach(() => {
    page = new WillPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
