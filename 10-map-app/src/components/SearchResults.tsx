import { useContext, useState } from 'react';
import { ListItemText, Tooltip } from '@mui/material';
import { PlacesContext } from 'context/places/PlacesContext';
import { MapContext } from 'context/map/MapContext';
import {
  SearchResultsList,
  SearchResultsDivider,
  SearchResultsLoader,
  SearchResultsButton,
  SearchAddressButton
} from './SearchResultsStyles';
import { Feature } from 'interfaces/places';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);
  const [activePlace, setActivePlace] = useState('');

  const onPlacesClicked = (place: Feature) => {
    if (place) setActivePlace(place.id);
    const [lng, lat] = place.center;
    map?.flyTo({
      zoom: 14,
      center: [lng, lat]
    });
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;
    const [lng, lat] = place.center;
    getRouteBetweenPoints(userLocation, [lng, lat]);
  };

  if (isLoadingPlaces) return <SearchResultsLoader size="2rem" />;
  if (places.length === 0) return <></>;
  return (
    <>
      {places.map((item) => (
        <div key={item.id}>
          <SearchResultsList isActivePlace={activePlace === item.id}>
            <SearchResultsButton
              isActivePlace={activePlace === item.id}
              onClick={() => onPlacesClicked(item)}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: activePlace === item.id ? '#FFFFFF ' : '#263238'
                }}
                secondaryTypographyProps={{
                  fontSize: 11,
                  color: activePlace === item.id ? '#FFFFFF ' : '#263238'
                }}
                primary={item.text}
                secondary={item.place_name}
              />
              <Tooltip title="Trazar ruta" arrow>
                <SearchAddressButton
                  onClick={() => getRoute(item)}
                  isActivePlace={activePlace === item.id}
                  aria-label="address"
                >
                  <DirectionsCarFilledIcon />
                </SearchAddressButton>
              </Tooltip>
            </SearchResultsButton>
          </SearchResultsList>
          <SearchResultsDivider />
        </div>
      ))}
    </>
  );
};
