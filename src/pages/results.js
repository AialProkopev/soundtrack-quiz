import Page from '../templates/page';

class ResultsPage extends Page {
  static textObject = {
    mainTitle: 'Results Page',
  };

  constructor(id) {
    super(id);
  }
  render() {
    this.createHeaderTitle(ResultsPage.textObject.mainTitle);
    return this.container;
  }
}

export default ResultsPage;
