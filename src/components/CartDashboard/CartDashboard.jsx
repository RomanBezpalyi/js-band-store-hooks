import React from 'react';
import PropTypes from 'prop-types';
import BackButton from '../BackButton';
import CartTable from '../CartTable';

const CartDashboard = ({ books, handlePurchase }) => (
  <section className="cart-page-section">
    <div className="cart-page__btn-wrapper">
      <BackButton />
      <button
        type="button"
        onClick={handlePurchase}
        disabled={!books.length}
        className="btn base-btn"
      >
        Purchase
      </button>
    </div>
    {!books.length && (
      <div className="cart-page__empty-wrapper">
        <h2 className="cart-page__empty-wrapper-text">Cart is empty...</h2>
      </div>
    )}
    <CartTable books={books} />
    {books.length > 0 && (
      <p className="cart-page__total-price">
        Total price: $
        {Number(books.reduce((sum, book) => sum + book.totalPrice, 0)).toFixed(
          2,
        )}
      </p>
    )}
  </section>
);

CartDashboard.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      totalPrice: PropTypes.number.isRequired,
    }).isRequired,
  ),
  handlePurchase: PropTypes.func.isRequired,
};

CartDashboard.defaultProps = {
  books: [],
};

export default CartDashboard;
