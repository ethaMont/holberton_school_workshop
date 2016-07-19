import React from 'react';
import ReactDOM from 'react-dom';

import Product from './Components/Product.js';

ReactDOM.render(
  <Product
    name={"My book on React"}
    price={"0.99$"}
    quantityAvailable={10}
    imageUrl={"https://facebook.github.io/react/img/logo.svg"}
     />,
  document.getElementById('product')
);
