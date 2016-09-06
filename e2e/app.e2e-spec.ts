import { AngularAdtCentralPage } from './app.po';

describe('angular-adt-central App', function() {
  let page: AngularAdtCentralPage;

  beforeEach(() => {
    page = new AngularAdtCentralPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
