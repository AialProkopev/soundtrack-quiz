import Component from '../templates/component';
import githubIcon from '../assets/images/github.png';

const GITHUB_URL = 'https://github.com/AialProkopev';

class GithubLink extends Component {
  icon;
  constructor(tagName, className) {
    super(tagName, className);
    this.icon = this.createImage();
    this.container.append(this.icon);
  }
  createImage() {
    const img = new Image();
    img.src = githubIcon;
    img.className = 'github-icon';
    img.addEventListener('click', () => {
      window.open(GITHUB_URL, '__blank');
    });
    return img;
  }
  render() {
    return this.container;
  }
}

export default GithubLink;
