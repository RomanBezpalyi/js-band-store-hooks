import React from 'react';
import PropTypes from 'prop-types';
import BackButton from '../BackButton';

const BookDescription = ({ book }) =>
  book && (
    <section className="thumbnail book-description-section">
      <div className="book-description-wrapper">
        <img
          alt="book cover"
          src={book.cover}
          className="img-thumbnail book-cover"
        />
        <div className="description-text-wrapper">
          <h2 className="book-title">{book.title}</h2>
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>
            <strong>Level:</strong> {book.level}
          </p>
          <p>
            <strong>Tags: </strong>
            {book.tags.map(tag => (
              <span className="label label-default tag" key={tag}>
                {tag}
              </span>
            ))}
          </p>
        </div>
      </div>
      <p className="description">{book.description}</p>
      <BackButton />
    </section>
  );

BookDescription.propTypes = {
  book: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    description: PropTypes.string.isRequired,
  }),
};

BookDescription.defaultProps = {
  book: null,
};

export default BookDescription;
