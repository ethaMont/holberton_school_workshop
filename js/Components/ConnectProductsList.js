import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';

import {
  fetchProducts,
} from '../Actions/ProductActionCreators';

import component from './ProductsList.js';

export function mapStateToProps(state) {
  return {
    products: state.ProductsReducer,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchProducts,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(component);