import { ChicilonFrontendPage } from './app.po';

describe('chicilon-frontend App', () => {
  let page: ChicilonFrontendPage;

  beforeEach(() => {
    page = new ChicilonFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
