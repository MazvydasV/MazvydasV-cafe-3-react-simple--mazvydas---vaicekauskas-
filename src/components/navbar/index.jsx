import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
} from '@mui/material';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import { useNavigate } from 'react-router-dom';
import * as Nav from './components';

const pages = [
  { text: 'Pagrindinis', to: '/' },
  { text: 'Šeimoms', to: '/pottery' },
  { text: 'Pradedantiesiems sprogdintojams', to: '/cup-shelf' },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ display: { sm: 'none' } }}
        >
          <CenterFocusWeakIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignSelf: 'stretch' }}>
          {pages.map(({ text, to }) => <Nav.Link key={to} to={to}>{text}</Nav.Link>)}
        </Box>

        <IconButton
          size="large"
          edge="end"
          color="inherit"
          onClick={() => navigate('/cart')}
        >
          <AccessibleForwardIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
