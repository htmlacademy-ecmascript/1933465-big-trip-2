import { createTripEventsItemTemplate } from './trip-events-item-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class TripEventsItemView extends AbstractView {
  get template() {
    return createTripEventsItemTemplate();
  }
}
