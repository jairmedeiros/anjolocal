import './styles.scss';
import PropTypes from 'prop-types';
import Button from '../Button';

const propTypes = {
  majorStyle: PropTypes.string,
  url: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const defaultProps = {
  majorStyle: null,
  children: null,
};

function ButtonFloating({ majorStyle, url, children }) {
  return (
    <Button majorStyle={majorStyle} url={url} customClass="button-floating">
      {children}
    </Button>
  );
}

ButtonFloating.propTypes = propTypes;

ButtonFloating.defaultProps = defaultProps;

export default ButtonFloating;
