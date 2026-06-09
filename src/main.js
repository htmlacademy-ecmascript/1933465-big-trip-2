import { render } from './render.js';
import FilterView from './view/filter-view.js';

const siteFiltersElement = document.querySelector('.trip-controls__filters');

render(new FilterView(), siteFiltersElement);
