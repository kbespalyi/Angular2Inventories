import { InventoriesPage } from './app.po';

describe('inventories App', function() {
  let page: InventoriesPage;

  beforeEach(() => {
    page = new InventoriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
