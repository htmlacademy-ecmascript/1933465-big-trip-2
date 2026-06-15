import {getOffers, getOffersByType} from '../mock/offers';

export default class OffersModel {
  offers = getOffers();

  getTypes() {
    return this.offers.map((offer) => offer.type);
  }

  getOffersByType(type) {
    return getOffersByType(type);
  }

  getOffers() {
    return this.offers;
  }
}
