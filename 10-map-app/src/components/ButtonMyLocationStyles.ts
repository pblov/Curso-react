import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const LocationButton = styled(Button)({
  backgroundColor: '#263238',
  color: '#FFFFFF',
  position: 'fixed',
  top: '20px',
  right: '20px',
  zIndex: 999,
  '&:hover': {
    backgroundColor: '#263230',
    color: '#FFFFFF'
  }
});
