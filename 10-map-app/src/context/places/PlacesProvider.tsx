import { searchApi } from 'apis';
import { Feature, PlacesResponse } from 'interfaces/places';
import { useEffect, useReducer } from 'react';
import { getUserLocation } from 'utils/getUserLocation';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: []
};

interface Props {
  children: React.ReactNode;
}

const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((latLng) =>
      dispatch({ type: 'setUserLocation', payload: latLng })
    );
  }, []);

  const searchPlacesByTerm = async (query: string): Promise<Feature[]> => {
    if (query.length === 0) {
      dispatch({ type: 'setPlaces', payload: [] });
      return [];
    }
    if (!state.userLocation) throw new Error('No hay ubicación del usuario');

    dispatch({ type: 'setLoadingPlaces' });
    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(',')
      }
    });
    if (resp) dispatch({ type: 'setPlaces', payload: resp.data.features });
    return resp.data.features;
  };

  return (
    <PlacesContext.Provider value={{ ...state, searchPlacesByTerm }}>
      {children}
    </PlacesContext.Provider>
  );
};

export default PlacesProvider;
