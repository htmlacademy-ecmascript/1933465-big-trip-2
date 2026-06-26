import { createNoEventsTemplate } from './no-events-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class NoEventsView extends AbstractView {
  #message = null;

  constructor(message) {
    super();
    this.#message = message;
  }

  get template() {
    return createNoEventsTemplate(this.#message);
  }
}
