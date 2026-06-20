import { getRandomPoints } from '../mock/points.js';

const POINTS_COUNT = 4;

export default class PointsModel {
  #points = [];

  init() {
    this.points = getRandomPoints(POINTS_COUNT);
  }

  get points() {
    return this.#points;
  }

  set points(points) {
    this.#points = points;
  }
}
