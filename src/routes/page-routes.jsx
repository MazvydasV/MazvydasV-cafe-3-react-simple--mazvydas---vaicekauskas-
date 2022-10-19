import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'layouts/main-layout';
import AuthLayout from 'layouts/auth-layout';
import RegisterPage from 'pages/register-page';
import HomePage from 'pages/home-page';
import CupShelfPage from 'pages/cup-shelf-page';
import CartPage from 'pages/cart-page';
import CupPage from 'pages/cup-page';
import ErrorPage from 'pages/error-page';
import LoginPage from 'pages/login-page';
import FunPage from 'pages/pottery-page/index';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="cup-shelf" element={<CupShelfPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="cup/:cupId" element={<CupPage />} />
      <Route path="pottery" element={<FunPage />} />

      <Route path="auth/" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default PageRoutes;
