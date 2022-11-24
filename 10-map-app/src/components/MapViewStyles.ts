import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

export const MapViewLoadingContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#263238',
  justifyContent: 'center',
  height: '100vh'
});

export const MapViewLoading = styled(CircularProgress)({
  color: '#FFFFFF'
});

export const MapViewContainer = styled('div')({
  backgroundColor: 'red',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  top: 0,
  left: 0
});
