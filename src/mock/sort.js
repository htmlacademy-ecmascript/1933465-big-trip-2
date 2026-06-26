import { Sorts } from '../utils/sort.js';
import { SortType } from '../utils/constants.js';

function generateSort() {
  return Object.entries(SortType).map(
    ([, value]) => ({
      type: value,
      isActive: Object.keys(Sorts).includes(value),
    })
  );
}

export { generateSort };
