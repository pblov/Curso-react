import { useContext, useState } from 'react';
import { ListItemText } from '@mui/material';
import { PlacesContext } from 'context/places/PlacesContext';
import { MapContext } from 'context/map/MapContext';
import {
  SearchResultsList,
  SearchResultsDivider,
  SearchResultsLoader,
  SearchResultsButton
} from './SearchResultsStyles';
import { Feature } from 'interfaces/places';

export const SearchResults = () => {
  const { places, isLoadingPlaces } = useContext(PlacesContext);
  const { map } = useContext(MapContext);
  const [activePlace, setActivePlace] = useState('');

  const onPlacesClicked = (place: Feature) => {
    if (place) setActivePlace(place.id);
    const [lng, lat] = place.center;
    map?.flyTo({
      zoom: 14,
      center: [lng, lat]
    });
  };

  if (isLoadingPlaces) return <SearchResultsLoader size="2rem" />;
  if (places.length === 0) return <></>;
  return (
    <>
      {places.map((item) => (
        <div key={item.id}>
          <SearchResultsList
            sx={{
              backgroundColor:
                activePlace === item.id ? '#01579b ' : '#FFFFFF ',
              '&:hover': {
                backgroundColor:
                  activePlace === item.id ? '#01579b ' : '#FFFFFF '
              }
            }}
          >
            <SearchResultsButton
              isActive={activePlace === item.id}
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
            </SearchResultsButton>
          </SearchResultsList>
          <SearchResultsDivider />
        </div>
      ))}
    </>
  );
};
