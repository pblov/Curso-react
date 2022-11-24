import PlacesProvider from 'context/places/PlacesProvider';
import HomePage from 'pages/Home';

const MapsApp = () => {
  return (
    <PlacesProvider>
      <HomePage />
    </PlacesProvider>
  );
};

export default MapsApp;
