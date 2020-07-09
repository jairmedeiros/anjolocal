import useSWR from 'swr';
import { US } from './regions';
import { REVERSE_GEO } from './services';

const getFetcher = (...args) => fetch(...args).then((res) => res.json());

function createUrl(region, service, options) {
  let query;
  if (options.string) {
    query = `&q=${options.string}`;
  } else {
    query = `&lat=${options.latitude}&lon=${options.longitude}`;
  }

  return `${region + service}key=pk.16a8fbc0ba5731526be148e09bc303b1${query}&format=json`;
}

function useReverseGeocoding(latitude, longitude) {
  const { data, error } = useSWR(createUrl(US, REVERSE_GEO, { latitude, longitude }), getFetcher);
  return { data, error };
}

export { useReverseGeocoding };
