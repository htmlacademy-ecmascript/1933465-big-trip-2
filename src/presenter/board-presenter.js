import TripEventsListView from '../view/trip-events-list-view/trip-events-list-view.js';
import SortView from '../view/sort-view/sort-view.js';
// import EditFormView from '../view/edit-form-view/edit-form-view.js';
import AddFormView from '../view/add-form-view/add-form-view.js';
import { render } from '../framework/render.js';
import EventPresenter from './event-presenter.js';
import { BLANK_DESTINATION, BLANK_POINT, TYPES } from '../utils/constants.js';

export default class BoardPresenter {
  #boardContainer = null;
  #boardComponent = null;

  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;

  #points = [];
  #blankPoint = null;
  #blankDestination = null;
  #types = [];
  #destinations = [];

  constructor({ boardContainer, pointsModel, offersModel, destinationsModel }) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }

  init() {
    this.#boardComponent = new TripEventsListView();
    this.#points = [...this.#pointsModel.points];
    this.#blankPoint = BLANK_POINT;
    this.#blankDestination = BLANK_DESTINATION;
    this.#types = TYPES;
    this.#destinations = this.#destinationsModel.destinations;
    this.#render();
  }

  // #renderEditForm(point, container) {
  //   const destination = this.#destinationsModel.getDestinationById(point.destination);
  //   const offers = point.offers.map((offer) => this.#offersModel.getOfferByTypeAndId(point.type, offer));
  //   const allOffers = this.#offersModel.getOffersByType(point.type);
  //   render(new EditFormView(
  //     {
  //       point: point,
  //       destination: destination,
  //       offers: offers,
  //       types: this.#types,
  //       allOffers: allOffers,
  //       destinations: this.#destinations
  //     }), container);
  // }

  #renderAddForm(container) {
    const offers = [];
    const allOffers = this.#offersModel.getOffersByType(this.#blankPoint.type);
    render(new AddFormView(
      {
        point: this.#blankPoint,
        destination: this.#blankDestination,
        offers: offers,
        types: this.#types,
        allOffers: allOffers,
        destinations: this.#destinations
      }), container);
  }

  #render() {
    render(new SortView(), this.#boardContainer);
    render(this.#boardComponent, this.#boardContainer);
    // this.#renderEditForm(this.#points[0], this.#boardComponent.element);
    for (let i = 0; i < this.#points.length; i++) {
      const eventPresenter = new EventPresenter({
        eventContainer: this.#boardComponent.element,
        point: this.#points[i],
        pointsModel: this.#pointsModel,
        offersModel: this.#offersModel,
        destinationsModel: this.#destinationsModel
      });
      eventPresenter.init();
    }
    this.#renderAddForm(this.#boardComponent.element);
  }
}
