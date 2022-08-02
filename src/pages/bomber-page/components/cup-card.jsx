import * as React from 'react';
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  OutlinedInput,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';
import { Image, TypographyLimited } from '../../../components';
import CartContext from '../../../contexts/cart-context';

const CupCard = ({
  id,
  title,
  category,
  img,
  description,
}) => {
  const { addToCart, getItemCount, deleteItem } = React.useContext(CartContext);
  const itemCountInCart = getItemCount(id);
  const [count, setCount] = React.useState(itemCountInCart === 0 ? 1 : itemCountInCart);

  React.useEffect(() => {
    setCount(itemCountInCart === 0 ? 1 : itemCountInCart);
  }, [itemCountInCart]);

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
        <Image src={img} sx={{ position: 'absolute', top: 0, left: 0 }} />
      </Box>

      <CardContent sx={{ p: 2, flexGrow: 1 }}>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
        >
          <Typography variant="h5" component="div">{title}</Typography>
          <Typography variant="subtitle" component="div">{category}</Typography>
        </Box>
        <TypographyLimited variant="body2" color="text.secondary">{description}</TypographyLimited>
      </CardContent>

      <Box sx={{ p: 2, pt: 0 }}>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box sx={{ display: 'flex' }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                p: 0, height: 30, width: 30, minWidth: 0, borderRadius: 0, boxShadow: 'none',
              }}
              onClick={() => setCount(count - 1)}
              disabled={count <= 1}
            >
              -
            </Button>
            <OutlinedInput
              variant="contained"
              size="small"
              inputProps={{
                style: {
                  padding: 0, width: 30, minWidth: 0, textAlign: 'center',
                },
                value: count,
              }}
              readOnly
              sx={{ borderRadius: 0 }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                p: 0, height: 30, width: 30, minWidth: 0, borderRadius: 0, boxShadow: 'none',
              }}
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
          </Box>
          <Button
            size="small"
            variant="contained"
            sx={{ height: 30, flexGrow: 1 }}
            onClick={() => addToCart({ id, count })}
            disabled={count === itemCountInCart}
          >
            <ShoppingCartIcon />
          </Button>
          {itemCountInCart > 0 && (
            <Button
              size="small"
              variant="contained"
              color="error"
              sx={{ height: 30, width: 30, minWidth: 0 }}
              onClick={() => deleteItem(id)}
            >
              <ClearIcon />
            </Button>
          )}
        </Box>

        <Button size="small" variant="contained" fullWidth sx={{ mt: 1 }}>Peržiūrėti</Button>
      </Box>
    </Card>
  );
};

export default CupCard;
