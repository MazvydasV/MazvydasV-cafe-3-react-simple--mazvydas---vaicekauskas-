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
import { Image, TypographyLimited } from 'components';
import AmountField from 'components/amount-field';
import { useNavigate } from 'react-router-dom';
import useCart from 'hooks/useCart';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const CupCard = ({
  id,
  title,
  description,
  images,
  price,
  currency,
  liked,
  category,
  materialType,
  color,
  updateMug,
}) => {
  const navigate = useNavigate();
  const {
    getCartItemCount,
    addCartItem,
    changeCartItemCount,
    deleteCartItem,
  } = useCart();
  const itemCountInCart = getCartItemCount(id);
  const [count, setCount] = React.useState(itemCountInCart === 0 ? 1 : itemCountInCart);

  const handleCartItemChange = () => {
    if (itemCountInCart === 0) addCartItem({ id, count });
    else if (count === 0) deleteCartItem(id);
    else changeCartItemCount({ id, count });
  };

  React.useEffect(() => {
    setCount(itemCountInCart === 0 ? 1 : itemCountInCart);
  }, [itemCountInCart]);

  return (
    <Card sx={{
      display: 'flex', flexDirection: 'column', height: '100%', position: 'relative',
    }}
    >
      <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
        <Image src={(images && images[0]) ?? '/no-img.jpg'} sx={{ position: 'absolute', top: 0, left: 0 }} />
      </Box>

      <IconButton
        sx={{ position: 'absolute', top: 8, left: 8 }}
        onClick={() => updateMug({ id, liked: !liked })}
      >
        {liked ? <EmojiEmotionsIcon color="primary" /> : <InsertEmoticonIcon color="primary" />}
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
            onClick={handleCartItemChange}
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
              onClick={() => deleteCartItem(id)}
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
