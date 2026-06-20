import { createEventTemplate } from './event-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class EventView extends AbstractView {

  constructor({ point, destination, offers }) {
    super();
    this.point = point;
    this.destination = destination;
    this.offers = offers;
  }

  get template() {
    return createEventTemplate(this.point, this.destination, this.offers);
  }
}
