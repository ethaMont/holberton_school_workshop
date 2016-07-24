import React from 'react';
import ReactDOM from 'react-dom';

import ProductsList from './Components/ConnectProductsList.js';
import ProductsReducer from './Reducers/Products.js';

import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

import {
  Provider,
} from 'react-redux';

import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({ ProductsReducer }),
  applyMiddleware(thunk)
);

ReactDOM.render((
  <Provider store={store}>
    <ProductsList />
  </Provider>
), document.getElementById('product'));
