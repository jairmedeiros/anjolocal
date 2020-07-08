import { combineReducers } from 'redux';
import geolocationReducer from '../services/geolocation/reducer';
import hamburgerReducer from '../components/common/Hamburger/reducer';

export default combineReducers({
  geolocation: geolocationReducer,
  hamburger: hamburgerReducer,
});
