import React from 'react';
import { colors } from '../Styles/constants.js';
import PrimaryButton from './PrimaryButton.js';
import Image from './Image.js';

const styles = {
  item : {
    borderRadius: '3px',
    border: '1px solid ' + colors.secondaryGray,
    margin: '10px 10px 0 0',
    padding: '0px 10px 0px 10px',
    textAlign: 'center',
    width: '170px',
    flexGrow: 0,
  },
  title: {
    textDecoration: 'underline',
    wordBreak: 'normal',
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const Product = (props) => (
  <div style={styles.item}>
    <h3 style={styles.title}>{props.name}</h3>
    <Image
      imageUrl={props.imageUrl}
      height={120}
      width={120} />
    <p>Quantity available: {props.quantityAvailable}</p>
    <p>Price: {props.price}</p>
    <PrimaryButton
      text="Buy now" />
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