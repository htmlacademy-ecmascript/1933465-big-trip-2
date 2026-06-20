import { createEditFormTemplate } from './edit-form-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class EditFormView extends AbstractView {

  constructor({ point, destination, offers, types, allOffers, destinations }) {
    super();
    this.point = point;
    this.destination = destination;
    this.offers = offers;
    this.types = types;
    this.allOffers = allOffers;
    this.destinations = destinations;
  }

  get template() {
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
}
