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
  objectPosition: 'right',
});

export const ContentContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '40vw',
  flexGrow: 1,
  // marginLeft: 'auto',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.down('xxl')]: {
    width: 550,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(8),
  width: '100%',
  height: '100%',
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(4),
  padding: theme.spacing(4, 0),

  [theme.breakpoints.down('xxl')]: {
    marginRight: theme.spacing(6),
  },
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(0),
    padding: theme.spacing(4, 4),
  },
}));
