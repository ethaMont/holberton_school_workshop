import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  handleImageLoaded() {
    this.setState({ loaded: true });
  }

  render() {
    const {
      height,
      imageUrl,
      width,
    } = this.props;

    const displayImage = {
      display: (this.state.loaded ? 'inline' : 'none'),
    };

    return (
      <div>
        {this.state.loaded ? null : <p>Loading...</p>}
        <img
          height={height}
          width={width}
          src={imageUrl}
          style={displayImage}
          onLoad={this.handleImageLoaded.bind(this) }
          />
      </div>
    );
  }
}

Image.propTypes = {
  height: React.PropTypes.number,
  imageUrl: React.PropTypes.string,
  width: React.PropTypes.number,
};

Image.defaultProps = {
  height: 0,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif",
  width: 0,
};

export default Image;