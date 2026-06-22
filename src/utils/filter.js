import { FilterType } from './constants.js';
import dayjs from 'dayjs';

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => dayjs(point.dateFrom) > dayjs()),
  [FilterType.PRESENT]: (points) => points.filter((point) => dayjs(point.dateFrom) <= dayjs() && dayjs(point.dateTo) >= dayjs()),
  [FilterType.PAST]: (points) => points.filter((point) => dayjs(point.dateTo) < dayjs())
};

export { filter };
