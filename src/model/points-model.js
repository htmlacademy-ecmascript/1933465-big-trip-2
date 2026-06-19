import { getRandomPoints} from '../mock/points.js';
import dayjs from 'dayjs';

const POINTS_COUNT = 4;

export default class PointsModel {
  points = getRandomPoints(POINTS_COUNT);

  blankPoint = {
    id: '',
    basePrice: '',
    dateFrom: dayjs(),
    dateTo: dayjs(),
    destination: '',
    isFavorite: false,
    offers: [],
    type: 'flight'
  };

  getPoints() {
    return this.points;
  }

  getBlankPoint(){
    return this.blankPoint;
  }
}
