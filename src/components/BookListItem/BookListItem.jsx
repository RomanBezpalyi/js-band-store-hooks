import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookListItem = ({ cover, title, author, price, id }) => (
  <section className="thumbnail list-item">
    <img alt="book cover" src={cover} className="img-thumbnail img-book" />
    <h3 className="h3 book-list-heading mb-1">{title}</h3>
    <p>{author}</p>
    <div className="item-wrapper">
      <p>
        <strong>Price: {price.toFixed(2)}$</strong>
      </p>
      <Link to={`/books/${id}`}>
        <button type="button" className="btn list-item-btn">
          View
        </button>
      </Link>
    </div>
  </section>
);

BookListItem.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookListItem;
