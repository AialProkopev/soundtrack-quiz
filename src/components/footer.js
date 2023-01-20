import Component from '../templates/component';
import GithubLink from './github-link';
import SchoolLink from './school-link';

class Footer extends Component {
  rsschool;
  github;
  year;

  constructor(tagName, className) {
    super(tagName, className);
    this.github = new GithubLink('div', 'footer__github');
    this.rsschool = new SchoolLink('div', 'footer__school');
    this.container.append(this.github.render());
    this.container.append(this.createYearContainer());
    this.container.append(this.rsschool.render());
  }
  createYearContainer() {
    const div = document.createElement('div');
    div.className = 'footer__year';
    const year = document.createElement('p');
    year.className = 'year';
    year.innerText = '2023';
    div.append(year);
    return div;
  }
  render() {
    return this.container;
  }
}

export default Footer;
