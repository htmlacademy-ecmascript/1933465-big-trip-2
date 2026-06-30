import { createSortTemplate } from './sort-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class SortView extends AbstractView {
  #sort = null;
  #handleSortTypeChange = null;

  constructor({ sort, onSortTypeChange }) {
    super();
    this.#sort = sort;
    this.#handleSortTypeChange = onSortTypeChange;
    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate(this.#sort);
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'INPUT') {
      return;
    }
    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}
