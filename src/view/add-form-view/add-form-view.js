import { createAddFormTemplate } from './add-form-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class AddFormView extends AbstractView {
  #point = null;
  #destination = null;
  #offers = null;
  #types = [];
  #allOffers = [];
  #destinations = [];

  constructor({ point, destination, offers, types, allOffers, destinations }) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#offers = offers;
    this.#types = types;
    this.#allOffers = allOffers;
    this.#destinations = destinations;
  }

  get template() {
    return createAddFormTemplate(
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
