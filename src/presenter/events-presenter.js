import TripEventsListView from '../view/trip-events-list-view/trip-events-list-view.js';
import EventView from '../view/event-view/event-view.js';
import SortView from '../view/sort-view/sort-view.js';
import { render } from '../render.js';
import FormView from '../view/form-view/form-view.js';

export default class EventsPresenter {
  eventsListComponent = new TripEventsListView();

  constructor({ eventsContainer, eventsModel, offersModel, destinationsModel }) {
    this.eventsContainer = eventsContainer;
    this.eventsModel = eventsModel;
    this.offersModel = offersModel;
    this.destinationsModel = destinationsModel;
  }

  init() {
    this.events = [...this.eventsModel.getEvents()];
    this.blankEvent = this.eventsModel.getBlankEvent();
    this.types = this.offersModel.getTypes();
    this.destinations = this.destinationsModel.getDestinations();
    this.render();
  }

  render() {
    render(new SortView(), this.eventsContainer);
    render(this.eventsListComponent, this.eventsContainer);
    render(new FormView(
      {
        event: this.events[0],
        types: this.types,
        offers: this.offersModel.getOffersByType(this.events[0].type),
        destinations: this.destinations,
        hasDescriptionBlock: this.events[0].destination.description.length || this.events[0].destination.pictures.length,
        showDescription: this.events[0].destination.description.length,
        isEdit: true
      }),
    this.eventsListComponent.getElement());
    for (let i = 1; i < this.events.length; i++) {
      render(new EventView({ event: this.events[i] }), this.eventsListComponent.getElement());
    }
    render(new FormView(
      {
        event: this.blankEvent,
        types: this.types,
        offers: this.offersModel.getOffersByType(this.blankEvent.type),
        destinations: this.destinations
      }),
    this.eventsListComponent.getElement());
  }
}
