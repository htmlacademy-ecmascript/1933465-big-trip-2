import { getDestinations } from '../mock/destinations';

export default class DestinationsModel {
  destinations = getDestinations();

  blankDestination = {
    id: '',
    description: '',
    name: '',
    pictures: []
  };

  getDestinations() {
    return this.destinations;
  }

  getDestinationById(id) {
    return this.destinations.find((destination) => destination.id === id);
  }

  getBlankDestination() {
    return this.blankDestination;
  }
}
