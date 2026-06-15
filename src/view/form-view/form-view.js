import { createElement } from '../../render.js';
import { createFormTemplate } from './form-template.js';

export default class FormView {

  constructor({ event, types, offers, destinations, hasDescriptionBlock = false, showDescription = false, isEdit = false }) {
    this.event = event;
    this.isEdit = isEdit;
    this.types = types;
    this.offers = offers;
    this.destinations = destinations;
    this.showDescription = showDescription;
    this.hasDescriptionBlock = hasDescriptionBlock;
  }

  getTemplate() {
    return createFormTemplate(
      {
        event: this.event,
        offers: this.offers,
        types: this.types,
        destinations: this.destinations
      },
      this.hasDescriptionBlock,
      this.showDescription,
      this.isEdit);
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

