import request from 'superagent';

import {
  arrayOf,
  normalize,
  Schema,
} from 'normalizr';

import {
  PRODUCT_FETCH_COMPLETED,
  PRODUCT_FETCH_ERROR,
  PRODUCT_FETCH_INITIATED,
} from '../Constants/ProductConstants.js';

const product = new Schema('products', {
  idAttribute: 'id',
});

export function fetchProductsInitiated() {
  return {
    type: PRODUCT_FETCH_INITIATED,
  };
}

export function fetchProductsErrored(error) {
  return {
    type: PRODUCT_FETCH_ERROR,
    error,
  };
}

export function fetchProductsCompleted(response) {
  return Object.assign({
    type: PRODUCT_FETCH_COMPLETED,
  }, normalize(response.products, arrayOf(product)));
}

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsInitiated());

    request.get('/fake_api/products.json')
      .then((data) => {
        dispatch(fetchProductsCompleted(data.body));
      }).catch((error) => {
        dispatch(fetchProductsErrored(error));
      });
  };
}