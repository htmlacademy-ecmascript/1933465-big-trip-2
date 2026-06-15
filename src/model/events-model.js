import { getRandomPoints} from '../mock/points.js';
import { getOfferByTypeAndId } from '../mock/offers.js';
import { getDestinationById } from '../mock/destinations.js';
import dayjs from 'dayjs';

const EVENTS_COUNT = 4;

export default class EventsModel {
  events = getRandomPoints(EVENTS_COUNT).map((point) => {
    const offers = point.offers.map((offer) => getOfferByTypeAndId(point.type, offer));
    const destination = getDestinationById(point.destination);
    return { ...point, offers, destination };
  });

  blankEvent = {
    id: '',
    basePrice: '',
    dateFrom: dayjs(),
    dateTo: dayjs(),
    destination: {
      name: '',
      description: '',
      id: '',
      pictures: []
    },
    isFavorite: false,
    offers: [],
    type: 'flight'
  };

  getEvents() {
    return this.events;
  }

  getBlankEvent(){
    return this.blankEvent;
  }
}
