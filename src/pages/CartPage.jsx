import React from 'react';
import Header from '../components/Header';
import CartDashboard from '../components/CartDashboard';

const CartPage = () => (
  <>
    <Header />
    <main className="main-content">
      <CartDashboard />
    </main>
  </>
);

export default CartPage;
