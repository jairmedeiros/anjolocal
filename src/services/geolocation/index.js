import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateLatitudeLongitude, updateCityState } from './actions';
import { useReverseGeocoding } from './utils/locationIq';

function useLocation() {
  // TODO: Implementar classe de Error.
  const location = useSelector((state) => state.geolocation);
  const dispatch = useDispatch();
  const { data, error } = useReverseGeocoding(location.latitude, location.longitude);

  function handleError(err) {
    // console.log(err.message);
  }

  useEffect(() => {
    const geo = navigator.geolocation;
    // if (!geo) {
    //   setError('A geolocalização não é suportada');
    //   return;
    // }

    function handleSuccess({ coords }) {
      dispatch(updateLatitudeLongitude(coords.latitude, coords.longitude));

      if (data && data.address) {
        dispatch(updateCityState(data.address.city, data.address.state));
      }
    }

    geo.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: true,
      timeout: 60000, // 1seg
      maximumAge: 86400000, // 24hrs
    });
  }, [data, dispatch, location.latitude, location.longitude]);
}

export default useLocation;
