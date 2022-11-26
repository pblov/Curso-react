import { useContext } from 'react';
import { LocationButton } from './ButtonMyLocationStyles';
import RoomIcon from '@mui/icons-material/Room';
import { MapContext } from 'context/map/MapContext';
import { PlacesContext } from 'context/places/PlacesContext';

export const ButtonMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const handleLocationClick = () => {
    if (!isMapReady) throw new Error('Mapa no está listo');
    if (!userLocation) throw new Error('No existe ubicación del usuario');
    map?.flyTo({
      zoom: 14,
      center: userLocation
    });
  };
  return (
    <LocationButton onClick={handleLocationClick}>
      <RoomIcon />
    </LocationButton>
  );
};
