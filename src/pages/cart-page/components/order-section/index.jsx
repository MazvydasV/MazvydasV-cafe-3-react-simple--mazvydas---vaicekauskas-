import React from 'react';
import {
  Box,
  Button,
  Drawer,
  useMediaQuery,
} from '@mui/material';

import { ContactFields, SecondaryFields, Wrapper } from './components';

const OrderSection = ({
  width,
  expansionBr,
  drawerOpen,
  setDrawerOpen,
}) => {
  const isLarge = useMediaQuery((theme) => theme.breakpoints.up(expansionBr));
  const [fullname, setFullname] = React.useState('Serbentautas Bordiūras');
  const [email, setEmail] = React.useState('');
  const [currency, setCurrency] = React.useState('USD');
  const [gender, setGender] = React.useState(null);
  const [subscribtion, setSubscribtion] = React.useState(true);

  return (

    <Drawer
      anchor="right"
      variant={isLarge ? 'persistent' : 'temporary'}
      open={isLarge || drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <Wrapper sx={{ width }}>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <ContactFields
            fullname={fullname}
            email={email}
            gender={gender}
            setFullname={setFullname}
            setEmail={setEmail}
            setGender={setGender}
          />

          <SecondaryFields
            currency={currency}
            subscribtion={subscribtion}
            setCurrency={setCurrency}
            setSubscribtion={setSubscribtion}
          />

          <Button type="submit" variant="contained" size="large">Užsakyti</Button>
        </Box>

      </Wrapper>
    </Drawer>
  );
};

export default OrderSection;
