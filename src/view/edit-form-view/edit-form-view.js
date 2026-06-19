import { createElement } from '../../render.js';
import { createEditFormTemplate } from './edit-form-template.js';

export default class EditFormView {

  constructor({ point, destination, offers, types, allOffers, destinations }) {
    this.point = point;
    this.destination = destination;
    this.offers = offers;
    this.types = types;
    this.allOffers = allOffers;
    this.destinations = destinations;
  }

  getTemplate() {
    return createEditFormTemplate(
      {
        point: this.point,
        destination: this.destination,
        offers: this.offers,
        types: this.types,
        allOffers: this.allOffers,
        destinations: this.destinations
      });
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
