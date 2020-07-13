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
    <div className="floating">
      <div className="floating-inner">
        <a className="close-button" href="#">
          <img src="/static/images/close.svg" alt="Fechar" />
        </a>
        <Button majorStyle={majorStyle} url={url} customClass="button-floating">
          {children}
        </Button>
      </div>
    </div>
  );
}

ButtonFloating.propTypes = propTypes;

ButtonFloating.defaultProps = defaultProps;

export default ButtonFloating;
