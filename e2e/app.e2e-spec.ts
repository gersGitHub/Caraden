import { Reuble17Page } from './app.po';

describe('reuble17 App', function() {
  let page: Reuble17Page;

  beforeEach(() => {
    page = new Reuble17Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
