import { MapProvider } from 'context/map/MapProvider';
import PlacesProvider from 'context/places/PlacesProvider';
import HomePage from 'pages/Home';

const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomePage />
      </MapProvider>
    </PlacesProvider>
  );
};

export default MapsApp;
