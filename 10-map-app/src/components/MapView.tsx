import { PlacesContext } from 'context/places/PlacesContext';
import { useContext, useLayoutEffect, useRef } from 'react';
import { Map } from 'mapbox-gl';
import {
  MapViewContainer,
  MapViewLoading,
  MapViewLoadingContainer
} from './MapViewStyles';

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const mapDiv = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: userLocation,
        zoom: 9
      });
    }
  }, [isLoading]);

  if (isLoading)
    return (
      <MapViewLoadingContainer>
        <MapViewLoading />
      </MapViewLoadingContainer>
    );
  return (
    <MapViewContainer ref={mapDiv}>{userLocation?.join(',')}</MapViewContainer>
  );
};
