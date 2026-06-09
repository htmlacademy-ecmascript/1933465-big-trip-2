import TripEventsListView from './trip-events-list-view.js';
import EditPointView from './edit-point-view.js';
import EventView from './event-view.js';
import AddNewPointView from './add-new-point-view.js'

import { render } from '../render.js';

export default class EventsPresenter {
  eventsListComponent = new TripEventsListView();

  constructor({ eventsContainer }) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(this.eventsListComponent, this.eventsContainer);
    render(new EditPointView(), this.eventsListComponent.getElement());
    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.eventsListComponent.getElement());
    }
    render(new AddNewPointView(), this.eventsListComponent.getElement());
  }
}
