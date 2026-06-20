import { getOffers } from '../mock/offers';

export default class OffersModel {
  #offers = [];

  init() {
    this.offers = getOffers();
  }

  getOffersByType(type) {
    return this.offers.find((offer) => offer.type === type).offers;
  }

  getOfferByTypeAndId(type, id) {
    return this.getOffersByType(type).find((offer) => offer.id === id);
  }

  get offers() {
    return this.#offers;
  }

  set offers(offers) {
    this.#offers = offers;
  }
}
