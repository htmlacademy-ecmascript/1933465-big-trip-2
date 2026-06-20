import TripEventsListView from '../view/trip-events-list-view/trip-events-list-view.js';
import SortView from '../view/sort-view/sort-view.js';
import EditFormView from '../view/edit-form-view/edit-form-view.js';
import AddFormView from '../view/add-form-view/add-form-view.js';
import { render } from '../framework/render.js';
import EventPresenter from './event-presenter.js';
import { BLANK_DESTINATION, BLANK_POINT, TYPES } from '../utils/constants.js';

export default class EventsPresenter {
  eventsListComponent = new TripEventsListView();

  constructor({ eventsContainer, pointsModel, offersModel, destinationsModel }) {
    this.eventsContainer = eventsContainer;
    this.pointsModel = pointsModel;
    this.offersModel = offersModel;
    this.destinationsModel = destinationsModel;
  }

  init() {
    this.points = [...this.pointsModel.points];
    this.blankPoint = BLANK_POINT;
    this.blankDestination = BLANK_DESTINATION;
    this.types = TYPES;
    this.destinations = this.destinationsModel.destinations;
    this.render();
  }

  renderEditForm(point, container) {
    const destination = this.destinationsModel.getDestinationById(point.destination);
    const offers = point.offers.map((offer) => this.offersModel.getOfferByTypeAndId(point.type, offer));
    const allOffers = this.offersModel.getOffersByType(point.type);
    render(new EditFormView(
      {
        point: point,
        destination: destination,
        offers: offers,
        types: this.types,
        allOffers: allOffers,
        destinations: this.destinations
      }), container);
  }

  renderAddForm(container) {
    const offers = [];
    const allOffers = this.offersModel.getOffersByType(this.blankPoint.type);
    render(new AddFormView(
      {
        point: this.blankPoint,
        destination: this.blankDestination,
        offers: offers,
        types: this.types,
        allOffers: allOffers,
        destinations: this.destinations
      }), container);
  }

  render() {
    render(new SortView(), this.eventsContainer);
    render(this.eventsListComponent, this.eventsContainer);
    this.renderEditForm(this.points[0], this.eventsListComponent.element);
    for (let i = 1; i < this.points.length; i++) {
      const eventPresenter = new EventPresenter({
        eventContainer: this.eventsListComponent.element,
        point: this.points[i],
        pointsModel: this.pointsModel,
        offersModel: this.offersModel,
        destinationsModel: this.destinationsModel
      });
      eventPresenter.init();
    }
    this.renderAddForm(this.eventsListComponent.element);
  }
}
