import EventView from '../view/event-view/event-view.js';
import { render } from '../render.js';

export default class EventPresenter {

  constructor({ eventContainer, point, pointsModel, offersModel, destinationsModel }) {
    this.eventContainer = eventContainer;
    this.point = point;
    this.pointsModel = pointsModel;
    this.offersModel = offersModel;
    this.destinationsModel = destinationsModel;
  }

  init() {
    this.render();
  }

  render() {
    const destination = this.destinationsModel.getDestinationById(this.point.destination);
    const offers = this.point.offers.map((offer) => this.offersModel.getOfferByTypeAndId(this.point.type, offer));
    render(new EventView({ point: this.point, destination, offers }), this.eventContainer);
  }
}

