import { createSortTemplate } from './sort-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class SortView extends AbstractView {
  #sort = null;
  constructor(sort) {
    super();
    this.#sort = sort;
  }

  get template() {
    return createSortTemplate(this.#sort);
  }
}
