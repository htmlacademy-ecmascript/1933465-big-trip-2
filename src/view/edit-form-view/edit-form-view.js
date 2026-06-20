import { createEditFormTemplate } from './edit-form-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class EditFormView extends AbstractView {
  #point = null;
  #destination = null;
  #offers = null;
  #types = [];
  #allOffers = [];
  #destinations = [];
  #onFormSubmit = null;
  #onRollupClick = null;

  constructor({ point, destination, offers, types, allOffers, destinations, onFormSubmit, onRollupClick }) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#offers = offers;
    this.#types = types;
    this.#allOffers = allOffers;
    this.#destinations = destinations;
    this.#onFormSubmit = onFormSubmit;
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.#onFormSubmit();
    });
    this.#onRollupClick = onRollupClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#onRollupClick);
  }

  get template() {
    return createEditFormTemplate(
      {
        point: this.#point,
        destination: this.#destination,
        offers: this.#offers,
        types: this.#types,
        allOffers: this.#allOffers,
        destinations: this.#destinations
      });
  }
}
