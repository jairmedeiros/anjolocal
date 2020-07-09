import { CLEAR, UPDATE_LATITUDE_LONGITUDE, UPDATE_CITY_STATE } from './actions/constants';

const initialState = {
  latitude: -8.0631617,
  longitude: -34.8732721,
  city: 'Recife',
  state: 'Pernambuco',
};

function geolocationReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR:
      return {
        initialState,
      };
    case UPDATE_LATITUDE_LONGITUDE:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    case UPDATE_CITY_STATE:
      return {
        ...state,
        city: action.payload.city,
        state: action.payload.state,
      };
    default:
      return state;
  }
}

export default geolocationReducer;
