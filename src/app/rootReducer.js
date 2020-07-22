import { combineReducers } from 'redux';
import geolocationReducer from '../services/geolocation/reducer';

export default combineReducers({
  geolocation: geolocationReducer,
});
