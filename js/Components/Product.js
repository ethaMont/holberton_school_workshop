import React from 'react';

const Product = (props) => (
  <div>
    <h3>{props.name}</h3>
    <img src={props.imageUrl} width={120} />
    <p>Quantity available: {props.quantityAvailable}</p>
    <p>Price: {props.price}</p>
    <p>Buy one</p>
  </div>
);

export default Product;