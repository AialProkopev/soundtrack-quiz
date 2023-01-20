import Component from '../templates/component';
import rsschoolSvg from '../assets/svg/school-svg.svg';

const RSSCHOOL_URL = 'https://rs.school/js/';

class SchoolLink extends Component {
  icon;
  constructor(tagName, className) {
    super(tagName, className);
    this.icon = this.createImage();
    this.container.append(this.icon);
  }
  createImage() {
    const img = new Image();
    img.src = rsschoolSvg;
    img.className = 'school-icon';
    img.addEventListener('click', () => {
      window.open(RSSCHOOL_URL, '__blank');
    });
    return img;
  }
  render() {
    return this.container;
  }
}

export default SchoolLink;
