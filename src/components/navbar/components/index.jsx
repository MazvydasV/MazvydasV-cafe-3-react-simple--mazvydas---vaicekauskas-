import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  textDecoration: 'none',
  color: theme.palette.warning.light,

  '&.active': {
    boxShadow: `inset 0 -4px 0 ${theme.palette.warning.light}`,
  },

  ':hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
}));
