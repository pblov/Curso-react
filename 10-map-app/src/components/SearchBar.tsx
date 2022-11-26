import { PlacesContext } from 'context/places/PlacesContext';
import { ChangeEvent, useContext, useRef } from 'react';
import { SearchContainer, SearchBarInput } from './SearchBarStyles';
import { SearchResults } from './SearchResults';

export const SearchBar = () => {
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const debounceRef = useRef<NodeJS.Timeout>();
  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(event.target.value);
    }, 500);
  };
  return (
    <SearchContainer>
      <SearchBarInput
        onChange={onQueryChanged}
        type="text"
        placeholder="Buscar lugar..."
      />
      <SearchResults />
    </SearchContainer>
  );
};
