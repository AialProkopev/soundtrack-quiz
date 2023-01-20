import Page from '../templates/page';

class GamePage extends Page {
  static textObject = {
    mainTitle: 'Game Page',
  };

  constructor(id) {
    super(id);
  }
  render() {
    this.createHeaderTitle(GamePage.textObject.mainTitle);
    return this.container;
  }
}

export default GamePage;
