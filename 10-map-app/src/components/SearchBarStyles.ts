import { styled } from '@mui/system';

export const SearchContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: 20,
  left: 20,
  backgroundColor: '#FFFFFF',
  zIndex: 999,
  boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
  width: 300,
  overflow: 'hidden',
  borderRadius: 16
});

export const SearchBarInput = styled('input')({
  width: 'auto',
  border: '1px solid #DFE5E8',
  margin: 8,
  padding: 8,
  borderRadius: 16,
  '&:focus': {
    outline: 'none',
    border: '1px solid #bdbdbd'
  },
  '&::placeholder': {
    color: '#263238'
  }
});
