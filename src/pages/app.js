import Header from '../components/header';
// import GamePage from './game';
import MainPage from './main';
// import ResultsPage from './results';
import Footer from '../components/footer';

class App {
  container;
  wrapper;
  initialPage;
  header;
  content;
  footer;

  constructor() {
    this.container = document.querySelector('body');
    this.wrapper = this.createWrapper();
    this.initialPage = new MainPage('main-page');
    this.header = new Header('header', 'header');
    this.content = this.createMainContainer();
    this.footer = new Footer('footer', 'footer');
  }
  createMainContainer() {
    const main = document.createElement('main');
    main.className = 'main';
    return main;
  }
  createWrapper() {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    return wrapper;
  }
  run() {
    this.wrapper.append(this.header.render());
    this.content.append(this.initialPage.render());
    this.wrapper.append(this.content);
    this.wrapper.append(this.footer.render());
    this.container.append(this.wrapper);
  }
}

export default App;
