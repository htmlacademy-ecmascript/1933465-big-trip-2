import { createElement } from '../../render.js';
import { createAddNewPointTemplate } from './add-new-point-template.js';

export default class EditPointView {
  getTemplate() {
    return createAddNewPointTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
