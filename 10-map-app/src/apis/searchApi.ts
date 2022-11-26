import axios from 'axios';
import { GEOCODE_BASE_URL, MAPBOX_API_TOKEN } from '../constants/env';

const searchApi = axios.create({
  baseURL: GEOCODE_BASE_URL,
  params: {
    limit: 5,
    language: 'es',
    access_token: MAPBOX_API_TOKEN
  }
});

export default searchApi;
