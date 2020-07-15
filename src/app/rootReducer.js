import { combineReducers } from 'redux';
import geolocationReducer from '../services/geolocation/reducer';
import hamburgerReducer from '../components/common/Hamburger/reducer';
import buttonFloatingReducer from '../components/common/ButtonFloating/reducer';
import modalReducer from '../components/common/Modal/reducer';

export default combineReducers({
  geolocation: geolocationReducer,
  hamburger: hamburgerReducer,
  buttonFloating: buttonFloatingReducer,
  modal: modalReducer,
});
