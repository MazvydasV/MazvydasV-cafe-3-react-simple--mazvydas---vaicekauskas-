import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'layouts/main-layout';
import InnerLayout from 'layouts/inner-layout';
import RegisterPage from 'pages/register-page';
import HomePage from 'pages/home-page';
import CupShelfPage from 'pages/cup-shelf-page';
import PotteryPage from 'pages/pottery-page';
import CartPage from 'pages/cart-page';
import ErrorPage from 'pages/error-page';
import LoginPage from 'pages/login-page';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="cup-shelf" element={<CupShelfPage />} />
      <Route path="pottery" element={<PotteryPage />} />
      <Route path="cart" element={<CartPage />} />

      <Route path="auth/" element={<InnerLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default PageRoutes;
