import { combineReducers } from 'redux';
import geolocationReducer from '../services/geolocation/reducer';
import modalReducer from '../components/common/Modal/reducer';

export default combineReducers({
  geolocation: geolocationReducer,
  modal: modalReducer,
});
