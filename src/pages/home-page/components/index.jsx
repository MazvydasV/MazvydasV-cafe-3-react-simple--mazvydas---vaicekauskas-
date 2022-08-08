import { Box, styled } from '@mui/material';

export { default as ImageLink } from './img-link';

export const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  zIndex: 1,
  objectFit: 'cover',
  objectPosition: 'left',
});

export const ContentContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingTop: '58px',
  width: '35vh',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  marginRight: 'auto',

  [theme.breakpoints.down('xxl')]: {
    width: 550,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  margin: theme.spacing(8, 8, 6, 8),
  height: '80%',
  width: 650,
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(6),

  [theme.breakpoints.down('xxl')]: {
    marginRight: theme.spacing(6),
  },
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(0),
    padding: theme.spacing(4, 4),
  },
}));
