import EventView from '../view/event-view/event-view.js';
import EditFormView from '../view/edit-form-view/edit-form-view.js';
import { render, replace } from '../framework/render.js';
import { TYPES } from '../utils/constants.js';

export default class EventPresenter {

  #eventView = null;
  #editFormView = null;
  #eventContainer = null;
  #eventComponent = null;
  #offersModel = null;
  #destinationsModel = null;

  #point = null;
  #offers = [];
  #destination = null;
  #allOffers = [];
  #types = [];
  #destinations = [];

  constructor({ eventContainer, point, offersModel, destinationsModel }) {
    this.#eventContainer = eventContainer;
    this.#point = point;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
    this.#destination = this.#destinationsModel.getDestinationById(this.#point.destination);
    this.#offers = this.#point.offers.map((offer) => this.#offersModel.getOfferByTypeAndId(this.#point.type, offer));
    this.#allOffers = this.#offersModel.getOffersByType(this.#point.type);
    this.#destinations = this.#destinationsModel.destinations;
  }

  init() {
    this.#eventView = new EventView(
      {
        point: this.#point,
        destination: this.#destination,
        offers: this.#offers,
        onRollupClick: this.#eventRollupClickHandler
      }
    );
    this.#editFormView = new EditFormView(
      {
        point: this.#point,
        destination: this.#destination,
        offers: this.#offers,
        types: TYPES,
        allOffers: this.#allOffers,
        destinations: this.#destinations,
        onFormSubmit: this.#formSubmitHandler,
        onRollupClick: this.#editRollupClickHandler
      });
    this.#render();
  }

  #eventRollupClickHandler = () => {
    replace(this.#editFormView, this.#eventView);
    window.addEventListener('keydown', this.#escapeKeydownHandler);
  };

  #editRollupClickHandler = () => {
    this.#closeForm();
  };

  #closeForm = () => {
    replace(this.#eventView, this.#editFormView);
    window.removeEventListener('keydown', this.#escapeKeydownHandler);
  };

  #escapeKeydownHandler = (evt) => {
    if (evt.key === 'Escape') {
      this.#closeForm();
    }
  };

  #formSubmitHandler = () => {
    this.#closeForm();
  };

  #render() {
    render(this.#eventView, this.#eventContainer);
  }
}

