import {getDestinations} from '../mock/destinations';

export default class OffersModel {
  destinations = getDestinations();

  getDestinations() {
    return this.destinations;
  }
}
