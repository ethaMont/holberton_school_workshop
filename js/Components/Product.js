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

Product.propTypes = {
  imageUrl: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.string,
  quantityAvailable: React.PropTypes.number,
};

Product.defaultProps = {
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif",
  price: "0.99$",
  quantityAvailable: 0,
};

export default Product;