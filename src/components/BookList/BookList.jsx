import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import LoaderSpinner from '../LoaderSpinner';
import BookListItem from '../BookListItem';

const BookList = ({ getBooks, books, isLoading, authentificated }) => {
  useEffect(() => {
    if (!books.length && authentificated) getBooks();
  }, [getBooks, books.length, authentificated]);

  return (
    <>
      {isLoading && <LoaderSpinner />}
      <ul className="list-unstyled container book-list">
        {books.map(book => (
          <li key={book.id} className="col-xs-12 col-sm-6 col-md-4">
            <BookListItem {...book} />
          </li>
        ))}
      </ul>
    </>
  );
};

BookList.propTypes = {
  getBooks: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
  ),
  isLoading: PropTypes.bool.isRequired,
  authentificated: PropTypes.bool.isRequired,
};

BookList.defaultProps = {
  books: [],
};

export default BookList;
