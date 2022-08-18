import * as React from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import CartContext from 'contexts/cart-context';
import { Item, Footer } from './components';

const fetchItem = async ({ id, count }) => {
  const response = await fetch(`http://localhost:8000/mugs/${id}`);
  const item = await response.json();

  return {
    ...item,
    count,
  };
};

const fetchCartItems = async (cartItems) => {
  const items = await Promise.all(cartItems.map((item) => fetchItem(item)));

  return items;
};

const ListSection = ({ width, expansionBr, setDrawerOpen }) => {
  const {
    cartItems: cartItemsData,
    addToCart,
    deleteItem,
  } = React.useContext(CartContext);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const fetchedItems = await fetchCartItems(cartItemsData);

      setCartItems(fetchedItems);
    })();
  }, [cartItemsData]);

  const total = cartItems.reduce((prevSum, { count, price }) => prevSum + count * price, 0);

  return (
    <Box sx={(theme) => ({
      mr: { xs: 0, [expansionBr]: `${width}px` },
      transition: theme.transitions.create(['margin-right']),
    })}
    >
      <Box sx={(theme) => ({
        maxWidth: {
          xs: '100%',
          xl: theme.breakpoints.values.xl - width,
        },
        mx: 'auto',
        py: 8,
        px: { xs: 2, md: 4 },
      })}
      >
        <Typography variant="h3" sx={{ mb: 8 }}>Jūsų krepšelis</Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {cartItems.map(({
            id,
            img,
            title,
            about,
            category,
            count,
            price,
            currency,
          }) => (
            <Item
              key={id}
              img={img}
              title={title}
              subtitle={about}
              textProps={[category]}
              count={count}
              setCount={(newCount) => addToCart({ id, count: newCount })}
              price={price}
              currency={currency}
              deleteItem={() => deleteItem(id)}
            />
          ))}

        </Box>

        <Footer total={total} />

        {cartItems.length > 0 && (
          <Box sx={{ display: { xs: 'flex', [expansionBr]: 'none' }, justifyContent: 'center', mt: 8 }}>
            <Button variant="contained" size="large" onClick={() => setDrawerOpen(true)}>
              <Typography variant="h5" color="common.white">Užsakyti</Typography>
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ListSection;
