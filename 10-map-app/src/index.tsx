import MapsApp from 'MapsApp';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  'pk.eyJ1IjoicGJsb3YiLCJhIjoiY2xhdmVtdWlsMDR6ejN3b2FtZDVocXZvbyJ9.OS-S4ro5lMRMQrF1fUHvZA';

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
