import { SortType } from './constants.js';
import dayjs from 'dayjs';

const sort = {
  [SortType.DAY]: (points) => points,
  [SortType.TIME]: (points) => points.sort((a, b) => dayjs(a.dateFrom).diff(dayjs(a.dateTo)) - dayjs(b.dateFrom).diff(dayjs(b.dateTo))),
  [SortType.PRICE]: (points) => points.sort((a, b) => a.basePrice - b.basePrice),
};

export { sort };
