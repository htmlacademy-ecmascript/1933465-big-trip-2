import dayjs from 'dayjs';

const BLANK_DESTINATION = {
  id: '',
  description: '',
  name: '',
  pictures: []
};

const BLANK_POINT = {
  id: '',
  basePrice: '',
  dateFrom: dayjs(),
  dateTo: dayjs(),
  destination: '',
  isFavorite: false,
  offers: [],
  type: 'flight'
};

const TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

export { BLANK_DESTINATION, BLANK_POINT, TYPES };
