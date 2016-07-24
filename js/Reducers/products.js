import { Map, fromJS } from 'immutable';

import {
  PRODUCT_FETCH_COMPLETED,
} from '../Constants/ProductConstants';

export default function product(state = new Map(), action = '') {
  switch (action.type) {
    case PRODUCT_FETCH_COMPLETED:
      return state.merge(action.entities.products);
    default:
      return state;
  }
}