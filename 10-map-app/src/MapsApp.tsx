import { MapProvider } from 'context/map/MapProvider';
import PlacesProvider from 'context/places/PlacesProvider';
import HomePage from 'pages/Home';

const MapsApp = () => {
  return (
    <MapProvider>
      <PlacesProvider>
        <HomePage />
      </PlacesProvider>
    </MapProvider>
  );
};

export default MapsApp;
