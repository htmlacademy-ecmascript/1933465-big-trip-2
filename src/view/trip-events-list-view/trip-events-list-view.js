import { createElement } from '../../render.js';
import { createTripEventsListTemplate } from './trip-events-list-template.js';

export default class TripEventsListView {
  getTemplate() {
    return createTripEventsListTemplate();
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
