import './styles.scss';
import PropTypes from 'prop-types';

const propTypes = {
  majorStyle: PropTypes.string,
  url: PropTypes.string.isRequired,
  useShadow: PropTypes.bool,
  isFloating: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  majorStyle: null,
  children: null,
  useShadow: false,
  isFloating: false,
};

function Button({ majorStyle, url, useShadow, children, isFloating }) {
  let currentStyle = '';
  if (majorStyle) {
    currentStyle = `button button-block button-${majorStyle} `;
  }

  if (useShadow) {
    currentStyle += 'button-shadow';
  }

  if (isFloating) {
    currentStyle += 'button-floating';
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
