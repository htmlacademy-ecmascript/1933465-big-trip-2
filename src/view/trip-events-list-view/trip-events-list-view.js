import { createTripEventsListTemplate } from './trip-events-list-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class TripEventsListView extends AbstractView {
  get template() {
    return createTripEventsListTemplate();
  }
}
