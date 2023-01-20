import Component from '../templates/component';

class Logo extends Component {
  constructor(tagName, className) {
    super(tagName, className);
    this.container.innerText = 'SoundtrackQuiz';
  }
  render() {
    return this.container;
  }
}

export default Logo;
