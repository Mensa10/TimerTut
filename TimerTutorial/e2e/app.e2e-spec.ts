import { TimerTutorialPage } from './app.po';

describe('timer-tutorial App', () => {
  let page: TimerTutorialPage;

  beforeEach(() => {
    page = new TimerTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
