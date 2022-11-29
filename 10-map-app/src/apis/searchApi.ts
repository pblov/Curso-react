import axios from 'axios';
import { GEOCODE_PLACES, MAPBOX_API_TOKEN } from '../constants/env';

const searchApi = axios.create({
  baseURL: GEOCODE_PLACES,
  params: {
    limit: 5,
    language: 'es',
    access_token: MAPBOX_API_TOKEN
  }
});

export default searchApi;
