import { render } from './render.js';
import FilterView from './view/filter-view/filter-view.js';
import EventsPresenter from './presenter/events-presenter.js';
import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';

const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');

render(new FilterView(), siteFiltersElement);

const eventsPresenter = new EventsPresenter({
  eventsContainer: siteEventsElement,
  pointsModel: new PointsModel(),
  offersModel: new OffersModel(),
  destinationsModel: new DestinationsModel()
});
eventsPresenter.init();

