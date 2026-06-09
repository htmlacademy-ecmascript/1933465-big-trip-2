import { render } from './render.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import EventsPresenter from './view/events-presenter.js';

const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');

render(new FilterView(), siteFiltersElement);
render(new SortView(), siteEventsElement);

const eventsPresenter = new EventsPresenter({
  eventsContainer: siteEventsElement,
});
eventsPresenter.init();

