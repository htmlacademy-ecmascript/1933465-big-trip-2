import { createEventTemplate } from './event-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class EventView extends AbstractView {
  #point = null;
  #destination = null;
  #offers = null;
  #onRollupClick = null;

  constructor({ point, destination, offers, onRollupClick }) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#offers = offers;
    this.#onRollupClick = onRollupClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#onRollupClick);
  }

  get template() {
    return createEventTemplate(this.#point, this.#destination, this.#offers);
  }
}
