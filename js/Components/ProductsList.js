import React from 'react';
import Product from './Product.js';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        <h1>New products: </h1>
        <div style={styles.container}>
          {this.props.products.valueSeq().map(
            product => <Product
                        imageUrl={product.get('imageUrl')}
                        key={product.get('id')}
                        name={product.get('name')}
                        price={product.get('price')}
                        quantityAvailable={product.get('quantityAvailable')} />
          )}
        </div>
      </div>
    );
  }
}

ProductsList.propTypes = {
  fetchProducts: React.PropTypes.func,
  products: React.PropTypes.object,
};

export default ProductsList;