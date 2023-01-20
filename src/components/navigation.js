import Component from '../templates/component';

class Navigation extends Component {
  menu;
  list;

  constructor(tagName, className) {
    super(tagName, className);
    this.menu = this.createMenu();
    this.list = this.createList();
    this.menu.append(this.list);
    this.container.append(this.menu);
  }
  createMenu() {
    const menu = document.createElement('ul');
    menu.className = 'header__menu menu';
    return menu;
  }
  createList() {
    const fragment = new DocumentFragment();
    for (let i = 1; i <= 3; i += 1) {
      const li = document.createElement('li');
      li.className = 'menu__item';
      const link = document.createElement('a');
      link.classList = 'menu__link';
      link.href = '#';
      link.innerText = 'some link';
      li.append(link);
      fragment.append(li);
    }
    return fragment;
  }
  render() {
    return this.container;
  }
}

export default Navigation;
