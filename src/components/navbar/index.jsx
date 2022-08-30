import * as React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Drawer,
  Divider,
  useMediaQuery,
  Badge,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import CartContext from 'contexts/cart-context';
import * as Nav from './components';

const links = [
  { text: 'Pagrindinis', to: '/' },
  { text: 'Daikčiukai', to: '/cup-shelf' },
];

const expandBr = 'md';

const Navbar = () => {
  const { cartItemsCount } = React.useContext(CartContext);
  const navigate = useNavigate();
  const isContracted = useMediaQuery((theme) => theme.breakpoints.down(expandBr));
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isContracted && open) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isContracted]);

  return (
    <AppBar position="fixed">
      <Box sx={(theme) => theme.mixins.navbar}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ display: { [expandBr]: 'none' }, alignSelf: 'center' }}
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <Box sx={{ display: { xs: 'none', [expandBr]: 'flex' }, alignSelf: 'stretch' }}>
          {links.map(({ text, to }) => <Nav.Link key={to} to={to}>{text}</Nav.Link>)}
        </Box>

        {isContracted && (
          <Drawer anchor="top" open={open}>
            <Box sx={(theme) => ({
              paddingTop: `calc(${theme.spacing(4)} + ${theme.mixins.navbar.height})`,
              paddingBottom: theme.spacing(4),
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100vh',
            })}
            >
              <Box>
                {links.map(({ text, to }) => (
                  <Nav.Link
                    key={to}
                    to={to}
                    contracted
                    onClick={() => setOpen(false)}
                  >
                    {text}
                  </Nav.Link>
                ))}
              </Box>

              <Box sx={{ display: 'flex', alignSelf: 'stretch', flexDirection: 'column' }}>
                <Nav.Link to="/cart" onClick={() => setOpen(false)} contracted>Krepšelis</Nav.Link>
                <Nav.Link to="/auth/login" onClick={() => setOpen(false)} contracted>Prisijungimas</Nav.Link>
                <Nav.Link to="/auth/register" onClick={() => setOpen(false)} contracted>Registracija</Nav.Link>
              </Box>
            </Box>
          </Drawer>
        )}

        <Box sx={{ display: { xs: 'none', [expandBr]: 'flex' }, alignSelf: 'stretch' }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            sx={{ alignSelf: 'center', mr: 1 }}
            onClick={() => {
              if (isContracted && open) setOpen(false);
              navigate('/cart');
            }}
          >
            <Badge badgeContent={cartItemsCount} color="secondary">
              <ShoppingCartIcon sx={{ color: 'secondary.main' }} />
            </Badge>
          </IconButton>
          <Divider orientation="vertical" flexItem sx={{ my: 2 }} />

          <Nav.Link to="/inner/login" onClick={() => setOpen(false)}>Prisijungimas</Nav.Link>
          <Nav.Link to="/inner/register" onClick={() => setOpen(false)}>Registracija</Nav.Link>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
