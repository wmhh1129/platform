import { PlatformPage } from './app.po';

describe('platform App', () => {
  let page: PlatformPage;

  beforeEach(() => {
    page = new PlatformPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
