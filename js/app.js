import React from 'react';
import ReactDOM from 'react-dom';

import ProductsList from './Components/ProductsList.js';
import Product from './Components/Product.js';

ReactDOM.render(
  (<ProductsList
    title="New products:">
    <Product
      imageUrl={"https://drscdn.500px.org/photo/161924045/q%3D80_m%3D2000/32f7531f9bf5468535171a86067d3218"}
      name={"My book on React"} />
    <Product
      name={"My second book on React"} />
    <Product
      name={"My third book on React"} />
  </ProductsList>),
  document.getElementById('product')
);
