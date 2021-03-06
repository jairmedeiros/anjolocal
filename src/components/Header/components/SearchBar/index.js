import './styles.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Button } from '../../../common';
import useLocation from '../../../../services/geolocation';

const propTypes = {
  headerCenter: PropTypes.bool,
};

const defaultProps = {
  headerCenter: false,
};

function SearchBar({ headerCenter }) {
  useLocation();
  let currentStyle = 'search-bar field field-grouped';
  const location = useSelector((state) => state.geolocation);

  if (headerCenter) {
    currentStyle += ' header-center-elements';
  }
  return (
    <div className={currentStyle}>
      <div className="control control-expanded mr-0">
        <input
          className="input search-input-append"
          type="text"
          name="search"
          maxLength={60}
          placeholder={
            location.city && location.state
              ? `Ex: ${location.city}, ${location.state}`
              : 'Pesquisar...'
          }
        />
      </div>
      <div className="control search-icon">
        <Button url="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30}>
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              fill="#a94caf"
              transform="scale(0.9)"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
