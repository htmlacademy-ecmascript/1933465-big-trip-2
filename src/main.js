import { render } from './framework/render.js';
import FilterView from './view/filter-view/filter-view.js';
import EventsPresenter from './presenter/events-presenter.js';
import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';

const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');

render(new FilterView(), siteFiltersElement);
const pointsModel = new PointsModel();
pointsModel.init();
const offersModel = new OffersModel();
offersModel.init();
const destinationsModel = new DestinationsModel();
destinationsModel.init();
const eventsPresenter = new EventsPresenter({
  eventsContainer: siteEventsElement,
  pointsModel: pointsModel,
  offersModel: offersModel,
  destinationsModel: destinationsModel
});
eventsPresenter.init();

