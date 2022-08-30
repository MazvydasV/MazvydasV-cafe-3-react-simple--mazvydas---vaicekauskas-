import * as React from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import CartContext from 'contexts/cart-context';
import CupService from 'services/cup-service';
import { Item, Footer } from './components';

// Model
const getFormattedCartItems = async (cartItemsData) => {
  const idArr = cartItemsData.map((cartItem) => cartItem.id);
  const fetchedCartItems = await CupService.fetchByIdArr(idArr);

  const fetchedCartItemsWithCount = fetchedCartItems.map((fetchedCartItem) => ({
    ...fetchedCartItem,
    count: cartItemsData.find((cartItem) => cartItem.id === fetchedCartItem.id)?.count ?? 0,
  }));

  return fetchedCartItemsWithCount;
};

const ListSection = ({ width, expansionBr, setDrawerOpen }) => {
  // Controller
  const {
    cartItems: cartItemsData,
    addToCart,
    deleteItem,
  } = React.useContext(CartContext);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      if (cartItemsData.length > 0) {
        const formattedCartItems = await getFormattedCartItems(cartItemsData);
        setCartItems(formattedCartItems);
      }
    })();
  }, [cartItemsData]);

  const total = cartItems.reduce((prevSum, { count, price }) => prevSum + count * price, 0);

  // View
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
            images,
            title,
            about,
            category,
            count,
            price,
            currency,
          }) => (
            <Item
              key={id}
              images={images}
              title={title}
              subtitle={about}
              textProps={[category.label]}
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
