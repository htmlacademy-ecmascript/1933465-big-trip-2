function createFilterItemTemplate({ type, count }, isChecked) {
  return `<div class="trip-filters__filter">
                  <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter"
                   value="${type}"
                  ${isChecked ? 'checked' : ''}
                  ${count === 0 ? 'disabled' : ''}>
                  <label class="trip-filters__filter-label" for="filter-${type}">${type[0].toUpperCase() + type.slice(1)}</label>
                </div>`;
}

export function createFilterTemplate(filterItems) {
  return `<form class="trip-filters" action="#" method="get">
            ${filterItems.map((filterItem, index) => createFilterItemTemplate(filterItem, index === 0)).join('')}
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;
}
