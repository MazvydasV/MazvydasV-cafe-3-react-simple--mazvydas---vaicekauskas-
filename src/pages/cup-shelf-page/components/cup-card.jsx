import * as React from 'react';
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Chip,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Image, TypographyLimited } from 'components';
import CartContext from 'contexts/cart-context';
import AmountField from 'components/amount-field';
import { useNavigate } from 'react-router-dom';

const CupCard = ({
  id,
  title,
  description,
  img,
  price,
  currency,
  liked,
  category,
  materialType,
  color,
  updateMug,
}) => {
  const navigate = useNavigate();
  const { addToCart, getItemCount, deleteItem } = React.useContext(CartContext);
  const itemCountInCart = getItemCount(id);
  const [count, setCount] = React.useState(itemCountInCart === 0 ? 1 : itemCountInCart);

  React.useEffect(() => {
    setCount(itemCountInCart === 0 ? 1 : itemCountInCart);
  }, [itemCountInCart]);

  return (
    <Card sx={{
      display: 'flex', flexDirection: 'column', height: '100%', position: 'relative',
    }}
    >
      <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
        <Image src={img} sx={{ position: 'absolute', top: 0, left: 0 }} />
      </Box>

      <IconButton
        sx={{ position: 'absolute', top: 8, left: 8 }}
        onClick={() => updateMug({ id, liked: !liked })}
      >
        {liked ? <FavoriteIcon color="primary" /> : <FavoriteBorderIcon color="primary" />}
      </IconButton>

      <CardContent sx={{ p: 2, flexGrow: 1 }}>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        >
          <Typography variant="h6" component="div">{title}</Typography>
          <Typography variant="h6" component="div" color="primary">{`${price} ${currency}`}</Typography>
        </Box>
        <Typography variant="subtitle" component="div">{category.label}</Typography>
        <Box sx={{ display: 'flex', gap: 1, my: 1 }}>
          {[materialType.label, color.label].map((label) => (
            <Chip
              key={label}
              label={label}
              color="primary"
              size="small"
              sx={{ borderRadius: 1 }}
            />
          ))}
        </Box>
        <TypographyLimited variant="body2" color="text.secondary">{description}</TypographyLimited>
      </CardContent>

      <Box sx={{ p: 2, pt: 0 }}>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <AmountField
            amount={count}
            onDec={() => setCount(count - 1)}
            onInc={() => setCount(count + 1)}
            min={1}
          />
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

        <Button
          size="small"
          variant="contained"
          fullWidth
          sx={{ mt: 1 }}
          onClick={() => navigate(`/cup/${id}`)}
        >
          Peržiūrėti
        </Button>
      </Box>
    </Card>
  );
};

export default CupCard;
