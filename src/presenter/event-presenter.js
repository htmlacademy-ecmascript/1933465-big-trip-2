import EventView from '../view/event-view/event-view.js';
import EditFormView from '../view/edit-form-view/edit-form-view.js';
import { render, replace } from '../framework/render.js';
import { TYPES } from '../utils/constants.js';
import TripEventsItemView from '../view/trip-events-item-view/trip-events-item-view.js';

export default class EventPresenter {

  #eventView = null;
  #editFormView = null;
  #eventContainer = null;
  #eventComponent = null;
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;

  #point = null;
  #offers = [];
  #destination = null;
  #allOffers = [];
  #types = [];
  #destinations = [];

  constructor({ eventContainer, point, pointsModel, offersModel, destinationsModel }) {
    this.#eventContainer = eventContainer;
    this.#point = point;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
    this.#destination = this.#destinationsModel.getDestinationById(this.#point.destination);
    this.#offers = this.#point.offers.map((offer) => this.#offersModel.getOfferByTypeAndId(this.#point.type, offer));
    this.#allOffers = this.#offersModel.getOffersByType(this.#point.type);
    this.#types = TYPES;
    this.#destinations = this.#destinationsModel.destinations;
  }

  init() {
    this.#eventComponent = new TripEventsItemView();
    this.#eventView = new EventView(
      {
        point: this.#point,
        destination: this.#destination,
        offers: this.#offers,
        onRollupClick: this.#onEventRollupClick
      }
    );
    this.#editFormView = new EditFormView(
      {
        point: this.#point,
        destination: this.#destination,
        offers: this.#offers,
        types: this.#types,
        allOffers: this.#allOffers,
        destinations: this.#destinations,
        onFormSubmit: this.#onFormSubmit,
        onRollupClick: this.#onEditRollupClick
      });
    this.#render();
  }

  #onEventRollupClick = () => {
    replace(this.#editFormView, this.#eventView);
    window.addEventListener('keydown', this.#onEscapeKeydown);
  };

  #onEditRollupClick = () => {
    this.#onFormClose();
  };

  #onFormClose = () => {
    replace(this.#eventView, this.#editFormView);
    window.removeEventListener('keydown', this.#onEscapeKeydown);
  };

  #onEscapeKeydown = (evt) => {
    if (evt.key === 'Escape') {
      this.#onFormClose();
    }
  };


  #onFormSubmit = () => {
    this.#onFormClose();
  };

  #render() {
    render(this.#eventComponent, this.#eventContainer);
    render(this.#eventView, this.#eventComponent.element);
  }
}

