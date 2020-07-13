import './styles.scss';
import PropTypes from 'prop-types';

const propTypes = {
  majorStyle: PropTypes.string,
  url: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  useShadow: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  majorStyle: null,
  children: null,
  useShadow: false,
  customClass: null,
};

function Button({ majorStyle, url, useShadow, children, customClass }) {
  let currentStyle = '';
  if (majorStyle) {
    currentStyle += `button button-block button-${majorStyle} `;
  }

  if (useShadow) {
    currentStyle += 'button-shadow ';
  }

  if (customClass) {
    currentStyle += customClass;
  }
  return (
    <a className={currentStyle} href={url}>
      {children}
    </a>
  );
}

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;
