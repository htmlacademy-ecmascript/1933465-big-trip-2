import { createNoEventsTemplate } from './no-events-template.js';
import AbstractView from '../../framework/view/abstract-view.js';
import { Messages } from '../../utils/constants.js';

export default class NoEventsView extends AbstractView {
  #state = null;
  #message = null;

  constructor(state) {
    super();
    this.#state = state;
    this.#message = Messages[this.#state];
  }

  get template() {
    return createNoEventsTemplate(this.#message);
  }
}
