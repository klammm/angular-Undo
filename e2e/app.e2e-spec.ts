import { AngularUndoPage } from './app.po';

describe('angular-undo App', () => {
  let page: AngularUndoPage;

  beforeEach(() => {
    page = new AngularUndoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
