class Page {
  container;

  static TextObject = {};

  constructor(id) {
    this.container = document.createElement('div');
    this.container.id = id;
  }
  createHeaderTitle(text) {
    const headerTitle = document.createElement('h2');
    headerTitle.innerText = text;
    this.container.append(headerTitle);
  }
}

export default Page;
