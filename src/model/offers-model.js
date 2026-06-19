import { getOffers } from '../mock/offers';

export default class OffersModel {
  offers = getOffers();

  getTypes() {
    return this.offers.map((offer) => offer.type);
  }

  getOffersByType(type) {
    return this.offers.find((offer) => offer.type === type).offers;
  }

  getOfferByTypeAndId(type, id) {
    return this.getOffersByType(type).find((offer) => offer.id === id);
  }

  getOffers() {
    return this.offers;
  }
}
