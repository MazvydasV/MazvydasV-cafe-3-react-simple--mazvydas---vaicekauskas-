import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Navbar } from './components';
import HomePage from './pages/home-page';
import FamilyPage from './pages/family-page';
import ErrorPage from './pages/error-page';
import CartContext from './contexts/cart-context';

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);

  // React.useMemo( FUNKCIJA_KURI_GRĄŽINA_REIKŠMĘ, MASYVAS_SU_STEBIMAIS_KINTAMAISIAIS)
  // Kuomet keičiasi stebimi kintamieji, perskaičiuojama reikšmė kviečiant funkciją pirmu argumentu
  const cartContextValue = React.useMemo(() => ({
    cartItems,
    addToCart: (item) => {
      if (cartItems.find((x) => x.id === item.id)) {
        if (item.count === 0) {
          setCartItems(cartItems.filter((x) => x.id !== item.id));
        } else {
          setCartItems(cartItems.map((x) => (x.id === item.id ? { ...x, count: item.count } : x)));
        }
      } else {
        setCartItems([...cartItems, item]);
      }
    },
    getItemCount: (id) => cartItems.find((x) => x.id === id)?.count ?? 0,
    deleteItem: (id) => setCartItems(cartItems.filter((x) => x.id !== id)),
  }), [cartItems]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={cartContextValue}>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/family" element={<FamilyPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
