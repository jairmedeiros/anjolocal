import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateLatitudeLongitude, updateCityState } from './actions';
import { useReverseGeocoding } from './utils/locationIq';

function useLocation() {
  // TODO: Implementar classe de Error.
  const location = useSelector((state) => state.geolocation);
  const dispatch = useDispatch();
  const { data, error } = useReverseGeocoding(location.latitude, location.longitude);

  let city;
  let state;
  if (data) {
    city = data.address.city;
    state = data.address.state;
  }

  function handleError(err) {
    console.log(err.message);
  }

  useEffect(() => {
    const geo = navigator.geolocation;
    // if (!geo) {
    //   setError('A geolocalização não é suportada');
    //   return;
    // }

    function handleSuccess({ coords }) {
      dispatch(updateLatitudeLongitude(coords.latitude, coords.longitude));
      dispatch(updateCityState(city, state));
    }

    geo.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: true,
      timeout: 60000, // 1seg
      maximumAge: 86400000, // 24hrs
    });
  }, [city, dispatch, location.latitude, location.longitude, state]);
}

export default useLocation;
