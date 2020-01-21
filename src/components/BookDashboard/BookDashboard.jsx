import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import LoaderSpinner from '../LoaderSpinner';
import BookDescription from '../BookDescription';
import CartForm from '../CartForm';

const BookDashboard = ({
  getBook,
  removeSelectedBookFromStore,
  match,
  isLoading,
}) => {
  useEffect(() => {
    const { id } = match.params;
    getBook(id);
    return () => {
      removeSelectedBookFromStore();
    };
  }, [match, getBook, removeSelectedBookFromStore]);

  return (
    <section className="book-page-section">
      {isLoading && <LoaderSpinner className="loader-book" />}
      <BookDescription />
      <CartForm />
    </section>
  );
};

BookDashboard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  getBook: PropTypes.func.isRequired,
  removeSelectedBookFromStore: PropTypes.func.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default BookDashboard;
