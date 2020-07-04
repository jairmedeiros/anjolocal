/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.scss';
import PropTypes from 'prop-types';

const Button = ({ majorStyle, url, useShadow, children }) => {
  let currentStyle = `button button-block button-${majorStyle}`;

  if (useShadow) {
    currentStyle += ' button-shadow';
  }

  return (
    <a className={currentStyle} href={url}>
      {children}
    </a>
  );
};

Button.propTypes = {
  majorStyle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  useShadow: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  children: null,
  useShadow: false,
};

export default Button;
