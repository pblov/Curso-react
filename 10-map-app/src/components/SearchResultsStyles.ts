import {
  CircularProgress,
  Divider,
  List,
  ListItemButton,
  IconButton
} from '@mui/material';
import { styled } from '@mui/system';

interface SearchProps {
  isActivePlace: boolean;
}

export const SearchResultsList = styled(List)<SearchProps>(
  ({ isActivePlace }) => ({
    width: '100%',
    maxWidth: 360,
    padding: 0,
    backgroundColor: isActivePlace ? '#01579b ' : '#FFFFFF ',
    '&:hover': {
      backgroundColor: isActivePlace ? '#01579b ' : '#FFFFFF '
    }
  })
);

export const SearchResultsButton = styled(ListItemButton)<SearchProps>(
  ({ isActivePlace }) => ({
    display: 'flex',
    backgroundColor: isActivePlace ? '#01579b' : '#FFFFFF'
  })
);

export const SearchResultsLoader = styled(CircularProgress)({
  margin: '15px auto',
  color: '#263238'
});

export const SearchResultsDivider = styled(Divider)({
  borderColor: '#DFE5E8'
});

export const SearchAddressButton = styled(IconButton)<SearchProps>(
  ({ isActivePlace }) => ({
    border: isActivePlace ? '1px solid #FFFFFF' : '1px solid #DFE5E8',
    color: isActivePlace ? '#FFFFFF' : '#263238'
  })
);
