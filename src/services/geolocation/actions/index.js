import {
  CLEAR,
  UPDATE_LATITUDE_LONGITUDE,
  UPDATE_CITY_STATE,
  UPDATE_ALL_FIELDS,
} from './constants';

function clear() {
  return {
    type: CLEAR,
  };
}

function updateLatitudeLongitude(latitude, longitude) {
  return {
    type: UPDATE_LATITUDE_LONGITUDE,
    payload: {
      latitude,
      longitude,
    },
  };
}

function updateCityState(city, state) {
  return {
    type: UPDATE_CITY_STATE,
    payload: {
      city,
      state,
    },
  };
}

export { clear, updateLatitudeLongitude, updateCityState };
