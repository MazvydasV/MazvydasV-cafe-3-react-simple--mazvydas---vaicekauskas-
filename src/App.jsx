import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from 'routes/page-routes';
import { CartProvider } from './contexts/cart-context';

const App = () => (
  <BrowserRouter>
    <CartProvider>
      <PageRoutes />
    </CartProvider>
  </BrowserRouter>
);

export default App;
