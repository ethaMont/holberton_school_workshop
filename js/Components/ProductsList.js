import React from 'react';

const styles = {
  container: {
    display: 'flex',
  },
};

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>New products: </h1>
        <div style={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

ProductsList.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]),
};

export default ProductsList;