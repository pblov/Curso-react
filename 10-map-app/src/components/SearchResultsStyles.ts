import { CircularProgress, Divider, List, ListItemButton } from '@mui/material';
import { styled } from '@mui/system';

interface SearchProps {
  isActive: boolean;
}

export const SearchResultsList = styled(List)({
  width: '100%',
  maxWidth: 360,
  backgroundColor: '#FFFFFF',
  padding: 0
});

export const SearchResultsButton = styled(ListItemButton)<SearchProps>(
  ({ isActive }) => ({
    backgroundColor: isActive ? '#01579b' : '#FFFFFF'
  })
);

export const SearchResultsLoader = styled(CircularProgress)({
  margin: '15px auto',
  color: '#263238'
});

export const SearchResultsDivider = styled(Divider)({
  borderColor: '#DFE5E8'
});
