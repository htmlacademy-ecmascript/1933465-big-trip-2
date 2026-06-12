import { render } from './render.js';
import FilterView from './view/filter-view/filter-view.js';
import EventsPresenter from './presenter/events-presenter.js';

const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');

render(new FilterView(), siteFiltersElement);

const eventsPresenter = new EventsPresenter({
  eventsContainer: siteEventsElement,
});
eventsPresenter.init();

