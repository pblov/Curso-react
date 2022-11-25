import { PlacesContext } from 'context/places/PlacesContext';
import { useContext, useLayoutEffect, useRef } from 'react';
import { Map } from 'mapbox-gl';
import {
  MapViewContainer,
  MapViewLoading,
  MapViewLoadingContainer
} from './MapViewStyles';
import { MapContext } from 'context/map/MapContext';

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);
  const mapDiv = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!,
        style: 'mapbox://styles/mapbox/light-v10',
        center: userLocation,
        zoom: 9
      });
      setMap(map);
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
