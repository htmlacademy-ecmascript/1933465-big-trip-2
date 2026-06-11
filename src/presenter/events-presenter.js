import TripEventsListView from '../view/trip-events-list-view.js';
import EditPointView from '../view/edit-point-view.js';
import EventView from '../view/event-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import SortView from '../view/sort-view.js';
import { render } from '../render.js';

const TRIP_POINTS_COUNT = 3;

export default class EventsPresenter {
  eventsListComponent = new TripEventsListView();

  constructor({ eventsContainer }) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(new SortView(), this.eventsContainer);
    render(this.eventsListComponent, this.eventsContainer);
    render(new EditPointView(), this.eventsListComponent.getElement());
    for (let i = 0; i < TRIP_POINTS_COUNT; i++) {
      render(new EventView(), this.eventsListComponent.getElement());
    }
    render(new AddNewPointView(), this.eventsListComponent.getElement());
  }
}
