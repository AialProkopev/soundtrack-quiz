import Component from '../templates/component';
import Logo from './logo';
import Navigation from './navigation';

class Header extends Component {
  nav;
  title;

  constructor(tagName, className) {
    super(tagName, className);
    this.title = new Logo('h1', 'logo');
    this.nav = new Navigation('nav', 'navigation');
    this.container.append(this.title.render());
    this.container.append(this.nav.render());
  }
  render() {
    return this.container;
  }
}

export default Header;
