import MapsApp from 'MapsApp';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { MAPBOX_API_TOKEN } from './constants/env';

mapboxgl.accessToken = MAPBOX_API_TOKEN;

if (!navigator.geolocation) {
  alert('No tiene opción de Geolocación');
  throw new Error('Navegador no tiene opción de geolocación');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
