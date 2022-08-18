import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from 'routes/page-routes';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { CartProvider } from './contexts/cart-context';

const App = () => (
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <BrowserRouter>
      <CartProvider>
        <PageRoutes />
      </CartProvider>
    </BrowserRouter>
  </LocalizationProvider>
);

export default App;
