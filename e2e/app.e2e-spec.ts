import { NguniversalPage } from './app.po';

describe('nguniversal App', function() {
  let page: NguniversalPage;

  beforeEach(() => {
    page = new NguniversalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
