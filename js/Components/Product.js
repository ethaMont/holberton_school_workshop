import React from 'react';

const borderColor = '#e6e3e3';
const styles = {
  item : {
    borderRadius: '3px',
    border: '1px solid ' + borderColor,
    marginLeft: '10px',
    padding: '0px 10px 0px 10px',
  },
  title: {
    textDecoration: 'underline',
  },
  button: {
    background: '#00a0d8',
    color: 'white',
    borderRadius: '5px',
    textTransform: 'uppercase',
    padding: '10px',
    textAlign: 'center',
  }
};

const Product = (props) => (
  <div style={styles.item}>
    <h3 style={styles.title}>{props.name}</h3>
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