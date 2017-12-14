import { TwitterFrontDataVizPage } from './app.po';

describe('twitter-front-data-viz App', () => {
  let page: TwitterFrontDataVizPage;

  beforeEach(() => {
    page = new TwitterFrontDataVizPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
