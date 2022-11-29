import axios from 'axios';
import { GEOCODE_DIRECTIONS, MAPBOX_API_TOKEN } from '../constants/env';

const directionsApi = axios.create({
  baseURL: GEOCODE_DIRECTIONS,
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: MAPBOX_API_TOKEN
  }
});

export default directionsApi;
