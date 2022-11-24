import { useEffect, useReducer } from 'react';
import { getUserLocation } from 'utils/getUserLocation';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined
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

  return (
    <PlacesContext.Provider value={{ ...state }}>
      {children}
    </PlacesContext.Provider>
  );
};

export default PlacesProvider;
