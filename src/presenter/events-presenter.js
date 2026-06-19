import TripEventsListView from '../view/trip-events-list-view/trip-events-list-view.js';
import SortView from '../view/sort-view/sort-view.js';
import editFormView from '../view/edit-form-view/edit-form-view.js';
import { render } from '../render.js';
import EventPresenter from './event-presenter.js';

export default class EventsPresenter {
  eventsListComponent = new TripEventsListView();

  constructor({ eventsContainer, pointsModel, offersModel, destinationsModel }) {
    this.eventsContainer = eventsContainer;
    this.pointsModel = pointsModel;
    this.offersModel = offersModel;
    this.destinationsModel = destinationsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    this.blankPoint = this.pointsModel.getBlankPoint();
    this.types = this.offersModel.getTypes();
    this.destinations = this.destinationsModel.getDestinations();
    this.render();
  }

  renderEditForm(point, container) {
    const destination = this.destinationsModel.getDestinationById(point.destination);
    const offers = point.offers.map((offer) => this.offersModel.getOfferByTypeAndId(point.type, offer));
    const allOffers = this.offersModel.getOffersByType(point.type);
    render(new editFormView(
      {
        point: point,
        destination: destination,
        offers: offers,
        types: this.types,
        allOffers: allOffers,
        destinations: this.destinations
      }), container);
  }

  renderAddForm(point, container) {
    const destination = this.destinationsModel.getBlankDestination();
    const offers = [];
    const allOffers = this.offersModel.getOffersByType(point.type);
    render(new editFormView(
      {
        point: point,
        destination: destination,
        offers: offers,
        types: this.types,
        allOffers: allOffers,
        destinations: this.destinations
      }), container);
  }

  render() {
    render(new SortView(), this.eventsContainer);
    render(this.eventsListComponent, this.eventsContainer);
    this.renderEditForm(this.points[0], this.eventsListComponent.getElement());
    for (let i = 1; i < this.points.length; i++) {
      const eventPresenter = new EventPresenter({
        eventContainer: this.eventsListComponent.getElement(),
        point: this.points[i],
        pointsModel: this.pointsModel,
        offersModel: this.offersModel,
        destinationsModel: this.destinationsModel
      });
      eventPresenter.init();
    }
    this.renderAddForm(this.blankPoint, this.eventsListComponent.getElement());
  }
}
