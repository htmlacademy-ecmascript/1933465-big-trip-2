import { getDestinations } from '../mock/destinations';

export default class DestinationsModel {
  #destinations = [];

  init() {
    this.destinations = getDestinations();
  }

  get destinations() {
    return this.#destinations;
  }

  set destinations(destinations) {
    this.#destinations = destinations;
  }

  getDestinationById(id) {
    return this.destinations.find((destination) => destination.id === id);
  }
}
