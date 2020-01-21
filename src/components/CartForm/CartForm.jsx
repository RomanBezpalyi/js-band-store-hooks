import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const CartForm = ({ book, addBookToCart }) => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //     totalPrice: 0,
  //   };
  // }

  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleChange = ({ target: { value } }) => {
    if (Number(value) < 0) return;
    const { price } = book;
    setCount(Number(value));
    setTotalPrice(price * Number(value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { title, id } = book;

    addBookToCart({ count, totalPrice, title, id });
    toast.success('Books have been successfully added to cart.');
    setCount(0);
    setTotalPrice(0);
  };

  return (
    book && (
      <aside className="cart-aside">
        <h3 className="cart-aside__title">Order the book</h3>
        <form onSubmit={handleSubmit} className="cart-form">
          <div className="cart-form__wrapper">
            <p className="cart-form__subtitle">Price</p>
            <span>${book.price.toFixed(2)}</span>
          </div>
          <label htmlFor="count" className="cart-form__wrapper">
            Count
            <input
              id="count"
              type="number"
              className="form-control cart-form__input"
              value={count}
              min={0}
              max={book.count}
              onChange={handleChange}
            />
          </label>
          <div className="cart-form__wrapper">
            <p className="cart-form__subtitle">Total price</p>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button
            type="submit"
            className="btn base-btn cart-form-btn"
            disabled={count <= 0 || count > book.count}
          >
            Add to cart
          </button>
        </form>
      </aside>
    )
  );
};

CartForm.propTypes = {
  book: PropTypes.shape({
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  addBookToCart: PropTypes.func.isRequired,
};

CartForm.defaultProps = {
  book: null,
};

export default CartForm;
