import React from 'react';
import { colors } from '../Styles/constants.js';

const styles = {
  button: {
    background: colors.primaryBlue,
    color: colors.secondaryText,
    borderRadius: '5px',
    textTransform: 'uppercase',
    padding: '10px',
    textAlign: 'center',
  },
};

const PrimaryButton = ({ text }) => (
  <p style={styles.button}>{text}</p>
);

PrimaryButton.propTypes = {
  text: React.PropTypes.string,
};

PrimaryButton.defaultProps = {
  text: "button",
};

export default PrimaryButton;