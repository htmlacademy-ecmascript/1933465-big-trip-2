import EventView from '../view/event-view/event-view.js';
import { render } from '../framework/render.js';

export default class EventPresenter {

  constructor({ eventContainer, point, pointsModel, offersModel, destinationsModel }) {
    this.eventContainer = eventContainer;
    this.point = point;
    this.pointsModel = pointsModel;
    this.offersModel = offersModel;
    this.destinationsModel = destinationsModel;
  }

  init() {
    this.destination = this.destinationsModel.getDestinationById(this.point.destination);
    this.offers = this.point.offers.map((offer) => this.offersModel.getOfferByTypeAndId(this.point.type, offer));
    this.render();
  }

  render() {
    render(new EventView(
      {
        point: this.point,
        destination: this.destination,
        offers: this.offers
      }), this.eventContainer);
  }
}

