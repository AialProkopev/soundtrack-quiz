import Page from '../templates/page';

class MainPage extends Page {
  static textObject = {
    mainTitle: 'Main Page',
  };

  constructor(id) {
    super(id);
  }
  render() {
    this.createHeaderTitle(MainPage.textObject.mainTitle);
    return this.container;
  }
}

export default MainPage;
